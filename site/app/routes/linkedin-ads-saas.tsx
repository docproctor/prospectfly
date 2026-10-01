import { useEffect, useRef, useState } from "react";
import type { ActionFunctionArgs, MetaFunction } from "react-router";
import { data, Form, redirect, useActionData, useNavigation } from "react-router";
import { CheckIcon } from "../components/check-icon";
import { Faq, faqJsonLd, type FaqItem } from "../components/faq";
import { BOOKING_URL } from "../lib/booking";
import { ACV_BANDS, ATTRIBUTION_KEYS } from "../lib/leads";
import { getSupabaseAdmin } from "../lib/supabase-admin.server";

// Ad landing page for LinkedIn traffic. Not linked from anywhere, noindex.
// Every submission is saved before the redirect, so a lead who never finishes
// booking still exists.

const LEAD_SOURCE = "prospectfly_lp_linkedin";
const NOT_YET_PATH = "/linkedin-ads-saas/not-yet";
const STORAGE_KEY = "pf_lp_attribution";
const HONEYPOT = "company_fax";
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

const faqs: FaqItem[] = [
  {
    question: "What does it cost?",
    answer:
      "The audit is free. If we work together, management is £750 to £1,500 a month, depending on how much has to be built from scratch. Media is at least £1,000 a month, paid directly to LinkedIn — never through me and never marked up. Scope and price are agreed in writing after the audit.",
  },
  {
    question: "How long before anything happens?",
    answer:
      "Tracking and the first campaigns are live inside two weeks. You'll have real data on which message works by about week four. A cost per qualified conversation you can plan against takes six to eight weeks, because it needs enough conversations to be more than a coincidence.",
  },
  {
    question: "What if we've tried ads before and it didn't work?",
    answer:
      "That's the common case. Most accounts I look at failed for one of three reasons: the audience was far too large for the budget, the conversion being counted wasn't a real conversation, or the campaign objective told LinkedIn to optimise for the wrong thing. None of those mean the channel doesn't work for you — and finding out which one it was takes about ten minutes of the audit.",
  },
];

const stages = [
  {
    num: 1,
    title: "Audit",
    when: "30 minutes, free",
    description: "What I'd change, in what order, and whether this is worth doing for you at all.",
  },
  {
    num: 2,
    title: "Build",
    when: "Weeks 1–2",
    description: "Tracking built and verified. Audiences sized against the budget. Three to five messages written and built as ads.",
  },
  {
    num: 3,
    title: "Run",
    when: "Weeks 3–6",
    description: "Budget split across the messages. Losing ones switched off as the evidence arrives.",
  },
  {
    num: 4,
    title: "Grow",
    when: "Week 6 onwards",
    description: "Budget concentrates behind what's working. One number a month: what a qualified conversation cost.",
  },
];

const notFor = [
  "Contracts under £10,000 a year",
  "Under £1,000 a month of media, separate from management",
  "Pre-revenue, still working out what the product is",
  "Anyone who wants a guaranteed number before I've seen the account",
];

export const meta: MetaFunction = () => [
  { title: "LinkedIn customer acquisition for UK B2B SaaS — ProspectFly" },
  {
    name: "description",
    content:
      "A free 30-minute LinkedIn ads audit for UK B2B SaaS companies with contracts above £10,000 a year.",
  },
  { name: "robots", content: "noindex, nofollow" },
  { "script:ld+json": faqJsonLd(faqs) },
];

type FieldErrors = Partial<Record<"name" | "email" | "company_url" | "annual_contract_value" | "form", string>>;

type ActionResult = {
  errors: FieldErrors;
  values: Record<string, string>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_PATTERN = /^(https?:\/\/)?[^\s/]+\.[^\s]+$/i;

async function hashIp(ip: string) {
  const salt = process.env.LEAD_IP_SALT || "prospectfly-leads";
  const bytes = new TextEncoder().encode(`${salt}:${ip}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const field = (key: string, max = 500) => String(form.get(key) ?? "").trim().slice(0, max);

  // Bots fill every field. Send them where a person would go and save nothing.
  if (field(HONEYPOT)) return redirect(BOOKING_URL);

  const values = {
    name: field("name", 100),
    email: field("email", 200),
    company_url: field("company_url", 200),
    annual_contract_value: field("annual_contract_value", 50),
    message: field("message", 2000),
  };

  const errors: FieldErrors = {};
  if (!values.name) errors.name = "Please add your name.";
  if (!EMAIL_PATTERN.test(values.email)) errors.email = "Please add a valid work email.";
  if (!URL_PATTERN.test(values.company_url)) errors.company_url = "Please add your company website, e.g. yourcompany.com.";
  const band = ACV_BANDS.find((b) => b.value === values.annual_contract_value);
  if (!band) errors.annual_contract_value = "Please choose your average annual contract value.";

  if (Object.keys(errors).length > 0) {
    return data<ActionResult>({ errors, values }, { status: 400 });
  }

  // Attribution comes from hidden fields (sessionStorage, set on arrival). If
  // JavaScript didn't run, fall back to the query string the form posted to.
  const postedTo = new URL(request.url);
  const attribution: Record<string, string | null> = {};
  for (const key of ATTRIBUTION_KEYS) {
    attribution[key] = field(key) || postedTo.searchParams.get(key)?.slice(0, 500) || null;
  }
  const referrer = field("referrer") || null;
  const landingPath = field("landing_path") || `${postedTo.pathname}${postedTo.search}`.slice(0, 500);

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  try {
    const supabase = getSupabaseAdmin();
    const ipHash = await hashIp(ip);

    const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();
    const { count, error: countError } = await supabase
      .from("pf_site_leads")
      .select("id", { count: "exact", head: true })
      .eq("ip_hash", ipHash)
      .gte("created_at", since);
    if (countError) throw countError;
    if ((count ?? 0) >= RATE_LIMIT_MAX) {
      return data<ActionResult>(
        { errors: { form: "Too many submissions from this connection. Please try again in a few minutes." }, values },
        { status: 429 }
      );
    }

    const { error: insertError } = await supabase.from("pf_site_leads").insert({
      name: values.name,
      email: values.email,
      company_url: values.company_url,
      annual_contract_value: values.annual_contract_value,
      message: values.message || null,
      source: LEAD_SOURCE,
      ...attribution,
      referrer,
      landing_path: landingPath,
      ip_hash: ipHash,
    });
    if (insertError) throw insertError;
  } catch (err) {
    console.error("[linkedin-ads-saas] lead capture failed", err);
    return data<ActionResult>(
      { errors: { form: "Something went wrong saving your details. Please try again." }, values },
      { status: 500 }
    );
  }

  if (!band!.qualified) return redirect(NOT_YET_PATH);

  // Calendly prefills name and email, and records UTMs against the booking.
  const booking = new URL(BOOKING_URL);
  booking.searchParams.set("name", values.name);
  booking.searchParams.set("email", values.email);
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const) {
    const value = attribution[key];
    if (value) booking.searchParams.set(key, value);
  }
  return redirect(booking.toString());
}

/** Capture attribution on arrival. A fresh ad click overwrites; otherwise keep what this tab already has. */
function useAttribution() {
  const [attribution, setAttribution] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl: Record<string, string> = {};
    for (const key of ATTRIBUTION_KEYS) {
      const value = params.get(key);
      if (value) fromUrl[key] = value;
    }

    let stored: Record<string, string> | null = null;
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      stored = raw ? JSON.parse(raw) : null;
    } catch {
      stored = null;
    }

    const next =
      Object.keys(fromUrl).length > 0 || !stored
        ? {
            ...fromUrl,
            referrer: document.referrer,
            landing_path: `${window.location.pathname}${window.location.search}`,
          }
        : stored;

    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Storage blocked (private mode etc.) — the hidden fields still carry it.
    }
    setAttribution(next);
  }, []);

  return attribution;
}

const inputClass =
  "w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white text-[15px] placeholder-gray-500 focus:outline-none focus:border-lime-400/60";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-red-400 text-sm mt-1.5">{message}</p>;
}

function LeadForm() {
  const result = useActionData<typeof action>();
  const navigation = useNavigation();
  const attribution = useAttribution();
  const submitting = navigation.state !== "idle" && navigation.formMethod === "POST";
  const errors = result?.errors ?? {};
  const values = result?.values ?? {};

  const trackSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const band = new FormData(e.currentTarget).get("annual_contract_value");
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "lead_submit", lead_source: LEAD_SOURCE, acv_band: band });
  };

  return (
    <Form method="post" onSubmit={trackSubmit} className="space-y-4">
      {/* Honeypot: hidden from people, irresistible to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor={HONEYPOT}>Fax number</label>
        <input type="text" id={HONEYPOT} name={HONEYPOT} tabIndex={-1} autoComplete="off" />
      </div>

      {[...ATTRIBUTION_KEYS, "referrer", "landing_path"].map((key) => (
        <input key={key} type="hidden" name={key} value={attribution[key] ?? ""} />
      ))}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          defaultValue={values.name}
          className={inputClass}
        />
        <FieldError message={errors.name} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={values.email}
          className={inputClass}
        />
        <FieldError message={errors.email} />
      </div>

      <div>
        <label htmlFor="company_url" className="block text-sm font-medium text-gray-300 mb-1.5">
          Company website
        </label>
        <input
          id="company_url"
          name="company_url"
          type="text"
          inputMode="url"
          required
          autoComplete="url"
          placeholder="yourcompany.com"
          defaultValue={values.company_url}
          className={inputClass}
        />
        <FieldError message={errors.company_url} />
      </div>

      <div>
        <label htmlFor="annual_contract_value" className="block text-sm font-medium text-gray-300 mb-1.5">
          Average annual contract value
        </label>
        <div className="relative">
          <select
            id="annual_contract_value"
            name="annual_contract_value"
            required
            defaultValue={values.annual_contract_value ?? ""}
            className={`${inputClass} cursor-pointer appearance-none pr-10`}
          >
            <option value="" disabled>
              Choose one
            </option>
            {ACV_BANDS.map((band) => (
              <option key={band.value} value={band.value}>
                {band.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8a9099] text-xs">▼</span>
        </div>
        <FieldError message={errors.annual_contract_value} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
          Anything useful to know? <span className="text-gray-500 font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          defaultValue={values.message}
          className={`${inputClass} resize-y`}
        />
      </div>

      {errors.form && <p className="text-red-400 text-sm">{errors.form}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-lime-400 text-black font-display font-semibold text-[16px] py-4 rounded-full hover:bg-lime-300 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Booking…" : "Book my audit →"}
      </button>

      <p className="text-xs text-gray-500 leading-relaxed">
        Next you'll pick a time in my calendar. Your details are used only to prepare for and arrange
        the call —{" "}
        <a
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300 cursor-pointer"
        >
          privacy policy
        </a>
        .
      </p>
    </Form>
  );
}

/** Mobile-only button that scrolls to the form, hidden while the form is on screen. */
function StickyCta({ formRef }: { formRef: React.RefObject<HTMLDivElement | null> }) {
  const [formVisible, setFormVisible] = useState(true);

  useEffect(() => {
    const el = formRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), {
      threshold: 0.1,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [formRef]);

  return (
    <div
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 p-4 bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/5 transition-transform duration-200 ${
        formVisible ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <a
        href="#lead-form"
        className="block w-full text-center bg-lime-400 text-black font-display font-semibold py-3.5 rounded-full hover:bg-lime-300 transition-colors cursor-pointer"
      >
        Book my audit →
      </a>
    </div>
  );
}

export default function LinkedInAdsSaas() {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-24 lg:pb-0">
      <header className="h-16 flex items-center border-b border-white/5 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight">
            Prospect<span className="text-amber-500">Fly</span>
          </span>
        </div>
      </header>

      {/* Hero + form */}
      <section className="pt-10 lg:pt-14 pb-12 px-6">
        {/* Mobile order: copy, form, offer. Desktop: copy and offer left, form right. */}
        <div className="max-w-4xl mx-auto grid lg:grid-cols-[1fr_380px] lg:grid-rows-[auto_1fr] gap-x-12 gap-y-8 items-start">
          <div className="lg:col-start-1 lg:row-start-1">
            <h1 className="font-display text-[34px]! lg:text-[44px]! font-bold leading-[1.1]! tracking-tight mb-5">
              Your first customers came from your network. The next hundred won't.
            </h1>
            <p className="text-[17px] text-gray-400 leading-relaxed mb-4 lg:mb-0">
              LinkedIn customer acquisition for UK B2B SaaS. One person doing the three jobs you'd
              normally buy from three suppliers — the tracking, the creative and the media buying —
              after 25 years building the products being sold.
            </p>
            <p className="lg:hidden font-display font-semibold text-lime-400">
              Free 30-minute audit. No pitch, no obligation.
            </p>
          </div>

          <div
            id="lead-form"
            ref={formRef}
            className="lg:col-start-2 lg:row-start-1 lg:row-span-2 scroll-mt-6 bg-[#16191f] border border-[#1e2229] rounded-2xl p-6"
          >
            <LeadForm />
          </div>

          <div className="lg:col-start-1 lg:row-start-2 border-l-2 border-lime-400 pl-5">
              <p className="font-display font-semibold text-lg text-white mb-3">
                A free 30-minute audit.
              </p>
              <ul className="space-y-2.5 text-[15px] text-gray-400 leading-relaxed">
                <li className="flex gap-3">
                  <CheckIcon className="w-5 h-5 text-lime-400 mt-0.5" />
                  <span>
                    I look at your LinkedIn account while we talk — or a competitor's, if you haven't
                    started.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon className="w-5 h-5 text-lime-400 mt-0.5" />
                  <span>
                    You leave with what I'd change, in what order, and an honest answer on whether
                    it's worth doing at all.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon className="w-5 h-5 text-lime-400 mt-0.5" />
                  <span>No pitch, no deck, no obligation.</span>
                </li>
              </ul>
          </div>

        </div>
      </section>

      {/* Credibility */}
      <section className="pt-10 pb-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl! lg:text-[36px]! font-bold tracking-tight mb-6">
            Why one person instead of three suppliers
          </h2>
          <div className="space-y-5 text-[17px] text-gray-400 leading-relaxed max-w-2xl">
            <p>
              The usual way to buy this is a developer for the tracking, an agency for the campaigns
              and someone else for the creative. When it isn't working, the reason lives in the gaps
              between them.
            </p>
            <p>
              I've done all three jobs. Ex-developer and ex-designer, so I build the tracking and make
              the ads myself. Five years at Hearst in advertising creative solutions. 17 years buying
              Google and Meta before specialising in LinkedIn. And 25 years building products, which
              is why I start from what you're selling rather than from how to buy impressions for it.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="pt-10 pb-12 px-6 border-t border-white/5 bg-[#111318]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl! lg:text-[36px]! font-bold tracking-tight mb-8">
            How it works
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {stages.map((stage) => (
              <div key={stage.num} className="bg-[#16191f] border border-[#1e2229] rounded-2xl p-5">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display font-bold text-cyan-400">0{stage.num}</span>
                  <span className="font-display font-semibold text-lg">{stage.title}</span>
                  <span className="text-xs text-gray-500 ml-auto">{stage.when}</span>
                </div>
                <p className="text-[15px] text-gray-400 leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this isn't for */}
      <section className="pt-10 pb-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl! lg:text-[36px]! font-bold tracking-tight mb-6">
            Who this isn't for
          </h2>
          <ul className="space-y-3 mb-8">
            {notFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-400 text-[15px]">
                <span className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center text-gray-600">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[17px] text-gray-300 leading-relaxed max-w-2xl">
            This works when a customer is worth £10,000 or more a year. Below that, LinkedIn's cost
            per lead eats your margin and no amount of good creative fixes it. I'd rather say so now
            than take the work.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-10 pb-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl! lg:text-[36px]! font-bold tracking-tight mb-8">
            Questions people ask first
          </h2>
          <Faq items={faqs} />
        </div>
      </section>

      {/* Repeat CTA — back to the form, never around it */}
      <section className="pt-12 pb-16 px-6 border-t border-white/5 bg-[#111318]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl! lg:text-[36px]! font-bold tracking-tight mb-4">
            Book a free 30-minute audit.
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            You leave with what I'd change, in what order, and an honest answer on whether I'd take
            it on.
          </p>
          <a
            href="#lead-form"
            className="inline-block bg-lime-400 text-black px-8 py-4 rounded-full font-display font-semibold text-[15px] hover:bg-lime-300 transition-colors cursor-pointer"
          >
            Book my audit →
          </a>
        </div>
      </section>

      <StickyCta formRef={formRef} />
    </div>
  );
}

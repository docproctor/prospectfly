import { useEffect, useState } from "react";
import type { ActionFunctionArgs, MetaFunction } from "react-router";
import { data, Form, redirect, useActionData, useNavigation } from "react-router";
import { CheckIcon } from "../components/check-icon";
import { ACV_BANDS, ATTRIBUTION_KEYS } from "../lib/leads";
import { getSupabaseAdmin } from "../lib/supabase-admin.server";

// Ad landing page for LinkedIn traffic. Not linked from anywhere, noindex.
// The offer is a personalised Loom on the visitor's competitors' LinkedIn ads.
// Every submission is saved; qualified leads land on /thanks (the LinkedIn
// conversion URL), sub-£10k leads on /not-yet.

const LEAD_SOURCE = "prospectfly_lp_linkedin";
const THANKS_PATH = "/linkedin-ads-saas/thanks";
const NOT_YET_PATH = "/linkedin-ads-saas/not-yet";
const STORAGE_KEY = "pf_lp_attribution";
const HONEYPOT = "company_fax";
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

const whatYouGet = [
  "A 5-minute video, recorded for your company specifically.",
  "Every LinkedIn ad your competitors are currently running, and why most of them can't produce a lead.",
  "If nobody in your category is advertising, I'll tell you that instead — and what it means.",
];

export const meta: MetaFunction = () => [
  { title: "Your competitors' LinkedIn ads, reviewed — ProspectFly" },
  {
    name: "description",
    content:
      "Give me your website and I'll send you a video going through every LinkedIn ad your competitors are running.",
  },
  { name: "robots", content: "noindex, nofollow" },
];

type FieldErrors = Partial<Record<"name" | "email" | "company_url" | "annual_contract_value" | "form", string>>;

type ActionResult = {
  errors: FieldErrors;
  values: Record<string, string>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// A bare domain with an optional path. No "@", so a pasted email is rejected.
const DOMAIN_PATTERN = /^[a-z0-9-]+(\.[a-z0-9-]+)+(\/\S*)?$/i;

/** "https://www.Acme.com/" → "acme.com/" → "acme.com" — stored clean so it's easy to research. */
function normaliseCompanyUrl(raw: string) {
  return raw
    .replace(/^https?:\/\//i, "")
    .replace(/^www\./i, "")
    .replace(/\/+$/, "")
    .replace(/^[^/]+/, (host) => host.toLowerCase());
}

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
  if (field(HONEYPOT)) return redirect(THANKS_PATH);

  const values = {
    name: field("name", 100),
    email: field("email", 200),
    company_url: normaliseCompanyUrl(field("company_url", 200)),
    annual_contract_value: field("annual_contract_value", 50),
    message: field("message", 2000),
  };

  const errors: FieldErrors = {};
  if (!values.name) errors.name = "Please add your name.";
  if (!EMAIL_PATTERN.test(values.email)) errors.email = "Please add a valid work email.";
  if (!DOMAIN_PATTERN.test(values.company_url)) errors.company_url = "Please add your company website, e.g. yourcompany.com.";
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

  return redirect(band!.qualified ? THANKS_PATH : NOT_YET_PATH);
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
        <input type="text" id={HONEYPOT} name={HONEYPOT} tabIndex={-1} autoComplete="off" aria-hidden="true" />
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
          rows={2}
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
        {submitting ? "Sending…" : "Send me the Loom →"}
      </button>

      <p className="text-sm text-gray-400 leading-relaxed">
        This is worth your time if a customer is worth £10,000 or more a year to you. Below that, the
        maths on LinkedIn doesn't work and I'll say so rather than sell you something.
      </p>

      <p className="text-xs text-gray-500 leading-relaxed">
        Your details are used only to make and send your video —{" "}
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

export default function LinkedInAdsSaas() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="h-16 flex items-center border-b border-white/5 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight">
            Prospect<span className="text-amber-500">Fly</span>
          </span>
        </div>
      </header>

      <section className="pt-8 lg:pt-11 pb-12 px-6">
        {/* Mobile order: hero, what you get, form, who. Desktop: copy left, form right. */}
        <div className="max-w-4xl mx-auto grid lg:grid-cols-[1fr_380px] lg:grid-rows-[auto_auto_1fr] gap-x-12 gap-y-7 items-start">
          <div className="lg:col-start-1 lg:row-start-1">
            <h1 className="font-display text-[34px]! lg:text-[44px]! font-bold leading-[1.1]! tracking-tight mb-5">
              Every LinkedIn ad your competitors are running is public.
            </h1>
            <p className="text-[17px] text-gray-400 leading-relaxed mb-4">
              Give me your website and I'll send you a video going through all of it — what they're
              running, where it's leaking, and what it would cost you to do it properly.
            </p>
            <p className="font-display font-semibold text-lime-400">
              Within two working days. No call, no deck.
            </p>
          </div>

          <ul className="lg:col-start-1 lg:row-start-2 space-y-2.5 text-[15px] text-gray-300 leading-relaxed">
            {whatYouGet.map((line) => (
              <li key={line} className="flex gap-3">
                <CheckIcon className="w-5 h-5 text-lime-400 mt-0.5" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <div
            id="lead-form"
            className="lg:col-start-2 lg:row-start-1 lg:row-span-3 bg-[#16191f] border border-[#1e2229] rounded-2xl p-6"
          >
            <LeadForm />
          </div>

          <div className="lg:col-start-1 lg:row-start-3 flex items-center gap-4">
            <img
              src="/mark-proctor.webp"
              alt="Mark Proctor"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              <span className="text-white font-medium">Mark Proctor.</span> Founder - ProspectFly.
              <br />
              25 Years A Digital Veteran
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

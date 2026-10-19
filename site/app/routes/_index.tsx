import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { CheckIcon } from "../components/check-icon";
import { CtaBand } from "../components/cta-band";
import { Faq, faqJsonLd, type FaqItem } from "../components/faq";
import { BOOKING_LABEL, BOOKING_URL } from "../lib/booking";

const faqs: FaqItem[] = [
  {
    question: "How long before we see anything?",
    answer:
      "Tracking and the first outbound or paid campaigns are live inside two weeks. You'll have real data on which message works by about week four. A cost per customer you can plan growth around takes six to eight weeks, because it needs enough results to be more than a coincidence. Fixes further down the funnel — onboarding, churn, expansion — run alongside once we can see where customers drop out.",
  },
  {
    question: "Is this ads, outbound, or something else?",
    answer:
      "Whichever channel fits what you sell. For most B2B businesses that's a mix of cold outbound and paid ads on LinkedIn, Meta or Google, with automation doing the repetitive work in between. We don't start from a favourite channel. We start from what a customer is worth and work backwards.",
  },
  {
    question: "What if we've already tried this and it didn't work?",
    answer:
      "That is the common case. Most failed attempts we look at broke in one of three places: the audience or list was far too broad, the thing being counted wasn't a real lead, or the leads came in and nobody followed them through to revenue. None of those mean growth isn't possible for you — and finding out which one it was takes about ten minutes of the audit.",
  },
  {
    question: "Who actually does the work?",
    answer:
      "Mark Proctor, our founder, leads every account. There's no handover to a junior you've never met and no account manager relaying messages. That's the point of it, and it's also the honest limit on how many clients we take on at once.",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "B2B growth agency — outbound, paid ads & automation | ProspectFly" },
    {
      name: "description",
      content:
        "ProspectFly is a B2B growth agency. We own the whole loop — acquisition, activation, retention and revenue — using cold outbound, paid ads and AI automation.",
    },
    { "script:ld+json": faqJsonLd(faqs) },
  ];
};

const notThis = [
  {
    title: "Not a single channel",
    description:
      "We don't sell ads or outbound as a product. Channels are tools for a number, not the number.",
  },
  {
    title: "Not a content retainer",
    description:
      "Nobody trying to grow needs another twelve posts a month that nobody reads.",
  },
  {
    title: "Not a dashboard",
    description:
      "A dashboard describes the problem. It has never once solved it.",
  },
];

const goodFit = [
  "An established B2B business with something people already buy",
  "A customer worth enough that paying to win one makes sense",
  "The owner, CEO or MD is in the room when this gets decided",
  "A budget to test with, separate from management",
  "Someone answers an enquiry inside a working day",
];

const notGoodFit = [
  "Pre-revenue, still working out what you sell",
  "Margins too thin to pay for a new customer",
  "No budget to test with — there isn't enough data to learn from, and we'd be charging you to find that out",
  "You need ten customers by next week",
  "Anyone who wants a guaranteed number before we've seen the business",
];

const loop = [
  {
    title: "Acquisition",
    description:
      "Cold outbound and paid ads on LinkedIn, Meta and Google, run against one agreed definition of a lead.",
  },
  {
    title: "Activation",
    description:
      "Shorten the gap between first contact and first value — the call booked, the trial started, the first result seen.",
  },
  {
    title: "Retention",
    description:
      "Find where customers quietly drift away, and fix onboarding and engagement before it shows up as churn.",
  },
  {
    title: "Referral & expansion",
    description:
      "Give happy customers a reason to bring more accounts, more seats and more colleagues with them.",
  },
  {
    title: "Revenue",
    description:
      "Pricing, packaging and the sales follow-through that turns all of the above into money in the bank.",
  },
];

const method = [
  {
    heading: "“Cost per lead” means nothing until you say which lead",
    body: [
      "A form fill, a reply to a cold email, a booked call, and a customer who actually signs are four different things. On the same channel, with the same spend, they can differ by twenty times.",
      "So “our cost per lead is £40” isn't a fact about your business. It's a fact about which rung of that ladder somebody decided to count. The further down the ladder you count, the better a report reads and the less it means.",
      "The first thing we do is agree which rung we're counting. Then it never moves, including in the months when moving it would flatter us.",
    ],
    link: {
      to: "/resources/linkedin-tracking-attribution",
      label: "How we set up tracking and attribution",
    },
  },
  {
    heading: "Most growth problems aren't acquisition problems",
    body: [
      "When growth stalls, the instinct is to buy more leads. But if one in five customers leaves every month, you're refilling a bucket with a hole in it, and every extra pound of acquisition just makes the hole more expensive.",
      "On our own products we cut monthly churn from 20% to 11% by rebuilding onboarding and scoring account health — which nearly doubled how long a customer stayed and lifted lifetime value by 80%. No new leads required.",
      "So we look at the whole funnel before deciding where the next pound goes. Sometimes it's the top. Often it isn't.",
    ],
  },
  {
    heading: "Automation should do the work nobody wants to do",
    body: [
      "List building, enrichment, email verification, follow-up sequences, lead routing, reporting. Most B2B teams do these by hand, badly, in the gaps between their actual jobs.",
      "We build that plumbing with outbound tools, n8n and LLMs, so the repetitive work runs on its own and people spend their time on conversations that might close.",
      "AI is useful here precisely because it's unglamorous: it removes hours, not judgement.",
    ],
  },
];

const stages = [
  {
    num: 1,
    title: "Audit",
    when: "30 minutes, free",
    description:
      "We look at your funnel while we talk — where leads come from, where they stall, and where customers leave. You leave with what we'd change and in what order, and whether we think we're the right people to do it.",
  },
  {
    num: 2,
    title: "Build",
    when: "Weeks 1–2",
    description:
      "Tracking built and verified. Lists and audiences built and sized against the budget. Outbound sequences and ads written. Automation wired in. Agreement in writing on which conversion we're counting.",
  },
  {
    num: 3,
    title: "Run",
    when: "Weeks 3–6",
    description:
      "Live, with effort split across messages and channels. A short note each week on what's moving. Losing messages get switched off as the evidence arrives, not on a reporting schedule.",
  },
  {
    num: 4,
    title: "Grow",
    when: "Week 6 onwards",
    description:
      "Budget concentrates behind what's working, and attention moves down the funnel — activation, retention and expansion. One number a month — what a new customer cost and what they're worth — with the working shown underneath.",
  },
];

export default function Index() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* 1. Hero */}
      <section className="pt-32 pb-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-[42px] lg:text-[58px] font-bold leading-[1.08] tracking-tight mb-6 max-w-3xl">
            B2B growth, owned end to end.
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed mb-9 max-w-2xl">
            Acquisition, activation, retention and revenue, from one team that
            owns the whole loop rather than one slice of it. Cold outbound, paid
            ads and AI automation, led by 25 years in digital product and growth.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-lime-400 text-black px-8 py-4 rounded-full font-display font-semibold text-[15px] hover:bg-lime-300 transition-colors cursor-pointer"
          >
            {BOOKING_LABEL} →
          </a>
        </div>
      </section>

      {/* Credential strip */}
      <section className="py-6 px-6 border-t border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span>25 Years Experience</span>
            <span className="text-[#1e2229]">|</span>
            <span>50,000+ Booked Meetings in 27 niches</span>
            <span className="text-[#1e2229]">|</span>
            <span>£0 to £30k MRR on our own products</span>
          </div>
        </div>
      </section>

      {/* 2. The stage */}
      <section className="pt-12 pb-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-[38px] font-bold tracking-tight mb-8">
            Three things are usually true at once.
          </h2>
          <div className="space-y-5 text-[17px] text-gray-400 leading-relaxed max-w-2xl">
            <p>
              Referrals and the founder's network still bring most customers in,
              but they arrive in clumps. A good month, then a quiet one. You can't
              plan growth around it and you can't forecast from it.
            </p>
            <p>
              Somebody has tried outbound or ads. It produced some meetings, a few
              enquiries from people who were never going to buy, and a tool
              subscription nobody logs into any more.
            </p>
            <p>
              And the customers you do win don't all stay. Some churn quietly in
              the first few months, and nobody is quite sure why.
            </p>
            <p className="text-gray-300">
              None of that means growth isn't possible for you. It usually means
              nobody owned the whole number.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The number nobody owns */}
      <section className="pt-10 pb-10 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-[38px] font-bold tracking-tight mb-8">
            The number nobody owns
          </h2>
          <div className="space-y-5 text-[17px] text-gray-400 leading-relaxed max-w-2xl">
            <p>
              In most B2B businesses, marketing owns leads, sales owns deals, and
              customer success owns renewals. What it costs to win a customer, and
              what that customer is worth by the time they leave, sits across all
              three and belongs to nobody.
            </p>
            <p>
              So the questions that decide whether growth works never get
              answered. What is a new customer actually worth to us? Where in the
              funnel are we losing the most? Is the next £1,000 better spent
              finding new customers or keeping the ones we have, and how would we
              know either way?
            </p>
            <p>
              Nobody is being lazy. The question spans three departments and needs
              someone who can read the data in all of them, and most businesses
              don't have that person on the payroll.
            </p>
          </div>
        </div>
      </section>

      {/* 4. The whole loop */}
      <section className="pt-10 pb-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-[38px] font-bold tracking-tight mb-4">
            The whole loop, not one slice of it
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl">
            Growth is five problems in a row. Fix one in isolation and the next one
            along eats the gain.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loop.map((item, i) => (
              <div key={i} className="bg-[#16191f] rounded-2xl p-6 border border-white/5">
                <div className="text-sm text-cyan-400 font-display font-semibold mb-2">
                  0{i + 1}
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What this actually is */}
      <section className="pt-10 pb-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-[38px] font-bold tracking-tight mb-8">
            What this is, and what it isn't
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {notThis.map((item, i) => (
              <div key={i} className="bg-[#16191f] rounded-2xl p-6 border border-white/5">
                <h3 className="font-display font-semibold text-white text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="max-w-2xl">
            <p className="text-[17px] text-gray-300 leading-relaxed">
              It is three things, in this order. Find where growth is actually
              leaking. Fix the biggest leak first, with whichever channel or tool
              fits. Report what a customer cost and what they're worth, and keep
              going from there.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Who this is for */}
      <section className="pt-10 pb-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-[38px] font-bold tracking-tight mb-4">
            Who this is for, and who it isn't
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl">
            None of this is a judgement on anyone. The work needs certain
            conditions to produce anything at all, and below them we would just be
            charging you to discover that.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">This fits</h3>
              <ul className="space-y-3">
                {goodFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-[15px]">
                    <CheckIcon className="w-5 h-5 text-lime-400 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">This doesn't</h3>
              <ul className="space-y-3">
                {notGoodFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-[15px]">
                    <span className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center text-gray-600">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-[17px] text-gray-300 leading-relaxed mt-10 max-w-2xl">
            The short version: this works when the numbers on a customer add up.
            If a customer is worth less than it costs to win one, no channel fixes
            it. We'll say so on the call rather than take the work.
          </p>
        </div>
      </section>

      {/* 7. How this is done */}
      <section className="pt-12 pb-12 px-6 border-t border-white/5 bg-[#111318]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-[38px] font-bold tracking-tight mb-4">
            How this is actually done
          </h2>
          <p className="text-gray-400 leading-relaxed mb-12 max-w-2xl">
            We're not going to show you results you have no way of verifying.
            Here is the reasoning instead. If you've run growth yourself, you'll
            know within a paragraph whether we have too.
          </p>

          <div className="space-y-12">
            {method.map((item, i) => (
              <div key={i} className="max-w-2xl">
                <h3 className="font-display text-xl font-semibold text-white mb-4">
                  {item.heading}
                </h3>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  {item.body.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
                {item.link && (
                  <Link
                    to={item.link.to}
                    className="inline-block mt-4 text-lime-400 text-[15px] font-medium hover:text-lime-300 transition-colors"
                  >
                    {item.link.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. How it works */}
      <section className="pt-12 pb-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-[38px] font-bold tracking-tight mb-10">
            How it works
          </h2>
          <div className="space-y-8">
            {stages.map((stage) => (
              <div key={stage.num} className="flex gap-5 md:gap-8">
                <div className="w-10 h-10 shrink-0 bg-lime-400 rounded-full flex items-center justify-center text-base font-bold text-black">
                  {stage.num}
                </div>
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-baseline gap-x-3 mb-2">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {stage.title}
                    </h3>
                    <span className="text-sm text-cyan-400">{stage.when}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Why one team */}
      <section className="pt-10 pb-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-[38px] font-bold tracking-tight mb-8">
            Why one team instead of five suppliers
          </h2>
          <div className="space-y-5 text-[17px] text-gray-400 leading-relaxed max-w-2xl">
            <p>
              The normal way to buy growth is an outbound agency, an ads agency, a
              developer for the tracking and automation, somebody for the creative,
              and a consultant for onboarding and retention. Five contracts, five
              timelines, and the answer to “why isn't this working” living in the
              gaps between them, where no one is paid to go and look.
            </p>
            <p>
              Our founder, Mark Proctor, has spent 20 years in product management
              — Hearst, Tesco, Harvey Nichols, Informa, Nestlé, Co-op and Omnicom —
              and the last four building and growing ProspectFly's own products. He
              has owned the whole loop himself: acquisition through outbound and
              ads, onboarding that cut time-to-first-value from an hour to twenty
              minutes, and a revenue line that has grown every year.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-block mt-6 text-lime-400 text-[15px] font-medium hover:text-lime-300 transition-colors"
          >
            What an engagement includes, and what you own at the end →
          </Link>
        </div>
      </section>

      {/* 10. The mistake to avoid */}
      <section className="pt-10 pb-12 px-6 border-t border-white/5 bg-[#111318]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-[38px] font-bold tracking-tight mb-8">
            The mistake that wastes the first three months
          </h2>
          <div className="space-y-5 text-[17px] text-gray-400 leading-relaxed max-w-2xl">
            <p>
              Businesses buy more leads before they know which message converts, or
              whether the customers they already have are staying. It feels like
              progress, because something is live and the numbers are moving.
            </p>
            <p>
              The pattern goes like this. The pitch that works through referrals
              gets turned into a campaign and put in front of strangers. But a
              referral arrives with borrowed trust — somebody vouched for you — and
              the pitch only ever made sense because of it. Strangers have no
              reason to believe a word of it. So the campaign produces meetings
              with the wrong people, and no sales.
            </p>
            <p>
              Then three months go into tools, sequences and landing pages: the
              variables that were never the problem. The message was the problem,
              and it was cheap to test before the budget went in.
            </p>
            <p className="text-gray-300">
              Message first, on a small budget. Then scale behind whichever one
              wins. It's slower for a fortnight and faster for the rest of the year.
            </p>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="pt-12 pb-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-[38px] font-bold tracking-tight mb-10">
            Questions people ask first
          </h2>
          <Faq items={faqs} />
        </div>
      </section>

      {/* 12. CTA */}
      <CtaBand
        showAvatar
        heading="Book a 30-minute audit."
        body="We'll look at your funnel while we talk — where leads come from, where they stall, and where customers leave. You leave with what we'd change, in what order, and an honest answer on whether we'd take it on. No deck, and no proposal chasing you afterwards unless you ask for one."
      />
    </div>
  );
}

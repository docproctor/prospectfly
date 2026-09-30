import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { CheckIcon } from "../components/check-icon";
import { CtaBand } from "../components/cta-band";
import { Faq, faqJsonLd, type FaqItem } from "../components/faq";
import { BOOKING_LABEL, BOOKING_URL } from "../lib/booking";

const faqs: FaqItem[] = [
  {
    question: "What does it cost?",
    answer:
      "Management is £750 to £1,500 a month, depending on how much has to be built from scratch. Media is at least £1,000 a month, paid directly to LinkedIn — never through me and never marked up. Scope and price are agreed in writing after the audit.",
  },
  {
    question: "How long before we see anything?",
    answer:
      "Tracking and the first campaigns are live inside two weeks. You'll have real data on which message works by about week four. A cost per qualified conversation you can plan against takes six to eight weeks, because it needs enough conversations to be more than a coincidence. Anyone promising you less than that is guessing.",
  },
  {
    question: "What if we've already tried ads and it didn't work?",
    answer:
      "That is the common case. Most accounts I look at failed for one of three reasons: the audience was far too large for the budget, the conversion being counted wasn't a real conversation, or the campaign objective told the platform to optimise for something nobody wanted. None of those mean the channel doesn't work for you — and finding out which one it was takes about ten minutes of the audit.",
  },
  {
    question: "Do we need a website or tracking set up first?",
    answer:
      "No. I build the tracking, and I'll build landing pages if the page is what's losing the traffic. Don't fix anything before the audit — it's easier for me to see what's wrong if you leave it as it is.",
  },
  {
    question: "Who actually does the work?",
    answer:
      "I do. There's no account manager, no junior, and nobody you haven't spoken to. That's the point of it, and it's also the honest limit on how many companies I can work with at once.",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Customer acquisition for UK B2B SaaS companies — Prospectfly" },
    {
      name: "description",
      content:
        "LinkedIn customer acquisition for UK B2B SaaS companies with contracts above £10,000 a year. One person doing the tracking, the creative and the media buying.",
    },
    { "script:ld+json": faqJsonLd(faqs) },
  ];
};

const notThis = [
  {
    title: "Not brand awareness",
    description:
      "I'm not here to buy impressions and then tell you about uplift you can't feel.",
  },
  {
    title: "Not a content retainer",
    description:
      "Nobody in your position needs another twelve posts a month that nobody reads.",
  },
  {
    title: "Not a dashboard",
    description:
      "A dashboard describes the problem. It has never once solved it.",
  },
];

const goodFit = [
  "UK B2B SaaS, roughly 11 to 200 people",
  "A customer worth £10,000 or more a year",
  "The founder, CEO or MD is in the room when this gets decided",
  "At least £1,000 a month for media, separate from management",
  "Someone answers an enquiry inside a working day",
];

const notGoodFit = [
  "Solo consultants, coaches and one-person businesses",
  "Pre-revenue, still working out what the product is",
  "Seed-stage SaaS on sub-£1,000 annual contracts",
  "Under £1,000 a month of media — the frequency maths doesn't work, and I'd be charging you to find that out",
  "Anyone who wants a guaranteed number before I've seen the account",
];

const method = [
  {
    heading: "“Cost per lead” means nothing until you say which lead",
    body: [
      "A form fill, a webinar registration, someone who actually turns up, and a booked meeting with a qualified buyer are four different things. On the same platform, with the same spend, they can differ by twenty times.",
      "So “our cost per lead is £40” isn't a fact about your business. It's a fact about which rung of that ladder somebody decided to count. When a report looks surprisingly good, this is usually why: the further down the ladder you count, the better it reads and the less it means.",
      "The first thing I do is agree which rung we're counting. Then it never moves, including in the months when moving it would flatter me.",
    ],
    link: {
      to: "/resources/linkedin-tracking-attribution",
      label: "How I set up tracking and attribution",
    },
  },
  {
    heading: "Most of your LinkedIn clicks never reach your website",
    body: [
      "LinkedIn records a click when someone expands the text, taps your company name, opens the image, or hits “see more”. All of it lands in Campaign Manager as a click.",
      "On some formats the majority of recorded clicks are on-platform actions that never touch your site. So a healthy-looking 2% click-through rate can sit next to almost no sessions in your analytics, and the campaign looks fine right up until somebody checks the other end.",
      "That's why the tracking gets built before the campaign goes live, and why I report from your analytics rather than from the platform marking its own homework.",
    ],
    link: {
      to: "/resources/linkedin-ad-creative",
      label: "Which ad formats actually earn the click",
    },
  },
  {
    heading: "Audience size and budget are one decision, not two",
    body: [
      "Spread £1,000 a month across an audience of 500,000 and each person sees your ad a fraction of one time — below the point where anyone remembers seeing it at all. The money gets spent and nothing compounds.",
      "Narrow it to the 2,000 to 5,000 companies that are genuinely your buyer and the same budget buys enough frequency to be recognised. Most accounts I'm shown are targeting an audience ten to a hundred times too large for what they're spending on it.",
      "The campaign objective does the same damage more quietly. It constrains what the algorithm optimises for, so choosing the wrong one doesn't just under-perform — it reliably delivers the wrong audience.",
    ],
    link: {
      to: "/resources/linkedin-audience-targeting",
      label: "How I size an audience against a budget",
    },
  },
];

const stages = [
  {
    num: 1,
    title: "Audit",
    when: "30 minutes, free",
    description:
      "I look at your account while we talk, or a competitor's if you haven't started. You leave with what I'd change and in what order — and whether I think this is the right call for you at all.",
  },
  {
    num: 2,
    title: "Build",
    when: "Weeks 1–2",
    description:
      "Tracking built and verified. Audiences constructed and sized against the budget. Three to five messages written and built as ads. Agreement in writing on which conversion we're counting.",
  },
  {
    num: 3,
    title: "Run",
    when: "Weeks 3–6",
    description:
      "Live, with budget split across the messages. A short note each week on what's moving. Losing messages get switched off as the evidence arrives, not on a reporting schedule.",
  },
  {
    num: 4,
    title: "Grow",
    when: "Week 6 onwards",
    description:
      "Budget concentrates behind what's working. One number a month — what a qualified conversation cost — with the working shown underneath so you can check it rather than trust it.",
  },
];

export default function Index() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* 1. Hero */}
      <section className="pt-32 pb-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-[42px] lg:text-[58px] font-bold leading-[1.08] tracking-tight mb-6 max-w-3xl">
            Customer acquisition for UK B2B SaaS companies.
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed mb-9 max-w-2xl">
            One person doing the three jobs you'd normally buy from three
            suppliers — the tracking, the creative and the media buying — after 25
            years building the products being sold.
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
              Referrals still come in, but they arrive in clumps. Two in March,
              nothing in April. You can't plan a hire around it and you can't
              forecast from it.
            </p>
            <p>
              You post on LinkedIn yourself. Some of it lands. It doesn't scale,
              and it stops completely in the weeks you're busy delivering.
            </p>
            <p>
              And somewhere in the last two years, money went into ads. An agency,
              a freelancer, or you on a Sunday evening. It produced clicks, a few
              enquiries from companies you'd never sell to, and a dashboard nobody
              opens any more.
            </p>
            <p className="text-gray-300">
              None of that means this won't work for you. It usually means
              nobody owned the number.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The decision nobody owns */}
      <section className="pt-10 pb-10 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-[38px] font-bold tracking-tight mb-8">
            The number nobody owns
          </h2>
          <div className="space-y-5 text-[17px] text-gray-400 leading-relaxed max-w-2xl">
            <p>
              In a company of 11 to 200 people, marketing owns activity and sales
              owns revenue. What a qualified conversation costs, end to end, sits
              in the middle and belongs to nobody.
            </p>
            <p>
              So the questions that decide whether any of this works never get
              answered. What is a conversation with the right buyer actually worth
              to us? Which of the four things we call a “lead” are we counting?
              Is the next £1,000 better spent on the audience or the creative,
              and how would we know either way?
            </p>
            <p>
              Nobody is being lazy. The question spans two departments and needs
              someone who can read an ad account, and most companies this size
              don't have that person on the payroll.
            </p>
          </div>
        </div>
      </section>

      {/* 4. What this actually is */}
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
              It is three things, in this order. Find which message lands with a
              specific audience. Put the money behind the one that wins. Report
              what it cost to get a conversation with someone worth talking to.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Who this is for */}
      <section className="pt-10 pb-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-[38px] font-bold tracking-tight mb-4">
            Who this is for, and who it isn't
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl">
            None of this is a judgement on anyone. The work needs certain
            conditions to produce anything at all, and below them I would just be
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
            The short version: this works when a customer is worth £10,000 or more
            a year. Below that, LinkedIn's cost per lead eats your margin and no
            amount of good creative fixes it. I'll say so on the call rather than
            take the work.
          </p>
        </div>
      </section>

      {/* 6. How this is done */}
      <section className="pt-12 pb-12 px-6 border-t border-white/5 bg-[#111318]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-[38px] font-bold tracking-tight mb-4">
            How this is actually done
          </h2>
          <p className="text-gray-400 leading-relaxed mb-12 max-w-2xl">
            I'm not going to show you results you have no way of verifying. Here
            is the reasoning instead. If you buy media yourself, you'll know within
            a paragraph whether I do too.
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
                <Link
                  to={item.link.to}
                  className="inline-block mt-4 text-lime-400 text-[15px] font-medium hover:text-lime-300 transition-colors"
                >
                  {item.link.label} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How it works */}
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

      {/* 8. Why one person */}
      <section className="pt-10 pb-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-[38px] font-bold tracking-tight mb-8">
            Why one person instead of three suppliers
          </h2>
          <div className="space-y-5 text-[17px] text-gray-400 leading-relaxed max-w-2xl">
            <p>
              The normal way to buy this is a developer for the tracking, an agency
              for the campaigns, and somebody else for the creative. Three
              contracts, three timelines, and the answer to “why isn't this
              working” living in the gaps between them, where no one is paid to go
              and look.
            </p>
            <p>
              I've done all three jobs. Ex-developer, so I build the tracking
              myself. Five years at Hearst in advertising creative solutions, so I
              make the ads rather than brief them out. 17 years buying Google and
              Meta before specialising in LinkedIn, which is where this now lives
              full time. And 25 years building products, which is why I
              start from what you're actually selling rather than from how to buy
              impressions for it.
            </p>
            <p>
              The cost comparison is simple enough. Management tops out at £1,500 a
              month — less than half what a junior marketing hire costs once
              National Insurance and pension are counted. No recruitment process,
              no notice period, and nobody learning the job on your budget.
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

      {/* 9. The mistake to avoid */}
      <section className="pt-10 pb-12 px-6 border-t border-white/5 bg-[#111318]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-[38px] font-bold tracking-tight mb-8">
            The mistake that wastes the first three months
          </h2>
          <div className="space-y-5 text-[17px] text-gray-400 leading-relaxed max-w-2xl">
            <p>
              Companies buy traffic before they know which message converts. It
              feels like progress, because something is live and the numbers are
              moving.
            </p>
            <p>
              The pattern goes like this. The offer that works through referral gets
              built into a campaign and put in front of strangers. But a referral
              arrives with borrowed trust — somebody vouched for you — and the offer
              only ever made sense because of it. Strangers have no reason to
              believe a word of it. So the campaign produces clicks, a few enquiries
              from the wrong kind of company, and no conversations.
            </p>
            <p>
              Then three months go into bids, keywords and landing pages: the
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

      {/* 10. FAQ */}
      <section className="pt-12 pb-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-[38px] font-bold tracking-tight mb-10">
            Questions people ask first
          </h2>
          <Faq items={faqs} />
        </div>
      </section>

      {/* 11. CTA */}
      <CtaBand
        showAvatar
        heading="Book a 30-minute audit."
        body="I'll look at your account while we talk — or a competitor's, if you haven't started. You leave with what I'd change, in what order, and an honest answer on whether I'd take it on. No deck, and no proposal chasing you afterwards unless you ask for one."
      />
    </div>
  );
}

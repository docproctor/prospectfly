import type { MetaFunction } from "react-router";
import { CheckIcon } from "../components/check-icon";
import { CtaBand } from "../components/cta-band";

export const meta: MetaFunction = () => {
  return [
    { title: "What an engagement involves — Prospectfly" },
    {
      name: "description",
      content:
        "What I do, what you own at the end, what I need from you, and what it costs. LinkedIn customer acquisition for UK B2B SaaS, run by one person.",
    },
  ];
};

const included = [
  {
    title: "Tracking and measurement",
    description:
      "Conversion tracking that records the thing you care about, not the thing that fires most easily. I build it myself, in your tag manager, on your domain.",
  },
  {
    title: "Message testing before scale",
    description:
      "Several offers and several angles, with a small budget behind each. The one that wins gets the money. This happens first, not after three months of optimising the wrong variable.",
  },
  {
    title: "The creative",
    description:
      "I write the copy and make the ads. Static, document, video cut from a call. Nothing gets briefed out to a third party and waited on for a fortnight.",
  },
  {
    title: "Campaign build and management",
    description:
      "Audience, objective, bid strategy, budget split. Built properly once, then watched daily and changed when the numbers say so.",
  },
  {
    title: "Landing pages, where the page is the problem",
    description:
      "I was a developer before I bought media. If the ad is working and the page is losing it, I build the page rather than telling you to find someone who can.",
  },
  {
    title: "Reporting you can read in a minute",
    description:
      "One number at the top: what a qualified conversation cost. Then the working behind it, so you can check the number rather than trust it.",
  },
];

const youOwn = [
  "The ad account, in your company name, on your billing.",
  "The data — audiences, conversion history, everything the account has learned.",
  "The creative, source files included.",
  "The tracking, which stays where I built it.",
];

const fromYou = [
  "An hour a fortnight on a call. Less once things settle.",
  "Access to the ad accounts and analytics, or permission to create them.",
  "Someone who answers an enquiry inside a working day. Campaigns that produce conversations nobody follows up waste your money and my time.",
  "A straight answer on what a customer is worth to you. Without it, nobody can say whether a lead at £180 is good or terrible.",
];

export default function Services() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
            The engagement
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            What I do, what you own,
            <br />
            and what it costs.
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            There are no packages. Scope is set after the audit, because I can't
            tell you what you need until I've looked at the account. What doesn't
            change is the list below.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="pt-8 pb-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-10">What's included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {included.map((item, i) => (
              <div
                key={i}
                className="bg-[#16191f] rounded-2xl p-6 border border-white/5"
              >
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

      {/* What you own / What I need */}
      <section className="pt-8 pb-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">
              What you own at the end
            </h2>
            <p className="text-gray-500 text-[15px] mb-6">
              All of it, whenever you decide to stop.
            </p>
            <ul className="space-y-3">
              {youOwn.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-[15px]">
                  <CheckIcon className="w-5 h-5 text-lime-400 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-[15px] leading-relaxed mt-6">
              If this stops being worth it, you keep everything and take it to
              whoever you like. Nothing is held back to make leaving difficult.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">
              What I need from you
            </h2>
            <p className="text-gray-500 text-[15px] mb-6">
              Short list, but it isn't optional.
            </p>
            <ul className="space-y-3">
              {fromYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-[15px]">
                  <CheckIcon className="w-5 h-5 text-cyan-400 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What this costs */}
      <section className="pt-8 pb-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-8">What this costs</h2>

          <div className="bg-[#16191f] rounded-2xl p-8 border border-white/5 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="font-display text-3xl font-bold text-white mb-2">
                  £750–£1,500
                  <span className="text-lg text-gray-500 font-normal"> / month</span>
                </div>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  Management. Where you land in that range depends on how much
                  of the setup has to be built from scratch, and how much creative
                  the account gets through.
                </p>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-white mb-2">
                  £1,000
                  <span className="text-lg text-gray-500 font-normal"> / month minimum</span>
                </div>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  Media, paid directly to LinkedIn. It never comes
                  through me and it is never marked up.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5 text-gray-400 leading-relaxed max-w-2xl">
            <p>
              The media floor is there for a reason. Below about £1,000 a month,
              the frequency you can buy against an audience worth targeting is too
              low for anyone to remember the ad. The spend gets used up without
              compounding, and you conclude that ads don't work when what didn't
              work was the budget.
            </p>
            <p>
              For comparison: the top of that management range is less than half
              what a junior marketing hire costs once National Insurance and
              pension are counted. There's no recruitment process, no notice
              period, and you aren't training someone on your budget.
            </p>
            <p className="text-gray-500 text-[15px]">
              Price and scope are agreed after the audit, in writing, before
              anything starts.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Start with the audit."
        body="Thirty minutes on your account, or a competitor's if you haven't started. You leave with what I'd change, in what order, and whether I think it's worth doing at all."
      />
    </main>
  );
}

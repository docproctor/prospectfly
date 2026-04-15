import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Our Approach — ProspectFly" },
  {
    name: "description",
    content:
      "We only run campaigns for companies where the conditions for success already exist. Our qualification scoring filters out accounts before a single pound is spent.",
  },
];

const signals = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    label: "Headcount Trajectory",
    description: "Growing or stable headcount signals budget confidence. Declining headcount usually means a vendor spend freeze.",
    risk: "Risk if missing: company is in cost-cutting mode before you've sent a single email.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4" />
        <circle cx="17" cy="17" r="4" />
        <path d="M15 17h4M17 15v4" />
      </svg>
    ),
    label: "Sales & Marketing Structure",
    description: "At least one function must be present and active. No sales and no marketing means no one is making investment decisions.",
    risk: "Risk if missing: nobody owns the problem your service solves.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "Founder LinkedIn Activity",
    description: "Thought Leader Ads amplify a real voice. If senior people aren't posting, there's no content to work with.",
    risk: "Risk if missing: the core ad format doesn't work for an inactive brand.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "C-Suite Presence",
    description: "Identifiable leadership with real authority. A skeleton C-suite or no visible leadership signals a company in drift.",
    risk: "Risk if missing: nobody can approve a retainer even if they want to.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    label: "ICP Fit",
    description: "B2B SaaS, 50–500 employees, selling to businesses. Consumer apps and non-SaaS models rarely convert on LinkedIn paid.",
    risk: "Risk if missing: fundamentally wrong audience for the channel.",
  },
];

const unqualified = [
  "Headcount declining quarter on quarter",
  "No sales or marketing function present",
  "Founder posts fewer than once a month",
  "No identifiable C-suite",
  "B2C or non-SaaS business model",
];

const qualified = [
  "Headcount stable or growing",
  "Sales or marketing team in place",
  "Founder or senior voice active on LinkedIn",
  "Clear leadership with decision-making authority",
  "B2B SaaS, 50–500 employees",
];

export default function Approach() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
          Our Qualification Process
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
          We only work with companies<br />
          <span className="text-lime-400">where the conditions for success exist.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Most LinkedIn ad agencies take any client with a budget. We don't.
          Before we touch a campaign, every prospective client is scored against
          the same signals we use to build your target audience. If the fit
          isn't there, we'll tell you before you spend anything.
        </p>
      </section>

      {/* Filtering vs Scoring */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">
            Filtering is not scoring
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Filtering tells you who <em>could</em> buy. Scoring tells you who is
            likely to convert right now. Most agencies filter. We score.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Unqualified */}
          <div className="bg-[#16191f] rounded-2xl p-8 border border-red-900/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </div>
              <span className="font-display font-semibold text-red-400">Unqualified account</span>
            </div>
            <ul className="space-y-3">
              {unqualified.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                  <svg className="mt-0.5 shrink-0 text-red-500" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-red-950/30 border border-red-900/20">
              <p className="text-xs text-red-400">Budget spent here produces impressions. Not pipeline. And you'll never know why.</p>
            </div>
          </div>

          {/* Qualified */}
          <div className="bg-[#16191f] rounded-2xl p-8 border border-lime-400/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <span className="font-display font-semibold text-lime-400">Qualified Tier 1 account</span>
            </div>
            <ul className="space-y-3">
              {qualified.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <svg className="mt-0.5 shrink-0 text-lime-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-lime-400/5 border border-lime-400/10">
              <p className="text-xs text-lime-400">Qualified accounts convert 4–5x better. The list is the campaign.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Signals */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">
            The 5 signals we check before every campaign
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every prospective client runs through this before we discuss budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {signals.map((signal, i) => (
            <div
              key={signal.label}
              className="bg-[#16191f] rounded-2xl p-6 border border-white/5 hover:border-lime-400/20 transition-colors duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-lime-400/10 flex items-center justify-center text-lime-400 group-hover:bg-lime-400/20 transition-colors shrink-0">
                  {signal.icon}
                </div>
                <div className="text-xs text-gray-500 font-mono mt-3">
                  0{i + 1}
                </div>
              </div>
              <h3 className="font-display font-semibold text-white mb-2">
                {signal.label}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {signal.description}
              </p>
              <p className="text-xs text-gray-600 border-t border-white/5 pt-4 leading-relaxed">
                {signal.risk}
              </p>
            </div>
          ))}

          {/* 6th card - the LinkedIn-specific differentiator */}
          <div className="bg-lime-400/5 rounded-2xl p-6 border border-lime-400/20 md:col-span-2 lg:col-span-2">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-lime-400/20 flex items-center justify-center text-lime-400 shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span className="text-xs text-lime-400 font-mono mt-3">Why this matters for LinkedIn specifically</span>
            </div>
            <h3 className="font-display font-semibold text-white mb-2">
              Thought Leader Ads need a voice to amplify
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Cold email works even if your brand has zero presence. LinkedIn Thought Leader Ads don't.
              They boost a real person's post into a targeted feed. If your founders or senior team
              aren't already posting, there's nothing to amplify — and building that habit from scratch
              takes longer than most clients expect. This is a qualifying signal unique to this channel
              and most agencies don't check it before onboarding you.
            </p>
          </div>
        </div>
      </section>

      {/* Stat callout */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-[#16191f] rounded-3xl p-12 border border-white/5 text-center">
          <div className="text-7xl font-display font-bold text-lime-400 mb-4">4–5×</div>
          <p className="text-xl text-white font-medium mb-3">
            Tier 1 qualified accounts convert better than unscored lists.
          </p>
          <p className="text-sm text-gray-500 max-w-lg mx-auto">
            Based on data across 400+ B2B outbound campaigns. The gap shows up in every campaign.
            The list is the campaign — creative and copy can only do so much with the wrong audience.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="font-display text-3xl font-bold mb-4">
          Want to know if you qualify?
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Book a free 15-minute qualification call. We'll run through the 5 signals
          together and tell you honestly whether LinkedIn Thought Leader Ads are the right fit.
        </p>
        <a
          href="/#contact"
          className="inline-block bg-lime-400 text-black font-display font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
        >
          Book a qualification call →
        </a>
      </section>
    </main>
  );
}

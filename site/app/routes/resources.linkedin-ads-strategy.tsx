import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  { name: "robots", content: "noindex, nofollow" },
  { title: "LinkedIn Ads Strategy for B2B SaaS — ProspectFly" },
  {
    name: "description",
    content:
      "How we structure LinkedIn ad campaigns for B2B SaaS companies. Objectives, formats, campaign architecture and why most strategies fail before they start.",
  },
];

const objectives = [
  {
    name: "Brand Awareness",
    recommended: true,
    metric: "CPM",
    bestFor: "Thought Leader Ads, top-of-funnel warming",
    why: "Optimises for reach and frequency within your exact ICP. The goal is repeated exposure — not clicks. Most B2B buying decisions start with familiarity.",
  },
  {
    name: "Engagement",
    recommended: false,
    metric: "CPE",
    bestFor: "Promoted posts with strong opinion hooks",
    why: "Drives likes, comments and shares. Good for social proof but LinkedIn's algorithm can serve this to people outside your ICP who are just more likely to engage.",
  },
  {
    name: "Website Visits",
    recommended: false,
    metric: "CPC",
    bestFor: "Bottom-of-funnel retargeting",
    why: "Optimises for clicks to your site. High intent signal but expensive at top of funnel. Works best after awareness campaigns have built familiarity.",
  },
  {
    name: "Lead Generation",
    recommended: false,
    metric: "CPL",
    bestFor: "Gated content, event registrations",
    why: "Native lead gen forms reduce friction. But the leads are often early-stage. Use sparingly — volume without qualification burns time.",
  },
];

const mistakes = [
  {
    mistake: "Targeting 500k+ people",
    fix: "Your real ICP is probably 2,000–5,000 companies. Broad targeting burns budget on irrelevant audiences and inflates CPMs.",
  },
  {
    mistake: "Running one ad forever",
    fix: "Creative fatigue hits fast on LinkedIn. Without multiple posts rotating, frequency climbs but performance drops.",
  },
  {
    mistake: "Optimising for CTR",
    fix: "For brand awareness, CTR is the wrong metric. Frequency and audience penetration are what drive pipeline.",
  },
  {
    mistake: "No warming before outreach",
    fix: "Cold outreach to someone who's seen your ad 4–5 times converts at a meaningfully higher rate. The ad does the warming.",
  },
  {
    mistake: "Company page ads only",
    fix: "Personal voice posts consistently outperform company page content. Thought Leader Ads exist for exactly this reason.",
  },
  {
    mistake: "Auto bidding on small budgets",
    fix: "LinkedIn's auto bid burns through small daily budgets fast. Manual bidding gives you control, especially in the first 2 weeks.",
  },
];

export default function Strategy() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
          LinkedIn Ads Strategy
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
          Most LinkedIn ad strategies fail<br />
          <span className="text-lime-400">before the first pound is spent.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Wrong objective. Wrong audience size. Wrong creative format. The structural decisions
          made before launch determine 80% of campaign performance. Here's how we think about it.
        </p>
      </section>

      {/* Campaign Architecture */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">Campaign architecture</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            LinkedIn structures campaigns across three levels. Each level controls different variables —
            and the mistakes happen at all three.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              level: "Campaign",
              controls: ["Objective", "Conversion tracking", "Budget type"],
              note: "The objective you pick here determines how LinkedIn's algorithm optimises delivery. Change it later and you restart the learning phase.",
              accent: "lime",
            },
            {
              level: "Ad Set",
              controls: ["Audience targeting", "Placement", "Bid type & budget", "Schedule"],
              note: "Most of the critical decisions live here. Audience size, bid strategy and schedule all compound on each other.",
              accent: "cyan",
            },
            {
              level: "Ad",
              controls: ["Post selection", "Creative format", "Landing URL"],
              note: "For Thought Leader Ads, the ad references a real LinkedIn post by ID. The copy lives on LinkedIn, not in Campaign Manager.",
              accent: "lime",
            },
          ].map((item) => (
            <div key={item.level} className="bg-[#16191f] rounded-2xl p-6 border border-white/5">
              <div className={`text-xs font-mono mb-3 ${item.accent === "lime" ? "text-lime-400" : "text-cyan-400"}`}>
                Level
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{item.level}</h3>
              <ul className="space-y-2 mb-6">
                {item.controls.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.accent === "lime" ? "bg-lime-400" : "bg-cyan-400"}`} />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 border-t border-white/5 pt-4 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">Choosing the right objective</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            LinkedIn offers 7 campaign objectives. For B2B SaaS Thought Leader Ads, one is usually the right answer.
          </p>
        </div>

        <div className="space-y-4">
          {objectives.map((obj) => (
            <div
              key={obj.name}
              className={`bg-[#16191f] rounded-2xl p-6 border flex flex-col md:flex-row md:items-start gap-6 ${
                obj.recommended ? "border-lime-400/30" : "border-white/5"
              }`}
            >
              <div className="md:w-48 shrink-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-display font-semibold text-white">{obj.name}</span>
                  {obj.recommended && (
                    <span className="text-xs bg-lime-400/10 text-lime-400 px-2 py-0.5 rounded-full">We use this</span>
                  )}
                </div>
                <div className="text-xs text-gray-500">Billed by {obj.metric}</div>
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 mb-1">Best for: {obj.bestFor}</div>
                <p className="text-sm text-gray-300 leading-relaxed">{obj.why}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6 mistakes */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">6 structural mistakes we fix</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            These show up in nearly every B2B SaaS LinkedIn account we audit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {mistakes.map((item, i) => (
            <div key={item.mistake} className="bg-[#16191f] rounded-2xl p-6 border border-white/5">
              <div className="text-xs font-mono text-gray-600 mb-3">0{i + 1}</div>
              <div className="flex items-start gap-3 mb-3">
                <svg className="text-red-400 shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                <span className="text-sm font-medium text-red-300">{item.mistake}</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="text-lime-400 shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span className="text-sm text-gray-300">{item.fix}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="font-display text-3xl font-bold mb-4">Want us to audit your current strategy?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Book a free 30-minute call. We'll look at your campaign structure, objective, targeting and creative — and tell you exactly what's costing you performance.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-lime-400 text-black font-display font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
        >
          Book a free audit →
        </Link>
      </section>
    </main>
  );
}

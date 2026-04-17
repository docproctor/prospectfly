import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  { name: "robots", content: "noindex, nofollow" },
  { title: "LinkedIn Retargeting & Lead Gen for B2B SaaS — ProspectFly" },
  {
    name: "description",
    content:
      "How to retarget LinkedIn ad engagers and warm prospects for B2B SaaS. Matched audiences, engager lists and why warm outreach converts at a fundamentally different rate.",
  },
];

const audienceTypes = [
  {
    name: "Ad Engagers",
    description: "People who liked, commented, shared or clicked on your sponsored content. The warmest audience you can build from paid activity.",
    buildMethod: "Automatic — LinkedIn builds this from your campaign activity.",
    minSize: "300 members",
    useFor: "Bottom-of-funnel retargeting with more direct offers.",
    quality: 5,
  },
  {
    name: "Website Visitors",
    description: "People who visited specific pages on your site after seeing your ad. Requires the Insight Tag to be installed.",
    buildMethod: "Automatic from Insight Tag. Can filter by URL visited (e.g. /pricing).",
    minSize: "300 members",
    useFor: "High-intent retargeting — pricing page visitors are especially valuable.",
    quality: 5,
  },
  {
    name: "Contact List Upload",
    description: "Upload a CSV of email addresses from your CRM. LinkedIn matches against its database.",
    buildMethod: "Upload via Campaign Manager → Matched Audiences → Upload a list.",
    minSize: "300 matched members",
    useFor: "Warming cold outreach targets before your sales team reaches out.",
    quality: 4,
  },
  {
    name: "Company List",
    description: "Target everyone at a specific list of companies — not just contacts you already know.",
    buildMethod: "Upload a CSV of company names or LinkedIn company page URLs.",
    minSize: "300 matched companies",
    useFor: "ABM campaigns targeting specific accounts. Pair with job title filters.",
    quality: 4,
  },
  {
    name: "LinkedIn Event Attendees",
    description: "People who registered for or attended a LinkedIn event you hosted.",
    buildMethod: "Automatic — linked to your LinkedIn Events page.",
    minSize: "300 members",
    useFor: "Post-event nurture with follow-up content or offers.",
    quality: 3,
  },
];

const sequence = [
  {
    phase: "Awareness",
    duration: "Weeks 1–4",
    objective: "Brand Awareness / CPM",
    audience: "Qualified ICP company list — cold",
    content: "Thought Leader Ads. Personal voice, educational content, no direct offer.",
    goal: "Frequency. The same decision-maker sees your name 4–5 times.",
  },
  {
    phase: "Engagement",
    duration: "Weeks 3–8",
    objective: "Engagement",
    audience: "Ad engagers + website visitors (retargeting)",
    content: "More specific posts. Problem-focused. Begins to hint at the solution.",
    goal: "Build an engager list. These people are your warm pipeline.",
  },
  {
    phase: "Conversion",
    duration: "Week 6+",
    objective: "Website Visits or Lead Gen",
    audience: "Engagers who have seen 5+ impressions",
    content: "Direct offer. Demo, audit, pilot programme. Clear CTA.",
    goal: "Convert warm prospects who already know your name into booked calls.",
  },
];

export default function Retargeting() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
          Retargeting & Lead Gen
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
          Cold outreach to someone<br />
          <span className="text-lime-400">who already knows you converts differently.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          The purpose of a brand awareness campaign isn't impressions — it's building
          a warm list. People who've seen your content 4–5 times and engaged with it
          are not cold prospects. Retargeting turns that audience into pipeline.
        </p>
      </section>

      {/* The sequence */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">How the full campaign sequence works</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Retargeting only works if awareness came first. Here's the full three-phase structure.
          </p>
        </div>

        <div className="space-y-4">
          {sequence.map((phase, i) => (
            <div key={phase.phase} className="bg-[#16191f] rounded-2xl p-6 border border-white/5">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-40 shrink-0">
                  <div className="text-xs font-mono text-lime-400 mb-1">Phase {i + 1}</div>
                  <div className="font-display text-xl font-bold text-white">{phase.phase}</div>
                  <div className="text-xs text-gray-500 mt-1">{phase.duration}</div>
                </div>
                <div className="flex-1 grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Objective</div>
                    <div className="text-sm text-gray-300">{phase.objective}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Audience</div>
                    <div className="text-sm text-gray-300">{phase.audience}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Content</div>
                    <div className="text-sm text-gray-300">{phase.content}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Goal</div>
                    <div className="text-sm text-lime-400">{phase.goal}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Audience types */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">Matched Audience types</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            LinkedIn calls its retargeting system Matched Audiences. Five types are worth knowing.
          </p>
        </div>

        <div className="space-y-4">
          {audienceTypes.map((aud) => (
            <div key={aud.name} className="bg-[#16191f] rounded-2xl p-6 border border-white/5 flex flex-col md:flex-row gap-6">
              <div className="md:w-48 shrink-0">
                <h3 className="font-display font-semibold text-white mb-2">{aud.name}</h3>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className={`h-1.5 w-6 rounded-full ${i < aud.quality ? "bg-lime-400" : "bg-white/10"}`} />
                  ))}
                </div>
                <div className="text-xs text-gray-600">Min: {aud.minSize}</div>
              </div>
              <div className="flex-1 grid md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <div className="text-xs text-gray-600 mb-1">What it is</div>
                  <p className="text-sm text-gray-300 leading-relaxed">{aud.description}</p>
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">How to build it</div>
                  <p className="text-xs text-gray-400 leading-relaxed">{aud.buildMethod}</p>
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">Use for</div>
                  <p className="text-xs text-gray-400 leading-relaxed">{aud.useFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engager identification callout */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-lime-400/5 rounded-3xl p-10 border border-lime-400/20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs text-lime-400 font-mono mb-4">Intelligence tier</div>
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                We identify who engaged — by name.
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                LinkedIn tells you aggregate engagement data. Our Intelligence tier goes further —
                we identify the individual people who engaged with your ads, enrich their profiles,
                score them against your ICP and deliver a named warm prospect list every month.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                These aren't anonymous metrics. They're named contacts at qualified companies
                who have already seen your content and shown interest. That's a fundamentally
                different starting point for outreach.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Named contacts, not anonymous impressions",
                "ICP-scored by job title, company size and seniority",
                "LinkedIn profile URL included where available",
                "Work email included where available",
                "Delivered monthly as a clean dashboard",
                "Ready for direct outreach or CRM import",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="text-lime-400 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="font-display text-3xl font-bold mb-4">Ready to build your warm prospect list?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Book a free call to see how the full awareness-to-retargeting sequence works for your specific ICP and budget.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-lime-400 text-black font-display font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
        >
          Book a discovery call →
        </Link>
      </section>
    </main>
  );
}

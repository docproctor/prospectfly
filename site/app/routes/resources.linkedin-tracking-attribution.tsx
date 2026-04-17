import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  { name: "robots", content: "noindex, nofollow" },
  { title: "LinkedIn Tracking & Attribution for B2B SaaS — ProspectFly" },
  {
    name: "description",
    content:
      "How to set up LinkedIn Insight Tag, conversion tracking and attribution for B2B SaaS campaigns. Why most LinkedIn ad accounts are flying blind.",
  },
];

const steps = [
  {
    title: "Install the LinkedIn Insight Tag",
    description: "A lightweight JavaScript snippet added to every page of your website. It enables website audience tracking, conversion measurement and demographic reporting on your site visitors.",
    detail: "Add via Google Tag Manager or directly in your site's <head>. Verify in Campaign Manager under Account Assets → Insight Tag. Give it 24–48 hours to start reporting.",
    required: true,
  },
  {
    title: "Define your conversion events",
    description: "Tell LinkedIn what actions on your website count as a conversion — demo bookings, free trial signups, contact form submissions. Without this, you have no signal on what's actually working.",
    detail: "Set up under Account Assets → Conversions. For B2B SaaS, track: demo booked, trial started, contact submitted. Each is a separate conversion event.",
    required: true,
  },
  {
    title: "Set conversion windows",
    description: "LinkedIn attributes conversions within a time window after ad exposure. The default is 30 days post-click, 7 days view-through. For B2B with longer sales cycles, extend post-click to 90 days.",
    detail: "B2B buying decisions rarely happen the same day someone sees an ad. A 90-day window captures the full influence of your campaign on pipeline.",
    required: false,
  },
  {
    title: "Enable demographic reporting",
    description: "Once the Insight Tag is installed, LinkedIn can show you the job titles, seniority levels, company sizes and industries of people visiting your site — even those who didn't click an ad.",
    detail: "Find this under Website Demographics in Campaign Manager. Requires 300+ site visitors to show data. Invaluable for validating whether your SEO and content is reaching the right people.",
    required: false,
  },
  {
    title: "Connect to CRM",
    description: "For proper attribution, revenue from closed deals needs to connect back to LinkedIn ad exposure. This is where most teams stop — and where the data that justifies budget lives.",
    detail: "Options: HubSpot and Salesforce both have native LinkedIn integrations. For lighter stacks, UTM parameters plus a deal source field in your CRM gets you most of the way there.",
    required: false,
  },
];

const attributionModels = [
  {
    model: "Last touch",
    description: "Credit goes to the last channel the prospect interacted with before converting.",
    problem: "Almost always credits direct traffic or branded search — not the LinkedIn ad that built awareness in the first place.",
  },
  {
    model: "First touch",
    description: "Credit goes to the first channel that introduced the prospect to your brand.",
    problem: "Better for awareness campaigns but ignores everything that happened between first exposure and conversion.",
  },
  {
    model: "Linear",
    description: "Credit split equally across every touchpoint in the buyer journey.",
    problem: "Treats a LinkedIn impression the same as a demo booking confirmation email. Most touchpoints aren't equal.",
  },
  {
    model: "Position-based (W-shaped)",
    description: "Heavy credit to first touch and last touch, some credit to middle touchpoints.",
    problem: "Better — but still doesn't capture the compounding effect of frequency on LinkedIn specifically.",
  },
];

export default function Tracking() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
          Tracking & Attribution
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
          Most LinkedIn ad accounts<br />
          <span className="text-lime-400">are flying completely blind.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          No Insight Tag. No conversion events. No way to connect ad spend to pipeline.
          Without tracking infrastructure in place, you're optimising for impressions
          and hoping something shows up in the CRM. It usually doesn't.
        </p>
      </section>

      {/* Setup steps */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">Tracking setup — in order</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Steps 1 and 2 are non-negotiable before any campaign goes live.
            Steps 3–5 are what separate a basic setup from one that generates real insight.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={step.title} className={`bg-[#16191f] rounded-2xl p-6 border ${step.required ? "border-lime-400/20" : "border-white/5"}`}>
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm bg-[#0a0a0a]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display font-semibold text-white">{step.title}</h3>
                    {step.required && (
                      <span className="text-xs bg-lime-400/10 text-lime-400 px-2 py-0.5 rounded-full">Required</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">{step.description}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Attribution */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">The attribution problem</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            LinkedIn awareness campaigns are notoriously hard to attribute. Every standard model has a blind spot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {attributionModels.map((item) => (
            <div key={item.model} className="bg-[#16191f] rounded-2xl p-6 border border-white/5">
              <h3 className="font-display font-semibold text-white mb-2">{item.model}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{item.description}</p>
              <div className="flex items-start gap-2 pt-4 border-t border-white/5">
                <svg className="text-amber-400 shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                <p className="text-xs text-gray-500 leading-relaxed">{item.problem}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-lime-400/5 rounded-2xl p-6 border border-lime-400/20">
          <h3 className="font-display font-semibold text-white mb-3">What we actually track instead</h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            For brand awareness Thought Leader Ads, the primary signal isn't click-based attribution — it's
            engager identification. We track who liked, commented, clicked or visited your profile after
            seeing the ad. These people are your warm list. When your sales team reaches out to someone
            on that list, the conversion rate is meaningfully higher than cold outreach.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            That's the pipeline signal that standard attribution models miss entirely. It's also why
            frequency and audience penetration matter more than CTR for this ad format.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="font-display text-3xl font-bold mb-4">Is your tracking set up correctly?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Book a free call and we'll check your Insight Tag, conversion events and attribution setup. Most accounts have at least one gap that's costing them signal.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-lime-400 text-black font-display font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
        >
          Check my tracking setup →
        </Link>
      </section>
    </main>
  );
}

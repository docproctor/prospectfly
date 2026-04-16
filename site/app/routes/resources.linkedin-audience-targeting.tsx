import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  { name: "robots", content: "noindex, nofollow" },
  { title: "LinkedIn Audience Targeting for B2B SaaS — ProspectFly" },
  {
    name: "description",
    content:
      "How we build precision LinkedIn audiences for B2B SaaS companies. ICP scoring, company list targeting and why audience size is the most important campaign decision.",
  },
];

const targetingOptions = [
  {
    method: "Company List Upload",
    quality: 5,
    description: "Upload a CSV of specific companies. LinkedIn matches against its database. The most precise targeting available — you control exactly who sees the ad.",
    useCase: "Your scored Tier 1 ICP company list.",
    recommended: true,
  },
  {
    method: "Job Title + Industry",
    quality: 3,
    description: "Filter by job title, industry and company size. Fast to set up but broad — LinkedIn's taxonomy is imprecise and many titles don't match real roles.",
    useCase: "Early testing before you have a company list.",
    recommended: false,
  },
  {
    method: "Skills & Groups",
    quality: 2,
    description: "Target based on LinkedIn skills members have listed or groups they belong to. Highly inconsistent — self-reported data varies widely in quality.",
    useCase: "Rarely. Only as a supplemental layer.",
    recommended: false,
  },
  {
    method: "Lookalike Audiences",
    quality: 3,
    description: "LinkedIn builds an audience that resembles your existing contacts or website visitors. Useful at scale but loses precision at smaller budgets.",
    useCase: "Retargeting expansion once you have conversion data.",
    recommended: false,
  },
];

const audienceSizes = [
  {
    size: "500k+",
    label: "Too broad",
    color: "red",
    result: "You're paying to reach people who will never buy. CPMs rise as LinkedIn struggles to find relevant inventory. Pipeline stays empty.",
  },
  {
    size: "50k–200k",
    label: "Borderline",
    color: "amber",
    result: "Better — but still likely to include significant waste. Works if your ICP is genuinely broad, but most B2B SaaS ICPs aren't.",
  },
  {
    size: "5k–30k",
    label: "Recommended",
    color: "lime",
    result: "Tight enough to build real frequency with your exact ICP. Every impression is a qualified account. This is where pipeline comes from.",
  },
  {
    size: "Under 2k",
    label: "Too narrow",
    color: "amber",
    result: "LinkedIn struggles to deliver at this size and CPMs spike. You may not spend your budget. Merge ad sets or broaden slightly.",
  },
];

export default function Targeting() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
          Audience Targeting
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
          Reaching 500,000 people<br />
          <span className="text-lime-400">is not a targeting strategy.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          The single most important decision in any LinkedIn campaign is audience size.
          Too broad and you're generating impressions for people who will never buy.
          Too narrow and LinkedIn can't deliver. The sweet spot is a scored, qualified company list.
        </p>
      </section>

      {/* Audience size guide */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">Audience size matters more than you think</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            LinkedIn reports audience size before you launch. Here's what each range actually means for pipeline.
          </p>
        </div>

        <div className="space-y-4">
          {audienceSizes.map((item) => {
            const colors: Record<string, string> = {
              red: "border-red-900/40 bg-red-950/20",
              amber: "border-amber-900/40 bg-amber-950/20",
              lime: "border-lime-400/30 bg-lime-400/5",
            };
            const labelColors: Record<string, string> = {
              red: "text-red-400 bg-red-400/10",
              amber: "text-amber-400 bg-amber-400/10",
              lime: "text-lime-400 bg-lime-400/10",
            };
            return (
              <div key={item.size} className={`rounded-2xl p-6 border flex flex-col md:flex-row md:items-center gap-6 ${colors[item.color]}`}>
                <div className="md:w-40 shrink-0 flex items-center gap-3">
                  <span className="font-display text-2xl font-bold text-white">{item.size}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${labelColors[item.color]}`}>{item.label}</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed flex-1">{item.result}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Targeting methods */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">Targeting methods compared</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            LinkedIn offers multiple ways to define your audience. They are not equally effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {targetingOptions.map((opt) => (
            <div
              key={opt.method}
              className={`bg-[#16191f] rounded-2xl p-6 border ${opt.recommended ? "border-lime-400/30" : "border-white/5"}`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-semibold text-white">{opt.method}</h3>
                {opt.recommended && (
                  <span className="text-xs bg-lime-400/10 text-lime-400 px-2 py-0.5 rounded-full shrink-0 ml-2">We use this</span>
                )}
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${i < opt.quality ? "bg-lime-400" : "bg-white/10"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{opt.description}</p>
              <p className="text-xs text-gray-600 border-t border-white/5 pt-4">Use case: {opt.useCase}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How we build lists */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="bg-[#16191f] rounded-3xl p-10 border border-white/5">
          <h2 className="font-display text-3xl font-bold mb-6">How we build your company list</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                { step: "01", title: "Define your real ICP", body: "Not just industry and headcount. We map your best-fit customers and identify the structural signals — team composition, LinkedIn activity, growth trajectory — that predict conversion." },
                { step: "02", title: "Source the company universe", body: "We pull a raw list from LinkedIn Sales Navigator using your ICP filters. This is the starting point — not the final list." },
                { step: "03", title: "Score and qualify", body: "Every company is scored against the 5 qualification signals. Companies that fail on headcount trajectory, team structure or founder activity are removed before a single impression is served." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="text-xs font-mono text-lime-400 mt-1 shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-display font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                { step: "04", title: "Upload as a Matched Audience", body: "The qualified company list is uploaded directly to LinkedIn Campaign Manager as a Matched Audience. LinkedIn matches companies against its database and delivers ads only to people at those firms." },
                { step: "05", title: "Layer job title filters", body: "On top of the company list, we add seniority and function filters to reach the right people within those companies. Decision-makers only." },
                { step: "06", title: "Monitor and refine", body: "Monthly reporting shows which companies are engaging. We update the list, remove low-performers and add new qualified accounts as your pipeline evolves." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="text-xs font-mono text-lime-400 mt-1 shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-display font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="font-display text-3xl font-bold mb-4">Want to see your qualified audience size?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Book a call and we'll run a live audience build in LinkedIn Sales Navigator based on your ICP. You'll leave with a realistic number before committing to anything.
        </p>
        <Link
          to="/#contact"
          className="inline-block bg-lime-400 text-black font-display font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
        >
          Book a discovery call →
        </Link>
      </section>
    </main>
  );
}

import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  { name: "robots", content: "noindex, nofollow" },
  { title: "LinkedIn Ad Creative & Formats for B2B SaaS — ProspectFly" },
  {
    name: "description",
    content:
      "Why Thought Leader Ads outperform company page content and how to write LinkedIn ad copy that generates pipeline, not just impressions.",
  },
];

const formats = [
  {
    name: "Thought Leader Ads",
    recommended: true,
    description: "Sponsored posts from a named individual — founder, executive or team member. Appears in the feed as a personal post, not a company ad.",
    pros: ["Personal voice builds trust faster than brand voice", "Organic-looking — lower ad fatigue", "Works alongside organic posting strategy", "Ideal for brand awareness CPM campaigns"],
    cons: ["Requires an active LinkedIn poster", "Can't edit copy after publishing — you promote the existing post", "Performance tied to quality of the post itself"],
  },
  {
    name: "Single Image Sponsored Content",
    recommended: false,
    description: "Standard sponsored post from a company page. The most common LinkedIn ad format — and the most competitive.",
    pros: ["No personal LinkedIn profile required", "Full creative control", "Works for any objective"],
    cons: ["Clearly labelled as an ad", "Company page posts get lower organic trust", "Higher CPMs due to auction competition"],
  },
  {
    name: "Document Ads",
    recommended: false,
    description: "Multi-page carousel-style document promoted in the feed. Good for lead magnets and detailed content.",
    pros: ["High engagement time if content is strong", "Good for gated lead gen (email gate on download)", "Scrollable format encourages deeper reading"],
    cons: ["Content creation effort is high", "Works better for established brands with existing trust", "Not suited for cold audiences"],
  },
  {
    name: "Video Ads",
    recommended: false,
    description: "Short-form video in the LinkedIn feed. High attention capture but high production effort.",
    pros: ["Strong scroll-stopping power", "Good for product demos or founder stories", "View-through data gives signal on interest"],
    cons: ["Production cost is high", "LinkedIn video CPMs are expensive", "Most B2B audiences watch without sound — captions essential"],
  },
];

const postTypes = [
  {
    type: "Contrarian take",
    hook: "Most [common belief] is wrong. Here's what actually happens.",
    engagement: "High comments",
    pipelineSignal: "Medium",
    why: "Drives debate and shares. Good for reach but attracts broad engagement including people outside your ICP.",
  },
  {
    type: "Specific insight with a number",
    hook: "We analysed 40 LinkedIn ad accounts. Here's what the top 10% do differently.",
    engagement: "Medium reactions",
    pipelineSignal: "High",
    why: "Credibility-building content. The people who engage are usually evaluating whether you know your subject.",
  },
  {
    type: "Problem agitation",
    hook: "If your LinkedIn ads are getting clicks but no leads, here's exactly what's broken.",
    engagement: "High saves",
    pipelineSignal: "High",
    why: "Describes a pain the reader is experiencing right now. Saves and DMs from this format are your warmest signals.",
  },
  {
    type: "Transparent results",
    hook: "We launched a LinkedIn ad campaign this morning. Here's what happened in 24 hours.",
    engagement: "Medium reactions",
    pipelineSignal: "Very high",
    why: "Real numbers build trust fast. The people who engage are implicitly interested in the outcome — which is your service.",
  },
];

export default function Creative() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
          Ad Creative & Formats
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
          Company page ads are losing.<br />
          <span className="text-lime-400">Personal voice is winning.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          LinkedIn's feed is saturated with company page content. Thought Leader Ads —
          sponsored posts from a real person — consistently outperform brand content
          because trust transfers from the individual, not the logo.
        </p>
      </section>

      {/* Format comparison */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">LinkedIn ad formats compared</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            LinkedIn offers over a dozen ad formats. For B2B SaaS brand awareness, one format consistently outperforms the rest.
          </p>
        </div>

        <div className="space-y-5">
          {formats.map((format) => (
            <div
              key={format.name}
              className={`bg-[#16191f] rounded-2xl p-6 border ${format.recommended ? "border-lime-400/30" : "border-white/5"}`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-semibold text-lg text-white">{format.name}</h3>
                {format.recommended && (
                  <span className="text-xs bg-lime-400/10 text-lime-400 px-2 py-0.5 rounded-full shrink-0 ml-2">We use this</span>
                )}
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">{format.description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500 mb-2">Advantages</div>
                  <ul className="space-y-1.5">
                    {format.pros.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-gray-300">
                        <svg className="text-lime-400 shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-2">Limitations</div>
                  <ul className="space-y-1.5">
                    {format.cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-xs text-gray-400">
                        <svg className="text-gray-600 shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Post types */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">Post types that generate pipeline</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Not all high-engagement posts produce pipeline. Here's how the formats break down for B2B SaaS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {postTypes.map((item) => (
            <div key={item.type} className="bg-[#16191f] rounded-2xl p-6 border border-white/5">
              <h3 className="font-display font-semibold text-white mb-2">{item.type}</h3>
              <div className="font-mono text-xs text-gray-500 bg-white/5 rounded-lg px-4 py-3 mb-4 leading-relaxed">
                "{item.hook}"
              </div>
              <div className="flex gap-4 mb-4 text-xs">
                <div>
                  <span className="text-gray-600">Engagement: </span>
                  <span className="text-gray-300">{item.engagement}</span>
                </div>
                <div>
                  <span className="text-gray-600">Pipeline signal: </span>
                  <span className="text-lime-400">{item.pipelineSignal}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed border-t border-white/5 pt-4">{item.why}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stat */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-[#16191f] rounded-3xl p-12 border border-white/5 text-center">
          <div className="text-7xl font-display font-bold text-lime-400 mb-4">5.1%</div>
          <p className="text-xl text-white font-medium mb-3">CTR on our first Thought Leader Ad campaign.</p>
          <p className="text-sm text-gray-500 max-w-lg mx-auto">
            LinkedIn's benchmark CTR for sponsored content is 0.4%. Personal voice content
            against a qualified ICP audience consistently outperforms company page ads.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="font-display text-3xl font-bold mb-4">Want us to review your ad creative?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Book a free call and bring your current LinkedIn posts or ads. We'll tell you which formats are worth promoting and what copy angles are missing.
        </p>
        <Link
          to="/#contact"
          className="inline-block bg-lime-400 text-black font-display font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
        >
          Book a creative review →
        </Link>
      </section>
    </main>
  );
}

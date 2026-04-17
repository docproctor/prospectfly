import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Our Approach — ProspectFly" },
  {
    name: "description",
    content:
      "We only take on work we're confident we can deliver results for. That means an honest conversation before anything else.",
  },
];

const criteria = [
  {
    num: 1,
    title: "Your market",
    description: "Is there real search or social demand for what you sell? If nobody is searching for it and nobody fits your target audience profile, ads won't fix that.",
  },
  {
    num: 2,
    title: "Your economics",
    description: "What's a customer worth to you? What can you afford to pay to acquire one? If the numbers don't work on paper, they won't work in the account either.",
  },
  {
    num: 3,
    title: "Your conversion path",
    description: "Where does the traffic go? A strong campaign sending people to a weak landing page is wasted budget. We look at the full funnel, not just the ads.",
  },
  {
    num: 4,
    title: "Your budget",
    description: "Google Ads and Meta both need a minimum spend to generate enough data to optimise. We'll tell you what that minimum looks like for your specific market.",
  },
  {
    num: 5,
    title: "Your expectations",
    description: "Paid ads are not instant. Most accounts take 60-90 days to find their stride. If you need 10 customers tomorrow, this isn't the right conversation.",
  },
];

export default function Approach() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
          How we work
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
          We only take on work we're confident<br />
          <span className="text-lime-400">we can deliver results for.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          That means an honest conversation before anything else. If your budget, market or business model isn't right for paid ads, we'll tell you.
        </p>
      </section>

      {/* What we look at */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold mb-12">
          What we look at before we start
        </h2>

        <div className="space-y-8">
          {criteria.map((item) => (
            <div
              key={item.num}
              className="bg-[#16191f] rounded-2xl p-8 border border-white/5"
            >
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stat callout */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-[#16191f] rounded-3xl p-12 border border-white/5">
          <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed text-center">
            "Most campaigns that fail do so before they launch. Wrong channel. Wrong budget. Wrong expectations. We fix that in the first call."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <a
          href="/contact"
          className="inline-block bg-lime-400 text-black font-display font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
        >
          Let's have that honest conversation →
        </a>
      </section>
    </main>
  );
}

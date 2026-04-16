import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Pricing — ProspectFly" },
  { name: "description", content: "Straightforward pricing. No hidden fees, no surprises. We charge a flat management fee - your ad spend goes directly to the platform." },
];

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "£599",
      period: "/month",
      features: [
        "One platform (Google, Meta or LinkedIn)",
        "Campaign setup and management",
        "Weekly optimisation",
        "Monthly performance report",
        "Up to £3,000/month ad spend",
      ],
      highlight: false,
    },
    {
      name: "Growth",
      price: "£999",
      period: "/month",
      features: [
        "Two platforms",
        "Everything in Starter",
        "Audience and competitor research",
        "Landing page recommendations",
        "Up to £8,000/month ad spend",
      ],
      highlight: true,
    },
    {
      name: "Scale",
      price: "£1,499",
      period: "/month",
      features: [
        "All three platforms",
        "Everything in Growth",
        "Full funnel strategy",
        "Priority support",
        "Unlimited ad spend",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <div className="inline-block mb-6 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
            Pricing
          </div>
          <h1 className="text-[36px] lg:text-[44px] font-extrabold tracking-tight mb-4">
            Straightforward pricing.<br />
            No hidden fees, no surprises.
          </h1>
          <p className="text-[17px] text-[#8a9099] max-w-[600px] mx-auto">
            We charge a flat management fee based on the complexity of your account. Your ad spend goes directly to the platform - we never mark it up.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pb-16 px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`bg-[#16191f] border rounded-xl p-8 ${
                  tier.highlight
                    ? 'border-lime-400 ring-1 ring-lime-400/20'
                    : 'border-[#1e2229]'
                }`}
              >
                {tier.highlight && (
                  <div className="text-xs font-semibold uppercase tracking-widest text-lime-400 mb-3">Most Popular</div>
                )}
                <h3 className="text-xl font-bold mb-3">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-[36px] font-extrabold">{tier.price}</span>
                  <span className="text-[#8a9099] text-sm">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#8a9099]">
                      <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-1.5 shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/#contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold text-[15px] transition-colors cursor-pointer ${
                    tier.highlight
                      ? 'bg-lime-400 text-black hover:bg-lime-300'
                      : 'bg-[#1e2229] text-white hover:bg-[#252a33]'
                  }`}
                >
                  Book a Call
                </a>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-sm text-[#8a9099] mt-8 max-w-[600px] mx-auto">
            All packages require a 3-month minimum commitment. Ad spend is paid directly to platforms - not through us.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-10 text-center bg-[#111318] border-t border-[#1e2229]">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-[32px] lg:text-[38px] font-extrabold tracking-tight mb-5">
            Not sure which package fits?
          </h2>
          <p className="text-[17px] text-[#8a9099] mb-10">
            Book a free audit call. We'll look at your situation and recommend the right starting point - even if that means starting smaller than you expected.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-lime-400 text-black px-8 py-4 rounded-lg font-bold text-[15px] hover:bg-lime-300 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Book a free audit →
          </a>
        </div>
      </section>
    </div>
  );
}

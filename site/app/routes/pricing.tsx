import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "LinkedIn Ads Pricing — ProspectFly" },
  { name: "description", content: "Transparent pricing for LinkedIn engagement intelligence. 3-month minimum commitment." },
];

export default function Pricing() {
  const services = [
    {
      name: "Signal",
      price: "£299",
      period: "/month",
      features: [
        "We identify who engages with your existing posts weekly",
        "Engager identification: name, job title, LinkedIn URL",
        "ICP scoring and priority flagging",
        "Weekly email digest of warm prospects",
      ],
      note: "No ad spend required to get started",
      highlight: false,
    },
    {
      name: "Amplified",
      price: "£999",
      period: "/month",
      features: [
        "Everything in Signal",
        "LinkedIn thought leader ad management",
        "Audience build using your ICP company list",
        "Campaign setup, bidding, scheduling optimisation",
        "Monthly performance report",
      ],
      note: "Minimum recommended client ad spend: £500/month",
      highlight: false,
    },
    {
      name: "Intelligence",
      price: "£1,499",
      period: "/month",
      features: [
        "Everything in Amplified",
        "Enhanced engager enrichment",
        "ICP scoring (job title, company size, seniority)",
        "Monthly warm prospect dashboard - named contacts with LinkedIn profiles and email where available",
      ],
      note: "Minimum recommended client ad spend: £500/month",
      highlight: true,
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <section className="pt-32 pb-24 px-10 bg-[#111318] border-b border-[#1e2229]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4 text-center">Pricing</div>
          <h2 className="text-[32px] lg:text-[38px] font-extrabold tracking-tight mb-4 text-center">
            Choose your package
          </h2>
          <p className="text-[17px] text-[#8a9099] text-center max-w-[560px] mx-auto mb-14">
            Transparent pricing. 3-month minimum commitment.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {services.map((service, i) => (
              <div
                key={i}
                className={`bg-[#16191f] border rounded-xl p-8 ${
                  service.highlight
                    ? 'border-lime-400 ring-1 ring-lime-400/20'
                    : 'border-[#1e2229]'
                }`}
              >
                {service.highlight && (
                  <div className="text-xs font-semibold uppercase tracking-widest text-lime-400 mb-3">Most Popular</div>
                )}
                <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                <div className="mb-6">
                  <span className="text-[36px] font-extrabold">{service.price}</span>
                  <span className="text-[#8a9099] text-sm">{service.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#8a9099]">
                      <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-1.5 shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.note && (
                  <p className="text-xs text-[#6b7280] mb-6 italic">{service.note}</p>
                )}
                <a
                  href="/#contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold text-[15px] transition-colors cursor-pointer ${
                    service.highlight
                      ? 'bg-lime-400 text-black hover:bg-lime-300'
                      : 'bg-[#1e2229] text-white hover:bg-[#252a33]'
                  }`}
                >
                  Book a Call
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

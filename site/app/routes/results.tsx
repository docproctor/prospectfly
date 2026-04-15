import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Results — ProspectFly" },
  { name: "description", content: "Early results from our LinkedIn engagement intelligence campaigns." },
];

export default function Results() {
  const stats = [
    { value: "1,704", label: "impressions in 24 hours" },
    { value: "5.1%", label: "CTR (10x LinkedIn benchmark)" },
    { value: "£0.32", label: "cost per click" },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <section className="pt-32 pb-24 px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4 text-center">Early Results</div>
          <h2 className="text-[32px] lg:text-[38px] font-extrabold tracking-tight mb-14 text-center">
            Results from our first campaigns
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#16191f] border border-[#1e2229] rounded-xl p-8 text-center">
                <div className="text-[42px] font-extrabold text-lime-400 mb-2">{stat.value}</div>
                <div className="text-sm text-[#8a9099]">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-[#8a9099] mb-6">
              Testimonials coming April 2026 - running pilot programmes now
            </p>
            <a
              href="/beta"
              className="inline-flex items-center gap-2 text-lime-400 font-semibold hover:text-lime-300 transition-colors cursor-pointer"
            >
              Apply for the free pilot programme →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

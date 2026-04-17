import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Services — ProspectFly" },
  {
    name: "description",
    content:
      "We run campaigns across Google, Meta and LinkedIn. We'll help you find the right platform for your business.",
  },
];

const comparisonData = [
  {
    label: "Buyer Intent",
    google: "High - people searching for exactly what you sell",
    meta: "Low to medium - passive audience",
    linkedin: "Medium to high - professional context",
  },
  {
    label: "Audience Targeting",
    google: "Keyword-based - captures active demand",
    meta: "Demographics, interests and behaviour",
    linkedin: "Job title, seniority, company, industry",
  },
  {
    label: "Lead Quality",
    google: "High intent, mixed qualification",
    meta: "Cold but scalable with right creative",
    linkedin: "High quality, lower volume",
  },
  {
    label: "Cost Per Click (UK)",
    google: "£1-15 depending on niche",
    meta: "£0.50-5 but needs volume to convert",
    linkedin: "£5-15 CPM campaigns, £8-25 CPC",
  },
  {
    label: "Best For",
    google: "Bottom-funnel, local services, direct response",
    meta: "Brand awareness, retargeting, B2C products",
    linkedin: "B2B, high-ticket services, niche audiences",
  },
  {
    label: "Common Mistake",
    google: "Targeting too broad or wrong match types",
    meta: "Expecting B2B conversions without warming",
    linkedin: "Running it like Google or Meta",
  },
  {
    label: "Our Approach",
    google: "Smart bidding + tight keyword structure",
    meta: "Creative-led campaigns + retargeting sequences",
    linkedin: "Thought Leader Ads + audience qualification",
  },
];

const platformCards = [
  {
    name: "Google Ads",
    description:
      "You have customers actively searching for what you sell. You want leads or sales now.",
    cta: "Start with Google →",
  },
  {
    name: "Meta Ads",
    description:
      "You have a visual product or strong creative. You want brand awareness or retargeting.",
    cta: "Start with Meta →",
  },
  {
    name: "LinkedIn Ads",
    description:
      "You sell B2B and want to reach specific job titles or companies.",
    cta: "Start with LinkedIn →",
  },
];

export default function Services() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
            What we do
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            Which growth platform?
            <br />
            We'll help you find it.
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Most businesses don't need to be on every platform. They need to be on
            the right one, set up properly, and managed consistently. We run
            campaigns across Google, Meta and LinkedIn - and we'll tell you
            honestly which one makes sense for you.
          </p>
        </div>
      </section>

      {/* Platform Comparison Table */}
      <section className="pt-6 pb-8 px-6">
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 bg-[#16191f] border-b border-white/10 font-display font-semibold text-gray-400 w-[16%]"></th>
                <th className="text-left p-4 bg-[#16191f] border-b border-white/10 font-display font-semibold text-lime-400 w-[28%]">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google Ads
                  </div>
                </th>
                <th className="text-left p-4 bg-[#16191f] border-b border-white/10 font-display font-semibold text-cyan-400 w-[28%]">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" fill="#1877F2"/>
                    </svg>
                    Meta Ads
                  </div>
                </th>
                <th className="text-left p-4 bg-[#16191f] border-b border-white/10 font-display font-semibold text-blue-400 w-[28%]">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
                    </svg>
                    LinkedIn Ads
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="p-4 text-gray-500 text-sm font-medium">
                    {row.label}
                  </td>
                  <td className="p-4 text-gray-300 text-xs">{row.google}</td>
                  <td className="p-4 text-gray-300 text-xs">{row.meta}</td>
                  <td className="p-4 text-gray-300 text-xs">{row.linkedin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Which Platform */}
      <section className="pt-6 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-10 text-center">
            Not sure where to start?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {platformCards.map((card, i) => (
              <div
                key={i}
                className="bg-[#16191f] rounded-2xl p-6 border border-white/5 flex flex-col"
              >
                <h3 className="font-display font-semibold text-white text-xl mb-4">
                  {card.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                  {card.description}
                </p>
                <Link
                  to="/contact"
                  className="text-lime-400 font-semibold hover:text-lime-300 transition-colors cursor-pointer"
                >
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-[#111318] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Still not sure which platform fits?
          </h2>
          <p className="text-gray-400 mb-8">
            Book a free 30-minute call. We'll look at your business, your market
            and your budget and give you a straight answer.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-lime-400 text-black font-display font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
          >
            Book a free call →
          </Link>
        </div>
      </section>
    </main>
  );
}

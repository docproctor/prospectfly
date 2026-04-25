import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Pricing — ProspectFly" },
  {
    name: "description",
    content:
      "Two ways to work with us. No hidden fees, no long contracts, no ad spend markup.",
  },
];

export default function Pricing() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-5 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
            Pricing
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            Simple, transparent pricing.
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Two ways to work with us. No hidden fees, no long contracts, no ad
            spend markup.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pt-5 pb-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Tier 1 - LinkedIn Video Content */}
            <div className="bg-[#16191f] rounded-2xl p-8 border border-white/5 flex flex-col">
              <div className="text-xs uppercase tracking-widest text-cyan-400 mb-4">
                LinkedIn Video Content
              </div>
              <div className="text-3xl font-bold text-white mb-4">
                £369
                <span className="text-lg text-gray-400 font-normal">/month</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                We film, edit and write the copy. You post. No ad spend
                required. Built for founders who want a consistent LinkedIn
                presence without the complexity.
              </p>
              <div className="text-sm text-white font-medium mb-3">
                Includes:
              </div>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-1.5 shrink-0"></span>
                  One remote filming session per month
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-1.5 shrink-0"></span>
                  4-6 edited short-form videos
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-1.5 shrink-0"></span>
                  LinkedIn post copy for each video
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-1.5 shrink-0"></span>
                  Ready to post, no editing required on your end
                </li>
              </ul>
              <p className="text-xs text-gray-500 mb-6">
                Requires: Insta360 Link webcam or equivalent. We'll guide you on
                setup.
              </p>
              <Link
                to="/contact"
                className="inline-block w-full text-center bg-lime-400 text-black font-display font-semibold py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
              >
                Book a free call →
              </Link>
            </div>

            {/* Tier 2 - Thought Leader Ads (highlighted) */}
            <div className="bg-[#16191f] rounded-2xl p-8 border-2 border-lime-400 flex flex-col">
              <div className="text-xs uppercase tracking-widest text-cyan-400 mb-4">
                Thought Leader Ads
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                From £999
                <span className="text-lg text-gray-400 font-normal">/month</span>
              </div>
              <div className="text-xs text-gray-500 mb-4">
                + ad spend paid direct to LinkedIn
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Full campaign management. We build your audience list, run paid
                ads behind your content and identify warm prospects for
                outreach.
              </p>
              <div className="text-sm text-white font-medium mb-3">
                Includes:
              </div>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-1.5 shrink-0"></span>
                  ICP qualification and company list build
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-1.5 shrink-0"></span>
                  Campaign setup and ongoing management
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-1.5 shrink-0"></span>
                  Monthly engager report - named warm prospects
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-1.5 shrink-0"></span>
                  Direct access to your specialist
                </li>
              </ul>
              <p className="text-xs text-gray-500 mb-6">
                Recommended minimum ad spend: £800/month paid directly to
                LinkedIn.
              </p>
              <Link
                to="/contact"
                className="inline-block w-full text-center bg-lime-400 text-black font-display font-semibold py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
              >
                Book a free call →
              </Link>
            </div>
          </div>

          {/* Anchor Note */}
          <p className="text-sm text-gray-500 mt-8 text-center">
            Ad spend is always paid directly to the platform. We never mark it
            up or pass it through us.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#111318] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Not sure which fits?
          </h2>
          <p className="text-gray-400 mb-8">
            Book a free 30-minute call. We'll look at your goals and budget and
            give you a straight answer - even if that means neither of these is
            right yet.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-lime-400 text-black font-display font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
          >
            Book a free audit →
          </Link>
        </div>
      </section>
    </main>
  );
}

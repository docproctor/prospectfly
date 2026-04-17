import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Pricing — ProspectFly" },
  {
    name: "description",
    content:
      "Simple, transparent pricing. All engagements start with a single platform and scale from there.",
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
            All engagements start with a single platform and scale from there.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="pt-5 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#16191f] rounded-2xl p-8 border border-white/5">
            <div className="text-3xl font-bold text-white mb-6">
              Starting from £599
              <span className="text-lg text-gray-400 font-normal">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-2 shrink-0"></span>
                Single platform management
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-2 shrink-0"></span>
                Campaign setup and ongoing optimisation
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-2 shrink-0"></span>
                Monthly performance report
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-2 shrink-0"></span>
                Direct access to your account manager
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-block w-full text-center bg-lime-400 text-black font-display font-semibold py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
            >
              Book a free call to discuss your budget →
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Ad spend is paid directly to the platform. We never mark up your
            media budget.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#111318] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Not sure which package fits?
          </h2>
          <p className="text-gray-400 mb-8">
            Book a free audit call. We'll look at your situation and recommend
            the right starting point - even if that means starting smaller than
            you expected.
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

import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  { title: "About — ProspectFly" },
  {
    name: "description",
    content:
      "ProspectFly is built by Mark Proctor - 27 years in digital marketing across Hearst, Tesco, Harvey Nichols and Informa.",
  },
];

const goodFit = [
  "You have a real product or service with proven demand",
  "You have a budget for both management fees and ad spend",
  "You want honest advice, not flattering reports",
  "You're happy to give it 90 days to find its stride",
  "You want one person who knows your account inside out, not a rotating team of juniors",
];

const notGoodFit = [
  "You need 10 customers by next week",
  "You're testing the market with no budget for iteration",
  "You want guaranteed results before we've seen your data",
];

const howIWork = [
  {
    title: "Direct access",
    description:
      "You deal with me, not an account manager. Every email, every call, every optimisation decision.",
  },
  {
    title: "No retainer padding",
    description:
      "I don't inflate hours or add unnecessary services. You pay for what moves the needle.",
  },
  {
    title: "Honest reporting",
    description:
      "If something isn't working I'll tell you before you notice. And I'll tell you what I'm doing about it.",
  },
];

export default function About() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
            About ProspectFly
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            One person. 27 years. Every major platform.
          </h1>
          <p className="text-gray-400 text-xl">
            I started in digital marketing before most of my clients had a website.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="pt-6 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold mb-8">
                Why I started ProspectFly.
              </h2>
              <div className="space-y-6 text-gray-300 text-base leading-relaxed">
                <p>
                  I've spent 27 years building digital products and running marketing campaigns for some of the UK's biggest brands.
                </p>
                <p>
                  I kept seeing the same thing. Businesses spending serious money on ads managed by agencies who were optimising for their own dashboards, not their clients' revenue. Impressive reports. Mediocre results.
                </p>
                <p>
                  ProspectFly is the agency I wanted to find but couldn't. Lean, direct, focused on one metric: more customers.
                </p>
              </div>
            </div>
            <div className="md:w-72 shrink-0">
              <img
                src="/mp-portrait-014.webp"
                alt="Mark Proctor"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who I've Worked With */}
      <section className="pt-8 pb-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-xl font-semibold text-white mb-8">
            Brands I've worked with
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-white font-display font-semibold text-lg">Hearst</div>
            <div className="text-white font-display font-semibold text-lg">Tesco</div>
            <div className="text-white font-display font-semibold text-lg">Harvey Nichols</div>
            <div className="text-white font-display font-semibold text-lg">Informa</div>
            <div className="text-white font-display font-semibold text-lg">Nestlé</div>
            <div className="text-white font-display font-semibold text-lg">Co-op</div>
            <div className="text-white font-display font-semibold text-lg">Omnicom</div>
            <div className="text-white font-display font-semibold text-lg">Raresocial</div>
          </div>
        </div>
      </section>

      {/* Credentials Strip */}
      <section className="py-12 px-6 border-t border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-1">27 years</div>
              <div className="text-sm text-gray-500">in digital marketing</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">Google · Meta · LinkedIn</div>
              <div className="text-sm text-gray-500">platforms managed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">B2B & B2C</div>
              <div className="text-sm text-gray-500">both sides</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">UK-based</div>
              <div className="text-sm text-gray-500">London</div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Fit */}
      <section className="pt-8 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-10">
            Who this works for - and who it doesn't.
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
          {/* Good fit */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Good fit</h3>
            <ul className="space-y-3">
              {goodFit.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <svg
                    className="w-5 h-5 text-lime-400 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not a good fit */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Not a good fit</h3>
            <ul className="space-y-3">
              {notGoodFit.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <span className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center text-gray-500">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="pt-8 pb-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-10">
            What working with me actually looks like.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {howIWork.map((item, i) => (
              <div
                key={i}
                className="bg-[#16191f] rounded-2xl p-6 border border-white/5"
              >
                <h3 className="font-display font-semibold text-white text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Photo */}
      <section className="py-20 px-6 bg-[#111318] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Photo and info */}
            <div className="flex items-center gap-5">
              <img
                src="/mark-proctor.webp"
                alt="Mark Proctor"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <div className="text-white font-['Space_Grotesk'] font-semibold text-lg">
                  Mark Proctor
                </div>
                <div className="text-gray-400 text-sm">Founder, ProspectFly</div>
              </div>
            </div>

            {/* CTA content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                Want to see if we're a good fit?
              </h2>
              <p className="text-gray-400 mb-6">
                Book a free 30-minute call. No hard sell - just an honest look at whether paid ads make sense for your business right now.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-lime-400 text-black font-display font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
              >
                Book a free call →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

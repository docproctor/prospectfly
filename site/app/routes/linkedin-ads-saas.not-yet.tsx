import type { MetaFunction } from "react-router";
import { Link } from "react-router";

// Where under-£10k leads land after their details are saved. Not a rejection:
// explain the maths, give them something useful, leave the door open.

const resources = [
  {
    to: "/resources/linkedin-ads-strategy",
    title: "LinkedIn ads strategy for B2B SaaS",
    description: "Where LinkedIn fits, and when it doesn't.",
  },
  {
    to: "/resources/linkedin-audience-targeting",
    title: "Audience targeting",
    description: "How to size an audience against the budget you actually have.",
  },
  {
    to: "/resources/linkedin-ad-creative",
    title: "Ad creative and formats",
    description: "Which formats earn the click, and which only look like they do.",
  },
  {
    to: "/resources/linkedin-tracking-attribution",
    title: "Tracking and attribution",
    description: "Counting the conversion that matters, not the one that flatters.",
  },
  {
    to: "/resources/linkedin-retargeting",
    title: "Retargeting and lead gen",
    description: "Getting more from the people who already know you.",
  },
];

export const meta: MetaFunction = () => [
  { title: "Thanks — ProspectFly" },
  { name: "robots", content: "noindex, nofollow" },
];

export default function LinkedInAdsSaasNotYet() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="h-16 flex items-center border-b border-white/5 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight">
            Prospect<span className="text-amber-500">Fly</span>
          </span>
        </div>
      </header>

      <section className="pt-12 lg:pt-16 pb-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-[34px]! lg:text-[44px]! font-bold leading-[1.1]! tracking-tight mb-6 max-w-3xl">
            Thanks — I've got your details. Honestly, a video wouldn't be much use to you yet.
          </h1>
          <div className="space-y-5 text-[17px] text-gray-400 leading-relaxed max-w-2xl">
            <p>
              Paid LinkedIn works when a customer is worth £10,000 or more a year. Below that, the
              cost of finding each customer eats the margin.
            </p>
            <p className="text-gray-300 border-l-2 border-lime-400 pl-5">
              LinkedIn is one of the most expensive places to buy a lead, and it takes several leads
              to win one customer. On a smaller contract, most of the first year's revenue goes on
              acquisition before anyone is paid to run the campaigns.
            </p>
            <p>
              That isn't something better creative fixes. So rather than send you a video about ads
              that wouldn't pay back, I'd rather tell you now.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl! lg:text-[30px]! font-bold tracking-tight mb-3">
            What's useful in the meantime
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl">
            The method I use, written up in full and free. Most of it applies whatever channel you
            end up using.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {resources.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="block bg-[#16191f] border border-[#1e2229] rounded-2xl p-5 hover:border-lime-400/40 transition-colors cursor-pointer"
              >
                <div className="font-display font-semibold text-white mb-1">{r.title} →</div>
                <div className="text-sm text-gray-400">{r.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 pb-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-[17px] text-gray-300 leading-relaxed max-w-2xl">
            The door's open. If your contract value moves past £10,000 — or you know someone already
            there —{" "}
            <Link to="/contact" className="text-lime-400 hover:text-lime-300 cursor-pointer">
              get in touch
            </Link>
            . Your details are already on file.
          </p>
        </div>
      </section>
    </div>
  );
}

import type { MetaFunction } from "react-router";

// Where qualified leads land. This URL is the LinkedIn Insight Tag conversion,
// so it carries nothing else — no CTA, no links.

export const meta: MetaFunction = () => [
  { title: "Got it — ProspectFly" },
  { name: "robots", content: "noindex, nofollow" },
];

export default function LinkedInAdsSaasThanks() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="h-16 flex items-center border-b border-white/5 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight">
            Prospect<span className="text-amber-500">Fly</span>
          </span>
        </div>
      </header>

      <section className="pt-16 lg:pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-[40px]! lg:text-[56px]! font-bold leading-[1.1]! tracking-tight mb-6">
            Got it.
          </h1>
          <div className="space-y-4 text-[17px] text-gray-400 leading-relaxed max-w-2xl">
            <p>Your video lands within two working days, sent to the address you gave me.</p>
            <p>If I need anything else to make it useful, I'll ask — but I probably won't.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

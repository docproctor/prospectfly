import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "ProspectFly | LinkedIn Engagement Intelligence for B2B Founders" },
    { name: "description", content: "We help B2B founders get more leads from LinkedIn. Get warm prospects direct to your inbox. Weekly. Done for you." },
  ];
};

export default function Index() {
  const problems = [
    {
      title: "Cold outreach is getting ignored",
      description: "Response rates are plummeting. Decision-makers are drowning in generic connection requests and InMails. Your message disappears into the noise.",
    },
    {
      title: "Most LinkedIn ad campaigns burn budget on the wrong audience",
      description: "Broad targeting, no signal intelligence, no follow-up on who engaged. You're paying for impressions that go nowhere.",
    },
    {
      title: "You post. People engage. You never find out who.",
      description: "Every like and comment is a buying signal you're ignoring. Without a system to identify and act on engagers, your content budget produces brand awareness at best.",
    },
  ];

  const processSteps = [
    {
      num: 1,
      title: "Target",
      description: "We build a precision audience of B2B companies. You reach founders at the right companies, not a generic LinkedIn audience.",
    },
    {
      num: 2,
      title: "Amplify",
      description: "Your best posts boosted as thought leader ads to your exact ICP. We manage bidding, scheduling, and creative testing.",
    },
    {
      num: 3,
      title: "Identify",
      description: "We track who engages. Every liker, commenter, and profile visitor identified and enriched.",
    },
    {
      num: 4,
      title: "Deliver",
      description: "Monthly warm prospect dashboard. Named contacts who've already seen you - ready for outreach.",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-10">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[1fr_400px] gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-1.5 text-sm font-medium text-lime-400 mb-6">
              <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
              LinkedIn Engagement Intelligence for B2B Founders
            </div>
            <h1 className="text-[48px] lg:text-[54px] font-extrabold leading-[1.08] tracking-tight mb-6">
              Know Exactly Who's Engaged On LinkedIn
            </h1>
            <p className="text-lg text-[#8a9099] leading-relaxed mb-9 max-w-[560px]">
              We help B2B founders get more leads from LinkedIn. Get warm prospects direct to your inbox. Weekly. Done for you.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="bg-lime-400 text-black px-7 py-3.5 rounded-lg font-bold text-[15px] hover:bg-lime-300 transition-all hover:-translate-y-0.5 cursor-pointer">
                Book a Free Discovery Call
              </a>
              <a href="#process" className="text-[#8a9099] text-sm flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                See how it works →
              </a>
            </div>
          </div>

          {/* Right - Stats Card */}
          <div className="bg-[#16191f] border border-[#1e2229] rounded-2xl p-8 hidden lg:block">
            <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-6">
              Early Campaign Results
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-4 pb-5 border-b border-[#1e2229]">
                <div className="w-10 h-10 bg-lime-400/10 rounded-lg flex items-center justify-center text-lime-400 font-bold text-lg shrink-0">
                  %
                </div>
                <div>
                  <div className="font-bold text-2xl text-lime-400">5.1% CTR</div>
                  <div className="text-[13px] text-[#8a9099]">vs 0.4% LinkedIn benchmark</div>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-5 border-b border-[#1e2229]">
                <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-lg shrink-0">
                  £
                </div>
                <div>
                  <div className="font-bold text-2xl text-cyan-400">£0.32 cost per click</div>
                  <div className="text-[13px] text-[#8a9099]">vs £4-10 industry average</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-lime-400/10 rounded-lg flex items-center justify-center text-lime-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-xl">Engager identification</div>
                  <div className="text-[13px] text-[#8a9099]">warm outreach every month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-10 bg-[#111318] border-t border-b border-[#1e2229]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[32px] lg:text-[38px] font-extrabold tracking-tight mb-12 text-center max-w-[700px] mx-auto">
            Most B2B LinkedIn activity produces impressions, not pipeline
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, i) => (
              <div key={i} className="bg-[#16191f] border border-[#1e2229] rounded-xl p-7">
                <h3 className="text-[17px] font-bold mb-3 text-[#e8eaed]">{problem.title}</h3>
                <p className="text-sm text-[#8a9099] leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-lime-400 mb-4 text-center">How It Works</div>
          <h2 className="text-[32px] lg:text-[38px] font-extrabold tracking-tight mb-16 text-center">
            Targeting + Amplification + Intelligence + Outreach
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center text-lg font-extrabold text-black mb-5">
                  {step.num}
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-14 w-[calc(100%-20px)] h-0.5 bg-lime-400/30"></div>
                )}
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-[#8a9099] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-10 text-center">
        <div className="max-w-[520px] mx-auto">
          <h2 className="text-[36px] lg:text-[44px] font-extrabold tracking-tight mb-5">
            Ready to turn your LinkedIn content into warm prospects?
          </h2>
          <p className="text-[17px] text-[#8a9099] mb-10">
            Book a free 30-minute discovery call. No hard sell - just an honest conversation about whether this is right for your business.
          </p>
          <a
            href="#contact"
            className="inline-block bg-lime-400 text-black px-8 py-4 rounded-lg font-bold text-[15px] hover:bg-lime-300 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </section>
    </div>
  );
}

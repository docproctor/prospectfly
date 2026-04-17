import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "ProspectFly | Performance Marketing Agency UK" },
    { name: "description", content: "We run Google Ads, Meta and LinkedIn campaigns for businesses that want more customers - not more dashboards." },
  ];
};

export default function Index() {
  const problems = [
    {
      description: "You're invisible to the customers who are actively searching for you right now.",
    },
    {
      description: "Your current campaigns are generating clicks and impressions. But not enough customers.",
    },
    {
      description: "You don't need more data. You need someone who knows what to do with it.",
    },
  ];

  const processSteps = [
    {
      num: 1,
      title: "Audit",
      description: "We look at what you're currently doing - or what your competitors are doing if you're starting fresh. No fluff, just what's working and what isn't.",
    },
    {
      num: 2,
      title: "Build",
      description: "We set up campaigns properly. Right audience, right channel, right bid strategy. Most agencies skip this part.",
    },
    {
      num: 3,
      title: "Run",
      description: "We manage everything. Daily monitoring, weekly optimisation, monthly reporting. You focus on serving the customers we send you.",
    },
    {
      num: 4,
      title: "Grow",
      description: "When something works we scale it. When it doesn't we fix it fast. No 3-month lock-ins on bad campaigns.",
    },
  ];

  const services = [
    {
      title: "Google Ads",
      description: "The highest-intent channel available. People searching for exactly what you sell. We set up and manage Search, Shopping and Display campaigns that bring customers who are ready to buy.",
    },
    {
      title: "Meta Ads",
      subtitle: "Facebook & Instagram",
      description: "Reach people who match your best customers before they've started searching. Strong for awareness, retargeting and direct response. We handle creative strategy, audience build and campaign management.",
    },
    {
      title: "LinkedIn Ads",
      description: "The only platform where you can target by job title, company and seniority. Essential for B2B. We specialise in Thought Leader Ads and ABM campaigns for companies selling to other businesses.",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-10">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-1.5 text-sm font-medium text-lime-400 mb-6">
            <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
            Performance Marketing Agency · UK
          </div>
          <h1 className="text-[48px] lg:text-[60px] font-extrabold leading-[1.08] tracking-tight mb-6">
            Better content. Smarter ads. Faster growth.
          </h1>
          <p className="text-lg text-[#8a9099] leading-relaxed mb-9 max-w-[560px] mx-auto">
            Paid ads and content marketing, supercharged with AI.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" className="bg-lime-400 text-black px-7 py-3.5 rounded-lg font-bold text-[15px] hover:bg-lime-300 transition-all hover:-translate-y-0.5 cursor-pointer">
              Get a free audit →
            </a>
            <a href="#process" className="text-[#8a9099] text-sm flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
              See how it works ↓
            </a>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-8 px-10 border-t border-b border-[#1e2229]">
        <div className="max-w-[900px] mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-sm text-[#8a9099]">
            <span>25+ years experience</span>
            <span className="hidden md:inline text-[#1e2229]">|</span>
            <span>Google · Meta · LinkedIn</span>
            <span className="hidden md:inline text-[#1e2229]">|</span>
            <span>UK-based</span>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-10 bg-[#111318]">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, i) => (
              <div key={i} className="bg-[#16191f] border border-[#1e2229] rounded-xl p-7">
                <p className="text-[17px] text-[#e8eaed] leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[32px] lg:text-[38px] font-extrabold tracking-tight mb-16 text-center">
            How we turn ad spend into customers
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

      {/* Services */}
      <section id="services" className="py-24 px-10 bg-[#111318] border-t border-b border-[#1e2229]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[32px] lg:text-[38px] font-extrabold tracking-tight mb-16 text-center">
            What we do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-[#16191f] border border-[#1e2229] rounded-xl p-8">
                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                {service.subtitle && (
                  <p className="text-sm text-[#8a9099] mb-4">{service.subtitle}</p>
                )}
                {!service.subtitle && <div className="mb-4"></div>}
                <p className="text-[15px] text-[#8a9099] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-10">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[32px] lg:text-[38px] font-extrabold tracking-tight mb-8">
            Built by someone who's been doing this since Google Ads launched.
          </h2>
          <div className="space-y-6 text-[17px] text-[#8a9099] leading-relaxed">
            <p>
              27 years of marketing experience across Hearst, Tesco, Harvey Nichols and Informa. I've run Google Ads campaigns since the early 2000s, built two SaaS products, and managed paid media across every major platform.
            </p>
            <p>
              ProspectFly exists because most agencies overcomplicate this. You want more customers. I know how to get them.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-10 text-center bg-[#111318] border-t border-[#1e2229]">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-[36px] lg:text-[44px] font-extrabold tracking-tight mb-5">
            Want to know what's possible for your business?
          </h2>
          <p className="text-[17px] text-[#8a9099] mb-10">
            Book a free 30-minute audit call. I'll look at your current setup - or your competitors' - and tell you honestly what I'd do differently.
          </p>
          <a
            href="/contact"
            className="inline-block bg-lime-400 text-black px-8 py-4 rounded-lg font-bold text-[15px] hover:bg-lime-300 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Book a free audit →
          </a>
        </div>
      </section>
    </div>
  );
}

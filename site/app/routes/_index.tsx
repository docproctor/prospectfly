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
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm text-[#8a9099]">
            <span>25+ years experience</span>
            <span className="hidden md:inline text-[#1e2229]">|</span>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" fill="#1877F2"/>
                </svg>
                Meta
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
                </svg>
                LinkedIn
              </span>
            </div>
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

import { useState } from "react";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Prospect Fly | LinkedIn Ads Agency for B2B SaaS" },
    { name: "description", content: "We run LinkedIn ad campaigns for B2B SaaS companies between 50 and 500 people. Signal-led targeting. Qualified leads. Measurable pipeline growth." },
  ];
};

// Icons
function TargetIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" strokeWidth="2" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-[#1e2229] last:border-b-0">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex justify-between items-center bg-[#16191f] hover:bg-[#1a1d24] transition-colors cursor-pointer text-left"
      >
        <span className="font-semibold text-[15px]">{question}</span>
        <span className="text-cyan-400 text-xl font-light">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 bg-[#16191f] text-[#8a9099] text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function Index() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const whoWeHelp = [
    {
      icon: "🚀",
      title: "Series A / B Scale-ups",
      description: "You've found product-market fit and need a predictable, scalable channel to reach decision-makers at the right companies. LinkedIn is it.",
    },
    {
      icon: "📈",
      title: "Heads of Marketing",
      description: "You need a specialist partner who can own LinkedIn end-to-end, report on pipeline impact, and align with your sales team's outreach.",
    },
    {
      icon: "🎯",
      title: "Founders Going Upmarket",
      description: "You're moving from SMB to mid-market and need to reach VP and C-level buyers at specific target accounts. LinkedIn ABM is the answer.",
    },
  ];

  const services = [
    {
      num: "01",
      title: "Campaign Strategy & Setup",
      description: "We audit your existing account (or build from scratch), define your ICP, set objectives, and structure campaigns for maximum learning velocity and ROI.",
    },
    {
      num: "02",
      title: "Signal-Led Audience Targeting",
      description: "Using our proprietary signal data — job postings, funding rounds, headcount growth — we build audiences of companies actively in buying mode, not just job titles.",
    },
    {
      num: "03",
      title: "Ad Creative & Copywriting",
      description: "Scroll-stopping creative built for the LinkedIn feed. Single image, video, carousel, and document ads — tested continuously to find what resonates with your buyers.",
    },
    {
      num: "04",
      title: "Lead Gen Forms & Landing Pages",
      description: "LinkedIn Lead Gen Forms that convert at 10-15%. We build, test, and optimise every step from ad click to booked meeting in your sales team's calendar.",
    },
    {
      num: "05",
      title: "Account-Based Marketing (ABM)",
      description: "Target your exact dream accounts by company. Upload your list, we'll reach every decision-maker inside those businesses with tailored messaging across the funnel.",
    },
    {
      num: "06",
      title: "Reporting & Pipeline Attribution",
      description: "Monthly reports focused on pipeline impact — cost per lead, lead quality, meetings booked, and revenue influenced. No vanity metrics, no fluff.",
    },
  ];

  const processSteps = [
    {
      num: 1,
      title: "Discovery & Audit",
      description: "We start with a 30-minute discovery call to understand your ICP, sales cycle, existing assets, and pipeline goals. If you have existing campaigns, we audit them and identify exactly where budget is being wasted.",
    },
    {
      num: 2,
      title: "Signal Research & Audience Build",
      description: "Using our proprietary signal data, we identify the companies most likely to be in-market right now — actively hiring, recently funded, or showing growth signals. These become your warmest LinkedIn audiences.",
    },
    {
      num: 3,
      title: "Creative Strategy & Asset Production",
      description: "We develop your messaging framework and produce ad creative — copy, visuals, and format strategy — designed to educate and convert your specific buyer at every stage of awareness.",
    },
    {
      num: 4,
      title: "Launch & Rapid Testing",
      description: "Campaigns go live within 2 weeks of kickoff. We run structured A/B tests across targeting, creative, and copy to identify winning combinations as quickly as possible.",
    },
    {
      num: 5,
      title: "Optimise, Scale & Report",
      description: "Weekly optimisations. Monthly pipeline reports. As we learn what works, we scale the winners and kill what doesn't. Most clients see meaningful CPL improvement between months 2 and 3.",
    },
  ];

  const whyUs = [
    {
      title: "Signal-led targeting nobody else has",
      description: "We built our own signal intelligence system that monitors job postings, funding announcements, and headcount growth across thousands of UK and European SaaS companies. Your ads reach companies actively in buying mode — not just job titles in a spreadsheet.",
    },
    {
      title: "B2B SaaS only — no generalists",
      description: "We work exclusively with B2B SaaS companies between 50 and 500 people. That means we understand your sales cycle, your buyers, and what moves the needle. You won't be managed by someone who ran e-commerce campaigns last month.",
    },
    {
      title: "Pipeline focus, not lead volume",
      description: "We report on what actually matters: pipeline created and revenue influenced — not impressions, clicks, or form fills from people who'll never buy. Your CFO will understand our reports.",
    },
    {
      title: "Founder-led, senior-level work",
      description: "Your account is managed by the founders — not passed to a junior after onboarding. You get direct access, fast responses, and strategic thinking on every campaign decision.",
    },
  ];

  const testimonials = [
    {
      quote: "Prospect Fly understood our buyers better than agencies twice their size. The signal-based targeting surfaced companies we'd never have thought to target — and they converted.",
      initials: "JD",
      name: "James D.",
      role: "Head of Marketing, B2B SaaS · Series A",
    },
    {
      quote: "We'd burned through budget with two other agencies. Prospect Fly rebuilt our campaigns from scratch with a focus on pipeline, not leads. CPL dropped 40% in month two.",
      initials: "SK",
      name: "Sarah K.",
      role: "Founder & CEO · 80-person SaaS",
    },
  ];

  const faqs = [
    {
      question: "What's the minimum LinkedIn ad budget you recommend?",
      answer: "We recommend a minimum of £2,000/month in ad spend to generate enough data for meaningful optimisation. Below that, the learning phase takes too long and CPL suffers. Our management fee is separate and based on the scope of work.",
    },
    {
      question: "How long before we see results?",
      answer: "Most campaigns generate initial leads within 30 days. The first 60-90 days are a structured learning phase — we're testing audiences, creative, and copy. CPL typically improves significantly between months 2 and 3 as we apply those learnings.",
    },
    {
      question: "Do you work with companies outside the UK?",
      answer: "Yes. We work with B2B SaaS companies across the UK, EU, and North America. LinkedIn's targeting works globally and our signal data covers UK and major European markets.",
    },
    {
      question: "What makes your targeting different from other agencies?",
      answer: "Most agencies build audiences from job titles and company size alone. We layer in proprietary signal data — companies that are actively hiring, recently funded, or showing growth signals — so your ads reach companies that are actually in buying mode.",
    },
    {
      question: "Do you require a minimum contract length?",
      answer: "We ask for a 3-month initial commitment because that's the minimum time needed to properly test and optimise campaigns. After that, it's rolling monthly with 30 days notice.",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="pt-24 pb-20 px-10">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[1fr_420px] gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-1.5 text-sm font-medium text-lime-400 mb-6">
              <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
              UK-Based LinkedIn Ads Agency · B2B SaaS Specialists
            </div>
            <h1 className="text-[54px] font-extrabold leading-[1.08] tracking-tight mb-6">
              LinkedIn Ads That Fill Your Pipeline
            </h1>
            <p className="text-lg text-[#8a9099] leading-relaxed mb-9 max-w-[520px]">
              We run LinkedIn ad campaigns for B2B SaaS companies between 50 and 500 people. Signal-led targeting. Qualified leads. Measurable pipeline growth.
            </p>
            <div className="flex items-center gap-4">
              <a href="#contact" className="bg-lime-400 text-black px-7 py-3.5 rounded-lg font-bold text-[15px] hover:bg-lime-300 transition-all hover:-translate-y-0.5 cursor-pointer">
                Book a Free Discovery Call
              </a>
              <a href="#results" className="text-[#8a9099] text-sm flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                See client results →
              </a>
            </div>
          </div>

          {/* Right - Stats Card */}
          <div className="bg-[#16191f] border border-[#1e2229] rounded-2xl p-8 hidden lg:block">
            <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-5">
              What we track for every client
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 py-3.5 border-b border-[#1e2229]">
                <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center text-cyan-400">
                  <TargetIcon />
                </div>
                <div>
                  <div className="font-bold text-xl">Cost Per Lead</div>
                  <div className="text-[13px] text-[#8a9099]">Not cost per click — actual leads in your CRM</div>
                </div>
              </div>
              <div className="flex items-center gap-4 py-3.5 border-b border-[#1e2229]">
                <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center text-cyan-400">
                  <ChartIcon />
                </div>
                <div>
                  <div className="font-bold text-xl">Pipeline Created</div>
                  <div className="text-[13px] text-[#8a9099]">Revenue attributed to LinkedIn, not just impressions</div>
                </div>
              </div>
              <div className="flex items-center gap-4 py-3.5">
                <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center text-cyan-400">
                  <RefreshIcon />
                </div>
                <div>
                  <div className="font-bold text-xl">Quarter-on-Quarter Growth</div>
                  <div className="text-[13px] text-[#8a9099]">Every campaign improves on the last</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <div className="border-t border-b border-[#1e2229] py-7 px-10">
        <div className="max-w-[1100px] mx-auto flex items-center justify-center gap-16 flex-wrap">
          <div className="text-center">
            <div className="text-[28px] font-extrabold text-lime-400">27+</div>
            <div className="text-[13px] text-[#8a9099]">Years B2B Experience</div>
          </div>
          <div className="text-center">
            <div className="text-[28px] font-extrabold text-cyan-400">B2B SaaS</div>
            <div className="text-[13px] text-[#8a9099]">Our Only Niche</div>
          </div>
          <div className="text-center">
            <div className="text-[28px] font-extrabold text-lime-400">50–500</div>
            <div className="text-[13px] text-[#8a9099]">Employee Sweet Spot</div>
          </div>
          <div className="text-center">
            <div className="text-[28px] font-extrabold text-cyan-400">Signal-Led</div>
            <div className="text-[13px] text-[#8a9099]">Proprietary Targeting Data</div>
          </div>
        </div>
      </div>

      {/* Who We Help */}
      <section className="py-24 px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-lime-400 mb-4">Who We Work With</div>
          <h2 className="text-[38px] font-extrabold tracking-tight mb-4">Built for one type of company</h2>
          <p className="text-[17px] text-[#8a9099] leading-relaxed max-w-[560px] mb-14">
            We don't work with everyone. We work with B2B SaaS companies between 50 and 500 people who are ready to invest in LinkedIn as a serious pipeline channel.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {whoWeHelp.map((item, i) => (
              <div key={i} className="bg-[#16191f] border border-[#1e2229] rounded-xl p-7 hover:border-lime-400/40 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-[17px] font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[#8a9099] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-10 bg-[#111318] border-t border-b border-[#1e2229]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">What We Do</div>
          <h2 className="text-[38px] font-extrabold tracking-tight mb-4">Everything your LinkedIn ads need</h2>
          <p className="text-[17px] text-[#8a9099] leading-relaxed max-w-[560px] mb-14">
            We handle the full campaign lifecycle — strategy, creative, targeting, optimisation, and reporting — so you can focus on closing deals.
          </p>
          <div className="grid md:grid-cols-2 gap-0.5 bg-[#1e2229] rounded-xl overflow-hidden">
            {services.map((service, i) => (
              <div key={i} className="bg-[#16191f] p-8 flex gap-5 hover:bg-[#1a1d24] transition-colors">
                <div className="text-[13px] font-bold text-cyan-400/60 pt-0.5 shrink-0">{service.num}</div>
                <div>
                  <h3 className="text-base font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-[#8a9099] leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 px-10">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* Left - Sticky */}
          <div className="lg:sticky lg:top-24">
            <div className="text-xs font-semibold uppercase tracking-widest text-lime-400 mb-4">Our Process</div>
            <h2 className="text-[38px] font-extrabold tracking-tight mb-4">How we turn LinkedIn into a pipeline machine</h2>
            <p className="text-base text-[#8a9099] leading-relaxed mt-4">
              A proven, repeatable process refined across dozens of B2B SaaS campaigns. You'll see your first results within 30 days.
            </p>
          </div>

          {/* Right - Steps */}
          <div className="relative pl-10">
            <div className="absolute left-[19px] top-5 bottom-5 w-0.5 bg-gradient-to-b from-lime-400 to-transparent"></div>
            <div className="space-y-10">
              {processSteps.map((step, i) => (
                <div key={i} className="relative flex gap-7">
                  <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center text-[15px] font-extrabold text-black shrink-0 -ml-10 relative z-10">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 mt-2">{step.title}</h3>
                    <p className="text-sm text-[#8a9099] leading-relaxed max-w-[600px]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="results" className="py-24 px-10 bg-[#111318] border-t border-b border-[#1e2229]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">Why Prospect Fly</div>
          <h2 className="text-[38px] font-extrabold tracking-tight mb-4">What makes us different</h2>
          <p className="text-[17px] text-[#8a9099] leading-relaxed max-w-[560px] mb-14">
            There are dozens of LinkedIn agencies. Here's why B2B SaaS companies choose us.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {whyUs.map((item, i) => (
              <div key={i} className="bg-[#16191f] border border-[#1e2229] rounded-xl p-8">
                <h3 className="text-[17px] font-bold mb-3 flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-sm shrink-0"></span>
                  {item.title}
                </h3>
                <p className="text-sm text-[#8a9099] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-lime-400 mb-4">Client Results</div>
          <h2 className="text-[38px] font-extrabold tracking-tight mb-4">What our clients say</h2>
          <p className="text-[17px] text-[#8a9099] leading-relaxed max-w-[560px] mb-14">
            Currently onboarding our first cohort of clients. Case studies publishing May 2026.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-[#16191f] border border-[#1e2229] rounded-xl p-7">
                <p className="text-[15px] text-[#e8eaed] leading-relaxed mb-5 italic">
                  <span className="text-lime-400 text-xl not-italic">"</span>
                  {item.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-lime-400/15 rounded-full flex items-center justify-center font-bold text-lime-400 text-sm">
                    {item.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{item.name}</div>
                    <div className="text-[13px] text-[#8a9099]">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">FAQ</div>
          <h2 className="text-[38px] font-extrabold tracking-tight mb-4">Common questions</h2>
          <p className="text-[17px] text-[#8a9099] leading-relaxed max-w-[560px] mb-10">
            Everything you need to know before booking a call.
          </p>
          <div className="border border-[#1e2229] rounded-xl overflow-hidden">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === i}
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-10 text-center">
        <div className="max-w-[480px] mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-lime-400 mb-4">Get Started</div>
          <h2 className="text-[44px] font-extrabold tracking-tight mb-5">Ready to fill your pipeline?</h2>
          <p className="text-[17px] text-[#8a9099] mb-10">
            Book a free 30-minute discovery call. No hard sell — just an honest conversation about whether LinkedIn ads are right for your business right now.
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-[#16191f] border border-[#1e2229] rounded-lg px-5 py-3.5 text-[15px] placeholder-[#8a9099] focus:border-cyan-400 focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Work email address"
              className="w-full bg-[#16191f] border border-[#1e2229] rounded-lg px-5 py-3.5 text-[15px] placeholder-[#8a9099] focus:border-cyan-400 focus:outline-none transition-colors"
            />
            <input
              type="text"
              placeholder="Company name"
              className="w-full bg-[#16191f] border border-[#1e2229] rounded-lg px-5 py-3.5 text-[15px] placeholder-[#8a9099] focus:border-cyan-400 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-lime-400 text-black px-7 py-3.5 rounded-lg font-bold text-[15px] hover:bg-lime-300 transition-colors cursor-pointer"
            >
              Book a Free Discovery Call
            </button>
          </form>
          <p className="text-[13px] text-[#8a9099] mt-4">No obligation · 30 minutes · UK-based</p>
        </div>
      </section>
    </div>
  );
}

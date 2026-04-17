import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  { title: "About Mark Proctor — ProspectFly" },
  {
    name: "description",
    content:
      "ProspectFly is built by Mark Proctor, a full stack product strategist with 27 years of experience across Hearst, Tesco, Harvey Nichols and Informa.",
  },
];

const careerHighlights = [
  {
    company: "RareSocial",
    role: "Founder",
    description: "Social media intelligence platform for enterprise brands. Built from scratch to acquisition.",
  },
  {
    company: "Informa",
    role: "Digital Product Lead",
    description: "Led product strategy for B2B events and media across EMEA markets.",
  },
  {
    company: "Harvey Nichols",
    role: "Head of Digital",
    description: "Rebuilt ecommerce platform and loyalty programme for luxury retail.",
  },
  {
    company: "Omnicom",
    role: "Digital Strategy Director",
    description: "Led digital transformation projects for FMCG and retail clients.",
  },
  {
    company: "Tesco",
    role: "Product Manager",
    description: "Built internal tools and customer-facing products for the UK's largest retailer.",
  },
  {
    company: "Hearst",
    role: "Digital Lead",
    description: "Led digital product for magazine brands reaching millions of readers.",
  },
];

const skills = {
  technical: [
    "React / Next.js",
    "Node.js / TypeScript",
    "PostgreSQL / Supabase",
    "Python / Data Analysis",
    "API Architecture",
    "Cloud Infrastructure",
  ],
  creative: [
    "Product Design",
    "UX Strategy",
    "Content Systems",
    "Brand Development",
    "Campaign Architecture",
    "Copywriting",
  ],
  commercial: [
    "B2B SaaS Strategy",
    "Go-to-Market",
    "Revenue Operations",
    "Sales Enablement",
    "LinkedIn Growth",
    "Demand Generation",
  ],
};

export default function About() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
          <div>
            <div className="inline-block mb-6 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
              About
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Built by someone who's done this<br />
              <span className="text-lime-400">27 years across both sides.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm Mark Proctor. I've spent my career at the intersection of technical product development,
              creative strategy, and commercial execution — building digital products for brands like
              Hearst, Tesco, Harvey Nichols, and Informa.
            </p>
            <p className="text-gray-400 leading-relaxed">
              ProspectFly exists because I kept seeing the same problem: B2B founders posting great
              content on LinkedIn with no system to capture the people who engaged. The likes and
              comments disappeared into the void. I built what I needed — and now I run it for others.
            </p>
          </div>

          {/* Profile card */}
          <div className="bg-[#16191f] border border-white/5 rounded-2xl p-6">
            <img
              src="/mark-proctor.webp"
              alt="Mark Proctor"
              className="w-full rounded-xl mb-4"
            />
            <h2 className="font-display text-xl font-bold text-white mb-1">Mark Proctor</h2>
            <p className="text-sm text-lime-400 mb-4">Full Stack Product Strategist</p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                London, UK
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                27 years in digital
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                B2B, Retail, Media, Events
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Magic Triangle */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">The Product Magic Triangle</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Most people specialise in one area. I've spent my career building expertise across all three —
            because the best products happen where they intersect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Technical */}
          <div className="bg-[#16191f] rounded-2xl p-6 border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-white mb-3">Technical</h3>
            <p className="text-sm text-gray-400 mb-4">I build the products myself. Not just specs — actual code, databases, infrastructure.</p>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill) => (
                <span key={skill} className="text-xs bg-cyan-400/10 text-cyan-400 px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Creative */}
          <div className="bg-[#16191f] rounded-2xl p-6 border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-lime-400/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-white mb-3">Creative</h3>
            <p className="text-sm text-gray-400 mb-4">Design, content, and brand strategy. Making complex things feel simple.</p>
            <div className="flex flex-wrap gap-2">
              {skills.creative.map((skill) => (
                <span key={skill} className="text-xs bg-lime-400/10 text-lime-400 px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Commercial */}
          <div className="bg-[#16191f] rounded-2xl p-6 border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-white mb-3">Commercial</h3>
            <p className="text-sm text-gray-400 mb-4">Revenue, growth, and go-to-market. Products that people actually pay for.</p>
            <div className="flex flex-wrap gap-2">
              {skills.commercial.map((skill) => (
                <span key={skill} className="text-xs bg-amber-400/10 text-amber-400 px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">Career highlights</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Product leadership across B2B media, enterprise retail, and digital agencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {careerHighlights.map((item) => (
            <div key={item.company} className="bg-[#16191f] rounded-xl p-5 border border-white/5">
              <h3 className="font-display font-semibold text-white mb-1">{item.company}</h3>
              <p className="text-xs text-lime-400 mb-3">{item.role}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why ProspectFly */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-lime-400/5 rounded-3xl p-10 border border-lime-400/20">
          <div className="max-w-2xl">
            <div className="text-xs text-lime-400 font-mono mb-4">Why I built ProspectFly</div>
            <h2 className="font-display text-3xl font-bold text-white mb-6">
              LinkedIn is the best B2B channel.<br />
              But most founders are leaving signal on the table.
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I've run LinkedIn campaigns for years — both for my own products and for clients.
                The pattern is always the same: great content gets engagement, but there's no system
                to capture who engaged.
              </p>
              <p>
                The likes disappear. The commenters are forgotten. The people who viewed your profile
                after seeing your ad? No idea who they are.
              </p>
              <p>
                ProspectFly solves this. We identify the people who engage with your content, score them
                against your ICP, and deliver a warm prospect list every month. Named contacts who already
                know your name — ready for outreach.
              </p>
              <p className="text-white font-medium">
                That's the system I wanted. So I built it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="font-display text-3xl font-bold mb-4">Want to work with me?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Book a call and let's talk about whether ProspectFly is the right fit for your business.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-lime-400 text-black font-display font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
        >
          Book a discovery call →
        </Link>
      </section>
    </main>
  );
}

import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "About — ProspectFly" },
  { name: "description", content: "Built by a B2B product leader with 27 years of experience. ProspectFly exists because LinkedIn paid amplification works - but most B2B founders are running it wrong." },
];

export default function About() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <section className="pt-32 pb-24 px-10 bg-[#111318] border-b border-[#1e2229]">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-lime-400 mb-4">About</div>
          <h2 className="text-[32px] lg:text-[38px] font-extrabold tracking-tight mb-8">
            Built by a B2B product leader
          </h2>
          <p className="text-lg text-[#8a9099] leading-relaxed">
            Built by a B2B product leader with 27 years of experience across Hearst, Tesco, Harvey Nichols and Informa. ProspectFly exists because LinkedIn paid amplification works - but most B2B founders are running it wrong. Most founders post and move on. We build the system that tells you who stopped scrolling - and why it matters.
          </p>
        </div>
      </section>
    </div>
  );
}

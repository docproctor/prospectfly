import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "LinkedIn Ads Strategy for B2B SaaS — ProspectFly" },
  { name: "description", content: "Our LinkedIn advertising strategy for B2B SaaS companies. Objectives, formats, and campaign structure." },
];

export default function Strategy() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen pt-32 px-6 max-w-5xl mx-auto">
      <div className="inline-block mb-6 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
        Strategy
      </div>
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">LinkedIn Ads Strategy</h1>
      <p className="text-gray-400 text-lg max-w-2xl">Content coming soon.</p>
    </main>
  );
}

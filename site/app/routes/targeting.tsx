import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "LinkedIn Audience Targeting for B2B SaaS — ProspectFly" },
  { name: "description", content: "How we build precision audiences for LinkedIn campaigns. ICP scoring and account qualification." },
];

export default function Targeting() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen pt-32 px-6 max-w-5xl mx-auto">
      <div className="inline-block mb-6 px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-400 text-xs tracking-widest uppercase">
        Targeting
      </div>
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Audience Targeting</h1>
      <p className="text-gray-400 text-lg max-w-2xl">Content coming soon.</p>
    </main>
  );
}

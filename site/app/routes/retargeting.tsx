import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "LinkedIn Retargeting & Lead Gen — ProspectFly" },
  { name: "description", content: "Matched audiences and warm follow-up strategies for LinkedIn B2B campaigns." },
];

export default function Retargeting() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen pt-32 px-6 max-w-5xl mx-auto">
      <div className="inline-block mb-6 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
        Retargeting
      </div>
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Retargeting & Lead Gen</h1>
      <p className="text-gray-400 text-lg max-w-2xl">Content coming soon.</p>
    </main>
  );
}

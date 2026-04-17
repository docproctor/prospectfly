import { useState } from "react";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Free LinkedIn Ads Audit — ProspectFly" },
  { name: "robots", content: "noindex, nofollow" },
];

export default function LinkedInAdsAudit() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://formspree.io/f/mqewprry", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        window.location.href = "/thank-you";
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-xl w-full">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
            Free LinkedIn Ads Audit
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Find out why your LinkedIn ads aren't generating pipeline.
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            We'll review your targeting, creative and campaign structure - and
            tell you honestly what's costing you performance.
          </p>

          <ul className="space-y-3 mb-10">
            <li className="flex items-start gap-3 text-gray-300">
              <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-2 shrink-0"></span>
              No cost, no obligation
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-2 shrink-0"></span>
              30-minute call, you'll leave with clear next steps
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-2 shrink-0"></span>
              We'll be honest if LinkedIn isn't right for you
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="form_source" value="LinkedIn Ads Audit" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name <span className="text-lime-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-[#16191f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email <span className="text-lime-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-[#16191f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium mb-2"
              >
                Company <span className="text-lime-400">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full bg-[#16191f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50"
                placeholder="Your company"
              />
            </div>

            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium mb-2"
              >
                Website URL
              </label>
              <input
                type="url"
                id="website"
                name="website"
                className="w-full bg-[#16191f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50"
                placeholder="https://yourcompany.com"
              />
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium mb-2"
              >
                Monthly budget
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full bg-[#16191f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-400/50 cursor-pointer"
              >
                <option value="">Select an option</option>
                <option value="Not started yet">Not started yet</option>
                <option value="Under £500">Under £500</option>
                <option value="£500-£2k">£500-£2k</option>
                <option value="£2k-£5k">£2k-£5k</option>
                <option value="£5k+">£5k+</option>
              </select>
            </div>

            {formState === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={formState === "submitting"}
              className="w-full bg-lime-400 text-black font-['Space_Grotesk'] font-semibold py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 disabled:opacity-50 cursor-pointer"
            >
              {formState === "submitting" ? "Sending..." : "Get my free audit →"}
            </button>
          </form>
        </div>
      </main>

      <div className="text-center text-gray-500 text-sm pb-8">
        ProspectFly · UK-based performance marketing agency
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center">
      <p className="text-red-400">Something went wrong. Please try again.</p>
    </div>
  );
}

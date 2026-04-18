import { useState } from "react";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Free Google Ads Audit — ProspectFly" },
  { name: "robots", content: "noindex, nofollow" },
];

export default function GoogleAdsAudit() {
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
      <header className="h-16 flex items-center border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <span className="font-['Space_Grotesk'] font-bold text-lg tracking-tight text-white">
            Prospect<span className="text-amber-500">Fly</span>
          </span>
        </div>
      </header>

      <main className="flex-1 px-6 pt-[36px] pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
                Get a free Google Ads audit.
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Find out exactly where your budget is going and what's stopping
                your campaigns from converting.
              </p>

              {/* Bullets */}
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3 text-gray-300">
                  <svg
                    className="w-5 h-5 text-lime-400 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  30-minute call, no obligation
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg
                    className="w-5 h-5 text-lime-400 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  We'll review your account or your competitors' if you're
                  starting fresh
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg
                    className="w-5 h-5 text-lime-400 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Honest advice - we'll tell you if Google Ads isn't right for
                  your budget
                </li>
              </ul>

              {/* Trust Strip */}
              <div className="bg-[#16191f] border border-white/5 rounded-xl p-5">
                <div className="flex flex-wrap justify-center gap-10 text-sm text-gray-400">
                  <span>27 years experience</span>
                  <span>UK based</span>
                  <span>Free, no obligation</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Photo Card */}
              <div className="flex items-center gap-4 mb-8 p-4 bg-[#16191f] rounded-2xl border border-white/5">
                <img
                  src="/mark-proctor.webp"
                  alt="Mark Proctor"
                  className="w-[72px] h-[72px] rounded-full object-cover shrink-0"
                />
                <div>
                  <div className="text-white font-['Space_Grotesk'] font-semibold text-[17px]">
                    Mark Proctor
                  </div>
                  <div className="text-gray-400 text-sm">
                    Founder, ProspectFly
                  </div>
                  <div className="text-gray-400 text-sm mt-1">
                    Typically replies within one working day
                  </div>
                </div>
              </div>

              <p className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold leading-tight mb-3">
                Let's talk about your business.
              </p>

              <p className="text-gray-400 mb-6">
                Fill in the form and we'll be in touch shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="hidden"
                  name="form_source"
                  value="Google Ads Audit"
                />

                <div className="flex items-center gap-4">
                  <label htmlFor="name" className="text-sm font-medium w-24 shrink-0">
                    Name <span className="text-lime-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="flex-1 bg-[#16191f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50"
                    placeholder="Your name"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <label htmlFor="email" className="text-sm font-medium w-24 shrink-0">
                    Email <span className="text-lime-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="flex-1 bg-[#16191f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <label htmlFor="company" className="text-sm font-medium w-24 shrink-0">
                    Company <span className="text-lime-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="flex-1 bg-[#16191f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50"
                    placeholder="Your company"
                  />
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
                  {formState === "submitting"
                    ? "Sending..."
                    : "Get my free audit →"}
                </button>

                <p className="text-gray-500 text-xs text-center">
                  No commitment. We'll get back to you within one working day.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

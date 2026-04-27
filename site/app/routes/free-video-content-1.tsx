import { useState } from "react";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Free Video Content for One B2B Founder — ProspectFly" },
  { name: "robots", content: "noindex, nofollow" },
];

export default function FreeVideoContent1() {
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

      <main className="flex-1 px-6 pt-12 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* H1 */}
          <h1 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold leading-tight mb-10">
            Your ideas. Your voice.
          </h1>

          {/* Problem block */}
          <div className="mb-12 text-gray-300 space-y-4">
            <p>
              Tired of being invisible while less credible people get all the
              attention? Thought leader content changes that.
            </p>
            <p>
              When your ideal clients see you sharing real insight consistently,
              you become the obvious choice to work with.
            </p>
            <p>
              We handle everything. You get on a call, talk about what you know,
              and we turn it into short-form videos.
            </p>
          </div>

          {/* Form section with image */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Left: Form */}
            <div>
              <h3 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold mb-6 whitespace-nowrap">
                Apply for your free month
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="hidden"
                  name="form_source"
                  value="Free Video Content"
                />

                <div className="flex items-center gap-4">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium w-24 shrink-0"
                  >
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
                  <label
                    htmlFor="email"
                    className="text-sm font-medium w-24 shrink-0"
                  >
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
                  <label
                    htmlFor="company"
                    className="text-sm font-medium w-24 shrink-0"
                  >
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
                  {formState === "submitting" ? "Sending..." : "Apply now →"}
                </button>
              </form>
            </div>

            {/* Right: Image */}
            <div>
              <img
                src="/li-ad-free-outreach-001.webp"
                alt="Remote video filming session"
                className="w-full rounded-2xl"
              />
            </div>
          </div>

          {/* What's included */}
          <h3 className="font-['Space_Grotesk'] font-semibold text-xl mb-4">
            What's included
          </h3>
          <div className="grid grid-cols-2 gap-4 text-gray-300 mb-6">
            <div className="flex items-start gap-3">
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
              <span>One remote filming session (60-90 minutes)</span>
            </div>
            <div className="flex items-start gap-3">
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
              <span>4 short-form videos edited and ready to post</span>
            </div>
            <div className="flex items-start gap-3">
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
              <span>Camera and audio setup guidance included</span>
            </div>
            <div className="flex items-start gap-3">
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
              <span>No editing or writing required on your end</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

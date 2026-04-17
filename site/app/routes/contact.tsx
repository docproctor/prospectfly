import { useState } from "react";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Contact — ProspectFly" },
  {
    name: "description",
    content:
      "Get in touch with ProspectFly. Fill in the form and we'll get back to you within one working day.",
  },
];

export default function Contact() {
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
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
            Let's talk about your business.
          </h1>
          <p className="text-gray-400 text-lg mb-12">
            Fill in the form and we'll get back to you within one working day.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
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
              {formState === "submitting" ? "Sending..." : "Book a free strategy call"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

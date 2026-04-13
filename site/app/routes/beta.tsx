import { useState } from "react";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Free 30-Day Pilot | Prospect Fly" },
    { name: "description", content: "Get a free 30-day pilot of our LinkedIn thought leadership service. We need case studies — you get the full service free." },
  ];
};

export default function Beta() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    linkedinUrl: "",
    icp: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // TODO: Replace with actual form submission endpoint
    // For now, simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Beta application submitted:", formData);
    setSubmitted(true);
    setSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <section className="py-24 px-10">
        <div className="max-w-[600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-1.5 text-sm font-medium text-lime-400 mb-6">
              <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
              Limited Availability
            </div>
            <h1 className="text-[36px] lg:text-[44px] font-extrabold leading-[1.12] tracking-tight mb-5">
              Get a Free 30-Day Pilot. We Need Case Studies.
            </h1>
            <p className="text-lg text-[#8a9099] leading-relaxed">
              We're building our case study portfolio. You get our full thought leadership service — free for 30 days.
            </p>
          </div>

          {/* What you get / What we need */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#16191f] border border-[#1e2229] rounded-xl p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-lime-400 mb-4">What You Get</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-[#8a9099]">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-1.5 shrink-0"></span>
                  Full thought leadership service for 30 days
                </li>
                <li className="flex items-start gap-3 text-sm text-[#8a9099]">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-1.5 shrink-0"></span>
                  One thought leader ad campaign
                </li>
                <li className="flex items-start gap-3 text-sm text-[#8a9099]">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-1.5 shrink-0"></span>
                  Engager identification report
                </li>
              </ul>
            </div>
            <div className="bg-[#16191f] border border-[#1e2229] rounded-xl p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">What We Need</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-[#8a9099]">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 shrink-0"></span>
                  Written testimonial after the pilot
                </li>
                <li className="flex items-start gap-3 text-sm text-[#8a9099]">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 shrink-0"></span>
                  Permission to use results as a case study
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="bg-[#16191f] border border-lime-400/30 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-lime-400/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-3">Application Received</h2>
              <p className="text-[#8a9099]">
                Thanks for your interest. We'll review your application and get back to you within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full bg-[#16191f] border border-[#1e2229] rounded-lg px-5 py-3.5 text-[15px] placeholder-[#8a9099] focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Inc"
                  className="w-full bg-[#16191f] border border-[#1e2229] rounded-lg px-5 py-3.5 text-[15px] placeholder-[#8a9099] focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="linkedinUrl" className="block text-sm font-medium mb-2">Your LinkedIn URL</label>
                <input
                  type="url"
                  id="linkedinUrl"
                  name="linkedinUrl"
                  required
                  value={formData.linkedinUrl}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full bg-[#16191f] border border-[#1e2229] rounded-lg px-5 py-3.5 text-[15px] placeholder-[#8a9099] focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="icp" className="block text-sm font-medium mb-2">Tell us about your ICP</label>
                <textarea
                  id="icp"
                  name="icp"
                  required
                  rows={4}
                  value={formData.icp}
                  onChange={handleChange}
                  placeholder="Who are you trying to reach? What industries, job titles, company sizes?"
                  className="w-full bg-[#16191f] border border-[#1e2229] rounded-lg px-5 py-3.5 text-[15px] placeholder-[#8a9099] focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-lime-400 text-black px-7 py-4 rounded-lg font-bold text-[15px] hover:bg-lime-300 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Apply for the Free Pilot"}
              </button>
              <p className="text-[13px] text-[#8a9099] text-center">
                We'll review your application and respond within 48 hours
              </p>
            </form>
          )}

          {/* Back link */}
          <div className="mt-10 text-center">
            <a href="/" className="text-[#8a9099] text-sm hover:text-white transition-colors cursor-pointer">
              ← Back to homepage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

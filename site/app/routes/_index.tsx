import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "ProspectFly | AI Automation for SaaS Companies" },
    { name: "description", content: "AI automation consultancy for SaaS companies ready to stop doing things manually. Identify bottlenecks, deploy automations, see ROI in 90 days." },
  ];
};

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function ProcessDiagram() {
  return (
    <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 bg-[#252525] rounded-lg p-4 text-center">
          <div className="text-amber-500 text-sm font-medium mb-1">Data In</div>
          <div className="text-gray-400 text-xs">CRM, Email, Forms</div>
        </div>
        <div className="text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
        <div className="flex-1 bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 text-center">
          <div className="text-amber-500 text-sm font-medium mb-1">AI Layer</div>
          <div className="text-gray-400 text-xs">n8n, Make, Claude</div>
        </div>
        <div className="text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
        <div className="flex-1 bg-[#252525] rounded-lg p-4 text-center">
          <div className="text-amber-500 text-sm font-medium mb-1">Action Out</div>
          <div className="text-gray-400 text-xs">Tasks, Alerts, Reports</div>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const features = [
    {
      icon: "🔍",
      title: "Find What to Automate",
      description: "We map your current workflows and identify the highest-value automation opportunities across your sales, ops, and delivery processes.",
    },
    {
      icon: "⚡",
      title: "Build It. Ship It.",
      description: "We design and deploy your automations using n8n, Make, and AI tools - fully documented, handed over to your team, no black boxes.",
    },
    {
      icon: "📊",
      title: "Track What It's Worth",
      description: "Every automation is tied to a measurable outcome. Time saved, errors eliminated, revenue protected. You see the numbers.",
    },
  ];

  return (
    <div>
      {/* Hero Section - Dark */}
      <section className="bg-[#0a0a0a] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Automate the Work.<br />
                Scale the Business.
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                AI automation for SaaS companies ready to stop doing things manually
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-300">Identify the processes draining your team's time</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-300">Design and deploy AI automations that actually stick</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-300">See measurable ROI within the first 90 days</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="inline-block bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-600 transition-colors"
              >
                Book a Free Discovery Call
              </a>
            </div>

            {/* Right - Diagram */}
            <div className="hidden lg:block">
              <ProcessDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - White */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a href="/services" className="text-amber-600 font-medium hover:text-amber-700">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="bg-[#0a0a0a] text-white py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stop patching processes.<br />
            Start scaling them.
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Most SaaS companies between 50 and 500 people are running on spreadsheets, manual handoffs, and tools that don't talk to each other. We fix that.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-600 transition-colors mb-4"
          >
            Book a Free Discovery Call
          </a>
          <p className="text-gray-500 text-sm">
            No obligation · 30 minute call · UK-based consultancy
          </p>
        </div>
      </section>
    </div>
  );
}

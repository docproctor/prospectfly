import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Refund Policy — ProspectFly" },
  {
    name: "description",
    content:
      "ProspectFly refund policy. Information about refunds for our marketing services.",
  },
];

export default function Refunds() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
            Refund Policy
          </h1>
          <p className="text-gray-400">Last Updated: 18 April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="pt-6 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-xl font-bold text-white mt-0 mb-4">
            Contact Information
          </h3>
          <p className="text-gray-300 leading-relaxed">
            New2 Media Ltd
            <br />
            86-90 Paul Street, London, EC2A 4NE
            <br />
            <a
              href="/contact"
              className="text-lime-400 hover:text-lime-300 transition-colors"
            >
              prospectfly.com/contact
            </a>
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Monthly Retainers
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Monthly management fees are non-refundable once work has commenced
            for that month. You may cancel your engagement at any time with 30
            days written notice after the minimum term, and no further fees will
            be charged after your final month.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Setup Fees
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Any one-off setup or onboarding fees are non-refundable once work
            has commenced.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Ad Spend
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Ad spend is paid directly to the advertising platform by the client.
            ProspectFly has no control over and accepts no liability for ad
            spend charged by Google, Meta, LinkedIn or any other platform.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Exceptional Circumstances
          </h3>
          <p className="text-gray-300 leading-relaxed mb-3">
            Refunds may be considered at our sole discretion in cases of:
          </p>
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li>Duplicate or erroneous charges</li>
            <li>
              Our failure to commence agreed work within a reasonable timeframe
            </li>
          </ul>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            How to Request a Refund
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Contact us via{" "}
            <a
              href="/contact"
              className="text-lime-400 hover:text-lime-300 transition-colors"
            >
              prospectfly.com/contact
            </a>{" "}
            with your company name, invoice number and reason for the request.
            We aim to respond within 5 working days.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Refund Processing
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Approved refunds will be processed within 10 working days to the
            original payment method.
          </p>
        </div>
      </section>
    </main>
  );
}

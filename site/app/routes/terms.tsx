import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Terms and Conditions — ProspectFly" },
  {
    name: "description",
    content:
      "ProspectFly terms and conditions. The terms governing your engagement with our services.",
  },
];

export default function Terms() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-400">Last Updated: 18 April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="pt-6 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 leading-relaxed">
            These Terms and Conditions govern your engagement with ProspectFly,
            a trading name of New2 Media Ltd ("we," "us," "the Company"). By
            engaging our services you agree to these Terms.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
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
            Services
          </h3>
          <p className="text-gray-300 leading-relaxed">
            ProspectFly provides performance marketing management services
            including Google Ads, Meta Ads and LinkedIn Ads campaign management,
            strategy and reporting. Services are provided on a monthly retainer
            basis unless otherwise agreed in writing.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Engagement
          </h3>
          <p className="text-gray-300 leading-relaxed">
            All engagements begin with a discovery call and written proposal.
            Work commences upon receipt of a signed proposal or written
            confirmation and cleared first payment.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Payment
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Fees are invoiced monthly in advance. Payment is due within 14 days
            of invoice. Late payment may result in suspension of services. Ad
            spend is paid directly by the client to the advertising platform and
            is not included in our management fees.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Minimum Term
          </h3>
          <p className="text-gray-300 leading-relaxed">
            All engagements carry a 3-month minimum commitment unless otherwise
            stated in the proposal. Either party may terminate with 30 days
            written notice after the minimum term.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Client Responsibilities
          </h3>
          <p className="text-gray-300 leading-relaxed mb-3">You agree to:</p>
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li>
              Provide accurate information about your business and objectives
            </li>
            <li>
              Grant necessary access to advertising accounts in a timely manner
            </li>
            <li>Pay all invoices on time</li>
            <li>Comply with the advertising policies of relevant platforms</li>
          </ul>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Intellectual Property
          </h3>
          <p className="text-gray-300 leading-relaxed">
            All strategy documents, reports and creative work produced by
            ProspectFly remain our intellectual property until full payment is
            received, at which point ownership transfers to the client.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Confidentiality
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Both parties agree to keep confidential any sensitive business
            information shared during the engagement.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Results
          </h3>
          <p className="text-gray-300 leading-relaxed">
            We do not guarantee specific results from advertising campaigns.
            Performance depends on many factors including market conditions, ad
            spend, landing page quality and platform algorithms. We will always
            act in your best interests and report results transparently.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Limitation of Liability
          </h3>
          <p className="text-gray-300 leading-relaxed">
            To the maximum extent permitted by law, our total liability for any
            claim arising from our services shall not exceed the total fees paid
            in the three months preceding the claim.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Governing Law
          </h3>
          <p className="text-gray-300 leading-relaxed">
            These Terms are governed by the laws of England and Wales. Any
            disputes shall be subject to the exclusive jurisdiction of the
            courts of England and Wales.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Changes to Terms
          </h3>
          <p className="text-gray-300 leading-relaxed">
            We may update these Terms periodically. Continued engagement with
            our services constitutes acceptance of the revised Terms.
          </p>
        </div>
      </section>
    </main>
  );
}

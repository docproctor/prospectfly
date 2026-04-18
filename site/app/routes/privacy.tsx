import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Privacy Policy — ProspectFly" },
  {
    name: "description",
    content:
      "ProspectFly privacy policy. How we collect, use and protect your personal information.",
  },
];

export default function Privacy() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400">Last Updated: 18 April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="pt-6 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 leading-relaxed">
            At New2 Media Ltd, trading as ProspectFly ("we," "our," or "us"), we
            are committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and safeguard your data when
            you use our website and related services.
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
            Information We Collect
          </h3>

          <p className="text-gray-400 font-medium mt-6 mb-3">
            a. Information You Provide
          </p>
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li>
              <strong className="text-white">Enquiry Data:</strong> Name, email
              address, and company name when you submit a contact or audit
              request form.
            </li>
            <li>
              <strong className="text-white">Communications:</strong> Any
              messages or enquiries you send to us.
            </li>
          </ul>

          <p className="text-gray-400 font-medium mt-6 mb-3">
            b. Information We Automatically Collect
          </p>
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li>
              <strong className="text-white">Usage Data:</strong> IP address,
              browser type, pages visited, time spent, and referring URLs
              collected via Google Analytics and Google Tag Manager.
            </li>
            <li>
              <strong className="text-white">Cookies:</strong> We use cookies
              and tracking technologies to understand how visitors use our site
              and to measure advertising performance.
            </li>
          </ul>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            How We Use Your Information
          </h3>
          <p className="text-gray-300 leading-relaxed mb-3">
            We use your information to:
          </p>
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li>Respond to enquiries and arrange discovery calls</li>
            <li>Manage client relationships and deliver our services</li>
            <li>Measure and improve our website and marketing performance</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            How We Share Your Information
          </h3>
          <p className="text-gray-300 leading-relaxed mb-3">
            We do not sell your personal data. We may share data only with:
          </p>
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li>
              <strong className="text-white">Service Providers:</strong>{" "}
              Including form processing (Formspree), analytics (Google
              Analytics), and tag management (Google Tag Manager).
            </li>
            <li>
              <strong className="text-white">Legal Requirements:</strong> If
              required by law or to protect our rights.
            </li>
          </ul>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Data Retention
          </h3>
          <p className="text-gray-300 leading-relaxed">
            We retain enquiry data for as long as necessary to respond to your
            request and manage any resulting client relationship. You may
            request deletion at any time via{" "}
            <a
              href="/contact"
              className="text-lime-400 hover:text-lime-300 transition-colors"
            >
              prospectfly.com/contact
            </a>
            .
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Your Rights
          </h3>
          <p className="text-gray-300 leading-relaxed mb-3">
            Under UK GDPR you have the right to:
          </p>
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li>Access, correct, or delete your personal data</li>
            <li>Withdraw consent for data processing</li>
            <li>Request a copy of your data</li>
            <li>Object to certain types of processing</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-3">
            To exercise these rights, contact us via{" "}
            <a
              href="/contact"
              className="text-lime-400 hover:text-lime-300 transition-colors"
            >
              prospectfly.com/contact
            </a>
            .
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Cookies
          </h3>
          <p className="text-gray-300 leading-relaxed">
            We use cookies to measure website performance and advertising
            effectiveness via Google Tag Manager and Google Analytics. You can
            disable cookies through your browser settings.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Security
          </h3>
          <p className="text-gray-300 leading-relaxed">
            We implement reasonable measures to protect your data. No online
            service is completely secure and you use our site at your own risk.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Children's Privacy
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Our services are not directed to individuals under 18. We do not
            knowingly collect data from minors.
          </p>

          <h3 className="font-display text-xl font-bold text-white mt-10 mb-4">
            Changes to This Policy
          </h3>
          <p className="text-gray-300 leading-relaxed">
            We may update this Privacy Policy periodically. The latest version
            will always be available at{" "}
            <a
              href="/privacy"
              className="text-lime-400 hover:text-lime-300 transition-colors"
            >
              prospectfly.com/privacy
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

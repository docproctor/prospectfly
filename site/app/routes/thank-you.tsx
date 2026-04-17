import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Thank You — ProspectFly" },
  { name: "robots", content: "noindex, nofollow" },
];

export default function ThankYou() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
            Thanks for getting in touch
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            We'll get back to you asap!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="bg-lime-400 text-black font-display font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
            >
              Back to homepage
            </Link>
            <Link
              to="/approach"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Learn how we work →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

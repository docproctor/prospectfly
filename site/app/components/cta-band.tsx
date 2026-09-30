import { Link } from "react-router";
import { BOOKING_LABEL, BOOKING_URL } from "../lib/booking";

type CtaBandProps = {
  heading: string;
  body: string;
  /** Show the portrait and name above the heading. */
  showAvatar?: boolean;
};

export function CtaBand({ heading, body, showAvatar = false }: CtaBandProps) {
  return (
    <section className="py-20 px-6 bg-[#111318] border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        {showAvatar && (
          <div className="flex items-center justify-center gap-3 mb-6">
            <img
              src="/mark-proctor.webp"
              alt="Mark Proctor"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="text-white font-display font-semibold text-[15px]">
                Mark Proctor
              </div>
              <div className="text-gray-500 text-sm">Prospectfly</div>
            </div>
          </div>
        )}

        <h2 className="font-display text-3xl font-bold mb-4">{heading}</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">{body}</p>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-lime-400 text-black font-display font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition-colors duration-200 cursor-pointer"
        >
          {BOOKING_LABEL} →
        </a>

        <p className="text-gray-500 text-sm mt-5">
          Would you rather write first?{" "}
          <Link to="/contact" className="text-gray-400 underline hover:text-white transition-colors">
            Send me the details instead
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

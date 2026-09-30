import type { MetaFunction } from "react-router";
import { CheckIcon } from "../components/check-icon";
import { CtaBand } from "../components/cta-band";

export const meta: MetaFunction = () => [
  { title: "Who's behind this — Prospectfly" },
  {
    name: "description",
    content:
      "Prospectfly is Mark Proctor. 17 years buying Google and Meta before specialising in LinkedIn, 5 years at Hearst in advertising creative solutions, 25 years building products.",
  },
];

const credentials = [
  { figure: "17 years", label: "buying Google and Meta, before specialising in LinkedIn" },
  { figure: "5 years", label: "at Hearst, advertising creative solutions" },
  { figure: "25 years", label: "building products" },
  { figure: "Developer, designer", label: "before any of the media buying" },
];

const brands = [
  "Hearst",
  "Tesco",
  "Harvey Nichols",
  "Informa",
  "Nestlé",
  "Co-op",
  "Omnicom",
];

const goodFit = [
  "UK B2B SaaS, roughly 11 to 200 people",
  "A customer worth £10,000 or more a year",
  "At least £1,000 a month for media, separate from management",
  "You want to be told when something isn't working, early",
  "You'd rather have one person who knows the account than a rotating team of juniors",
];

const notGoodFit = [
  "Solo consultants, coaches and one-person businesses",
  "Pre-revenue, still working out what the product is",
  "Seed-stage SaaS on sub-£1,000 annual contracts",
  "Under £1,000 a month of media",
  "You need ten customers by next week",
  "You want a guaranteed number before anyone has seen your data",
];

const howIWork = [
  {
    title: "You deal with me",
    description:
      "Every email, every call, every decision about where the budget goes. There is no account manager, because there is no account management layer.",
  },
  {
    title: "No padding",
    description:
      "I don't inflate hours or bolt on services to make an invoice look substantial. If something isn't worth doing this month, I'll tell you and it won't appear on the bill.",
  },
  {
    title: "Bad news first",
    description:
      "If something isn't working you'll hear it from me before you spot it yourself, along with what I'm doing about it. This is the whole job, really.",
  },
];

export default function About() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-3 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
            Who's behind this
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            One person who has done
            <br />
            all three jobs.
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl">
            I started in digital before most of my clients had a website. I've been
            the developer, the designer and the media buyer, which is why I can tell
            you where the problem actually is.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="pt-6 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold mb-8">
                Why I work this way.
              </h2>
              <div className="space-y-6 text-gray-300 text-base leading-relaxed">
                <p>
                  Most companies buy this in three pieces. A developer for the
                  tracking, an agency for the campaigns, someone else for the
                  creative. I've been each of those suppliers at different points,
                  so I know what happens in the gaps between them: the question of
                  why it isn't working belongs to nobody, and it stays unanswered
                  for months while everyone's invoices keep clearing.
                </p>
                <p>
                  The other thing I kept seeing was reports built to survive the
                  meeting rather than to be true. A cost per lead that looks
                  excellent because somebody quietly changed which event counts as a
                  lead. Nobody is lying exactly. It's just that when the person
                  writing the report is also being judged by it, the number drifts.
                </p>
                <p>
                  So: one person, one number, and the working shown underneath it.
                  There's an honest limit on how many companies I can take on at
                  once, and that's the trade.
                </p>
              </div>
            </div>
            <div className="md:w-72 shrink-0">
              <img
                src="/mp-portrait-014.webp"
                alt="Mark Proctor"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-12 px-6 border-t border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-8">
            {credentials.map((item, i) => (
              <div key={i}>
                <div className="font-display text-2xl font-bold text-white mb-1">
                  {item.figure}
                </div>
                <div className="text-sm text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="pt-8 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-xl font-semibold text-white mb-8">
            Brands I've worked with
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <div key={brand} className="text-white font-display font-semibold text-lg">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="pt-8 pb-6 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-4">
            Who this works for, and who it doesn't.
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl">
            Not a judgement on anyone. The work needs certain conditions to produce
            anything, and below them I'd be charging you to find that out.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">This fits</h3>
              <ul className="space-y-3">
                {goodFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-[15px]">
                    <CheckIcon className="w-5 h-5 text-lime-400 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">This doesn't</h3>
              <ul className="space-y-3">
                {notGoodFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-[15px]">
                    <span className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center text-gray-600">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="pt-8 pb-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-10">
            What working with me actually looks like.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {howIWork.map((item, i) => (
              <div key={i} className="bg-[#16191f] rounded-2xl p-6 border border-white/5">
                <h3 className="font-display font-semibold text-white text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-[15px] mt-10">
            The longer version of the product and development background lives at{" "}
            <a
              href="https://markproctor.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 underline hover:text-white transition-colors"
            >
              markproctor.co
            </a>
            .
          </p>
        </div>
      </section>

      <CtaBand
        showAvatar
        heading="Find out if this is worth your time."
        body="Thirty minutes, no hard sell. An honest look at whether this makes sense for you right now, and what I'd do first if it does."
      />
    </main>
  );
}

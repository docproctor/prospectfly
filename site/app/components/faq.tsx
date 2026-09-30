export type FaqItem = {
  question: string;
  answer: string;
};

/** Native details/summary — no JS, works without hydration, answers are in the HTML. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-white/5 border-t border-b border-white/5">
      {items.map((item, i) => (
        <details key={i} className="group py-5">
          <summary className="flex items-start justify-between gap-4 cursor-pointer list-none text-white font-display font-semibold text-lg marker:content-none">
            {item.question}
            <span className="text-lime-400 text-xl leading-none shrink-0 mt-0.5 transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="text-gray-400 leading-relaxed mt-3 max-w-2xl">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

/** FAQPage JSON-LD, for the page's meta export. */
export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

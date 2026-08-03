import { treburWebdesignFaqItems } from '../../config/treburWebdesignFaq'

/**
 * FAQ nur /webdesign/trebur – eine H2, Fragen ohne H-Tags (details/summary).
 */
export default function TreburWebdesignFaqSection() {
  return (
    <section
      className="bg-white px-6 py-16 md:py-20"
      aria-labelledby="trebur-webdesign-faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="trebur-webdesign-faq-heading"
          className="mb-10 text-center text-3xl font-bold leading-tight text-slate-900 md:text-4xl"
        >
          Häufige Fragen zu Webdesign in Trebur
        </h2>

        <div className="space-y-3">
          {treburWebdesignFaqItems.map((item, index) => (
            <details
              key={index}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm open:shadow-md"
            >
              <summary className="cursor-pointer list-none px-5 py-4 text-left text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3">
                  <span>{item.question}</span>
                  <span
                    className="mt-0.5 shrink-0 text-blue-600 transition-transform group-open:rotate-180"
                    aria-hidden
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </span>
              </summary>
              <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                <p className="text-base leading-relaxed text-slate-700">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

import SeoDarmstadtTrustCard from './SeoDarmstadtTrustCard'

export type SeoFaqItem = {
  readonly question: string
  readonly answer: string
}

interface SeoDarmstadtFaqTrustSectionProps {
  faqItems: readonly SeoFaqItem[]
  /** Aus Server-Env gebaut — Link zur Google-Maps-Liste des Unternehmens */
  googleReviewsUrl?: string
}

/** FAQ links + sticky Trust-Card rechts (/seo-darmstadt) */
export default function SeoDarmstadtFaqTrustSection({
  faqItems,
  googleReviewsUrl,
}: SeoDarmstadtFaqTrustSectionProps) {
  return (
    <section
      id="faq-seo"
      className="mx-auto max-w-7xl px-6 py-16 md:py-24"
      aria-labelledby="faq-seo-heading"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_min(380px,100%)] lg:items-start lg:gap-10 xl:gap-14">
        <div className="min-w-0">
          <h2 id="faq-seo-heading" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Häufige Fragen zu SEO in Darmstadt
          </h2>
          <div className="mt-8 space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-slate-300"
              >
                <summary className="cursor-pointer list-none px-5 py-4 text-base font-semibold text-slate-900 outline-none marker:content-none md:text-lg [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                  <p className="leading-relaxed text-slate-600">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <SeoDarmstadtTrustCard googleReviewsUrl={googleReviewsUrl} />
        </div>
      </div>
    </section>
  )
}

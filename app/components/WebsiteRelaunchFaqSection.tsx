import type { ReactNode } from 'react'
import { websiteRelaunchFaqItems } from '../../config/websiteRelaunchFaq'

const faqAnswerBodies: ReactNode[] = [
  <>
    Die Kosten hängen vom Umfang ab. Für <strong>Handwerker</strong> und <strong>Makler</strong> in{' '}
    <strong>Darmstadt</strong> biete ich transparente Pakete an, die auf echte Ergebnisse (Anfragen) statt nur
    auf Design setzen. Ein Relaunch ist eine Investition, die sich durch bessere Sichtbarkeit in Südhessen
    schnell amortisiert.
  </>,
  <>
    Nein, im Gegenteil. Durch eine saubere <strong>SEO-Migration</strong> (301-Weiterleitungen) und moderne{' '}
    <strong>Next.js</strong>-Technik stellen wir sicher, dass Ihre bestehende Autorität in{' '}
    <strong>Darmstadt</strong> erhalten bleibt und durch bessere Performance (99/100 PageSpeed) sogar ausgebaut
    wird.
  </>,
  <>
    In der Regel planen wir für Unternehmen in der Region <strong>Darmstadt</strong> 4 bis 8 Wochen ein – von
    der ersten Analyse über das neue Konzept bis zum finalen Go-Live inklusive Google-Einreichung.
  </>,
  <>
    Ja, bewährte Texte und Bilder können wir übernehmen. Wir optimieren diese jedoch für den modernen{' '}
    <strong>Darmstädter</strong> Markt, um sicherzustellen, dass sie technisch und inhaltlich auf dem neuesten
    Stand der Wissenschaftsstadt sind.
  </>,
  <>
    Ein Redesign ändert nur die Optik. Ein Relaunch bei mir überarbeitet auch die Technik (Wechsel auf{' '}
    <strong>Next.js</strong>) und die SEO-Struktur, damit Ihre Homepage in <strong>Darmstadt</strong> nicht nur
    schöner, sondern messbar erfolgreicher wird.
  </>,
]

/**
 * Relaunch-FAQ nur /website-relaunch – eine H2, Fragen ohne H-Tags (details/summary).
 */
export default function WebsiteRelaunchFaqSection() {
  return (
    <section
      className="border-t border-slate-200 bg-slate-50 px-6 py-16 md:py-20"
      aria-labelledby="website-relaunch-faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="website-relaunch-faq-heading"
          className="mb-10 text-center text-3xl font-bold leading-tight text-slate-900 md:text-4xl"
        >
          Häufige Fragen zum Website-Relaunch in Darmstadt
        </h2>

        <div className="space-y-3">
          {websiteRelaunchFaqItems.map((item, index) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm open:shadow-md"
            >
              <summary className="cursor-pointer list-none px-5 py-4 text-left transition-colors hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3">
                  <span className="text-lg font-bold text-slate-900">{item.question}</span>
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
                <p className="text-base leading-relaxed text-slate-700">{faqAnswerBodies[index]}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

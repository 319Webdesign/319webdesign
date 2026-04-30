'use client'

import { useState } from 'react'
import { Check, Minus } from 'lucide-react'
import AngebotAnfragenModal from '../components/AngebotAnfragenModal'
import GoogleReviewsSection from '../components/GoogleReviewsSection'
import { pakete } from './pakete-config'

export default function UnserAngebotPaketeClient() {
  const [modalOpen, setModalOpen] = useState(false)
  const [gewaehltesPaket, setGewaehltesPaket] = useState<string | null>(null)

  const openMitPaket = (name: string) => {
    setGewaehltesPaket(name)
    setModalOpen(true)
  }

  const openOhnePaket = () => {
    setGewaehltesPaket(null)
    setModalOpen(true)
  }

  return (
    <>
      <AngebotAnfragenModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        paketName={gewaehltesPaket}
      />

      <section className="px-6 pb-12 pt-16 md:pb-16 md:pt-24 lg:pt-32" aria-labelledby="pakete-heading">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14 lg:mb-16">
          <h2 id="pakete-heading" className="text-2xl font-bold text-slate-900 md:text-3xl lg:text-4xl">
            Was in Ihrem Paket steckt – im Detail
          </h2>
          <p className="mt-4 text-slate-600 md:text-lg">
            Drei Pakete – alle Leistungen transparent auf einen Blick.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3 md:items-stretch">
          {pakete.map((paket) => {
            const IntroIcon = paket.featureIntro?.icon
            return (
              <article
                key={paket.name}
                className={`relative flex flex-col rounded-2xl border bg-white px-6 pb-8 pt-10 text-center shadow-md transition-shadow duration-300 ${
                  paket.highlight
                    ? 'border-amber-300 shadow-xl shadow-amber-900/10 ring-2 ring-amber-400/40 md:z-10 md:-my-2 md:py-12'
                    : 'border-slate-200 hover:shadow-lg'
                }`}
              >
                {paket.highlight && paket.badge && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <span className="inline-block rounded-full bg-amber-400 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-sm">
                      {paket.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900">{paket.name}</h3>
                <p className="mt-2 min-h-[3rem] text-sm leading-snug text-slate-600 md:min-h-[3.25rem]">
                  {paket.subtitle}
                </p>
                <div className="my-8">
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">ab</p>
                  <p className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                    {paket.preisAb.toLocaleString('de-DE')} €
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => openMitPaket(paket.name)}
                  aria-label={`Angebot anfragen – Paket ${paket.name}`}
                  className={`mb-8 inline-flex w-full cursor-pointer items-center justify-center rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-200 ${
                    paket.highlight
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-900/20 hover:bg-amber-500 hover:shadow-lg'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Angebot anfragen
                </button>

                <ul className="flex flex-1 flex-col gap-4 text-left text-sm text-slate-700">
                  {paket.featureIntro && IntroIcon && (
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                        <IntroIcon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="pt-1 font-medium leading-snug">{paket.featureIntro.text}</span>
                    </li>
                  )}
                  {paket.merkmale.map((m) => (
                    <li key={m} className="flex gap-3">
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-amber-500"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      <span className="pt-0.5 leading-snug">{m}</span>
                    </li>
                  ))}
                  {paket.nichtEnthalten?.map((m) => (
                    <li key={m} className="flex gap-3 text-slate-400">
                      <Minus
                        className="mt-0.5 h-5 w-5 shrink-0 text-slate-300"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <span className="pt-0.5 leading-snug">{m}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </section>

      <section className="px-6 pb-8 md:pb-10" aria-labelledby="unsicher-heading">
        <div className="mx-auto mt-4 max-w-2xl px-2 text-center md:mt-8">
          <h2
            id="unsicher-heading"
            className="text-2xl font-bold leading-snug text-slate-900 md:text-3xl lg:text-[2rem] lg:leading-tight"
          >
            Noch nicht sicher? Kein Problem
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            In einem unverbindlichen Erstgespräch betrachten wir Ihre Ziele und Wünsche und helfen Ihnen, das richtige
            Paket für Ihre neue Website zu finden.
          </p>
          <button
            type="button"
            onClick={openOhnePaket}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-blue-500/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/45 active:scale-[0.98]"
            aria-label="Unverbindliches Erstgespräch – Formular zum Angebot öffnen"
          >
            Unverbindliches Erstgespräch vereinbaren
          </button>
        </div>
      </section>

      <GoogleReviewsSection compactTop headingTitle="Das sagen unsere Kunden" />
    </>
  )
}

'use client'

import { useState } from 'react'
import { Check, MessageCircle } from 'lucide-react'
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

      <section className="px-6 pb-12 pt-28 md:pb-16 md:pt-24 lg:pt-32" aria-labelledby="pakete-heading">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14 lg:mb-16">
          <h2 id="pakete-heading" className="text-2xl font-bold text-slate-900 md:text-3xl lg:text-4xl">
            Welches Website-Paket passt zu Ihrem Ziel?
          </h2>
          <p className="mt-4 text-slate-600 md:text-lg">
            Drei klare Wege zu Ihrer neuen Website — transparent kalkuliert, persönlich empfohlen und individuell
            anpassbar.
          </p>
        </div>
        <div className="mx-auto grid min-w-0 max-w-6xl gap-6 md:grid-cols-3 md:items-stretch md:gap-7">
          {pakete.map((paket) => {
            return (
              <article
                key={paket.name}
                className={`relative flex min-w-0 flex-col overflow-visible rounded-[28px] border bg-white px-6 pb-7 pt-8 text-left shadow-[0_20px_55px_-35px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_-36px_rgba(37,99,235,0.3)] md:pb-8 md:pt-9 ${
                  paket.highlight
                    ? 'border-amber-300 bg-gradient-to-b from-amber-50/95 via-white to-blue-50/65 shadow-[0_24px_70px_-28px_rgba(250,204,21,0.38)] ring-1 ring-amber-300/70 md:z-10 md:scale-[1.03]'
                    : 'border-slate-200/90'
                }`}
              >
                {paket.highlight && paket.badge && (
                  <div className="absolute left-6 top-0 -translate-y-1/2">
                    <span className="inline-flex rounded-full border border-amber-200 bg-amber-300 px-3.5 py-1 text-xs font-semibold text-amber-950 shadow-sm">
                      {paket.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">{paket.name}</h3>
                <p className="mt-2 min-h-[3.25rem] text-sm leading-snug text-slate-600 md:min-h-[3.75rem]">
                  {paket.subtitle}
                </p>
                <div className="mt-6 rounded-2xl border border-slate-200/90 bg-slate-50/70 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">ab</p>
                  <p className="mt-1 text-4xl font-bold tracking-tight text-slate-900 md:text-[2.7rem]">
                    {paket.preisAb.toLocaleString('de-DE')} €
                  </p>
                  <p className="mt-2 text-xs font-medium text-slate-500">
                    Einmalige Projektkosten · individuell anpassbar
                  </p>
                </div>
                <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-800/80">Geeignet für</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">{paket.geeignetFuer}</p>
                </div>

                <button
                  type="button"
                  onClick={() => openMitPaket(paket.name)}
                  aria-label={`Angebot anfragen – Paket ${paket.name}`}
                  className={`mb-6 mt-6 inline-flex w-full cursor-pointer items-center justify-center rounded-xl border px-5 py-3.5 text-sm font-semibold transition-all duration-200 md:mb-7 ${
                    paket.highlight
                      ? 'border-amber-300 bg-amber-400 text-slate-950 shadow-[0_12px_24px_-14px_rgba(217,119,6,0.65)] hover:-translate-y-0.5 hover:bg-amber-500 hover:shadow-[0_18px_30px_-14px_rgba(217,119,6,0.75)]'
                      : 'border-slate-300 bg-white text-slate-900 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  {paket.ctaLabel}
                </button>

                <div className="border-t border-slate-200/80 pt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Enthalten</p>
                  <ul className="flex flex-1 flex-col gap-3.5 text-left text-sm text-slate-700">
                    {paket.enthalten.map((m) => (
                    <li key={m} className="flex gap-2.5">
                      <Check
                        className={`mt-0.5 h-5 w-5 shrink-0 ${paket.highlight ? 'text-amber-500' : 'text-blue-600'}`}
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      <span className="min-w-0 break-words pt-0.5 leading-snug">{m}</span>
                    </li>
                  ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="px-6 pb-8 md:pb-10" aria-labelledby="unsicher-heading">
        <div className="mx-auto mt-4 max-w-4xl rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/90 px-6 py-8 text-center shadow-[0_25px_65px_-42px_rgba(37,99,235,0.45)] md:mt-8 md:px-10 md:py-10">
          <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-700 shadow-sm">
            <MessageCircle className="h-5 w-5" aria-hidden />
          </span>
          <h2
            id="unsicher-heading"
            className="mt-4 text-2xl font-bold leading-snug text-slate-900 md:text-3xl lg:text-[2rem] lg:leading-tight"
          >
            Unsicher, welches Paket passt?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            In einem kurzen Gespräch empfehle ich Ihnen ehrlich, welche Lösung für Ihr Ziel sinnvoll ist — auch wenn
            ein kleineres Paket ausreicht.
          </p>
          <button
            type="button"
            onClick={openOhnePaket}
            className="mt-8 inline-flex w-full items-center justify-center rounded-xl border border-blue-600 bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-blue-500/30 transition-all duration-200 hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-500/45 active:scale-[0.98] md:w-auto"
            aria-label="Unverbindliches Erstgespräch – Formular zum Angebot öffnen"
          >
            Kostenlose Empfehlung erhalten
          </button>
        </div>
      </section>

      <GoogleReviewsSection compactTop headingTitle="Das sagen unsere Kunden" />
    </>
  )
}

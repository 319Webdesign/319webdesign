import type { Metadata } from 'next'
import { getSeoMetadata, seoConfig } from '../../config/seo'
import UnserAngebotPaketeClient from './UnserAngebotPaketeClient'

export const metadata: Metadata = getSeoMetadata(seoConfig.unserAngebot)

export default function UnserAngebotPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative z-10 overflow-visible bg-blue-600 pb-0 pt-28 md:pt-32">
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bg-blue-600" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.18) 0%, transparent 55%)',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 pb-12 text-center text-white md:pb-16">
          <h1 className="mb-5">
            <span className="block text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl lg:text-[3rem]">
              Holen Sie sich jetzt Ihr{' '}
              <span className="bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text font-bold text-transparent">
                unverbindliches Angebot
              </span>
            </span>
            <span className="mt-3 block text-base font-medium leading-snug text-blue-100/95 md:mt-4 md:text-lg lg:text-xl">
              – fair kalkuliert, ohne Überraschungen
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100/95 md:text-xl">
            Wählen Sie das Paket, das zu Ihrem Betrieb passt. Ich melde mich persönlich mit einer klaren Empfehlung –
            oder wir passen die Leistungen individuell an. Ein Gespräch ist immer kostenlos.
          </p>
        </div>

        <div
          className="pointer-events-none absolute -bottom-14 left-1/2 h-14 w-[145%] -translate-x-1/2 rounded-b-[100%] bg-blue-600 md:-bottom-20 md:h-20"
          aria-hidden
        />
      </section>

      <UnserAngebotPaketeClient />
    </main>
  )
}

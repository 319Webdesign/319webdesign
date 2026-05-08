import type { Metadata } from 'next'
import Image from 'next/image'
import { getSeoMetadata, seoConfig } from '../../config/seo'
import UnserAngebotPaketeClient from './UnserAngebotPaketeClient'

export const metadata: Metadata = getSeoMetadata(seoConfig.unserAngebot)

export default function UnserAngebotPage() {
  return (
    <main className="min-h-screen min-w-0 bg-white">
      <section className="relative z-10 overflow-hidden bg-white pb-10 pt-32 md:pt-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -right-24 top-0 h-[540px] w-[540px] rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute -left-20 bottom-8 h-56 w-56 rounded-full bg-sky-100/70 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-2xl text-left">
            <h1 className="mb-5 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-5xl lg:text-[3rem]">
              Das passende Webdesign-Angebot für Ihr nächstes Wachstum
            </h1>
            <p className="text-lg text-slate-600 md:text-xl">
              Ob neue Website, bessere Google-Sichtbarkeit oder laufende Betreuung: 319Webdesign bietet klare
              Leistungen für Unternehmen in Darmstadt, Pfungstadt und Südhessen — persönlich, modern und ohne unnötige
              Komplexität.
            </p>
            <ul className="mt-6 flex flex-wrap items-center gap-2.5 text-sm font-medium text-blue-900 md:gap-3 md:text-base">
              <li className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5">Transparente Leistungen</li>
              <li className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5">Persönliche Empfehlung</li>
              <li className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5">Kostenloses Erstgespräch</li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-r from-blue-500/20 to-sky-400/20 blur-2xl" />
            <div className="overflow-hidden rounded-[1.6rem] border border-blue-100 bg-white shadow-[0_24px_80px_-36px_rgba(37,99,235,0.55)]">
              <Image
                src="/unser-angebot-hero.png"
                alt="Webdesign Leistungen von 319Webdesign"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <UnserAngebotPaketeClient />
    </main>
  )
}

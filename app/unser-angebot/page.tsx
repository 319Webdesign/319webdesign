import type { Metadata } from 'next'
import Image from 'next/image'
import { getSeoMetadata, seoConfig } from '../../config/seo'
import UnserAngebotPaketeClient from './UnserAngebotPaketeClient'

export const metadata: Metadata = getSeoMetadata(seoConfig.unserAngebot)

export default function UnserAngebotPage() {
  return (
    <main className="min-h-screen min-w-0 bg-white">
      <section
        className="relative z-10 overflow-visible pb-0 pt-32 md:pt-28"
        style={{ backgroundColor: '#2563EB' }}
        aria-labelledby="unser-angebot-hero-heading"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(168deg, #3B82F6 0%, #2563EB 48%, #2B6DE8 78%, #2563EB 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 90% 70% at 18% 38%, rgba(255, 255, 255, 0.16) 0%, transparent 58%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 65% at 82% 48%, rgba(191, 219, 254, 0.22) 0%, transparent 55%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 48% 26%, rgba(255, 255, 255, 0.12) 0%, transparent 48%)',
            }}
          />
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#60A5FA]/20 blur-3xl" />
          <div className="absolute -right-16 bottom-8 h-80 w-80 rounded-full bg-[#93C5FD]/18 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage: 'radial-gradient(ellipse 75% 65% at 50% 40%, black 20%, transparent 75%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 75% 65% at 50% 40%, black 20%, transparent 75%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 70% 50% at 0% 0%, rgba(29, 78, 216, 0.22) 0%, transparent 55%),
                radial-gradient(ellipse 65% 48% at 100% 0%, rgba(29, 78, 216, 0.18) 0%, transparent 52%),
                radial-gradient(ellipse 90% 45% at 50% 100%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 md:pb-20 lg:grid-cols-2 lg:gap-14 lg:pb-24">
          <div className="max-w-2xl text-left">
            <h1
              id="unser-angebot-hero-heading"
              className="mb-5 text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-[3rem]"
            >
              Das passende Webdesign-Angebot für Ihr nächstes Wachstum
            </h1>
            <p className="text-lg text-blue-50/95 md:text-xl">
              Ob neue Website, bessere Google-Sichtbarkeit oder laufende Betreuung: 319Webdesign bietet klare
              Leistungen für Unternehmen in Darmstadt, Pfungstadt und Südhessen — persönlich, modern und ohne unnötige
              Komplexität.
            </p>
            <ul className="mt-6 flex flex-wrap items-center gap-2.5 text-sm font-medium text-white md:gap-3 md:text-base">
              <li className="rounded-full border border-white/35 bg-white/10 px-4 py-1.5 backdrop-blur-[2px]">
                Transparente Leistungen
              </li>
              <li className="rounded-full border border-white/35 bg-white/10 px-4 py-1.5 backdrop-blur-[2px]">
                Persönliche Empfehlung
              </li>
              <li className="rounded-full border border-white/35 bg-white/10 px-4 py-1.5 backdrop-blur-[2px]">
                Kostenloses Erstgespräch
              </li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-white/15 blur-2xl" />
            <div className="overflow-hidden rounded-[1.6rem] border border-white/25 bg-white shadow-[0_24px_80px_-36px_rgba(15,23,42,0.55)]">
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

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] overflow-hidden leading-[0]"
          aria-hidden
        >
          <svg
            className="relative block h-12 w-full md:h-16 lg:h-[4.75rem]"
            viewBox="0 0 1440 96"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#ffffff" d="M0 36C240 36 360 84 720 84s480-48 720-48v60H0V36z" />
          </svg>
        </div>
      </section>

      <UnserAngebotPaketeClient />
    </main>
  )
}

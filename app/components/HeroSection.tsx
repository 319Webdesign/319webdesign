'use client'

import { ArrowRight, Check, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const TRUST_ITEMS = [
  'Persönlicher Ansprechpartner',
  'Regional & lokal',
  'SEO von Anfang an',
  'Unverbindliches Erstgespräch',
] as const

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/search/?api=1&query=319Webdesign&query_place_id=ChIJqZqjwJRbXmERT_KSs7dtkw8'

function GoogleGIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      focusable="false"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section
      className="relative z-10 flex items-start justify-center overflow-visible pb-0 pt-36 md:pt-32"
      style={{ backgroundColor: '#2563EB' }}
      aria-labelledby="home-hero-heading"
    >
      {/* Hintergrund: Verlauf, Licht, dezente Struktur */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(168deg, #3B82F6 0%, #2563EB 48%, #2B6DE8 78%, #2563EB 100%)',
          }}
        />

        {/* Radiallicht hinter Textspalte */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 70% at 18% 38%, rgba(255, 255, 255, 0.16) 0%, transparent 58%)',
          }}
        />

        {/* Radiallicht hinter Mockups */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 65% at 82% 48%, rgba(191, 219, 254, 0.22) 0%, transparent 55%)',
          }}
        />

        {/* Weiches Zentrum-Highlight */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 48% 26%, rgba(255, 255, 255, 0.12) 0%, transparent 48%)',
          }}
        />

        {/* Schwache Blur-Kreise */}
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#60A5FA]/20 blur-3xl" />
        <div className="absolute -right-16 bottom-8 h-80 w-80 rounded-full bg-[#93C5FD]/18 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

        {/* Dezentes Grid */}
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

        {/* Leichte Vignette – oben etwas Tiefe, unten bewusst hell gehalten */}
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

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-7xl px-6 pb-16 md:pb-20 lg:pb-24">
        <div className="grid min-h-0 min-w-0 grid-cols-1 items-start gap-8 lg:min-h-[56vh] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-6 xl:gap-8">
          {/* Linke Spalte: Text, CTAs, Trust */}
          <div className="order-1 min-h-0 text-center lg:pr-4 lg:pt-2 lg:text-left xl:pt-4">
            <h1
              id="home-hero-heading"
              className="mx-auto mb-5 max-w-xl text-[2.375rem] font-bold leading-[1.15] tracking-tight text-white animate-fade-in-up text-balance sm:text-[2.5rem] md:mb-6 md:max-w-2xl md:text-[2.65rem] md:leading-[1.12] lg:mx-0 lg:max-w-[36rem] lg:text-5xl lg:leading-[1.1] xl:max-w-[40rem] xl:text-[3.15rem]"
            >
              <Link
                href="/webdesign/darmstadt"
                className="relative inline rounded-sm text-white transition-colors duration-300 hover:text-blue-50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563EB]"
              >
                Webdesign in Darmstadt
                <span
                  className="absolute inset-x-0 bottom-[0.08em] h-[1.5px] rounded-full bg-gradient-to-r from-amber-300/90 via-amber-200/50 to-transparent"
                  aria-hidden
                />
              </Link>{' '}
              – Websites, die Kunden bringen
            </h1>

            <p className="mx-auto mb-7 max-w-md text-[0.95rem] leading-relaxed text-blue-50/95 animate-fade-in-up animation-delay-100 sm:mb-8 sm:max-w-lg sm:text-base md:text-[1.05rem] md:leading-[1.65] lg:mx-0 lg:max-w-[34rem]">
              Für Handwerksbetriebe und Unternehmen aus Darmstadt und Umgebung: Wir entwickeln{' '}
              <Link
                href="/webdesign/darmstadt"
                className="font-semibold text-white underline decoration-amber-300/45 underline-offset-[3px] transition-colors hover:decoration-amber-200 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563EB] rounded-sm"
              >
                professionelle Websites
              </Link>
              , die Vertrauen schaffen, bei{' '}
              <span className="font-medium text-white">Google</span> gefunden werden und{' '}
              <span className="font-medium text-white">planbar neue Anfragen</span> liefern.
            </p>

            <div className="mx-auto max-w-lg animate-fade-in-up animation-delay-200 lg:mx-0 lg:max-w-none">
              <div className="flex flex-col items-center gap-3 lg:items-start">
                <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-stretch sm:justify-center lg:w-auto lg:justify-start">
                  <a
                    href="/kontakt"
                    className="inline-flex min-h-[3rem] w-full items-center justify-center gap-1.5 rounded-lg border border-amber-300/80 bg-amber-400 px-5 py-3 text-center text-sm font-semibold leading-tight text-slate-950 shadow-[0_10px_28px_-6px_rgba(180,83,9,0.45)] transition-all duration-300 group/btn hover:scale-[1.02] hover:border-amber-200 hover:bg-amber-500 hover:shadow-[0_14px_32px_-6px_rgba(180,83,9,0.5)] focus-visible:outline focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563EB] active:scale-[0.98] sm:w-auto sm:whitespace-nowrap"
                    aria-label="Kostenloses Erstgespräch sichern – zum Kontaktformular"
                  >
                    <span>Kostenloses Erstgespräch sichern</span>
                    <ArrowRight
                      className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href="/portfolio"
                    className="inline-flex min-h-[3rem] w-full items-center justify-center rounded-lg border border-white/40 bg-white/5 px-5 py-3 text-center text-sm font-semibold leading-tight text-white/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-[2px] transition-all duration-300 hover:scale-[1.02] hover:border-white/55 hover:bg-white/12 hover:text-white focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563EB] active:scale-[0.98] sm:w-auto sm:whitespace-nowrap"
                    aria-label="Erfolgreiche Webdesign-Projekte im Portfolio ansehen"
                  >
                    Erfolgreiche Webdesign-Projekte ansehen
                  </a>
                </div>

                {/* Trust-Zeile: 2×2 */}
                <ul className="mt-2 grid w-full max-w-md grid-cols-2 gap-x-3 gap-y-2 sm:mt-3 sm:max-w-lg lg:mx-0 lg:max-w-xl lg:justify-items-start">
                  {TRUST_ITEMS.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-medium leading-snug text-white/90 sm:justify-start sm:text-[0.8125rem] lg:justify-start"
                    >
                      <Check
                        className="h-3.5 w-3.5 shrink-0 text-amber-300"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Google-Bewertungen */}
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-left shadow-sm backdrop-blur-[2px] transition-colors hover:border-white/35 hover:bg-white/15 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563EB]"
                  aria-label="5 von 5 Sternen auf Google – Bewertungen ansehen"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                    <GoogleGIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-1" aria-hidden>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-amber-300 text-amber-300"
                          strokeWidth={0}
                        />
                      ))}
                    </span>
                    <span className="mt-0.5 block text-xs font-semibold leading-tight text-white">
                      5/5 Sterne · Google-Bewertungen
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Rechte Spalte / Mobile unten: Website-Mockups */}
          <div className="relative order-2 flex w-full min-w-0 justify-center lg:self-stretch lg:items-center">
            <div className="group relative flex w-full max-w-[580px] items-center justify-center animate-fade-in-up animation-delay-300 lg:max-w-none lg:flex-1 lg:scale-[1.18] lg:origin-center xl:scale-[1.24] 2xl:scale-[1.28]">
              {/* Heller Lichtschein hinter den Geräten */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.28)_0%,rgba(147,197,253,0.14)_42%,transparent_72%)] blur-2xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute left-1/2 top-[55%] h-[40%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#93C5FD]/25 blur-3xl"
                aria-hidden
              />

              <div className="relative animate-breathe">
                <Image
                  src="/hero-refernzen.png"
                  alt="Referenz-Websites auf Laptop-, Tablet- und Smartphone-Ansicht"
                  width={800}
                  height={600}
                  priority={true}
                  fetchPriority="high"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1280px) 58vw, 800px"
                  quality={80}
                  className="relative z-[1] mx-auto h-auto w-full max-w-none object-contain"
                  style={{
                    filter:
                      'drop-shadow(0 22px 40px rgba(15, 23, 42, 0.45)) drop-shadow(0 0 32px rgba(147, 197, 253, 0.3))',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weicher Wellen-Übergang zur weißen Folgesektion */}
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
          {/* Sanfte Mulde: Blau läuft mittig weich ins Weiß aus */}
          <path
            fill="#ffffff"
            d="M0 36C240 36 360 84 720 84s480-48 720-48v60H0V36z"
          />
        </svg>
      </div>
    </section>
  )
}

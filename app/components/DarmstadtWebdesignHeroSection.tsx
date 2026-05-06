import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from './Breadcrumbs'
import {
  ArrowRight,
  MapPin,
  Search,
  Sparkles,
  UserRound,
} from 'lucide-react'
import type { City } from '../../config/cities'

const TRUST_ITEMS = [
  {
    label: 'Projekte aus Darmstadt & Region',
    Icon: MapPin,
  },
  {
    label: 'SEO optimiert',
    Icon: Search,
  },
  {
    label: 'Persönlicher Ansprechpartner',
    Icon: UserRound,
  },
] as const

/** Landing-Hero nur für /webdesign/darmstadt — lokaler SEO-Fokus, echte Referenz-Screenshots */
export default function DarmstadtWebdesignHeroSection({ city }: { city: City }) {
  return (
    <section
      className="relative z-10 overflow-x-clip overflow-y-visible border-b border-white/10 bg-blue-600 pb-12 pt-36 md:pb-14 md:pt-32 lg:overflow-visible"
      aria-labelledby="darmstadt-webdesign-hero-heading"
    >
      {/* Hintergrund: Basisverlauf, Glow hinter Text, globales Licht, Vignette, Noise */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Subtiler Hauptverlauf (Tiefe ohne harte Kanten) */}
        <div
          className="absolute inset-0 bg-blue-600"
          style={{
            backgroundImage:
              'linear-gradient(168deg, rgb(29 78 216) 0%, rgb(37 99 235) 45%, rgb(30 64 175) 100%)',
          }}
        />
        {/* Weiches Zentrum-Licht (wie Startseite, etwas zurückhaltender) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 28%, rgba(255, 255, 255, 0.14) 0%, transparent 52%)',
          }}
        />
        {/* Radial glow hinter der Textspalte (links) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 95% 85% at 20% 40%, rgba(255, 255, 255, 0.13) 0%, transparent 55%)',
          }}
        />
        {/* Dunklere Ecken / leichte Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 75% 58% at 0% 0%, rgba(15, 23, 42, 0.32) 0%, transparent 58%),
              radial-gradient(ellipse 70% 52% at 100% 0%, rgba(15, 23, 42, 0.26) 0%, transparent 55%),
              radial-gradient(ellipse 80% 62% at 100% 100%, rgba(15, 23, 42, 0.3) 0%, transparent 60%),
              radial-gradient(ellipse 65% 55% at 0% 100%, rgba(15, 23, 42, 0.22) 0%, transparent 54%)
            `,
          }}
        />
        {/* Feines Film-Noise */}
        <div
          className="absolute inset-0 opacity-[0.045] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-0 pt-1 lg:pb-6 lg:pt-4">
        <div className="mb-5 lg:mb-6">
          <Breadcrumbs
            inverted
            compact
            items={[
              { name: 'Startseite', url: '/' },
              { name: 'Webdesign & Launch', url: '/leistungen/webdesign-launch' },
              { name: city.name, url: `/webdesign/${city.slug}` },
            ]}
          />
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-6 xl:gap-10">
          {/* Linke Spalte */}
          <div className="order-1 max-w-xl lg:order-none">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-blue-50 shadow-sm backdrop-blur-md sm:mb-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white shadow-md shadow-black/10">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
              </span>
              <span className="leading-snug">
                Webdesign & lokale SEO für Unternehmen in Darmstadt
              </span>
            </div>

            <h1
              id="darmstadt-webdesign-hero-heading"
              className="font-bold tracking-tight text-white"
            >
              <span className="block text-[1.65rem] leading-[1.12] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]">
                <span className="text-white">Webdesign </span>
                <span className="text-amber-200">Darmstadt</span>
                <span className="text-white">:</span>
              </span>
              <span className="mt-1 block text-[1.65rem] leading-[1.12] text-white sm:mt-1.5 sm:text-4xl lg:mt-2 lg:text-[2.65rem] lg:leading-[1.08]">
                mehr Sichtbarkeit & Kundenanfragen
              </span>
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-blue-50/95 sm:mt-5 lg:text-xl lg:leading-relaxed">
              Für Unternehmen in Darmstadt: moderne Websites mit lokaler SEO, klarer Struktur und
              Fokus auf echte Kundenanfragen.
            </p>

            <ul
              className="mt-5 flex flex-wrap gap-2 sm:mt-6"
              aria-label="Qualitätsmerkmale"
            >
              {TRUST_ITEMS.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-blue-50 shadow-sm backdrop-blur-sm"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-amber-200"
                    aria-hidden
                  />
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex min-w-0 flex-row flex-nowrap items-center gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-2.5 [&::-webkit-scrollbar]:hidden">
              <Link
                href="/kontakt"
                className="group relative inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-amber-300/70 bg-amber-400 px-2.5 py-2 text-[11px] font-semibold leading-none text-slate-950 shadow-md shadow-amber-900/20 transition-all duration-300 hover:border-amber-200 hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] sm:px-4 sm:py-2.5 sm:text-sm"
              >
                <span className="relative">Kostenlose Website-Analyse sichern</span>
                <ArrowRight className="relative h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-white/35 bg-transparent px-2.5 py-2 text-[11px] font-semibold leading-none text-white/95 shadow-sm transition-all duration-300 hover:bg-white/12 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-4 sm:py-2.5 sm:text-sm"
              >
                Projekte ansehen
                <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-90 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </div>

          {/* Rechte Spalte — Hero-Visual (größer, leicht aus dem Container ragend) */}
          <div className="relative order-2 flex min-w-0 w-full justify-center lg:order-none lg:-mr-6 lg:justify-end xl:-mr-10 2xl:-mr-14">
            <div
              className="relative w-full max-w-xl animate-hero-float will-change-transform max-lg:scale-[1.08] lg:max-w-none lg:w-[min(118vw,720px)] lg:origin-[85%_50%] lg:scale-[1.2] xl:w-[min(125%,760px)] xl:scale-[1.22] xl:translate-x-3 2xl:translate-x-5"
            >
              <div
                className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-[2rem] bg-white/[0.12] blur-3xl lg:scale-125 lg:opacity-90"
                aria-hidden
              />
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/20 shadow-[0_28px_56px_rgba(15,23,42,0.42)]">
                <Image
                  src="/webdesign-darmstadt-hero.png"
                  alt="Webdesign Darmstadt: Laptop, Tablet und Smartphone mit 319Webdesign — Luisenplatz im Hintergrund, Performance- und SEO-Hinweise"
                  width={1024}
                  height={682}
                  className="h-auto w-full object-contain"
                  priority
                  sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 55vw, 760px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import Breadcrumbs from './Breadcrumbs'
import {
  ArrowRight,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
  Zap,
} from 'lucide-react'
import type { City } from '../../config/cities'

const TRUST_ITEMS = [
  {
    label: 'Persönlicher Ansprechpartner',
    Icon: UserRound,
  },
  {
    label: 'SEO inklusive',
    Icon: Search,
  },
  {
    label: 'Standort Trebur',
    Icon: MapPin,
  },
] as const

const MOBILE_TRUST_LINES = [
  'Persönlicher Ansprechpartner',
  'SEO inklusive',
  'DSGVO-konform & individuelle Designs',
] as const

/** Landing-Hero nur für /webdesign/trebur */
export default function TreburWebdesignHeroSection({ city }: { city: City }) {
  return (
    <section
      className="relative z-10 overflow-x-clip overflow-y-visible bg-blue-600 pb-24 pt-[7.25rem] md:pb-20 md:pt-32 lg:overflow-visible lg:pb-24"
      aria-labelledby="trebur-webdesign-hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 bg-blue-600"
          style={{
            backgroundImage:
              'linear-gradient(168deg, rgb(29 78 216) 0%, rgb(37 99 235) 45%, rgb(30 64 175) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 28%, rgba(255, 255, 255, 0.14) 0%, transparent 52%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 95% 85% at 50% 40%, rgba(255, 255, 255, 0.13) 0%, transparent 55%)',
          }}
        />
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
        <div
          className="absolute inset-0 opacity-[0.045] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-4 pt-2 text-center lg:pb-8 lg:pt-4">
        <div className="mb-7 flex justify-center md:mb-5 lg:mb-6">
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

        <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-sm font-medium text-blue-50 shadow-sm backdrop-blur-md md:mb-5 md:py-1.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-white shadow-md shadow-black/10">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
          </span>
          <span className="leading-snug md:hidden">Webdesign &amp; SEO Trebur</span>
          <span className="hidden leading-snug md:inline">
            Webdesign &amp; SEO für Unternehmen in Trebur
          </span>
        </div>

        <h1
          id="trebur-webdesign-hero-heading"
          className="mx-auto mb-5 max-w-3xl text-balance text-[2.375rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[2.5rem] md:mb-6 md:text-[2.65rem] md:leading-[1.12] lg:text-5xl lg:leading-[1.1] xl:text-[3.15rem]"
        >
          <span className="text-white">Webdesign </span>
          <span className="text-amber-200">Trebur</span>
          <span className="text-white">
            {' '}
            – Moderne Websites für Unternehmen &amp; Handwerksbetriebe
          </span>
        </h1>

        <p className="mx-auto mb-7 max-w-2xl text-[0.95rem] leading-relaxed text-blue-50/95 sm:mb-8 sm:text-base md:text-[1.05rem] md:leading-[1.65]">
          Professionelle Webseiten für Unternehmen aus Trebur und der Region. Modern, schnell,
          suchmaschinenoptimiert und individuell entwickelt.
        </p>

        <div role="region" aria-label="Qualitätsmerkmale">
          <ul className="mx-auto mt-2 flex max-w-sm flex-col items-start gap-3 text-left text-[15px] font-medium leading-snug text-blue-50/95 md:hidden">
            {MOBILE_TRUST_LINES.map((line) => (
              <li key={line} className="flex gap-2.5">
                <span className="mt-0.5 shrink-0 text-amber-200" aria-hidden>
                  ✓
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-6 hidden flex-wrap items-center justify-center gap-2 md:mt-6 md:flex">
            {TRUST_ITEMS.map(({ label, Icon }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-blue-50 shadow-sm backdrop-blur-sm"
              >
                <Icon className="h-4 w-4 shrink-0 text-amber-200" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 md:mt-8 md:flex-row md:flex-wrap md:gap-3">
          <Link
            href="/kontakt"
            className="group relative inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl border border-amber-300/70 bg-amber-400 px-6 py-4 text-base font-semibold leading-tight text-slate-950 shadow-lg shadow-amber-900/25 transition-all duration-300 hover:border-amber-200 hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] md:w-auto md:max-w-none md:rounded-lg md:px-5 md:py-3 md:text-sm md:shadow-md"
          >
            <span className="relative">Kostenloses Erstgespräch</span>
            <ArrowRight className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 md:h-4 md:w-4" />
          </Link>

          <Link
            href="/kontakt"
            className="text-center text-[15px] font-medium text-blue-100/95 underline decoration-blue-200/50 underline-offset-[6px] transition-colors hover:text-white hover:decoration-white/60 md:hidden"
          >
            Kostenlosen Website-Check →
          </Link>

          <Link
            href="/kontakt"
            className="hidden md:inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-white/35 bg-transparent px-5 py-3 text-sm font-semibold leading-none text-white/95 shadow-sm transition-all duration-300 hover:bg-white/12 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Kostenlosen Website-Check
            <ArrowRight className="h-4 w-4 shrink-0 opacity-90" />
          </Link>
        </div>

        <ul
          className="mt-8 hidden items-center justify-center gap-x-6 gap-y-2 text-sm text-blue-100/90 md:flex md:flex-wrap"
          aria-label="Zusätzliche Qualitätsmerkmale"
        >
          <li className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-amber-200" aria-hidden />
            DSGVO-konform
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-amber-200" aria-hidden />
            Individuelles Design
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-amber-200" aria-hidden />
            Schnelle Ladezeiten
          </li>
        </ul>
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
          <path
            fill="#ffffff"
            d="M0 36C240 36 360 84 720 84s480-48 720-48v60H0V36z"
          />
        </svg>
      </div>
    </section>
  )
}

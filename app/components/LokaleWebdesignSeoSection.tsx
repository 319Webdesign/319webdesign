'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Zap, LayoutTemplate } from 'lucide-react'
import { useReduceMotion } from './ReducedMotionProvider'

const fadeInUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
}

const bulletPoints = [
  {
    icon: MapPin,
    text: 'Regionale SEO-Optimierung für Darmstadt & Umgebung',
  },
  {
    icon: Zap,
    text: 'Schnelle Ladezeiten & mobile Optimierung',
  },
  {
    icon: LayoutTemplate,
    text: 'Klare Struktur für mehr Anfragen',
  },
] as const

export default function LokaleWebdesignSeoSection() {
  const reduceMotion = useReduceMotion()

  const LeftCol = reduceMotion ? 'div' : motion.div
  const leftProps = reduceMotion
    ? { className: 'order-1 lg:order-1' }
    : { ...fadeInUp, className: 'order-1 lg:order-1' }

  const RightCol = reduceMotion ? 'div' : motion.div
  const rightProps = reduceMotion
    ? { className: 'order-2 lg:order-2' }
    : {
        ...fadeInUp,
        transition: { ...fadeInUp.transition, delay: 0.08 },
        className: 'order-2 lg:order-2',
      }

  return (
    <section
      id="webdesign-darmstadt-region"
      className="relative overflow-hidden border-y border-slate-200/80 bg-white px-6 py-16 md:py-20 lg:py-24"
      aria-labelledby="lokale-seo-heading"
    >
      <div className="relative mx-auto max-w-[72rem]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16">
          <LeftCol {...leftProps}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700 md:text-xs">
              Webdesign Darmstadt &amp; Pfungstadt
            </p>

            <h2
              id="lokale-seo-heading"
              className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.15rem] lg:leading-[1.18]"
            >
              Professionelles Webdesign in Darmstadt – für mehr Sichtbarkeit und Kundenanfragen
            </h2>

            <p className="mt-4 max-w-xl text-pretty text-base font-medium leading-relaxed text-slate-700 md:text-lg">
              Wir erstellen moderne Websites für Unternehmen in{' '}
              <Link
                href="/webdesign/darmstadt"
                className="font-semibold text-blue-800 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-900 hover:decoration-blue-400 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
              >
                Darmstadt
              </Link>
              , Pfungstadt und Umgebung, die nicht nur gut aussehen, sondern bei Google gefunden werden und echte
              Anfragen bringen.
            </p>

            <div className="mt-5 max-w-xl space-y-4 text-pretty text-[15px] leading-relaxed text-slate-600 md:text-base">
              <p>
                Als Webdesigner für Darmstadt und{' '}
                <Link
                  href="/webdesign/pfungstadt"
                  className="font-semibold text-slate-800 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-800 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
                >
                  Pfungstadt
                </Link>{' '}
                unterstützen wir lokale und regionale Unternehmen dabei, online sichtbar zu werden und neue Kunden zu
                gewinnen. Ob Handwerksbetrieb, Dienstleister vor Ort oder{' '}
                <strong className="font-semibold text-slate-800">Immobilienmakler</strong> – eine professionelle Website
                ist heute entscheidend, um bei Google gefunden zu werden und Vertrauen aufzubauen.
              </p>
              <p>
                Wir entwickeln moderne, schnelle Websites mit{' '}
                <Link
                  href="/seo-darmstadt"
                  className="font-semibold text-slate-700 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-800 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
                >
                  SEO für Unternehmen in der Region
                </Link>
                , die Besucher klar zu Kontakt und Anfrage führen. Struktur, Inhalte und lokale Signale stimmen wir so
                ab, dass Sie sichtbarer werden – mit messbarem Fokus auf Anfragen, nicht nur auf hübsche Oberflächen.
              </p>
            </div>

            <ul className="mt-8 space-y-4" role="list">
              {bulletPoints.map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-3.5">
                  <span
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-200/90"
                    aria-hidden
                  >
                    <Icon className="h-[1.125rem] w-[1.125rem] stroke-[2]" />
                  </span>
                  <span className="pt-1 text-[15px] leading-snug text-slate-800 md:text-base">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/kontakt#kontakt"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-amber-400 to-amber-500 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-[0_1px_0_rgba(255,255,255,0.45)_inset,0_12px_28px_-8px_rgba(217,119,6,0.45)] ring-1 ring-amber-300/90 transition-[filter,transform] hover:brightness-[1.03] focus-visible:outline focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2"
              >
                Kostenlose Website-Analyse sichern
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center rounded-xl border border-blue-600/85 bg-white px-6 py-3.5 text-base font-semibold text-blue-700 shadow-sm transition-colors hover:border-blue-700 hover:bg-blue-50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Leistungen für Webdesign &amp; SEO
              </Link>
            </div>

            <p className="mt-6 flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-1">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-slate-600 underline-offset-[3px] hover:text-blue-800 hover:underline focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
              >
                <span className="text-emerald-600" aria-hidden>
                  ✓
                </span>
                Referenzen und Projekte aus Darmstadt &amp; Region
              </Link>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-emerald-600" aria-hidden>
                  ✓
                </span>
                Persönliche Betreuung
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-emerald-600" aria-hidden>
                  ✓
                </span>
                Fokus auf messbare Ergebnisse
              </span>
            </p>
          </LeftCol>

          <RightCol {...rightProps}>
            <div className="group relative mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none">
              <div
                className={`pointer-events-none absolute -bottom-5 -right-4 left-6 top-6 rounded-2xl bg-gradient-to-br from-blue-600/10 via-transparent to-amber-400/12 blur-2xl ${reduceMotion ? '' : 'lg:translate-x-1'}`}
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_20px_45px_-20px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/90">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=82"
                    alt="Moderner Arbeitsplatz mit Laptop – Webdesign und lokale Sichtbarkeit für Unternehmen in Darmstadt und Pfungstadt"
                    fill
                    sizes="(max-width: 1024px) 92vw, 480px"
                    className="object-cover object-center"
                    priority={false}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-amber-500/10"
                    aria-hidden
                  />
                </div>
                <div className="flex items-center gap-3 border-t border-slate-100 bg-white/95 px-4 py-3.5 backdrop-blur-sm md:px-5">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    aria-hidden
                  >
                    <MapPin className="h-5 w-5 stroke-[2]" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Regionaler Fokus</p>
                    <p className="text-sm font-bold text-slate-900">Darmstadt · Pfungstadt · Rhein-Main</p>
                  </div>
                </div>
              </div>
            </div>
          </RightCol>
        </div>
      </div>
    </section>
  )
}

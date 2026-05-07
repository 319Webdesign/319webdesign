'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Clock,
  MapPin,
  MessageCircle,
  Sparkles,
  User,
} from 'lucide-react'
import { useReduceMotion } from './ReducedMotionProvider'

const regions: { label: string; href: string }[] = [
  { label: 'Darmstadt', href: '/webdesign/darmstadt' },
  { label: 'Griesheim', href: '/webdesign/griesheim' },
  { label: 'Weiterstadt', href: '/webdesign/weiterstadt' },
  { label: 'Eberstadt', href: '/webdesign/darmstadt' },
  { label: 'Seeheim-Jugenheim', href: '/kontakt' },
  { label: 'Reinheim', href: '/kontakt' },
  { label: 'Mühltal', href: '/kontakt' },
]

const trustPoints = [
  {
    icon: User,
    text: 'Persönlicher Ansprechpartner',
  },
  {
    icon: MapPin,
    text: 'Fokus auf lokale Sichtbarkeit',
  },
  {
    icon: MessageCircle,
    text: 'Transparente Beratung ohne Fachchinesisch',
  },
] as const

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

export default function DarmstadtClosingCtaSection() {
  const reduceMotion = useReduceMotion()

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white px-6 py-20 md:py-28"
      aria-labelledby="darmstadt-closing-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.09),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Linke Spalte */}
          <motion.div className="min-w-0" {...(!reduceMotion ? fadeIn : {})}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-sm shadow-blue-500/5 ring-1 ring-blue-500/10 backdrop-blur-sm md:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              Regional erreichbar
            </span>

            <h2
              id="darmstadt-closing-cta-heading"
              className="text-balance text-3xl font-bold leading-[1.12] tracking-tight text-slate-900 md:text-4xl lg:text-[2.65rem] lg:leading-[1.1]"
            >
              Webdesign für{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Darmstadt &amp; Umgebung
              </span>{' '}
              — persönlich statt anonym.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg md:leading-relaxed">
              Als Webdesigner aus <strong className="font-semibold text-slate-800">Pfungstadt</strong>{' '}
              betreue ich Unternehmen in{' '}
              <span className="font-semibold text-blue-700">Darmstadt</span> und der gesamten Region
              persönlich. Kurze Wege, direkte Kommunikation und moderne Websites mit Fokus auf{' '}
              <span className="font-medium text-slate-800">Sichtbarkeit und Anfragen</span>.
            </p>

            <div className="mt-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Regionen in der Nähe
              </p>
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                {regions.map(({ label, href }) => (
                  <RegionChip key={label} label={label} href={href} reduceMotion={reduceMotion} />
                ))}
              </div>
            </div>

            <p className="mt-10 text-sm text-slate-500">
              <Link
                href="/seo-darmstadt"
                className="font-medium text-blue-600 underline decoration-blue-500/30 underline-offset-4 transition-colors hover:text-blue-700 hover:decoration-blue-500/60"
              >
                Mehr zu SEO in Darmstadt
              </Link>
              <span className="text-slate-400"> — für mehr lokale Reichweite.</span>
            </p>
          </motion.div>

          {/* Rechte Spalte: Premium CTA-Card */}
          <motion.div
            className="relative min-w-0 lg:sticky lg:top-28"
            {...(!reduceMotion
              ? {
                  ...fadeIn,
                  transition: { ...fadeIn.transition, delay: 0.08 },
                }
              : {})}
          >
            <div
              className={`relative overflow-hidden rounded-[28px] border border-slate-200/90 bg-gradient-to-br from-white via-blue-50/[0.45] to-slate-50/90 p-8 shadow-[0_24px_64px_-16px_rgba(15,23,42,0.14),0_0_0_1px_rgba(255,255,255,0.8)_inset] ring-1 ring-slate-900/[0.03] md:p-10 ${reduceMotion ? '' : 'transition-transform duration-300 hover:-translate-y-1'}`}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-400/25 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl"
                aria-hidden
              />

              <div className="relative">
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200/90 bg-gradient-to-r from-amber-50 to-white px-3.5 py-1.5 text-xs font-semibold text-amber-950 shadow-sm shadow-amber-900/10 ring-1 ring-amber-400/20">
                  <Sparkles className="h-3.5 w-3.5 text-amber-600" aria-hidden />
                  Kostenlose Analyse
                </span>

                <p className="text-xl font-semibold leading-snug tracking-tight text-slate-900 md:text-2xl md:leading-snug">
                  Lassen Sie uns gemeinsam herausfinden, wie Ihre Website mehr{' '}
                  <span className="text-blue-700">Sichtbarkeit</span> und{' '}
                  <span className="text-blue-700">Anfragen</span> erzeugen kann.
                </p>

                <ul className="mt-8 space-y-4 border-t border-slate-200/80 pt-8">
                  {trustPoints.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-md shadow-blue-500/10 ring-1 ring-slate-200/80">
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                      </span>
                      <span className="pt-1.5 text-sm font-medium leading-snug text-slate-700 md:text-[15px]">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link
                    href="/kontakt"
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 px-6 py-4 text-center text-base font-semibold text-white shadow-[0_12px_40px_-8px_rgba(37,99,235,0.55)] ring-1 ring-white/20 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.01] hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.55)] focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 active:scale-[0.99]"
                  >
                    <span
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                    <span className="relative">Kostenlose Website-Analyse sichern</span>
                    <ArrowRight
                      className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>

                  <p className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-500">
                    <Clock className="h-4 w-4 shrink-0 text-blue-500/90" aria-hidden />
                    <span>Antwort innerhalb von 24h</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function RegionChip({
  label,
  href,
  reduceMotion,
}: {
  label: string
  href: string
  reduceMotion: boolean
}) {
  return (
    <motion.div
      className="inline-block"
      whileHover={reduceMotion ? undefined : { y: -2, transition: { duration: 0.2 } }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      <Link
        href={href}
        className="group/chip inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm shadow-slate-900/5 ring-1 ring-slate-900/[0.02] backdrop-blur-sm transition-[border-color,box-shadow,background-color] duration-300 hover:border-blue-300/70 hover:bg-white hover:shadow-[0_8px_30px_-8px_rgba(59,130,246,0.35)] focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <MapPin
          className="h-3.5 w-3.5 shrink-0 text-blue-500 opacity-80 transition-colors group-hover/chip:text-blue-600"
          aria-hidden
        />
        {label}
      </Link>
    </motion.div>
  )
}

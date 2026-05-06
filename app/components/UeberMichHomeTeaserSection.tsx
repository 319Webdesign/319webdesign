'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useReduceMotion } from './ReducedMotionProvider'

const fadeInUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
}

const trustBullets = [
  'Fokus auf lokale Unternehmen – keine anonymen Großprojekte',
  'Direkter Ansprechpartner – keine Agentur-Struktur',
  'Websites, die Anfragen bringen – nicht nur gut aussehen',
] as const

export default function UeberMichHomeTeaserSection() {
  const reduceMotion = useReduceMotion()

  const LeftCol = reduceMotion ? 'div' : motion.div
  const leftProps = reduceMotion
    ? { className: 'relative order-2 lg:order-1' }
    : { ...fadeInUp, className: 'relative order-2 lg:order-1' }

  const RightCol = reduceMotion ? 'div' : motion.div
  const rightProps = reduceMotion
    ? { className: 'order-1 lg:order-2' }
    : {
        ...fadeInUp,
        transition: { ...fadeInUp.transition, delay: 0.08 },
        className: 'order-1 lg:order-2',
      }

  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-16 md:py-20 lg:py-24"
      aria-labelledby="ueber-mich-home-heading"
      aria-describedby="ueber-mich-home-desc"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_15%_20%,rgba(37,99,235,0.06),transparent_58%),radial-gradient(ellipse_45%_35%_at_95%_85%,rgba(148,163,184,0.08),transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16">
        <LeftCol {...leftProps}>
          <div className="group relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none">
            <div
              className={`pointer-events-none absolute -bottom-6 -left-4 right-8 top-8 rounded-[2rem] bg-gradient-to-br from-blue-600/12 via-transparent to-slate-200/40 blur-2xl ${reduceMotion ? '' : 'lg:translate-x-2'}`}
              aria-hidden
            />
            <div
              className={`relative overflow-hidden rounded-[1.35rem] shadow-[0_20px_50px_-18px_rgba(15,23,42,0.22)] ring-1 ring-slate-200/90 ${reduceMotion ? '' : 'lg:-rotate-[1.5deg] lg:transition-transform lg:duration-300 lg:group-hover:rotate-0'}`}
            >
              <div className="relative">
                <Image
                  src="/maik.webp"
                  alt="Maik Schmidt – Webdesign und SEO für Unternehmen in Darmstadt und Pfungstadt"
                  width={560}
                  height={720}
                  sizes="(max-width: 1024px) 92vw, 440px"
                  quality={90}
                  className="h-auto w-full object-cover object-[center_15%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-900/15 via-transparent to-transparent" aria-hidden />
              </div>
            </div>
            <Link
              href="/webdesign/pfungstadt"
              className="absolute bottom-4 left-4 z-[1] inline-flex rounded-full border border-white/70 bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-md backdrop-blur-sm transition-colors hover:border-blue-300 hover:text-blue-800 md:bottom-5 md:left-5 md:px-3.5 md:text-[13px] focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Webdesign in Pfungstadt
            </Link>
          </div>
        </LeftCol>

        <RightCol {...rightProps}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700 md:text-xs">
            Persönlich · Direkt · Regional
          </p>
          <h2
            id="ueber-mich-home-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.25rem] lg:leading-[1.15]"
          >
            Wer hinter 319Webdesign steckt
          </h2>
          <p id="ueber-mich-home-desc" className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-600 md:text-lg">
            Ich bin <strong className="font-semibold text-slate-800">Maik Schmidt</strong> und unterstütze Handwerksbetriebe sowie lokale Unternehmen in{' '}
            <Link
              href="/webdesign/darmstadt"
              className="font-semibold text-slate-800 underline decoration-blue-200 underline-offset-[3px] hover:text-blue-800 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
            >
              Darmstadt
            </Link>{' '}
            und Pfungstadt – mit Webdesign und SEO, das Sie bei Google sichtbar macht und Anfragen bringt. Ehrlich,
            direkt und ohne Agentur-Theater – mir geht es um echte Ergebnisse, nicht nur um schöne Bildschirmfotos.
          </p>

          <blockquote className="mt-6 border-l-4 border-blue-600 bg-slate-50/90 py-3 pl-4 pr-3 text-base italic leading-snug text-slate-700 md:mt-7 md:text-[1.05rem]">
            Ich baue keine Websites für Klicks – sondern für Anfragen.
          </blockquote>

          <div className="mt-6 space-y-3 md:mt-7">
            {trustBullets.map((line) => (
              <div key={line} className="flex gap-3 text-[15px] leading-snug text-slate-700 md:text-base">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200/90"
                  aria-hidden
                >
                  <Check className="h-3.5 w-3.5 stroke-[2.8]" />
                </span>
                <span>{line}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm font-medium text-slate-500 md:mt-7 md:text-[0.9375rem]">
            Projekte in Darmstadt & Umgebung
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-8">
            <Link
              href="/uber-mich"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-amber-400 to-amber-500 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-[0_1px_0_rgba(255,255,255,0.45)_inset,0_12px_28px_-8px_rgba(217,119,6,0.45)] ring-1 ring-amber-300/90 transition-[filter,transform] hover:brightness-[1.03] focus-visible:outline focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2"
            >
              Webdesigner Maik Schmidt – Profil &amp; Arbeitsweise
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-xl border border-blue-600/85 bg-white px-6 py-3.5 text-base font-semibold text-blue-700 shadow-sm transition-colors hover:border-blue-700 hover:bg-blue-50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Kostenloses Erstgespräch
            </Link>
          </div>
        </RightCol>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code2, LayoutTemplate } from 'lucide-react'
import { useReduceMotion } from './ReducedMotionProvider'

const fadeIn = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' },
}

export default function SolutionFocusCtaSection() {
  const reduceMotion = useReduceMotion()

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24 lg:py-28 px-6 bg-slate-950"
      aria-labelledby="solution-focus-heading"
    >
      {/* Premium mesh / radial backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-slate-950" />
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              'radial-gradient(ellipse 85% 55% at 15% 20%, rgba(59, 130, 246, 0.22), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 80%, rgba(99, 102, 241, 0.18), transparent 50%), radial-gradient(ellipse 50% 40% at 50% 100%, rgba(15, 23, 42, 0.9), transparent 60%)',
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.4)_0%,transparent_45%,rgba(2,6,23,0.5)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy + CTA */}
          <motion.div {...fadeIn} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-200 shadow-[0_0_24px_rgba(59,130,246,0.35)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>
              System-Integration Experte
            </div>

            <h2
              id="solution-focus-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight"
            >
              Ihr System läuft, aber das Design ist stehen geblieben?
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl md:text-xl">
              Sie lieben Ihre gewohnten Workflows in onOffice oder Ihrem Buchungstool, aber Ihre Website wirkt wie aus
              der Zeit gefallen? Ich erstelle moderne High-Performance-Frontends, die sich nahtlos an Ihre bestehende
              Software anbinden. Behalten Sie Ihre Logik – ich schenke Ihnen den Look, der verkauft.
            </p>

            <div>
              <Link
                href="/kontakt"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Jetzt System-Check anfragen
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </div>
          </motion.div>

          {/* Right: integration graphic */}
          <IntegrationGraphic reduceMotion={reduceMotion} />
        </div>
      </div>
    </section>
  )
}

function IntegrationGraphic({ reduceMotion }: { reduceMotion: boolean }) {
  const inner = (
    <>
      <div className="relative flex flex-col items-stretch justify-center gap-6 sm:flex-row sm:items-center sm:gap-0">
        {/* System card */}
        <div className="relative z-10 flex-1 rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/40 backdrop-blur-md sm:max-w-[200px]">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/80 text-blue-300 ring-1 ring-white/10">
            <Code2 className="h-5 w-5" aria-hidden />
          </div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Backend / System</p>
          <p className="mt-1 text-sm font-semibold text-white">CRM · API · Daten</p>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded bg-slate-700/80" />
            <div className="h-1.5 w-3/4 rounded bg-slate-700/60" />
            <div className="h-1.5 w-1/2 rounded bg-slate-700/50" />
          </div>
        </div>

        {/* Connector: horizontal pulse on mobile, vertical on desktop */}
        <div className="relative flex h-14 w-full shrink-0 items-center justify-center sm:h-40 sm:w-28">
          {!reduceMotion ? (
            <>
              {/* Mobile: horizontal bridge */}
              <div className="relative flex h-full w-full items-center justify-center sm:hidden">
                <motion.div
                  className="h-px w-full max-w-[10rem] bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"
                  initial={{ scaleX: 0.2, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: 'easeOut' }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_18px_4px_rgba(96,165,250,0.85)]"
                  animate={{ x: ['-4.5rem', '4.5rem'], opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
              {/* Desktop: vertical bridge */}
              <div className="relative hidden h-full w-full items-center justify-center sm:flex">
                <motion.div
                  className="h-28 w-px bg-gradient-to-b from-transparent via-blue-400/70 to-transparent"
                  initial={{ scaleY: 0.2, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: 'easeOut' }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_16px_3px_rgba(103,232,249,0.75)]"
                  animate={{ y: ['-3.25rem', '3.25rem'], opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                />
              </div>
            </>
          ) : (
            <>
              <div
                className="h-px w-full max-w-[10rem] bg-gradient-to-r from-transparent via-blue-400/45 to-transparent sm:hidden"
                aria-hidden
              />
              <div
                className="hidden h-28 w-px bg-gradient-to-b from-transparent via-blue-400/45 to-transparent sm:block"
                aria-hidden
              />
            </>
          )}
        </div>

        {/* Design card */}
        <div className="relative z-10 flex-1 rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/40 backdrop-blur-md sm:max-w-[200px]">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-600/30 text-white ring-1 ring-white/15">
            <LayoutTemplate className="h-5 w-5" aria-hidden />
          </div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Frontend / Design</p>
          <p className="mt-1 text-sm font-semibold text-white">Next.js · Brand · UX</p>
          <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-slate-900/40 p-2">
            <div className="mb-2 h-8 rounded bg-gradient-to-r from-blue-500/40 to-indigo-500/30" />
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-6 rounded bg-white/10" />
              <div className="h-6 rounded bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-slate-500 sm:text-left">
        Effizienz Ihrer Software – Ästhetik, die konvertiert.
      </p>
    </>
  )

  if (reduceMotion) {
    return <div className="relative min-h-[280px] md:min-h-[320px]">{inner}</div>
  }

  return (
    <motion.div
      className="relative min-h-[280px] md:min-h-[320px]"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
    >
      {inner}
    </motion.div>
  )
}

'use client'

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { motion } from 'framer-motion'
import {
  AreaChart,
  BarChart3,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Palette,
  PenTool,
  ShieldCheck,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from 'lucide-react'

function subscribePrefersReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', onStoreChange)
  return () => mq.removeEventListener('change', onStoreChange)
}

function getPrefersReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** SSR: Karussell annehmen, nach Hydration ggf. auf Raster wechseln. */
function getPrefersReducedMotionServerSnapshot() {
  return false
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribePrefersReducedMotion,
    getPrefersReducedMotionSnapshot,
    getPrefersReducedMotionServerSnapshot
  )
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
}

const vorteile = [
  { icon: PenTool, title: 'Professionelles Erscheinungsbild' },
  { icon: Users, title: 'Gewinnung von Neukunden' },
  { icon: Mail, title: 'Gewinnung von Mitarbeitern' },
  { icon: BarChart3, title: 'Langfristige Betreuung Ihrer Website' },
  { icon: Briefcase, title: 'Mehr Zeit für Ihr Geschäft' },
  { icon: ShieldCheck, title: '100% DSGVO konform' },
  { icon: Zap, title: 'Extreme Ladegeschwindigkeit' },
  { icon: MapPin, title: 'Regionale Expertise vor Ort' },
  { icon: Wrench, title: 'Sorglos-Paket durch Wartung' },
  { icon: Palette, title: 'Individuelles Design statt Baukasten' },
  { icon: AreaChart, title: 'Messbare Ergebnisse' },
  { icon: TrendingUp, title: 'Nachhaltiges Wachstum' },
] as const

const LEN = vorteile.length

/** Kürzester Abstand auf dem Kreis (z. B. 5→0 ist +1 statt -5). */
function circularOffset(index: number, active: number): number {
  let d = index - active
  if (d > LEN / 2) d -= LEN
  if (d < -LEN / 2) d += LEN
  return d
}

export default function VorteileWebsiteSection() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section className="relative z-10 mt-10 overflow-visible bg-blue-600 px-6 pb-10 pt-24 md:mt-14 md:pb-14 md:pt-28" aria-labelledby="vorteile-website-heading">
      <div
        className="pointer-events-none absolute -top-8 left-1/2 h-8 w-[150%] -translate-x-1/2 rounded-t-[100%] bg-blue-600 md:-top-10 md:h-10"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl">
        <HeaderEl reduceMotion={prefersReducedMotion} />

        {prefersReducedMotion ? (
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {vorteile.map((item) => (
              <StaticCard key={item.title} item={item} />
            ))}
          </div>
        ) : (
          <VorteileCarousel />
        )}
      </div>
      <div
        className="pointer-events-none absolute -bottom-16 left-1/2 h-16 w-[150%] -translate-x-1/2 rounded-b-[100%] bg-blue-600 md:-bottom-24 md:h-24"
        aria-hidden
      />
    </section>
  )
}

function HeaderEl({ reduceMotion }: { reduceMotion: boolean }) {
  const HeaderWrap = reduceMotion ? 'header' : motion.header
  const props = reduceMotion ? {} : fadeInUp
  return (
    <HeaderWrap {...props} className="mx-auto mb-2 max-w-3xl text-center md:mb-3">
      <h2 id="vorteile-website-heading" className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
        Welche Vorteile hat eine Website von 319Webdesign
      </h2>
    </HeaderWrap>
  )
}

function StaticCard({ item }: { item: (typeof vorteile)[number] }) {
  const Icon = item.icon

  return (
    <div className="h-full">
      <article className="group flex h-full flex-col items-center rounded-xl border border-slate-200/90 bg-white px-4 py-5 text-center shadow-md shadow-blue-950/15 transition-colors duration-300 hover:border-amber-300 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-900/25 md:px-5 md:py-6">
        <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 transition-colors duration-300 group-hover:bg-white/25 md:h-12 md:w-12">
          <Icon className="h-[22px] w-[22px] text-amber-500 transition-colors duration-300 group-hover:text-white md:h-6 md:w-6" aria-hidden />
        </div>
        <p className="text-sm font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-white md:text-base">{item.title}</p>
      </article>
    </div>
  )
}

function VorteileCarousel() {
  const regionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + LEN) % LEN)
  }, [])

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % LEN)
  }, [])

  useEffect(() => {
    const el = regionRef.current
    if (!el) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goNext()
      }
    }

    el.addEventListener('keydown', onKeyDown)
    return () => el.removeEventListener('keydown', onKeyDown)
  }, [goPrev, goNext])

  return (
    <div
      ref={regionRef}
      tabIndex={0}
      role="region"
      aria-roledescription="Karussell"
      aria-label="Vorteile einer Website – mit Pfeiltasten oder Wischen steuern"
      className="relative -mt-1 mx-auto max-w-6xl select-none outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 rounded-lg md:-mt-2"
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.12}
        dragSnapToOrigin
        onDragEnd={(_, info) => {
          const threshold = 48
          if (info.offset.x < -threshold || info.velocity.x < -380) goNext()
          else if (info.offset.x > threshold || info.velocity.x > 380) goPrev()
        }}
        className="relative h-[320px] cursor-grab touch-pan-x active:cursor-grabbing sm:h-[360px] md:h-[400px]"
        style={{ perspective: 1200 }}
      >
        <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]">
          {vorteile.map((item, index) => {
            const offset = circularOffset(index, activeIndex)
            const Icon = item.icon

            const isCenter = offset === 0
            const isNeighbor = Math.abs(offset) === 1

            let x = 0
            let scale = 0.72
            let rotateY = 0
            let opacity = 0
            let zIndex = 0

            if (isCenter) {
              x = 0
              scale = 1
              rotateY = 0
              opacity = 1
              zIndex = 20
            } else if (offset === -1) {
              x = -298
              scale = 0.82
              rotateY = 22
              opacity = 1
              zIndex = 10
            } else if (offset === 1) {
              x = 298
              scale = 0.82
              rotateY = -22
              opacity = 1
              zIndex = 10
            } else if (Math.abs(offset) === 2) {
              opacity = 0
              scale = 0.5
              x = offset < 0 ? -485 : 485
              rotateY = offset < 0 ? 40 : -40
              zIndex = 0
            } else {
              opacity = 0
              scale = 0.45
              x = 0
              rotateY = 0
              zIndex = 0
            }

            return (
              <motion.article
                key={item.title}
                layout
                initial={false}
                animate={{
                  x,
                  y: -36,
                  scale,
                  rotateY,
                  opacity,
                  zIndex,
                }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                onClick={() => {
                  if (offset === -1) goPrev()
                  else if (offset === 1) goNext()
                }}
                className={`absolute w-[min(94vw,320px)] rounded-2xl border px-6 py-8 text-center shadow-lg sm:w-[min(92vw,360px)] md:w-[400px] md:px-8 md:py-10 ${
                  isCenter
                    ? 'border-amber-300/90 bg-amber-400 shadow-xl shadow-amber-950/35'
                    : 'border-white/25 bg-white/95 shadow-blue-950/20'
                } ${isNeighbor ? 'cursor-pointer hover:border-amber-200/80' : ''}`}
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  pointerEvents: isCenter || isNeighbor ? 'auto' : 'none',
                }}
                aria-current={isCenter ? 'true' : undefined}
              >
                <div
                  className={`mx-auto mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full md:mb-6 md:h-16 md:w-16 ${
                    isCenter ? 'bg-white/20 ring-2 ring-white/35' : 'bg-amber-50'
                  }`}
                >
                  <Icon
                    className={`h-7 w-7 md:h-9 md:w-9 ${isCenter ? 'text-white' : 'text-amber-500'}`}
                    aria-hidden
                  />
                </div>
                <p
                  className={`font-bold leading-snug ${isCenter ? 'text-base text-white md:text-lg' : 'text-sm text-slate-900 md:text-base'}`}
                >
                  {item.title}
                </p>
              </motion.article>
            )
          })}
        </div>
      </motion.div>

      <div className="mx-auto -mt-7 grid w-full max-w-[min(94vw,340px)] grid-cols-3 items-center gap-1 sm:-mt-9 sm:max-w-[min(92vw,400px)] md:-mt-11 md:max-w-[440px]">
        <div className="flex justify-end pe-2 md:pe-3">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25 focus-visible:outline focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Vorherige Karte"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden />
          </button>
        </div>
        <div className="flex justify-center gap-2" role="tablist" aria-label="Kartenposition">
          {vorteile.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Karte ${i + 1} von ${LEN}`}
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === activeIndex ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/35 hover:bg-white/55'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-start ps-2 md:ps-3">
          <button
            type="button"
            onClick={goNext}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25 focus-visible:outline focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Nächste Karte"
          >
            <ChevronRight className="h-6 w-6" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  )
}

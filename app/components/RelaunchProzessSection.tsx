'use client'

import type { ReactNode } from 'react'
import { useLayoutEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'

const steps: { title: string; body: ReactNode }[] = [
  {
    title: 'Analyse:',
    body: (
      <>
        Wir prüfen genau: Was funktioniert auf Ihrer aktuellen Seite und was kostet Sie aktuell wertvolle
        Kunden?
      </>
    ),
  },
  {
    title: 'Konzept:',
    body: (
      <>
        Wir erstellen die neue Struktur, das Design und die Inhalte, die Ihre Zielgruppe in{' '}
        <strong>Darmstadt</strong> wirklich überzeugen.
      </>
    ),
  },
  {
    title: 'Entwicklung:',
    body: (
      <>
        Ich baue Ihre neue Seite mit <strong>Next.js</strong> – kompromisslos schnell, mobil optimiert und
        technisch auf dem neuesten Stand.
      </>
    ),
  },
  {
    title: 'Migration:',
    body: (
      <>
        Der wichtigste Schritt – ich ziehe Ihre Inhalte und SEO-Stärken sicher um. Keine{' '}
        <strong>Datenverluste</strong>, keine toten Links.
      </>
    ),
  },
  {
    title: 'Launch & Begleitung:',
    body: (
      <>
        Wir gehen live inklusive korrekter <strong>Google-Einreichung</strong> und dauerhafter strategischer
        Unterstützung.
      </>
    ),
  },
]

/** Strukturierter Relaunch-Prozess – nur /website-relaunch. Eine H2; Phasen-Titel ohne H-Tags (fett). */
export default function RelaunchProzessSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const rafRef = useRef<number | null>(null)

  useLayoutEffect(() => {
    const updateActiveStep = () => {
      const items = itemRefs.current
      const vh = window.innerHeight
      /** Leselinie leicht oberhalb der Bildmitte – fühlt sich beim Scrollen natürlicher an */
      const focusY = vh * 0.4

      let bestIdx = 0
      let bestDist = Infinity
      let foundVisible = false

      items.forEach((el, i) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.bottom <= 0 || rect.top >= vh) return
        foundVisible = true
        const midY = rect.top + rect.height / 2
        const dist = Math.abs(midY - focusY)
        if (dist < bestDist) {
          bestDist = dist
          bestIdx = i
        }
      })

      if (foundVisible) {
        setActiveIndex(bestIdx)
        return
      }

      const first = items[0]
      const last = items[steps.length - 1]
      if (first) {
        const fr = first.getBoundingClientRect()
        if (fr.top > vh * 0.55) {
          setActiveIndex(0)
          return
        }
      }
      if (last) {
        const lr = last.getBoundingClientRect()
        if (lr.bottom < vh * 0.4) {
          setActiveIndex(steps.length - 1)
        }
      }
    }

    const scheduleUpdate = () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        updateActiveStep()
      })
    }

    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate, { passive: true })

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section
      className="border-b border-slate-200 bg-white py-16 md:py-24 px-6"
      aria-labelledby="relaunch-prozess-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="relaunch-prozess-heading"
          className="mb-5 text-center text-2xl font-bold leading-tight text-slate-900 md:text-left md:text-3xl lg:text-4xl"
        >
          Was wir gemeinsam tun: Ihr strukturierter Relaunch-Prozess
        </h2>
        <p className="mb-12 max-w-3xl text-center text-lg leading-relaxed text-slate-700 md:text-left md:text-xl md:leading-relaxed">
          Ein Relaunch muss keine Sorgen bereiten. Ich begleite Unternehmen in <strong>Darmstadt</strong>{' '}
          Schritt für Schritt durch den Prozess – sicher, transparent und ohne Datenverlust.
        </p>

        <ol className="relative m-0 list-none space-y-0 p-0">
          {steps.map((step, index) => {
            const stepNumber = index + 1
            const isLast = index === steps.length - 1
            const isActive = index === activeIndex
            const trackCenter = 'left-[1.125rem] md:left-[1.375rem]'

            return (
              <li
                key={step.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className="relative flex items-center gap-4 pb-10 md:gap-6 md:pb-12 last:pb-0 scroll-mt-28"
              >
                {/* Eine Linie pro Zeile, Kreis liegt mit Ring darüber und verdeckt die Mitte */}
                <span
                  className={`absolute ${trackCenter} z-0 w-px -translate-x-1/2 bg-slate-200 ${
                    index === 0 ? 'top-1/2' : 'top-0'
                  } ${isLast ? 'bottom-1/2' : 'bottom-0'}`}
                  aria-hidden
                />

                <div className="relative z-[1] flex w-9 shrink-0 justify-center md:w-11">
                  <span
                    className={`inline-flex size-9 select-none items-center justify-center rounded-full border-2 text-center text-sm font-bold leading-none tabular-nums shadow-sm transition-all duration-300 md:size-11 md:text-base ${
                      isActive
                        ? 'border-blue-600 bg-blue-600 text-white shadow-blue-600/25 ring-4 ring-white scale-105'
                        : 'border-blue-600 bg-white text-blue-600 ring-4 ring-white'
                    }`}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    {stepNumber}
                  </span>
                </div>
                <div className="min-w-0 flex-1 rounded-xl border border-slate-200/90 bg-slate-50/80 p-5 shadow-sm ring-1 ring-slate-900/[0.03] md:p-6">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="text-lg font-bold text-slate-900 md:text-xl">{step.title}</span>
                    <Check className="h-5 w-5 shrink-0 text-blue-600" strokeWidth={2.5} aria-hidden />
                  </div>
                  <p className="m-0 text-base leading-relaxed text-slate-700 md:text-lg">{step.body}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

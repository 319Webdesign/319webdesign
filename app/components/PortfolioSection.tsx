'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useReduceMotion } from './ReducedMotionProvider'
import {
  getPortfolioHomeBadges,
  getPortfolioHomeTags,
  getPortfolioHomeTeaser,
  getPortfolioProjectsHomeSorted,
} from '../../config/projects'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' as const },
}

const HOME_PROJECTS = getPortfolioProjectsHomeSorted().filter((project) => project.slug !== 'da-sound')

export default function PortfolioSection() {
  const reduceMotion = useReduceMotion()
  const HeaderEl = reduceMotion ? 'div' : motion.div
  const headerProps = reduceMotion
    ? { className: 'mb-10 text-center md:mb-12' }
    : { ...fadeInUp, className: 'mb-10 text-center md:mb-12' }

  return (
    <section
      className="relative z-10 overflow-visible bg-blue-600 px-6 pb-8 pt-14 md:pb-12 md:pt-20"
      aria-labelledby="portfolio-home-heading"
      aria-describedby="portfolio-home-sub"
    >
      <div className="mx-auto min-w-0 max-w-7xl">
        <HeaderEl {...headerProps}>
          <h2
            id="portfolio-home-heading"
            className="mx-auto max-w-4xl text-balance text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl"
          >
            Ergebnisse aus der Praxis – Websites, die Kunden bringen
          </h2>
          <p
            id="portfolio-home-sub"
            className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-blue-100 md:mt-4 md:text-xl"
          >
            Ausgewählte{' '}
            <Link
              href="/webdesign/darmstadt"
              className="font-medium text-white underline decoration-blue-200/80 underline-offset-[3px] hover:text-blue-50 hover:decoration-blue-50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 rounded-sm"
            >
              Webdesign-Projekte aus Darmstadt
            </Link>{' '}
            &amp; Umgebung – mit Fokus auf Sichtbarkeit und echte Anfragen.
          </p>
        </HeaderEl>

        <ul className="m-0 mx-auto grid max-w-[1300px] list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {HOME_PROJECTS.map((project, index) => {
            const badges = getPortfolioHomeBadges(project)
            const tags = getPortfolioHomeTags(project)
            const teaser = getPortfolioHomeTeaser(project)
            const ItemEl = reduceMotion ? 'li' : motion.li
            const itemProps = reduceMotion
              ? { className: 'h-full min-h-0 overflow-visible' }
              : {
                  ...fadeInUp,
                  transition: { ...fadeInUp.transition, delay: index * 0.06 },
                  className: 'h-full min-h-0 overflow-visible',
                }

            return (
              <ItemEl key={project.slug} {...itemProps}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group relative flex h-full flex-col overflow-visible rounded-xl border border-slate-200/90 bg-white shadow-[0_4px_8px_-2px_rgba(15,23,42,0.08),0_14px_28px_-8px_rgba(15,23,42,0.16)] transition-all duration-300 hover:border-blue-200/80 hover:shadow-[0_8px_16px_-4px_rgba(15,23,42,0.1),0_22px_44px_-12px_rgba(15,23,42,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {badges.length > 0 ? (
                    <ul
                      className="pointer-events-none absolute left-0 top-0 z-20 m-0 flex w-auto max-w-full flex-wrap justify-start gap-1.5 pl-2 pr-4 pt-0 list-none -translate-y-1/2 sm:pl-3"
                      aria-label="Highlights"
                    >
                      {badges.map((badge) => (
                        <li key={badge}>
                          <span className="inline-flex rounded-lg border border-amber-200/90 bg-gradient-to-b from-amber-400 to-amber-500 px-2.5 py-1 text-[11px] font-bold leading-tight text-slate-950 shadow-[0_2px_6px_rgba(15,23,42,0.18),0_6px_14px_-2px_rgba(217,119,6,0.35)] ring-1 ring-white/35 sm:text-xs">
                            {badge}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="relative h-40 shrink-0 overflow-hidden rounded-t-xl bg-slate-100 sm:h-44">
                    <Image
                      src={project.imageUrl}
                      alt={`Webdesign Portfolio ${project.title} – ${project.category} in ${project.location}, Next.js Referenz 319Webdesign Darmstadt`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col rounded-b-xl bg-white p-5 sm:p-6">
                    <h3 className="text-lg font-bold leading-snug text-slate-900 group-hover:text-blue-700 sm:text-xl">
                      {project.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">{teaser}</p>
                  </div>
                </Link>
              </ItemEl>
            )
          })}
        </ul>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-lg border border-amber-300/70 bg-amber-400 px-8 py-3.5 font-semibold text-slate-950 shadow-lg shadow-amber-900/25 transition-all duration-300 hover:scale-[1.02] hover:border-amber-200 hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            Alle Referenzen und erfolgreichen Projekte im Portfolio →
          </Link>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-24 z-[5] h-24 overflow-x-hidden md:-bottom-32 md:h-32"
        aria-hidden
      >
        <div className="absolute left-1/2 top-0 h-full w-[165%] -translate-x-1/2 rounded-b-[100%] bg-blue-600" />
      </div>
    </section>
  )
}

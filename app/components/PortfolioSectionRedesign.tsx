'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useReduceMotion } from './ReducedMotionProvider'
import {
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

const PROJECTS = getPortfolioProjectsHomeSorted()

/** Portfolio auf /website-relaunch – 3 gleiche Karten nebeneinander (ab md). */
export default function PortfolioSectionRedesign() {
  const reduceMotion = useReduceMotion()
  const HeaderEl = reduceMotion ? 'div' : motion.div
  const headerProps = reduceMotion
    ? { className: 'mb-10 text-center md:mb-12' }
    : { ...fadeInUp, className: 'mb-10 text-center md:mb-12' }

  return (
    <section
      className="relative border-t border-slate-200/80 bg-gradient-to-b from-slate-50/80 to-white px-6 py-16 md:py-24"
      aria-labelledby="relaunch-portfolio-heading"
    >
      <div className="relative mx-auto max-w-7xl">
        <HeaderEl {...headerProps}>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Portfolio</p>
          <h2
            id="relaunch-portfolio-heading"
            className="text-balance text-2xl font-bold tracking-tight text-slate-900 md:text-3xl lg:text-4xl"
          >
            Referenzen aus Darmstadt &amp; Pfungstadt
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            So können moderne Next.js-Websites aussehen – echte Projekte aus der Region, mit klarem Fokus auf
            Performance und messbare Qualität.
          </p>
        </HeaderEl>

        <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {PROJECTS.map((project, index) => {
            const tags = getPortfolioHomeTags(project)
            const teaser = getPortfolioHomeTeaser(project)
            const ItemEl = reduceMotion ? 'li' : motion.li
            const itemProps = reduceMotion
              ? { className: 'h-full min-h-0' }
              : {
                  ...fadeInUp,
                  transition: { ...fadeInUp.transition, delay: index * 0.06 },
                  className: 'h-full min-h-0',
                }

            return (
              <ItemEl key={project.slug} {...itemProps}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:border-blue-200/80 hover:shadow-xl hover:shadow-slate-900/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <div className="relative h-40 shrink-0 overflow-hidden bg-slate-100 sm:h-44">
                    <Image
                      src={project.imageUrl}
                      alt={`Webdesign Portfolio ${project.title} – ${project.category} in ${project.location}, Next.js Referenz 319Webdesign Darmstadt`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
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
                    <p className="mt-3 flex-1 text-base leading-relaxed text-slate-600">{teaser}</p>
                  </div>
                </Link>
              </ItemEl>
            )
          })}
        </ul>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Alle Projekte ansehen
            <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}

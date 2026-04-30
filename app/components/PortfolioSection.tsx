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

const HOME_PROJECTS = getPortfolioProjectsHomeSorted().filter((project) => project.slug !== 'da-sound')

export default function PortfolioSection() {
  const reduceMotion = useReduceMotion()
  const HeaderEl = reduceMotion ? 'div' : motion.div
  const headerProps = reduceMotion
    ? { className: 'mb-10 text-center md:mb-12' }
    : { ...fadeInUp, className: 'mb-10 text-center md:mb-12' }

  return (
    <section className="relative z-10 overflow-visible bg-blue-600 px-6 pb-8 pt-14 md:pb-12 md:pt-20" aria-labelledby="portfolio-home-heading">
      <div className="mx-auto max-w-7xl">
        <HeaderEl {...headerProps}>
          <h2
            id="portfolio-home-heading"
            className="text-balance text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl"
          >
            Aktuelle Kunden Websites
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-blue-100 md:text-xl">
            Ausgewählte Webdesign-Projekte – Klicken Sie auf eine Karte für Details und Live-Einblicke.
          </p>
        </HeaderEl>

        <ul className="m-0 mx-auto grid max-w-[1300px] list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {HOME_PROJECTS.map((project, index) => {
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-amber-300/70 bg-amber-400 px-8 py-3.5 font-semibold text-slate-950 shadow-lg shadow-amber-900/25 transition-all duration-300 hover:scale-[1.02] hover:border-amber-200 hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            Alle Projekte ansehen
            <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
          </Link>
        </div>
      </div>
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-24 w-[165%] -translate-x-1/2 rounded-b-[100%] bg-blue-600 md:-bottom-32 md:h-32"
        aria-hidden
      />
    </section>
  )
}

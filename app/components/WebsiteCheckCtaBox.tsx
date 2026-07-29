'use client'

import { SearchCheck } from 'lucide-react'
import { WEBSITE_CHECK_CONFIG } from '@/lib/websiteCheckConfig'

type Props = {
  onOpen: () => void
}

const { copy } = WEBSITE_CHECK_CONFIG

export default function WebsiteCheckCtaBox({ onOpen }: Props) {
  return (
    <section
      className="relative bg-white px-6 py-12 md:py-16"
      aria-labelledby="website-check-inline-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 px-6 py-8 shadow-sm sm:px-8 sm:py-9 md:px-10 md:py-10">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl"
            aria-hidden
          />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="min-w-0 max-w-2xl">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-500/15">
                <SearchCheck className="h-5 w-5" aria-hidden />
              </div>
              <h2
                id="website-check-inline-heading"
                className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
              >
                {copy.inlineTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                {copy.inlineText}
              </p>
            </div>
            <div className="shrink-0">
              <button
                type="button"
                onClick={onOpen}
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:w-auto"
              >
                {copy.inlineCta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { baseUrl } from '../../config/seo'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  /** Für dunkle/blaue Hero-Flächen: helle Schrift und Links */
  inverted?: boolean
  /** Kleinere Schrift, reduzierte Kontraste (z. B. über Hero-Headlines) */
  compact?: boolean
}

export default function Breadcrumbs({ items, inverted, compact }: BreadcrumbsProps) {
  // JSON-LD Structured Data für Google
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  }

  return (
    <>
      {/* JSON-LD Schema für Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visuelle Breadcrumb-Navigation */}
      <nav aria-label="Breadcrumb" className={compact ? 'mb-0' : 'mb-8'}>
        <ol
          className={
            compact
              ? `flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] leading-snug tracking-wide sm:text-xs ${inverted ? 'text-blue-300/55' : 'text-slate-400/85'}`
              : `flex items-center gap-2 text-sm ${inverted ? 'text-blue-200/90' : 'text-slate-400'}`
          }
        >
          {items.map((item, index) => (
            <li key={item.url} className={`flex items-center ${compact ? 'gap-1.5' : 'gap-2'}`}>
              {index > 0 && (
                <svg
                  className={
                    compact
                      ? `h-3 w-3 shrink-0 ${inverted ? 'text-blue-400/35' : 'text-slate-500/55'}`
                      : `h-4 w-4 ${inverted ? 'text-blue-300/80' : 'text-slate-600'}`
                  }
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={compact ? 1.75 : 2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
              {index === items.length - 1 ? (
                <span
                  className={
                    compact
                      ? `font-normal ${inverted ? 'text-white/65' : 'text-slate-400'}`
                      : `font-medium ${inverted ? 'text-white' : 'text-slate-300'}`
                  }
                >
                  {item.name}
                </span>
              ) : (
                <a
                  href={item.url}
                  className={
                    compact
                      ? `transition-colors ${inverted ? 'text-blue-200/55 hover:text-blue-50/85' : 'hover:text-blue-400'}`
                      : `transition-colors ${inverted ? 'text-blue-100 hover:text-white' : 'hover:text-blue-400'}`
                  }
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

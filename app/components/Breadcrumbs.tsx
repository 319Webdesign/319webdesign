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
}

export default function Breadcrumbs({ items, inverted }: BreadcrumbsProps) {
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
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol
          className={`flex items-center gap-2 text-sm ${inverted ? 'text-blue-200/90' : 'text-slate-400'}`}
        >
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center gap-2">
              {index > 0 && (
                <svg
                  className={`w-4 h-4 ${inverted ? 'text-blue-300/80' : 'text-slate-600'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
              {index === items.length - 1 ? (
                <span className={`font-medium ${inverted ? 'text-white' : 'text-slate-300'}`}>
                  {item.name}
                </span>
              ) : (
                <a
                  href={item.url}
                  className={`transition-colors ${inverted ? 'text-blue-100 hover:text-white' : 'hover:text-blue-400'}`}
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

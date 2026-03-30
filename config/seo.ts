/** Kanonische Basis-URL – Self-Referencing Canonical: exakt die Domain, die indexiert werden soll. */
export const baseUrl = 'https://www.319webdesign.com'

/** SEO: Google zeigt Titel mit ~50–60 Zeichen (~600px). Gesamttitel max. 60 Zeichen. */
export const SEO_MAX_TITLE_LENGTH = 60
/** Suffix, den das Root-Layout an %s anhängt (muss mit app/layout.tsx template übereinstimmen). */
export const SEO_TITLE_SUFFIX = ' | 319Webdesign'
/** Maximale Länge für den Seitentitel-Teil (%s), damit Gesamttitel ≤ SEO_MAX_TITLE_LENGTH. */
export const SEO_MAX_PAGE_TITLE_LENGTH = SEO_MAX_TITLE_LENGTH - SEO_TITLE_SUFFIX.length

/** Title-Template für alle Seiten: %s | 319Webdesign (kurz für SERP unter ~600px) */
export const titleTemplate = '%s | 319Webdesign'

/** Zentrale Keywords für Meta-Tag (ergänzt seiten-spezifische Begriffe). */
export const seoKeywordsBase = [
  'Webdesign Darmstadt',
  'Pfungstadt',
  'Südhessen',
  'onOffice Anbindung Website',
  'Next.js Webdesigner Südhessen',
  'KMU Digitalisierung',
  'Theme Entwicklung für Bestandssysteme',
  'Lokales SEO',
  'Immobilienmakler Webdesign',
] as const

export interface PageSeoConfig {
  title: string
  description: string
  path: string
  /** Zusätzliche Keywords nur für diese Seite (werden mit Basis-Keywords kombiniert). */
  keywordsExtra?: string[]
  openGraph?: {
    title?: string
    description?: string
    image?: string
    imageAlt?: string
  }
}

export const seoConfig: Record<string, PageSeoConfig> = {
  home: {
    title: 'Webdesign & System-Integration in Südhessen',
    description:
      'Behalten Sie Ihr System, ich upgrade das Design. Webdesign Darmstadt & Pfungstadt: Next.js, onOffice-Anbindung, lokales SEO für KMU & Makler in Südhessen.',
    path: '/',
    keywordsExtra: ['High-Performance Webdesign', 'System-Integration'],
    openGraph: {
      image: '/319Web_Mockup_iphone.png',
      imageAlt:
        '319Webdesign – Next.js Webdesign und System-Integration für Darmstadt, Pfungstadt und Südhessen',
    },
  },
  launch: {
    title: 'Next.js Webdesign & Launch in Darmstadt',
    description:
      'Behalten Sie Ihr System, ich upgrade das Design. Next.js Launch Darmstadt & Pfungstadt: Performance, Conversion – Systeme bleiben, Design wird neu vor Ort.',
    path: '/leistungen/webdesign-launch',
    keywordsExtra: ['Webdesign Launch', 'Next.js'],
  },
  seo: {
    title: 'Lokales SEO für KMU & Makler in Südhessen',
    description:
      'Behalten Sie Ihr System, ich upgrade das Design. Lokales SEO für Darmstadt & Pfungstadt: Sichtbarkeit, strukturierte Daten, mehr Anfragen für KMU & Makler.',
    path: '/leistungen/wachstum-seo',
    keywordsExtra: ['Google Sichtbarkeit', 'regionale SEO'],
  },
  wartung: {
    title: 'Strategische Website-Betreuung für KMU',
    description:
      'Behalten Sie Ihr System, ich upgrade das Design. Wartung & Betreuung in Pfungstadt: Updates, Backups, Monitoring – Ihre Website bleibt schnell und sicher.',
    path: '/leistungen/strategische-begleitung',
    keywordsExtra: ['Website-Wartung', 'Support'],
  },
  leistungen: {
    title: 'Leistungen: Webdesign, SEO & System-Integration',
    description:
      'Behalten Sie Ihr System, ich upgrade das Design. Next.js Webdesign, onOffice & Buchung: lokales SEO für KMU & Makler in Darmstadt, Pfungstadt, Südhessen.',
    path: '/leistungen',
    keywordsExtra: ['Leistungen Webdesign'],
  },
  portfolio: {
    title: 'Portfolio: Webdesign Darmstadt & Pfungstadt',
    description:
      'Behalten Sie Ihr System, ich upgrade das Design. Portfolio Webdesign Darmstadt & Pfungstadt: Next.js, PageSpeed, lokales SEO für KMU & Makler in Südhessen.',
    path: '/portfolio',
    keywordsExtra: ['Webdesign Referenzen', 'Portfolio'],
    openGraph: {
      image: '/319Web_Mockup_iphone.png',
      imageAlt:
        'Webdesign Portfolio – Projekte für KMU und Immobilienmakler in Darmstadt und Pfungstadt',
    },
  },
  kontakt: {
    title: 'Erstberatung Webdesign Darmstadt & Pfungstadt',
    description:
      'Behalten Sie Ihr System, ich upgrade das Design. Erstberatung Webdesign Darmstadt & Pfungstadt – persönlich, transparent, Antwort meist in 24 Stunden.',
    path: '/kontakt',
    keywordsExtra: ['Kontakt Webdesign', 'Erstberatung'],
  },
  impressum: {
    title: 'Impressum – Rechtliche Angaben | 319Webdesign',
    description:
      'Impressum 319Webdesign, Maik Schmidt, Nahestrasse 22, 64319 Pfungstadt – Angaben gemäß § 5 TMG, Kontakt – Webdesign Darmstadt, Pfungstadt, Südhessen (DE).',
    path: '/impressum',
    keywordsExtra: ['Impressum'],
  },
  datenschutz: {
    title: 'Datenschutz – DSGVO-konform | 319Webdesign',
    description:
      'Datenschutz 319Webdesign (Pfungstadt): DSGVO, Cookies, Kontaktformular, Server-Logs – Informationen zur Datenverarbeitung und Ihre Betroffenenrechte hier.',
    path: '/datenschutz',
    keywordsExtra: ['Datenschutz'],
  },
  immobilienmakler: {
    title: 'Webdesign Makler & onOffice-Anbindung Südhessen',
    description:
      'Behalten Sie Ihr System, ich upgrade das Design. Immobilien-Webdesign Südhessen: onOffice-Anbindung, Objekt-Sync, Next.js Performance für mehr Eigentümer-Anfragen.',
    path: '/immobilienmakler-webdesign',
    keywordsExtra: ['onOffice Integration', 'Immobilienmakler Website'],
  },
  ueberMich: {
    title: 'Next.js Webdesigner Südhessen – Maik Schmidt',
    description:
      'Behalten Sie Ihr System, ich upgrade das Design. Maik Schmidt, Next.js Webdesigner Pfungstadt – Projekte für Darmstadt, Südhessen und KMU-Digitalisierung.',
    path: '/uber-mich',
    keywordsExtra: ['Über 319Webdesign', 'Webdesigner Pfungstadt'],
    openGraph: {
      image: '/maik.webp',
      imageAlt:
        'Maik Schmidt – Next.js Webdesigner und SEO-Spezialist für Darmstadt, Pfungstadt und Südhessen',
    },
  },
}

/** Dynamischer Canonical: baseUrl + aktueller Pfad (ohne Trailing Slash). Verhindert "Nicht indexierbar / Canonicalised". */
export function getCanonicalUrl(pathname: string): string {
  const normalized = pathname === '/' ? '' : pathname.replace(/\/$/, '').replace(/^\//, '')
  return normalized ? `${baseUrl}/${normalized}` : baseUrl
}

/** Kürzt Titel für SEO auf max. Zeichen (Standard: Platz für Layout-Suffix), ohne Wort abzuschneiden wo möglich. */
export function truncateTitleForSeo(title: string, maxLength: number = SEO_MAX_PAGE_TITLE_LENGTH): string {
  const t = title.trim()
  if (t.length <= maxLength) return t
  const cut = t.slice(0, maxLength)
  const lastSpace = cut.lastIndexOf(' ')
  if (lastSpace > maxLength * 0.6) return cut.slice(0, lastSpace).trim()
  return cut.trim()
}

/** Meta-Description auf typische SERP-Länge (~150–155 Zeichen) kürzen. */
export function truncateDescriptionForSeo(description: string, maxLength = 155): string {
  const t = description.trim()
  if (t.length <= maxLength) return t
  const cut = t.slice(0, maxLength - 1)
  const lastSpace = cut.lastIndexOf(' ')
  if (lastSpace > maxLength * 0.55) return `${cut.slice(0, lastSpace).trimEnd()}…`
  return `${cut.trimEnd()}…`
}

/** Erzeugt Next.js Metadata inkl. Canonical und OpenGraph. Titel ohne "| 319Webdesign" – Layout-Template fügt " | 319Webdesign" hinzu (SERP unter ~600px). */
export function getSeoMetadata(config: PageSeoConfig) {
  const canonicalUrl = getCanonicalUrl(config.path)
  const rawTitle = config.title.replace(/\s*\|\s*319Webdesign(\s*Pfungstadt)?\s*$/i, '').trim() || config.title
  const title = truncateTitleForSeo(rawTitle)
  const description = config.description
  const ogTitle = truncateTitleForSeo(config.openGraph?.title ?? title)
  const ogDescription = config.openGraph?.description ?? description
  const ogImage = config.openGraph?.image ?? '/319Web_Mockup_iphone.png'
  const ogImageAlt = config.openGraph?.imageAlt ?? `${title} | 319Webdesign`
  const keywordsList = [...seoKeywordsBase, ...(config.keywordsExtra ?? [])]

  return {
    title,
    description,
    keywords: keywordsList,
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${ogTitle} | 319Webdesign`,
      description: ogDescription,
      url: canonicalUrl,
      siteName: '319Webdesign',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
      locale: 'de_DE',
      type: 'website' as const,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: `${ogTitle} | 319Webdesign`,
      description: ogDescription,
      images: [ogImage],
    },
  }
}


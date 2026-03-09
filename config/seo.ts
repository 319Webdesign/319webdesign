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

export interface PageSeoConfig {
  title: string
  description: string
  path: string
  openGraph?: {
    title?: string
    description?: string
    image?: string
  }
}

export const seoConfig: Record<string, PageSeoConfig> = {
  home: {
    title: 'Webdesign Pfungstadt & Immobilien-Automation | 319Webdesign',
    description: 'Professionelles Webdesign für KMU in Pfungstadt. onOffice-Schnittstellen für Immobilienmakler. Jetzt Sichtbarkeit erhöhen!',
    path: '/',
    openGraph: {
      image: '/319Web_Mockup_iphone.png',
    },
  },
  launch: {
    title: 'Webdesign & Launch Darmstadt | 319Webdesign',
    description: 'Ihr digitales Fundament – Professionelles Webdesign & Launch in Darmstadt und Pfungstadt. Von der Idee zur fertigen, conversion-optimierten Website.',
    path: '/leistungen/webdesign-launch',
  },
  seo: {
    title: 'SEO Agentur Darmstadt | 319Webdesign',
    description: 'Mehr Sichtbarkeit – Professionelle SEO-Optimierung für Unternehmen in Darmstadt und Pfungstadt.',
    path: '/leistungen/wachstum-seo',
  },
  wartung: {
    title: 'Website Wartung & Support Darmstadt | 319Webdesign',
    description: '319Webdesign – Strategische Begleitung, Wartung und Support für Ihre Website in Darmstadt und Pfungstadt.',
    path: '/leistungen/strategische-begleitung',
  },
  leistungen: {
    title: 'Leistungen | Webdesign, SEO & Wartung Darmstadt',
    description: 'Professionelles Webdesign, SEO-Optimierung und Website-Wartung für Unternehmen in Darmstadt und Pfungstadt.',
    path: '/leistungen',
  },
  portfolio: {
    title: 'Webdesign Projekte Darmstadt | 319Webdesign',
    description: 'Referenzen von 319 – Ausgewählte Webdesign-Projekte für Unternehmen in Darmstadt und Pfungstadt.',
    path: '/portfolio',
    openGraph: {
      image: '/319Web_Mockup_iphone.png',
    },
  },
  kontakt: {
    title: 'Jetzt Projekt starten | 319Webdesign',
    description: 'Webdesigner in Pfungstadt – Kontaktieren Sie 319Webdesign für Ihr Webdesign-Projekt in Darmstadt und Pfungstadt.',
    path: '/kontakt',
  },
  impressum: {
    title: 'Impressum – Rechtliche Angaben | 319Webdesign',
    description: 'Impressum und rechtliche Angaben von 319Webdesign. Kontaktinformationen und gesetzliche Hinweise gemäß TMG.',
    path: '/impressum',
  },
  datenschutz: {
    title: 'Datenschutz – DSGVO-konform | 319Webdesign',
    description: 'Datenschutzerklärung von 319Webdesign. Informationen zur Datenverarbeitung gemäß DSGVO und Ihren Rechten als Nutzer.',
    path: '/datenschutz',
  },
  immobilienmakler: {
    title: 'Webdesign für Immobilienmakler | onOffice & Schnittstellen',
    description: 'Exklusives Webdesign für Immobilienmakler. onOffice, FlowFact & OpenImmo. Mehr Anfragen durch maximale Performance.',
    path: '/immobilienmakler-webdesign',
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

/** Erzeugt Next.js Metadata inkl. Canonical und OpenGraph. Titel ohne "| 319Webdesign" – Layout-Template fügt " | 319Webdesign" hinzu (SERP unter ~600px). */
export function getSeoMetadata(config: PageSeoConfig) {
  const canonicalUrl = getCanonicalUrl(config.path)
  const rawTitle = config.title.replace(/\s*\|\s*319Webdesign(\s*Pfungstadt)?\s*$/i, '').trim() || config.title
  const title = truncateTitleForSeo(rawTitle)
  const description = config.description
  const ogTitle = truncateTitleForSeo(config.openGraph?.title ?? title)
  const ogDescription = config.openGraph?.description ?? description
  const ogImage = config.openGraph?.image ?? '/319Web_Mockup_iphone.png'

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonicalUrl,
      siteName: '319Webdesign',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'de_DE',
      type: 'website' as const,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
  }
}


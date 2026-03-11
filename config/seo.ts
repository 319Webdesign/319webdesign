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
    title: 'Webdesign & SEO in Darmstadt und Pfungstadt – So werden Sie online sichtbar',
    description: 'Sie suchen professionelles Webdesign für Ihr Unternehmen in der Region Darmstadt? 319Webdesign entwickelt schnelle, suchmaschinenoptimierte Websites für KMU und Immobilienmakler – mit PageSpeed 99/100 und lokaler Expertise in Pfungstadt.',
    path: '/',
    openGraph: {
      image: '/319Web_Mockup_iphone.png',
    },
  },
  launch: {
    title: 'Webdesign & Launch in Darmstadt und Pfungstadt',
    description: 'Wie wird aus Ihrer Idee eine fertige Website? 319Webdesign begleitet Sie vom Konzept bis zum Launch – mit Fokus auf Performance und Conversion in der Region Darmstadt.',
    path: '/leistungen/webdesign-launch',
  },
  seo: {
    title: 'SEO für Unternehmen in Darmstadt und Pfungstadt',
    description: 'Warum sind Sie bei Google nicht sichtbar? Wir optimieren Ihre Website für Suchanfragen in der Region – mit lokaler SEO und technischer Basis für nachhaltiges Wachstum.',
    path: '/leistungen/wachstum-seo',
  },
  wartung: {
    title: 'Website-Wartung und Support in Darmstadt',
    description: 'Ihre Website soll sicher und schnell bleiben? 319Webdesign übernimmt Updates, Backups und technische Begleitung – damit Sie sich auf Ihr Geschäft konzentrieren können.',
    path: '/leistungen/strategische-begleitung',
  },
  leistungen: {
    title: 'Leistungen: Webdesign, SEO und Wartung in Darmstadt',
    description: 'Was bietet 319Webdesign? Webdesign & Launch, SEO-Optimierung und strategische Website-Betreuung für KMU und Immobilienmakler in Darmstadt, Pfungstadt und Umgebung.',
    path: '/leistungen',
  },
  portfolio: {
    title: 'Webdesign-Referenzen aus Darmstadt und Pfungstadt',
    description: 'An welchen Projekten arbeitet 319Webdesign? Hier finden Sie ausgewählte Websites für KMU und Makler aus der Region – von der Visitenkarte bis zur Immobilien-Plattform.',
    path: '/portfolio',
    openGraph: {
      image: '/319Web_Mockup_iphone.png',
    },
  },
  kontakt: {
    title: 'Kostenlose Erstberatung für Ihr Webdesign-Projekt',
    description: 'Sie möchten mit 319Webdesign starten? Schreiben Sie uns – wir besprechen Ihre Ziele und Möglichkeiten für Webdesign und SEO in Darmstadt und Pfungstadt.',
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


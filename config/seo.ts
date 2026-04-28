/** Kanonische Basis-URL – Self-Referencing Canonical: exakt die Domain, die indexiert werden soll. */
export const baseUrl = 'https://www.319webdesign.de'

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
  'Webdesigner Darmstadt',
  'Webdesign Pfungstadt',
  'Webdesigner Pfungstadt',
  'Darmstadt',
  'Pfungstadt',
  'Südhessen',
  'Next.js Webdesigner Südhessen',
  'Suchmaschinenoptimierung Darmstadt',
  'SEO Experte Darmstadt',
  'Theme Entwicklung für Bestandssysteme',
  'KMU Digitalisierung',
] as const

export interface PageSeoConfig {
  title: string
  /** Wenn true: finaler Dokumenttitel ohne Root-Template-Suffix „ | 319Webdesign“ (z. B. fertiger SERP-Titel). */
  titleAbsolute?: boolean
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
    title: 'Webdesign Darmstadt & Pfungstadt',
    description:
      'Webdesign und SEO in Darmstadt & Pfungstadt: Next.js-Websites mit lokaler Suchmaschinenoptimierung, schnell und klar. Aus Pfungstadt – persoenlich vor Ort. Jetzt Erstgespraech.',
    path: '/',
    keywordsExtra: ['High-Performance Webdesign', 'Webdesigner Darmstadt'],
    openGraph: {
      image: '/319Web_Mockup_iphone.png',
      imageAlt:
        '319Webdesign – Webdesign und Suchmaschinenoptimierung in Darmstadt, Pfungstadt und Suedhessen (Next.js)',
    },
  },
  launch: {
    title: 'Next.js Webdesign & Launch in Darmstadt',
    description:
      'Neue Website für Ihren Handwerksbetrieb: Next.js Launch Darmstadt & Pfungstadt – Performance, klare Angebote, mehr Anfragen. Systeme können bestehen bleiben – Design wird neu.',
    path: '/leistungen/webdesign-launch',
    keywordsExtra: ['Webdesign Launch', 'Next.js', 'Webdesign Darmstadt'],
  },
  websiteRelaunch: {
    title: 'Website Relaunch Darmstadt – Alte Website modernisieren | 319Webdesign',
    description:
      'Website veraltet? Relaunch in Darmstadt & Umgebung: Next.js, SEO-sicherer Umzug, modernes Erscheinungsbild. Kostenloser Website-Check.',
    path: '/website-relaunch',
    keywordsExtra: ['Website Relaunch', 'Neugestaltung', 'Webdesigner Darmstadt'],
  },
  seo: {
    title: 'Suchmaschinenoptimierung Darmstadt & Pfungstadt',
    description:
      'Bei Google gefunden werden: SEO für Handwerksbetriebe in Darmstadt und Pfungstadt – sauberer Code, schnelle Ladezeiten, regionale Sichtbarkeit. Jetzt mehr erfahren!',
    path: '/leistungen/wachstum-seo',
    keywordsExtra: ['Google Sichtbarkeit', 'SEO Experte Darmstadt'],
  },
  wartung: {
    title: 'Website Betreuung Darmstadt',
    description:
      'Wartung fuer Websites: Updates, Backups, Monitoring in Pfungstadt & Region – Ihre Seite bleibt schnell, sicher und aktuell.',
    path: '/leistungen/strategische-begleitung',
    keywordsExtra: ['Website-Wartung', 'Support', 'Webdesign Darmstadt'],
  },
  leistungen: {
    title: 'Leistungen: Webdesign & SEO Darmstadt',
    description:
      'Next.js Webdesign, lokales SEO und Anbindung bestehender Systeme – für Handwerksbetriebe in Darmstadt, Pfungstadt und Südhessen. Übersicht aller Leistungen.',
    path: '/leistungen',
    keywordsExtra: ['Leistungen Webdesign', 'Webdesigner Darmstadt'],
  },
  portfolio: {
    title: 'Portfolio Webdesign Darmstadt',
    description:
      'Referenzen aus der Region: Next.js Webdesign für Handwerk und lokale Betriebe in Darmstadt & Pfungstadt – Performance, die man sieht. Jetzt Projekte ansehen.',
    path: '/portfolio',
    keywordsExtra: ['Webdesign Referenzen', 'Webdesigner Portfolio'],
    openGraph: {
      image: '/319Web_Mockup_iphone.png',
      imageAlt:
        'Webdesign Portfolio – Projekte in Darmstadt und Pfungstadt',
    },
  },
  kontakt: {
    title: 'Erstberatung Webdesign Darmstadt',
    description:
      'Kostenlose Erstberatung fuer Unternehmen in Pfungstadt, Darmstadt & Suedhessen: Termin vereinbaren, Projekt besprechen, online mehr Anfragen gewinnen.',
    path: '/kontakt',
    keywordsExtra: ['Kontakt Webdesign', 'SEO Beratung Darmstadt'],
  },
  impressum: {
    title: 'Impressum – Rechtliche Angaben | 319Webdesign',
    description:
      'Impressum 319Webdesign (Maik Schmidt), Nahestrasse 22, 64319 Pfungstadt – Webdesign und SEO in Darmstadt, Pfungstadt & Suedhessen, Angaben gemaess § 5 TMG.',
    path: '/impressum',
    keywordsExtra: ['Impressum'],
  },
  datenschutz: {
    title: 'Datenschutz – DSGVO-konform | 319Webdesign',
    description:
      'Datenschutz 319Webdesign Pfungstadt: DSGVO, Cookies, Kontaktformular – Informationen zur Datenverarbeitung für Besucher und Handwerkskunden.',
    path: '/datenschutz',
    keywordsExtra: ['Datenschutz'],
  },
  immobilienmakler: {
    title: 'Webdesign Makler & onOffice-Anbindung Südhessen',
    description:
      'Immobilien-Webdesign Südhessen: onOffice-Anbindung, Objekt-Sync, Next.js Performance für mehr Eigentümer-Anfragen – ergänzend zum Schwerpunkt Handwerk.',
    path: '/immobilienmakler-webdesign',
    keywordsExtra: ['onOffice Integration', 'Immobilienmakler Website'],
  },
  webdesignHandwerker: {
    title: 'Webdesign Darmstadt & Suedhessen',
    description:
      'Webdesign fuer Unternehmen in Suedhessen: klare Website, lokales SEO, weniger Telefon-Stress – persoenlich aus Pfungstadt. Jetzt Beratung anfragen.',
    path: '/webdesign-handwerker',
    keywordsExtra: ['Webdesign Darmstadt', 'Webdesigner Suedhessen'],
  },
  ueberMich: {
    title: 'Maik Schmidt | Webdesigner Darmstadt & Pfungstadt',
    titleAbsolute: true,
    description:
      'Über 319webdesign: Webdesign & SEO mit Fokus auf Handwerksbetriebe in Darmstadt und Pfungstadt – persönlich, ehrlich, aus Pfungstadt.',
    path: '/uber-mich',
    keywordsExtra: ['Ueber 319Webdesign', 'Webdesigner Darmstadt'],
    openGraph: {
      image: '/maik.webp',
      imageAlt:
        'Maik Schmidt – Webdesigner fuer Darmstadt, Pfungstadt und Suedhessen',
    },
  },
  seoDarmstadt: {
    title: 'Suchmaschinenoptimierung Darmstadt fuer KMU',
    description:
      'Suchmaschinenoptimierung Darmstadt fuer Kleinunternehmen: lokale SEO-Strategie, Technik und Content fuer bessere Rankings und mehr qualifizierte Anfragen.',
    path: '/seo-darmstadt',
    keywordsExtra: [
      'Suchmaschinenoptimierung Darmstadt',
      'SEO Agentur Darmstadt',
      'Local SEO Südhessen',
      'Webdesign und SEO Darmstadt',
      'Google Ranking verbessern Pfungstadt',
      'Kleinunternehmen Sichtbarkeit Google',
    ],
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

/** Erzeugt Next.js Metadata inkl. Canonical und OpenGraph. Standard: Titel ohne "| 319Webdesign" – Layout-Template fügt Suffix hinzu. Mit titleAbsolute: fertiger Titel für Dokument & Social. */
export function getSeoMetadata(config: PageSeoConfig) {
  const canonicalUrl = getCanonicalUrl(config.path)
  const rawTitle = config.title.replace(/\s*\|\s*319Webdesign(\s*Pfungstadt)?\s*$/i, '').trim() || config.title
  const truncatedPageTitle = truncateTitleForSeo(rawTitle)

  let title: string | { absolute: string }
  let socialTitle: string

  if (config.titleAbsolute) {
    const absoluteT = truncateTitleForSeo(rawTitle, SEO_MAX_TITLE_LENGTH)
    title = { absolute: absoluteT }
    const ogOverride = config.openGraph?.title?.replace(/\s*\|\s*319Webdesign(\s*Pfungstadt)?\s*$/i, '').trim()
    socialTitle = ogOverride
      ? truncateTitleForSeo(ogOverride, SEO_MAX_TITLE_LENGTH)
      : absoluteT
  } else {
    title = truncatedPageTitle
    socialTitle = truncateTitleForSeo(config.openGraph?.title ?? truncatedPageTitle)
  }

  const description = config.description
  const ogDescription = config.openGraph?.description ?? description
  const ogImage = config.openGraph?.image ?? '/319Web_Mockup_iphone.png'
  const ogImageAlt =
    config.openGraph?.imageAlt ??
    (config.titleAbsolute ? socialTitle : `${truncatedPageTitle} | 319Webdesign`)
  const keywordsList = [...seoKeywordsBase, ...(config.keywordsExtra ?? [])]

  const ogTitleFinal = config.titleAbsolute ? socialTitle : `${socialTitle} | 319Webdesign`

  return {
    title,
    description,
    keywords: keywordsList,
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: ogTitleFinal,
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
      title: ogTitleFinal,
      description: ogDescription,
      images: [ogImage],
    },
  }
}


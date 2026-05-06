/** Kanonische Basis-URL – Self-Referencing Canonical: exakt die Domain, die indexiert werden soll. */
export const baseUrl = 'https://www.319webdesign.de'

/** SEO: Google zeigt Titel mit ~50–60 Zeichen (~600px). Gesamttitel max. 60 Zeichen. */
export const SEO_MAX_TITLE_LENGTH = 60
/** Längere Deckungsgrenze für fertige Dokumenttitel (`titleAbsolute`), z. B. zwei Aussagen mit „|“. */
export const SEO_MAX_ABSOLUTE_TITLE_LENGTH = 70
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
    title: 'Webdesign Darmstadt & Pfungstadt | Mehr Kunden durch deine Website',
    titleAbsolute: true,
    description:
      'Moderne Websites, die verkaufen statt nur gut aussehen: 319Webdesign erstellt schnelle, SEO-optimierte Webseiten für Unternehmen in Darmstadt & Pfungstadt. Jetzt kostenlos anfragen.',
    path: '/',
    keywordsExtra: ['High-Performance Webdesign', 'Webdesigner Darmstadt'],
    openGraph: {
      image: '/319Web_Mockup_iphone.png',
      imageAlt:
        '319Webdesign – Webdesign und Suchmaschinenoptimierung in Darmstadt, Pfungstadt und Suedhessen (Next.js)',
    },
  },
  launch: {
    title: 'Webdesign Darmstadt | Neue Website die Kunden bringt',
    titleAbsolute: true,
    description:
      'Neue Website statt Baukasten: Wir erstellen moderne, schnelle Webseiten für Unternehmen in Darmstadt & Pfungstadt – klar strukturiert, SEO-optimiert und auf Anfragen ausgelegt.',
    path: '/leistungen/webdesign-launch',
    keywordsExtra: ['Webdesign Launch', 'Next.js', 'Webdesign Darmstadt'],
  },
  websiteRelaunch: {
    title: 'Website Relaunch Darmstadt | Mehr Anfragen statt alte Seite',
    titleAbsolute: true,
    description:
      'Deine Website ist veraltet? Wir relaunchen sie modern, schnell und SEO-sicher – für Unternehmen in Darmstadt & Umgebung. Jetzt kostenlosen Website-Check sichern.',
    path: '/website-relaunch',
    keywordsExtra: ['Website Relaunch', 'Neugestaltung', 'Webdesigner Darmstadt'],
  },
  seo: {
    title: 'SEO Darmstadt | Mehr Sichtbarkeit & Kundenanfragen',
    titleAbsolute: true,
    description:
      'Bei Google gefunden werden: Lokale SEO für Unternehmen in Darmstadt & Pfungstadt – bessere Rankings, mehr Sichtbarkeit und planbar neue Anfragen.',
    path: '/leistungen/wachstum-seo',
    keywordsExtra: ['Google Sichtbarkeit', 'SEO Experte Darmstadt'],
  },
  wartung: {
    title: 'Website Betreuung Darmstadt | Wartung & Sicherheit',
    titleAbsolute: true,
    description:
      'Laufende Betreuung für deine Website: Updates, Backups und Monitoring für Unternehmen in Darmstadt & Pfungstadt – sicher, schnell und immer aktuell.',
    path: '/leistungen/strategische-begleitung',
    keywordsExtra: ['Website-Wartung', 'Support', 'Webdesign Darmstadt'],
  },
  unserAngebot: {
    title: 'Unser Angebot – Webdesign, SEO & Betreuung',
    description:
      'Übersicht über Webdesign & Launch, Suchmaschinenoptimierung und laufende Website-Wartung für KMU in Darmstadt, Pfungstadt und Südhessen – Next.js, persönlich aus einer Hand.',
    path: '/unser-angebot',
    keywordsExtra: ['Webdesign Angebot', 'SEO Paket', 'Website Betreuung Darmstadt'],
  },
  leistungen: {
    title: 'Webdesign & SEO Darmstadt | Alle Leistungen im Überblick',
    titleAbsolute: true,
    description:
      'Webdesign, SEO und Website-Betreuung für Unternehmen in Darmstadt & Pfungstadt – moderne Websites, die sichtbar sind und neue Kunden bringen.',
    path: '/leistungen',
    keywordsExtra: ['Leistungen Webdesign', 'Webdesigner Darmstadt'],
  },
  portfolio: {
    title: 'Webdesign Referenzen Darmstadt | Erfolgreiche Projekte',
    titleAbsolute: true,
    description:
      'Echte Ergebnisse statt leere Versprechen: Entdecke Webdesign-Projekte für Unternehmen aus Darmstadt & Pfungstadt – modern, schnell und auf Anfragen optimiert.',
    path: '/portfolio',
    keywordsExtra: ['Webdesign Referenzen', 'Webdesigner Portfolio'],
    openGraph: {
      image: '/319Web_Mockup_iphone.png',
      imageAlt:
        'Webdesign Portfolio – Projekte in Darmstadt und Pfungstadt',
    },
  },
  kontakt: {
    title: 'Webdesign Beratung Darmstadt | Kostenloses Erstgespräch',
    titleAbsolute: true,
    description:
      'Starte dein Projekt: Kostenlose Erstberatung für Unternehmen in Darmstadt & Pfungstadt – Website analysieren, Potenziale erkennen und mehr Anfragen gewinnen.',
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
    title: 'Webdesign für Handwerker Darmstadt | Mehr Anfragen',
    titleAbsolute: true,
    description:
      'Websites für Handwerker, die Kunden bringen: Klare Struktur, lokale SEO und weniger Telefon-Stress – für Betriebe in Darmstadt & Pfungstadt.',
    path: '/webdesign-handwerker',
    keywordsExtra: ['Webdesign Darmstadt', 'Webdesigner Suedhessen'],
  },
  ueberMich: {
    title: 'Webdesigner Darmstadt | Maik Schmidt – 319webdesign',
    titleAbsolute: true,
    description:
      'Persönliches Webdesign für Handwerksbetriebe in Darmstadt & Pfungstadt – direkt, ehrlich und mit Fokus auf Websites, die Kunden bringen.',
    path: '/uber-mich',
    keywordsExtra: ['Ueber 319Webdesign', 'Webdesigner Darmstadt'],
    openGraph: {
      image: '/maik.webp',
      imageAlt:
        'Maik Schmidt – Webdesigner fuer Darmstadt, Pfungstadt und Suedhessen',
    },
  },
  seoDarmstadt: {
    title: 'Suchmaschinenoptimierung Darmstadt | Mehr Kunden',
    titleAbsolute: true,
    description:
      'Lokale SEO für Unternehmen in Darmstadt: bessere Rankings, mehr Sichtbarkeit und planbar neue Kundenanfragen durch klare Strategie und Technik.',
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
    const absoluteT = truncateTitleForSeo(rawTitle, SEO_MAX_ABSOLUTE_TITLE_LENGTH)
    title = { absolute: absoluteT }
    const ogOverride = config.openGraph?.title?.replace(/\s*\|\s*319Webdesign(\s*Pfungstadt)?\s*$/i, '').trim()
    socialTitle = ogOverride
      ? truncateTitleForSeo(ogOverride, SEO_MAX_ABSOLUTE_TITLE_LENGTH)
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


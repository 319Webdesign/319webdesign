/** Kanonische Basis-URL – konsistent für Canonical, OpenGraph und Sitemap. Kein www. */
export const baseUrl = 'https://319webdesign.com'

/** Title-Template für alle Seiten: %s | 319Webdesign Pfungstadt */
export const titleTemplate = '%s | 319Webdesign Pfungstadt'

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

/** Erzeugt die kanonische URL: baseUrl + current-path (ohne Trailing Slash). */
export function getCanonicalUrl(path: string): string {
  const normalized = path === '/' ? '' : path.replace(/\/$/, '')
  return `${baseUrl}${normalized}`
}

/** Erzeugt Next.js Metadata inkl. Canonical und OpenGraph. Titel ohne "| 319Webdesign" – Layout-Template fügt "| 319Webdesign Pfungstadt" hinzu. */
export function getSeoMetadata(config: PageSeoConfig) {
  const canonicalUrl = getCanonicalUrl(config.path)
  const title = config.title.replace(/\s*\|\s*319Webdesign\s*$/i, '').trim() || config.title.replace(/\s*\|\s*319Webdesign\s*$/i, '').trim()
  const description = config.description
  const ogTitle = config.openGraph?.title ?? title
  const ogDescription = config.openGraph?.description ?? description
  const ogImage = config.openGraph?.image ?? '/319Web_Mockup_iphone.png'

  return {
    title,
    description,
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


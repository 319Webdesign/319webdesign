const baseUrl = 'https://319webdesign.com'

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
    title: 'Webdesign Darmstadt & Pfungstadt | 319Webdesign',
    description: '319Webdesign – Professionelles Webdesign mit SEO-Optimierung für Unternehmen in Darmstadt, Pfungstadt und Südhessen. Moderne Websites die verkaufen.',
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
    description: 'Mehr Sichtbarkeit in Hessen – Professionelle SEO-Optimierung für Unternehmen in Darmstadt, Pfungstadt und Südhessen.',
    path: '/leistungen/wachstum-seo',
  },
  wartung: {
    title: 'Website Wartung & Support Darmstadt | 319Webdesign',
    description: '319Webdesign – Strategische Begleitung, Wartung und Support für Ihre Website in Darmstadt und Südhessen.',
    path: '/leistungen/strategische-begleitung',
  },
  leistungen: {
    title: 'Leistungen | Webdesign, SEO & Wartung Darmstadt',
    description: 'Professionelles Webdesign, SEO-Optimierung und Website-Wartung für Unternehmen in Darmstadt, Pfungstadt und Südhessen.',
    path: '/leistungen',
  },
  portfolio: {
    title: 'Webdesign Projekte Darmstadt | 319Webdesign',
    description: 'Referenzen von 319 – Ausgewählte Webdesign-Projekte für Unternehmen in Darmstadt, Pfungstadt und Südhessen.',
    path: '/portfolio',
    openGraph: {
      image: '/319Web_Mockup_iphone.png',
    },
  },
  kontakt: {
    title: 'Jetzt Projekt starten | 319Webdesign',
    description: 'Webdesigner in Pfungstadt – Kontaktieren Sie 319Webdesign für Ihr Webdesign-Projekt in Darmstadt und Südhessen.',
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
}

export function getCanonicalUrl(path: string): string {
  return `${baseUrl}${path === '/' ? '' : path}`
}

/** Erzeugt Next.js Metadata inkl. Canonical und OpenGraph */
export function getSeoMetadata(config: PageSeoConfig) {
  const canonicalUrl = getCanonicalUrl(config.path)
  const title = config.title
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

export { baseUrl }

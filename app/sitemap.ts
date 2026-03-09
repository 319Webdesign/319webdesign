import { MetadataRoute } from 'next'
import { getAllProjectSlugs } from '../config/projects'
import { baseUrl } from '../config/seo'

// Statische Generierung zur Build-Zeit → keine Laufzeitfehler bei Google-Crawl, behebt "Vorübergehender Verarbeitungsfehler"
export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  // lastmod mit festem Datum für Re-Crawl-Anreiz (Index-Optimierung)
  const lastmod = '2026-03-08T12:00:00.000Z'

  // Leistungen – feste Unterseiten (app/leistungen/*/page.tsx)
  const leistungen = ['webdesign-launch', 'wachstum-seo', 'strategische-begleitung']

  // Portfolio-Projekte (app/portfolio/[slug]/page.tsx)
  const portfolioSlugs = getAllProjectSlugs()

  // Warum-Unterseiten (app/warum/[slug]/page.tsx)
  const warumSlugs = ['umsatzstark', 'blitzschnell', 'lokal']

  // Städte (aktive Cities aus app/webdesign/[city]/page.tsx)
  const cities = ['darmstadt', 'pfungstadt', 'griesheim', 'weiterstadt']

  return [
    // Homepage - Höchste Priorität
    {
      url: baseUrl,
      lastModified: lastmod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Kontakt - Sehr wichtig für Conversions
    {
      url: `${baseUrl}/kontakt`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.95,
    },

    // Immobilienmakler - Hauptseite für Makler
    {
      url: `${baseUrl}/immobilienmakler-webdesign`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Leistungen Übersicht - Hauptseite
    {
      url: `${baseUrl}/leistungen`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Leistungen Unterseiten - Wichtig für SEO
    ...leistungen.map((slug) => ({
      url: `${baseUrl}/leistungen/${slug}`,
      lastModified: lastmod,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),

    // Warum-Unterseiten (Umsatzstark, Blitzschnell, Lokal)
    ...warumSlugs.map((slug) => ({
      url: `${baseUrl}/warum/${slug}`,
      lastModified: lastmod,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),

    // Portfolio - Wichtig für Vertrauensaufbau
    {
      url: `${baseUrl}/portfolio`,
      lastModified: lastmod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // Portfolio-Projekteinzelseiten – Referenzarbeiten
    ...portfolioSlugs.map((slug) => ({
      url: `${baseUrl}/portfolio/${slug}`,
      lastModified: lastmod,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Stadt-Landingpages Webdesign - SEO-relevant für lokale Suche
    ...cities.map((city) => ({
      url: `${baseUrl}/webdesign/${city}`,
      lastModified: lastmod,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Impressum - Rechtlich notwendig, niedrige Priorität
    {
      url: `${baseUrl}/impressum`,
      lastModified: lastmod,
      changeFrequency: 'yearly',
      priority: 0.2,
    },

    // Datenschutz - Rechtlich notwendig, niedrige Priorität
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: lastmod,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]
}


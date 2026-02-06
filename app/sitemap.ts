import { MetadataRoute } from 'next'
import { getAllProjectSlugs } from '../config/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://319webdesign.com'
  const currentDate = new Date().toISOString().split('T')[0]

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
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Kontakt - Sehr wichtig für Conversions
    {
      url: `${baseUrl}/kontakt`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },

    // Leistungen Übersicht - Hauptseite
    {
      url: `${baseUrl}/leistungen`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Leistungen Unterseiten - Wichtig für SEO
    ...leistungen.map((slug) => ({
      url: `${baseUrl}/leistungen/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),

    // Warum-Unterseiten (Umsatzstark, Blitzschnell, Lokal)
    ...warumSlugs.map((slug) => ({
      url: `${baseUrl}/warum/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),

    // Portfolio - Wichtig für Vertrauensaufbau
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // Portfolio-Projekteinzelseiten – Referenzarbeiten
    ...portfolioSlugs.map((slug) => ({
      url: `${baseUrl}/portfolio/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Stadt-Landingpages Webdesign - SEO-relevant für lokale Suche
    ...cities.map((city) => ({
      url: `${baseUrl}/webdesign/${city}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Region-Stadt-Landingpages - mit lokalen Referenzen
    ...cities.map((city) => ({
      url: `${baseUrl}/region/${city}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),

    // Impressum - Rechtlich notwendig, niedrige Priorität
    {
      url: `${baseUrl}/impressum`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    },

    // Datenschutz - Rechtlich notwendig, niedrige Priorität
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]
}


import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.319webdesign.com'
  const currentDate = new Date().toISOString().split('T')[0]

  // Leistungen (aktive Slugs aus app/leistungen/[slug]/page.tsx)
  const leistungen = ['webdesign', 'seo', 'wartung']

  // Städte (aktive Cities aus app/webdesign/[city]/page.tsx)
  const cities = ['darmstadt', 'pfungstadt', 'griesheim', 'weiterstadt']

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Leistungen Übersicht
    {
      url: `${baseUrl}/leistungen`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Leistungen Unterseiten (dynamisch)
    ...leistungen.map((slug) => ({
      url: `${baseUrl}/leistungen/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),

    // Stadt-Landingpages (dynamisch)
    ...cities.map((city) => ({
      url: `${baseUrl}/webdesign/${city}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),

    // Portfolio
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Kontakt
    {
      url: `${baseUrl}/kontakt`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Impressum
    {
      url: `${baseUrl}/impressum`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },

    // Datenschutz
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}


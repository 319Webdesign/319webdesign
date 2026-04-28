import { MetadataRoute } from 'next'
import { getAllProjectSlugs } from '../config/projects'
import { baseUrl } from '../config/seo'

/** Statische Generierung zur Build-Zeit – bei jedem Deploy neu gebaut, dadurch aktualisiert sich lastmod. */
export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  const lastmod = new Date()

  const leistungenSlugs = ['webdesign-launch', 'wachstum-seo', 'strategische-begleitung'] as const
  const localCities = ['darmstadt', 'pfungstadt', 'griesheim', 'weiterstadt'] as const

  const portfolioSlugs = getAllProjectSlugs()

  return [
    {
      url: baseUrl,
      lastModified: lastmod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/uber-mich`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: lastmod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/immobilienmakler-webdesign`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/webdesign-handwerker`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seo-darmstadt`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/website-relaunch`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...leistungenSlugs.map((slug) => ({
      url: `${baseUrl}/leistungen/${slug}`,
      lastModified: lastmod,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...localCities.map((city) => ({
      url: `${baseUrl}/webdesign/${city}`,
      lastModified: lastmod,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...portfolioSlugs.map((slug) => ({
      url: `${baseUrl}/portfolio/${slug}`,
      lastModified: lastmod,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/impressum`,
      lastModified: lastmod,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: lastmod,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]
}

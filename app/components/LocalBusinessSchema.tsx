import { baseUrl } from '../../config/seo'

interface LocalBusinessSchemaProps {
  /** Stadt, die im areaServed hervorgehoben wird (z.B. für Region-Landingpages) */
  cityName: string
  /** Optionale zusätzliche Städte/Regionen */
  additionalAreas?: string[]
}

export default function LocalBusinessSchema({
  cityName,
  additionalAreas = ['Pfungstadt', 'Darmstadt'],
}: LocalBusinessSchemaProps) {
  const areaServed = [
    { '@type': 'City' as const, name: cityName },
    ...additionalAreas.filter((a) => a !== cityName).map((name) => ({ '@type': 'City' as const, name })),
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '319Webdesign',
    image: `${baseUrl}/319.png`,
    url: baseUrl,
    telephone: '+49-177-3236454',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nahestrasse 22',
      addressLocality: 'Pfungstadt',
      postalCode: '64319',
      addressRegion: 'Deutschland',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.8028,
      longitude: 8.6042,
    },
    areaServed,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

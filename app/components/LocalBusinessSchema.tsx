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
      streetAddress: 'Weserstrasse 4',
      addressLocality: 'Trebur',
      postalCode: '65468',
      addressRegion: 'Hessen',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.9244,
      longitude: 8.4089,
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

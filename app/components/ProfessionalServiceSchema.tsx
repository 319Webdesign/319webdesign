export default function ProfessionalServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: '319Webdesign',
    image: 'https://319webdesign.com/319.png',
    '@id': 'https://319webdesign.com',
    url: 'https://319webdesign.com',
    telephone: '+49-177-3236454',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nahestrasse 22',
      addressLocality: 'Pfungstadt',
      postalCode: '64319',
      addressRegion: 'Hessen',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.8028,
      longitude: 8.6042,
    },
    areaServed: ['Darmstadt', 'Pfungstadt', 'Südhessen'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://instagram.com/319webdesign',
      'https://www.tiktok.com/@319webdesign',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

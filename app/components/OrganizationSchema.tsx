import { baseUrl } from '../../config/seo'

export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '319Webdesign',
    url: baseUrl,
    logo: `${baseUrl}/319.png`,
    description:
      '319Webdesign (Pfungstadt): Webdesign und Suchmaschinenoptimierung in Darmstadt, Pfungstadt und Südhessen – Next.js, PageSpeed und lokale SEO. System-Integration (Buchung, Bestand) und Theme-Entwicklung für bestehende Systeme.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Weserstrasse 4',
      addressLocality: 'Trebur',
      postalCode: '65468',
      addressRegion: 'Hessen',
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49-177-3236454',
      contactType: 'Customer Service',
      email: 'kontakt@319webdesign.com',
      availableLanguage: 'German',
    },
    sameAs: [
      'https://instagram.com/319webdesign',
      'https://www.tiktok.com/@319webdesign',
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Darmstadt',
      },
      {
        '@type': 'City',
        name: 'Pfungstadt',
      },
      {
        '@type': 'City',
        name: 'Griesheim',
      },
      {
        '@type': 'City',
        name: 'Weiterstadt',
      },
    ],
    founder: {
      '@type': 'Person',
      name: 'Maik Schmidt',
    },
    foundingDate: '2023',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Webdesign und SEO Darmstadt',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Webdesign Darmstadt',
            description: 'Websites für Unternehmen mit PageSpeed 99/100',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Suchmaschinenoptimierung Darmstadt',
            description: 'Lokale SEO für Unternehmen in Darmstadt und Pfungstadt',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website-Wartung',
            description: 'Support und Updates für Unternehmens-Websites',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

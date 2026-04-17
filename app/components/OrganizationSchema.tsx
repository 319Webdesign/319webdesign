import { baseUrl } from '../../config/seo'

export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '319Webdesign',
    url: baseUrl,
    logo: `${baseUrl}/319.png`,
    description:
      '319Webdesign (Pfungstadt): Webdesign für Handwerker in Darmstadt, Pfungstadt und Südhessen – Next.js, PageSpeed und lokales SEO. System-Integration (Buchung, Bestand), Theme-Entwicklung für bestehende Systeme.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pfungstadt',
      addressRegion: 'Deutschland',
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
      name: 'Webdesign für Handwerker',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Webdesign',
            description: 'Websites für Handwerksbetriebe mit PageSpeed 99/100',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO-Optimierung',
            description: 'Lokale SEO für Handwerker in Darmstadt und Pfungstadt',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website-Wartung',
            description: 'Support und Updates für Handwerker-Websites',
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

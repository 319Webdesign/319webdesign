export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '319Webdesign',
    url: 'https://www.319webdesign.com',
    logo: 'https://www.319webdesign.com/319.png',
    description: 'Professionelles Webdesign, SEO-Optimierung und Website-Wartung für Unternehmen in Darmstadt, Pfungstadt und Südhessen.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pfungstadt',
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
      name: 'Webdesign Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Webdesign',
            description: 'High-Performance Websites mit PageSpeed 99/100',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO-Optimierung',
            description: 'Lokale und technische Suchmaschinenoptimierung',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website-Wartung',
            description: 'Professioneller Support und regelmäßige Updates',
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

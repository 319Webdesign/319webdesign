/**
 * Service Schema für die Immobilienmakler-Webdesign-Seite
 * Macht "Immobilien-Software-Integration" und "Webdesign" als Leistungen für Suchmaschinen explizit.
 */
export default function MaklerServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Webdesign für Immobilienmakler in Hessen',
    description:
      'Professionelles Webdesign und Immobilien-Software-Integration für Makler in Hessen. Automatisierte Objekt-Anbindung via onOffice, FlowFact & OpenImmo. Schnittstellen-Lösungen für maximale Effizienz.',
    provider: {
      '@type': 'Organization',
      name: '319Webdesign',
      url: 'https://319webdesign.com',
    },
    areaServed: {
      '@type': 'State',
      name: 'Hessen',
    },
    serviceType: ['Webdesign', 'Immobilien-Software-Integration', 'Schnittstellen-Anbindung'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Leistungen für Immobilienmakler',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Webdesign',
            description: 'High-Performance Websites für Immobilienmakler mit PageSpeed 99/100',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Immobilien-Software-Integration',
            description: 'Schnittstellen-Anbindung an onOffice, FlowFact, OpenImmo für automatische Objekt-Synchronisation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Eigentümer-Akquise',
            description: 'Landingpages und Formulare für mehr Mandatsanfragen',
          },
        },
      ],
    },
    url: 'https://319webdesign.com/immobilienmakler-webdesign',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

import { baseUrl } from '../../config/seo'

/**
 * Service Schema für die Immobilienmakler-Webdesign-Seite
 * Macht "Immobilien-Software-Integration" und "Webdesign" als Leistungen für Suchmaschinen explizit.
 */
export default function MaklerServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Webdesign für Immobilienmakler mit onOffice-Integration',
    description:
      'Professionelles Webdesign und Immobilien-Software-Integration für Makler in Südhessen und Darmstadt. Schwerpunkt: onOffice-Anbindung Website (Objekte, Leads), dazu FlowFact & OpenImmo – Next.js Performance für mehr Eigentümer-Anfragen.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#organization`,
      name: '319Webdesign',
      url: baseUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Weserstrasse 4',
        addressLocality: 'Trebur',
        addressRegion: 'Hessen',
        postalCode: '65468',
        addressCountry: 'DE',
      },
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Südhessen' },
      { '@type': 'City', name: 'Darmstadt' },
      { '@type': 'City', name: 'Pfungstadt' },
    ],
    serviceType: ['Webdesign', 'onOffice Anbindung Website', 'Immobilien-Software-Integration', 'Schnittstellen-Anbindung'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Leistungen für Immobilienmakler',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'onOffice Website-Integration',
            description:
              'onOffice Anbindung Website: Objekte, Suchprofile und Lead-Daten nahtlos in Ihr Next.js Webdesign – ohne doppelte Datenpflege.',
          },
        },
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
    url: `${baseUrl}/immobilienmakler-webdesign`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

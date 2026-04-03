import { baseUrl } from '../../config/seo'
import { pfungstadtWebdesignFaqItems } from '../../config/pfungstadtWebdesignFaq'

const businessId = `${baseUrl}/#business`
const pageUrl = `${baseUrl}/webdesign/pfungstadt`

/**
 * FAQPage + LocalBusiness + Service für /webdesign/pfungstadt (Rich-Snippet-tauglich).
 * JSON-LD im Dokument (Google akzeptiert body; Next App Router: kein beforeInteractive außerhalb Root-Layout).
 */
export default function PfungstadtWebdesignFaqJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': businessId,
        name: '319Webdesign',
        description:
          'Webdesign & SEO für Handwerker, Makler und KMU in Pfungstadt und Darmstadt. Individuelle Next.js-Websites mit PageSpeed 99/100.',
        url: pageUrl,
        telephone: '+491773236454',
        email: 'kontakt@319webdesign.com',
        foundingDate: '2023',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Nahestrasse 22',
          addressLocality: 'Pfungstadt',
          addressRegion: 'Hessen',
          postalCode: '64319',
          addressCountry: 'DE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 49.8075,
          longitude: 8.6008,
        },
        areaServed: [
          { '@type': 'City', name: 'Pfungstadt' },
          { '@type': 'City', name: 'Darmstadt' },
          { '@type': 'City', name: 'Griesheim' },
          { '@type': 'City', name: 'Weiterstadt' },
          { '@type': 'City', name: 'Eberstadt' },
        ],
        priceRange: '€€',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        sameAs: [
          baseUrl,
          'https://instagram.com/319webdesign',
          'https://www.tiktok.com/@319webdesign',
        ],
      },
      {
        '@type': 'Service',
        serviceType: 'Webdesign',
        name: 'Webdesign Pfungstadt',
        provider: { '@id': businessId },
        areaServed: { '@type': 'City', name: 'Pfungstadt' },
        description:
          'Individuelle Websites für lokale Unternehmen in Pfungstadt. Next.js, PageSpeed 99/100, SEO-optimiert.',
        url: pageUrl,
      },
      {
        '@type': 'FAQPage',
        mainEntity: pfungstadtWebdesignFaqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

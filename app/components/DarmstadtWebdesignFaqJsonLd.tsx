import { baseUrl } from '../../config/seo'
import { darmstadtWebdesignFaqItems } from '../../config/darmstadtWebdesignFaq'

const businessId = `${baseUrl}/#business`
const pageUrl = `${baseUrl}/webdesign/darmstadt`

/**
 * FAQPage + LocalBusiness + Service für /webdesign/darmstadt (Rich-Snippets, erweitertes areaServed).
 * JSON-LD im Dokument (Next App Router; Google wertet body-JSON-LD aus).
 */
export default function DarmstadtWebdesignFaqJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': businessId,
        name: '319Webdesign',
        description:
          'Webdesign für Handwerker in Darmstadt und Pfungstadt: Next.js-Websites mit PageSpeed 99/100, lokalem SEO und persönlicher Betreuung – Schwerpunkt Handwerksbetriebe.',
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
          { '@type': 'City', name: 'Darmstadt' },
          { '@type': 'City', name: 'Pfungstadt' },
          { '@type': 'City', name: 'Griesheim' },
          { '@type': 'City', name: 'Weiterstadt' },
          { '@type': 'City', name: 'Eberstadt' },
          { '@type': 'City', name: 'Bessungen' },
          { '@type': 'City', name: 'Kranichstein' },
          { '@type': 'City', name: 'Arheilgen' },
          { '@type': 'City', name: 'Seeheim-Jugenheim' },
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
        name: 'Webdesign Handwerker Darmstadt',
        provider: { '@id': businessId },
        areaServed: { '@type': 'City', name: 'Darmstadt' },
        description:
          'Websites für Handwerksbetriebe in Darmstadt: Next.js, PageSpeed 99/100, lokales SEO, klare Angebote und Erstkontakt.',
        url: pageUrl,
      },
      {
        '@type': 'FAQPage',
        mainEntity: darmstadtWebdesignFaqItems.map((item) => ({
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

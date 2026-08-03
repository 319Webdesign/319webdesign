import { baseUrl } from '../../config/seo'
import { treburWebdesignFaqItems } from '../../config/treburWebdesignFaq'

const businessId = `${baseUrl}/#business`
const pageUrl = `${baseUrl}/webdesign/trebur`

/**
 * FAQPage + LocalBusiness + Service für /webdesign/trebur.
 */
export default function TreburWebdesignFaqJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': businessId,
        name: '319Webdesign',
        description:
          'Webdesign und SEO in Trebur und der Rhein-Main-Region: moderne Websites für Unternehmen und Handwerksbetriebe – schnell, suchmaschinenoptimiert und persönlich betreut.',
        url: pageUrl,
        telephone: '+491773236454',
        email: 'kontakt@319webdesign.com',
        foundingDate: '2023',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Weserstrasse 4',
          addressLocality: 'Trebur',
          addressRegion: 'Hessen',
          postalCode: '65468',
          addressCountry: 'DE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 49.9244,
          longitude: 8.4089,
        },
        areaServed: [
          { '@type': 'City', name: 'Trebur' },
          { '@type': 'City', name: 'Astheim' },
          { '@type': 'City', name: 'Geinsheim' },
          { '@type': 'City', name: 'Groß-Gerau' },
          { '@type': 'City', name: 'Nauheim' },
          { '@type': 'City', name: 'Rüsselsheim' },
          { '@type': 'City', name: 'Ginsheim-Gustavsburg' },
          { '@type': 'City', name: 'Darmstadt' },
          { '@type': 'City', name: 'Pfungstadt' },
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
        serviceType: 'Webdesign und SEO',
        name: 'Webdesign Trebur',
        provider: { '@id': businessId },
        areaServed: { '@type': 'City', name: 'Trebur' },
        description:
          'Professionelles Webdesign in Trebur: individuelle Webseiten für Unternehmen und Handwerksbetriebe – modern, schnell und suchmaschinenoptimiert.',
        url: pageUrl,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Startseite',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Webdesign & Launch',
            item: `${baseUrl}/leistungen/webdesign-launch`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Trebur',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: treburWebdesignFaqItems.map((item) => ({
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

/**
 * JSON-LD Structured Data für die Kontaktseite (/kontakt).
 * ProfessionalService-Schema: unterstützt Google bei geografischer Zuordnung
 * (Pfungstadt, Darmstadt, Südhessen) und E-E-A-T für bessere Indexierung.
 */
import { baseUrl } from '../../config/seo'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService' as const,
  name: '319webdesign',
  url: baseUrl,
  logo: `${baseUrl}/319.png`,
  address: {
    '@type': 'PostalAddress' as const,
    streetAddress: 'Weserstrasse 4',
    addressLocality: 'Trebur',
    postalCode: '65468',
    addressRegion: 'Hessen',
    addressCountry: 'DE',
  },
  areaServed: [
    { '@type': 'City' as const, name: 'Darmstadt' },
    { '@type': 'City' as const, name: 'Pfungstadt' },
    { '@type': 'State' as const, name: 'Hessen' },
  ],
  description:
    'Webdesign für Handwerker in Darmstadt, Pfungstadt und Südhessen – Erstberatung, Launch und SEO. Website-Betreuung und Wartung für Handwerksbetriebe und regionale Betriebe.',
  contactPoint: {
    '@type': 'ContactPoint' as const,
    contactType: 'customer service',
    telephone: '+49-177-3236454',
    email: 'kontakt@319webdesign.com',
    areaServed: 'DE',
    availableLanguage: 'German',
    url: `${baseUrl}/kontakt`,
  },
}

export default function ContactPageSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

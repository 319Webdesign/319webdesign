import { baseUrl } from '../../config/seo'

/** Umfassendes LocalBusiness + ProfessionalService Schema für GEO/KI-Zitierbarkeit (Darmstadt/Pfungstadt). */
export default function ProfessionalServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'WebDesignService'],
    '@id': `${baseUrl}/#organization`,
    name: '319Webdesign',
    alternateName: '319 Webdesign',
    logo: `${baseUrl}/319.png`,
    image: [`${baseUrl}/319.png`, `${baseUrl}/319Web_Mockup_iphone.png`],
    url: baseUrl,
    description:
      '319Webdesign: Webdesign und Suchmaschinenoptimierung mit Next.js (Pfungstadt) – Darmstadt, Pfungstadt, Südhessen. Lokale SEO, schnelle Ladezeiten und klare Auftrittsseiten. System-Integration und Theme-Entwicklung für Bestandssysteme.',
    telephone: '+49-177-3236454',
    email: 'kontakt@319webdesign.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Weserstrasse 4',
      addressLocality: 'Trebur',
      postalCode: '65468',
      addressRegion: 'Hessen',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.9244,
      longitude: 8.4089,
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Südhessen' },
      { '@type': 'City', name: 'Darmstadt' },
      { '@type': 'City', name: 'Pfungstadt' },
      { '@type': 'City', name: 'Griesheim' },
      { '@type': 'City', name: 'Weiterstadt' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    sameAs: [
      'https://instagram.com/319webdesign',
      'https://www.tiktok.com/@319webdesign',
    ],
    foundingDate: '2023',
    founder: { '@type': 'Person', name: 'Maik Schmidt' },
    priceRange: '€€',
    knowsAbout: [
      'Webdesign Darmstadt',
      'Webdesigner Darmstadt',
      'Webdesign Pfungstadt',
      'Next.js Webdesigner Südhessen',
      'Suchmaschinenoptimierung Darmstadt',
      'SEO Experte Darmstadt',
      'Theme Entwicklung für Bestandssysteme',
      'KMU Digitalisierung',
      'Local SEO Südhessen',
    ],
    serviceType: [
      'Webdesign für Unternehmen (Next.js)',
      'Lokale Suchmaschinenoptimierung (Darmstadt & Pfungstadt)',
      'System-Integration & Buchungstools',
      'Website-Wartung für Unternehmen',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

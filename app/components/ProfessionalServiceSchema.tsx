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
      '319Webdesign: Webdesign für Handwerker mit Next.js (Pfungstadt) – Darmstadt, Pfungstadt, Südhessen. Lokales SEO, schnelle Ladezeiten, klare Auftrittsseiten. System-Integration und Theme-Entwicklung für Bestandssysteme.',
    telephone: '+49-177-3236454',
    email: 'kontakt@319webdesign.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nahestrasse 22',
      addressLocality: 'Pfungstadt',
      postalCode: '64319',
      addressRegion: 'Hessen',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.8028,
      longitude: 8.6042,
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
      'Handwerker Webdesign Darmstadt',
      'Handwerker Webdesign Pfungstadt',
      'Next.js Webdesigner Südhessen',
      'Lokales SEO Handwerker',
      'Theme Entwicklung für Bestandssysteme',
      'KMU Digitalisierung',
      'Handwerker Website',
    ],
    serviceType: [
      'Webdesign für Handwerksbetriebe (Next.js)',
      'Lokale Suchmaschinenoptimierung (Darmstadt & Pfungstadt)',
      'System-Integration & Buchungstools',
      'Website-Wartung für Handwerker',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

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
      '319Webdesign: High-Performance Webdesign mit Next.js (Pfungstadt) für Darmstadt, Pfungstadt und Südhessen. System-Integration (onOffice, Buchungstools), Theme-Entwicklung für Bestandssysteme, lokales SEO für KMU und Immobilienmakler. Behalten Sie Ihr System – wir liefern das neue Design.',
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
      'Webdesign Darmstadt',
      'Next.js Webdesigner Südhessen',
      'onOffice Anbindung Website',
      'KMU Digitalisierung',
      'Theme Entwicklung für Bestandssysteme',
      'Lokales SEO',
      'Immobilienmakler Webdesign',
    ],
    serviceType: [
      'High-Performance Webdesign (Next.js)',
      'System-Integration (onOffice, Buchungstools)',
      'Suchmaschinenoptimierung',
      'Website-Wartung',
      'Immobilien-Software-Integration',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

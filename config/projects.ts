/**
 * Portfolio-Projekte mit Stadt-Zuordnung und Detaildaten für Einzelseiten
 */
export interface PortfolioProject {
  id: number
  slug: string
  title: string
  category: string
  imageUrl: string
  liveUrl: string
  size: 'normal' | 'wide' | 'tall'
  /** Städte, in denen das Projekt als lokale Referenz angezeigt wird */
  cities: string[]
  /** Ort für Einzelseite (z.B. "Darmstadt") */
  location: string
  /** Lighthouse/PageSpeed Score */
  lighthouseScore: number
  /** Beschreibung der Aufgabenstellung */
  task: string
  /** Technische Lösung / Umsetzung */
  technicalSolution: string
  /** Erzielte Ergebnisse für Checkmarks */
  results: string[]
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    slug: 'heinerfilm',
    title: 'Heinerfilm',
    category: 'Medienagentur',
    imageUrl: '/heinerfilm_header.jpeg',
    liveUrl: 'https://heinerfilm.vercel.app/',
    size: 'wide',
    cities: ['darmstadt', 'pfungstadt'],
    location: 'Darmstadt',
    lighthouseScore: 99,
    task:
      'Heinerfilm benötigte eine präsentable Website, die ihre Medienproduktionen und Dienstleistungen professionell präsentiert. Die Seite sollte schnell laden, mobil optimiert sein und potenzielle Kunden aus der Region Darmstadt und Südhessen ansprechen.',
    technicalSolution:
      'Entwicklung einer modernen One-Page-Website mit Next.js und optimierten Bildern. Klare Struktur, Call-to-Action-Elemente und Integration von Kontaktmöglichkeiten. Server-Side Rendering für beste SEO-Performance.',
    results: [
      'PageSpeed Score 99/100',
      'SEO-optimiert für lokale Suche',
      'DSGVO-konform',
      'Mobile-First Design',
      'Blitzschnelle Ladezeiten',
    ],
  },
  {
    id: 2,
    slug: 'da-sound',
    title: 'da-sound',
    category: 'Veranstaltungstechnik',
    imageUrl: '/dasound-header.png',
    liveUrl: 'https://www.da-sound.de/',
    size: 'normal',
    cities: ['pfungstadt', 'darmstadt'],
    location: 'Pfungstadt',
    lighthouseScore: 99,
    task:
      'da-sound als Anbieter für Veranstaltungstechnik benötigte eine Website, die Equipment, Referenzen und Kontaktmöglichkeiten übersichtlich präsentiert. Ziel war eine schnelle, professionelle Online-Präsenz für die Region.',
    technicalSolution:
      'Responsive Website mit Fokus auf Performance und Conversion. Optimierte Bildergalerie, klare Service-Darstellung und direkte Kontaktwege. Technische Basis: Next.js mit automatischer Bildoptimierung.',
    results: [
      'PageSpeed Score 99/100',
      'SEO-optimiert',
      'DSGVO-konform',
      'Conversion-optimierte Struktur',
      'Responsive für alle Geräte',
    ],
  },
  {
    id: 3,
    slug: 'arena-sportsbar',
    title: 'Arena Sportsbar',
    category: 'Gastronomie',
    imageUrl: '/arena-sportsbar-header.png',
    liveUrl: 'https://arena-sportsbar.vercel.app/',
    size: 'normal',
    cities: ['pfungstadt', 'darmstadt'],
    location: 'Pfungstadt',
    lighthouseScore: 99,
    task:
      'Die Arena Sportsbar in Pfungstadt benötigte eine ansprechende Website, die Öffnungszeiten, Events und das gastronomische Angebot präsentiert. Wichtig: schnelle Ladezeiten für mobile Nutzer und lokale Auffindbarkeit.',
    technicalSolution:
      'Moderne Gastronomie-Website mit Event-Kalender-Integration, Menü-Präsentation und Standortinformationen. Optimiert für lokale Google-Suche in Pfungstadt und Umgebung. Core Web Vitals optimiert.',
    results: [
      'PageSpeed Score 99/100',
      'SEO-optimiert für lokale Suche',
      'DSGVO-konform',
      'Event- und Öffnungszeiten-Darstellung',
      'Mobile-optimiert',
    ],
  },
  {
    id: 4,
    slug: 'demoseite',
    title: 'DemoSeite',
    category: 'Handwerksbetrieb',
    imageUrl: '/headerscreen.png',
    liveUrl: 'https://319webdesign.com/malerbetrieb/',
    size: 'normal',
    cities: ['darmstadt', 'pfungstadt', 'griesheim', 'weiterstadt'],
    location: 'Südhessen',
    lighthouseScore: 99,
    task:
      'Demonstrationsseite für einen Malerbetrieb – zeigt die typische Struktur einer Handwerks-Website: Leistungen, Referenzen, Kontakt. Als Vorlage für ähnliche Projekte in der Region.',
    technicalSolution:
      'Klassisches Handwerks-Layout mit Leistungsübersicht, Referenzbildern und Kontaktformular. Next.js-Basis, optimiert für lokale Suchanfragen wie "Maler Pfungstadt" oder "Malerbetrieb Darmstadt".',
    results: [
      'PageSpeed Score 99/100',
      'SEO-optimiert für Handwerker',
      'DSGVO-konform',
      'Kontaktformular integriert',
      'Template für weitere Projekte',
    ],
  },
]

export function getProjectsByCity(citySlug: string): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.cities.includes(citySlug))
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return portfolioProjects.map((p) => p.slug)
}

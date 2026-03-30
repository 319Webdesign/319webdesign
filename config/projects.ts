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
  /** Optionale strukturierte Aufgabendarstellung (Ausgangslage, Meine Aufgabe, Kernaufgaben) */
  taskDetailed?: {
    ausgangslageTitle: string
    ausgangslage: string
    meineAufgabeTitle: string
    meineAufgabe: string
    kernaufgabenTitle: string
    kernaufgaben: string[]
  }
  /** Technische Lösung / Umsetzung */
  technicalSolution: string
  /** Optionale strukturierte technische Lösung (Architektur + Ergebnis) */
  technicalSolutionDetailed?: {
    introTitle: string
    intro: string
    points: string[]
    resultTitle: string
    resultIntro: string
    resultPoints: string[]
  }
  /** Erzielte Ergebnisse für Checkmarks */
  results: string[]
  /** Tags für die Referenz-Karten auf der Startseite (Badges) */
  homepageTags?: string[]
  /** Kurzer Teaser-Text für die Referenz-Karte auf der Startseite */
  homepageTeaser?: string
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
      'Heinerfilm benötigte eine präsentable Website, die ihre Medienproduktionen und Dienstleistungen professionell präsentiert. Die Seite sollte schnell laden, mobil optimiert sein und potenzielle Kunden aus der Region ansprechen.',
    taskDetailed: {
      ausgangslageTitle: 'Die Ausgangslage & Herausforderung',
      ausgangslage:
        'Heinerfilm ist eine kreative Videoproduktion aus Südhessen, die für visuelle Exzellenz steht. Die bestehende Webpräsenz wurde diesem Anspruch jedoch nicht mehr gerecht. Die größte technische Hürde war die Einbindung hochauflösender Videoinhalte: Lange Ladezeiten, Darstellungsfehler im iOS-Energiesparmodus und eine fehlende Suchmaschinenoptimierung (SEO) verhinderten, dass potenzielle Kunden in der Region Darmstadt und ganz Hessen das volle Potenzial der Marke wahrnehmen konnten.',
      meineAufgabeTitle: 'Meine Aufgabe',
      meineAufgabe:
        'Mein Ziel war es, eine technische Infrastruktur zu schaffen, die "Filmreife" und "High-Performance" vereint. Dabei lag der Fokus nicht nur auf einem modernen Design, sondern auf einer nachhaltigen Verbesserung der Webpräsenz, um langfristiges Wachstum zu ermöglichen.',
      kernaufgabenTitle: 'Die Kernaufgaben im Detail:',
      kernaufgaben: [
        'Radikale Performance-Optimierung: Implementierung einer effizienten Video-Pipeline (WebM/MP4), um Ladezeiten unter zwei Sekunden zu realisieren – selbst bei bildgewaltigen Inhalten.',
        'Mobile-First & iOS-Fixing: Lösung technischer Probleme bei der Video-Wiedergabe auf mobilen Endgeräten, damit das Portfolio auf jedem Smartphone flüssig und professionell wirkt.',
        'Strategisches SEO für Südhessen: Aufbau einer sauberen Seitenstruktur und Metadaten-Optimierung, um die Sichtbarkeit für Kleinunternehmen und Selbstständige in Pfungstadt, Darmstadt und ganz Hessen massiv zu steigern.',
        'Modernisierung des UI/UX-Designs: Gestaltung eines intuitiven "Mixed-Media-Grids", das die Videoproduktionen von Heinerfilm in den Mittelpunkt stellt und die Nutzerführung zur Kontaktaufnahme optimiert.',
      ],
    },
    technicalSolution:
      'Entwicklung einer modernen One-Page-Website mit Next.js und optimierten Bildern. Klare Struktur, Call-to-Action-Elemente und Integration von Kontaktmöglichkeiten. Server-Side Rendering für beste SEO-Performance.',
    technicalSolutionDetailed: {
      introTitle: 'Technische Lösung: Performance-Engineering & Architektur',
      intro:
        'Um die hohen Anforderungen von Heinerfilm an die visuelle Qualität ohne Einbußen bei der Geschwindigkeit umzusetzen, wurde eine maßgeschneiderte technische Architektur implementiert:',
      points: [
        'Next.js Framework & Statische Generierung: Die Wahl fiel auf Next.js, um durch Server-Side Rendering (SSR) und Static Site Generation (SSG) extrem schnelle initiale Ladezeiten zu garantieren.',
        'Optimierte Video-Pipeline (Mixed-Media-Grid): Statt schwerer Standard-Player wurde eine native Video-Implementierung genutzt. Alle Assets durchlaufen eine FFmpeg-Kompression, die hochqualitative WebM- und MP4-Versionen bereitstellt. Dies reduziert die Dateigröße um bis zu 80% bei gleichbleibender Schärfe.',
        'Low-Power-Mode Handling: Ein spezieller technischer Workaround wurde implementiert, um das automatische Abspielen von Videos auch im iOS-Energiesparmodus zu gewährleisten oder durch hochwertige Poster-Images zu ersetzen, um Blackscreens zu vermeiden.',
        'Local-SEO & Metadaten-Architektur: Integration von dynamischen Metadaten und JSON-LD Schema-Markups für lokales SEO. Dies ermöglicht Google, die Dienstleistungen (Videografie, Postproduktion) direkt in den Suchergebnissen als Sitelinks darzustellen.',
        'DNS- & Hosting-Management: Die technische Migration und Anbindung der Domain erfolgte über Strato, inklusive der Konfiguration von SPF-Einträgen zur Sicherung der E-Mail-Reputation und SSL-Verschlüsselung.',
      ],
      resultTitle: 'Das Ergebnis: Eine digitale Bühne für High-End Content',
      resultIntro:
        'Die Transformation von Heinerfilm ist sowohl technisch als auch strategisch messbar:',
      resultPoints: [
        'Blitzschnelle User Experience: Die Seite erreicht Spitzenwerte bei den Google Core Web Vitals. Videos starten ohne spürbare Verzögerung, was die Absprungrate (Bounce Rate) potenzieller Kunden massiv senkt.',
        'Regionale Dominanz in Hessen: Durch die saubere Indexierung in der Google Search Console und die Optimierung auf Keywords wie „Videoproduktion Darmstadt“ wurde die Reichweite innerhalb der Zielgruppe von Kleinunternehmen und Selbstständigen signifikant gesteigert.',
        'Zukunftssichere Skalierbarkeit: Die neue Architektur ermöglicht es Heinerfilm, das Portfolio jederzeit mit neuen Projekten zu erweitern, ohne die Gesamtperformance der Website zu beeinträchtigen.',
        'Langfristige Webpräsenz: Das Projekt etabliert Heinerfilm als modernen Marktführer in Südhessen. Die Website dient nun als aktives Verkaufstool, das Vertrauen bei Neukunden schafft und die Marke professionell repräsentiert.',
      ],
    },
    results: [
      'PageSpeed Score 99/100',
      'SEO-optimiert für lokale Suche',
      'DSGVO-konform',
      'Mobile-First Design',
      'Blitzschnelle Ladezeiten',
    ],
    homepageTags: ['Next.js', 'Performance', 'Video-SEO'],
    homepageTeaser:
      'Hochwertige Medienproduktion mit blitzschneller Video-Pipeline und starker regionaler Sichtbarkeit.',
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
    taskDetailed: {
      ausgangslageTitle: 'Die Aufgabe (Herausforderung)',
      ausgangslage:
        'Die bestehende Webpräsenz von da-sound, einem etablierten Verleih für Veranstaltungstechnik in Südhessen, entsprach technisch und optisch nicht mehr den modernen Standards. Die zentrale Herausforderung bestand darin, eine technologisch hochmoderne Plattform auf Basis von Next.js zu schaffen, ohne die über Jahre gewachsene Sichtbarkeit bei Google zu gefährden.',
      meineAufgabeTitle: 'Das Ziel',
      meineAufgabe:
        'Das Ziel war eine deutliche Steigerung der Nutzerfreundlichkeit (Mobile First), eine schnellere Performance und die geografische Erweiterung der Sichtbarkeit von Pfungstadt/Darmstadt auf ganz Hessen. Besonderes Augenmerk lag auf der Abbildung eines komplexen Miet-Katalogs mit über 90 spezifischen Unterseiten für professionelles Event-Equipment.',
      kernaufgabenTitle: 'Die Kernaufgaben im Detail:',
      kernaufgaben: [],
    },
    technicalSolution:
      'Responsive Website mit Fokus auf Performance und Conversion. Optimierte Bildergalerie, klare Service-Darstellung und direkte Kontaktwege. Technische Basis: Next.js mit automatischer Bildoptimierung.',
    technicalSolutionDetailed: {
      introTitle: 'Die technische Lösung',
      intro:
        'Um maximale Performance und SEO-Exzellenz zu erreichen, wurde das Projekt mit einem modernen Tech-Stack und einer strikten technischen SEO-Strategie umgesetzt:',
      points: [
        'Framework: Einsatz von Next.js für blitzschnelle Ladezeiten durch Server-Side Rendering (SSR) und Static Site Generation (SSG). Dies ermöglicht eine sofortige Anzeige der Miet-Produkte bei gleichzeitig optimaler Crawlbarkeit für Suchmaschinen.',
        'SEO-Struktur & Migration: Bereinigung der historischen URL-Struktur und Implementierung eines sauberen Canonical-Link-Systems, um Duplicate Content zu vermeiden und die Autorität der Domain zu bündeln. Optimierung der technischen Metadaten (Titel-Tags und Descriptions) auf Basis von Pixel-Längen-Vorgaben für eine perfekte Darstellung in den SERPs (Search Engine Result Pages). Hierarchische Strukturierung der Überschriften (H1-H3) zur gezielten Stärkung lokaler Keywords ("Veranstaltungstechnik mieten Darmstadt", "PA-Anlage leihen Hessen").',
        'Performance-Optimierung: Erreichung eines Struktur-Scores von 96% (laut Seobility) durch sauberen Code, optimierte Asset-Auslieferung und den Verzicht auf unnötigen Ballast.',
        'Automatisierung: Integration einer automatisierten Sitemap-Generierung und Indexierungs-Logik, um sicherzustellen, dass neue Produkte im Miet-Katalog sofort von Google erfasst werden.',
        'Conversion-Fokus: Entwicklung eines intuitiven Pop-up-Systems (z. B. für Betriebsferien) mit zeitgesteuerter Logik und Preview-Funktion für den Kunden, um die Kommunikation mit den Mietern zu vereinfachen.',
      ],
      resultTitle: '',
      resultIntro: '',
      resultPoints: [],
    },
    results: [
      'PageSpeed Score 99/100',
      'SEO-optimiert',
      'DSGVO-konform',
      'Conversion-optimierte Struktur',
      'Responsive für alle Geräte',
    ],
    homepageTags: ['Next.js', 'SEO', 'Miet-Katalog'],
    homepageTeaser:
      'Großer Equipment-Katalog mit sauberer URL-Struktur und maximaler Performance für die Region.',
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
    taskDetailed: {
      ausgangslageTitle: 'Ziel & Herausforderung',
      ausgangslage:
        "Das Ziel dieses Projekts war es, für eine neu eröffnete Sportsbar in Südhessen eine Web-Präsenz zu schaffen, die den 'Premium-Charakter' der Location mit der Dynamik von Live-Sport vereint. Die Herausforderung bestand darin, sich von typischen Gastronomie-Baukasten-Seiten abzuheben und eine Plattform zu entwickeln, die sowohl emotional anspricht als auch funktional überzeugt.",
      meineAufgabeTitle: '',
      meineAufgabe: '',
      kernaufgabenTitle: 'Kernanforderungen:',
      kernaufgaben: [
        'Mobile First: Optimierung für Gäste, die von unterwegs schnell den Spielplan oder die Karte checken.',
        'Conversion-Fokus: Ein nahtloses Reservierungssystem, um Website-Besucher in Gäste vor Ort zu verwandeln.',
        'Brand Identity: Integration von Sport-Elementen (wie Fußball-Animationen) und einer edlen Gold-Schwarz-Ästhetik.',
      ],
    },
    technicalSolution:
      'Moderne Gastronomie-Website mit Event-Kalender-Integration, Menü-Präsentation und Standortinformationen. Optimiert für lokale Google-Suche in Pfungstadt und Umgebung. Core Web Vitals optimiert.',
    technicalSolutionDetailed: {
      introTitle: 'Die technische Lösung',
      intro:
        'Um die bestmögliche Performance und SEO-Rankings zu garantieren, wurde bewusst auf Standard-CMS-Lösungen verzichtet und eine maßgeschneiderte Next.js Applikation entwickelt.',
      points: [
        'Framework: Next.js 14/15 mit App Router für blitzschnelle Ladezeiten (Server-Side Rendering).',
        'Styling: Tailwind CSS für ein responsives, modernes Design mit einem konsistenten Farbschema.',
        'Interaktivität: Einsatz von Framer Motion für komplexe Animationen (z. B. ein physikalisch korrekt rotierender Fußball beim Scrollen), die das Nutzererlebnis dynamisch gestalten.',
        'Performance-Optimierung: 100/100 Punkte im Google Lighthouse Score durch automatisierte Bildoptimierung (next/image) und effizientes Code-Splitting.',
        'Local SEO: Implementierung von JSON-LD Schema Markups für lokale Unternehmen, um die Sichtbarkeit bei Google Maps und in regionalen Suchanfragen massiv zu steigern.',
      ],
      resultTitle: '',
      resultIntro: '',
      resultPoints: [],
    },
    results: [
      'PageSpeed Score 99/100',
      'SEO-optimiert für lokale Suche',
      'DSGVO-konform',
      'Event- und Öffnungszeiten-Darstellung',
      'Mobile-optimiert',
    ],
    homepageTags: ['Next.js', 'Animation', 'Local SEO'],
    homepageTeaser:
      'Premium-Gastronomie-Auftritt mit Animationen, Reservierung und lokaler Google-Sichtbarkeit.',
  },
  {
    id: 4,
    slug: 'demoseite',
    title: 'DemoSeite',
    category: 'Handwerksbetrieb',
    imageUrl: '/headerscreen.png',
    liveUrl: 'https://www.319webdesign.com/malerbetrieb/',
    size: 'normal',
    cities: ['darmstadt', 'pfungstadt', 'griesheim', 'weiterstadt'],
    location: 'Pfungstadt',
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

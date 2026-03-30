import type { City } from './cities'

/**
 * Stadt-spezifische Inhalte für regionale Unterseiten
 * - Einzigartige H1 pro Stadt
 * - Keywords (Webdesign, Stadt, Makler) 2x in den ersten zwei Absätzen
 * - Darmstadt: Wissenschaftsstadt, Tech-KMUs, Premium-Makler (Villen/Jugendstil)
 * - Pfungstadt: Lokale Verbundenheit, Handwerksbetriebe, regionale Maklerbüros
 */

export function getUniqueH1Region(city: City): { main: string; sub?: string } {
  const variants: Record<string, { main: string; sub?: string }> = {
    darmstadt: {
      main: 'Ihre Website für die Wissenschaftsstadt',
      sub: 'Tech-Firmen & Premium-Immobilien – maßgeschneidert für Darmstadt',
    },
    pfungstadt: {
      main: 'Online sichtbar in Pfungstadt',
      sub: 'Handwerk & Makler – Websites, die vor Ort überzeugen',
    },
    griesheim: {
      main: 'Webauftritt aus der Region',
      sub: 'Für Firmen zwischen Griesheim und Darmstadt',
    },
    weiterstadt: {
      main: 'Digitale Präsenz für Weiterstadt',
      sub: 'Industrie & Mittelstand – starke Websites für starke Standorte',
    },
  }
  return variants[city.slug] ?? { main: `Webdesign ${city.name}`, sub: `In ${city.region}` }
}

export function getUniqueH1Webdesign(city: City): { main: string; sub?: string } {
  const variants: Record<string, { main: string; sub?: string }> = {
    darmstadt: {
      main: 'Schnelle Websites für Darmstadts Tech-Szene',
      sub: 'IT-Firmen & Immobilienmakler – Performance, die zählt',
    },
    pfungstadt: {
      main: 'Von Pfungstadt aus online wachsen',
      sub: 'Handwerker & Makler – Webdesign mit lokaler Nähe',
    },
    griesheim: {
      main: 'Webdesign aus Griesheim – für die Region',
      sub: 'KMUs westlich von Darmstadt: Sichtbar, schnell, persönlich',
    },
    weiterstadt: {
      main: 'Maßgeschneidert für Weiterstadts Wirtschaft',
      sub: 'Logistik, Industrie, Dienstleister – Ihre digitale Visitenkarte',
    },
  }
  return variants[city.slug] ?? { main: `Webdesign ${city.name}`, sub: `High-Performance Websites für ${city.region}` }
}

/** Einzigartige Meta-Descriptions pro Stadt (Anti-Duplicate für Google) – erste 2 Sätze radikal unterschiedlich */
export function getDescriptionWebdesign(city: City): string {
  const variants: Record<string, string> = {
    darmstadt:
      'IT-Firmen und Makler in Darmstadt: Blitzschnelle Websites mit PageSpeed 99/100. Keine Standard-Templates – individuell, conversion-stark und für die Wissenschaftsstadt gemacht.',
    pfungstadt:
      'Handwerker und Maklerbüros in Pfungstadt vertrauen auf lokales Webdesign. Schnelle Ladezeiten, klare Struktur – Ihre Website als Vertrauensanker vor Ort.',
    griesheim:
      'KMUs in Griesheim und Umgebung: Moderne Webauftritte, die bei Google ranken. PageSpeed 99/100, mobile-first – entwickelt von jemandem, der die Region kennt.',
    weiterstadt:
      'Weiterstadts Mittelstand braucht starke Online-Präsenz. B2B-tauglich, schnell, suchmaschinenoptimiert – Webdesign für Wirtschaftsstandorte mit Anspruch.',
  }
  return variants[city.slug] ?? `Professionelles Webdesign in ${city.name} mit PageSpeed 99/100. Moderne Websites für Unternehmen in ${city.region}.`
}

/** Einzigartige Meta-Descriptions für Region-Seiten – Anti-Duplicate */
export function getDescriptionRegion(city: City): string {
  const variants: Record<string, string> = {
    darmstadt:
      'Referenzen aus Darmstadt zeigen: Tech und Makler profitieren von High-Performance. Lokale Beratung, echte Projekte – kein Generics, sondern echte Expertise.',
    pfungstadt:
      'Pfungstadter Handwerk und Makler – echte Referenzen, persönliche Betreuung. Von hier aus entwickle ich Websites, die vor Ort überzeugen.',
    griesheim:
      'Aus Griesheim für die Region: Konkrete Webdesign-Projekte, keine leeren Versprechen. Lokale Sichtbarkeit und Performance aus einer Hand.',
    weiterstadt:
      'Weiterstadts Unternehmen verdienen echte Referenzen. Individuelle Beratung, lokale Präsenz – Webdesign mit Verständnis für B2B und Industrie.',
  }
  return variants[city.slug] ?? `Professionelles Webdesign in ${city.name} mit PageSpeed 99/100. Lokale Referenzen und Beratung in ${city.region}.`
}

/**
 * Hero-Intro: Keywords (Webdesign, Stadt, Makler) mind. 2x in den ersten zwei Absätzen
 */
export function getHeroIntroEnhanced(city: City): string {
  const variants: Record<string, string> = {
    darmstadt:
      'Webdesign in Darmstadt für Tech-KMUs und Premium-Makler: Die Wissenschaftsstadt lebt von Innovation und starken Immobilien. Mit PageSpeed 99/100 und professionellem Webdesign unterstütze ich IT-Firmen, Forschungseinrichtungen sowie Makler von Villen und Jugendstil-Immobilien – online sichtbar und conversion-stark.',
    pfungstadt:
      'Webdesign in Pfungstadt für Handwerksbetriebe und regionale Maklerbüros: Als Ihr Webdesigner helfe ich lokale Betriebe und Makler vor Ort mit einer professionellen Website – persönlich, nah und mit PageSpeed 99/100. Webdesign, das Vertrauen schafft und Kunden bringt.',
    griesheim:
      'Webdesign in Griesheim – für Unternehmen westlich von Darmstadt: Mit professionellem Webdesign und PageSpeed 99/100 unterstütze ich Firmen, online gefunden zu werden. Lokale Sichtbarkeit, moderne Technik, persönliche Betreuung vor Ort.',
    weiterstadt:
      'Webdesign in Weiterstadt für den Mittelstand: Logistik, Industrie und Dienstleister brauchen eine starke Online-Präsenz. Mit PageSpeed 99/100 entwickle ich High-Performance-Websites – Webdesign, das zu Ihrem Wirtschaftsstandort passt und Kunden überzeugt.',
  }
  return variants[city.slug] ?? `Professionelles Webdesign in ${city.name} mit PageSpeed 99/100. Für Unternehmen in ${city.region} – persönliche Betreuung und moderne Websites.`
}

/**
 * Warum Webdesign – echter Content, stadt-spezifisch (ersetzt Platzhalter)
 */
export function getWarumWebdesignContent(city: City): { heading: string; content: string } {
  const variants: Record<string, { heading: string; content: string }> = {
    darmstadt: {
      heading: 'Warum Webdesign in Darmstadt für Tech-KMUs und Makler zählt',
      content:
        'Die Wissenschaftsstadt Darmstadt ist ein Tech-Hub mit Hochschulen, Forschung und innovationsstarken KMUs. Diese Zielgruppe erwartet moderne, schnelle Websites – kein veraltetes Design. Gleichzeitig zieht Darmstadt Premium-Makler an, die Villen, Jugendstil-Immobilien und hochpreisige Objekte vermarkten. Für beide Zielgruppen gilt: Webdesign muss Vertrauen schaffen, technisch überzeugen und konversionsorientiert sein. Eine langsame oder veraltete Website schadet dem Image – gerade in einer Stadt, in der Digitalisierung und Architektur eine Rolle spielen. Mit PageSpeed 99/100 und professionellem Webdesign positionieren Sie sich als seriöser Anbieter.',
    },
    pfungstadt: {
      heading: 'Warum Webdesign in Pfungstadt für Handwerk und Makler wichtig ist',
      content:
        'Pfungstadt lebt von lokaler Verbundenheit: Handwerksbetriebe, regionale Maklerbüros und Dienstleister profitieren davon, vor Ort bekannt und vertrauenswürdig zu sein. Eine professionelle Website verstärkt diesen Eindruck – sie signalisiert Seriosität und Nähe zum Kunden. Handwerker werden zunehmend online gesucht; Makler in Pfungstadt konkurrieren mit größeren Büros aus Darmstadt. Ein starkes Webdesign hilft beiden: Handwerksbetriebe werden bei „Handwerker Pfungstadt“ gefunden, Makler präsentieren Objekte übersichtlich und schnell. Persönliche Betreuung aus der Region und technisch einwandfreies Webdesign – das entscheidet über Anfragen und Aufträge.',
    },
    griesheim: {
      heading: 'Warum Webdesign in Griesheim für Unternehmen der Region zählt',
      content:
        'Griesheim westlich von Darmstadt ist ein Pendler-Standort mit lebendiger lokaler Wirtschaft. Unternehmen, die hier ansässig sind, konkurrieren mit Anbietern aus der gesamten Region. Eine professionelle Website hilft, bei Google und bei potenziellen Kunden sichtbar zu werden. Ob Handwerk, Einzelhandel oder Dienstleistung – Webdesign in Griesheim sollte schnell laden, mobil optimiert sein und Vertrauen schaffen. Die Nähe zu Darmstadt bedeutet: Viele Nutzer suchen ortsnah. Mit einer technisch starken Website und lokaler SEO positionieren Sie sich klar vor der Konkurrenz.',
    },
    weiterstadt: {
      heading: 'Warum Webdesign in Weiterstadt für den Mittelstand sinnvoll ist',
      content:
        'Weiterstadt ist ein wichtiger Wirtschaftsstandort mit Logistik, Industrie und mittelständischen Betrieben. Diese Unternehmen brauchen keine generischen Vorlagen, sondern maßgeschneidertes Webdesign, das zu ihrer Branche und ihrer Zielgruppe passt. B2B-Kunden und Geschäftspartner prüfen online, ob ein Unternehmen seriös auftritt. Eine schnelle, übersichtliche Website mit klarer Struktur unterstützt diesen Eindruck. Webdesign in Weiterstadt bedeutet: Technische Stärke, professioneller Auftritt und Sichtbarkeit in der Region – für mehr Anfragen und bessere Kooperationen.',
    },
  }
  return variants[city.slug] ?? {
    heading: `Warum Webdesign in ${city.name} wichtig ist`,
    content: `Professionelles Webdesign in ${city.name} und ${city.region} hilft Unternehmen, online gefunden zu werden und Vertrauen aufzubauen. Mit PageSpeed 99/100 und lokaler SEO positionieren Sie sich vor der Konkurrenz.`,
  }
}

/** Meta-Description (150–155 Zeichen) für regionale Webdesign-Unterseiten – USP + lokale Keywords. */
export function getMetaDescriptionWebdesignCity(city: City): string {
  const variants: Record<string, string> = {
    darmstadt:
      'Behalten Sie Ihr System, ich upgrade das Design. Next.js Webdesign Darmstadt: onOffice, Buchung, lokales SEO für KMU & Makler in Südhessen – Performance.',
    pfungstadt:
      'Behalten Sie Ihr System, ich upgrade das Design. Next.js Webdesign Pfungstadt: System-Integration, lokales SEO für Handwerk & Makler in Südhessen vor Ort.',
    griesheim:
      'Behalten Sie Ihr System, ich upgrade das Design. Next.js Webdesign Griesheim: lokale SEO, onOffice & Performance für KMU – Region Darmstadt, Südhessen.',
    weiterstadt:
      'Behalten Sie Ihr System, ich upgrade das Design. Next.js Webdesign Weiterstadt: B2B, lokales SEO & System-Anbindung für Mittelstand in Südhessen (DE).',
  }
  return (
    variants[city.slug] ??
    `Behalten Sie Ihr System, ich upgrade das Design. Next.js Webdesign ${city.name}: lokales SEO, System-Integration für KMU & Makler in ${city.region}, Südhessen.`
  )
}

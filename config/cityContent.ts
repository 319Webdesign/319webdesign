import type { City } from './cities'

/**
 * Stadt-spezifische Inhalte für regionale Unterseiten
 * - Einzigartige H1 pro Stadt
 * - Keywords (Webdesign, Stadt, Südhessen, Makler) 2x in den ersten zwei Absätzen
 * - Darmstadt: Wissenschaftsstadt, Tech-KMUs, Premium-Makler (Villen/Jugendstil)
 * - Pfungstadt: Lokale Verbundenheit, Handwerksbetriebe, regionale Maklerbüros
 */

export function getUniqueH1Region(city: City): { main: string; sub?: string } {
  const variants: Record<string, { main: string; sub?: string }> = {
    darmstadt: {
      main: 'Webdesign Darmstadt',
      sub: 'Für Tech-KMUs und Premium-Makler in der Wissenschaftsstadt',
    },
    pfungstadt: {
      main: 'Webdesign Pfungstadt',
      sub: 'Handwerksbetriebe & regionale Maklerbüros in Südhessen',
    },
    griesheim: {
      main: 'Webdesign Griesheim',
      sub: 'Lokale Unternehmen westlich von Darmstadt',
    },
    weiterstadt: {
      main: 'Webdesign Weiterstadt',
      sub: 'Mittelstand und Industrie am Wirtschaftsstandort Südhessen',
    },
  }
  return variants[city.slug] ?? { main: `Webdesign ${city.name}`, sub: `In ${city.region}` }
}

export function getUniqueH1Webdesign(city: City): { main: string; sub?: string } {
  const variants: Record<string, { main: string; sub?: string }> = {
    darmstadt: {
      main: 'Webdesign Darmstadt',
      sub: 'High-Performance Websites für Tech-Firmen und Makler in der Wissenschaftsstadt',
    },
    pfungstadt: {
      main: 'Webdesign Pfungstadt',
      sub: 'Professionelle Websites für Handwerk und Makler in Südhessen',
    },
    griesheim: {
      main: 'Webdesign Griesheim',
      sub: 'Moderne Websites für Unternehmen in der Region Darmstadt',
    },
    weiterstadt: {
      main: 'Webdesign Weiterstadt',
      sub: 'Starke Online-Präsenz für den Mittelstand in Südhessen',
    },
  }
  return variants[city.slug] ?? { main: `Webdesign ${city.name}`, sub: `High-Performance Websites für ${city.region}` }
}

/**
 * Hero-Intro: Keywords (Webdesign, Stadt, Südhessen, Makler) mind. 2x in den ersten zwei Absätzen
 */
export function getHeroIntroEnhanced(city: City): string {
  const variants: Record<string, string> = {
    darmstadt:
      'Webdesign in Darmstadt für Tech-KMUs und Premium-Makler: Die Wissenschaftsstadt lebt von Innovation und starken Immobilien. Mit PageSpeed 99/100 und professionellem Webdesign unterstütze ich IT-Firmen, Forschungseinrichtungen sowie Makler von Villen und Jugendstil-Immobilien in Südhessen – online sichtbar und conversion-stark.',
    pfungstadt:
      'Webdesign in Pfungstadt für Handwerksbetriebe und regionale Maklerbüros: Als Ihr Webdesigner in Südhessen helfe ich lokale Betriebe und Makler vor Ort mit einer professionellen Website – persönlich, nah und mit PageSpeed 99/100. Webdesign, das Vertrauen schafft und Kunden bringt.',
    griesheim:
      'Webdesign in Griesheim – für Unternehmen westlich von Darmstadt: Mit professionellem Webdesign und PageSpeed 99/100 unterstütze ich Firmen in Südhessen, online gefunden zu werden. Lokale Sichtbarkeit, moderne Technik, persönliche Betreuung vor Ort.',
    weiterstadt:
      'Webdesign in Weiterstadt für den Mittelstand: Logistik, Industrie und Dienstleister brauchen eine starke Online-Präsenz. In Südhessen entwickle ich High-Performance-Websites mit PageSpeed 99/100 – Webdesign, das zu Ihrem Wirtschaftsstandort passt und Kunden überzeugt.',
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
        'Die Wissenschaftsstadt Darmstadt ist ein Tech-Hub mit Hochschulen, Forschung und innovationsstarken KMUs. Diese Zielgruppe erwartet moderne, schnelle Websites – kein veraltetes Design. Gleichzeitig zieht Darmstadt Premium-Makler an, die Villen, Jugendstil-Immobilien und hochpreisige Objekte vermarkten. Für beide Zielgruppen gilt: Webdesign muss Vertrauen schaffen, technisch überzeugen und konversionsorientiert sein. Eine langsame oder veraltete Website schadet dem Image – gerade in einer Stadt, in der Digitalisierung und Architektur eine Rolle spielen. Mit PageSpeed 99/100 und professionellem Webdesign positionieren Sie sich in Darmstadt und Südhessen als seriöser Anbieter.',
    },
    pfungstadt: {
      heading: 'Warum Webdesign in Pfungstadt für Handwerk und Makler wichtig ist',
      content:
        'Pfungstadt lebt von lokaler Verbundenheit: Handwerksbetriebe, regionale Maklerbüros und Dienstleister profitieren davon, vor Ort bekannt und vertrauenswürdig zu sein. Eine professionelle Website verstärkt diesen Eindruck – sie signalisiert Seriosität und Nähe zum Kunden. Handwerker werden zunehmend online gesucht; Makler in Pfungstadt konkurrieren mit größeren Büros aus Darmstadt. Ein starkes Webdesign hilft beiden: Handwerksbetriebe werden bei „Handwerker Pfungstadt“ gefunden, Makler präsentieren Objekte übersichtlich und schnell. Persönliche Betreuung aus der Region und technisch einwandfreies Webdesign – das entscheidet in Südhessen über Anfragen und Aufträge.',
    },
    griesheim: {
      heading: 'Warum Webdesign in Griesheim für Unternehmen der Region zählt',
      content:
        'Griesheim westlich von Darmstadt ist ein Pendler-Standort mit lebendiger lokaler Wirtschaft. Unternehmen, die hier ansässig sind, konkurrieren mit Anbietern aus der gesamten Region. Eine professionelle Website hilft, bei Google und bei potenziellen Kunden sichtbar zu werden. Ob Handwerk, Einzelhandel oder Dienstleistung – Webdesign in Griesheim und Südhessen sollte schnell laden, mobil optimiert sein und Vertrauen schaffen. Die Nähe zu Darmstadt bedeutet: Viele Nutzer suchen ortsnah. Mit einer technisch starken Website und lokaler SEO positionieren Sie sich klar vor der Konkurrenz.',
    },
    weiterstadt: {
      heading: 'Warum Webdesign in Weiterstadt für den Mittelstand sinnvoll ist',
      content:
        'Weiterstadt ist ein wichtiger Wirtschaftsstandort mit Logistik, Industrie und mittelständischen Betrieben. Diese Unternehmen brauchen keine generischen Vorlagen, sondern maßgeschneidertes Webdesign, das zu ihrer Branche und ihrer Zielgruppe passt. B2B-Kunden und Geschäftspartner prüfen online, ob ein Unternehmen seriös auftritt. Eine schnelle, übersichtliche Website mit klarer Struktur unterstützt diesen Eindruck. Webdesign in Weiterstadt und Südhessen bedeutet: Technische Stärke, professioneller Auftritt und Sichtbarkeit in der Region – für mehr Anfragen und bessere Kooperationen.',
    },
  }
  return variants[city.slug] ?? {
    heading: `Warum Webdesign in ${city.name} wichtig ist`,
    content: `Professionelles Webdesign in ${city.name} und ${city.region} hilft Unternehmen, online gefunden zu werden und Vertrauen aufzubauen. Mit PageSpeed 99/100 und lokaler SEO positionieren Sie sich vor der Konkurrenz.`,
  }
}

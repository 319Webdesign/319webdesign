import type { City } from './cities'

/**
 * City-Page-Template für SEO-optimierte Detailseiten
 *
 * - Haupt-Keywords (Webdesign + Stadt) erscheinen 2-3x im ersten Textabschnitt
 * - 8 Text-Duplikate werden durch stadt-spezifische Variationen ersetzt → Unique Content
 * - Nur Stadtname als Variable nötig – Text passt sich automatisch an
 */

/** Index für Varianten-Auswahl (0-3) – neue Städte erhalten über Slug-Hash eine Variante */
function getVariantIndex(city: City): number {
  const order = ['darmstadt', 'pfungstadt', 'griesheim', 'weiterstadt']
  const idx = order.indexOf(city.slug)
  if (idx >= 0) return idx
  // Neue Städte: deterministischer Hash für konsistente Varianten
  const hash = city.slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return hash % 4
}

/**
 * Erster Textabschnitt (Hero) – Keywords "Webdesign" + Stadt mind. 2x
 * Stadt-spezifisch: Darmstadt (Tech-KMUs, Premium-Makler), Pfungstadt (Handwerk, Maklerbüros)
 */
export function getHeroIntro(city: City): string {
  const citySpecific: Record<string, string> = {
    darmstadt:
      'Webdesign in Darmstadt für Tech-KMUs und Premium-Makler: Die Wissenschaftsstadt lebt von Innovation und starken Immobilien. Mit PageSpeed 99/100 unterstütze ich IT-Firmen, Forschungseinrichtungen sowie Makler von Villen und Jugendstil-Immobilien – online sichtbar und conversion-stark.',
    pfungstadt:
      'Webdesign in Pfungstadt für Handwerksbetriebe und regionale Maklerbüros: Als Ihr Webdesigner helfe ich lokale Betriebe und Makler vor Ort mit einer professionellen Website – persönlich, nah und mit PageSpeed 99/100. Webdesign, das Vertrauen schafft und Kunden bringt.',
    griesheim:
      'Webdesign in Griesheim – für Unternehmen westlich von Darmstadt: Mit professionellem Webdesign und PageSpeed 99/100 unterstütze ich Firmen, online gefunden zu werden. Lokale Sichtbarkeit, moderne Technik, persönliche Betreuung vor Ort.',
    weiterstadt:
      'Webdesign in Weiterstadt für den Mittelstand: Logistik, Industrie und Dienstleister brauchen eine starke Online-Präsenz. Mit PageSpeed 99/100 entwickle ich High-Performance-Websites – Webdesign, das zu Ihrem Wirtschaftsstandort passt.',
  }
  if (citySpecific[city.slug]) return citySpecific[city.slug]
  return `Professionelles Webdesign in ${city.name} mit PageSpeed 99/100. Für Unternehmen in ${city.region} – persönliche Betreuung und moderne Websites.`
}

/** Stadt-spezifische Texte für Darmstadt (Tech, Premium-Makler) und Pfungstadt (Handwerk, Maklerbüros) */
const citySpecificTexts: Record<string, Partial<ReturnType<typeof getCityPageTextsBase>>> = {
  darmstadt: {
    performanceIntro: 'In der Wissenschaftsstadt Darmstadt zählen technische Exzellenz und Performance. Ich erreiche konstant PageSpeed 99/100 – für Tech-KMUs und Makler, die mit ihrer Website überzeugen wollen.',
    performanceWarum: 'Google belohnt schnelle Websites mit besseren Rankings. Für IT-Firmen und Premium-Makler in Darmstadt ist das entscheidend – Ihre Zielgruppe erwartet moderne, schnelle Webauftritte.',
    featuresIntro: 'Webdesign für Tech-KMUs und Makler in Darmstadt: High-Performance, klare Struktur, konversionsorientiert.',
    referenzenIntro: 'Webdesign-Projekte für Unternehmen in Darmstadt – von der Tech-Firma bis zum Maklerbüro.',
    personalBetreuung: 'Persönlicher Ansprechpartner vor Ort in Darmstadt',
    localSectionLead: `Als Webdesigner in Darmstadt kenne ich die Wissenschaftsstadt und die Anforderungen von Tech-KMUs sowie Maklern. Ob Villen, Jugendstil-Immobilien oder digitale Produkte – in {nearby} bin ich Ihr Partner für professionelles Webdesign.`,
    ctaHeading: 'Bereit für Ihr Webdesign in Darmstadt?',
    ctaParagraph: 'Kostenloses Erstgespräch – ob Tech-KMU oder Makler: Gemeinsam entwickeln wir Ihre Strategie.',
  },
  pfungstadt: {
    performanceIntro: 'Handwerksbetriebe und Maklerbüros in Pfungstadt brauchen Websites, die schnell laden und vertrauenswürdig wirken. PageSpeed 99/100 ist bei mir Standard – für mehr Sichtbarkeit.',
    performanceWarum: 'Potenzielle Kunden suchen Handwerker und Makler oft mobil. Eine schnelle Seite hält Besucher bei Ihnen – in Pfungstadt und Umgebung zählt jeder Klick.',
    featuresIntro: 'Webdesign für Handwerk und Makler in Pfungstadt: übersichtlich, vertrauenswürdig, suchmaschinenoptimiert.',
    referenzenIntro: 'Referenzen aus Pfungstadt und der Region – Websites für Handwerksbetriebe, Makler und Dienstleister.',
    personalBetreuung: 'Lokale Betreuung aus Pfungstadt',
    localSectionLead: `In Pfungstadt und {nearby} arbeite ich mit Handwerksbetrieben und regionalen Maklerbüros. Webdesign aus der Nähe – für Unternehmen, die vor Ort bekannt sein wollen.`,
    ctaHeading: 'Starten wir Ihr Webprojekt in Pfungstadt?',
    ctaParagraph: 'Unverbindliches Erstgespräch – ob Handwerk oder Makler: Ich unterstütze Sie mit Webdesign in Pfungstadt.',
  },
}

function getCityPageTextsBase(city: City) {
  const idx = getVariantIndex(city)
  const v = (arr: string[]) => arr[idx % arr.length]

  return {
    /** 1. Performance-Section Intro */
    performanceIntro: v([
      `Während viele Agenturen langsame Websites ausliefern, erreiche ich konstant PageSpeed-Scores von 99/100. Das bedeutet: Bessere Google-Rankings, zufriedenere Besucher und mehr Conversions für Ihr Unternehmen in ${city.name}.`,
      `Viele Webdesign-Agenturen liefern träge Seiten – ich halte konstant 99/100. Bessere Rankings, höhere Conversion-Raten und zufriedenere Nutzer für Firmen in ${city.name} und ${city.region}.`,
      `99/100 PageSpeed als Standard: Ich setze auf Geschwindigkeit, wo andere Kompromisse machen. Das zahlt sich für Ihr Business in ${city.name} aus – bessere Sichtbarkeit und mehr Anfragen.`,
      `Schnelle Ladezeiten sind kein Zufall: Meine Projekte erreichen durchschnittlich 99/100. Für Unternehmen in ${city.name} heißt das mehr organischen Traffic und bessere Nutzererfahrung.`,
    ]),

    /** 2. Performance "Warum wichtig" Box */
    performanceWarum: v([
      `Google berücksichtigt die Ladegeschwindigkeit als Rankingfaktor. Schnellere Websites erscheinen weiter oben in den Suchergebnissen – das bedeutet mehr potenzielle Kunden für Ihr Unternehmen in ${city.name}.`,
      `Ladezeit wirkt direkt auf Ihr Google-Ranking. Mit einer schnellen Website positionieren Sie sich in ${city.name} und ${city.region} besser als langsame Konkurrenz.`,
      `Nutzer erwarten Antworten in Sekunden. Eine performante Seite hilft Ihnen in ${city.name}, Besucher zu halten und zu Kunden zu machen – statt sie an die Konkurrenz zu verlieren.`,
      `Performance = Sichtbarkeit. Google belohnt schnelle Sites mit besseren Rankings – wichtig für jedes Unternehmen in ${city.name}, das online gefunden werden möchte.`,
    ]),

    /** 3. Features-Section Intro */
    featuresIntro: v([
      `Professionelles Webdesign für Unternehmen in ${city.name} und Umgebung`,
      `Was Sie von mir als Webdesigner in ${city.name} erwarten können`,
      `Maßgeschneiderte Web-Lösungen für Firmen in ${city.name} und ${city.region}`,
      `High-Performance Webdesign – speziell für die Wirtschaft in ${city.name}`,
    ]),

    /** 3b. Referenzen-Section Intro (region/[city]) */
    referenzenIntro: v([
      `Ausgewählte Webdesign-Projekte für Unternehmen in ${city.name} und Umgebung.`,
      `Referenzen aus ${city.name} – realisierte Websites für Firmen in ${city.region}.`,
      `Beispiele aus meinem Portfolio: Webdesign in ${city.name} und Umgebung.`,
      `Lokale Projekte: Professionelle Websites für Unternehmen in ${city.name}.`,
    ]),

    /** 4. Persönliche Betreuung / Standort-Info */
    personalBetreuung: v([
      `Persönliche Betreuung vor Ort`,
      `Direkter Ansprechpartner in ${city.region}`,
      `Persönlicher Service in ${city.name} und Umgebung`,
      `Lokale Betreuung aus ${city.region}`,
    ]),

    /** 5. Local-Section Lead (nach city.description) */
    localSectionLead: v([
      `Als lokaler Webdesigner kenne ich die Region und die Bedürfnisse der Unternehmen vor Ort. Ob in ${city.name} oder den umliegenden Orten wie {nearby} – ich bin Ihr persönlicher Ansprechpartner für professionelles Webdesign.`,
      `Die Region ${city.region} ist mein Zuhause. Ich verstehe, was Firmen in ${city.name} brauchen – von der digitalen Visitenkarte bis zur Verkaufsmaschine. In {nearby} und darüber hinaus.`,
      `Von ${city.name} aus betreue ich Unternehmen in der ganzen Region. Ob Sie in {nearby} oder anderswo in ${city.region} ansässig sind – Webdesign mit lokalem Know-how.`,
      `Ich bin vor Ort für Sie da: in ${city.name}, {nearby} und der gesamten Region ${city.region}. Professionelles Webdesign aus der Nähe – ohne lange Wege.`,
    ]),

    /** 6. CTA-Überschrift */
    ctaHeading: v([
      `Bereit für Ihre neue Website?`,
      `Starten wir Ihr Webprojekt in ${city.name}?`,
      `Zeit für Ihr professionelles Webdesign?`,
      `Ihre Website – nächster Schritt?`,
    ]),

    /** 7. CTA-Absatz */
    ctaParagraph: v([
      `Lassen Sie uns in einem kostenlosen Erstgespräch besprechen, wie ich Ihrem Unternehmen in ${city.name} helfen kann, online erfolgreicher zu werden.`,
      `Kostenloses Beratungsgespräch – ob in ${city.name} oder online. Gemeinsam finden wir die beste Strategie für Ihr Webprojekt.`,
      `Erstgespräch unverbindlich: Wir besprechen, wie Ihr Business in ${city.name} und ${city.region} von professionellem Webdesign profitiert.`,
      `Sprechen wir über Ihre Ziele – persönlich oder per Video. Als Webdesigner in ${city.name} hole ich Sie da ab, wo Sie stehen.`,
    ]),

    /** 8. Benefits – variierte Formulierungen für Duplikat-Vermeidung */
    benefits: [
      v([
        'Kostenloses Erstgespräch vor Ort oder online',
        'Unverbindliches Kennenlerngespräch – bei Ihnen oder digital',
        'Beratung auf Augenhöhe – kostenfrei und unverbindlich',
        'Erstgespräch zum Nulltarif – persönlich oder per Videocall',
      ]),
      v([
        'Transparente Preise ohne versteckte Kosten',
        'Feste Preise – keine Überraschungen am Ende',
        'Klare Kostentransparenz von Anfang an',
        'Preise, die Sie planen können – ohne versteckte Posten',
      ]),
      v([
        'Schnelle Umsetzung Ihres Projekts',
        'Zügige Realisierung – kein endloses Warten',
        'Zeitnahe Fertigstellung Ihres Webauftritts',
        'Rasche Umsetzung, damit Sie schnell live gehen',
      ]),
      v([
        'Persönlicher Ansprechpartner',
        'Ein fester Kontakt für alle Ihre Fragen',
        'Ihr direkter Draht zum Webdesigner',
        'Ein Ansprechpartner – von Anfang bis Ende',
      ]),
    ],
  }
}

/**
 * 8 Text-Varianten – stadt-spezifisch für Darmstadt/Pfungstadt, sonst Varianten
 */
export function getCityPageTexts(city: City) {
  const base = getCityPageTextsBase(city)
  const overrides = citySpecificTexts[city.slug]
  if (overrides) {
    return { ...base, ...overrides }
  }
  return base
}

/** Helper: Local-Section-Text mit nearby places */
export function getLocalSectionText(city: City): string {
  const texts = getCityPageTexts(city)
  const nearby = city.nearbyPlaces.slice(0, 3).join(', ')
  return texts.localSectionLead.replace('{nearby}', nearby)
}

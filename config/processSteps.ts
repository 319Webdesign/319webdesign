/**
 * Prozess-Schritt-Texte – stadt-spezifische Varianten gegen Duplicate Content.
 * Jede Stadt (Darmstadt, Pfungstadt, Griesheim, Weiterstadt) erhält einzigartigen Content.
 */

export type ProcessStepKey = 'analyse' | 'design' | 'inhalte' | 'entwicklung' | 'begleitung'

export interface ProcessStepTexts {
  analyse: string
  design: string
  inhalte: string
  entwicklung: string
  begleitung: string
}

/** Varianten pro Kontext – radikal unterschiedlich gegen Duplicate Content (Analyse, Design, Next.js/Entwicklung) */
const processStepVariants: Record<string, ProcessStepTexts> = {
  darmstadt: {
    analyse:
      'Die Wissenschaftsstadt verlangt technische Exzellenz. Wir prüfen Ihr Umfeld, definieren klare Ziele und positionieren Sie vor IT-Firmen und Premium-Maklern – kein Generics.',
    design:
      'Visuelle Klarheit trifft Konversion: Farben, Typografie und Layout, die Vertrauen schaffen. Darmstadts Tech-Zielgruppe erwartet moderne, aufgeräumte Oberflächen.',
    inhalte:
      'Branchenspezifische Texte – ob Tech-KMU oder Immobilienmakler. Keywords und Mehrwert so formuliert, dass Besucher handeln statt abspringen.',
    entwicklung:
      'Next.js als Fundament: Server-Side-Rendering, optimiertes Caching, PageSpeed 99/100. Eine Engine, die läuft – kein Prototyp, sondern produktionsreif.',
    begleitung:
      'Post-Launch: Monitoring, Anpassungen und kontinuierliche Optimierung. Ihr digitaler Partner bleibt erreichbar.',
  },
  pfungstadt: {
    analyse:
      'Handwerker und Makler in Pfungstadt konkurrieren anders. Wir ermitteln Ihre Alleinstellungsmerkmale und wie Sie sich vom Wettbewerb vor Ort abheben.',
    design:
      'Warm, vertrauenswürdig, nah am Kunden: Ein Erscheinungsbild, das zu Handwerk und regionalem Makler passt. Keine sterile Agentur-Ästhetik.',
    inhalte:
      'Sprache, die ankommt: Nah, verständlich, ohne Fachchinesisch. Texte, die Einwohner von Pfungstadt und Umgebung überzeugen.',
    entwicklung:
      'Stabil, schnell, wartbar: Next.js-basierte Websites mit kurzen Ladezeiten. Für Betriebe, die keine Zeit für technische Probleme haben.',
    begleitung:
      'Nach dem Start: Updates, Backups, Support – damit Ihre Website zuverlässig im Einsatz bleibt.',
  },
  griesheim: {
    analyse:
      'Zwischen Griesheim und Darmstadt: Standortvorteile nutzen. Wir analysieren Ihre Zielgruppe und den regionalen Markt – nicht die gesamte Republik.',
    design:
      'Zielgruppengerecht und professionell: Ein Design, das Pendler und lokale Kunden anspricht, ohne überladen zu wirken.',
    inhalte:
      'Regional verankert: Inhalte, die Griesheim und Umgebung ansprechen. Suchmaschinen finden Sie – Kunden vertrauen Ihnen.',
    entwicklung:
      'Next.js für maximale Geschwindigkeit: Schnelle Seiten, klare Struktur. Technisch auf dem Stand, den moderne Nutzer erwarten.',
    begleitung:
      'Go-live ist kein Endpunkt. Wir sichern Ihre Präsenz mit regelmäßigen Updates und technischem Support.',
  },
  weiterstadt: {
    analyse:
      'B2B und Industrie brauchen andere Ansprache. Wir definieren Ihre Kernziele und analysieren, wie Wettbewerber in Weiterstadt und Logistik-Drehkreuzen auftreten.',
    design:
      'Sachlich, seriös, conversion-orientiert: Ein Design für Geschäftskunden und Partner – kein Consumer-Flair, sondern Vertrauen durch Klarheit.',
    inhalte:
      'Professionelle Texte für B2B: Fachsprache, wo nötig – verständlich, immer. Inhalte, die Kooperationspartner und Kunden überzeugen.',
    entwicklung:
      'Enterprise-taugliche Basis: Next.js, Performance, Skalierbarkeit. Webdesign für Unternehmen, die langfristig planen.',
    begleitung:
      'Strategische Begleitung nach dem Launch: Optimierung, neue Features, technischer Support – auf Augenhöhe.',
  },
  immobilienmakler: {
    analyse:
      'Makler-Websites leben von Objektpräsentation und Lead-Formularen. Wir prüfen Ihre Zielgruppe, Wettbewerber und wie onOffice/FlowFact optimal genutzt werden.',
    design:
      'Objekte im Fokus, Vertrauen im Vordergrund: Design für Makler, das Eigentümer und Käufer anspricht – klar, professionell, konversionsstark.',
    inhalte:
      'Immobiliensprache mit Mehrwert: Texte für Makler, die ranken und Mandate generieren. Lokal verankert, suchmaschinenoptimiert.',
    entwicklung:
      'Next.js mit Schnittstellen: onOffice, FlowFact, OpenImmo – Objekte automatisiert, Ladezeiten minimal, PageSpeed 99/100.',
    begleitung:
      'Wartung, Updates, Support: Damit Ihre Makler-Website stets aktuell und technisch einwandfrei bleibt.',
  },
  /** Fallback für Startseite */
  default: {
    analyse:
      'Wir starten mit Ihren Zielen und dem Blick auf die Konkurrenz. Kein Schema F – jede Strategie wird individuell entwickelt.',
    design:
      'Markengetreu und conversion-orientiert: Ein Look, der Besucher überzeugt und zum Handeln führt. Ob KMU oder Makler.',
    inhalte:
      'Texte, die ranken und überzeugen. Lokale Expertise, klare Botschaften – kein Fülltext, sondern Mehrwert für Besucher und Suchmaschinen.',
    entwicklung:
      'Next.js als Basis: PageSpeed 99/100, schnelle Ladezeiten, stabile Performance. Technik, die im Hintergrund funktioniert.',
    begleitung:
      'Launch abgeschlossen – wir bleiben dran. Optimierung, Updates und Support für dauerhaften Erfolg.',
  },
}

export function getProcessStepTexts(citySlug?: string): ProcessStepTexts {
  if (citySlug && processStepVariants[citySlug]) {
    return processStepVariants[citySlug]
  }
  return processStepVariants.default
}

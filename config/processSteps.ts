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

/** Varianten pro Stadt – unterschiedlicher Satzbau, regionale Bezüge, Keywords */
const processStepVariants: Record<string, ProcessStepTexts> = {
  darmstadt: {
    analyse:
      'Gemeinsam definieren wir Ihre Ziele – und prüfen, wie die Konkurrenz in der Wissenschaftsstadt Darmstadt auftritt. Ihr Webdesign positioniert Sie gezielt.',
    design:
      'Ein Design, das Ihre Marke stärkt und Besucher zum Handeln führt. Für KMUs und Immobilienmakler in Darmstadt: psychologisch auf Konversion optimiert.',
    inhalte:
      'Starke Texte, die in Darmstadt und Umgebung überzeugen. Lokale Expertise für KMUs und Immobilienmakler – inhaltlich und suchmaschinenoptimiert.',
    entwicklung:
      'Next.js und moderne Technik: PageSpeed 99/100 und schnelle Ladezeiten. Webdesign in Darmstadt, das technisch überzeugt und zuverlässig läuft.',
    begleitung:
      'Nach dem Go-live optimieren wir kontinuierlich – für dauerhaften Erfolg. Ihr Partner für Wachstum vor Ort.',
  },
  pfungstadt: {
    analyse:
      'Wir schärfen Ihre Ziele und analysieren den Wettbewerb in Pfungstadt und Umgebung. So positionieren wir Ihr Webdesign gezielt in der Region.',
    design:
      'Ein Look, der zu Ihrer Marke passt und Besucher überzeugt. Ob KMU oder Immobilienmakler in Pfungstadt: konversionsorientiert von der ersten Idee an.',
    inhalte:
      'Überzeugende Inhalte für Pfungstadt. Lokale Expertise für KMUs und Immobilienmakler – Texte, die Vertrauen schaffen und ranken.',
    entwicklung:
      'Technik auf Spitzenniveau: PageSpeed 99/100, schnelle Ladezeiten, stabile Performance. Webdesign in Pfungstadt, das vor Ort überzeugt.',
    begleitung:
      'Der Launch ist der Start. Danach begleiten wir Sie mit Optimierung und Support – für messbaren Erfolg in Pfungstadt und der Region.',
  },
  griesheim: {
    analyse:
      'Zuerst Ihre Ziele, dann der Blick auf die Konkurrenz in Griesheim und westlich von Darmstadt. So setzt sich Ihr Webdesign vor Ort ab.',
    design:
      'Design, das zu Ihrer Marke passt und Besucher zum Handeln bringt. Für KMUs in Griesheim und Umgebung: konversionsorientiert und zielgerichtet.',
    inhalte:
      'Texte mit lokalem Bezug – für Griesheim. KMU und Immobilienmakler profitieren von Expertise, die vor Ort zählt.',
    entwicklung:
      'PageSpeed 99/100 und optimierte Performance. Webdesign in Griesheim, das technisch stabil und schnell läuft – für Ihre Sichtbarkeit.',
    begleitung:
      'Nach dem Launch bleiben wir an Ihrer Seite: Updates, Optimierung und Support – für dauerhaften Erfolg in Griesheim und der Region.',
  },
  weiterstadt: {
    analyse:
      'Wir legen Ihre Ziele fest und prüfen die Konkurrenz in Weiterstadt und der Region. Ihr Webdesign wird gezielt für den Standort positioniert.',
    design:
      'Ein Erscheinungsbild, das Ihre Marke widerspiegelt und Besucher überzeugt. Für Unternehmen in Weiterstadt: konversionsoptimiert und lokal wirksam.',
    inhalte:
      'Verkaufsstarke Inhalte für Weiterstadt. Lokale Expertise für KMUs und Immobilienmakler – Texte, die ranken und überzeugen.',
    entwicklung:
      'Moderne Technik für maximale Performance: PageSpeed 99/100. Webdesign in Weiterstadt, das schnell läuft und technisch überzeugt.',
    begleitung:
      'Launch abgeschlossen – Optimierung geht weiter. Wir begleiten Sie mit Strategie und Support für Erfolg in Weiterstadt und Umgebung.',
  },
  /** Fallback für Startseite / allgemeine Nutzung */
  default: {
    analyse:
      'Zuerst schärfen wir Ihre Ziele – und prüfen, wie die Konkurrenz in Darmstadt und Pfungstadt auftritt. So positionieren wir Ihr Webdesign gezielt vor Ort.',
    design:
      'Ein Look, der zu Ihrer Marke passt und Besucher zum Handeln bewegt. Ob KMU oder Immobilienmakler: konversionsorientiert von Anfang an.',
    inhalte:
      'Überzeugende Texte statt Füllwörter. Gerade für KMUs und Immobilienmakler zählt lokale Expertise – die bringen wir in Ihre Inhalte.',
    entwicklung:
      'Moderne Technik für Spitzenergebnisse: PageSpeed 99/100, schnelle Ladezeiten und stabile Performance – für Webdesign, das in Pfungstadt und der Region überzeugt.',
    begleitung:
      'Der Launch ist erst der Start. Danach optimieren wir gemeinsam – mit Blick auf Ihre Ziele.',
  },
}

export function getProcessStepTexts(citySlug?: string): ProcessStepTexts {
  if (citySlug && processStepVariants[citySlug]) {
    return processStepVariants[citySlug]
  }
  return processStepVariants.default
}

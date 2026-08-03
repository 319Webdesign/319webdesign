export interface City {
  slug: string
  name: string
  region: string
  description: string
  keywords: string[]
  population?: string
  nearbyPlaces: string[]
}

export const cities: Record<string, City> = {
  darmstadt: {
    slug: 'darmstadt',
    name: 'Darmstadt',
    region: 'Umgebung',
    description: 'Die Wissenschaftsstadt Darmstadt ist bekannt für Innovation und Technologie.',
    keywords: [
      'Webdesign Darmstadt',
      'Webdesigner Darmstadt',
      'Suchmaschinenoptimierung Darmstadt',
      'SEO Experte Darmstadt',
      'Webentwicklung Darmstadt',
    ],
    population: '160.000',
    nearbyPlaces: ['Pfungstadt', 'Griesheim', 'Weiterstadt', 'Eberstadt'],
  },
  pfungstadt: {
    slug: 'pfungstadt',
    name: 'Pfungstadt',
    region: 'Umgebung',
    description: 'Pfungstadt liegt südlich von Darmstadt und bietet eine ideale Mischung aus städtischem Leben und ländlicher Idylle.',
    keywords: [
      'Webdesign Pfungstadt',
      'Webdesigner Pfungstadt',
      'Suchmaschinenoptimierung Pfungstadt',
      'SEO Pfungstadt',
      'Webentwicklung Pfungstadt',
    ],
    population: '25.000',
    nearbyPlaces: ['Darmstadt', 'Griesheim', 'Eberstadt', 'Seeheim-Jugenheim'],
  },
  griesheim: {
    slug: 'griesheim',
    name: 'Griesheim',
    region: 'Umgebung',
    description: 'Griesheim westlich von Darmstadt bietet optimale Bedingungen für lokale Unternehmen und Selbstständige.',
    keywords: [
      'Webdesign Griesheim',
      'Website erstellen Griesheim',
      'SEO Griesheim',
      'Webentwicklung Griesheim',
    ],
    population: '27.000',
    nearbyPlaces: ['Darmstadt', 'Pfungstadt', 'Weiterstadt', 'Riedstadt'],
  },
  weiterstadt: {
    slug: 'weiterstadt',
    name: 'Weiterstadt',
    region: 'Umgebung',
    description: 'Weiterstadt ist ein wichtiger Wirtschaftsstandort südlich von Darmstadt mit vielen mittelständischen Unternehmen.',
    keywords: [
      'Webdesign Weiterstadt',
      'Website erstellen Weiterstadt',
      'SEO Weiterstadt',
      'Webentwicklung Weiterstadt',
    ],
    population: '26.000',
    nearbyPlaces: ['Darmstadt', 'Griesheim', 'Mörfelden-Walldorf', 'Erzhausen'],
  },
  trebur: {
    slug: 'trebur',
    name: 'Trebur',
    region: 'Rhein-Main',
    description:
      'Trebur liegt im Kreis Groß-Gerau zwischen Mainz, Rüsselsheim und Darmstadt – mit den Ortsteilen Astheim und Geinsheim sowie kurzen Wegen in die gesamte Rhein-Main-Region.',
    keywords: [
      'Webdesign Trebur',
      'Webdesigner Trebur',
      'Website erstellen Trebur',
      'Homepage Trebur',
      'Internetagentur Trebur',
      'SEO Trebur',
      'Astheim',
      'Geinsheim',
      'Groß-Gerau',
      'Nauheim',
      'Rüsselsheim',
      'Ginsheim-Gustavsburg',
    ],
    population: '13.000',
    nearbyPlaces: [
      'Astheim',
      'Geinsheim',
      'Groß-Gerau',
      'Nauheim',
      'Rüsselsheim',
      'Ginsheim-Gustavsburg',
    ],
  },
}

export const getAllCitySlugs = (): string[] => {
  return Object.keys(cities)
}

export const getCityBySlug = (slug: string): City | undefined => {
  return cities[slug]
}

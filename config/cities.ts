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
    region: 'Südhessen',
    description: 'Die Wissenschaftsstadt Darmstadt ist Zentrum der Region Südhessen und bekannt für Innovation und Technologie.',
    keywords: [
      'Webdesign Darmstadt',
      'Website erstellen Darmstadt',
      'SEO Darmstadt',
      'Webentwicklung Darmstadt',
    ],
    population: '160.000',
    nearbyPlaces: ['Pfungstadt', 'Griesheim', 'Weiterstadt', 'Eberstadt'],
  },
  pfungstadt: {
    slug: 'pfungstadt',
    name: 'Pfungstadt',
    region: 'Südhessen',
    description: 'Pfungstadt liegt südlich von Darmstadt und bietet eine ideale Mischung aus städtischem Leben und ländlicher Idylle.',
    keywords: [
      'Webdesign Pfungstadt',
      'Website erstellen Pfungstadt',
      'SEO Pfungstadt',
      'Webentwicklung Pfungstadt',
    ],
    population: '25.000',
    nearbyPlaces: ['Darmstadt', 'Griesheim', 'Eberstadt', 'Seeheim-Jugenheim'],
  },
  griesheim: {
    slug: 'griesheim',
    name: 'Griesheim',
    region: 'Südhessen',
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
    region: 'Südhessen',
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
}

export const getAllCitySlugs = (): string[] => {
  return Object.keys(cities)
}

export const getCityBySlug = (slug: string): City | undefined => {
  return cities[slug]
}

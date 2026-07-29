export type Paket = {
  name: string
  subtitle: string
  preisAb: number
  highlight: boolean
  badge?: string
  geeignetFuer: string
  enthalten: readonly string[]
  ctaLabel: string
}

export const pakete: Paket[] = [
  {
    name: 'Start',
    subtitle: 'Für kleine Unternehmen, die professionell online gehen möchten.',
    preisAb: 999,
    highlight: false,
    geeignetFuer: 'Einzelunternehmer, kleine Dienstleister und einfache Firmenwebsites',
    enthalten: [
      '1 Seite',
      'Individuelles Design',
      'Mobile Optimierung',
      'Kontaktmöglichkeit',
      'DSGVO-Basis',
      'Persönlicher Ansprechpartner',
    ],
    ctaLabel: 'Start-Paket anfragen',
  },
  {
    name: 'Wachstum',
    subtitle: 'Für Unternehmen, die sichtbar werden und mehr Anfragen gewinnen möchten.',
    preisAb: 1299,
    badge: 'Am häufigsten gewählt',
    highlight: true,
    geeignetFuer: 'Lokale Unternehmen, die professioneller auftreten und online mehr Anfragen gewinnen möchten',
    enthalten: [
      'Bis zu 5 Unterseiten',
      'Individuelle Seitenstruktur',
      'Lokale SEO-Basis',
      'Conversionstarke Inhalte',
      'Schnelle Ladezeiten',
      'DSGVO-Basis',
      'Persönlicher Ansprechpartner',
    ],
    ctaLabel: 'Wachstums-Paket anfragen',
  },
  {
    name: 'Premium',
    subtitle: 'Für größere Anforderungen, individuelle Strukturen und langfristige Strategie.',
    preisAb: 1699,
    highlight: false,
    geeignetFuer: 'Unternehmen mit größerem Umfang, mehreren Leistungen oder individuellen Anforderungen',
    enthalten: [
      'Individuelle Seitenanzahl',
      'Umfangreiche Seitenstruktur',
      'SEO-Optimierung',
      'Performance-Optimierung',
      'System-Anbindungen möglich',
      'Strategische Beratung',
      'Langfristige Begleitung',
    ],
    ctaLabel: 'Premium-Paket anfragen',
  },
]

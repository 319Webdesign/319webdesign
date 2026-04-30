import type { LucideIcon } from 'lucide-react'
import { FileText, Infinity, Layers } from 'lucide-react'

export type Paket = {
  name: string
  subtitle: string
  preisAb: number
  highlight: boolean
  badge?: string
  featureIntro?: { icon: LucideIcon; text: string }
  merkmale: readonly string[]
  nichtEnthalten?: readonly string[]
}

export const pakete: Paket[] = [
  {
    name: 'Basic',
    subtitle: 'Ideal für Freiberufler & Kleinunternehmen',
    preisAb: 749,
    highlight: false,
    featureIntro: { icon: FileText, text: '1 Seite' },
    merkmale: [
      'Website-Erstellung',
      'Individuelles Design',
      'Langfristige Betreuung',
      'Persönlicher Ansprechpartner',
      'DSGVO',
      'Impressum & Datenschutz',
    ],
    nichtEnthalten: [
      'SEO-Optimierung',
      'Texterstellung',
      'Google Top-Platzierungen',
      'Ausführliche Statistiken',
      'Individuelle Funktionen',
    ],
  },
  {
    name: 'Standard',
    subtitle: 'Das beliebteste Paket für wachsende Unternehmen',
    preisAb: 1199,
    badge: 'Am beliebtesten',
    highlight: true,
    featureIntro: { icon: Layers, text: '+ Bis zu 5 Unterseiten' },
    merkmale: [
      'Website-Erstellung',
      'Individuelles Design',
      'Langfristige Betreuung',
      'Persönlicher Ansprechpartner',
      'DSGVO',
      'Impressum & Datenschutz',
      'SEO-Optimierung',
      'Texterstellung',
      'Individuelle Funktionen',
    ],
    nichtEnthalten: ['Google Top-Platzierungen', 'Ausführliche Statistiken'],
  },
  {
    name: 'Premium',
    subtitle: 'All-Inclusive für mittelständische & große Unternehmen',
    preisAb: 1499,
    highlight: false,
    featureIntro: { icon: Infinity, text: 'Unbegrenzte Seitenanzahl' },
    merkmale: [
      'Website-Erstellung',
      'Individuelles Design',
      'Langfristige Betreuung',
      'Persönlicher Ansprechpartner',
      'DSGVO',
      'Impressum & Datenschutz',
      'SEO-Optimierung',
      'Texterstellung',
      'Individuelle Funktionen',
      'Google Top-Platzierungen',
      'Ausführliche Statistiken',
    ],
  },
]

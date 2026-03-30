/**
 * Logos für die Trust-Leiste unter dem Hero (Dateien in public/kunden-logo/).
 * name = Anzeige- und Alt-Text. logoClass optional bei Bedarf.
 */
export type ClientLogo = {
  name: string
  logoSrc: string
  /** Zusätzliche Tailwind-Klassen fürs <Image> (z. B. brightness-0 bei weißem PNG) */
  logoClass?: string
}

export const clientLogos: ClientLogo[] = [
  {
    name: 'Heinerfilm',
    /** heller Schriftzug: CSS brightness-0 → schwarze Darstellung auf hellem Balken */
    logoSrc: '/kunden-logo/Heinerfilm_Schriftzug_weiss.png',
    logoClass: 'brightness-0',
  },
  { name: 'Tierhotel', logoSrc: '/kunden-logo/tierhotel.png' },
  { name: '1klang', logoSrc: '/kunden-logo/logo.png' },
  { name: 'da-sound', logoSrc: '/kunden-logo/logo-neu.png' },
  { name: 'Logo (SVG)', logoSrc: '/kunden-logo/logo.svg' },
]

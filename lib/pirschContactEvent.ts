type PirschSend = (
  name: string,
  options?: { duration?: number; meta?: Record<string, string> }
) => void

function getPirsch(): PirschSend | undefined {
  if (typeof window === 'undefined') return undefined
  const fn = (window as unknown as { pirsch?: PirschSend }).pirsch
  return typeof fn === 'function' ? fn : undefined
}

const SEITE_LABEL: Record<'startseite' | 'kontakt' | 'unser-angebot', string> = {
  startseite: 'Startseite',
  kontakt: 'Kontakt',
  'unser-angebot': 'Unser Angebot',
}

/** Pirsch-Event nach erfolgreichem Kontaktformular (pa.js muss geladen sein). */
export function trackContactFormSubmit(page: keyof typeof SEITE_LABEL) {
  const pirsch = getPirsch()
  if (!pirsch) return
  pirsch('Kontaktformular gesendet', {
    duration: 1,
    meta: {
      Seite: SEITE_LABEL[page],
    },
  })
}

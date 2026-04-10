type PirschSend = (
  name: string,
  options?: { duration?: number; meta?: Record<string, string> }
) => void

function getPirsch(): PirschSend | undefined {
  if (typeof window === 'undefined') return undefined
  const fn = (window as unknown as { pirsch?: PirschSend }).pirsch
  return typeof fn === 'function' ? fn : undefined
}

/** Pirsch-Event nach erfolgreichem Kontaktformular (pa.js muss geladen sein). */
export function trackContactFormSubmit(page: 'startseite' | 'kontakt') {
  const pirsch = getPirsch()
  if (!pirsch) return
  pirsch('Kontaktformular gesendet', {
    duration: 1,
    meta: {
      Seite: page === 'startseite' ? 'Startseite' : 'Kontakt',
    },
  })
}

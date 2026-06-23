type GtagEventParams = {
  event_callback?: () => void
  event_timeout?: number
  [key: string]: unknown
}

type Gtag = (command: 'event', eventName: string, params?: GtagEventParams) => void

function getGtag(): Gtag | undefined {
  if (typeof window === 'undefined') return undefined
  const fn = (window as unknown as { gtag?: Gtag }).gtag
  return typeof fn === 'function' ? fn : undefined
}

/** Google-Analytics-Conversion nach erfolgreichem Kontaktformular (gtag.js muss geladen sein). */
export function trackGtagContactConversion(onComplete?: () => void) {
  const gtag = getGtag()
  if (!gtag) {
    onComplete?.()
    return
  }

  gtag('event', 'conversion_event_request_quote', {
    event_callback: () => {
      onComplete?.()
    },
    event_timeout: 2000,
  })
}

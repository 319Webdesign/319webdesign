type PirschSend = (
  name: string,
  options?: { duration?: number; meta?: Record<string, string> }
) => void

type Gtag = (command: 'event', eventName: string, params?: Record<string, unknown>) => void

function getPirsch(): PirschSend | undefined {
  if (typeof window === 'undefined') return undefined
  const fn = (window as unknown as { pirsch?: PirschSend }).pirsch
  return typeof fn === 'function' ? fn : undefined
}

function getGtag(): Gtag | undefined {
  if (typeof window === 'undefined') return undefined
  const fn = (window as unknown as { gtag?: Gtag }).gtag
  return typeof fn === 'function' ? fn : undefined
}

export type WebsiteCheckTrackEvent =
  | 'website_check_popup_opened'
  | 'website_check_popup_closed'
  | 'website_check_form_started'
  | 'website_check_form_submitted'

/** Nutzt vorhandenes Pirsch (+ optional gtag), baut kein neues Tracking-System. */
export function trackWebsiteCheckEvent(event: WebsiteCheckTrackEvent) {
  const pirsch = getPirsch()
  if (pirsch) {
    pirsch(event, { duration: 1 })
  }

  const gtag = getGtag()
  if (gtag) {
    gtag('event', event)
  }
}

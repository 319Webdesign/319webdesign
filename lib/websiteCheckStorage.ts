import { WEBSITE_CHECK_CONFIG } from './websiteCheckConfig'

const { storage } = WEBSITE_CHECK_CONFIG

function canUseStorage(): boolean {
  return typeof window !== 'undefined'
}

export function hasSubmittedWebsiteCheck(): boolean {
  if (!canUseStorage()) return false
  try {
    return localStorage.getItem(storage.submittedKey) === '1'
  } catch {
    return false
  }
}

export function markWebsiteCheckSubmitted(): void {
  if (!canUseStorage()) return
  try {
    localStorage.setItem(storage.submittedKey, '1')
    localStorage.setItem(
      storage.dismissedUntilKey,
      String(Date.now() + storage.dismissDays * 24 * 60 * 60 * 1000)
    )
    sessionStorage.setItem(storage.sessionShownKey, '1')
  } catch {
    /* ignore quota / private mode */
  }
}

export function isWebsiteCheckDismissed(): boolean {
  if (!canUseStorage()) return false
  try {
    const raw = localStorage.getItem(storage.dismissedUntilKey)
    if (!raw) return false
    const until = Number(raw)
    if (!Number.isFinite(until)) return false
    return Date.now() < until
  } catch {
    return false
  }
}

export function markWebsiteCheckDismissed(): void {
  if (!canUseStorage()) return
  try {
    localStorage.setItem(
      storage.dismissedUntilKey,
      String(Date.now() + storage.dismissDays * 24 * 60 * 60 * 1000)
    )
    sessionStorage.setItem(storage.sessionShownKey, '1')
  } catch {
    /* ignore */
  }
}

export function hasShownWebsiteCheckThisSession(): boolean {
  if (!canUseStorage()) return false
  try {
    return sessionStorage.getItem(storage.sessionShownKey) === '1'
  } catch {
    return false
  }
}

export function markWebsiteCheckShownThisSession(): void {
  if (!canUseStorage()) return
  try {
    sessionStorage.setItem(storage.sessionShownKey, '1')
  } catch {
    /* ignore */
  }
}

/** Auto-Popup darf erscheinen? (nicht submitted, nicht dismissed, nicht schon diese Session) */
export function canAutoShowWebsiteCheck(): boolean {
  if (hasSubmittedWebsiteCheck()) return false
  if (isWebsiteCheckDismissed()) return false
  if (hasShownWebsiteCheckThisSession()) return false
  return true
}

/** Alte Website-Check Storage-Keys (v1/v2) entfernen. */
export function clearLegacyWebsiteCheckStorage(): void {
  if (!canUseStorage()) return
  try {
    ;[
      'website-check-dismissed-until',
      'website-check-submitted',
      'website-check-shown-session',
      'website-check-dismissed-until-v2',
      'website-check-submitted-v2',
      'website-check-shown-session-v2',
    ].forEach((key) => {
      localStorage.removeItem(key)
      sessionStorage.removeItem(key)
    })
  } catch {
    /* ignore */
  }
}

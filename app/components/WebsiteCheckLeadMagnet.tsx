'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import WebsiteCheckCtaBox from './WebsiteCheckCtaBox'
import WebsiteCheckModal from './WebsiteCheckModal'
import { WEBSITE_CHECK_CONFIG } from '@/lib/websiteCheckConfig'
import {
  canAutoShowWebsiteCheck,
  clearLegacyWebsiteCheckStorage,
  markWebsiteCheckDismissed,
  markWebsiteCheckShownThisSession,
} from '@/lib/websiteCheckStorage'
import { trackWebsiteCheckEvent } from '@/lib/websiteCheckTracking'

const { timing } = WEBSITE_CHECK_CONFIG

function isMobileViewport(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia(`(max-width: ${timing.mobileMaxWidthPx}px)`).matches
}

function getScrollRatio(): number {
  const doc = document.documentElement
  const scrollTop = window.scrollY || doc.scrollTop
  const scrollable = Math.max(1, doc.scrollHeight - window.innerHeight)
  return Math.min(1, Math.max(0, scrollTop / scrollable))
}

export default function WebsiteCheckLeadMagnet() {
  const [isOpen, setIsOpen] = useState(false)
  const openedRef = useRef(false)
  const mobileTimerReadyRef = useRef(false)
  const mobileScrollReadyRef = useRef(false)

  const closePopup = useCallback(() => {
    setIsOpen(false)
    markWebsiteCheckDismissed()
    trackWebsiteCheckEvent('website_check_popup_closed')
  }, [])

  const openManual = useCallback(() => {
    setIsOpen(true)
    trackWebsiteCheckEvent('website_check_popup_opened')
  }, [])

  const openAuto = useCallback(() => {
    if (openedRef.current) return
    if (!canAutoShowWebsiteCheck()) return
    openedRef.current = true
    setIsOpen(true)
    markWebsiteCheckShownThisSession()
    trackWebsiteCheckEvent('website_check_popup_opened')
  }, [])

  useEffect(() => {
    clearLegacyWebsiteCheckStorage()
    if (!canAutoShowWebsiteCheck()) return

    let cancelled = false
    let desktopTimer: ReturnType<typeof setTimeout> | undefined
    let mobileTimer: ReturnType<typeof setTimeout> | undefined

    const tryAutoOpen = () => {
      if (cancelled || openedRef.current) return
      openAuto()
    }

    const onScroll = () => {
      if (cancelled || openedRef.current) return

      const ratio = getScrollRatio()
      const mobile = isMobileViewport()

      if (mobile) {
        if (ratio >= timing.mobileScrollRatio) {
          mobileScrollReadyRef.current = true
        }
        if (mobileTimerReadyRef.current && mobileScrollReadyRef.current) {
          tryAutoOpen()
        }
        return
      }

      if (ratio >= timing.desktopScrollRatio) {
        tryAutoOpen()
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      if (cancelled || openedRef.current) return
      if (isMobileViewport()) return
      if (e.clientY < 10 && e.relatedTarget === null) {
        tryAutoOpen()
      }
    }

    if (isMobileViewport()) {
      mobileTimer = setTimeout(() => {
        mobileTimerReadyRef.current = true
        if (mobileScrollReadyRef.current) tryAutoOpen()
      }, timing.mobileDelayMs)
    } else {
      desktopTimer = setTimeout(() => {
        tryAutoOpen()
      }, timing.desktopDelayMs)
      document.addEventListener('mouseout', onMouseOut)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      cancelled = true
      if (desktopTimer) clearTimeout(desktopTimer)
      if (mobileTimer) clearTimeout(mobileTimer)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mouseout', onMouseOut)
    }
  }, [openAuto])

  return (
    <>
      <WebsiteCheckCtaBox onOpen={openManual} />
      <WebsiteCheckModal isOpen={isOpen} onClose={closePopup} />
    </>
  )
}

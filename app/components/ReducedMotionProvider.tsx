'use client'

import { useState, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'

const MOBILE_BREAKPOINT = 768

export default function ReducedMotionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
    setReduceMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return (
    <MotionConfig reducedMotion={reduceMotion ? 'always' : 'never'}>
      {children}
    </MotionConfig>
  )
}

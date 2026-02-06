'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'

const MOBILE_BREAKPOINT = 768

const ReduceMotionContext = createContext(false)

export function useReduceMotion() {
  return useContext(ReduceMotionContext)
}

export default function ReducedMotionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // Initial true = Mobile-Annahme, verhindert Flackern beim ersten Paint
  const [reduceMotion, setReduceMotion] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
    setReduceMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return (
    <ReduceMotionContext.Provider value={reduceMotion}>
      <MotionConfig reducedMotion={reduceMotion ? 'always' : 'never'}>
        {children}
      </MotionConfig>
    </ReduceMotionContext.Provider>
  )
}

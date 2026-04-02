'use client'

import { createContext, useContext, useSyncExternalStore } from 'react'
import { MotionConfig } from 'framer-motion'

const MOBILE_BREAKPOINT = 768

const ReduceMotionContext = createContext(true)

export function useReduceMotion() {
  return useContext(ReduceMotionContext)
}

function subscribeNarrowViewport(onChange: () => void) {
  const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

function getNarrowViewportSnapshot() {
  return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches
}

/** Entspricht dem früheren useState(true): SSR und Hydration nehmen „schmal“ an, kein Mismatch. */
function getNarrowViewportServerSnapshot() {
  return true
}

export default function ReducedMotionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const reduceMotion = useSyncExternalStore(
    subscribeNarrowViewport,
    getNarrowViewportSnapshot,
    getNarrowViewportServerSnapshot
  )

  return (
    <ReduceMotionContext.Provider value={reduceMotion}>
      <MotionConfig reducedMotion={reduceMotion ? 'always' : 'never'}>
        {children}
      </MotionConfig>
    </ReduceMotionContext.Provider>
  )
}

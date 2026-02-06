'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface PerformanceGaugeProps {
  value: number
  maxValue?: number
  color: string
  label: string
  isInView: boolean
  delay?: number
}

export default function PerformanceGauge({
  value,
  maxValue = 100,
  color,
  label,
  isInView,
  delay = 0
}: PerformanceGaugeProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const circumference = 2 * Math.PI * 70 // radius = 70
  const percentage = (value / maxValue) * 100
  const offset = circumference - (percentage / 100) * circumference

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let current = 0
        const increment = value / 60 // 60 frames animation
        const interval = setInterval(() => {
          current += increment
          if (current >= value) {
            setDisplayValue(value)
            clearInterval(interval)
          } else {
            setDisplayValue(Math.floor(current))
          }
        }, 16) // ~60fps
      }, delay)
      return () => clearTimeout(timer)
    } else {
      setDisplayValue(0)
    }
  }, [isInView, value, delay])

  const delayInSeconds = delay / 1000

  return (
    <div className="flex flex-col items-center relative">
      <div className="relative w-48 h-48">
        <svg className="transform -rotate-90 w-48 h-48">
          {/* Background circle */}
          <circle
            cx="96"
            cy="96"
            r="70"
            stroke="currentColor"
            strokeWidth="12"
            fill="none"
            className="text-slate-200"
          />
          {/* Progress circle */}
          <motion.circle
            cx="96"
            cy="96"
            r="70"
            stroke={color}
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
            transition={{ duration: 2, ease: "easeOut", delay: delayInSeconds }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-4xl md:text-5xl font-bold text-slate-900"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 + delayInSeconds, duration: 0.5 }}
          >
            {displayValue}
          </motion.span>
          <span className="text-lg text-slate-600">%</span>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.7 + delayInSeconds, duration: 0.5 }}
        className="text-slate-700 text-center mt-4 max-w-xs font-medium"
      >
        {label}
      </motion.p>
    </div>
  )
}

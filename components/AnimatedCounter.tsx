'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  value: string
  duration?: number
}

function extractNumber(str: string): { prefix: string; num: number; suffix: string } {
  const match = str.match(/^([^0-9]*)([0-9.,]+)(.*)$/)
  if (!match) return { prefix: '', num: 0, suffix: str }
  return {
    prefix: match[1],
    num: parseFloat(match[2].replace(',', '')),
    suffix: match[3],
  }
}

export default function AnimatedCounter({ value, duration = 1800 }: Props) {
  const { prefix, num, suffix } = extractNumber(value)
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          const start = Date.now()
          const tick = () => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(eased * num)
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [num, duration])

  const formatted =
    num % 1 !== 0
      ? display.toFixed(1)
      : Math.floor(display).toLocaleString()

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  )
}

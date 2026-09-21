import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  /** e.g. "5+", "10+", "∞" — non-numeric values render as-is. */
  value: string
  duration?: number
  className?: string
  style?: React.CSSProperties
}

/** Animates a number from 0 → target when it scrolls into view. */
export default function CountUp({ value, duration = 1.4, className, style }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ''
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView || target === null) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000))
      const eased = 1 - Math.pow(1 - t, 3)
      setN(Math.round(eased * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])

  return (
    <span ref={ref} className={className} style={style}>
      {target === null ? value : `${n}${suffix}`}
    </span>
  )
}

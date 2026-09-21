import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface DividerProps {
  /** Accent colour for the line's centre. Defaults to the site accent. */
  color?: string
}

/** Section top divider that draws itself left→right when scrolled into view. */
export default function Divider({ color = '#7c3aed' }: DividerProps) {
  // Observe an un-transformed wrapper; a scaleX(0) element has no area to intersect.
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <div ref={ref} className="absolute top-0 left-6 right-6 md:left-10 md:right-10 h-px">
      <motion.div
        className="h-full w-full"
        style={{
          background: `linear-gradient(90deg, ${color}00, ${color}66 40%, ${color}66 60%, ${color}00)`,
          transformOrigin: 'left',
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView ? 1 : 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}

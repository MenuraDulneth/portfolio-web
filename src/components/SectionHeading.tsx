import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionHeadingProps {
  children: string
  className?: string
}

/**
 * Big section title: each word slides up out of a clip mask when scrolled into
 * view, then cyan/purple glitch slices flicker over it (see .glitch-text in index.css).
 */
export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  // Observe the h2 itself — the words start clipped out of view, so observing them would never fire.
  const ref = useRef<HTMLHeadingElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const words = children.split(' ')

  return (
    <h2
      ref={ref}
      data-text={children}
      className={`hero-heading font-black uppercase leading-none tracking-tight ${inView ? 'glitch-text' : ''} ${className}`}
      style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom" style={{ paddingBottom: '0.08em' }}>
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={{ y: inView ? 0 : '110%' }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </h2>
  )
}

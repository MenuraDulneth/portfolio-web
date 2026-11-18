import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { getLenis, scrollTo } from '../lib/smoothScroll'
import { RESUME_URL } from './ResumeButton'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

/**
 * Slim glass nav that fades in once the hero has scrolled away, so there's
 * still a way to move around the page. Highlights whichever section is
 * currently crossing the middle of the viewport.
 */
export default function StickyNav() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75)
    onScroll()

    // Lenis drives the scrolling, so listen to it directly; the native event
    // is kept as a fallback for when smooth scrolling is off (reduced motion).
    const lenis = getLenis()
    lenis?.on('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      lenis?.off('scroll', onScroll)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const els = SECTIONS
      .map(s => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)
    if (!els.length) return

    // Squeezing the root to a thin band across the middle means only the
    // section under that band counts as intersecting — no scroll maths needed.
    const io = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const go = (id: string) => {
    const el = document.getElementById(id)
    if (el) scrollTo(el)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          key="sticky-nav"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-4 right-4 md:right-6 z-50"
        >
          <div
            className="flex items-center gap-0.5 sm:gap-2 rounded-full px-1.5 sm:px-2 py-1.5"
            style={{
              background: 'rgba(10, 10, 14, 0.72)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
            }}
          >
            {SECTIONS.map(s => {
              const on = active === s.id
              return (
                <button
                  key={s.id}
                  onClick={() => go(s.id)}
                  className="relative px-2.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-[0.12em] sm:tracking-[0.18em] transition-colors duration-300"
                  style={{ color: on ? '#ffffff' : 'rgba(200, 216, 232, 0.55)' }}
                >
                  {on && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'rgba(124, 58, 237, 0.22)',
                        border: '1px solid rgba(124, 58, 237, 0.45)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative">{s.label}</span>
                </button>
              )
            })}

            <span className="hidden sm:block w-px h-4 mx-1" style={{ background: 'rgba(255,255,255,0.12)' }} />

            <a
              href={RESUME_URL}
              download
              title="Download CV"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-[#c8d8e8] opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <Download size={12} />
              CV
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

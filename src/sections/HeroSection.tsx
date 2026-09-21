import { motion } from 'framer-motion'
import ContactButton from '../components/ContactButton'
import Magnetic from '../components/Magnetic'
import { scrollTo as smoothScrollTo } from '../lib/smoothScroll'
import ResumeButton from '../components/ResumeButton'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact']

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) smoothScrollTo(el)
  }

  return (
    <section className="relative h-screen flex flex-col overflow-hidden">

      {/* ── Navbar ── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex justify-between items-center px-5 md:px-12 pt-6 md:pt-7 relative z-20"
      >
        <span className="text-sm font-semibold tracking-widest uppercase text-[#c8d8e8] opacity-60"></span>
        <div className="flex gap-5 sm:gap-8 md:gap-14">
          {NAV_LINKS.map(link => (
            <Magnetic key={link} strength={0.25}>
              <button
                onClick={() => scrollTo(link)}
                className="text-[11px] sm:text-sm font-medium uppercase tracking-widest text-[#c8d8e8] opacity-60 hover:opacity-100 transition-opacity duration-200"
              >
                {link}
              </button>
            </Magnetic>
          ))}
          <Magnetic strength={0.25}>
            <ResumeButton variant="link" className="hidden sm:inline-flex" />
          </Magnetic>
        </div>
      </motion.nav>

      {/* ── Hero content ── */}
      <div className="flex-1 flex flex-col justify-between px-5 md:px-12 pb-8 md:pb-10 relative z-10">

        {/* Top block: eyebrow + MENURA */}
        <div className="mt-10 md:mt-14">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-8 h-px bg-[#7c3aed]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#7c3aed] font-medium">
              Computer Science Undergraduate
            </span>
          </motion.div>

          {/* MENURA */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3.5rem, 16vw, 10rem)', minHeight: '1em' }}
            >
              Menura
            </motion.h1>
          </div>
        </div>

        {/* Middle: Wanniarachchi sweeps across */}
        <div className="overflow-hidden -mt-4 md:-mt-8">
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 'clamp(2.6rem, 11vw, 9.5rem)',
              color: '#06b6d4',
              lineHeight: 1.05,
              marginLeft: 'clamp(16px, 22vw, 340px)',
              letterSpacing: '-0.01em',
            }}
          >
            Wanniarachchi
          </motion.div>
        </div>

        {/* Bottom row: I'M A + tagline left, CONTACT ME right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between mt-6"
        >
          {/* Left: I'M A + tagline stacked */}
          <div className="flex flex-col gap-1">
            <span
              className="text-[#c8d8e8] font-light uppercase tracking-widest opacity-40"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.05rem)' }}
            >
            </span>
            <p
              className="text-[#c8d8e8] font-light uppercase tracking-wide leading-snug opacity-55"
              style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.95rem)', maxWidth: '260px' }}
            >
              Crafting immersive experiences<br />through code, design &amp; games...
            </p>
          </div>

          {/* Right: CV + Contact */}
          <div className="flex flex-wrap items-center gap-3">
            <ResumeButton />
            <ContactButton />
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#c8d8e8] opacity-30">Scroll</span>
        <div className="w-px h-12 relative overflow-hidden opacity-30">
          <motion.div
            className="absolute inset-x-0 bg-gradient-to-b from-[#7c3aed] to-transparent"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            style={{ height: '60%' }}
          />
        </div>
      </motion.div>

    </section>
  )
}

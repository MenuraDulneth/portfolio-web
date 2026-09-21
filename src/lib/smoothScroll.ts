import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

let lenis: Lenis | null = null

/** Starts inertia scrolling once for the whole app. Returns the instance (null under reduced-motion). */
export function startSmoothScroll(): Lenis | null {
  if (lenis) return lenis
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null

  lenis = new Lenis({
    lerp: 0.09,          // lower = floatier; 0.1 is Lenis' default
    wheelMultiplier: 1,
    smoothWheel: true,
  })

  const raf = (time: number) => {
    lenis?.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  return lenis
}

/** Scroll to an element or absolute offset, through Lenis when it's active. */
export function scrollTo(target: HTMLElement | number, immediate = false) {
  if (lenis) {
    lenis.scrollTo(target, { immediate, offset: 0 })
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: immediate ? 'auto' : 'smooth' })
  } else {
    target.scrollIntoView({ behavior: immediate ? 'auto' : 'smooth' })
  }
}

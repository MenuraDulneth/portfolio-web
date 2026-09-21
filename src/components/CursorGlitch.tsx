import { useEffect, useRef } from 'react'

interface Slice {
  x: number
  y: number
  w: number
  h: number
  color: string
  life: number   // seconds remaining
  ttl: number
  flicker: number // toggles visibility every N seconds
}

const COLORS = ['#06b6d4', '#7c3aed', '#ffffff', '#22d3ee', '#a78bfa']
const rand = (min: number, max: number) => min + Math.random() * (max - min)
const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)]

/**
 * Glitch slices that flicker around the cursor as it moves (pointer devices only):
 * horizontal tear bars, RGB-split slivers and the odd stray pixel block,
 * all snapping in/out rather than animating smoothly.
 */
export default function CursorGlitch() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const slices: Slice[] = []
    let raf = 0
    let last = performance.now()
    let prevX = -1, prevY = -1
    let dirty = false

    const resize = () => {
      // 1x resolution on purpose: flat rectangles don't benefit from retina scaling.
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const spawn = (cx: number, cy: number, speed: number) => {
      // Faster movement → more and wider tears.
      const count = Math.min(5, 1 + Math.floor(speed / 14))
      for (let i = 0; i < count; i++) {
        const kind = Math.random()
        const ttl = rand(0.06, 0.22)
        if (kind < 0.55) {
          // horizontal tear bar
          slices.push({
            x: cx + rand(-90, 10), y: cy + rand(-40, 40),
            w: rand(30, 140), h: rand(1, 4),
            color: pick(COLORS), life: ttl, ttl, flicker: rand(0.03, 0.06),
          })
        } else if (kind < 0.85) {
          // RGB-split sliver pair (cyan + purple offset)
          const y = cy + rand(-30, 30), w = rand(16, 60), h = rand(2, 8)
          slices.push({ x: cx + rand(-40, 10) - 4, y, w, h, color: '#06b6d4', life: ttl, ttl, flicker: 0.04 })
          slices.push({ x: cx + rand(-40, 10) + 4, y: y + rand(-2, 2), w, h, color: '#7c3aed', life: ttl, ttl, flicker: 0.05 })
        } else {
          // stray pixel block
          slices.push({
            x: cx + rand(-60, 60), y: cy + rand(-60, 60),
            w: rand(3, 10), h: rand(3, 10),
            color: pick(COLORS), life: ttl * 0.8, ttl, flicker: 0.03,
          })
        }
      }
      if (slices.length > 120) slices.splice(0, slices.length - 120)
    }

    const onMove = (e: MouseEvent) => {
      const dist = prevX < 0 ? 0 : Math.hypot(e.clientX - prevX, e.clientY - prevY)
      prevX = e.clientX; prevY = e.clientY
      if (dist < 2) return
      spawn(e.clientX, e.clientY, dist)
    }

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      if (slices.length === 0 && !dirty) { raf = requestAnimationFrame(tick); return }
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      dirty = slices.length > 0
      ctx.globalCompositeOperation = 'lighter'
      for (let i = slices.length - 1; i >= 0; i--) {
        const s = slices[i]
        s.life -= dt
        if (s.life <= 0) { slices.splice(i, 1); continue }
        // Hard on/off flicker instead of a smooth fade.
        const on = Math.floor((s.ttl - s.life) / s.flicker) % 2 === 0
        if (!on) continue
        ctx.globalAlpha = 0.35 + 0.5 * (s.life / s.ttl)
        ctx.fillStyle = s.color
        ctx.fillRect(Math.round(s.x), Math.round(s.y), Math.round(s.w), Math.round(s.h))
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="cursor-fx" aria-hidden="true" />
}

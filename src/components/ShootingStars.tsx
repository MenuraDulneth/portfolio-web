import { useEffect, useRef } from 'react'

interface Meteor {
  x: number
  y: number
  vx: number
  vy: number
  len: number   // trail length in px
  w: number     // trail thickness
  life: number  // seconds remaining
  ttl: number
}

const rand = (min: number, max: number) => min + Math.random() * (max - min)

const SPAWN_MIN = 1.6   // seconds between meteors
const SPAWN_MAX = 5.0

/**
 * Occasional small shooting stars drifting across the nebula backdrop.
 *
 * Deliberately frugal: a plain 2D canvas at 1x resolution, and the loop skips
 * all clearing and drawing whenever no meteor is alive — which is most of the
 * time — so it idles at effectively zero cost between them.
 */
export default function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const meteors: Meteor[] = []
    let raf = 0
    let last = performance.now()
    let nextSpawn = rand(0.4, 2.0)
    let dirty = false

    const spawn = () => {
      const toRight = Math.random() < 0.5
      const speed = rand(320, 560)
      // Shallow downward diagonal, like a real meteor streak.
      const angle = rand(0.32, 0.62)
      const vx = Math.cos(angle) * speed * (toRight ? 1 : -1)
      const vy = Math.sin(angle) * speed
      const ttl = rand(0.8, 1.5)

      meteors.push({
        // Start off the top edge, biased to the side it travels away from.
        x: toRight ? rand(-0.1, 0.7) * canvas.width : rand(0.3, 1.1) * canvas.width,
        y: rand(-0.05, 0.45) * canvas.height,
        vx,
        vy,
        len: rand(70, 160),
        w: rand(0.9, 1.7),
        life: ttl,
        ttl,
      })
    }

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop)
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now

      if (document.hidden) return

      nextSpawn -= dt
      if (nextSpawn <= 0) {
        spawn()
        // Now and then let two fall together.
        if (Math.random() < 0.18) spawn()
        nextSpawn = rand(SPAWN_MIN, SPAWN_MAX)
      }

      // Nothing on screen and nothing left over to erase: do no work at all.
      if (meteors.length === 0) {
        if (dirty) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          dirty = false
        }
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dirty = true
      ctx.lineCap = 'round'

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i]
        m.life -= dt
        if (m.life <= 0) { meteors.splice(i, 1); continue }

        m.x += m.vx * dt
        m.y += m.vy * dt

        // Fade in and back out across the meteor's life.
        const p = 1 - m.life / m.ttl
        const alpha = Math.sin(Math.PI * p)

        // Tail trails back along the direction of travel.
        const mag = Math.hypot(m.vx, m.vy) || 1
        const tx = m.x - (m.vx / mag) * m.len
        const ty = m.y - (m.vy / mag) * m.len

        const grad = ctx.createLinearGradient(m.x, m.y, tx, ty)
        grad.addColorStop(0, `rgba(226, 242, 255, ${alpha * 0.95})`)
        grad.addColorStop(0.35, `rgba(150, 205, 245, ${alpha * 0.35})`)
        grad.addColorStop(1, 'rgba(120, 170, 230, 0)')

        ctx.strokeStyle = grad
        ctx.lineWidth = m.w
        ctx.beginPath()
        ctx.moveTo(m.x, m.y)
        ctx.lineTo(tx, ty)
        ctx.stroke()

        // Small bright head.
        ctx.fillStyle = `rgba(236, 247, 255, ${alpha * 0.9})`
        ctx.beginPath()
        ctx.arc(m.x, m.y, m.w * 0.85, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    raf = requestAnimationFrame(loop)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" aria-hidden="true" />
}

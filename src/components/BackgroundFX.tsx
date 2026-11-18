import { useEffect, useRef } from 'react'
import ShootingStars from './ShootingStars'

/**
 * Animated backdrop: drifting fractal-noise dust clouds with twinkling stars,
 * shaded with the site palette — a slow deep-space nebula.
 *
 * Replaces the old HLS background video (that stream was a third-party Mux
 * asset and started returning 403). Nothing here leaves the bundle, so it
 * can't break again.
 *
 * Cheap by construction: renders at half resolution (CSS upscales it, which
 * also softens the gradients), caps at 30fps, and idles when the tab is hidden.
 */

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`

const FRAG = `
precision highp float;
uniform vec2  u_res;
uniform float u_time;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i),              hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 p  = (gl_FragCoord.xy - 0.5 * u_res.xy) / u_res.y;

  float t = u_time * 0.06;

  // Two noise layers drifting against each other make the dust clouds; the
  // second is warped by the first so the structure folds instead of sliding.
  float d  = fbm(p * 1.8 + vec2(t * 0.6, -t * 0.4));
  float d2 = fbm(p * 3.4 + 1.5 * d - t * 0.3);

  // Crushed toward black with pow() so the colour reads as clouds in empty
  // space rather than a full-screen wash behind the text.
  vec3 c = vec3(0.010, 0.009, 0.022);

  float violet = pow(smoothstep(0.22, 0.82, d), 1.5);
  c = mix(c, vec3(0.300, 0.105, 0.680), violet);

  float indigo = pow(smoothstep(0.34, 0.88, d2), 1.7);
  c = mix(c, vec3(0.070, 0.290, 0.780), indigo * 0.85);

  float cyan = pow(smoothstep(0.42, 0.95, d * d2 * 2.4), 1.8);
  c = mix(c, vec3(0.035, 0.660, 0.780), cyan * 0.70);

  // Stars: one per cell of a coarse grid. Brightness varies per star but never
  // over time — no twinkling. The grid is deliberately sparse, since at
  // full-screen size a tight one reads as static rather than as a starfield.
  vec2 cell = floor(gl_FragCoord.xy / 2.6);
  float h = hash(cell);
  float star = step(0.9988, h);
  c += star * vec3(0.55, 0.60, 0.78) * (0.45 + 0.55 * hash(cell + 3.7));

  // Vignette so section text always has a darker surround.
  c *= 1.0 - 0.50 * length(uv - 0.5);

  gl_FragColor = vec4(c, 1.0);
}
`

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)
  if (!sh) return null
  gl.shaderSource(sh, src)
  gl.compileShader(sh)
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    gl.deleteShader(sh)
    return null
  }
  return sh
}

const RES_SCALE = 0.5
const FPS = 30

export default function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return

    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: 'low-power',
    })
    // No WebGL (or it's blocked): leave the CSS gradient fallback showing.
    if (!gl) return

    const vs = compile(gl, gl.VERTEX_SHADER, VERT)
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG)
    if (!vs || !fs) return

    const prog = gl.createProgram()
    if (!prog) return
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1,
    ]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, 'a_pos')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, 'u_res')
    const uTime = gl.getUniformLocation(prog, 'u_time')

    // The shader is drawing, so drop the CSS fallback paint behind it.
    wrap.classList.add('bg-fx-live')

    const resize = () => {
      const w = Math.max(1, Math.round(window.innerWidth * RES_SCALE))
      const h = Math.max(1, Math.round(window.innerHeight * RES_SCALE))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
      }
    }
    resize()

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const start = performance.now()
    let raf = 0
    let last = 0

    const render = (timeSec: number) => {
      resize()
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, timeSec)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
    }

    if (reduced) {
      render(18) // one static, nicely-formed frame
      return () => { wrap.classList.remove('bg-fx-live') }
    }

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop)
      if (document.hidden) return
      if (now - last < 1000 / FPS) return
      last = now
      render((now - start) / 1000)
    }
    raf = requestAnimationFrame(loop)

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      wrap.classList.remove('bg-fx-live')
    }
  }, [])

  return (
    <div ref={wrapRef} className="bg-fx fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* Darkening pass so body text stays readable over the brightest clouds */}
      <div className="absolute inset-0" style={{ background: 'rgba(5,5,8,0.42)' }} />
      {/* Above the darkening pass, so the streaks stay crisp */}
      <ShootingStars />
    </div>
  )
}

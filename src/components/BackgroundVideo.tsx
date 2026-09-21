import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

// HLS stream hosted on Mux — needs hls.js everywhere except Safari.
const VIDEO_SRC = 'https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8'

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Prefer hls.js wherever MSE exists: Chromium answers "maybe" to the native
    // HLS check but can't actually play .m3u8. Native only for iOS Safari (no MSE).
    if (Hls.isSupported()) {
      const hls = new Hls({
        capLevelToPlayerSize: true,   // no point decoding more pixels than the screen shows
        maxBufferLength: 60,          // buffer generously; it's a muted loop
        minAutoBitrate: 3_000_000,    // never drop below the 1080p rendition
      })
      // Start on the sharpest rendition the screen can use rather than ABR's low default.
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        const target = window.innerHeight * (window.devicePixelRatio || 1)
        const fit = hls.levels
          .map((l, i) => ({ i, h: l.height }))
          .filter(l => l.h >= target)
          .sort((a, b) => a.h - b.h)[0]
        const best = hls.levels.reduce((top, l, i) => (l.height > hls.levels[top].height ? i : top), 0)
        hls.startLevel = fit ? fit.i : best
      })
      hls.loadSource(VIDEO_SRC)
      hls.attachMedia(video)
      return () => hls.destroy()
    }

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = VIDEO_SRC
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      {/* Uniform darkening so text stays readable on every section */}
      <div className="absolute inset-0" style={{ background: 'rgba(5,5,8,0.58)' }} />
    </div>
  )
}

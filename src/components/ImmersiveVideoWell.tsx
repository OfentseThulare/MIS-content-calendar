// ImmersiveVideoWell
// ------------------
// Two stacked <video> elements (A, B) run the same source in a crossfade loop:
// - A plays first. When it nears its own duration minus CROSSFADE_DURATION,
//   B is seeked to 0 and started, and opacity swaps from A to B over 1.2s.
// - After the fade completes, A is paused and rewound to 0, ready for its next turn.
// - The cycle mirrors back to A from B on B's own near-end event.
// This yields a loop with no visible cut.
//
// The video plane is softened into the slide via a compound mask:
// a radial aperture (centre visible, edges transparent) intersected with a
// linear left-to-transparent ramp so the video dissolves into brand.darkGreen.
// A darkGreen "wash" layer sits on top at multiply blend for tonal cohesion.
// Depth is faked with a back glow, an atmospheric haze plane, and drifting
// gold particles in front.
//
// Honours prefers-reduced-motion: pauses video, freezes parallax, hides particles.

import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { brand } from '../lib/brand'

type Props = {
  videoSrc?: string
}

const CROSSFADE_DURATION = 1.2 // seconds

const particleSeeds = [
  { left: '62%', top: '18%', size: 8, duration: 9, delay: 0 },
  { left: '74%', top: '38%', size: 6, duration: 11, delay: 1.4 },
  { left: '58%', top: '64%', size: 10, duration: 13, delay: 2.8 },
  { left: '82%', top: '76%', size: 7, duration: 10, delay: 0.7 },
  { left: '68%', top: '88%', size: 6, duration: 12, delay: 3.5 },
]

export default function ImmersiveVideoWell({ videoSrc = '/hero-loop.mp4' }: Props) {
  const videoARef = useRef<HTMLVideoElement>(null)
  const videoBRef = useRef<HTMLVideoElement>(null)
  const transitioningRef = useRef(false)
  const [activeVideo, setActiveVideo] = useState<'A' | 'B'>('A')
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const a = videoARef.current
    const b = videoBRef.current
    if (!a || !b) return

    if (prefersReducedMotion) {
      a.pause()
      b.pause()
      a.currentTime = 0
      return
    }

    const tryPlayA = () => {
      a.play().catch(() => {})
    }
    tryPlayA()
    a.addEventListener('canplay', tryPlayA, { once: true })

    const makeHandler =
      (activeEl: HTMLVideoElement, inactiveEl: HTMLVideoElement, nextActive: 'A' | 'B') =>
      () => {
        if (transitioningRef.current) return
        if (!activeEl.duration || !isFinite(activeEl.duration)) return
        if (activeEl.currentTime < activeEl.duration - CROSSFADE_DURATION) return

        transitioningRef.current = true
        inactiveEl.currentTime = 0
        inactiveEl.play().catch(() => {})
        setActiveVideo(nextActive)

        window.setTimeout(() => {
          activeEl.pause()
          activeEl.currentTime = 0
          transitioningRef.current = false
        }, CROSSFADE_DURATION * 1000)
      }

    const onA = makeHandler(a, b, 'B')
    const onB = makeHandler(b, a, 'A')
    a.addEventListener('timeupdate', onA)
    b.addEventListener('timeupdate', onB)

    return () => {
      a.removeEventListener('timeupdate', onA)
      b.removeEventListener('timeupdate', onB)
      a.removeEventListener('canplay', tryPlayA)
    }
  }, [prefersReducedMotion])

  const maskStyle: CSSProperties = {
    WebkitMaskImage:
      'radial-gradient(ellipse 75% 80% at 60% 50%, black 40%, transparent 85%), linear-gradient(to left, black 30%, transparent 95%)',
    maskImage:
      'radial-gradient(ellipse 75% 80% at 60% 50%, black 40%, transparent 85%), linear-gradient(to left, black 30%, transparent 95%)',
    WebkitMaskComposite: 'source-in',
    maskComposite: 'intersect',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
  }

  const videoBaseStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: 'scale(1.1)',
    transition: `opacity ${CROSSFADE_DURATION}s ease-in-out`,
    ...maskStyle,
  }

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* Layer 1 — back glow */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-10%',
          background: `radial-gradient(ellipse 60% 55% at 62% 50%, ${brand.colors.gold}22 0%, ${brand.colors.gold}00 70%)`,
          filter: 'blur(30px)',
        }}
        animate={prefersReducedMotion ? undefined : { opacity: [0.65, 1, 0.65], scale: [1, 1.04, 1] }}
        transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* Layer 2 — video plane (two crossfaded elements) */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <video
          ref={videoARef}
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{ ...videoBaseStyle, opacity: activeVideo === 'A' ? 1 : 0 }}
        />
        <video
          ref={videoBRef}
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{ ...videoBaseStyle, opacity: activeVideo === 'B' ? 1 : 0 }}
        />

        {/* Colour-grading wash — multiply brings darkGreen into the footage */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: brand.colors.darkGreen,
            mixBlendMode: 'multiply',
            opacity: 0.3,
            ...maskStyle,
          }}
        />
      </div>

      {/* Layer 3 — atmospheric haze drifting in depth-of-field fog */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(115deg, ${brand.colors.mutedGreen}55 0%, ${brand.colors.darkGreen}00 45%, ${brand.colors.darkGreen}66 100%)`,
          pointerEvents: 'none',
        }}
        animate={prefersReducedMotion ? undefined : { opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 14, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* Edge dissolve — final fade to brand darkGreen on the left so nothing
          can show a rectangular seam against the Proposal 2026 column. */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to right, ${brand.colors.darkGreen} 0%, ${brand.colors.darkGreen}00 35%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Layer 4 — front accent particles */}
      {!prefersReducedMotion &&
        particleSeeds.map((p, i) => (
          <motion.span
            key={i}
            style={{
              position: 'absolute',
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: i % 2 === 0 ? brand.colors.gold : brand.colors.sand,
              boxShadow: `0 0 12px ${brand.colors.gold}66`,
              opacity: 0.8,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: p.duration,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
    </div>
  )
}

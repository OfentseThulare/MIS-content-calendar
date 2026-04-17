import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slides } from '../lib/slides'
import { brand } from '../lib/brand'

export default function DeckShell() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const SAFE_BUFFER = 32
  const computeScale = () => {
    if (typeof window === 'undefined') return 1
    return Math.min(
      (window.innerWidth - 2 * SAFE_BUFFER) / brand.grid.width,
      (window.innerHeight - 2 * SAFE_BUFFER) / brand.grid.height,
    )
  }
  const [scale, setScale] = useState(computeScale)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)

  const total = slides.length

  const goTo = useCallback(
    (nextIndex: number) => {
      setDirection(nextIndex > index ? 1 : -1)
      setIndex(Math.max(0, Math.min(total - 1, nextIndex)))
    },
    [index, total],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        prev()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goTo(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goTo(total - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, goTo, total])

  useLayoutEffect(() => {
    let raf = 0
    const onResize = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setScale(computeScale()))
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) {
      if (dx < 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  const progress = ((index + 1) / total) * 100
  const current = slides[index]

  return (
    <div
      ref={containerRef}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        position: 'fixed',
        inset: 0,
        background: brand.colors.darkGreen,
        overflow: 'hidden',
        fontFamily: brand.fonts.primary,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'rgba(15, 30, 18, 0.65)',
          zIndex: 20,
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: brand.colors.gold,
            transition: 'width 400ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: brand.grid.width,
            height: brand.grid.height,
            flexShrink: 0,
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            position: 'relative',
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              initial={{ x: direction > 0 ? 24 : -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -24 : 24, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'absolute',
                inset: 0,
              }}
            >
              <current.component />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 28,
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          padding: '10px 16px',
          background: 'rgba(15, 30, 18, 0.55)',
          border: `1px solid ${brand.colors.gold}33`,
          borderRadius: 999,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          zIndex: 30,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
        }}
      >
        <NavArrow direction="prev" onClick={prev} disabled={index === 0} />
        <div
          style={{
            color: brand.colors.gold,
            fontSize: 12,
            letterSpacing: '0.24em',
            fontWeight: 500,
            fontVariantNumeric: 'tabular-nums',
            minWidth: 56,
            textAlign: 'center',
            userSelect: 'none',
          }}
        >
          {String(index + 1).padStart(2, '0')}
          <span style={{ color: `${brand.colors.gold}66`, margin: '0 6px' }}>/</span>
          {String(total).padStart(2, '0')}
        </div>
        <NavArrow direction="next" onClick={next} disabled={index === total - 1} />
      </div>

    </div>
  )
}

function NavArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: 'prev' | 'next'
  onClick: () => void
  disabled: boolean
}) {
  const [hover, setHover] = useState(false)
  const isNext = direction === 'next'
  return (
    <button
      type="button"
      aria-label={isNext ? 'Next slide' : 'Previous slide'}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={disabled}
      style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: `1px solid ${brand.colors.gold}${disabled ? '22' : hover ? 'ff' : '66'}`,
        background: disabled
          ? 'transparent'
          : hover
            ? `${brand.colors.gold}1f`
            : 'transparent',
        color: disabled ? `${brand.colors.gold}55` : brand.colors.gold,
        cursor: disabled ? 'default' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        transition: 'all 280ms cubic-bezier(0.22, 1, 0.36, 1)',
        outline: 'none',
        boxShadow: hover && !disabled ? `0 0 0 4px ${brand.colors.gold}14` : 'none',
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transform: `translateX(${hover && !disabled ? (isNext ? 2 : -2) : 0}px) ${isNext ? '' : 'scaleX(-1)'}`,
          transition: 'transform 280ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <path d="M3 7h8" />
        <path d="M7.5 3.5L11 7l-3.5 3.5" />
      </svg>
    </button>
  )
}

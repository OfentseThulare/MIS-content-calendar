import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slides } from '../lib/slides'
import { brand } from '../lib/brand'

export default function DeckShell() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [scale, setScale] = useState(1)
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
    const compute = () => {
      if (!containerRef.current) return
      const { innerWidth, innerHeight } = window
      const scaleX = innerWidth / brand.grid.width
      const scaleY = innerHeight / brand.grid.height
      setScale(Math.min(scaleX, scaleY))
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
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
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            position: 'relative',
          }}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              initial={{ x: direction > 0 ? 120 : -120, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -120 : 120, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              style={{
                position: 'absolute',
                inset: 0,
                width: brand.grid.width,
                height: brand.grid.height,
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
          bottom: 20,
          right: 32,
          color: brand.colors.mutedGreen,
          fontSize: 12,
          letterSpacing: '0.18em',
          fontVariantNumeric: 'tabular-nums',
          zIndex: 20,
          fontFamily: brand.fonts.primary,
        }}
      >
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </div>
  )
}

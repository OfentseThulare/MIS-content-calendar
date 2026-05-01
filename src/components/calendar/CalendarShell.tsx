import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { brand } from '../../lib/brand'
import { CompactContext, useCompactValue } from './useCompact'

const CANVAS_WIDTH = 1920
const SAFE_BUFFER = 24

type Props = {
  children: ReactNode
}

function computeScale(): number {
  if (typeof window === 'undefined') return 1
  return Math.min(1, (window.innerWidth - 2 * SAFE_BUFFER) / CANVAS_WIDTH)
}

// CalendarShell scales a fixed-width canvas to fit the viewport on desktop
// (>=1024px) and renders a fluid stacked layout below that threshold.
// Scroll progress is rendered as a gold rule at top.
export default function CalendarShell({ children }: Props) {
  const [scale, setScale] = useState<number>(() => computeScale())
  const [progress, setProgress] = useState(0)
  const [canvasHeight, setCanvasHeight] = useState<number | null>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const compact = useCompactValue()

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

  useEffect(() => {
    const node = canvasRef.current
    if (!node) return
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setCanvasHeight(entry.contentRect.height)
      }
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const value = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0
      setProgress(Math.max(0, Math.min(100, value)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Home') {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (e.key === 'End') {
        e.preventDefault()
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const wrapperHeight = !compact && canvasHeight !== null ? `${canvasHeight * scale}px` : 'auto'

  return (
    <CompactContext.Provider value={compact}>
      <div
        style={{
          background: brand.colors.lightBg,
          fontFamily: brand.fonts.primary,
          color: brand.colors.bodyText,
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <div
          data-scroll-progress
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: `${brand.colors.darkGreen}33`,
            zIndex: 50,
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: brand.colors.gold,
              transition: 'width 200ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          />
        </div>

        <div
          data-grain
          aria-hidden
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0.025,
            mixBlendMode: 'multiply',
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='1'/></svg>\")",
            zIndex: 1,
          }}
        />

        {compact ? (
          <div
            style={{
              width: '100%',
              maxWidth: 720,
              margin: '0 auto',
              paddingTop: SAFE_BUFFER,
              paddingBottom: SAFE_BUFFER,
              position: 'relative',
              zIndex: 2,
            }}
          >
            {children}
          </div>
        ) : (
          <div
            style={{
              width: `${CANVAS_WIDTH * scale}px`,
              margin: '0 auto',
              paddingTop: SAFE_BUFFER,
              paddingBottom: SAFE_BUFFER,
              height: wrapperHeight,
              position: 'relative',
              zIndex: 2,
            }}
          >
            <div
              ref={canvasRef}
              style={{
                width: CANVAS_WIDTH,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }}
            >
              {children}
            </div>
          </div>
        )}
      </div>
    </CompactContext.Provider>
  )
}

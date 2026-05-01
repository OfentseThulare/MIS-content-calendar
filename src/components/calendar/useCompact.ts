import { createContext, useContext, useEffect, useState } from 'react'

// Below this viewport width, the calendar drops the scaled-canvas approach
// and renders in a fluid stacked layout that stays readable on phones and
// tablets. Above it, the design returns to its 1920px canvas with scale-to-fit.
export const COMPACT_BREAKPOINT = 1024

function detect(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < COMPACT_BREAKPOINT
}

export const CompactContext = createContext<boolean>(false)

export function useCompactValue(): boolean {
  const [compact, setCompact] = useState<boolean>(() => detect())

  useEffect(() => {
    let raf = 0
    const onResize = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setCompact(detect()))
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return compact
}

export function useCompact(): boolean {
  return useContext(CompactContext)
}

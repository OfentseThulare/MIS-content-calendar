import type { CSSProperties, ReactNode } from 'react'
import { brand } from '../lib/brand'

type SlideFrameProps = {
  children: ReactNode
  bg?: string
  className?: string
  style?: CSSProperties
}

export default function SlideFrame({
  children,
  bg = brand.colors.shaftBlack,
  className = '',
  style,
}: SlideFrameProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: brand.grid.width,
        height: brand.grid.height,
        padding: brand.grid.margin,
        background: bg,
        fontFamily: brand.fonts.primary,
        color: brand.colors.kalahariCream,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

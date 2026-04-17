import type { CSSProperties, ReactNode } from 'react'
import { brand } from '../lib/brand'

type SlideFrameProps = {
  children: ReactNode
  bg?: string
  textColor?: string
  showChrome?: boolean
  pageNumber?: number
  totalPages?: number
  className?: string
  style?: CSSProperties
  padding?: number
}

export default function SlideFrame({
  children,
  bg = brand.colors.lightBg,
  textColor,
  showChrome = false,
  pageNumber,
  totalPages,
  className = '',
  style,
  padding = brand.grid.margin,
}: SlideFrameProps) {
  const resolvedTextColor =
    textColor ?? (bg === brand.colors.darkGreen ? brand.colors.lightBg : brand.colors.bodyText)

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: brand.grid.width,
        height: brand.grid.height,
        background: bg,
        fontFamily: brand.fonts.primary,
        color: resolvedTextColor,
        ...style,
      }}
    >
      {showChrome ? (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 56,
            background: brand.colors.darkGreen,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: brand.colors.gold,
            fontSize: 13,
            letterSpacing: '0.22em',
            fontWeight: 500,
            zIndex: 2,
          }}
        >
          THE MINING INTEGRATION SUMMIT 2026 | PRESENTED BY SAMCA | RUSTENBURG, NORTH WEST PROVINCE
        </div>
      ) : null}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          paddingTop: showChrome ? 56 + padding : padding,
          paddingBottom: showChrome ? 56 + padding : padding,
          paddingLeft: padding,
          paddingRight: padding,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            flex: 1,
            minHeight: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </div>
      </div>

      {showChrome ? (
        <div
          style={{
            position: 'absolute',
            left: padding,
            right: padding,
            bottom: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 2,
          }}
        >
          <div
            style={{
              flex: 1,
              height: 1.5,
              background: brand.colors.gold,
              marginRight: 24,
            }}
          />
          <div
            style={{
              color: brand.colors.mutedGreen,
              fontSize: 11,
              letterSpacing: '0.2em',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {pageNumber !== undefined && totalPages !== undefined
              ? `${String(pageNumber).padStart(2, '0')} / ${String(totalPages).padStart(2, '0')}`
              : ''}
          </div>
        </div>
      ) : null}
    </div>
  )
}

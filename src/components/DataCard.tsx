import type { CSSProperties, ReactNode } from 'react'
import { brand } from '../lib/brand'

type DataCardProps = {
  title?: string
  children: ReactNode
  accentColor?: string
  background?: string
  titleColor?: string
  style?: CSSProperties
  className?: string
}

export default function DataCard({
  title,
  children,
  accentColor = brand.colors.gold,
  background = brand.colors.sand,
  titleColor = brand.colors.darkGreen,
  style,
  className = '',
}: DataCardProps) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        background,
        borderRadius: 6,
        paddingLeft: 28,
        paddingRight: 28,
        paddingTop: 24,
        paddingBottom: 24,
        fontFamily: brand.fonts.primary,
        color: brand.colors.bodyText,
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: accentColor,
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
        }}
      />
      {title ? (
        <div
          style={{
            color: titleColor,
            fontWeight: 600,
            fontSize: 22,
            letterSpacing: '-0.005em',
            marginBottom: 12,
          }}
        >
          {title}
        </div>
      ) : null}
      <div style={{ color: brand.colors.bodyText, fontSize: 16, lineHeight: 1.55 }}>
        {children}
      </div>
    </div>
  )
}

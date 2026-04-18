import type { CSSProperties, ReactNode } from 'react'
import { brand } from '../lib/brand'

type DataCardVariant = 'default' | 'inverse' | 'muted'

type DataCardProps = {
  title?: string
  children: ReactNode
  accentColor?: string
  background?: string
  titleColor?: string
  style?: CSSProperties
  className?: string
  variant?: DataCardVariant
  centred?: boolean
  titleAlign?: 'left' | 'center'
}

const variantDefaults: Record<
  DataCardVariant,
  { background: string; titleColor: string; accentColor: string; bodyColor: string }
> = {
  default: {
    background: brand.colors.sand,
    titleColor: brand.colors.darkGreen,
    accentColor: brand.colors.gold,
    bodyColor: brand.colors.bodyText,
  },
  inverse: {
    background: brand.colors.darkGreen,
    titleColor: brand.colors.gold,
    accentColor: brand.colors.gold,
    bodyColor: brand.colors.lightBg,
  },
  muted: {
    background: brand.colors.lightBg,
    titleColor: brand.colors.mutedGreen,
    accentColor: brand.colors.sage,
    bodyColor: brand.colors.bodyText,
  },
}

export default function DataCard({
  title,
  children,
  accentColor,
  background,
  titleColor,
  style,
  className = '',
  variant = 'default',
  centred = false,
  titleAlign,
}: DataCardProps) {
  const preset = variantDefaults[variant]
  const resolvedBackground = background ?? preset.background
  const resolvedTitleColor = titleColor ?? preset.titleColor
  const resolvedAccent = accentColor ?? preset.accentColor
  const resolvedBodyColor = preset.bodyColor
  const resolvedTitleAlign = titleAlign ?? (centred ? 'center' : 'left')
  const radius = centred ? 8 : 6
  const paddingY = centred ? 32 : 24

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        background: resolvedBackground,
        borderRadius: radius,
        paddingLeft: 28,
        paddingRight: 28,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        fontFamily: brand.fonts.primary,
        color: resolvedBodyColor,
        ...style,
      }}
    >
      {centred ? null : (
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 4,
            background: resolvedAccent,
            borderTopLeftRadius: radius,
            borderBottomLeftRadius: radius,
          }}
        />
      )}
      {title ? (
        <div
          style={{
            color: resolvedTitleColor,
            fontWeight: 600,
            fontSize: centred ? 28 : 22,
            letterSpacing: centred ? '0em' : '-0.005em',
            marginBottom: 12,
            textAlign: resolvedTitleAlign,
          }}
        >
          {title}
        </div>
      ) : null}
      {centred && title ? (
        <div
          style={{
            width: 64,
            height: 2,
            background: resolvedAccent,
            margin: '0 auto 12px',
          }}
        />
      ) : null}
      <div
        style={{
          color: resolvedBodyColor,
          fontSize: 16,
          lineHeight: 1.55,
        }}
      >
        {children}
      </div>
    </div>
  )
}

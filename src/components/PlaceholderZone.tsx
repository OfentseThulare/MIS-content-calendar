import { brand } from '../lib/brand'

type PlaceholderZoneProps = {
  label: string
  className?: string
}

export default function PlaceholderZone({
  label,
  className = '',
}: PlaceholderZoneProps) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        border: `1px dashed ${brand.colors.gold}`,
        borderRadius: 8,
        color: brand.colors.mutedGreen,
        fontSize: 14,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        minHeight: 200,
        width: '100%',
        height: '100%',
        textAlign: 'center',
        padding: 24,
        fontWeight: 500,
      }}
    >
      {label}
    </div>
  )
}

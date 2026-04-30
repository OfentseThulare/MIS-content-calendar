import { brand } from '../../lib/brand'
import { pillars, pillarOrder } from '../../data/pillars'

export default function PillarLegend() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        flexWrap: 'wrap',
        padding: '14px 0',
      }}
    >
      <div
        style={{
          color: brand.colors.mutedGreen,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginRight: 8,
        }}
      >
        Pillars
      </div>
      {pillarOrder.map((key) => {
        const pillar = pillars[key]
        return (
          <div
            key={key}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 14px',
              background: brand.colors.lightBg,
              border: `1px solid ${pillar.accent}33`,
              borderRadius: 999,
            }}
          >
            <span
              aria-hidden
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: pillar.accent,
                boxShadow: `0 0 0 3px ${pillar.accent}22`,
              }}
            />
            <span
              style={{
                color: brand.colors.darkGreen,
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              {pillar.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

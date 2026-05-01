import { brand } from '../../lib/brand'
import { phases, phaseOrder, type PhaseKey } from '../../data/phases'
import { useCompact } from './useCompact'

const accentByPhase: Record<PhaseKey, string> = {
  awareness: brand.colors.gold,
  speakers: brand.colors.amber,
  programme: brand.colors.darkBrown,
}

export default function PhaseNavigator() {
  const compact = useCompact()

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: compact ? '1fr' : 'repeat(3, 1fr)',
        gap: compact ? 8 : 16,
        background: `${brand.colors.sand}55`,
        padding: compact ? 12 : 16,
        borderRadius: 8,
      }}
    >
      {phaseOrder.map((key) => {
        const phase = phases[key]
        const accent = accentByPhase[key]
        return (
          <div
            key={key}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              padding: compact ? '12px 14px' : '14px 18px',
              background: brand.colors.lightBg,
              borderRadius: 6,
              borderLeft: `3px solid ${accent}`,
              minHeight: 64,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 10,
              }}
            >
              <span
                style={{
                  color: accent,
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: '0.06em',
                }}
              >
                {`PH${phase.number}`}
              </span>
              <span
                style={{
                  color: brand.colors.darkGreen,
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: '-0.005em',
                }}
              >
                {phase.label}
              </span>
            </div>
            <div
              style={{
                color: brand.colors.bodyText,
                fontSize: 12,
                lineHeight: 1.45,
              }}
            >
              {phase.weeks} · {phase.dateRange}
            </div>
            <div
              aria-hidden
              style={{
                height: 1,
                background: accent,
                width: 32,
                marginTop: 4,
              }}
            />
            <div
              style={{
                color: brand.colors.mutedGreen,
                fontSize: 11,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              {`${phase.postCount} posts`}
            </div>
          </div>
        )
      })}
    </div>
  )
}

import { brand } from '../../lib/brand'
import { phases, type PhaseKey } from '../../data/phases'

type Props = {
  phase: PhaseKey
}

export default function PhaseDivider({ phase }: Props) {
  const def = phases[phase]
  return (
    <div
      role="separator"
      aria-label={`Phase ${def.number} begins, ${def.label}`}
      data-phase-divider
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        margin: '8px 0 18px',
      }}
    >
      <div
        style={{
          color: brand.colors.gold,
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
        }}
      >
        {`Phase ${def.number} begins · ${def.label}`}
      </div>
      <div
        data-phase-rule
        style={{
          height: 1.5,
          background: brand.colors.gold,
          transformOrigin: 'left center',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          color: brand.colors.bodyText,
          fontSize: 13,
        }}
      >
        <span style={{ color: brand.colors.darkGreen, fontWeight: 500 }}>
          {def.dateRange} · {def.weeks}
        </span>
        <span style={{ color: brand.colors.mutedGreen }}>{`${def.postCount} posts · ${def.milestone}`}</span>
      </div>
    </div>
  )
}

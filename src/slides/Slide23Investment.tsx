import SlideFrame from '../components/SlideFrame'
import { brand } from '../lib/brand'

const phases = [
  { phase: 'Strategy and creative', period: 'Apr to May 2026', investment: 'R1.2M' },
  { phase: 'Digital build and launch', period: 'Jun to Jul 2026', investment: 'R2.8M' },
  { phase: 'Campaign activation', period: 'Jul to Sep 2026', investment: 'R4.5M' },
  { phase: 'On site production', period: 'Sep 2026', investment: 'R3.2M' },
  { phase: 'Post summit and legacy', period: 'Oct to Nov 2026', investment: 'R850K' },
]

export default function Slide23Investment() {
  return (
    <SlideFrame>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: 14,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: brand.colors.miningGold,
            marginBottom: 24,
          }}
        >
          Investment and timeline
        </div>
        <h2
          style={{
            fontSize: 48,
            fontWeight: 500,
            color: brand.colors.kalahariCream,
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          Investment and phasing.
        </h2>

        <div
          style={{
            marginTop: 48,
            border: `1px solid ${brand.colors.miningGold}33`,
            borderRadius: 6,
            overflow: 'hidden',
            maxWidth: 1500,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr 0.8fr',
              background: brand.colors.miningGold,
              color: brand.colors.shaftBlack,
              padding: '16px 32px',
              fontSize: 14,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            <div>Phase</div>
            <div>Period</div>
            <div style={{ textAlign: 'right' }}>Investment</div>
          </div>
          {phases.map((row, i) => (
            <div
              key={row.phase}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 1fr 0.8fr',
                padding: '18px 32px',
                fontSize: 20,
                color: brand.colors.kalahariCream,
                background: i % 2 === 0 ? 'rgba(244, 236, 216, 0.03)' : 'transparent',
                borderTop: i === 0 ? 'none' : `1px solid ${brand.colors.editorialGrey}22`,
              }}
            >
              <div>{row.phase}</div>
              <div style={{ color: brand.colors.editorialGrey }}>{row.period}</div>
              <div
                style={{
                  textAlign: 'right',
                  fontVariantNumeric: 'tabular-nums',
                  color: brand.colors.kalahariCream,
                }}
              >
                {row.investment}
              </div>
            </div>
          ))}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr 0.8fr',
              padding: '20px 32px',
              fontSize: 22,
              background: brand.colors.shaftBlack,
              borderTop: `2px solid ${brand.colors.miningGold}`,
              color: brand.colors.miningGold,
              fontWeight: 600,
              letterSpacing: '0.04em',
            }}
          >
            <div>Total</div>
            <div />
            <div
              style={{
                textAlign: 'right',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              R12.55M
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  )
}

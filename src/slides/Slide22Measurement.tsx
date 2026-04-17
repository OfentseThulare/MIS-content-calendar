import SlideFrame from '../components/SlideFrame'
import { brand } from '../lib/brand'

const metrics = [
  { metric: 'Delegate registrations', target: '1,200' },
  { metric: 'Nations represented', target: '14' },
  { metric: 'Community representation', target: '40 percent' },
  { metric: 'Sponsor revenue', target: 'R18.5M' },
  { metric: 'Media impressions', target: '50M plus' },
  { metric: 'Post summit NPS', target: '72 plus' },
  { metric: 'Return delegate rate', target: '35 percent' },
]

export default function Slide22Measurement() {
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
          Measurement
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
          Success metrics.
        </h2>

        <div
          style={{
            marginTop: 48,
            border: `1px solid ${brand.colors.miningGold}33`,
            borderRadius: 6,
            overflow: 'hidden',
            maxWidth: 1400,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              background: brand.colors.miningGold,
              color: brand.colors.shaftBlack,
              padding: '16px 32px',
              fontSize: 14,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            <div>Metric</div>
            <div style={{ textAlign: 'right' }}>Target</div>
          </div>
          {metrics.map((m, i) => (
            <div
              key={m.metric}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr',
                padding: '18px 32px',
                fontSize: 20,
                color: brand.colors.kalahariCream,
                background: i % 2 === 0 ? 'rgba(244, 236, 216, 0.03)' : 'transparent',
                borderTop: i === 0 ? 'none' : `1px solid ${brand.colors.editorialGrey}22`,
              }}
            >
              <div>{m.metric}</div>
              <div
                style={{
                  textAlign: 'right',
                  color: brand.colors.miningGold,
                  fontWeight: 500,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {m.target}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 12,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: brand.colors.editorialGrey,
          }}
        >
          Source, MIS 2026 measurement framework, Atlas Consulting Group
        </div>
      </div>
    </SlideFrame>
  )
}

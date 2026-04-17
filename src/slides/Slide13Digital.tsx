import SlideFrame from '../components/SlideFrame'
import PlaceholderZone from '../components/PlaceholderZone'
import { brand } from '../lib/brand'

const bullets = [
  'LinkedIn led thought leadership series',
  '12 week pre summit content calendar',
  'Targeted delegate acquisition via paid social',
  'Weekly mining intelligence posts',
]

export default function Slide13Digital() {
  return (
    <SlideFrame>
      <div
        style={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div
            style={{
              fontSize: 14,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: brand.colors.miningGold,
              marginBottom: 32,
            }}
          >
            Hero execution 01, beat six
          </div>
          <h2
            style={{
              fontSize: 52,
              fontWeight: 500,
              color: brand.colors.kalahariCream,
              margin: 0,
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
            }}
          >
            Digital and social campaign.
          </h2>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '56px 0 0 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            {bullets.map((b) => (
              <li
                key={b}
                style={{
                  fontSize: 22,
                  color: brand.colors.kalahariCream,
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: 8,
                    marginTop: 12,
                    borderRadius: 2,
                    background: brand.colors.miningGold,
                    flexShrink: 0,
                  }}
                />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <PlaceholderZone label="CREATIVE CONCEPTS TO BE ADDED" />
        </div>
      </div>
    </SlideFrame>
  )
}

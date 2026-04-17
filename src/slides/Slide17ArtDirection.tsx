import SlideFrame from '../components/SlideFrame'
import { brand } from '../lib/brand'

const tiles = [
  { label: 'Documentary mine site', bg: brand.colors.shaftBlack, text: brand.colors.kalahariCream, accent: brand.colors.miningGold },
  { label: 'Community portrait', bg: brand.colors.forestGreen, text: brand.colors.kalahariCream, accent: brand.colors.kalahariCream },
  { label: 'Aerial landscape', bg: brand.colors.miningGold, text: brand.colors.shaftBlack, accent: brand.colors.shaftBlack },
  { label: 'Technical close up', bg: brand.colors.ochreRed, text: brand.colors.kalahariCream, accent: brand.colors.kalahariCream },
  { label: 'Summit environment', bg: brand.colors.kalahariCream, text: brand.colors.shaftBlack, accent: brand.colors.miningGold },
  { label: 'Archive and heritage', bg: brand.colors.cloudWhite, text: brand.colors.shaftBlack, accent: brand.colors.forestGreen },
]

export default function Slide17ArtDirection() {
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
          Art direction
        </div>
        <h2
          style={{
            fontSize: 44,
            fontWeight: 500,
            color: brand.colors.kalahariCream,
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          Visual language.
        </h2>

        <div
          style={{
            marginTop: 40,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: 16,
            flex: 1,
            minHeight: 0,
          }}
        >
          {tiles.map((t) => (
            <div
              key={t.label}
              style={{
                background: t.bg,
                color: t.text,
                padding: 20,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                borderRadius: 4,
                border: `1px solid ${brand.colors.miningGold}22`,
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                {t.label}
              </div>
              <div style={{ width: 16, height: 16, background: t.accent, borderRadius: 2 }} />
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 18,
            color: brand.colors.kalahariCream,
            letterSpacing: '0.02em',
          }}
        >
          Documentary photography only. No stock. No AI generated portraits.
        </div>
      </div>
    </SlideFrame>
  )
}

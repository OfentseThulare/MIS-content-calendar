import SlideFrame from '../components/SlideFrame'
import { brand } from '../lib/brand'

const principles = [
  {
    title: 'Grounded, never grandiose',
    example: '"We convene the sector" not "We revolutionise mining"',
  },
  {
    title: 'Specific, never aspirational',
    example: '"1,200 delegates from 14 nations" not "a global audience"',
  },
  {
    title: 'Inclusive, never patronising',
    example: '"Community voice is structural, not ceremonial"',
  },
]

export default function Slide16ToneOfVoice() {
  return (
    <SlideFrame>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div
          style={{
            fontSize: 14,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: brand.colors.miningGold,
            marginBottom: 32,
          }}
        >
          Tone of voice
        </div>
        <h2
          style={{
            fontSize: 52,
            fontWeight: 500,
            color: brand.colors.kalahariCream,
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          How MIS 2026 speaks.
        </h2>

        <div
          style={{
            marginTop: 72,
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            maxWidth: 1400,
          }}
        >
          {principles.map((p, i) => (
            <div key={p.title}>
              <div style={{ display: 'flex', gap: 48, alignItems: 'baseline' }}>
                <div
                  style={{
                    fontSize: 14,
                    letterSpacing: '0.14em',
                    color: brand.colors.miningGold,
                    minWidth: 48,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  0{i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: 500,
                      color: brand.colors.kalahariCream,
                    }}
                  >
                    {p.title}.
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      fontSize: 18,
                      color: brand.colors.editorialGrey,
                      fontStyle: 'italic',
                    }}
                  >
                    {p.example}
                  </div>
                </div>
              </div>
              {i < principles.length - 1 && (
                <div
                  style={{
                    marginTop: 32,
                    height: 1,
                    background: brand.colors.miningGold,
                    opacity: 0.3,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  )
}

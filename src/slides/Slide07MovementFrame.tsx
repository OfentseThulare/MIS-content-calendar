import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

const rows: Array<[string, string]> = [
  ['Register for a conference', 'Join an accountability table'],
  ['Attend sessions', 'Make a public commitment'],
  ['Sponsor logo on banner', 'Sponsor chairs a pillar'],
  ['Community delegate', 'Community delegation voice, on the public record'],
]

export default function Slide07MovementFrame() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={7} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.22em',
              color: brand.colors.amber,
              textTransform: 'uppercase',
            }}
          >
            Beat 4, What Is
          </div>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 600,
              color: brand.colors.darkGreen,
              margin: '12px 0 0 0',
              letterSpacing: '-0.01em',
            }}
          >
            Mine the future, together
          </h1>
        </div>

        <div
          style={{
            maxWidth: 1500,
            border: `1px solid ${brand.colors.sand}`,
            borderRadius: 6,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              background: brand.colors.gold,
              color: brand.colors.darkGreen,
              fontWeight: 600,
              letterSpacing: '0.04em',
            }}
          >
            <div style={{ padding: '18px 28px', fontSize: 18 }}>Event framing</div>
            <div style={{ padding: '18px 28px', fontSize: 18, borderLeft: `1px solid ${brand.colors.darkGreen}` }}>
              Movement framing
            </div>
          </div>
          {rows.map((row, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                background: i % 2 === 0 ? brand.colors.sand : brand.colors.lightBg,
                color: brand.colors.bodyText,
              }}
            >
              <div style={{ padding: '18px 28px', fontSize: 18 }}>{row[0]}</div>
              <div
                style={{
                  padding: '18px 28px',
                  fontSize: 18,
                  borderLeft: `1px solid ${brand.colors.sand}`,
                  color: brand.colors.darkGreen,
                  fontWeight: 500,
                }}
              >
                {row[1]}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Part B1, MIS 2026 Master Strategy
        </div>
      </div>
    </SlideFrame>
  )
}

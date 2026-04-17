import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

type Level = 'Primary' | 'Secondary' | 'Support' | 'Ignore'

const platforms = ['LinkedIn', 'Google', 'YouTube', 'Meta', 'TikTok', 'WhatsApp', 'Email', 'Twitter/X'] as const
const segments: Array<{ name: string; values: Level[] }> = [
  { name: 'Execs', values: ['Primary', 'Support', 'Secondary', 'Ignore', 'Ignore', 'Primary', 'Primary', 'Secondary'] },
  { name: 'Sponsors', values: ['Primary', 'Support', 'Secondary', 'Ignore', 'Ignore', 'Primary', 'Primary', 'Secondary'] },
  { name: 'Government', values: ['Primary', 'Support', 'Secondary', 'Ignore', 'Ignore', 'Secondary', 'Primary', 'Primary'] },
  { name: 'Communities', values: ['Ignore', 'Support', 'Secondary', 'Primary', 'Secondary', 'Primary', 'Secondary', 'Ignore'] },
  { name: 'Schools', values: ['Secondary', 'Secondary', 'Primary', 'Primary', 'Primary', 'Primary', 'Secondary', 'Ignore'] },
]

function cellColour(level: Level): { bg: string; fg: string } {
  switch (level) {
    case 'Primary':
      return { bg: brand.colors.darkGreen, fg: brand.colors.gold }
    case 'Secondary':
      return { bg: brand.colors.sage, fg: brand.colors.lightBg }
    case 'Support':
      return { bg: brand.colors.sand, fg: brand.colors.darkGreen }
    case 'Ignore':
    default:
      return { bg: brand.colors.lightBg, fg: brand.colors.mutedGreen }
  }
}

export default function Slide15PlatformMap() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={15} totalPages={31}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Part B3, Seven platform map
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            Segment by platform priority
          </h1>
        </div>

        <div
          style={{
            border: `1px solid ${brand.colors.sand}`,
            borderRadius: 6,
            overflow: 'hidden',
            maxWidth: '100%',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: `160px repeat(${platforms.length}, minmax(0, 1fr))`, background: brand.colors.gold }}>
            <div style={{ padding: '14px 18px', color: brand.colors.darkGreen, fontWeight: 600, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Segment
            </div>
            {platforms.map((p) => (
              <div key={p} style={{ padding: '14px 12px', color: brand.colors.darkGreen, fontWeight: 600, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>
                {p}
              </div>
            ))}
          </div>
          {segments.map((seg, i) => (
            <div
              key={seg.name}
              style={{
                display: 'grid',
                gridTemplateColumns: `160px repeat(${platforms.length}, minmax(0, 1fr))`,
                background: i % 2 === 0 ? brand.colors.lightBg : brand.colors.sand,
                borderTop: `1px solid ${brand.colors.sand}`,
              }}
            >
              <div style={{ padding: '14px 18px', color: brand.colors.darkGreen, fontWeight: 600, fontSize: 16 }}>
                {seg.name}
              </div>
              {seg.values.map((v, j) => {
                const { bg, fg } = cellColour(v)
                return (
                  <div
                    key={j}
                    style={{
                      padding: '10px 12px',
                      borderLeft: `1px solid ${brand.colors.sand}`,
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        background: bg,
                        color: fg,
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        padding: '4px 8px',
                        borderRadius: 3,
                      }}
                    >
                      {v}
                    </span>
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        <div style={{ color: brand.colors.mutedGreen, fontSize: 14, lineHeight: 1.5, maxWidth: 1400 }}>
          Primary, 40 to 60% of segment spend. Secondary, 20 to 30%. Support, 10 to 15%.
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Part B3, MIS 2026 Master Strategy
        </div>
      </div>
    </SlideFrame>
  )
}

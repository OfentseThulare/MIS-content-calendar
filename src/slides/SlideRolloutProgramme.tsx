import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

type Day = { label: string; title: string; blocks: string[] }

const days: Day[] = [
  {
    label: 'Day 01, 20 July',
    title: 'The opening and the mandate',
    blocks: [
      'Opening address by SAMCA, the editorial pillars in public',
      'Premier of North West Province, policy plenary',
      'Three requests, sixty days to answer, accountability panel 01',
      'Founding sponsor reveal and Fireside Conversation, opening episode',
    ],
  },
  {
    label: 'Day 02, 21 July',
    title: 'The working floor',
    blocks: [
      'Community accountability sessions, host community leaders on stage',
      'Sponsor pillar sessions, five tracks running in parallel',
      'Youth Innovation Challenge, live pitches',
      'Gala Dinner, awards, closing remarks',
    ],
  },
  {
    label: 'Day 03, 22 July',
    title: 'The networks and the next move',
    blocks: [
      'Mayoral Golf Day, Sun City, investor and sponsor network',
      'Closed workshops, policy round tables',
      'Youth Innovation Challenge winner funded to prototype inside 90 days',
      'MIS 2027 teaser released to public, registration opens',
    ],
  },
]

export default function SlideRolloutProgramme() {
  return (
    <SlideFrame bg={brand.colors.darkGreen} textColor={brand.colors.lightBg} showChrome pageNumber={32} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.gold, textTransform: 'uppercase' }}>
            Rollout, programme across three days
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 600, color: brand.colors.gold, margin: '12px 0 0 0', letterSpacing: '-0.01em', maxWidth: 1600 }}>
            Three days, one structural loop, ready to publish
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: '100%', flex: 1, minHeight: 0 }}>
          {days.map((d) => (
            <div
              key={d.label}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: `1px solid ${brand.colors.gold}44`,
                borderRadius: 6,
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <div>
                <div style={{ color: brand.colors.gold, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>
                  {d.label}
                </div>
                <div style={{ color: brand.colors.lightBg, fontSize: 22, fontWeight: 600, marginTop: 6, letterSpacing: '-0.005em' }}>
                  {d.title}
                </div>
              </div>
              <div style={{ height: 1, background: brand.colors.gold, opacity: 0.4 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {d.blocks.map((b) => (
                  <div key={b} style={{ color: brand.colors.sand, fontSize: 14, lineHeight: 1.5 }}>
                    {b}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.sand, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: MIS 2026 Programme of Proceedings, draft. TBC: confirm final timings with SAMCA.
        </div>
      </div>
    </SlideFrame>
  )
}

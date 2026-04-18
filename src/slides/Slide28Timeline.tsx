import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

const phases: Array<{ period: string; phase: string; milestone: string }> = [
  { period: '20 Apr to 31 May', phase: 'Foundation and sponsor close', milestone: 'Paid media live, all six sponsor commitments confirmed' },
  { period: '1 Jun to 12 Jul', phase: 'Conversion window', milestone: 'Registrations open, 450 delegates by 12 July' },
  { period: '13 to 19 Jul', phase: 'Final push', milestone: 'Sold out messaging, logistics confirmed, 550 delegates' },
  { period: '20 to 22 Jul', phase: 'Event live', milestone: 'Three days, three programmes' },
  { period: '23 Jul to 27 Aug', phase: 'Amplify and report', milestone: 'Paid media continues through 27 August to amplify outcomes' },
  { period: '28 Aug onwards', phase: 'Post campaign', milestone: 'Impact report published, sponsor renewal conversations' },
]

export default function Slide28Timeline() {
  return (
    <SlideFrame bg={brand.colors.darkGreen} textColor={brand.colors.lightBg} showChrome pageNumber={28} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.gold, textTransform: 'uppercase' }}>
            Beat 9, New Bliss
          </div>
          <h1 style={{ fontSize: 60, fontWeight: 600, color: brand.colors.gold, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            The critical path
          </h1>
        </div>

        <div style={{ maxWidth: '100%', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {phases.map((p, i) => (
            <div key={p.period} style={{ display: 'grid', gridTemplateColumns: '40px 260px 1fr 1fr', gap: 24, alignItems: 'center' }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 999,
                  border: `2px solid ${brand.colors.gold}`,
                  background: i === phases.length - 1 ? brand.colors.gold : 'transparent',
                }}
              />
              <div style={{ color: brand.colors.gold, fontSize: 16, fontWeight: 600, letterSpacing: '0.02em' }}>{p.period}</div>
              <div style={{ color: brand.colors.lightBg, fontSize: 18, fontWeight: 500 }}>{p.phase}</div>
              <div style={{ color: brand.colors.sand, fontSize: 15, lineHeight: 1.5 }}>{p.milestone}</div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 1400, color: brand.colors.sand, fontSize: 17, lineHeight: 1.6 }}>
          When the three days close, the year begins. Twelve months of pillar chairs, community responses, and funded student projects, all on the record.
        </div>

        <div style={{ maxWidth: 1500, color: brand.colors.gold, fontSize: 14, lineHeight: 1.5, fontStyle: 'italic' }}>
          From 1 June: no new sponsorship conversations. Atlas and SAMCA shift entirely to delegate acquisition, speaker announcements, and programme reveals. Paid media continues through 27 August to amplify outcomes.
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.sand, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Section 06, MIS 2026 Proposal
        </div>
      </div>
    </SlideFrame>
  )
}

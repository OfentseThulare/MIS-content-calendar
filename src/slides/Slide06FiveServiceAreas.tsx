import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

const areas: Array<{ n: string; title: string; body: string }> = [
  {
    n: '01',
    title: 'Sponsor and Delegate Acquisition',
    body: 'Named outreach to mining houses, OEMs, government, and municipalities. Tiered prospectus and tracked pipeline.',
  },
  {
    n: '02',
    title: 'Event Technology and Data Infrastructure',
    body: 'Registration stack, delegate CRM, live polling, dashboards for Jade and board, post-event impact report.',
  },
  {
    n: '03',
    title: 'Content, Narrative and Social Media',
    body: 'Fireside Conversation series, weekly newsletter, LinkedIn and Meta calendar, community radio, WhatsApp broadcasts.',
  },
  {
    n: '04',
    title: 'Design and Collateral',
    body: 'Full brand system, on-site signage, prospectus, gala programme, sponsor wall, delegate collateral, press kit.',
  },
  {
    n: '05',
    title: 'B2B Matchmaking Platform Roadmap',
    body: 'Phase one matchmaking at the summit. Phase two roadmap for a year-round pillar platform tied to SLP delivery.',
  },
]

export default function Slide06FiveServiceAreas() {
  return (
    <SlideFrame bg={brand.colors.darkGreen} textColor={brand.colors.lightBg} showChrome pageNumber={6} totalPages={30}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.22em',
              color: brand.colors.gold,
              textTransform: 'uppercase',
            }}
          >
            Beat 3, What Could Be
          </div>
          <h1
            style={{
              fontSize: 60,
              fontWeight: 600,
              color: brand.colors.gold,
              margin: '12px 0 0 0',
              letterSpacing: '-0.01em',
            }}
          >
            Five areas of delivery
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 1500 }}>
          {areas.map((a) => (
            <div key={a.n} style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 24, alignItems: 'start' }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 4,
                  background: brand.colors.gold,
                  color: brand.colors.darkGreen,
                  fontSize: 28,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {a.n}
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 600, color: brand.colors.lightBg, letterSpacing: '-0.005em' }}>
                  {a.title}
                </div>
                <div style={{ marginTop: 6, fontSize: 16, color: brand.colors.sand, lineHeight: 1.5 }}>
                  {a.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.sand, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: MIS 2026 Proposal, Sections 01 to 05
        </div>
      </div>
    </SlideFrame>
  )
}

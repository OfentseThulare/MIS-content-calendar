import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

type Offer = { title: string; body: string }

const offers: Offer[] = [
  {
    title: 'A single accountable delivery partner',
    body: 'One contract, one project lead, one weekly report. Atlas owns the outcome from outreach to post-event repurposing.',
  },
  {
    title: 'Infrastructure SAMCA keeps after the summit',
    body: 'CRM, automation hub, WhatsApp broadcast list, Beehiiv subscriber base, and content library remain under SAMCA ownership from day one.',
  },
  {
    title: 'A pipeline designed for 500 to 600 qualified delegates',
    body: 'Automated direct outreach at 1,000 segmented touchpoints per day. Every positive response escalated to SAMCA inside 24 hours.',
  },
  {
    title: 'A commercial instrument that funds the next edition',
    body: 'Six named sponsors, five tiers, up to R9.75m at full sell-out. MIS 2027 in market before MIS 2026 closes.',
  },
]

export default function SlideValueOffer() {
  return (
    <SlideFrame bg={brand.colors.darkGreen} textColor={brand.colors.lightBg} showChrome pageNumber={7} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.gold, textTransform: 'uppercase' }}>
            Atlas\u2019s offer to SAMCA
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.gold, margin: '12px 0 0 0', letterSpacing: '-0.01em', maxWidth: 1600 }}>
            What Atlas brings that an in-house team or a generic agency cannot
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 1600 }}>
          {offers.map((o) => (
            <div
              key={o.title}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: `1px solid ${brand.colors.gold}44`,
                borderRadius: 6,
                padding: 28,
              }}
            >
              <div style={{ color: brand.colors.gold, fontSize: 20, fontWeight: 600, letterSpacing: '-0.005em' }}>
                {o.title}
              </div>
              <div style={{ color: brand.colors.sand, fontSize: 15, lineHeight: 1.55, marginTop: 10 }}>
                {o.body}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.sand, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: MIS 2026 Proposal, Atlas scope of work
        </div>
      </div>
    </SlideFrame>
  )
}

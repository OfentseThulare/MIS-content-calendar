import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

const areas: Array<{ n: string; title: string; body: string }> = [
  {
    n: '01',
    title: 'A pipeline that fills the room',
    body: 'Automated direct outreach across LinkedIn and email delivers 1,000 targeted touchpoints per day, segmented by sponsor type and delegate profile. Every positive response is escalated to SAMCA within 24 hours. No manual effort required.',
  },
  {
    n: '02',
    title: 'A brand presence that builds belief',
    body: 'Organic content across LinkedIn, Facebook, Instagram, TikTok, YouTube, and WhatsApp. Speaker announcements, government endorsements, and sponsor reveals on a structured weekly calendar. Reach driven entirely by SAMCA board, sponsor, and partner amplification.',
  },
  {
    n: '03',
    title: 'An infrastructure that owns the data',
    body: 'CRM, n8n automation hub, WhatsApp sequences, and email workflows connected from Day 1. Every contact, every registration, every sponsor conversation tracked. SAMCA owns all credentials and data from first milestone.',
  },
  {
    n: '04',
    title: 'Collateral that closes sponsors',
    body: 'Investment-grade sponsorship prospectus, six personalised sponsor one-pagers, full digital brand identity system, social and email templates, and a post-event impact report delivered within 14 days of close.',
  },
  {
    n: '05',
    title: 'Content that travels beyond the room',
    body: 'One Fireside Conversation produces five finished pieces in under four hours. On-site production team captures all three days. Post-event repurposing campaign runs for 30 days after the summit closes.',
  },
]

export default function Slide06FiveServiceAreas() {
  return (
    <SlideFrame bg={brand.colors.darkGreen} textColor={brand.colors.lightBg} showChrome pageNumber={6} totalPages={39}>
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
            What Atlas delivers
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
            Five outcomes Atlas will deliver
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

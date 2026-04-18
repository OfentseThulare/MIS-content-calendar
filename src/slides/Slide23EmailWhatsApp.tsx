import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'
import DataCard from '../components/DataCard'

const points: Array<{ label: string; body: string }> = [
  {
    label: 'Fireside weekly newsletter (Beehiiv)',
    body: 'Published every Monday. Five sections: pillar of the week, Fireside episode preview, speaker spotlight, community highlight, registration CTA. Grows from 500 to 4,200 subscribers across the 18 week flight.',
  },
  {
    label: 'Five-touch delegate nurture sequence',
    body: 'Triggered on first email capture. Touch 1: the accountability table. Touch 2: social proof (sponsor names). Touch 3: agenda reveal. Touch 4: personalised pillar-specific content. Touch 5: early-bird urgency close.',
  },
  {
    label: 'Sponsor negotiation cadence',
    body: 'Seven personalised touches across 6 weeks. Sent from Lee or a named SAMCA board member. Never generic. Target: 40 named sponsor accounts.',
  },
  {
    label: 'WhatsApp templates, 8 messages, 4 phases',
    body: 'Turn.io POPIA-compliant broadcast. Marketing template R0.68 per send. Utility template R0.14. 3,800 opted-in contacts. 95%+ open rate within 30 minutes.',
  },
  {
    label: 'WhatsApp n8n automation',
    body: 'Five automated triggers: form submission to welcome, sponsor announcement to broadcast, registration confirmed to delegate pass PDF, 7 days before summit to logistics, STOP reply to opt-out.',
  },
]

export default function Slide23EmailWhatsApp() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={23} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Beat 7, Hero execution 02
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            Email and WhatsApp
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, maxWidth: '100%', flex: 1, minHeight: 0 }}>
          <DataCard>
            <div style={{ color: brand.colors.amber, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
              Direct channel system
            </div>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {points.map((p) => (
                <div key={p.label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <div style={{ color: brand.colors.darkGreen, fontSize: 17, fontWeight: 600 }}>{p.label}</div>
                  <div style={{ color: brand.colors.bodyText, fontSize: 15, lineHeight: 1.5 }}>{p.body}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
              Source: Master Strategy Parts C6, C7 and WhatsApp cost model
            </div>
          </DataCard>

          <iframe
            src="/mis2026-email.html"
            title="MIS 2026 Fireside weekly email preview"
            style={{ width: '100%', height: '100%', border: 'none', background: '#ffffff', display: 'block' }}
          />
        </div>
      </div>
    </SlideFrame>
  )
}

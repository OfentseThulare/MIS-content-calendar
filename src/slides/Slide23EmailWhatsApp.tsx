import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

const points: Array<{ label: string; body: string }> = [
  {
    label: 'Fireside weekly newsletter (Beehiiv)',
    body: 'Published every Monday. Five sections: pillar of the week, Fireside episode preview, speaker spotlight, community highlight, registration CTA. Grows from 500 to 4,200 subscribers over 12 weeks.',
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
          <div
            style={{
              background: brand.colors.sand,
              borderRadius: 6,
              padding: 32,
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 24,
                bottom: 24,
                width: 4,
                background: brand.colors.gold,
              }}
            />
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
          </div>

          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 6,
              border: `1.5px solid ${brand.colors.gold}`,
              overflow: 'hidden',
              background: '#ffffff',
              boxShadow: '0 18px 48px rgba(15, 30, 18, 0.16)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 16px',
                borderBottom: `1px solid ${brand.colors.gold}55`,
                background: brand.colors.sand,
                flexShrink: 0,
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ED6A5E', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#F4BF4F', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#61C554', display: 'inline-block' }} />
              <div
                style={{
                  marginLeft: 12,
                  color: brand.colors.amber,
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                Fireside weekly, preview
              </div>
            </div>
            <iframe
              src="/mis2026-email.html"
              title="MIS 2026 Fireside weekly email preview"
              style={{ flex: 1, width: '100%', border: 'none', background: '#ffffff' }}
            />
          </div>
        </div>
      </div>
    </SlideFrame>
  )
}

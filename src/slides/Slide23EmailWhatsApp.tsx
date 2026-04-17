import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'
import PlaceholderZone from '../components/PlaceholderZone'

const points: Array<{ label: string; body: string }> = [
  { label: 'Delegate nurture', body: 'Five-touch email sequence: welcome, social proof, agenda, personalised, urgency.' },
  { label: 'WhatsApp templates', body: 'Eight templates across the four campaign phases.' },
  { label: 'WhatsApp cost model', body: 'R22,329 total for 12 weeks on Turn.io.' },
  { label: 'Open rate', body: '95% within 30 minutes of send.' },
]

export default function Slide23EmailWhatsApp() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={23} totalPages={30}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Beat 7, Hero execution 02
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            Email and WhatsApp
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, maxWidth: 1750, flex: 1, minHeight: 0 }}>
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
              Source: Parts C6 and C7, MIS 2026 Master Strategy
            </div>
          </div>

          <PlaceholderZone label="Email and WhatsApp design concepts to be added" />
        </div>
      </div>
    </SlideFrame>
  )
}

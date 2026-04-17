import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

const outputs: string[] = [
  '8 to 12 vertical clips in 15 minutes, Opus Clip Pro auto-edit',
  'Top 3 clips refined with brand lower thirds in 20 minutes each, Descript',
  'LinkedIn carousel generated from transcript in 25 minutes, Canva master template',
  'Beehiiv newsletter summary written in 20 minutes',
  'WhatsApp audiogram produced in 10 minutes, Headliner',
  'Full YouTube episode with chapters exported in 45 minutes',
]

export default function Slide24ContentSystem() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={24} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Beat 8, Hero execution 03
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            Content production system
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
              One Fireside, five pieces, under four hours
            </div>
            <div style={{ marginTop: 18, color: brand.colors.darkGreen, fontSize: 18, fontWeight: 500 }}>
              One 45-minute Fireside Conversation, recorded on Riverside, produces:
            </div>
            <ul style={{ marginTop: 14, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {outputs.map((o) => (
                <li key={o} style={{ color: brand.colors.bodyText, fontSize: 15, lineHeight: 1.5 }}>
                  {o}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 18, color: brand.colors.amber, fontSize: 15, fontWeight: 600 }}>
              Five finished pieces. Under four hours. Canva master files with SAMCA brand tokens, any team member can produce on-brand collateral in 30 seconds.
            </div>
            <div style={{ marginTop: 20, color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
              Source: Master Strategy Part E1
            </div>
          </div>

          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 8,
              overflow: 'hidden',
              boxShadow: '0 18px 48px rgba(15, 30, 18, 0.18)',
            }}
          >
            <img
              src="/page30-cta.jpg"
              alt="Sample Fireside Conversation deliverables, six finished pieces"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </SlideFrame>
  )
}

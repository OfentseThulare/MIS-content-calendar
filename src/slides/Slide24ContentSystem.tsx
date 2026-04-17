import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'
import PlaceholderZone from '../components/PlaceholderZone'

const outputs: string[] = [
  'Three polished video clips, Opus Clip plus Descript',
  'One LinkedIn carousel, Canva template',
  'One newsletter summary, Beehiiv',
  'One WhatsApp audiogram, Headliner',
  'One full YouTube episode with chapters',
]

export default function Slide24ContentSystem() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={24} totalPages={30}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Beat 8, Hero execution 03
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            Content production system
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
              One Fireside, five pieces, under four hours
            </div>
            <div style={{ marginTop: 18, color: brand.colors.darkGreen, fontSize: 18, fontWeight: 500 }}>
              One Fireside Conversation, 45 minutes, produces:
            </div>
            <ul style={{ marginTop: 14, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {outputs.map((o) => (
                <li key={o} style={{ color: brand.colors.bodyText, fontSize: 15, lineHeight: 1.5 }}>
                  {o}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 18, color: brand.colors.amber, fontSize: 15, fontWeight: 600 }}>
              Total production time, under four hours.
            </div>
            <div style={{ marginTop: 20, color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
              Source: Part E1, MIS 2026 Master Strategy
            </div>
          </div>

          <PlaceholderZone label="Sample content pieces to be added" />
        </div>
      </div>
    </SlideFrame>
  )
}

import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

const calendar: Array<{ day: string; post: string; type: string }> = [
  { day: 'Monday', post: 'Fireside recap clip (60 sec vertical), LinkedIn and YouTube Shorts', type: 'Organic' },
  { day: 'Tuesday', post: 'Pillar thought leadership post, Lee or SAMCA board member personal page', type: 'Organic' },
  { day: 'Wednesday', post: 'Sponsor or speaker announcement carousel', type: 'Organic plus Paid boost' },
  { day: 'Thursday', post: 'Fireside Conversation live session (7pm to 9pm)', type: 'Organic' },
  { day: 'Friday', post: 'Week recap with registration CTA, LinkedIn sponsored', type: 'Paid' },
]

export default function Slide22DigitalSocial() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={22} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Beat 6, Hero execution 01
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            Digital and social campaign
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
              LinkedIn content calendar
            </div>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {calendar.map((c) => (
                <div key={c.day} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 140px', alignItems: 'baseline' }}>
                  <div style={{ color: brand.colors.darkGreen, fontSize: 15, fontWeight: 600 }}>{c.day}</div>
                  <div style={{ color: brand.colors.bodyText, fontSize: 15 }}>{c.post}</div>
                  <div style={{ color: brand.colors.amber, fontSize: 13, fontWeight: 600, textAlign: 'right' }}>{c.type}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
              Source: Master Strategy Part C1 and Part B4
            </div>
          </div>

          <div
            style={{
              width: '100%',
              height: '100%',
              background: brand.colors.sand,
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 48,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src="/atlas-logo-hero.png"
              alt="Atlas Consulting Group"
              style={{
                maxWidth: '78%',
                maxHeight: '78%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </SlideFrame>
  )
}

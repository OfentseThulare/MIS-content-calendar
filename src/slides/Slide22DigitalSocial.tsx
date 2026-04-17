import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'
import PlaceholderZone from '../components/PlaceholderZone'

const calendar: Array<{ day: string; post: string; boost: string }> = [
  { day: 'Monday', post: 'Fireside clip 60 seconds on SAMCA page', boost: 'R3k boost' },
  { day: 'Tuesday', post: 'Pillar thought leadership on Lee personal', boost: 'R4k boost' },
  { day: 'Wednesday', post: 'Sponsor or speaker announcement', boost: 'R5k boost' },
  { day: 'Thursday', post: 'Delegate spotlight', boost: 'Organic' },
  { day: 'Friday', post: 'Week recap with registration CTA', boost: 'R3k boost' },
]

export default function Slide22DigitalSocial() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={22} totalPages={30}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Beat 6, Hero execution 01
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            Digital and social campaign
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
              LinkedIn content calendar
            </div>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {calendar.map((c) => (
                <div key={c.day} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 140px', alignItems: 'baseline' }}>
                  <div style={{ color: brand.colors.darkGreen, fontSize: 15, fontWeight: 600 }}>{c.day}</div>
                  <div style={{ color: brand.colors.bodyText, fontSize: 15 }}>{c.post}</div>
                  <div style={{ color: brand.colors.amber, fontSize: 13, fontWeight: 600, textAlign: 'right' }}>{c.boost}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
              Source: Part C1, MIS 2026 Master Strategy
            </div>
          </div>

          <PlaceholderZone label="Creative concepts to be added" />
        </div>
      </div>
    </SlideFrame>
  )
}

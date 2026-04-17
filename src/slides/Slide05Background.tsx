import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

export default function Slide05Background() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={5} totalPages={31}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.22em',
              color: brand.colors.amber,
              textTransform: 'uppercase',
            }}
          >
            Beat 2, What Is
          </div>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 600,
              color: brand.colors.darkGreen,
              margin: '12px 0 0 0',
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              maxWidth: 1400,
            }}
          >
            The summit that refuses to be a conference
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'start' }}>
          <p
            style={{
              fontSize: 22,
              lineHeight: 1.6,
              color: brand.colors.bodyText,
              margin: 0,
              maxWidth: 860,
            }}
          >
            MIS 2026 is a three day event targeting 500 to 600 delegates across mining houses, host communities, government, investors, SMMEs, and traditional leadership. The position is deliberately non-adversarial. Data, recognition, and facilitated dialogue do the work.
          </p>

          <div
            style={{
              position: 'relative',
              paddingLeft: 28,
              color: brand.colors.darkGreen,
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 4,
                bottom: 4,
                width: 3,
                background: brand.colors.gold,
              }}
            />
            <div style={{ fontSize: 14, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase', fontWeight: 600 }}>
              Position
            </div>
            <div style={{ fontSize: 20, marginTop: 10, color: brand.colors.bodyText, lineHeight: 1.5 }}>
              Inaugural provincial summit. Annually rotating. Northern Cape and Limpopo already lined up as future editions.
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: SAMCA Brief, April 2026
        </div>
      </div>
    </SlideFrame>
  )
}

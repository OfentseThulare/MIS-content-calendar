import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

export default function Slide04ClientSummary() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={4} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 56, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 900 }}>
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
              The client, a structural mandate
            </div>
            <h1
              style={{
                fontSize: 60,
                fontWeight: 600,
                color: brand.colors.darkGreen,
                margin: '14px 0 0 0',
                lineHeight: 1.06,
                letterSpacing: '-0.01em',
              }}
            >
              SAMCA holds the mandate no one else does
            </h1>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontSize: 22, lineHeight: 1.55, color: brand.colors.bodyText, margin: 0 }}>
              SAMCA is the only national body with a structural mandate to convene mining houses, host communities, government, investors, and youth around a single accountability framework.
            </p>
            <p style={{ fontSize: 22, lineHeight: 1.55, color: brand.colors.bodyText, margin: 0 }}>
              SAMCA does not lobby for any one group.
            </p>
            <p style={{ fontSize: 22, lineHeight: 1.55, color: brand.colors.darkGreen, fontWeight: 500, margin: 0 }}>
              SAMCA sits at the intersection, and publishes what it hears.
            </p>
          </div>
        </div>

        <img
          src="/page4-hero.jpg"
          alt="SAMCA at the intersection of mining, community, government, investment, and youth"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>
    </SlideFrame>
  )
}

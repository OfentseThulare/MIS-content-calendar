import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

export default function Slide02RoomAcknowledgement() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={2} totalPages={31}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ position: 'relative', paddingLeft: 40, maxWidth: 1200 }}>
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 8,
              bottom: 8,
              width: 4,
              background: brand.colors.gold,
            }}
          />
          <p
            style={{
              fontSize: 24,
              lineHeight: 1.55,
              color: brand.colors.bodyText,
              fontWeight: 400,
              margin: 0,
            }}
          >
            This strategy was built from the ground up after a direct conversation with Jade Adams, CEO of SAMCA, on 15 April 2026. Every concern raised in that meeting has been answered in this document.
          </p>
        </div>
      </div>
    </SlideFrame>
  )
}

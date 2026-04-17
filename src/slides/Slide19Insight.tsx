import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

export default function Slide19Insight() {
  return (
    <SlideFrame bg={brand.colors.darkGreen} textColor={brand.colors.lightBg} showChrome pageNumber={19} totalPages={39}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 40,
          paddingRight: 240,
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: '0.22em',
            color: brand.colors.gold,
            textTransform: 'uppercase',
            marginBottom: 32,
          }}
        >
          The insight
        </div>
        <p
          style={{
            fontSize: 48,
            lineHeight: 1.28,
            fontWeight: 500,
            color: brand.colors.lightBg,
            letterSpacing: '-0.005em',
            margin: 0,
            maxWidth: 1280,
          }}
        >
          Integration is not a programme format. It is a{' '}
          <span style={{ color: brand.colors.gold, fontWeight: 600 }}>trust architecture</span>.
        </p>
      </div>
    </SlideFrame>
  )
}

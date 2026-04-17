import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

export default function Slide20BigIdea() {
  return (
    <SlideFrame bg={brand.colors.darkGreen} textColor={brand.colors.lightBg} showChrome pageNumber={20} totalPages={30}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: '0.22em',
            color: brand.colors.gold,
            textTransform: 'uppercase',
            marginBottom: 28,
          }}
        >
          The big idea
        </div>
        <h1
          style={{
            fontSize: 128,
            lineHeight: 1.02,
            fontWeight: 600,
            color: brand.colors.gold,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          Mine the future,{' '}
          <span className="shimmer-together">together.</span>
        </h1>
        <div
          style={{
            marginTop: 36,
            fontSize: 24,
            color: brand.colors.sand,
            letterSpacing: '0.02em',
          }}
        >
          Three days. Five promises. One accountability table.
        </div>
      </div>
    </SlideFrame>
  )
}

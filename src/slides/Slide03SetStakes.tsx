import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

export default function Slide03SetStakes() {
  return (
    <SlideFrame bg={brand.colors.darkGreen} textColor={brand.colors.lightBg} showChrome pageNumber={3} totalPages={30}>
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
        <p
          style={{
            fontSize: 48,
            lineHeight: 1.3,
            fontWeight: 500,
            color: brand.colors.lightBg,
            letterSpacing: '-0.005em',
            margin: 0,
            maxWidth: 1360,
          }}
        >
          The mining sector&rsquo;s next decade will not be defined by what is extracted, but by who is{' '}
          <span style={{ color: brand.colors.gold, fontWeight: 600 }}>trusted</span> to extract it.
        </p>
      </div>
    </SlideFrame>
  )
}

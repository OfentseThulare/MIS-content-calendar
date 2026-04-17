import SlideFrame from '../components/SlideFrame'
import { brand } from '../lib/brand'

export default function Slide03SetStakes() {
  return (
    <SlideFrame>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: 1500,
        }}
      >
        <div
          style={{
            fontSize: 14,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: brand.colors.miningGold,
            marginBottom: 40,
          }}
        >
          Beat one, the stakes
        </div>
        <h1
          style={{
            fontSize: 48,
            fontWeight: 500,
            lineHeight: 1.2,
            color: brand.colors.kalahariCream,
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          The mining sector's next decade will be defined not by what is
          extracted, but by who is{' '}
          <span style={{ color: brand.colors.miningGold }}>trusted</span> to
          extract it.
        </h1>
      </div>
    </SlideFrame>
  )
}

import SlideFrame from '../components/SlideFrame'
import { brand } from '../lib/brand'

export default function Slide11BigIdea() {
  return (
    <SlideFrame>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
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
          The idea
        </div>
        <h1
          style={{
            fontSize: 96,
            fontWeight: 600,
            color: brand.colors.kalahariCream,
            margin: 0,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            maxWidth: 1500,
          }}
        >
          Where the mine meets the <span className="shimmer-future">future</span>.
        </h1>
      </div>
    </SlideFrame>
  )
}

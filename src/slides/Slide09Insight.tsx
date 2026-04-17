import SlideFrame from '../components/SlideFrame'
import { brand } from '../lib/brand'

export default function Slide09Insight() {
  return (
    <SlideFrame>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 120px',
        }}
      >
        <p
          style={{
            fontSize: 48,
            fontWeight: 500,
            color: brand.colors.kalahariCream,
            lineHeight: 1.2,
            maxWidth: 1400,
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          Integration is not a programme format. It is a{' '}
          <span style={{ color: brand.colors.miningGold }}>trust architecture</span>.
        </p>
      </div>
    </SlideFrame>
  )
}

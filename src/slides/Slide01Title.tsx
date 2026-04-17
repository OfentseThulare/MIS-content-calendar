import SlideFrame from '../components/SlideFrame'
import { brand } from '../lib/brand'

export default function Slide01Title() {
  return (
    <SlideFrame bg={brand.colors.shaftBlack}>
      <svg
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.05,
          pointerEvents: 'none',
        }}
      >
        <defs>
          <pattern id="mis-grid" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
            <path d="M 0 40 L 80 40" stroke={brand.colors.miningGold} strokeWidth="1" />
            <path d="M 40 0 L 40 80" stroke={brand.colors.miningGold} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mis-grid)" />
      </svg>

      <div
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 500,
            color: brand.colors.kalahariCream,
            letterSpacing: '0.02em',
            lineHeight: 1.1,
            maxWidth: 1400,
          }}
        >
          THE MINING INTEGRATION SUMMIT 2026
        </div>
        <div
          style={{
            marginTop: 48,
            width: '40%',
            height: 1,
            background: brand.colors.miningGold,
          }}
        />
        <div
          style={{
            marginTop: 48,
            fontSize: 24,
            fontWeight: 400,
            color: brand.colors.editorialGrey,
            letterSpacing: '0.04em',
          }}
        >
          Integrated Marketing Communications Strategy
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 80,
          left: 80,
          color: brand.colors.editorialGrey,
          fontSize: 14,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        September 2026, Johannesburg, South Africa
      </div>
    </SlideFrame>
  )
}

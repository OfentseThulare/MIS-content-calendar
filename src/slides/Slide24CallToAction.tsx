import SlideFrame from '../components/SlideFrame'
import { brand } from '../lib/brand'

export default function Slide24CallToAction() {
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
          Beat ten, the call
        </div>
        <h1
          style={{
            fontSize: 96,
            fontWeight: 500,
            color: brand.colors.kalahariCream,
            margin: 0,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          Let us build this together.
        </h1>
        <div
          style={{
            marginTop: 64,
            width: 160,
            height: 1,
            background: brand.colors.miningGold,
          }}
        />
        <div
          style={{
            marginTop: 48,
            fontSize: 20,
            color: brand.colors.kalahariCream,
            letterSpacing: '0.04em',
          }}
        >
          Ofentse Thulare, Atlas Consulting Group
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 18,
            color: brand.colors.editorialGrey,
            letterSpacing: '0.04em',
          }}
        >
          ofentse@atlascg.co.za, +27 XX XXX XXXX
        </div>
      </div>
    </SlideFrame>
  )
}

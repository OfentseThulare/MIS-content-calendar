import SlideFrame from '../components/SlideFrame'
import { brand } from '../lib/brand'

export default function Slide12Manifesto() {
  return (
    <SlideFrame>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: 1400,
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
          Manifesto
        </div>
        <div
          style={{
            display: 'flex',
            gap: 40,
            alignItems: 'stretch',
          }}
        >
          <div
            style={{
              width: 4,
              background: brand.colors.miningGold,
              flexShrink: 0,
            }}
          />
          <p
            style={{
              fontSize: 28,
              fontWeight: 400,
              lineHeight: 1.55,
              color: brand.colors.kalahariCream,
              margin: 0,
            }}
          >
            We did not build this summit for applause. We built it because the
            ground beneath Southern Africa holds more than minerals. It holds
            futures. And futures demand that the geologist and the grandmother
            sit in the same room. That the investor and the community organiser
            share the same stage. This is not a conference. This is where the
            mine meets the future.
          </p>
        </div>
      </div>
    </SlideFrame>
  )
}

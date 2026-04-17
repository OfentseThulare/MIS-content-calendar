import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'
import GoldCheckerboard from '../components/GoldCheckerboard'

export default function Slide30CallToAction() {
  return (
    <SlideFrame bg={brand.colors.darkGreen} textColor={brand.colors.lightBg}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 20%, rgba(226,187,57,0.12) 0%, rgba(38,69,39,0.0) 60%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 120,
        }}
      >
        <div style={{ fontSize: 24, color: brand.colors.lightBg, letterSpacing: '0.06em', fontWeight: 500 }}>
          Together Building a Prosperous, Inclusive North West
        </div>

        <div
          style={{
            marginTop: 18,
            fontSize: 18,
            color: brand.colors.mutedGreen,
            letterSpacing: '0.08em',
          }}
        >
          20 to 22 July 2026 | Rustenburg, Sun City | North West Province
        </div>

        <h1
          style={{
            marginTop: 48,
            fontSize: 84,
            fontWeight: 600,
            color: brand.colors.gold,
            letterSpacing: '-0.01em',
            lineHeight: 1.05,
            maxWidth: 1500,
          }}
        >
          The Mining Integration Summit &rsquo;26
        </h1>

        <div style={{ marginTop: 36, width: 240, height: 6, background: brand.colors.gold, borderRadius: 3 }} />

        <div
          style={{
            marginTop: 40,
            fontSize: 14,
            color: brand.colors.darkBrown,
            letterSpacing: '0.08em',
            fontWeight: 500,
          }}
        >
          Presented by SAMCA | Delivered by Atlas Consulting Group
        </div>

        <div
          style={{
            marginTop: 18,
            fontSize: 14,
            color: brand.colors.sand,
            letterSpacing: '0.04em',
          }}
        >
          Ofentse Thulare | Atlas Consulting Group | ofentse@atlascg.co.za
        </div>

        <div style={{ position: 'absolute', left: 80, bottom: 80, opacity: 0.6 }}>
          <GoldCheckerboard cols={4} rows={5} cell={16} />
        </div>
        <div style={{ position: 'absolute', right: 80, bottom: 80, opacity: 0.6, transform: 'rotate(180deg)' }}>
          <GoldCheckerboard cols={4} rows={5} cell={16} />
        </div>
      </div>
    </SlideFrame>
  )
}

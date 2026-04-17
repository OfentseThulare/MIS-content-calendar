import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'
import GoldCheckerboard from '../components/GoldCheckerboard'

export default function Slide01Title() {
  return (
    <SlideFrame bg={brand.colors.darkGreen} textColor={brand.colors.lightBg}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(226,187,57,0.12) 0%, rgba(38,69,39,0.0) 55%), linear-gradient(135deg, rgba(38,69,39,0.55) 0%, rgba(38,69,39,0.0) 70%)',
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
          justifyContent: 'space-between',
          padding: 120,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: brand.colors.lightBg,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            Integrated Services
          </div>
          <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', gap: 18 }}>
            <div
              style={{
                fontSize: 42,
                fontWeight: 600,
                color: brand.colors.gold,
                letterSpacing: '0.01em',
              }}
            >
              Proposal
            </div>
            <div
              style={{
                fontSize: 54,
                fontWeight: 600,
                color: brand.colors.lightBg,
                letterSpacing: '0.01em',
              }}
            >
              2026
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            left: 120,
            right: 120,
            top: '85%',
            height: 1.5,
            background: brand.colors.gold,
          }}
        />

        <div style={{ marginTop: 'auto' }}>
          <div
            style={{
              fontSize: 9,
              letterSpacing: '0.32em',
              color: brand.colors.gold,
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            20 to 22 July 2026 | Day Programme | Gala Dinner | Mayoral Golf Day
          </div>
          <div
            style={{
              marginTop: 10,
              fontSize: 9,
              fontStyle: 'italic',
              color: brand.colors.mutedGreen,
              letterSpacing: '0.06em',
            }}
          >
            Sustainable Harmony and Accountability for Transformation
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 14,
              color: brand.colors.sand,
              letterSpacing: '0.08em',
            }}
          >
            Presented by SAMCA, South African Mining Communities Association
          </div>
        </div>

        <div style={{ position: 'absolute', right: 80, bottom: 80 }}>
          <GoldCheckerboard cols={4} rows={5} cell={18} />
        </div>
      </div>
    </SlideFrame>
  )
}

import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'
import GoldCheckerboard from '../components/GoldCheckerboard'

const approvals: Array<{ n: string; title: string; detail: string }> = [
  {
    n: '01',
    title: 'Approve the scope and investment',
    detail: 'R415,620 Atlas retainer across three months, plus R500,000 client-controlled ad budget.',
  },
  {
    n: '02',
    title: 'Approve the six named sponsor targets',
    detail: 'Sibanye-Stillwater, Harmony Gold, NYDA, Impala or Northam, OEM suppliers, Bojanala District Municipality.',
  },
  {
    n: '03',
    title: 'Approve Atlas to start on Monday',
    detail: 'Week 1 deliverables begin on signature. Full system live inside fourteen days.',
  },
]

export default function Slide30CallToAction() {
  return (
    <SlideFrame bg={brand.colors.darkGreen} textColor={brand.colors.lightBg} showChrome pageNumber={39} totalPages={39}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 10%, rgba(226,187,57,0.10) 0%, rgba(38,69,39,0.0) 60%)',
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
          justifyContent: 'center',
          gap: 36,
          maxWidth: 1500,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.22em',
              color: brand.colors.gold,
              textTransform: 'uppercase',
            }}
          >
            The decision
          </div>
          <h1
            style={{
              marginTop: 14,
              fontSize: 64,
              fontWeight: 600,
              color: brand.colors.gold,
              letterSpacing: '-0.01em',
              lineHeight: 1.06,
              maxWidth: 1400,
            }}
          >
            Three approvals, one signature, Atlas starts Monday
          </h1>
        </div>

        <div style={{ height: 1, background: brand.colors.gold, width: 220, opacity: 0.9 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 1400 }}>
          {approvals.map((a) => (
            <div key={a.n} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 24, alignItems: 'start' }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 4,
                  background: brand.colors.gold,
                  color: brand.colors.darkGreen,
                  fontSize: 24,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {a.n}
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 600, color: brand.colors.lightBg, letterSpacing: '-0.005em' }}>
                  {a.title}
                </div>
                <div style={{ marginTop: 4, fontSize: 16, color: brand.colors.sand, lineHeight: 1.5 }}>
                  {a.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 12,
            fontSize: 14,
            color: brand.colors.sand,
            letterSpacing: '0.04em',
          }}
        >
          Ofentse Thulare | Atlas Consulting Group | ofentse@atlascg.co.za
        </div>

        <div style={{ position: 'absolute', left: 0, bottom: 0, opacity: 0.45 }}>
          <GoldCheckerboard cols={4} rows={5} cell={16} />
        </div>
        <div style={{ position: 'absolute', right: 0, bottom: 0, opacity: 0.45, transform: 'rotate(180deg)' }}>
          <GoldCheckerboard cols={4} rows={5} cell={16} />
        </div>
      </div>
    </SlideFrame>
  )
}

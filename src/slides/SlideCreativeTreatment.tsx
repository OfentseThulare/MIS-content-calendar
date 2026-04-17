import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

type Pillar = { label: string; body: string }

const pillars: Pillar[] = [
  {
    label: 'Tone',
    body: 'Institutional, not promotional. Atlas writes as SAMCA would speak on the record.',
  },
  {
    label: 'Photography',
    body: 'Documentary frame. Working sites, real delegates, direct eye line. No generic stock.',
  },
  {
    label: 'Typography',
    body: 'Geist for headlines, set tight. Body at 22 to 24 point. Numerals in tabular figures.',
  },
  {
    label: 'Palette',
    body: 'Dark green authority, gold accountability, sand warmth. Amber only for emphasis.',
  },
  {
    label: 'Motion',
    body: 'Slow, deliberate. 32 frame slide-ins, no parallax on hero video.',
  },
]

export default function SlideCreativeTreatment() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={25} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 800 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
              Creative treatment
            </div>
            <h1 style={{ fontSize: 54, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
              The look and feel of an institution, not a campaign
            </h1>
          </div>

          <div style={{ height: 1, background: brand.colors.gold, width: 180, opacity: 0.9 }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {pillars.map((p) => (
              <div key={p.label} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 18 }}>
                <div style={{ color: brand.colors.amber, fontSize: 13, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', paddingTop: 2 }}>
                  {p.label}
                </div>
                <div style={{ color: brand.colors.bodyText, fontSize: 16, lineHeight: 1.5 }}>{p.body}</div>
              </div>
            ))}
          </div>
        </div>

        <img
          src="/page27-moodboard.svg"
          alt="MIS 2026 creative direction moodboard"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>
    </SlideFrame>
  )
}

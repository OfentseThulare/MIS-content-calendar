import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

type Layer = { label: string; retention: string; mis: string; width: number; colour: string }

const layers: Layer[] = [
  { label: 'Lecture', retention: '5% retention', mis: 'Not the format for MIS', width: 100, colour: brand.colors.sand },
  { label: 'Reading', retention: '10% retention', mis: 'Post-event report only', width: 85, colour: brand.colors.sand },
  { label: 'Audio, video', retention: '20% retention', mis: 'Fireside Conversations, between editions', width: 70, colour: brand.colors.mutedGreen },
  { label: 'Demonstration', retention: '30% retention', mis: 'Youth Innovation Challenge finals on stage', width: 55, colour: brand.colors.sage },
  { label: 'Group discussion', retention: '50% retention', mis: 'Accountability sessions, five groups in one room', width: 42, colour: brand.colors.amber },
  { label: 'Practice by doing', retention: '75% retention', mis: 'Mayoral Golf Day, community consultations', width: 30, colour: brand.colors.gold },
  { label: 'Teach others', retention: '90% retention', mis: 'Published proceedings, delegates teach their constituencies', width: 20, colour: brand.colors.darkGreen },
]

export default function SlideLearningPyramid() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={19} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            The learning architecture
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em', maxWidth: 1600 }}>
            MIS is built at the bottom of the pyramid, where learning actually sticks
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, maxWidth: 1600, flex: 1, minHeight: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            {layers.map((l) => (
              <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', justifyContent: 'center' }}>
                <div
                  style={{
                    width: `${l.width}%`,
                    padding: '10px 18px',
                    background: l.colour,
                    color: l.colour === brand.colors.darkGreen || l.colour === brand.colors.amber ? brand.colors.lightBg : brand.colors.darkGreen,
                    fontSize: 14,
                    fontWeight: 600,
                    textAlign: 'center',
                    borderRadius: 2,
                  }}
                >
                  {l.label}
                </div>
                <div style={{ color: brand.colors.mutedGreen, fontSize: 13, minWidth: 110, fontWeight: 500 }}>{l.retention}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center' }}>
            {layers.map((l) => (
              <div key={l.label} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 16, fontSize: 14 }}>
                <div style={{ color: brand.colors.darkGreen, fontWeight: 600 }}>{l.label}</div>
                <div style={{ color: brand.colors.bodyText, lineHeight: 1.45 }}>{l.mis}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: NTL Learning Pyramid, adapted. TBC: confirm citation with SAMCA research lead.
        </div>
      </div>
    </SlideFrame>
  )
}

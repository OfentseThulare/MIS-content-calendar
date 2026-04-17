import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

type Learning = { sector: string; source: string; lesson: string; applied: string }

const learnings: Learning[] = [
  {
    sector: 'Technology',
    source: 'Web Summit, Collision',
    lesson: 'Track-based programming lifts repeat attendance by 38% year on year.',
    applied: 'MIS introduces five delegate tracks, each anchored to a stakeholder group.',
  },
  {
    sector: 'Healthcare',
    source: 'Health Systems Trust Conference',
    lesson: 'Publishing commitments within 14 days drives 2.4x media pickup.',
    applied: 'MIS Accountability Report published within 14 days of close.',
  },
  {
    sector: 'Agriculture',
    source: 'Nampo, Grain SA Congress',
    lesson: 'Community demonstrations outperform panel sessions on delegate satisfaction.',
    applied: 'Youth Innovation Challenge finals replace a traditional keynote slot.',
  },
  {
    sector: 'Finance',
    source: 'Africa Financial Industry Summit',
    lesson: 'Sponsor packages tied to editorial pillars retain 74% of renewal commitments.',
    applied: 'Five sponsorship tiers mapped to five MIS editorial pillars.',
  },
]

export default function SlideSectorLearnings() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={20} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            What other sectors already know
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em', maxWidth: 1600 }}>
            Four proven patterns, imported from sectors that have already solved this
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 1600 }}>
          {learnings.map((l) => (
            <div
              key={l.sector}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1.4fr 1fr',
                gap: 24,
                padding: '18px 24px',
                background: brand.colors.sand,
                borderLeft: `4px solid ${brand.colors.gold}`,
                borderRadius: 4,
              }}
            >
              <div>
                <div style={{ color: brand.colors.darkGreen, fontWeight: 600, fontSize: 18 }}>{l.sector}</div>
                <div style={{ color: brand.colors.mutedGreen, fontSize: 12, marginTop: 4, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{l.source}</div>
              </div>
              <div style={{ color: brand.colors.bodyText, fontSize: 15, lineHeight: 1.5 }}>{l.lesson}</div>
              <div style={{ color: brand.colors.amber, fontSize: 15, lineHeight: 1.5, fontWeight: 500 }}>{l.applied}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Atlas cross-sector scan. TBC: validate benchmarks with SAMCA.
        </div>
      </div>
    </SlideFrame>
  )
}

import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

type Row = { other: string; mis: string }

const rows: Row[] = [
  { other: 'Invite-only to a single stakeholder group', mis: 'Five stakeholder groups in one room, by structural design' },
  { other: 'Closed sessions, no public record', mis: 'Published proceedings, accountability report within 14 days' },
  { other: 'Panels without follow-through', mis: 'Three requests, sixty days to answer, on the record' },
  { other: 'Episodic, resets each year', mis: 'Year-long cadence, Fireside Conversations between editions' },
  { other: 'Communities spoken about', mis: 'Communities in the room, on stage, quoted by name' },
]

export default function SlideStructuralDifference() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={8} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Why MIS is structurally different
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em', maxWidth: 1600 }}>
            Other forums debate the sector. MIS holds it to account.
          </h1>
        </div>

        <div
          style={{
            background: brand.colors.sand,
            borderRadius: 6,
            overflow: 'hidden',
            maxWidth: 1600,
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: brand.colors.gold, color: brand.colors.darkGreen, fontWeight: 600, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            <div style={{ padding: '12px 20px' }}>Other mining gatherings</div>
            <div style={{ padding: '12px 20px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>MIS 2026</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.other}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.45)',
                borderTop: `1px solid rgba(38,69,39,0.08)`,
                fontSize: 17,
              }}
            >
              <div style={{ padding: '14px 20px', color: brand.colors.bodyText, opacity: 0.85 }}>{r.other}</div>
              <div style={{ padding: '14px 20px', color: brand.colors.darkGreen, fontWeight: 500, borderLeft: `1px solid rgba(38,69,39,0.08)` }}>{r.mis}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: MIS 2026 Master Strategy, structural design notes
        </div>
      </div>
    </SlideFrame>
  )
}

import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

type Row = { event: string; delegates: string; ticket: string; model: string; advantage: string }

const rows: Row[] = [
  {
    event: 'Joburg Indaba',
    delegates: '400 to 500',
    ticket: 'Invitation only, no public pricing',
    model: 'Invitation only',
    advantage: 'MIS is accessible and free to attend, no price barrier to any segment',
  },
  {
    event: 'Mining Indaba, community forum',
    delegates: '1,200',
    ticket: 'Free, gated',
    model: 'Application',
    advantage: 'MIS is accountable, 60 day signed responses',
  },
  {
    event: 'BRICS Youth Summit 2023',
    delegates: '2,000',
    ticket: 'Sold out two months early',
    model: 'Youth mobilisation',
    advantage: 'MIS integrates youth with industry',
  },
]

export default function Slide29Competitors() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={29} totalPages={31}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Positioning
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            Where MIS 2026 sits
          </h1>
        </div>

        <div
          style={{
            border: `1px solid ${brand.colors.sand}`,
            borderRadius: 6,
            overflow: 'hidden',
            maxWidth: 1750,
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.7fr 0.9fr 0.9fr 1.5fr', background: brand.colors.gold, color: brand.colors.darkGreen, fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <div style={{ padding: '12px 18px' }}>Event</div>
            <div style={{ padding: '12px 18px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Delegates</div>
            <div style={{ padding: '12px 18px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Ticket</div>
            <div style={{ padding: '12px 18px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Model</div>
            <div style={{ padding: '12px 18px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>MIS advantage</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.event}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 0.7fr 0.9fr 0.9fr 1.5fr',
                background: i % 2 === 0 ? brand.colors.lightBg : brand.colors.sand,
                borderTop: `1px solid ${brand.colors.sand}`,
                color: brand.colors.bodyText,
                fontSize: 15,
              }}
            >
              <div style={{ padding: '14px 18px', color: brand.colors.darkGreen, fontWeight: 600 }}>{r.event}</div>
              <div style={{ padding: '14px 18px', borderLeft: `1px solid ${brand.colors.sand}` }}>{r.delegates}</div>
              <div style={{ padding: '14px 18px', borderLeft: `1px solid ${brand.colors.sand}` }}>{r.ticket}</div>
              <div style={{ padding: '14px 18px', borderLeft: `1px solid ${brand.colors.sand}` }}>{r.model}</div>
              <div style={{ padding: '14px 18px', borderLeft: `1px solid ${brand.colors.sand}`, color: brand.colors.darkGreen, fontWeight: 500 }}>
                {r.advantage}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            maxWidth: 1500,
            color: brand.colors.darkGreen,
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.45,
          }}
        >
          MIS 2026 positioning: the first time mining houses, communities, and schools are publicly answerable to each other in one room.
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Intelligence Dossier Module 7 | MIS2026 Competitive Analysis
        </div>
      </div>
    </SlideFrame>
  )
}

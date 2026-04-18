import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'
import NumberTicker from '../components/NumberTicker'
import BudgetChart, { type BudgetSlice } from '../components/BudgetChart'

type Row = { category: string; amount: number; share: string; colour: string }

const rows: Row[] = [
  {
    category: 'Automated Direct Outreach, 3 months',
    amount: 129300,
    share: 'R43,100 per month',
    colour: brand.colors.gold,
  },
  {
    category: 'Marketing, Awareness and Social Media, 3 months',
    amount: 67500,
    share: 'R22,500 per month',
    colour: brand.colors.amber,
  },
  {
    category: 'Data Infrastructure, CRM and Automation, 3 months',
    amount: 96000,
    share: 'R32,000 per month',
    colour: brand.colors.sage,
  },
  {
    category: 'Design and Collateral, once-off',
    amount: 26500,
    share: 'Once-off',
    colour: brand.colors.sand,
  },
  {
    category: 'Content Production, Tier 2, 3 months',
    amount: 60000,
    share: 'R20,000 per month',
    colour: brand.colors.mutedGreen,
  },
  {
    category: 'On-Site Production, 3 days',
    amount: 82500,
    share: 'R27,500 per day',
    colour: brand.colors.darkBrown,
  },
]

const slices: BudgetSlice[] = rows.map((r) => ({ name: r.category, value: r.amount, colour: r.colour }))

const adRows: Array<{ platform: string; amount: string }> = [
  { platform: 'LinkedIn', amount: 'R221,750' },
  { platform: 'Meta', amount: 'R128,250' },
  { platform: 'Google', amount: 'R125,000' },
  { platform: 'TikTok', amount: 'R75,000' },
]

export default function Slide26FullBudget() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={26} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Part D1, Atlas investment recommendation
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            Atlas recommends R
            <NumberTicker value={415620} />
            {' '}to deliver this programme
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 36, maxWidth: '100%' }}>
          <div
            style={{
              background: brand.colors.sand,
              borderRadius: 6,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 0.8fr 0.8fr', background: brand.colors.gold, color: brand.colors.darkGreen, fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <div style={{ padding: '10px 16px' }}>Category</div>
              <div style={{ padding: '10px 16px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Amount</div>
              <div style={{ padding: '10px 16px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Cadence</div>
            </div>
            {rows.map((r, i) => (
              <div
                key={r.category}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.6fr 0.8fr 0.8fr',
                  background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.4)',
                  borderTop: `1px solid rgba(38,69,39,0.08)`,
                  color: brand.colors.bodyText,
                  fontSize: 14,
                }}
              >
                <div style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ display: 'inline-block', width: 10, height: 10, background: r.colour, borderRadius: 2 }} />
                  <span style={{ color: brand.colors.darkGreen, fontWeight: 500 }}>{r.category}</span>
                </div>
                <div style={{ padding: '10px 16px', color: brand.colors.darkGreen, fontWeight: 600, fontVariantNumeric: 'tabular-nums', borderLeft: `1px solid rgba(38,69,39,0.08)` }}>
                  R{r.amount.toLocaleString('en-GB')}
                </div>
                <div style={{ padding: '10px 16px', color: brand.colors.amber, fontWeight: 600, fontSize: 13, borderLeft: `1px solid rgba(38,69,39,0.08)` }}>
                  {r.share}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: brand.colors.lightBg,
              borderRadius: 6,
              padding: 16,
              border: `1px solid ${brand.colors.sand}`,
            }}
          >
            <BudgetChart data={slices} height={300} innerRadius={55} outerRadius={95} />
          </div>
        </div>

        <div
          style={{
            background: brand.colors.darkGreen,
            borderRadius: 6,
            padding: '18px 24px',
            maxWidth: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 24,
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ color: brand.colors.gold, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>
              Client-controlled paid media budget (not paid to Atlas)
            </div>
            <div style={{ color: brand.colors.lightBg, fontSize: 18, fontWeight: 600, marginTop: 6 }}>
              R550,000 approved
            </div>
            <div style={{ color: brand.colors.sand, fontSize: 13, marginTop: 4 }}>
              20 April to 27 August 2026, four platforms
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
            {adRows.map((a) => (
              <div key={a.platform} style={{ color: brand.colors.sand, fontSize: 13 }}>
                <span style={{ color: brand.colors.gold, fontWeight: 600 }}>{a.platform}</span> {a.amount}
              </div>
            ))}
          </div>
        </div>

        <div style={{ color: brand.colors.darkGreen, fontSize: 15, fontWeight: 500, maxWidth: '100%', lineHeight: 1.5 }}>
          Joburg Indaba 2024: R2,000 per delegate acquired. MIS 2026 at R550k paid media spend: R1,000 per delegate. 50% more efficient.
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: SOW Investment Summary | Master Strategy Part D1
        </div>
      </div>
    </SlideFrame>
  )
}

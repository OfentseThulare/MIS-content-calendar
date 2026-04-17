import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'
import NumberTicker from '../components/NumberTicker'
import BudgetChart, { type BudgetSlice } from '../components/BudgetChart'

type Row = { category: string; amount: number; share: string; colour: string }

const rows: Row[] = [
  { category: 'Paid media', amount: 500000, share: '52.6%', colour: brand.colors.gold },
  { category: 'Content production', amount: 180000, share: '18.9%', colour: brand.colors.amber },
  { category: 'Tools and platforms', amount: 65000, share: '6.8%', colour: brand.colors.sage },
  { category: 'PR and media', amount: 75000, share: '7.9%', colour: brand.colors.mutedGreen },
  { category: 'Community activation', amount: 55000, share: '5.8%', colour: brand.colors.sand },
  { category: 'Atlas fee', amount: 75000, share: '7.9%', colour: brand.colors.darkBrown },
]

const slices: BudgetSlice[] = rows.map((r) => ({ name: r.category, value: r.amount, colour: r.colour }))

export default function Slide26FullBudget() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={26} totalPages={30}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Part D1, full budget
          </div>
          <h1 style={{ fontSize: 60, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            R
            <NumberTicker value={950000} />
            {' '}total investment
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, maxWidth: 1750 }}>
          <div
            style={{
              background: brand.colors.sand,
              borderRadius: 6,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.9fr 0.6fr', background: brand.colors.gold, color: brand.colors.darkGreen, fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <div style={{ padding: '12px 20px' }}>Category</div>
              <div style={{ padding: '12px 20px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Amount</div>
              <div style={{ padding: '12px 20px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Share</div>
            </div>
            {rows.map((r, i) => (
              <div
                key={r.category}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.4fr 0.9fr 0.6fr',
                  background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.4)',
                  borderTop: `1px solid rgba(38,69,39,0.08)`,
                  color: brand.colors.bodyText,
                  fontSize: 15,
                }}
              >
                <div style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ display: 'inline-block', width: 12, height: 12, background: r.colour, borderRadius: 2 }} />
                  <span style={{ color: brand.colors.darkGreen, fontWeight: 500 }}>{r.category}</span>
                </div>
                <div style={{ padding: '12px 20px', color: brand.colors.darkGreen, fontWeight: 600, fontVariantNumeric: 'tabular-nums', borderLeft: `1px solid rgba(38,69,39,0.08)` }}>
                  R{r.amount.toLocaleString('en-GB')}
                </div>
                <div style={{ padding: '12px 20px', color: brand.colors.amber, fontWeight: 600, fontVariantNumeric: 'tabular-nums', borderLeft: `1px solid rgba(38,69,39,0.08)` }}>
                  {r.share}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: brand.colors.lightBg,
              borderRadius: 6,
              padding: 20,
              border: `1px solid ${brand.colors.sand}`,
            }}
          >
            <BudgetChart data={slices} height={360} />
          </div>
        </div>

        <div style={{ color: brand.colors.darkGreen, fontSize: 18, fontWeight: 500 }}>
          Benchmark: Joburg Indaba 2024, R2,000 per delegate. MIS 2026, R909 per delegate.
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Part D1, MIS 2026 Master Strategy
        </div>
      </div>
    </SlideFrame>
  )
}

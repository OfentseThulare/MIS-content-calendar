import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

const rows: Array<{ platform: string; budget: number; share: string; colour: string }> = [
  { platform: 'LinkedIn', budget: 225000, share: '45%', colour: brand.colors.gold },
  { platform: 'Google, Search plus Display plus YouTube', budget: 120000, share: '24%', colour: brand.colors.amber },
  { platform: 'Meta, Facebook plus Instagram', budget: 95000, share: '19%', colour: brand.colors.sage },
  { platform: 'TikTok', budget: 22000, share: '4.4%', colour: brand.colors.sand },
  { platform: 'WhatsApp, Turn.io', budget: 22000, share: '4.4%', colour: brand.colors.mutedGreen },
  { platform: 'Community radio', budget: 16000, share: '3.2%', colour: brand.colors.darkBrown },
]

const maxBudget = Math.max(...rows.map((r) => r.budget))

export default function Slide16PaidMediaSplit() {
  return (
    <SlideFrame bg={brand.colors.darkGreen} textColor={brand.colors.lightBg} showChrome pageNumber={16} totalPages={30}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.gold, textTransform: 'uppercase' }}>
            Paid media
          </div>
          <h1 style={{ fontSize: 60, fontWeight: 600, color: brand.colors.gold, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            R500,000 across 12 weeks
          </h1>
        </div>

        <div style={{ maxWidth: 1600, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {rows.map((r) => (
            <div key={r.platform} style={{ display: 'grid', gridTemplateColumns: '420px 1fr 160px 120px', alignItems: 'center', gap: 20 }}>
              <div style={{ color: brand.colors.lightBg, fontSize: 17, fontWeight: 500 }}>{r.platform}</div>
              <div style={{ height: 22, background: 'rgba(255,255,255,0.06)', borderRadius: 3, position: 'relative' }}>
                <div
                  style={{
                    width: `${(r.budget / maxBudget) * 100}%`,
                    height: '100%',
                    background: r.colour,
                    borderRadius: 3,
                  }}
                />
              </div>
              <div style={{ color: brand.colors.lightBg, fontSize: 17, fontVariantNumeric: 'tabular-nums', textAlign: 'right' }}>
                R{r.budget.toLocaleString('en-GB')}
              </div>
              <div style={{ color: brand.colors.gold, fontSize: 17, fontWeight: 600, fontVariantNumeric: 'tabular-nums', textAlign: 'right' }}>
                {r.share}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.sand, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Part D1, MIS 2026 Master Strategy
        </div>
      </div>
    </SlideFrame>
  )
}

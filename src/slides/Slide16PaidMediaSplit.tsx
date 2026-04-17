import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

const rows: Array<{ platform: string; budget: number; share: string; colour: string; note: string }> = [
  {
    platform: 'LinkedIn, Sponsored Content, InMail, Lead Gen Forms',
    budget: 225000,
    share: '45%',
    colour: brand.colors.gold,
    note: 'Primary for Execs, Sponsors, Government',
  },
  {
    platform: 'Google, Search, Display Retargeting, YouTube Pre-roll',
    budget: 120000,
    share: '24%',
    colour: brand.colors.amber,
    note: 'Captures high-intent search, retargets bounced visitors',
  },
  {
    platform: 'Meta, Facebook and Instagram',
    budget: 95000,
    share: '19%',
    colour: brand.colors.sage,
    note: 'Primary for Communities and Schools (NW Province geo)',
  },
  {
    platform: 'TikTok',
    budget: 22000,
    share: '4.4%',
    colour: brand.colors.sand,
    note: 'Schools and youth audiences only',
  },
  {
    platform: 'WhatsApp Business via Turn.io',
    budget: 22000,
    share: '4.4%',
    colour: brand.colors.mutedGreen,
    note: '3,800 opted-in contacts, R0.68 per marketing template',
  },
  {
    platform: 'Community Radio, Kgatleng FM, Mafisa, Motheo FM',
    budget: 16000,
    share: '3.2%',
    colour: brand.colors.darkBrown,
    note: 'Pending confirmation from media planner',
  },
]

const maxBudget = Math.max(...rows.map((r) => r.budget))

export default function Slide16PaidMediaSplit() {
  return (
    <SlideFrame bg={brand.colors.darkGreen} textColor={brand.colors.lightBg} showChrome pageNumber={16} totalPages={31}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.gold, textTransform: 'uppercase' }}>
            Paid media
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.gold, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            R500,000 recommended client-controlled ad budget
          </h1>
        </div>

        <div style={{ maxWidth: 1720, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {rows.map((r) => (
            <div key={r.platform} style={{ display: 'grid', gridTemplateColumns: '440px 1fr 150px 90px', alignItems: 'center', gap: 18 }}>
              <div>
                <div style={{ color: brand.colors.lightBg, fontSize: 16, fontWeight: 500 }}>{r.platform}</div>
                <div style={{ color: brand.colors.sand, fontSize: 12, marginTop: 3, lineHeight: 1.4 }}>{r.note}</div>
              </div>
              <div style={{ height: 20, background: 'rgba(255,255,255,0.06)', borderRadius: 3, position: 'relative' }}>
                <div
                  style={{
                    width: `${(r.budget / maxBudget) * 100}%`,
                    height: '100%',
                    background: r.colour,
                    borderRadius: 3,
                  }}
                />
              </div>
              <div style={{ color: brand.colors.lightBg, fontSize: 16, fontVariantNumeric: 'tabular-nums', textAlign: 'right' }}>
                R{r.budget.toLocaleString('en-GB')}
              </div>
              <div style={{ color: brand.colors.gold, fontSize: 16, fontWeight: 600, fontVariantNumeric: 'tabular-nums', textAlign: 'right' }}>
                {r.share}
              </div>
            </div>
          ))}
        </div>

        <div style={{ color: brand.colors.sand, fontSize: 13, lineHeight: 1.5, maxWidth: 1500, fontStyle: 'italic' }}>
          This budget is held in a client-controlled account. It is not paid to Atlas. It is managed by Atlas on SAMCA's behalf. Community radio allocation is pending media planner confirmation.
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.sand, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Master Strategy Part D1, April 2026 | Benchmarks: SuperAds, Gupta Media SA 2025, Google Keyword Planner SA April 2026
        </div>
      </div>
    </SlideFrame>
  )
}

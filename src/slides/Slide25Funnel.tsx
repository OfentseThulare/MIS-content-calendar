import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'
import NumberTicker from '../components/NumberTicker'

type Step = { label: string; value: number; suffix?: string }
const steps: Step[] = [
  { label: 'Total ad spend', value: 500000, suffix: '' },
  { label: 'Total impressions', value: 1270000 },
  { label: 'Video views (3 sec+)', value: 680000 },
  { label: 'Landing page sessions', value: 42000 },
  { label: 'Email and WhatsApp captures', value: 5800 },
  { label: 'Registration submissions', value: 820 },
  { label: 'Confirmed registered delegates', value: 550 },
]

type SourceRow = { source: string; delegates: number; cac: string }
const sources: SourceRow[] = [
  { source: 'LinkedIn (paid plus organic)', delegates: 130, cac: 'R1,731' },
  { source: 'Meta, Facebook plus Instagram', delegates: 135, cac: 'R704' },
  { source: 'Google plus YouTube', delegates: 93, cac: 'R1,290' },
  { source: 'WhatsApp broadcasts', delegates: 80, cac: 'R275' },
  { source: 'TikTok', delegates: 55, cac: 'R400' },
  { source: 'Email plus direct outreach', delegates: 57, cac: 'R0 (included in retainer)' },
]

const max = Math.max(...steps.map((s) => s.value))

export default function Slide25Funnel() {
  return (
    <SlideFrame bg={brand.colors.darkGreen} textColor={brand.colors.lightBg} showChrome pageNumber={25} totalPages={31}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.gold, textTransform: 'uppercase' }}>
            Part D2, delegate funnel
          </div>
          <h1 style={{ fontSize: 60, fontWeight: 600, color: brand.colors.gold, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            R500k in ad spend. 550 confirmed registered delegates.
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, maxWidth: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {steps.map((s, i) => {
              const widthPct = (s.value / max) * 100
              return (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 240, color: brand.colors.lightBg, fontSize: 15 }}>{s.label}</div>
                  <div style={{ flex: 1, height: 28, background: 'rgba(255,255,255,0.05)', borderRadius: 3, position: 'relative' }}>
                    <div
                      style={{
                        width: `${Math.max(widthPct, 2)}%`,
                        height: '100%',
                        background: i === steps.length - 1 ? brand.colors.gold : brand.colors.sage,
                        borderRadius: 3,
                      }}
                    />
                  </div>
                  <div style={{ width: 170, textAlign: 'right', color: brand.colors.gold, fontSize: 16, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>
                    {i === 0 ? 'R' : ''}
                    <NumberTicker value={s.value} />
                  </div>
                </div>
              )
            })}
          </div>

          <div
            style={{
              border: `1px solid ${brand.colors.gold}`,
              borderRadius: 6,
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.7fr 0.7fr', background: brand.colors.gold, color: brand.colors.darkGreen, fontWeight: 600, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <div style={{ padding: '10px 14px' }}>Source</div>
              <div style={{ padding: '10px 14px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Delegates</div>
              <div style={{ padding: '10px 14px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>CAC</div>
            </div>
            {sources.map((s, i) => (
              <div
                key={s.source}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 0.7fr 0.7fr',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'transparent',
                  fontSize: 14,
                }}
              >
                <div style={{ padding: '10px 14px', color: brand.colors.lightBg }}>{s.source}</div>
                <div style={{ padding: '10px 14px', color: brand.colors.gold, fontVariantNumeric: 'tabular-nums', borderLeft: `1px solid rgba(226,187,57,0.15)` }}>
                  {s.delegates}
                </div>
                <div style={{ padding: '10px 14px', color: brand.colors.sand, fontVariantNumeric: 'tabular-nums', borderLeft: `1px solid rgba(226,187,57,0.15)` }}>
                  {s.cac}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ color: brand.colors.gold, fontSize: 18, fontWeight: 600, maxWidth: '100%', lineHeight: 1.4 }}>
          Blended delegate acquisition cost: R909 per registered delegate. Joburg Indaba 2024 benchmark: R2,000 per delegate. MIS 2026 is 55% more efficient.
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.sand, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Master Strategy Part D2 | Joburg Indaba 2024 benchmark (Master Strategy Page 52)
        </div>
      </div>
    </SlideFrame>
  )
}

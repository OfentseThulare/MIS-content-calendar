import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

type TierRow = { tier: string; price: string; slots: string; revenue: string; emphasis?: boolean }
type ScenarioRow = { scenario: string; fill: string; sponsor: string; investment: string; ret: string; emphasis?: boolean }

const tiers: TierRow[] = [
  { tier: 'Premier Partner', price: 'R500,000', slots: '1', revenue: 'R500,000' },
  { tier: 'Platinum Sponsor', price: 'R250,000', slots: '2', revenue: 'R500,000' },
  { tier: 'Gold Sponsor', price: 'R150,000', slots: '4', revenue: 'R600,000' },
  { tier: 'Pillar Chair', price: 'R450,000', slots: '5', revenue: 'R2,250,000' },
  { tier: 'Silver Sponsor', price: 'R75,000', slots: '6', revenue: 'R450,000' },
  { tier: 'Community Partner', price: 'R100,000', slots: 'open', revenue: '[TBC, confirm with SAMCA]' },
  { tier: 'Full sell-out', price: '', slots: '', revenue: 'R4,300,000+', emphasis: true },
]

const scenarios: ScenarioRow[] = [
  { scenario: 'Conservative', fill: '40%', sponsor: 'R1,720,000', investment: 'R915,620', ret: '1.9x' },
  { scenario: 'Moderate', fill: '60%', sponsor: 'R2,580,000', investment: 'R915,620', ret: '2.8x' },
  { scenario: 'Target', fill: '80%', sponsor: 'R3,440,000', investment: 'R915,620', ret: '3.8x' },
  { scenario: 'Full sell-out', fill: '100%', sponsor: 'R4,300,000+', investment: 'R915,620', ret: '4.7x+', emphasis: true },
]

export default function Slide26bROI() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={27} totalPages={31}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Return on investment
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            What this investment returns
          </h1>
          <div style={{ color: brand.colors.mutedGreen, fontSize: 17, marginTop: 10, maxWidth: 1600, lineHeight: 1.5 }}>
            The event is free to attend. Sponsorship is the revenue model. Here is the maths.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 36, maxWidth: 1750, flex: 1, minHeight: 0 }}>
          <div
            style={{
              background: brand.colors.sand,
              borderRadius: 6,
              overflow: 'hidden',
              alignSelf: 'start',
            }}
          >
            <div style={{ padding: '14px 20px', background: brand.colors.darkGreen, color: brand.colors.gold, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>
              Sponsorship tier table
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 0.8fr 0.5fr 1fr',
                background: brand.colors.gold,
                color: brand.colors.darkGreen,
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              <div style={{ padding: '10px 14px' }}>Tier</div>
              <div style={{ padding: '10px 14px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Price</div>
              <div style={{ padding: '10px 14px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Slots</div>
              <div style={{ padding: '10px 14px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Revenue</div>
            </div>
            {tiers.map((t, i) => (
              <div
                key={t.tier}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.4fr 0.8fr 0.5fr 1fr',
                  background: t.emphasis ? brand.colors.darkGreen : i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.4)',
                  borderTop: `1px solid rgba(38,69,39,0.08)`,
                  fontSize: 14,
                }}
              >
                <div style={{ padding: '10px 14px', color: t.emphasis ? brand.colors.gold : brand.colors.darkGreen, fontWeight: t.emphasis ? 700 : 500 }}>
                  {t.tier}
                </div>
                <div style={{ padding: '10px 14px', color: t.emphasis ? brand.colors.gold : brand.colors.darkGreen, fontVariantNumeric: 'tabular-nums', borderLeft: `1px solid rgba(38,69,39,0.08)` }}>
                  {t.price}
                </div>
                <div style={{ padding: '10px 14px', color: t.emphasis ? brand.colors.gold : brand.colors.bodyText, fontVariantNumeric: 'tabular-nums', borderLeft: `1px solid rgba(38,69,39,0.08)` }}>
                  {t.slots}
                </div>
                <div style={{ padding: '10px 14px', color: t.emphasis ? brand.colors.gold : brand.colors.amber, fontWeight: 600, fontVariantNumeric: 'tabular-nums', borderLeft: `1px solid rgba(38,69,39,0.08)` }}>
                  {t.revenue}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: brand.colors.sand,
              borderRadius: 6,
              overflow: 'hidden',
              alignSelf: 'start',
            }}
          >
            <div style={{ padding: '14px 20px', background: brand.colors.darkGreen, color: brand.colors.gold, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>
              Scenario table
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 0.5fr 1fr 1fr 0.6fr',
                background: brand.colors.gold,
                color: brand.colors.darkGreen,
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              <div style={{ padding: '10px 14px' }}>Scenario</div>
              <div style={{ padding: '10px 14px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Fill</div>
              <div style={{ padding: '10px 14px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Sponsor revenue</div>
              <div style={{ padding: '10px 14px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Investment</div>
              <div style={{ padding: '10px 14px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Return</div>
            </div>
            {scenarios.map((s, i) => (
              <div
                key={s.scenario}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 0.5fr 1fr 1fr 0.6fr',
                  background: s.emphasis ? brand.colors.darkGreen : i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.4)',
                  borderTop: `1px solid rgba(38,69,39,0.08)`,
                  fontSize: 14,
                }}
              >
                <div style={{ padding: '10px 14px', color: s.emphasis ? brand.colors.gold : brand.colors.darkGreen, fontWeight: s.emphasis ? 700 : 500 }}>
                  {s.scenario}
                </div>
                <div style={{ padding: '10px 14px', color: s.emphasis ? brand.colors.gold : brand.colors.bodyText, fontVariantNumeric: 'tabular-nums', borderLeft: `1px solid rgba(38,69,39,0.08)` }}>
                  {s.fill}
                </div>
                <div style={{ padding: '10px 14px', color: s.emphasis ? brand.colors.gold : brand.colors.darkGreen, fontVariantNumeric: 'tabular-nums', borderLeft: `1px solid rgba(38,69,39,0.08)` }}>
                  {s.sponsor}
                </div>
                <div style={{ padding: '10px 14px', color: s.emphasis ? brand.colors.gold : brand.colors.bodyText, fontVariantNumeric: 'tabular-nums', borderLeft: `1px solid rgba(38,69,39,0.08)` }}>
                  {s.investment}
                </div>
                <div style={{ padding: '10px 14px', color: s.emphasis ? brand.colors.gold : brand.colors.amber, fontWeight: 600, fontVariantNumeric: 'tabular-nums', borderLeft: `1px solid rgba(38,69,39,0.08)` }}>
                  {s.ret}
                </div>
              </div>
            ))}
            <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.3)', color: brand.colors.mutedGreen, fontSize: 12, lineHeight: 1.5 }}>
              Total investment = R415,620 (Atlas Tier 2) plus R500,000 (recommended ad budget) = R915,620.
            </div>
          </div>
        </div>

        <div style={{ color: brand.colors.mutedGreen, fontSize: 12, lineHeight: 1.5, maxWidth: 1750, fontStyle: 'italic' }}>
          Sponsorship revenue projections are illustrative. They are based on the Intelligence Dossier tier benchmarks for SA B2B events at 300 to 1,000 delegate scale. Actual revenue depends on SAMCA's sponsorship conversations and tier confirmation. Atlas does not guarantee or commit to a sponsorship revenue figure.
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Intelligence Dossier Module 7 | Master Strategy Appendix H4 | SAMCA Outreach Playbook
        </div>
      </div>
    </SlideFrame>
  )
}

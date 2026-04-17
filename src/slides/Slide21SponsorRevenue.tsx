import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

type SponsorRow = { sponsor: string; kpi: string; angle: string; tier: string }

const rows: SponsorRow[] = [
  {
    sponsor: 'Sibanye-Stillwater',
    kpi: 'Women in Mining, ESG',
    angle: 'CEO Recognition Ceremony at Gala Dinner. Pillar Chair: Community Collaboration. 12-month public commitment.',
    tier: 'Platinum, R250,000',
  },
  {
    sponsor: 'Harmony Gold',
    kpi: 'Youth, Safety Recognition',
    angle: 'CEO safety award, 2,000 days without fatalities. Schools Innovation co-presenter.',
    tier: 'Gold, R150,000',
  },
  {
    sponsor: 'Impala Platinum and Northam Platinum',
    kpi: 'Community, SLP Performance',
    angle: 'Pillar Chair: SLPs. Integration forum and data platform for SLP delivery tracking.',
    tier: 'Gold, R150,000',
  },
  {
    sponsor: 'NYDA',
    kpi: 'Youth Empowerment',
    angle: 'Youth Innovation Challenge co-presenter. SMME incubation pipeline from Day 2 Deal Room.',
    tier: 'Community Partner, R100,000',
  },
  {
    sponsor: 'OEM Suppliers (Caterpillar, Sandvik, Komatsu)',
    kpi: 'B2B Access, Supplier Matching',
    angle: 'Exhibition presence, B2B matchmaking in the Deal Room. Procurement network access.',
    tier: 'Silver, R75,000',
  },
  {
    sponsor: 'Bojanala Platinum District Municipality',
    kpi: 'Regional Alignment, Legacy Projects',
    angle: 'Mayoral Golf Day co-host naming rights. Legacy project announcement on Day 3.',
    tier: 'Municipal Partner, confirmed via MFMA process',
  },
]

export default function Slide21SponsorRevenue() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={21} totalPages={31}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Sponsor strategy
          </div>
          <h1 style={{ fontSize: 48, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            Six confirmed targets. Five tiers. Sponsorship is the business model.
          </h1>
          <div style={{ color: brand.colors.mutedGreen, fontSize: 16, marginTop: 10, maxWidth: 1500, lineHeight: 1.5 }}>
            The event is free to attend. Sponsorship funds everything. Every sponsor publicly chairs a pillar and commits to a 12-month action plan.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: '100%' }}>
          {rows.map((r) => (
            <div
              key={r.sponsor}
              style={{
                position: 'relative',
                background: brand.colors.sand,
                borderRadius: 6,
                padding: '18px 22px 18px 30px',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 4,
                  background: brand.colors.amber,
                  borderTopLeftRadius: 6,
                  borderBottomLeftRadius: 6,
                }}
              />
              <div style={{ color: brand.colors.darkGreen, fontSize: 18, fontWeight: 600 }}>{r.sponsor}</div>
              <div style={{ color: brand.colors.amber, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 4, fontWeight: 600 }}>
                {r.kpi}
              </div>
              <div style={{ color: brand.colors.amber, fontSize: 13, fontWeight: 600, marginTop: 6 }}>
                {r.tier}
              </div>
              <div style={{ color: brand.colors.bodyText, fontSize: 14, marginTop: 6, lineHeight: 1.5 }}>{r.angle}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Intelligence Dossier Module 7 | Master Strategy Appendix H4 | SAMCA Sponsor Outreach Playbook
        </div>
      </div>
    </SlideFrame>
  )
}

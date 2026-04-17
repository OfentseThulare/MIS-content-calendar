import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

type SponsorRow = { sponsor: string; kpi: string; angle: string }

const rows: SponsorRow[] = [
  {
    sponsor: 'Sibanye-Stillwater',
    kpi: 'Women in Mining, ESG',
    angle: 'Gala dinner recognition, gender transformation narrative',
  },
  {
    sponsor: 'Harmony Gold',
    kpi: 'Youth, Safety Recognition',
    angle: 'CEO safety award, 2,000 days without fatalities',
  },
  {
    sponsor: 'Impala and Northam',
    kpi: 'Community, SLP Performance',
    angle: 'Integration forum, data platform for SLP delivery',
  },
  {
    sponsor: 'NYDA',
    kpi: 'Youth Empowerment',
    angle: 'Youth in Mining, SMME incubation pipeline',
  },
  {
    sponsor: 'OEMs',
    kpi: 'B2B Access',
    angle: 'Exhibition, matchmaking, contractor ecosystem',
  },
  {
    sponsor: 'Bojanala Municipality',
    kpi: 'Regional Alignment',
    angle: 'Golf Day co-host naming rights, legacy projects',
  },
]

export default function Slide21SponsorRevenue() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={21} totalPages={30}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Sponsor strategy
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            R4.5m sponsor revenue target
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 1750 }}>
          {rows.map((r) => (
            <div
              key={r.sponsor}
              style={{
                position: 'relative',
                background: brand.colors.sand,
                borderRadius: 6,
                padding: '20px 24px 20px 32px',
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
              <div style={{ color: brand.colors.darkGreen, fontSize: 20, fontWeight: 600 }}>{r.sponsor}</div>
              <div style={{ color: brand.colors.amber, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 4, fontWeight: 600 }}>
                {r.kpi}
              </div>
              <div style={{ color: brand.colors.bodyText, fontSize: 15, marginTop: 8, lineHeight: 1.5 }}>{r.angle}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Section 01, MIS 2026 Proposal
        </div>
      </div>
    </SlideFrame>
  )
}

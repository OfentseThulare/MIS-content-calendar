import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'
import TrajectoryChart from '../components/TrajectoryChart'

type Phase = {
  name: string
  weeks: string
  theme: string
  outcome: string
  budget: string
}

const phases: Phase[] = [
  { name: 'Build the case', weeks: 'W1 to 3, 27 Apr to 17 May', theme: 'Why this summit matters now', outcome: '500 warm list, 1 sponsor announced', budget: 'R95k, 10%' },
  { name: 'Fill the room', weeks: 'W4 to 6, 18 May to 7 Jun', theme: 'Who is already in the room', outcome: 'Sponsors closed, 200 registrations', budget: 'R285k, 30%' },
  { name: 'Prove substance', weeks: 'W7 to 9, 8 Jun to 28 Jun', theme: 'What you get for three days', outcome: 'Agenda live, 400 registrations', budget: 'R285k, 30%' },
  { name: 'Final push', weeks: 'W10 to 12, 29 Jun to 19 Jul', theme: 'Do not miss the table', outcome: '550 registered, waitlist active', budget: 'R285k, 30%' },
]

const curveData = [
  { week: 'W0', delegates: 0 },
  { week: 'W3', delegates: 50 },
  { week: 'W6', delegates: 200 },
  { week: 'W9', delegates: 400 },
  { week: 'W12', delegates: 550 },
]

export default function Slide18CampaignArc() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={18} totalPages={31}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Part B4, campaign arc
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            12 weeks, four phases. Sponsors close by Week 6, delegates fill by Week 12.
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1.4fr 1.4fr 1fr 0.8fr',
              background: brand.colors.gold,
              color: brand.colors.darkGreen,
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <div style={{ padding: '12px 16px' }}>Phase</div>
            <div style={{ padding: '12px 16px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Weeks</div>
            <div style={{ padding: '12px 16px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Theme</div>
            <div style={{ padding: '12px 16px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Outcome</div>
            <div style={{ padding: '12px 16px', borderLeft: `1px solid ${brand.colors.darkGreen}22` }}>Budget</div>
          </div>
          {phases.map((p, i) => (
            <div
              key={p.name}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.1fr 1.4fr 1.4fr 1fr 0.8fr',
                background: i % 2 === 0 ? brand.colors.lightBg : brand.colors.sand,
                borderTop: `1px solid ${brand.colors.sand}`,
                color: brand.colors.bodyText,
                fontSize: 15,
              }}
            >
              <div style={{ padding: '14px 16px', color: brand.colors.darkGreen, fontWeight: 600 }}>{p.name}</div>
              <div style={{ padding: '14px 16px', borderLeft: `1px solid ${brand.colors.sand}` }}>{p.weeks}</div>
              <div style={{ padding: '14px 16px', borderLeft: `1px solid ${brand.colors.sand}` }}>{p.theme}</div>
              <div style={{ padding: '14px 16px', borderLeft: `1px solid ${brand.colors.sand}`, color: brand.colors.darkGreen, fontWeight: 500 }}>
                {p.outcome}
              </div>
              <div style={{ padding: '14px 16px', borderLeft: `1px solid ${brand.colors.sand}`, color: brand.colors.amber, fontWeight: 600 }}>
                {p.budget}
              </div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 1750, background: brand.colors.darkGreen, borderRadius: 6, padding: 16 }}>
          <TrajectoryChart
            data={curveData}
            xKey="week"
            height={220}
            lines={[{ dataKey: 'delegates', colour: brand.colors.gold, label: 'Registered delegates' }]}
          />
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Part B4, MIS 2026 Master Strategy
        </div>
      </div>
    </SlideFrame>
  )
}

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
  { name: 'Build the case', weeks: 'W1 to 6, 20 Apr to 31 May (paid live from 15 May)', theme: 'Why this summit matters now, who is already in', outcome: 'Sponsors closed, 200 registrations, warm list of 2,500', budget: 'R65k, 12%' },
  { name: 'Prove substance', weeks: 'W7 to 12, 1 Jun to 12 Jul', theme: 'What you get for three days on the ground', outcome: 'Agenda live, 450 registrations', budget: 'R220k, 40%' },
  { name: 'Final push and amplify', weeks: 'W13 to 18, 13 Jul to 27 Aug', theme: 'Do not miss the table, then amplify the outcomes', outcome: '550 delegates, post-event reach through August', budget: 'R265k, 48%' },
]

const curveData = [
  { week: 'Apr', delegates: 0 },
  { week: 'May', delegates: 120 },
  { week: 'Jun', delegates: 280 },
  { week: 'Jul', delegates: 500 },
  { week: 'Aug', delegates: 550 },
]

export default function Slide18CampaignArc() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={18} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Paid media flight plan
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            18 weeks, three phases. 20 April to 27 August 2026.
          </h1>
        </div>

        <div
          style={{
            border: `1px solid ${brand.colors.sand}`,
            borderRadius: 6,
            overflow: 'hidden',
            maxWidth: '100%',
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

        <div style={{ maxWidth: '100%', background: brand.colors.darkGreen, borderRadius: 6, padding: 16 }}>
          <TrajectoryChart
            data={curveData}
            xKey="week"
            height={220}
            lines={[{ dataKey: 'delegates', colour: brand.colors.gold, label: 'Registered delegates' }]}
          />
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: SAMCA Media Planner, April 2026 | Master Strategy Part B4
        </div>
      </div>
    </SlideFrame>
  )
}

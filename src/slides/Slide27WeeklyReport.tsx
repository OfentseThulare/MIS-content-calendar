import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

const sections: Array<{ n: string; title: string; body: string }> = [
  { n: '01', title: 'Headline scorecard', body: '7 dashboard pages: overview scorecard, channel performance, content leaderboard, funnel view, segment breakdown, sponsor pipeline, geographic map.' },
  { n: '02', title: 'Channel performance', body: 'Spend, impressions, clicks, CPC, conversions per channel.' },
  { n: '03', title: 'Content performance', body: 'Top three and bottom two posts across LinkedIn, Meta, TikTok.' },
  { n: '04', title: 'Sponsor pipeline', body: 'Prospect, meeting, proposal, negotiation, signed.' },
  { n: '05', title: 'Blockers', body: 'Decisions needed from Jade before next Monday.' },
  { n: '06', title: 'Next week plan', body: 'Content, outreach, paid spend, experiments.' },
]

export default function Slide27WeeklyReport() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={27} totalPages={31}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Reporting rhythm
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            Every Monday at 09:00
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: '100%' }}>
          {sections.map((s) => (
            <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 20, alignItems: 'start' }}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 4,
                  background: brand.colors.gold,
                  color: brand.colors.darkGreen,
                  fontSize: 22,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {s.n}
              </div>
              <div>
                <div style={{ color: brand.colors.darkGreen, fontSize: 20, fontWeight: 600 }}>{s.title}</div>
                <div style={{ marginTop: 6, color: brand.colors.bodyText, fontSize: 15, lineHeight: 1.5 }}>{s.body}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: '100%', color: brand.colors.darkGreen, fontSize: 16, lineHeight: 1.5 }}>
          Daily: Looker Studio dashboard at dash.atlascg.co.za/mis2026, refreshes every 4 hours. Weekly: written report every Monday at 09:00. Fortnightly: check-in with Lee. Monthly: review with Jade.
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Master Strategy Part D3 and Part F3
        </div>
      </div>
    </SlideFrame>
  )
}

import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

type Beat = { window: string; reveal: string; detail: string }

const beats: Beat[] = [
  { window: 'Week 1', reveal: 'SAMCA opens the edition', detail: 'Dates, venue, editorial pillars, registration open.' },
  { window: 'Week 3', reveal: 'First government endorsement', detail: 'Premier of North West Province or MEC confirmed speaker.' },
  { window: 'Week 5', reveal: 'Founding sponsor reveal', detail: 'First named sponsor at Platinum tier. Quote and logo lock-up.' },
  { window: 'Week 7', reveal: 'Three executive speakers', detail: 'Mining CEOs confirmed. Individual short-form video teasers.' },
  { window: 'Week 9', reveal: 'Community voices', detail: 'Three host community leaders confirmed as accountability panellists.' },
  { window: 'Week 11', reveal: 'Youth Innovation Challenge finalists', detail: 'Ten shortlisted concepts announced. Five finalists revealed on stage.' },
  { window: 'Week 12', reveal: 'Full programme and final line-up', detail: 'All speakers, all panels, all timings. Countdown begins.' },
]

export default function SlideRolloutSpeakers() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={31} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Rollout, speaker reveals
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em', maxWidth: 1600 }}>
            Twelve weeks of reveals, each earning the next
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 1600 }}>
          {beats.map((b) => (
            <div
              key={b.window}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1.2fr 1.4fr',
                gap: 24,
                padding: '14px 20px',
                background: brand.colors.sand,
                borderLeft: `4px solid ${brand.colors.gold}`,
                borderRadius: 4,
                alignItems: 'center',
              }}
            >
              <div style={{ color: brand.colors.amber, fontWeight: 600, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{b.window}</div>
              <div style={{ color: brand.colors.darkGreen, fontWeight: 600, fontSize: 17 }}>{b.reveal}</div>
              <div style={{ color: brand.colors.bodyText, fontSize: 14, lineHeight: 1.5 }}>{b.detail}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: MIS 2026 rollout calendar, week 1 of 12 launches on signature
        </div>
      </div>
    </SlideFrame>
  )
}

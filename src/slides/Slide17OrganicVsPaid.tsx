import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

type ListItem = { label: string; detail: string }

const paid: ListItem[] = [
  { label: 'LinkedIn Lead Gen Forms', detail: '8 to 13% form completion rate (Metric Theory SA 2024)' },
  { label: 'LinkedIn Conversation Ads', detail: 'Direct inbox delivery to named executives and ESG leads' },
  { label: 'Google Search', detail: 'R18 to R42 CPC on mining keywords (Keyword Planner SA, April 2026)' },
  { label: 'Meta Reels and Stories', detail: 'R50.76 CPM (Gupta Media SA 2025), Communities and Schools only' },
  { label: 'TikTok In-feed', detail: 'R0.27 average CPM, schools and youth audiences only' },
]

const organic: ListItem[] = [
  { label: 'Fireside Conversation series', detail: '12 weekly episodes, every Thursday 7pm to 9pm' },
  { label: 'LinkedIn organic content calendar', detail: '3 to 5 posts per week. Speaker reveals, endorsements, countdown.' },
  { label: 'Beehiiv newsletter', detail: 'Weekly Fireside digest. Grows from 500 to 4,200 subscribers over 12 weeks.' },
  { label: 'WhatsApp broadcast list', detail: '95% open rate within 30 minutes. POPIA compliant via Turn.io.' },
  { label: 'YouTube Fireside archive', detail: 'Four full episodes plus 24 Shorts over campaign window.' },
]

function Column({
  title,
  items,
  bg,
  titleColour,
  labelColour,
}: {
  title: string
  items: ListItem[]
  bg: string
  titleColour: string
  labelColour: string
}) {
  return (
    <div
      style={{
        background: bg,
        borderRadius: 6,
        padding: 36,
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 28,
          bottom: 28,
          width: 4,
          background: brand.colors.gold,
          borderTopRightRadius: 2,
          borderBottomRightRadius: 2,
        }}
      />
      <div style={{ color: titleColour, fontWeight: 600, fontSize: 28, letterSpacing: '-0.005em' }}>{title}</div>
      <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {items.map((it) => (
          <div key={it.label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ color: labelColour, fontSize: 17, fontWeight: 500 }}>{it.label}</div>
            <div style={{ color: brand.colors.bodyText, fontSize: 15, opacity: 0.85 }}>{it.detail}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Slide17OrganicVsPaid() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={17} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Channel system
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em', maxWidth: 1500 }}>
            Paid drives discovery; organic builds belief
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, maxWidth: '100%' }}>
          <Column title="Paid" items={paid} bg={brand.colors.sand} titleColour={brand.colors.darkGreen} labelColour={brand.colors.darkGreen} />
          <Column title="Organic" items={organic} bg={brand.colors.sand} titleColour={brand.colors.darkGreen} labelColour={brand.colors.darkGreen} />
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Parts C and E1, MIS 2026 Master Strategy
        </div>
      </div>
    </SlideFrame>
  )
}

import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

type ListItem = { label: string; detail: string }

const paid: ListItem[] = [
  { label: 'LinkedIn Lead Gen Forms', detail: '13% form completion' },
  { label: 'Google Search', detail: 'R18 to R42 CPC' },
  { label: 'Meta Reels', detail: 'R50.76 CPM' },
  { label: 'YouTube pre-roll', detail: 'R180 CPM' },
  { label: 'TikTok', detail: 'R0.27 CPM' },
]

const organic: ListItem[] = [
  { label: 'Fireside Conversation series', detail: 'Four episodes' },
  { label: 'Weekly newsletter on Beehiiv', detail: 'Built warm list before paid spend' },
  { label: 'Community radio', detail: 'North West provincial reach' },
  { label: 'WhatsApp broadcasts', detail: '95% open rate' },
  { label: 'Content repurpose chain', detail: 'One Fireside, five finished pieces in four hours' },
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
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={17} totalPages={30}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Channel system
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em', maxWidth: 1500 }}>
            Organic amplifies paid; paid funds organic
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, maxWidth: 1700 }}>
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

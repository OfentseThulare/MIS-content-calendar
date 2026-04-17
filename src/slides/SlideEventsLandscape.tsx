import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

type Event = { name: string; position: string; gap: string }

const events: Event[] = [
  {
    name: 'Investing in African Mining Indaba, Cape Town',
    position: 'The capital gateway. Institutional investors and ministers.',
    gap: 'Closed to communities. No public accountability format.',
  },
  {
    name: 'Joburg Indaba',
    position: 'The operators\u2019 floor. CEOs, chambers, transactional.',
    gap: 'No structural seat for affected communities or youth.',
  },
  {
    name: 'Junior Indaba',
    position: 'Exploration and early stage capital.',
    gap: 'Does not convene host communities or policy makers in one room.',
  },
  {
    name: 'Mining in Motion, Mining Lekgotla',
    position: 'Ministerial keynotes, sector signalling.',
    gap: 'Episodic. No year-long accountability loop.',
  },
]

export default function SlideEventsLandscape() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={6} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            The events landscape
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em', maxWidth: 1600 }}>
            Four major mining gatherings. None of them do what MIS does.
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 1600 }}>
          {events.map((e) => (
            <div
              key={e.name}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: 24,
                padding: '18px 24px',
                background: brand.colors.sand,
                borderLeft: `4px solid ${brand.colors.gold}`,
                borderRadius: 4,
              }}
            >
              <div style={{ color: brand.colors.darkGreen, fontWeight: 600, fontSize: 18 }}>{e.name}</div>
              <div style={{ color: brand.colors.bodyText, fontSize: 15, lineHeight: 1.45 }}>{e.position}</div>
              <div style={{ color: brand.colors.amber, fontSize: 15, lineHeight: 1.45, fontWeight: 500 }}>{e.gap}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Atlas competitive scan, April 2026. TBC: confirm with SAMCA.
        </div>
      </div>
    </SlideFrame>
  )
}

import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'
import DataCard from '../components/DataCard'

const rows: Array<[string, string]> = [
  ['Client', 'SAMCA, South African Mining Communities Association'],
  ['Event', 'Mining Integration Summit 2026'],
  ['Venue', 'Sun City, Rustenburg, North West Province'],
  ['Dates', '20 to 22 July 2026'],
  ['Programme', 'Day Programme, Gala Dinner, Mayoral Golf Day'],
  ['Presented by', 'SAMCA, South African Mining Communities Association'],
  ['CEO', 'Jade Adams'],
]

export default function Slide04ClientSummary() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={4} totalPages={31}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.22em',
              color: brand.colors.amber,
              textTransform: 'uppercase',
            }}
          >
            Section B, Slide 01
          </div>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 600,
              color: brand.colors.darkGreen,
              margin: '12px 0 0 0',
              letterSpacing: '-0.01em',
            }}
          >
            The client
          </h1>
        </div>

        <div style={{ maxWidth: 1320 }}>
          <DataCard>
            <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', rowGap: 18, columnGap: 32 }}>
              {rows.map(([k, v]) => (
                <div key={k} style={{ display: 'contents' }}>
                  <div
                    style={{
                      color: brand.colors.amber,
                      fontWeight: 600,
                      fontSize: 14,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      paddingTop: 4,
                    }}
                  >
                    {k}
                  </div>
                  <div style={{ color: brand.colors.bodyText, fontSize: 18, lineHeight: 1.5 }}>{v}</div>
                </div>
              ))}
            </div>
          </DataCard>
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: SAMCA Brief, April 2026
        </div>
      </div>
    </SlideFrame>
  )
}

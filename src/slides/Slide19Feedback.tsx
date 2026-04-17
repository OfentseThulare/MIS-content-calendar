import SlideFrame from '../components/SlideFrame'
import { brand } from '../lib/brand'

const rows = [
  { label: 'Named mechanism', value: 'MIS Stakeholder Feedback Protocol' },
  { label: 'Response time', value: '48 hour acknowledgement, 14 day resolution target' },
  { label: 'Disclosure', value: 'Post summit transparency report published within 60 days' },
  { label: 'Contact', value: 'stakeholders@mis2026.co.za' },
]

export default function Slide19Feedback() {
  return (
    <SlideFrame>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div
          style={{
            fontSize: 14,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: brand.colors.miningGold,
            marginBottom: 32,
          }}
        >
          Feedback and grievance
        </div>
        <h2
          style={{
            fontSize: 48,
            fontWeight: 500,
            color: brand.colors.kalahariCream,
            margin: 0,
            letterSpacing: '-0.01em',
            lineHeight: 1.15,
          }}
        >
          How we hear when something is wrong.
        </h2>

        <div
          style={{
            marginTop: 72,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 1400,
          }}
        >
          {rows.map((row, i) => (
            <div key={row.label}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '280px 1fr',
                  gap: 48,
                  padding: '20px 0',
                  alignItems: 'baseline',
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: brand.colors.miningGold,
                  }}
                >
                  {row.label}
                </div>
                <div style={{ fontSize: 22, color: brand.colors.kalahariCream }}>
                  {row.value}
                </div>
              </div>
              {i < rows.length - 1 && (
                <div style={{ height: 1, background: brand.colors.editorialGrey, opacity: 0.2 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  )
}

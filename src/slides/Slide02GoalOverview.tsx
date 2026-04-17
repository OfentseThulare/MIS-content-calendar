import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'

export default function Slide02GoalOverview() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={2} totalPages={39}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 40,
          maxWidth: 1500,
        }}
      >
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
            Opening, engagement goal
          </div>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 600,
              color: brand.colors.darkGreen,
              margin: '14px 0 0 0',
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              maxWidth: 1500,
            }}
          >
            What this engagement is built to achieve
          </h1>
        </div>

        <div
          style={{
            height: 1,
            background: brand.colors.gold,
            width: 220,
            opacity: 0.9,
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 1400 }}>
          <p
            style={{
              fontSize: 24,
              lineHeight: 1.55,
              color: brand.colors.bodyText,
              margin: 0,
            }}
          >
            Atlas has been engaged to deliver the full digital marketing and content strategy for the Mining Integration Summit 2026.
          </p>
          <p
            style={{
              fontSize: 24,
              lineHeight: 1.55,
              color: brand.colors.bodyText,
              margin: 0,
            }}
          >
            The goal is to fill the room with 500 to 600 qualified delegates across five stakeholder groups, secure six named sponsor commitments by 31 May, and establish MIS as a credible annual institution with MIS 2027 already in market before the 2026 event closes.
          </p>
          <p
            style={{
              fontSize: 24,
              lineHeight: 1.55,
              color: brand.colors.darkGreen,
              fontWeight: 500,
              margin: 0,
            }}
          >
            This deck sets out how Atlas will deliver that, what it will cost, and what it will return.
          </p>
        </div>
      </div>
    </SlideFrame>
  )
}

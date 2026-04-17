import SlideFrame from '../components/SlideFrame'
import { brand } from '../lib/brand'

export default function Slide06WhatIsTension() {
  return (
    <SlideFrame>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: 1400,
        }}
      >
        <div
          style={{
            fontSize: 14,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: brand.colors.miningGold,
            marginBottom: 32,
          }}
        >
          What is, beat four
        </div>
        <h2
          style={{
            fontSize: 52,
            fontWeight: 500,
            color: brand.colors.kalahariCream,
            margin: 0,
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
          }}
        >
          The industry talks integration; the calendar says otherwise.
        </h2>
        <p
          style={{
            fontSize: 22,
            lineHeight: 1.5,
            color: brand.colors.kalahariCream,
            marginTop: 48,
            maxWidth: 1100,
          }}
        >
          Current mining conferences separate technical, ESG, and community
          tracks. Stakeholders leave without having spoken to each other.
        </p>

        <div
          style={{
            marginTop: 64,
            borderLeft: `3px solid ${brand.colors.miningGold}`,
            paddingLeft: 24,
            maxWidth: 880,
          }}
        >
          <p
            style={{
              fontStyle: 'italic',
              fontSize: 18,
              lineHeight: 1.5,
              color: brand.colors.editorialGrey,
              margin: 0,
            }}
          >
            The regulator was in room three. The community delegation was in room
            seven. We never met.
          </p>
          <div
            style={{
              marginTop: 16,
              fontSize: 12,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: brand.colors.editorialGrey,
            }}
          >
            Attendee feedback, Indaba 2024
          </div>
        </div>
      </div>
    </SlideFrame>
  )
}

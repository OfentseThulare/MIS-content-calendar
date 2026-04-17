import SlideFrame from '../components/SlideFrame'
import { brand } from '../lib/brand'

export default function Slide07WhatCouldBeIntegrated() {
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
          What could be, beat five
        </div>
        <h2
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: brand.colors.kalahariCream,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}
        >
          One programme. Every voice in the room.
        </h2>
        <p
          style={{
            fontSize: 22,
            lineHeight: 1.5,
            color: brand.colors.kalahariCream,
            marginTop: 56,
            maxWidth: 1080,
          }}
        >
          MIS 2026 merges technical, regulatory, community, and investor tracks
          into a single integrated programme with cross stakeholder panels in
          every session.
        </p>
      </div>
    </SlideFrame>
  )
}

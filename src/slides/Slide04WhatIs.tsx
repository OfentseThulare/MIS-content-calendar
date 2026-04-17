import SlideFrame from '../components/SlideFrame'
import NumberTicker from '../components/NumberTicker'
import { brand } from '../lib/brand'

export default function Slide04WhatIs() {
  return (
    <SlideFrame>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div
          style={{
            fontSize: 14,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: brand.colors.miningGold,
            marginBottom: 40,
          }}
        >
          What is, beat two
        </div>
        <h2
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: brand.colors.kalahariCream,
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          The trust deficit is measurable.
        </h2>

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 48,
            marginTop: 72,
          }}
        >
          <div
            style={{
              fontSize: 240,
              fontWeight: 600,
              color: brand.colors.miningGold,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            <NumberTicker value={67} suffix="%" />
          </div>
          <p
            style={{
              fontSize: 22,
              lineHeight: 1.4,
              color: brand.colors.kalahariCream,
              margin: 0,
              maxWidth: 560,
              paddingBottom: 32,
            }}
          >
            of mining communities report dissatisfaction with current engagement
            practices.
          </p>
        </div>

        <div
          style={{
            marginTop: 72,
            fontSize: 12,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: brand.colors.editorialGrey,
          }}
        >
          Source, Minerals Council South Africa, Community Relations Report 2024
        </div>
      </div>
    </SlideFrame>
  )
}

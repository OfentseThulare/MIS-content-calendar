import SlideFrame from '../components/SlideFrame'
import TrajectoryChart from '../components/TrajectoryChart'
import { brand } from '../lib/brand'

const data = [
  { year: '2022', delegates: 420 },
  { year: '2023', delegates: 610 },
  { year: '2024', delegates: 780 },
  { year: '2025', delegates: 960 },
  { year: '2026', delegates: 1200 },
]

export default function Slide05WhatCouldBe() {
  return (
    <SlideFrame>
      <div
        style={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 72,
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 14,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: brand.colors.miningGold,
              marginBottom: 32,
            }}
          >
            What could be, beat three
          </div>
          <h2
            style={{
              fontSize: 44,
              fontWeight: 500,
              color: brand.colors.kalahariCream,
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
            }}
          >
            A summit built on substance, not spectacle.
          </h2>
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.5,
              color: brand.colors.kalahariCream,
              marginTop: 40,
              maxWidth: 620,
            }}
          >
            MIS 2026 targets 1,200 delegates across 14 nations, with 40 percent
            representation from host communities and regulatory bodies by
            September 2026.
          </p>
          <div
            style={{
              marginTop: 48,
              fontSize: 12,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: brand.colors.editorialGrey,
            }}
          >
            Source, Atlas Consulting Group delegate projection model 2026
          </div>
        </div>

        <div>
          <TrajectoryChart
            data={data}
            xKey="year"
            lines={[{ dataKey: 'delegates', colour: brand.colors.miningGold, label: 'Delegates' }]}
            height={560}
            yDomain={[0, 1400]}
          />
        </div>
      </div>
    </SlideFrame>
  )
}

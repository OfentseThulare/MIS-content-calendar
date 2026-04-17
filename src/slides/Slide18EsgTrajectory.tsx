import SlideFrame from '../components/SlideFrame'
import TrajectoryChart from '../components/TrajectoryChart'
import { brand } from '../lib/brand'

const data = [
  { year: '2024', engagement: 42, carbon: 12, procurement: 28 },
  { year: '2025', engagement: 54, carbon: 22, procurement: 38 },
  { year: '2026', engagement: 72, carbon: 40, procurement: 55 },
  { year: '2027', engagement: 82, carbon: 58, procurement: 68 },
]

export default function Slide18EsgTrajectory() {
  return (
    <SlideFrame>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: 14,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: brand.colors.miningGold,
            marginBottom: 24,
          }}
        >
          ESG and commitment trajectory
        </div>
        <h2
          style={{
            fontSize: 44,
            fontWeight: 500,
            color: brand.colors.kalahariCream,
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          Measurable impact targets.
        </h2>

        <div style={{ marginTop: 32, flex: 1, minHeight: 0 }}>
          <TrajectoryChart
            data={data}
            xKey="year"
            height={560}
            yDomain={[0, 100]}
            lines={[
              { dataKey: 'engagement', colour: brand.colors.miningGold, label: 'Community engagement score' },
              { dataKey: 'carbon', colour: brand.colors.forestGreen, label: 'Carbon offset percent' },
              { dataKey: 'procurement', colour: brand.colors.ochreRed, label: 'Local procurement percent' },
            ]}
          />
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 12,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: brand.colors.editorialGrey,
          }}
        >
          Source, Atlas Consulting Group internal benchmarking framework
        </div>
      </div>
    </SlideFrame>
  )
}

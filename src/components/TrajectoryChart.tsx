import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { brand } from '../lib/brand'

export type TrajectoryLine = {
  dataKey: string
  colour: string
  label?: string
}

type TrajectoryChartProps = {
  data: Array<Record<string, number | string>>
  lines: TrajectoryLine[]
  xKey: string
  height?: number
  yDomain?: [number, number]
}

export default function TrajectoryChart({
  data,
  lines,
  xKey,
  height = 520,
  yDomain,
}: TrajectoryChartProps) {
  return (
    <div style={{ width: '100%', height, fontFamily: brand.fonts.primary }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 24, right: 48, bottom: 24, left: 24 }}>
          <CartesianGrid
            stroke={brand.colors.miningGold}
            strokeOpacity={0.1}
            vertical={false}
          />
          <XAxis
            dataKey={xKey}
            stroke={brand.colors.editorialGrey}
            tick={{ fill: brand.colors.kalahariCream, fontSize: 14, fontFamily: brand.fonts.primary }}
            tickLine={false}
            axisLine={{ stroke: brand.colors.editorialGrey, strokeOpacity: 0.4 }}
          />
          <YAxis
            stroke={brand.colors.editorialGrey}
            tick={{ fill: brand.colors.kalahariCream, fontSize: 14, fontFamily: brand.fonts.primary }}
            tickLine={false}
            axisLine={false}
            domain={yDomain}
          />
          <Tooltip
            contentStyle={{
              background: brand.colors.shaftBlack,
              border: `1px solid ${brand.colors.miningGold}`,
              borderRadius: 6,
              fontFamily: brand.fonts.primary,
              color: brand.colors.kalahariCream,
            }}
            labelStyle={{ color: brand.colors.miningGold }}
          />
          <Legend
            wrapperStyle={{
              fontFamily: brand.fonts.primary,
              color: brand.colors.kalahariCream,
              fontSize: 14,
            }}
          />
          {lines.map((line) => (
            <Line
              key={line.dataKey}
              type="monotone"
              dataKey={line.dataKey}
              stroke={line.colour}
              strokeWidth={2.5}
              dot={{ r: 4, fill: line.colour, strokeWidth: 0 }}
              activeDot={{ r: 6, fill: line.colour }}
              name={line.label ?? line.dataKey}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

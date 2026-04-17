import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { brand } from '../lib/brand'

export type BudgetSlice = {
  name: string
  value: number
  colour: string
}

type BudgetChartProps = {
  data: BudgetSlice[]
  height?: number
  innerRadius?: number
  outerRadius?: number
  valuePrefix?: string
}

export default function BudgetChart({
  data,
  height = 420,
  innerRadius = 90,
  outerRadius = 160,
  valuePrefix = 'R',
}: BudgetChartProps) {
  return (
    <div style={{ width: '100%', height, fontFamily: brand.fonts.primary }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={1}
            stroke={brand.colors.lightBg}
            strokeWidth={2}
          >
            {data.map((slice) => (
              <Cell key={slice.name} fill={slice.colour} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => {
              const n = typeof value === 'number' ? value : Number(value ?? 0)
              return `${valuePrefix}${n.toLocaleString('en-GB')}`
            }}
            contentStyle={{
              background: brand.colors.lightBg,
              border: `1px solid ${brand.colors.gold}`,
              borderRadius: 6,
              fontFamily: brand.fonts.primary,
              color: brand.colors.bodyText,
            }}
            labelStyle={{ color: brand.colors.darkGreen }}
          />
          <Legend
            wrapperStyle={{
              fontFamily: brand.fonts.primary,
              color: brand.colors.bodyText,
              fontSize: 13,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

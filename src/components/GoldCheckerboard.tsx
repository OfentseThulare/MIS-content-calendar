import { brand } from '../lib/brand'

type GoldCheckerboardProps = {
  cols?: number
  rows?: number
  cell?: number
  colour?: string
  style?: React.CSSProperties
}

export default function GoldCheckerboard({
  cols = 4,
  rows = 5,
  cell = 14,
  colour = brand.colors.gold,
  style,
}: GoldCheckerboardProps) {
  const width = cols * cell
  const height = rows * cell
  const squares: Array<{ x: number; y: number; filled: boolean }> = []
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      squares.push({ x: c * cell, y: r * cell, filled: (r + c) % 2 === 0 })
    }
  }
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      {squares.map((s, i) =>
        s.filled ? (
          <rect
            key={i}
            x={s.x}
            y={s.y}
            width={cell}
            height={cell}
            fill={colour}
          />
        ) : null,
      )}
    </svg>
  )
}

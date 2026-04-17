import { brand } from '../lib/brand'
import SlideFrame from './SlideFrame'

type SectionDividerProps = {
  title: string
  accentColor?: string
  bg?: string
  textColor?: string
}

export default function SectionDivider({
  title,
  accentColor = brand.colors.miningGold,
  bg = brand.colors.shaftBlack,
  textColor = brand.colors.kalahariCream,
}: SectionDividerProps) {
  return (
    <SlideFrame bg={bg}>
      <div className="h-full w-full flex flex-col justify-center">
        <div
          style={{
            fontSize: 96,
            fontWeight: 500,
            color: textColor,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 48,
            width: 120,
            height: 1,
            background: accentColor,
          }}
        />
      </div>
    </SlideFrame>
  )
}

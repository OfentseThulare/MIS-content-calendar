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
  accentColor = brand.colors.gold,
  bg = brand.colors.darkGreen,
  textColor = brand.colors.gold,
}: SectionDividerProps) {
  return (
    <SlideFrame bg={bg} textColor={textColor}>
      <div className="h-full w-full flex flex-col justify-center">
        <div
          style={{
            fontSize: 96,
            fontWeight: 600,
            color: textColor,
            letterSpacing: '-0.01em',
            lineHeight: 1.05,
            fontFamily: brand.fonts.primary,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 48,
            width: 120,
            height: 2,
            background: accentColor,
          }}
        />
      </div>
    </SlideFrame>
  )
}

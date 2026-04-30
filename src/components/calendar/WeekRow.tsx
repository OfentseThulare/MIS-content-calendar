import type { CSSProperties } from 'react'
import { brand } from '../../lib/brand'
import { phases, type PhaseKey } from '../../data/phases'
import type { CalendarDay, CalendarPost } from '../../data/calendar'
import CalendarCard from './CalendarCard'

type Props = {
  weekNumber: number
  phase: PhaseKey
  posts: CalendarPost[]
  onSelectPost: (post: CalendarPost) => void
  style?: CSSProperties
}

const dayOrder: CalendarDay[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

export default function WeekRow({ weekNumber, phase, posts, onSelectPost, style }: Props) {
  const phaseDef = phases[phase]
  const dateRange = posts.length
    ? `${shortDate(posts[0].date)} to ${shortDate(posts[posts.length - 1].date)}`
    : ''

  const byDay = new Map<CalendarDay, CalendarPost>()
  for (const post of posts) byDay.set(post.day, post)

  return (
    <div
      data-week-row
      style={{
        display: 'grid',
        gridTemplateColumns: '120px repeat(5, 1fr)',
        gap: 12,
        alignItems: 'stretch',
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 6,
          paddingLeft: 4,
        }}
      >
        <div
          style={{
            color: brand.colors.mutedGreen,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          {`Week ${weekNumber}`}
        </div>
        <div
          style={{
            color: brand.colors.darkGreen,
            fontSize: 13,
            fontWeight: 500,
            lineHeight: 1.35,
          }}
        >
          {dateRange}
        </div>
        <div
          style={{
            color: phaseAccent(phase),
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          {phaseDef.label}
        </div>
      </div>

      {dayOrder.map((day) => {
        const post = byDay.get(day)
        if (!post) {
          return (
            <div
              key={day}
              aria-hidden
              style={{
                height: 140,
                borderRadius: 6,
                border: `1px dashed ${brand.colors.sand}`,
                background: `${brand.colors.lightBg}55`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: brand.colors.mutedGreen,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              {day}
            </div>
          )
        }
        return <CalendarCard key={post.id} post={post} onSelect={onSelectPost} />
      })}
    </div>
  )
}

function shortDate(iso: string): string {
  const [, mm, dd] = iso.split('-')
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${Number(dd)} ${months[Number(mm) - 1]}`
}

function phaseAccent(phase: PhaseKey): string {
  if (phase === 'awareness') return brand.colors.gold
  if (phase === 'speakers') return brand.colors.amber
  return brand.colors.darkBrown
}

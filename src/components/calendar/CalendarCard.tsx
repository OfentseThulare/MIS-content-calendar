import { useState } from 'react'
import { brand } from '../../lib/brand'
import { pillars } from '../../data/pillars'
import { formatLabel, type CalendarPost } from '../../data/calendar'

type Props = {
  post: CalendarPost
  onSelect: (post: CalendarPost) => void
}

export default function CalendarCard({ post, onSelect }: Props) {
  const pillar = pillars[post.pillar]
  const [hover, setHover] = useState(false)
  const ariaLabel = `${post.id}, ${dayName(post.day)} ${formattedDate(post.date)}, ${post.title}, ${pillar.label} pillar${
    post.isPaid ? ', paid' : ', organic'
  }`

  return (
    <button
      type="button"
      data-calendar-card
      onClick={() => onSelect(post)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      aria-label={ariaLabel}
      style={{
        position: 'relative',
        background: post.isPaid ? brand.colors.sand : brand.colors.lightBg,
        height: 140,
        borderRadius: 6,
        paddingLeft: 16,
        paddingRight: 14,
        paddingTop: 14,
        paddingBottom: 14,
        textAlign: 'left',
        border: 'none',
        cursor: 'pointer',
        fontFamily: brand.fonts.primary,
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hover
          ? `0 8px 24px ${brand.colors.gold}2e`
          : '0 1px 2px rgba(38, 69, 39, 0.08)',
        transition: 'transform 200ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 200ms cubic-bezier(0.22, 1, 0.36, 1)',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        outline: 'none',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: pillar.accent,
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
        }}
      />

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
        <span
          style={{
            color: brand.colors.gold,
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: '0.05em',
            background: brand.colors.darkGreen,
            padding: '2px 6px',
            borderRadius: 3,
          }}
        >
          {post.id}
        </span>
        <span
          style={{
            color: brand.colors.mutedGreen,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          {post.day.toUpperCase()}
        </span>
      </div>

      <div
        style={{
          color: brand.colors.darkGreen,
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 1.32,
          letterSpacing: '-0.005em',
          flex: 1,
          minHeight: 0,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {post.title}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
        <span
          style={{
            background: post.isPaid ? brand.colors.darkBrown : brand.colors.darkGreen,
            color: post.isPaid ? brand.colors.lightBg : brand.colors.gold,
            fontSize: 11,
            fontWeight: 500,
            padding: '3px 8px',
            borderRadius: 999,
            letterSpacing: '0.04em',
          }}
        >
          {post.isPaid ? `Paid · ${formatLabel[post.format]}` : formatLabel[post.format]}
        </span>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            color: brand.colors.darkGreen,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          <span
            aria-hidden
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: pillar.accent,
              boxShadow: `0 0 0 2px ${pillar.accent}33`,
            }}
          />
          {pillar.short}
        </span>
      </div>
    </button>
  )
}

function dayName(d: CalendarPost['day']): string {
  return { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday' }[d]
}

function formattedDate(iso: string): string {
  const [yyyy, mm, dd] = iso.split('-')
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ]
  const month = months[Number(mm) - 1]
  return `${Number(dd)} ${month} ${yyyy}`
}

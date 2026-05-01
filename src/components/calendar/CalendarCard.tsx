import { useRef, useState } from 'react'
import { brand } from '../../lib/brand'
import { pillars } from '../../data/pillars'
import { formatLabel, type CalendarPost } from '../../data/calendar'
import { useCompact } from './useCompact'

type Props = {
  post: CalendarPost
  onSelect: (post: CalendarPost) => void
}

const formatGlossary: Record<string, string> = {
  Manifesto: 'Anchor launch post, native, 1080 hero, pinned to the SAMCA page.',
  Carousel: 'Multi-image LinkedIn carousel. ~6.6% engagement benchmark.',
  'Long-form text': 'Native long-form thought leadership post.',
  Announcement: 'Single-image announcement card with logo lockup.',
  'LinkedIn Live': 'Live Fireside Conversation, 7pm to 9pm Thursday.',
  Recap: 'Friday week recap card with registration CTA.',
  'Video clip': '60 second native LinkedIn video clip from the prior Fireside.',
  'Document carousel': 'PDF document carousel, ~7.0% engagement benchmark.',
  'Live coverage': 'On-the-day event coverage native video.',
}

export default function CalendarCard({ post, onSelect }: Props) {
  const compact = useCompact()
  const pillar = pillars[post.pillar]
  const [hover, setHover] = useState(false)
  const [focusRing, setFocusRing] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)
  const ariaLabel = `${post.id}, ${dayName(post.day)} ${formattedDate(post.date)}, ${post.title}, ${pillar.label} pillar`
  const formatText = formatLabel[post.format]
  const formatHint = formatGlossary[formatText] ?? formatText

  return (
    <button
      type="button"
      data-calendar-card
      onClick={() => onSelect(post)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={(e) => {
        setHover(true)
        if (e.target.matches(':focus-visible')) setFocusRing(true)
      }}
      onBlur={() => {
        setHover(false)
        setFocusRing(false)
      }}
      aria-label={ariaLabel}
      style={{
        position: 'relative',
        background: brand.colors.lightBg,
        height: compact ? 'auto' : 140,
        minHeight: compact ? 120 : 140,
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
        boxShadow: focusRing
          ? `0 0 0 3px ${brand.colors.darkGreen}, 0 0 0 5px ${brand.colors.gold}`
          : hover
            ? `0 8px 24px ${brand.colors.gold}2e`
            : '0 1px 2px rgba(38, 69, 39, 0.08)',
        transition:
          'transform 200ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 200ms cubic-bezier(0.22, 1, 0.36, 1)',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        outline: 'none',
        overflow: 'hidden',
        width: '100%',
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

      <div style={{ position: 'relative', flex: 1, minHeight: 0 }}>
        <div
          ref={titleRef}
          style={{
            color: brand.colors.darkGreen,
            fontWeight: 600,
            fontSize: 14,
            lineHeight: 1.32,
            letterSpacing: '-0.005em',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.title}
        </div>
        {/* Bottom fade hints at truncation when the title spills past 3 lines. */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 16,
            pointerEvents: 'none',
            background: `linear-gradient(to bottom, transparent, ${brand.colors.lightBg})`,
            opacity: 0.6,
          }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
        <span
          title={formatHint}
          style={{
            background: brand.colors.darkGreen,
            color: brand.colors.gold,
            fontSize: 11,
            fontWeight: 500,
            padding: '3px 8px',
            borderRadius: 999,
            letterSpacing: '0.04em',
            cursor: 'help',
          }}
        >
          {formatText}
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
  return `${Number(dd)} ${months[Number(mm) - 1]} ${yyyy}`
}

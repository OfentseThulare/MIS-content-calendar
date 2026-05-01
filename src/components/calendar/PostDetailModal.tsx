import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { brand, zLayers } from '../../lib/brand'
import { pillars } from '../../data/pillars'
import { phases } from '../../data/phases'
import { formatLabel, type CalendarPost } from '../../data/calendar'
import { posts as copyMap } from '../../copy/posts'
import { useCompact } from './useCompact'

type Props = {
  post: CalendarPost | null
  onClose: () => void
}

export default function PostDetailModal({ post, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocusRef = useRef<HTMLElement | null>(null)
  const compact = useCompact()

  useEffect(() => {
    if (!post) return
    lastFocusRef.current = (document.activeElement as HTMLElement) ?? null

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key === 'Tab') {
        const panel = closeRef.current?.closest('[role="dialog"]') as HTMLElement | null
        if (!panel) return
        const focusable = Array.from(
          panel.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((el) => el.offsetParent !== null)
        if (focusable.length === 0) {
          e.preventDefault()
          closeRef.current?.focus()
          return
        }
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        const active = document.activeElement as HTMLElement | null
        if (e.shiftKey && active === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && active === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.dispatchEvent(new CustomEvent('atlas:modal-open'))

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      window.dispatchEvent(new CustomEvent('atlas:modal-close'))
      lastFocusRef.current?.focus()
    }
  }, [post, onClose])

  if (!post) return null

  const pillar = pillars[post.pillar]
  const phase = phases[post.phase]
  const draft = copyMap[post.copyId]

  const overlayPadding = compact ? 0 : 24
  const panelPadding = compact ? '18px 18px 22px' : '32px 32px 28px'
  const panelMaxHeight = compact ? '100dvh' : '88vh'
  const panelBorderRadius = compact ? 0 : 12
  const titleSize = compact ? 22 : 28
  const headerGap = compact ? 8 : 12

  const modal = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Post detail, ${post.id}, ${post.title}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: zLayers.modal,
        background: 'rgba(38, 69, 39, 0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: compact ? 'stretch' : 'center',
        justifyContent: 'center',
        padding: overlayPadding,
        fontFamily: brand.fonts.primary,
      }}
      onClick={onClose}
    >
      <div
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
        style={{
          background: brand.colors.lightBg,
          color: brand.colors.bodyText,
          fontFamily: brand.fonts.primary,
          maxWidth: 720,
          width: '100%',
          maxHeight: panelMaxHeight,
          height: compact ? '100dvh' : 'auto',
          overflowY: 'auto',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain',
          borderRadius: panelBorderRadius,
          position: 'relative',
          boxShadow: compact ? 'none' : '0 24px 64px rgba(0, 0, 0, 0.35)',
          borderLeft: compact ? 'none' : `5px solid ${pillar.accent}`,
          borderTop: compact ? `5px solid ${pillar.accent}` : 'none',
        }}
      >
        {/* Sticky close bar so the X is always reachable while scrolling. */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            display: 'flex',
            justifyContent: 'flex-end',
            padding: compact ? '10px 10px 0' : '14px 14px 0',
            background: `linear-gradient(to bottom, ${brand.colors.lightBg} 70%, ${brand.colors.lightBg}00)`,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close post detail"
            className="atlas-focus-ring"
            style={{
              pointerEvents: 'auto',
              width: 36,
              height: 36,
              borderRadius: 999,
              border: `1px solid ${brand.colors.darkGreen}33`,
              background: brand.colors.lightBg,
              color: brand.colors.darkGreen,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              outline: 'none',
              fontSize: 16,
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        <div
          style={{
            padding: panelPadding,
            paddingTop: compact ? 4 : 8,
          }}
        >
          <div style={{ display: 'flex', gap: headerGap, alignItems: 'baseline', flexWrap: 'wrap' }}>
            <span
              style={{
                color: brand.colors.gold,
                background: brand.colors.darkGreen,
                padding: '4px 10px',
                borderRadius: 4,
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: '0.06em',
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
              {`Phase ${phase.number} · ${phase.label}`}
            </span>
            <span
              style={{
                color: pillar.accent,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              {pillar.label}
            </span>
          </div>

          <div
            style={{
              marginTop: 14,
              color: brand.colors.darkGreen,
              fontSize: titleSize,
              fontWeight: 600,
              letterSpacing: '-0.005em',
              lineHeight: 1.2,
            }}
          >
            {post.title}
          </div>

          <div
            style={{
              marginTop: 8,
              color: brand.colors.bodyText,
              fontSize: 13,
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <span>{`${dayName(post.day)}, ${formattedDate(post.date)}`}</span>
            <span>·</span>
            <span>{formatLabel[post.format]}</span>
            {post.notes ? (
              <>
                <span>·</span>
                <span style={{ color: brand.colors.mutedGreen, fontWeight: 600 }}>{post.notes}</span>
              </>
            ) : null}
          </div>

          {draft ? (
            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <Section title="Hook">{draft.hook}</Section>
              <Section title="Body">
                {draft.body.split('\n\n').map((para, i) => (
                  <p
                    key={`${post.id}-para-${i}-${para.slice(0, 24)}`}
                    style={{ margin: 0, marginBottom: 10, fontSize: 15, lineHeight: 1.6 }}
                  >
                    {para}
                  </p>
                ))}
              </Section>
              <Section title="Call to action">{draft.cta}</Section>
              <Section title="Hashtags">
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {draft.hashtags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: `${pillar.accent}22`,
                        color: pillar.accent,
                        padding: '4px 10px',
                        borderRadius: 999,
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Section>
            </div>
          ) : (
            <div style={{ marginTop: 24, color: brand.colors.mutedGreen, fontSize: 14 }}>
              Draft pending. Copy will land in `src/copy/posts.ts` ahead of publish.
            </div>
          )}
        </div>
      </div>
    </div>
  )

  // Render via Portal so the dialog escapes any transformed ancestor (the calendar
  // canvas uses CSS scale on desktop, which would otherwise constrain position:fixed).
  if (typeof document === 'undefined') return null
  return createPortal(modal, document.body)
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div
        style={{
          color: brand.colors.amber,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      <div style={{ color: brand.colors.bodyText, fontSize: 15, lineHeight: 1.6 }}>{children}</div>
    </div>
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

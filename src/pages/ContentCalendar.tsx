import { useEffect, useMemo, useState } from 'react'
import { brand } from '../lib/brand'
import CalendarShell from '../components/calendar/CalendarShell'
import CalendarHeader from '../components/calendar/CalendarHeader'
import CalendarHero from '../components/calendar/CalendarHero'
import PhaseNavigator from '../components/calendar/PhaseNavigator'
import PillarLegend from '../components/calendar/PillarLegend'
import WeekRow from '../components/calendar/WeekRow'
import PhaseDivider from '../components/calendar/PhaseDivider'
import PostDetailModal from '../components/calendar/PostDetailModal'
import CalendarFilters from '../components/calendar/CalendarFilters'
import { defaultFilters, type FilterState, type PaidFilter } from '../components/calendar/filterTypes'
import { calendar, calendarByWeek, type CalendarPost } from '../data/calendar'
import { phases } from '../data/phases'
import type { PillarKey } from '../data/pillars'
import type { PhaseKey } from '../data/phases'
import { useEnhancer } from '../components/calendar/useEnhancer'
import { useCompact } from '../components/calendar/useCompact'
import './../components/calendar/calendar.css'

const PAGE_TITLE = 'MIS 2026 LinkedIn Content Calendar, SAMCA'

export default function ContentCalendar() {
  const [activePost, setActivePost] = useState<CalendarPost | null>(null)
  const [filters, setFilters] = useState<FilterState>(() => readHashFilters())

  useEffect(() => {
    const previous = document.title
    document.title = PAGE_TITLE
    return () => {
      document.title = previous
    }
  }, [])

  useEffect(() => {
    writeHashFilters(filters)
  }, [filters])

  useEffect(() => {
    const onHash = () => setFilters(readHashFilters())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEnhancer()

  const filteredPosts = useMemo(() => calendar.filter((p) => matches(p, filters)), [filters])
  const filteredIds = useMemo(() => new Set(filteredPosts.map((p) => p.id)), [filteredPosts])
  const weeks = useMemo(() => {
    return calendarByWeek()
      .map((w) => ({ ...w, posts: w.posts.filter((p) => filteredIds.has(p.id)) }))
      .filter((w) => w.posts.length > 0)
  }, [filteredIds])

  return (
    <CalendarShell>
      <a className="atlas-skip-link" href="#calendar-grid">
        Skip to calendar grid
      </a>

      <CalendarHeader />

      <Body>
        <section aria-label="Calendar overview">
          <CalendarHero />
        </section>

        <main id="main-content">
          <SectionHeading id="phases-heading">Campaign phases</SectionHeading>
          <PhaseNavigator />

          <SectionHeading id="pillars-heading" topSpacing={20}>
            Content pillars
          </SectionHeading>
          <PillarLegend />

          <SectionHeading id="filters-heading" topSpacing={12}>
            Filter and jump
          </SectionHeading>
          <CalendarFilters
            filters={filters}
            setFilters={setFilters}
            matchedCount={filteredPosts.length}
            totalCount={calendar.length}
          />

          <SectionHeading id="grid-heading" topSpacing={20}>
            The 12-week schedule
          </SectionHeading>

          <div
            id="calendar-grid"
            aria-labelledby="grid-heading"
            style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}
          >
            {weeks.length === 0 ? (
              <div
                style={{
                  padding: 28,
                  borderRadius: 8,
                  background: brand.colors.lightBg,
                  border: `1px dashed ${brand.colors.sand}`,
                  color: brand.colors.mutedGreen,
                  textAlign: 'center',
                  fontSize: 14,
                }}
              >
                No posts match these filters. Reset to see the full 12-week calendar.
              </div>
            ) : (
              weeks.map((week, idx) => {
                const previousPhase = idx === 0 ? null : weeks[idx - 1].phase
                const showDivider = previousPhase !== null && previousPhase !== week.phase

                return (
                  <div key={`week-${week.weekNumber}`}>
                    {showDivider ? <PhaseDivider phase={week.phase} /> : null}
                    <WeekRow
                      weekNumber={week.weekNumber}
                      phase={week.phase}
                      posts={week.posts}
                      onSelectPost={setActivePost}
                    />
                  </div>
                )
              })
            )}
          </div>
        </main>

        <Footer />
      </Body>

      <PostDetailModal post={activePost} onClose={() => setActivePost(null)} />
    </CalendarShell>
  )
}

function Body({ children }: { children: React.ReactNode }) {
  const compact = useCompact()
  return (
    <div style={{ padding: compact ? '0 16px 56px' : '0 64px 56px' }}>{children}</div>
  )
}

function SectionHeading({
  id,
  children,
  topSpacing = 24,
}: {
  id: string
  children: React.ReactNode
  topSpacing?: number
}) {
  return (
    <h2 id={id} className="atlas-sr-only" style={{ marginTop: topSpacing }}>
      {children}
    </h2>
  )
}

function Footer() {
  return (
    <footer
      style={{
        marginTop: 64,
        paddingTop: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          flex: 1,
          height: 1.5,
          background: brand.colors.gold,
          minWidth: 200,
        }}
      />
      <div
        style={{
          color: brand.colors.mutedGreen,
          fontSize: 12,
          letterSpacing: '0.16em',
          fontFamily: brand.fonts.primary,
        }}
      >
        Source: SAMCA MIS 2026 Strategy and SOW · {phases.awareness.dateRange.split(' to ')[0]} to 22 July 2026
      </div>
      <div
        style={{
          color: brand.colors.darkGreen,
          fontSize: 12,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}
      >
        Atlas Consulting Group
      </div>
    </footer>
  )
}

function matches(post: CalendarPost, filters: FilterState): boolean {
  if (filters.phase !== 'all' && post.phase !== filters.phase) return false
  if (filters.pillar !== 'all' && post.pillar !== filters.pillar) return false
  if (filters.paid === 'paid' && !post.isPaid) return false
  if (filters.paid === 'organic' && post.isPaid) return false
  return true
}

function readHashFilters(): FilterState {
  if (typeof window === 'undefined') return defaultFilters
  const hash = window.location.hash.replace(/^#/, '')
  if (!hash) return defaultFilters
  const params = new URLSearchParams(hash)
  const phase = params.get('phase')
  const pillar = params.get('pillar')
  const paid = params.get('paid')
  const validPhase: FilterState['phase'] =
    phase === 'awareness' || phase === 'speakers' || phase === 'programme' ? (phase as PhaseKey) : 'all'
  const validPillar: FilterState['pillar'] =
    pillar === 'industry-collaboration' ||
    pillar === 'policy-regulatory-dialogue' ||
    pillar === 'inclusive-participation' ||
    pillar === 'community-development' ||
    pillar === 'investment-attraction'
      ? (pillar as PillarKey)
      : 'all'
  const validPaid: PaidFilter = paid === 'paid' || paid === 'organic' ? paid : 'all'
  return { phase: validPhase, pillar: validPillar, paid: validPaid }
}

function writeHashFilters(filters: FilterState): void {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams()
  if (filters.phase !== 'all') params.set('phase', filters.phase)
  if (filters.pillar !== 'all') params.set('pillar', filters.pillar)
  if (filters.paid !== 'all') params.set('paid', filters.paid)
  const next = params.toString()
  const url = next ? `#${next}` : window.location.pathname + window.location.search
  if (next) {
    if (window.location.hash !== `#${next}`) window.history.replaceState(null, '', `#${next}`)
  } else if (window.location.hash) {
    window.history.replaceState(null, '', url)
  }
}

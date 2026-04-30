import { useState } from 'react'
import { brand } from '../lib/brand'
import CalendarShell from '../components/calendar/CalendarShell'
import CalendarHeader from '../components/calendar/CalendarHeader'
import CalendarHero from '../components/calendar/CalendarHero'
import PhaseNavigator from '../components/calendar/PhaseNavigator'
import PillarLegend from '../components/calendar/PillarLegend'
import WeekRow from '../components/calendar/WeekRow'
import PhaseDivider from '../components/calendar/PhaseDivider'
import PostDetailModal from '../components/calendar/PostDetailModal'
import { calendarByWeek, type CalendarPost } from '../data/calendar'
import { phases } from '../data/phases'
import { useEnhancer } from '../components/calendar/useEnhancer'

export default function ContentCalendar() {
  const [activePost, setActivePost] = useState<CalendarPost | null>(null)
  const weeks = calendarByWeek()
  useEnhancer()

  return (
    <CalendarShell>
      <CalendarHeader />

      <div style={{ padding: '0 64px 56px' }}>
        <CalendarHero />

        <PhaseNavigator />

        <PillarLegend />

        <div id="calendar-grid" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
          {weeks.map((week, idx) => {
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
          })}
        </div>

        <Footer />
      </div>

      <PostDetailModal post={activePost} onClose={() => setActivePost(null)} />
    </CalendarShell>
  )
}

function Footer() {
  return (
    <div
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
    </div>
  )
}

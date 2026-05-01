import { brand } from '../../lib/brand'
import { pillarOrder, pillars } from '../../data/pillars'
import { phaseOrder, phases, type PhaseKey } from '../../data/phases'
import { useCompact } from './useCompact'
import { defaultFilters, type FilterState } from './filterTypes'

type Props = {
  filters: FilterState
  setFilters: (next: FilterState) => void
  matchedCount: number
  totalCount: number
}

export default function CalendarFilters({ filters, setFilters, matchedCount, totalCount }: Props) {
  const compact = useCompact()
  const reset = () => setFilters(defaultFilters)
  const isFiltered = filters.phase !== 'all' || filters.pillar !== 'all'

  return (
    <section
      aria-label="Calendar filters"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        padding: compact ? 14 : '14px 16px',
        background: brand.colors.lightBg,
        border: `1px solid ${brand.colors.sand}66`,
        borderRadius: 8,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 12,
          rowGap: 8,
        }}
      >
        <FilterGroup label="Phase">
          <Pill
            active={filters.phase === 'all'}
            onClick={() => setFilters({ ...filters, phase: 'all' })}
            label="All"
            accent={brand.colors.darkGreen}
          />
          {phaseOrder.map((key) => (
            <Pill
              key={key}
              active={filters.phase === key}
              onClick={() => setFilters({ ...filters, phase: key })}
              label={`PH${phases[key].number}`}
              accent={phaseAccent(key)}
            />
          ))}
        </FilterGroup>

        <FilterGroup label="Pillar">
          <Pill
            active={filters.pillar === 'all'}
            onClick={() => setFilters({ ...filters, pillar: 'all' })}
            label="All"
            accent={brand.colors.darkGreen}
          />
          {pillarOrder.map((key) => (
            <Pill
              key={key}
              active={filters.pillar === key}
              onClick={() => setFilters({ ...filters, pillar: key })}
              label={pillars[key].short}
              accent={pillars[key].accent}
            />
          ))}
        </FilterGroup>

        <div style={{ flex: 1 }} />

        <div
          aria-live="polite"
          role="status"
          style={{
            color: brand.colors.darkGreen,
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          {`Showing ${matchedCount} of ${totalCount} posts`}
        </div>

        {isFiltered ? (
          <button
            type="button"
            onClick={reset}
            className="atlas-focus-ring"
            style={{
              background: 'transparent',
              border: `1px solid ${brand.colors.darkGreen}33`,
              color: brand.colors.darkGreen,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              padding: '6px 12px',
              borderRadius: 999,
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            Reset
          </button>
        ) : null}
      </div>
    </section>
  )
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
      <span
        style={{
          color: brand.colors.mutedGreen,
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginRight: 4,
        }}
      >
        {label}
      </span>
      {children}
    </div>
  )
}

function Pill({
  active,
  onClick,
  label,
  accent,
}: {
  active: boolean
  onClick: () => void
  label: string
  accent: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="atlas-focus-ring"
      style={{
        padding: '5px 11px',
        background: active ? accent : 'transparent',
        color: active ? brand.colors.lightBg : brand.colors.darkGreen,
        border: `1px solid ${active ? accent : `${accent}66`}`,
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        outline: 'none',
        transition: 'background 180ms ease, color 180ms ease, border-color 180ms ease',
      }}
    >
      {label}
    </button>
  )
}

function phaseAccent(key: PhaseKey): string {
  if (key === 'awareness') return brand.colors.gold
  if (key === 'speakers') return brand.colors.amber
  return brand.colors.darkBrown
}

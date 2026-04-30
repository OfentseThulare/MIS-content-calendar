import { brand } from '../../lib/brand'
import NumberTicker from '../NumberTicker'
import { calendarStats } from '../../data/calendar'

export default function CalendarHero() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.6fr 1fr',
        alignItems: 'center',
        gap: 48,
        padding: '40px 0 32px',
      }}
    >
      <div>
        <div
          style={{
            color: brand.colors.amber,
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          12 weeks · 56 posts · One summit
        </div>
        <h1
          style={{
            margin: '14px 0 16px',
            color: brand.colors.darkGreen,
            fontSize: 56,
            fontWeight: 600,
            letterSpacing: '-0.01em',
            lineHeight: 1.05,
          }}
        >
          The MIS 2026 LinkedIn calendar
        </h1>
        <div
          style={{
            color: brand.colors.bodyText,
            fontSize: 18,
            lineHeight: 1.55,
            maxWidth: 640,
          }}
        >
          1 May to 22 July 2026, SAMCA owned channel. The 12-week build that turns the Mining Integration Summit into 56 deliberate moments on a feed.
        </div>

        <a
          data-magnetic
          href="#calendar-grid"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 28,
            padding: '14px 22px',
            background: brand.colors.darkGreen,
            color: brand.colors.gold,
            fontWeight: 600,
            fontSize: 14,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: 999,
            border: `1px solid ${brand.colors.gold}66`,
            transition: 'transform 220ms cubic-bezier(0.22, 1, 0.36, 1), background 220ms ease',
          }}
        >
          Open the calendar
          <span aria-hidden style={{ display: 'inline-block', transform: 'translateY(-1px)' }}>→</span>
        </a>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 14,
        }}
      >
        <KpiTile label="Posts planned" value={calendarStats.totalPosts} accent={brand.colors.gold} />
        <KpiTile
          label="Paid spend, ZAR"
          value={calendarStats.paidSpendZAR}
          accent={brand.colors.darkBrown}
          formatter={(n) => `R${(n / 1000).toFixed(0)}k`}
        />
        <KpiTile
          label="Engagement target"
          value={calendarStats.engagementRateHigh}
          accent={brand.colors.sage}
          suffix="%"
          prefix={`${calendarStats.engagementRateLow} to `}
        />
      </div>
    </div>
  )
}

function KpiTile({
  label,
  value,
  accent,
  suffix,
  prefix,
  formatter,
}: {
  label: string
  value: number
  accent: string
  suffix?: string
  prefix?: string
  formatter?: (n: number) => string
}) {
  return (
    <div
      style={{
        background: brand.colors.darkGreen,
        color: brand.colors.lightBg,
        padding: '20px 18px',
        borderRadius: 8,
        position: 'relative',
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
          width: 3,
          background: accent,
        }}
      />
      <div
        style={{
          color: accent,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginBottom: 10,
        }}
      >
        {label}
      </div>
      <div
        style={{
          color: brand.colors.gold,
          fontSize: 36,
          fontWeight: 600,
          letterSpacing: '-0.01em',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {prefix ? <span style={{ color: brand.colors.lightBg, fontSize: 22, fontWeight: 500 }}>{prefix}</span> : null}
        {formatter ? (
          <FormattedTicker value={value} formatter={formatter} />
        ) : (
          <NumberTicker value={value} suffix={suffix ?? ''} />
        )}
      </div>
    </div>
  )
}

function FormattedTicker({ value, formatter }: { value: number; formatter: (n: number) => string }) {
  // Spring through to value, formatted at the wrapper level for currency display.
  return (
    <span>
      {/* Direct rendering: NumberTicker animates a raw number; for ZAR currency we display the static formatted value
          to avoid animating "k" suffix oddly. The spring effect still fires on adjacent tiles. */}
      {formatter(value)}
    </span>
  )
}

import { brand, zLayers } from '../../lib/brand'

export default function CalendarHeader() {
  return (
    <header
      aria-label="Mining Integration Summit 2026 LinkedIn content calendar"
      style={{
        height: 56,
        background: brand.colors.darkGreen,
        color: brand.colors.gold,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        position: 'sticky',
        top: 3,
        zIndex: zLayers.stickyHeader,
      }}
    >
      The Mining Integration Summit 2026 · LinkedIn Content Calendar
    </header>
  )
}

import type { ReactNode } from 'react'
import { brand } from '../lib/brand'
import DataCard from './DataCard'

type SegmentCardProps = {
  title: string
  badge: string
  who: string
  hook: string
  channels: string
  proof?: string
}

function Field({ label, children, italic = false }: { label: string; children: ReactNode; italic?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div
        style={{
          color: brand.colors.mutedGreen,
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 18,
          fontWeight: 400,
          lineHeight: 1.55,
          color: brand.colors.bodyText,
          maxWidth: 880,
          textAlign: 'center',
          fontStyle: italic ? 'italic' : 'normal',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default function SegmentCard({
  title,
  badge,
  who,
  hook,
  channels,
  proof,
}: SegmentCardProps) {
  return (
    <div style={{ fontFamily: brand.fonts.primary, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          background: brand.colors.amber,
          color: brand.colors.lightBg,
          fontSize: 14,
          fontWeight: 600,
          padding: '8px 16px',
          borderRadius: 4,
          letterSpacing: '0.02em',
          marginBottom: 20,
          textAlign: 'center',
        }}
      >
        {badge}
      </div>
      <DataCard title={title} centred style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            alignItems: 'center',
          }}
        >
          <Field label="Who">{who}</Field>
          <Field label="Hook" italic>
            &ldquo;{hook}&rdquo;
          </Field>
          <Field label="Channels">{channels}</Field>
          {proof ? <Field label="Proof">{proof}</Field> : null}
        </div>
      </DataCard>
    </div>
  )
}

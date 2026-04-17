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

export default function SegmentCard({
  title,
  badge,
  who,
  hook,
  channels,
  proof,
}: SegmentCardProps) {
  return (
    <div style={{ fontFamily: brand.fonts.primary }}>
      <div
        style={{
          display: 'inline-block',
          background: brand.colors.amber,
          color: brand.colors.lightBg,
          fontSize: 14,
          fontWeight: 600,
          padding: '8px 16px',
          borderRadius: 4,
          letterSpacing: '0.02em',
          marginBottom: 20,
        }}
      >
        {badge}
      </div>
      <DataCard title={title}>
        <div style={{ display: 'grid', gridTemplateColumns: '96px 1fr', rowGap: 12, columnGap: 12 }}>
          <div style={{ color: brand.colors.amber, fontWeight: 600, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Who</div>
          <div>{who}</div>
          <div style={{ color: brand.colors.amber, fontWeight: 600, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Hook</div>
          <div style={{ fontStyle: 'italic' }}>&ldquo;{hook}&rdquo;</div>
          <div style={{ color: brand.colors.amber, fontWeight: 600, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Channels</div>
          <div>{channels}</div>
          {proof ? (
            <>
              <div style={{ color: brand.colors.amber, fontWeight: 600, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Proof</div>
              <div>{proof}</div>
            </>
          ) : null}
        </div>
      </DataCard>
    </div>
  )
}

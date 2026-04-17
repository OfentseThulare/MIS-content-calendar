import SlideFrame from '../components/SlideFrame'
import { brand } from '../lib/brand'

export default function Slide02RoomAcknowledgement() {
  return (
    <SlideFrame>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: 1300,
        }}
      >
        <div
          style={{
            fontSize: 14,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: brand.colors.miningGold,
            marginBottom: 48,
          }}
        >
          A note before we begin
        </div>
        <p
          style={{
            fontSize: 24,
            fontWeight: 400,
            lineHeight: 1.5,
            color: brand.colors.kalahariCream,
            textAlign: 'left',
            margin: 0,
          }}
        >
          This strategy was built from the ground up, informed by three decades of
          mining sector intelligence, regulatory reality, and the voices of those
          who build, govern, and invest in Southern Africa's extractive future.
        </p>
      </div>
    </SlideFrame>
  )
}

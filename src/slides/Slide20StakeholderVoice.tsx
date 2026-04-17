import SlideFrame from '../components/SlideFrame'
import { brand } from '../lib/brand'

export default function Slide20StakeholderVoice() {
  return (
    <SlideFrame>
      <div
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: 1500,
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: 40,
            left: 0,
            fontSize: 200,
            lineHeight: 1,
            color: brand.colors.miningGold,
            opacity: 0.1,
            fontFamily: brand.fonts.primary,
            fontWeight: 600,
            pointerEvents: 'none',
          }}
        >
          &ldquo;
        </div>
        <div
          style={{
            fontSize: 14,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: brand.colors.miningGold,
            marginBottom: 40,
            position: 'relative',
            zIndex: 1,
          }}
        >
          Stakeholder voice
        </div>
        <p
          style={{
            position: 'relative',
            zIndex: 1,
            fontSize: 28,
            fontStyle: 'italic',
            lineHeight: 1.45,
            color: brand.colors.kalahariCream,
            margin: 0,
            maxWidth: 1400,
          }}
        >
          For the first time, I felt like my concerns about water usage were
          heard in the same room as the investors making the decisions.
        </p>
        <div
          style={{
            marginTop: 40,
            fontSize: 14,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: brand.colors.editorialGrey,
          }}
        >
          Community liaison officer, Limpopo Province
        </div>
      </div>
    </SlideFrame>
  )
}

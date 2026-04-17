import SlideFrame from '../components/SlideFrame'
import { brand } from '../lib/brand'

export default function Slide21NewBliss() {
  return (
    <SlideFrame bg={brand.colors.kalahariCream}>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: brand.colors.shaftBlack,
          maxWidth: 1400,
        }}
      >
        <div
          style={{
            fontSize: 14,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: brand.colors.forestGreen,
            marginBottom: 32,
          }}
        >
          New bliss, beat nine
        </div>
        <h2
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: brand.colors.shaftBlack,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}
        >
          The summit after the summit.
        </h2>
        <p
          style={{
            fontSize: 24,
            lineHeight: 1.55,
            color: brand.colors.shaftBlack,
            marginTop: 48,
            maxWidth: 1200,
          }}
        >
          When the stages are packed up, MIS 2026 lives on: in the partnerships
          formed between investor and community leader, in the MOUs signed
          between regulator and operator, in the research collaborations that
          outlast the programme.
        </p>
        <div
          style={{
            marginTop: 56,
            width: 120,
            height: 2,
            background: brand.colors.forestGreen,
          }}
        />
      </div>
    </SlideFrame>
  )
}

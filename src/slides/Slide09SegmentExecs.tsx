import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'
import SegmentCard from '../components/SegmentCard'

export default function Slide09SegmentExecs() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={9} totalPages={30}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Segment 01 of 05
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            Mining executives and ESG leads
          </h1>
        </div>

        <div style={{ maxWidth: 1400 }}>
          <SegmentCard
            title="Who, hook, and channels"
            badge="250 delegates at R8,500 average ticket"
            who="CEOs, COOs, Heads of Sustainability at mid and large cap mining houses"
            hook="The one table where mining, communities and schools sign the same page."
            channels="LinkedIn Sales Navigator, executive WhatsApp, curated email, invite-only Fireside"
            proof="Logos of first three confirmed sponsors, named SAMCA board members, named government speaker"
          />
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Part B2, MIS 2026 Master Strategy
        </div>
      </div>
    </SlideFrame>
  )
}

import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'
import SegmentCard from '../components/SegmentCard'

export default function Slide12SegmentCommunities() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={12} totalPages={31}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Segment 04 of 05
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            Mining affected communities
          </h1>
        </div>

        <div style={{ maxWidth: 1400 }}>
          <SegmentCard
            title="Who, hook, and channels"
            badge="150 community delegates, complimentary passes, transport and accommodation supported"
            who="Community leaders, tribal authorities, youth organisations, women in mining groups"
            hook="Three requests. Sixty days to answer. On the record."
            channels="WhatsApp broadcast lists via SAMCA existing community networks, Facebook (Rustenburg, Carletonville, Welkom, Kimberley geotargeting), community radio (Kgatleng FM, Mafisa Community Radio, Motheo FM)"
            proof="Signed memoranda from three host community councils"
          />
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Part B2, MIS 2026 Master Strategy
        </div>
      </div>
    </SlideFrame>
  )
}

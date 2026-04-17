import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'
import SegmentCard from '../components/SegmentCard'

export default function Slide13SegmentAcademia() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={13} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Segment 05 of 05
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            Academia, schools and innovation
          </h1>
        </div>

        <div style={{ maxWidth: 1400 }}>
          <SegmentCard
            title="Who, hook, and channels"
            badge="Youth Innovation Challenge: 10 shortlisted concepts, 5 finalists on stage"
            who="Grades 10 to 12 learners from North West Province and Gauteng. NYDA, Schools Cool Programme, Flowsync. NWU, Wits Centre for Sustainability in Mining and Industry."
            hook="Your mining innovation project, judged on stage in front of CEOs, investors, and community leaders. Winners funded to prototype inside 90 days."
            channels="TikTok (primary, low CPM, high learner reach), Instagram Reels, parent and teacher WhatsApp groups, school principal direct briefings via NYDA partnership"
            proof="Signed letters from eight partner schools and three university deans"
          />
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Part B2, MIS 2026 Master Strategy
        </div>
      </div>
    </SlideFrame>
  )
}

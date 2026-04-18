import { brand } from '../lib/brand'
import SlideFrame from '../components/SlideFrame'
import SegmentCard from '../components/SegmentCard'

export default function Slide10SegmentSponsors() {
  return (
    <SlideFrame bg={brand.colors.lightBg} textColor={brand.colors.bodyText} showChrome pageNumber={10} totalPages={39}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.22em', color: brand.colors.amber, textTransform: 'uppercase' }}>
            Segment 02 of 05
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 600, color: brand.colors.darkGreen, margin: '12px 0 0 0', letterSpacing: '-0.01em' }}>
            Sponsors and strategic partners
          </h1>
        </div>

        <div style={{ maxWidth: 1400 }}>
          <SegmentCard
            title="Who, hook, and channels"
            badge="6 named targets. 5 sponsorship tiers. Up to R9.75m at full sell-out."
            who="Marketing directors, sustainability directors, CSR budget holders"
            hook="Chair a pillar, own the year long narrative."
            channels="Named outreach via Clay-powered personalised email and LinkedIn Sales Navigator. Six named accounts: Sibanye-Stillwater, Harmony Gold, NYDA, Impala or Northam, OEM suppliers, Bojanala District Municipality."
            proof="Intelligence Dossier benchmarks: SA B2B conference sponsorship R75k to R500k per tier. Mining Indaba Gold sponsors include BHP, Rio Tinto, Newmont."
          />
        </div>

        <div style={{ marginTop: 'auto', color: brand.colors.mutedGreen, fontSize: 12, letterSpacing: '0.16em' }}>
          Source: Part B2, MIS 2026 Master Strategy
        </div>
      </div>
    </SlideFrame>
  )
}

import type { ComponentType } from 'react'
import Slide01Title from '../slides/Slide01Title'
import Slide02RoomAcknowledgement from '../slides/Slide02RoomAcknowledgement'
import Slide03SetStakes from '../slides/Slide03SetStakes'
import Slide04ClientSummary from '../slides/Slide04ClientSummary'
import Slide05Background from '../slides/Slide05Background'
import Slide06FiveServiceAreas from '../slides/Slide06FiveServiceAreas'
import Slide07MovementFrame from '../slides/Slide07MovementFrame'
import Slide08AudienceDivider from '../slides/Slide08AudienceDivider'
import Slide09SegmentExecs from '../slides/Slide09SegmentExecs'
import Slide10SegmentSponsors from '../slides/Slide10SegmentSponsors'
import Slide11SegmentGovernment from '../slides/Slide11SegmentGovernment'
import Slide12SegmentCommunities from '../slides/Slide12SegmentCommunities'
import Slide13SegmentAcademia from '../slides/Slide13SegmentAcademia'
import Slide14ChannelsDivider from '../slides/Slide14ChannelsDivider'
import Slide15PlatformMap from '../slides/Slide15PlatformMap'
import Slide16PaidMediaSplit from '../slides/Slide16PaidMediaSplit'
import Slide17OrganicVsPaid from '../slides/Slide17OrganicVsPaid'
import Slide18CampaignArc from '../slides/Slide18CampaignArc'
import Slide19Insight from '../slides/Slide19Insight'
import Slide20BigIdea from '../slides/Slide20BigIdea'
import Slide21SponsorRevenue from '../slides/Slide21SponsorRevenue'
import Slide22DigitalSocial from '../slides/Slide22DigitalSocial'
import Slide23EmailWhatsApp from '../slides/Slide23EmailWhatsApp'
import Slide24ContentSystem from '../slides/Slide24ContentSystem'
import Slide25Funnel from '../slides/Slide25Funnel'
import Slide26FullBudget from '../slides/Slide26FullBudget'
import Slide27WeeklyReport from '../slides/Slide27WeeklyReport'
import Slide28Timeline from '../slides/Slide28Timeline'
import Slide29Competitors from '../slides/Slide29Competitors'
import Slide30CallToAction from '../slides/Slide30CallToAction'

export type SlideSection =
  | 'Opening'
  | 'Brief'
  | 'Audience'
  | 'Channels'
  | 'Idea'
  | 'Expression'
  | 'Substance'
  | 'Close'

export type Slide = {
  id: string
  component: ComponentType
  sparklineBeat?: number
  section: SlideSection
}

export const slides: Slide[] = [
  { id: 'slide-01', component: Slide01Title, section: 'Opening' },
  { id: 'slide-02', component: Slide02RoomAcknowledgement, section: 'Opening' },
  { id: 'slide-03', component: Slide03SetStakes, sparklineBeat: 1, section: 'Opening' },
  { id: 'slide-04', component: Slide04ClientSummary, section: 'Brief' },
  { id: 'slide-05', component: Slide05Background, sparklineBeat: 2, section: 'Brief' },
  { id: 'slide-06', component: Slide06FiveServiceAreas, sparklineBeat: 3, section: 'Brief' },
  { id: 'slide-07', component: Slide07MovementFrame, sparklineBeat: 4, section: 'Brief' },
  { id: 'slide-08', component: Slide08AudienceDivider, section: 'Audience' },
  { id: 'slide-09', component: Slide09SegmentExecs, section: 'Audience' },
  { id: 'slide-10', component: Slide10SegmentSponsors, section: 'Audience' },
  { id: 'slide-11', component: Slide11SegmentGovernment, section: 'Audience' },
  { id: 'slide-12', component: Slide12SegmentCommunities, section: 'Audience' },
  { id: 'slide-13', component: Slide13SegmentAcademia, section: 'Audience' },
  { id: 'slide-14', component: Slide14ChannelsDivider, section: 'Channels' },
  { id: 'slide-15', component: Slide15PlatformMap, section: 'Channels' },
  { id: 'slide-16', component: Slide16PaidMediaSplit, section: 'Channels' },
  { id: 'slide-17', component: Slide17OrganicVsPaid, section: 'Channels' },
  { id: 'slide-18', component: Slide18CampaignArc, section: 'Channels' },
  { id: 'slide-19', component: Slide19Insight, section: 'Idea' },
  { id: 'slide-20', component: Slide20BigIdea, section: 'Idea' },
  { id: 'slide-21', component: Slide21SponsorRevenue, section: 'Idea' },
  { id: 'slide-22', component: Slide22DigitalSocial, sparklineBeat: 6, section: 'Expression' },
  { id: 'slide-23', component: Slide23EmailWhatsApp, sparklineBeat: 7, section: 'Expression' },
  { id: 'slide-24', component: Slide24ContentSystem, sparklineBeat: 8, section: 'Expression' },
  { id: 'slide-25', component: Slide25Funnel, section: 'Substance' },
  { id: 'slide-26', component: Slide26FullBudget, section: 'Substance' },
  { id: 'slide-27', component: Slide27WeeklyReport, section: 'Substance' },
  { id: 'slide-28', component: Slide28Timeline, sparklineBeat: 9, section: 'Close' },
  { id: 'slide-29', component: Slide29Competitors, section: 'Close' },
  { id: 'slide-30', component: Slide30CallToAction, sparklineBeat: 10, section: 'Close' },
]

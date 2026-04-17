import type { ComponentType } from 'react'
import Slide01Title from '../slides/Slide01Title'
import Slide02RoomAcknowledgement from '../slides/Slide02RoomAcknowledgement'
import Slide03SetStakes from '../slides/Slide03SetStakes'
import Slide04WhatIs from '../slides/Slide04WhatIs'
import Slide05WhatCouldBe from '../slides/Slide05WhatCouldBe'
import Slide06WhatIsTension from '../slides/Slide06WhatIsTension'
import Slide07WhatCouldBeIntegrated from '../slides/Slide07WhatCouldBeIntegrated'
import Slide08InsightDivider from '../slides/Slide08InsightDivider'
import Slide09Insight from '../slides/Slide09Insight'
import Slide10IdeaDivider from '../slides/Slide10IdeaDivider'
import Slide11BigIdea from '../slides/Slide11BigIdea'
import Slide12Manifesto from '../slides/Slide12Manifesto'
import Slide13Digital from '../slides/Slide13Digital'
import Slide14Email from '../slides/Slide14Email'
import Slide15PrMedia from '../slides/Slide15PrMedia'
import Slide16ToneOfVoice from '../slides/Slide16ToneOfVoice'
import Slide17ArtDirection from '../slides/Slide17ArtDirection'
import Slide18EsgTrajectory from '../slides/Slide18EsgTrajectory'
import Slide19Feedback from '../slides/Slide19Feedback'
import Slide20StakeholderVoice from '../slides/Slide20StakeholderVoice'
import Slide21NewBliss from '../slides/Slide21NewBliss'
import Slide22Measurement from '../slides/Slide22Measurement'
import Slide23Investment from '../slides/Slide23Investment'
import Slide24CallToAction from '../slides/Slide24CallToAction'

export type Slide = {
  id: string
  component: ComponentType
  sparklineBeat?: number
  section: 'Opening' | 'Current Reality' | 'Insight' | 'Idea' | 'Expression' | 'Substance' | 'Close'
}

export const slides: Slide[] = [
  { id: 'slide-01', component: Slide01Title, section: 'Opening' },
  { id: 'slide-02', component: Slide02RoomAcknowledgement, section: 'Opening' },
  { id: 'slide-03', component: Slide03SetStakes, sparklineBeat: 1, section: 'Opening' },
  { id: 'slide-04', component: Slide04WhatIs, sparklineBeat: 2, section: 'Current Reality' },
  { id: 'slide-05', component: Slide05WhatCouldBe, sparklineBeat: 3, section: 'Current Reality' },
  { id: 'slide-06', component: Slide06WhatIsTension, sparklineBeat: 4, section: 'Current Reality' },
  { id: 'slide-07', component: Slide07WhatCouldBeIntegrated, sparklineBeat: 5, section: 'Current Reality' },
  { id: 'slide-08', component: Slide08InsightDivider, section: 'Insight' },
  { id: 'slide-09', component: Slide09Insight, section: 'Insight' },
  { id: 'slide-10', component: Slide10IdeaDivider, section: 'Idea' },
  { id: 'slide-11', component: Slide11BigIdea, section: 'Idea' },
  { id: 'slide-12', component: Slide12Manifesto, section: 'Expression' },
  { id: 'slide-13', component: Slide13Digital, sparklineBeat: 6, section: 'Expression' },
  { id: 'slide-14', component: Slide14Email, sparklineBeat: 7, section: 'Expression' },
  { id: 'slide-15', component: Slide15PrMedia, sparklineBeat: 8, section: 'Expression' },
  { id: 'slide-16', component: Slide16ToneOfVoice, section: 'Expression' },
  { id: 'slide-17', component: Slide17ArtDirection, section: 'Expression' },
  { id: 'slide-18', component: Slide18EsgTrajectory, section: 'Substance' },
  { id: 'slide-19', component: Slide19Feedback, section: 'Substance' },
  { id: 'slide-20', component: Slide20StakeholderVoice, section: 'Substance' },
  { id: 'slide-21', component: Slide21NewBliss, sparklineBeat: 9, section: 'Close' },
  { id: 'slide-22', component: Slide22Measurement, section: 'Close' },
  { id: 'slide-23', component: Slide23Investment, section: 'Close' },
  { id: 'slide-24', component: Slide24CallToAction, sparklineBeat: 10, section: 'Close' },
]

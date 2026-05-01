export type PhaseKey = 'awareness' | 'speakers' | 'programme'

export type Phase = {
  key: PhaseKey
  number: 1 | 2 | 3
  label: string
  subtitle: string
  weeks: string
  dateRange: string
  postCount: number
  milestone: string
}

export const phases: Record<PhaseKey, Phase> = {
  awareness: {
    key: 'awareness',
    number: 1,
    label: 'Awareness',
    subtitle: 'Plant the flag, establish narrative authority, surface the why.',
    weeks: 'Weeks 1 to 4',
    dateRange: '1 May to 29 May 2026',
    postCount: 16,
    milestone: '6 sponsor commitments confirmed by 31 May',
  },
  speakers: {
    key: 'speakers',
    number: 2,
    label: 'Speakers and Endorsements',
    subtitle: 'Reveal authority. Social proof through named individuals.',
    weeks: 'Weeks 5 to 8',
    dateRange: '1 June to 26 June 2026',
    postCount: 20,
    milestone: '200 registrations by end of Week 9',
  },
  programme: {
    key: 'programme',
    number: 3,
    label: 'Programme and Urgency',
    subtitle: 'Convert intent into commitment. Surface programme depth. Run the countdown.',
    weeks: 'Weeks 9 to 12',
    dateRange: '29 June to 22 July 2026',
    postCount: 20,
    milestone: 'Full delegate target hit before 20 July opening',
  },
}

export const phaseOrder: PhaseKey[] = ['awareness', 'speakers', 'programme']

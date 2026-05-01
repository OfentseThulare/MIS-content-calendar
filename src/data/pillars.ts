import { brand } from '../lib/brand'

export type PillarKey =
  | 'industry-collaboration'
  | 'policy-regulatory-dialogue'
  | 'inclusive-participation'
  | 'community-development'
  | 'investment-attraction'

export type Pillar = {
  key: PillarKey
  label: string
  short: string
  accent: string
  description: string
}

export const pillars: Record<PillarKey, Pillar> = {
  'industry-collaboration': {
    key: 'industry-collaboration',
    label: 'Industry Collaboration',
    short: 'Industry',
    accent: brand.colors.gold,
    description:
      'Mining houses, government, and the private sector building things together.',
  },
  'policy-regulatory-dialogue': {
    key: 'policy-regulatory-dialogue',
    label: 'Policy and Regulatory Dialogue',
    short: 'Policy',
    accent: brand.colors.amber,
    description:
      'The summit as the room where SLP, MFMA, PFMA, B-BBEE, and DMRE conversations actually happen.',
  },
  'inclusive-participation': {
    key: 'inclusive-participation',
    label: 'Inclusive Participation',
    short: 'Inclusion',
    accent: brand.colors.sage,
    description:
      'Women in mining, youth, SMME suppliers, the next generation of leadership.',
  },
  'community-development': {
    key: 'community-development',
    label: 'Community Development',
    short: 'Community',
    accent: brand.colors.mutedGreen,
    description:
      'Host community engagement models, traditional leadership, social licence as shared prosperity.',
  },
  'investment-attraction': {
    key: 'investment-attraction',
    label: 'Investment Attraction',
    short: 'Investment',
    accent: brand.colors.darkBrown,
    description:
      'DFI capital, Bojanala SEZ, Platinum Valley, capital flows into responsible mining.',
  },
}

export const pillarOrder: PillarKey[] = [
  'industry-collaboration',
  'policy-regulatory-dialogue',
  'inclusive-participation',
  'community-development',
  'investment-attraction',
]

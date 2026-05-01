import type { PillarKey } from '../../data/pillars'
import type { PhaseKey } from '../../data/phases'

export type PaidFilter = 'all' | 'paid' | 'organic'

export type FilterState = {
  phase: PhaseKey | 'all'
  pillar: PillarKey | 'all'
  paid: PaidFilter
}

export const defaultFilters: FilterState = {
  phase: 'all',
  pillar: 'all',
  paid: 'all',
}

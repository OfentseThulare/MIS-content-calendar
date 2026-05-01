import type { PillarKey } from '../../data/pillars'
import type { PhaseKey } from '../../data/phases'

export type FilterState = {
  phase: PhaseKey | 'all'
  pillar: PillarKey | 'all'
}

export const defaultFilters: FilterState = {
  phase: 'all',
  pillar: 'all',
}

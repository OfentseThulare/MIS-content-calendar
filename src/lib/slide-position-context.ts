import { createContext } from 'react'

export type SlidePosition = {
  page: number
  total: number
}

export const SlidePositionContext = createContext<SlidePosition>({ page: 1, total: 1 })

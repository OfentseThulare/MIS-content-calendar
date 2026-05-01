import { type } from './typography'

export const brand = {
  colors: {
    darkGreen: "#264527",
    gold: "#E2BB39",
    darkBrown: "#854507",
    amber: "#BD770B",
    mutedGreen: "#5C846C",
    sage: "#788D54",
    sand: "#D9D09F",
    lightBg: "#F8F5EC",
    bodyText: "#2D2D2D",
    white: "#FFFFFF",
  },
  fonts: {
    primary: "'Geist', system-ui, sans-serif",
  },
  grid: {
    width: 1920,
    height: 1080,
    margin: 64,
    columns: 12,
    gutter: 24,
  },
  type,
} as const;

export const zLayers = {
  grain: 1,
  content: 2,
  stickyHeader: 4,
  scrollProgress: 50,
  skipLink: 900,
  modal: 1000,
} as const

export { type } from './typography'
export type { TypeRole } from './typography'

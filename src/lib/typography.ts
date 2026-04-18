import type { CSSProperties } from 'react'

type TypeToken = Pick<
  CSSProperties,
  'fontSize' | 'fontWeight' | 'letterSpacing' | 'lineHeight' | 'textTransform'
>

export const type = {
  display: {
    fontSize: 96,
    fontWeight: 600,
    letterSpacing: '-0.02em',
  },
  hero: {
    fontSize: 64,
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },
  h1: {
    fontSize: 56,
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },
  h2: {
    fontSize: 40,
    fontWeight: 600,
    letterSpacing: '-0.005em',
  },
  h3: {
    fontSize: 28,
    fontWeight: 600,
    letterSpacing: '0em',
  },
  bodyLg: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 1.55,
  },
  body: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.6,
  },
  caption: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.5,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
  },
  source: {
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: '0.16em',
  },
} as const satisfies Record<string, TypeToken>

export type TypeRole = keyof typeof type

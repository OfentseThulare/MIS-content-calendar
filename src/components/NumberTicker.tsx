import { useEffect, useState } from 'react'
import { useSpring, useTransform, useMotionValueEvent } from 'framer-motion'

type NumberTickerProps = {
  value: number
  suffix?: string
  decimals?: number
  durationMs?: number
}

export default function NumberTicker({
  value,
  suffix = '',
  decimals = 0,
  durationMs = 1500,
}: NumberTickerProps) {
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 20,
    duration: durationMs / 1000,
  })
  const rounded = useTransform(spring, (latest) =>
    decimals === 0
      ? Math.round(latest).toString()
      : latest.toFixed(decimals),
  )
  const [display, setDisplay] = useState('0')

  useMotionValueEvent(rounded, 'change', (latest) => {
    setDisplay(latest)
  })

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

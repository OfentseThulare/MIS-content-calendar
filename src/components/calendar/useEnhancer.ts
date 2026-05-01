import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// useEnhancer wires Lenis smooth scroll, GSAP scroll-triggered entrances,
// magnetic CTA hover, and a phase-divider rule reveal for the calendar route.
// All effects are skipped when prefers-reduced-motion is set.
export function useEnhancer() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    let raf = 0
    const tick = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)

    // Week row entrances.
    const rows = gsap.utils.toArray<HTMLElement>('[data-week-row]')
    const rowTriggers: ScrollTrigger[] = []
    rows.forEach((row, idx) => {
      gsap.set(row, { y: 24, opacity: 0 })
      const trigger = ScrollTrigger.create({
        trigger: row,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(row, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            delay: Math.min(idx * 0.04, 0.24),
          })
        },
      })
      rowTriggers.push(trigger)
    })

    // Phase divider rule reveal.
    const rules = gsap.utils.toArray<HTMLElement>('[data-phase-rule]')
    const ruleTriggers: ScrollTrigger[] = []
    rules.forEach((rule) => {
      gsap.set(rule, { scaleX: 0 })
      const trigger = ScrollTrigger.create({
        trigger: rule,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(rule, {
            scaleX: 1,
            duration: 0.6,
            ease: 'power3.out',
          })
        },
      })
      ruleTriggers.push(trigger)
    })

    // Magnetic CTA effect: pull the link toward the cursor on hover.
    const magneticEls = Array.from(
      document.querySelectorAll<HTMLElement>('[data-magnetic]'),
    )
    const magneticHandlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = []
    magneticEls.forEach((el) => {
      const move = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const dx = e.clientX - (rect.left + rect.width / 2)
        const dy = e.clientY - (rect.top + rect.height / 2)
        gsap.to(el, {
          x: dx * 0.18,
          y: dy * 0.22,
          duration: 0.4,
          ease: 'power3.out',
        })
      }
      const leave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' })
      }
      el.addEventListener('mousemove', move)
      el.addEventListener('mouseleave', leave)
      magneticHandlers.push({ el, move, leave })
    })

    // Refresh ScrollTrigger when the layout changes (compact breakpoint, font load, etc.).
    let resizeRaf = 0
    const onResize = () => {
      cancelAnimationFrame(resizeRaf)
      resizeRaf = requestAnimationFrame(() => {
        ScrollTrigger.refresh()
      })
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      cancelAnimationFrame(resizeRaf)
      window.removeEventListener('resize', onResize)
      lenis.destroy()
      rowTriggers.forEach((t) => t.kill())
      ruleTriggers.forEach((t) => t.kill())
      magneticHandlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])
}

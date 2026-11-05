import type { Variants } from 'framer-motion'

// A refined, cinematic cubic-bezier curve (decisive settle, no overshoot)
export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]
// A softer variant for gentle entrances
export const easeSoft: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Shared viewport config for scroll-triggered reveals
export const viewportOnce = { once: true, margin: '-80px' } as const

// Orchestrates children to cascade in naturally (replaces hardcoded delays)
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

// Fade + rise with a premium settle (transform-only, reduced-motion friendly)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } },
}

// Slightly larger rise for cards entering a grid
export const cardLift: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
}

// Section header intro
export const sectionHeader: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeSoft } },
}

// Cinematic blur-in for the hero name
export const heroName: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: easeOutExpo } },
}

// Reduced-motion fallback for the hero name
export const heroNameReduced: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
}

// Draws a vertical line from the top (used by the timeline)
export const lineDraw: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 1.1, ease: easeOutExpo } },
}
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/Button'

import { ArrowRight, Download, FileText, ExternalLink } from 'lucide-react'
import { staggerContainer, fadeUp, heroName } from '@/lib/animations'

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Aurora background blobs — layered for depth */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Primary large blob - top left */}
        <motion.div
          className="aurora-blob absolute w-[750px] h-[750px]"
          style={{ top: '-15%', left: '-10%', background: 'radial-gradient(circle, hsl(262 83% 58% / 0.28) 0%, transparent 70%)' }}
          animate={{ x: [0, 70, 0], y: [0, 50, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Pink / magenta blob - right center */}
        <motion.div
          className="aurora-blob absolute w-[600px] h-[600px]"
          style={{ top: '20%', right: '-10%', background: 'radial-gradient(circle, hsl(310 80% 55% / 0.20) 0%, transparent 70%)' }}
          animate={{ x: [0, -60, 0], y: [0, -70, 0], scale: [1, 0.92, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
        {/* Cyan accent blob - bottom center */}
        <motion.div
          className="aurora-blob absolute w-[500px] h-[500px]"
          style={{ bottom: '0%', left: '28%', background: 'radial-gradient(circle, hsl(190 95% 50% / 0.14) 0%, transparent 70%)' }}
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 25, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
        />
        {/* Small indigo pulse blob - center */}
        <motion.div
          className="aurora-blob absolute w-[350px] h-[350px]"
          style={{ top: '35%', left: '40%', background: 'radial-gradient(circle, hsl(245 80% 60% / 0.12) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Subtle gradient overlay - more transparent at top to reveal the background */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to bottom, hsl(222 47% 4% / 0.30) 0%, hsl(222 47% 4% / 0.55) 40%, hsl(222 47% 4% / 0.88) 75%, hsl(222 47% 4% / 1) 100%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="section-container relative z-20 pt-32 pb-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div className="flex items-center justify-center mb-4" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AI/ML Researcher · Computer Vision
            </span>
          </motion.div>

          {/* Section Number */}
          <motion.div className="section-number" variants={fadeUp}>
            01 / INTRODUCTION
          </motion.div>

          {/* Name */}
          <motion.h1
            id="hero-title"
            className="section-title text-shimmer text-glow"
            variants={heroName}
          >
            {profile.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            className="mt-6 text-2xl sm:text-3xl font-medium text-primary"
            variants={fadeUp}
          >
            {profile.title}
          </motion.p>

          {/* Description */}
          <motion.p
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            variants={fadeUp}
          >
            {profile.description}
          </motion.p>

          {/* Metadata */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
            variants={fadeUp}
          >
            <span className="flex items-center gap-1 font-mono">
              <span className="text-primary">{profile.university}</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="font-mono">{profile.department}</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="font-mono">Class of 2027</span>
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            variants={fadeUp}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#research')}
              className="group"
            >
              View Research
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="group"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.open(profile.cv, '_blank')}
              className="group hidden sm:inline-flex"
            >
              <Download className="w-4 h-4 mr-1" aria-hidden="true" />
              Download CV
            </Button>
          </motion.div>

          {/* Mobile CV button */}
          <motion.div className="mt-4 sm:hidden" variants={fadeUp}>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.open(profile.cv, '_blank')}
              className="w-full group"
            >
              <Download className="w-4 h-4 mr-1" aria-hidden="true" />
              Download CV
              <ExternalLink className="w-4 h-4 ml-1" aria-hidden="true" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
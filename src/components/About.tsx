'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Award, GraduationCap, FlaskConical, Code, TrendingUp } from 'lucide-react'
import { sectionHeader, viewportOnce } from '@/lib/animations'

export function About() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stats = [
    { value: '5+', label: 'Projects Built' },
    { value: '1', label: 'Publication' },
    { value: '2027', label: 'Graduating' },
  ]

  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative"
      aria-labelledby="about-title"
    >
      <div className="section-container">
        <motion.div
          className="section-header"
          variants={sectionHeader}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="section-number">02 / BACKGROUND</span>
          <h2 id="about-title" className="section-title">About Me</h2>
          <p className="section-subtitle">
            Undergraduate student building intelligent systems at the intersection of computer vision, machine learning, and human-centered AI.
          </p>
          {/* Gradient separator */}
          <div className="section-separator mt-8 mx-auto max-w-xs" />
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center glow-border rounded-xl p-4 bg-card border border-border"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-3xl font-bold text-primary text-glow">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="relative pl-4 border-l-2 border-primary/40">
              <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm <strong className="text-foreground">Ariful Islam Shihab</strong>, an undergraduate Computer Science & Engineering student at <strong className="text-foreground">{profile.university}</strong> (graduating in 2027). My primary research focus lies in <strong className="text-primary">computer vision</strong> and <strong className="text-primary">machine learning</strong>, with particular emphasis on <strong className="text-primary">micro-expression analysis</strong> and <strong className="text-primary">apex frame localization</strong>.
                </p>
                {/* <p className="text-muted-foreground leading-relaxed">
                  My work centers on developing the <strong>STGW-AFL (Spatio-Temporal Geometric Weighted Apex Frame Localization)</strong> framework — a hybrid pipeline that combines learned facial landmark extraction (via MediaPipe) with engineered geometric descriptors, temporal dynamics modeling, and learnable weighting mechanisms for precise micro-expression analysis.
                </p> */}
                <p className="text-muted-foreground leading-relaxed">
                  Beyond research, I build practical systems spanning embedded AI/IoT, full-stack web applications, and competitive programming platforms. I believe in turning research ideas into working systems that solve real problems.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button variant="secondary" onClick={() => scrollToSection('#publications')}>
                <FlaskConical className="w-4 h-4 mr-2" aria-hidden="true" />
                View Research
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('#projects')}>
                <Code className="w-4 h-4 mr-2" aria-hidden="true" />
                See Projects
              </Button>
            </div>
          </motion.div>

          {/* Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <motion.div className="card-base glow-border group relative overflow-hidden" whileHover={{ scale: 1.02 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">United International University</p>
                  <p className="text-xs text-muted-foreground">B.Sc. CSE · Class of 2027</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="card-base glow-border group relative overflow-hidden" whileHover={{ scale: 1.02 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <FlaskConical className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Published Research</p>
                  <p className="text-xs text-muted-foreground">ICCIT 2025 · Cox's Bazar</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="card-base glow-border group relative overflow-hidden" whileHover={{ scale: 1.02 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Code className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">5+ Projects Built</p>
                  <p className="text-xs text-muted-foreground">Research · Hardware · Web</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
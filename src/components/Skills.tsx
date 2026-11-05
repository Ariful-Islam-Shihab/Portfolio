'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { skills, researchInterests } from '@/data/skills'
import { CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Brain, FlaskConical, Code, Layout, Cpu, Target } from 'lucide-react'
import { sectionHeader, viewportOnce, staggerContainer, cardLift } from '@/lib/animations'

const categoryIcons = {
  'AI / Machine Learning': Brain,
  Research: FlaskConical,
  Programming: Code,
  'Web / Software': Layout,
  'Hardware / Embedded': Cpu,
}

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 relative"
      aria-labelledby="skills-title"
    >
      <div className="section-container">
        <motion.div
          className="section-header"
          variants={sectionHeader}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="section-number">07 / SKILLS</span>
          <h2 id="skills-title" className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Organized by domain. No arbitrary percentages — just technologies I actively use and understand.
          </p>
          <div className="section-separator mt-8 mx-auto max-w-xs" />
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skills.categories.map((category) => {
            const Icon = categoryIcons[category.name as keyof typeof categoryIcons] || Code
            return (
              <motion.div
                key={category.name}
                className="card-base glow-border group relative overflow-hidden h-full"
                variants={cardLift}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="pt-6 relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <div className="absolute inset-0 rounded-xl bg-primary/20 scale-75 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                      <Icon className="w-6 h-6 relative z-10" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.skills.length} technologies</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="default" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Research Interests</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {researchInterests.map((interest, index) => (
              <motion.div
                key={interest}
                className="card-base text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ borderColor: 'hsl(var(--primary))', y: -4 }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-primary" aria-hidden="true" />
                    <span className="text-sm font-medium text-muted-foreground">Interest</span>
                  </div>
                  <p className="text-foreground">{interest}</p>
                </CardContent>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
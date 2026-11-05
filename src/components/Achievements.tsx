'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { achievements } from '@/data/timeline'
import { Card, CardContent } from '@/components/ui/Card'
import { Award, GraduationCap, Medal, Star, Target, BookOpen } from 'lucide-react'

const achievementIcons = {
  'top-2-percent': Award,
  'uiu-dreamers': BookOpen,
  'undergrad-ta': GraduationCap,
}

export function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 sm:py-32 relative border-y border-border"
      aria-labelledby="achievements-title"
    >
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">07 / ACHIEVEMENTS</span>
          <h2 id="achievements-title" className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Verified academic accomplishments and recognitions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center max-w-4xl mx-auto"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievementIcons[achievement.id as keyof typeof achievementIcons] || Star
            return (
              <motion.div
                key={achievement.id}
                className="card-base group text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, borderColor: 'hsl(var(--primary))' }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{achievement.title}</h3>
                  <p className="text-primary font-medium mb-2">{achievement.subtitle}</p>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { timeline, typeColors, typeIcons } from '@/data/timeline'
import { Card, CardContent } from '@/components/ui/Card'
import { Calendar, Award, BookOpen, FlaskConical, GraduationCap } from 'lucide-react'
import { sectionHeader, viewportOnce, lineDraw, easeOutExpo } from '@/lib/animations'

const iconMap = {
  academic: GraduationCap,
  publication: Award,
  research: FlaskConical,
}

export function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24 sm:py-32 relative"
      aria-labelledby="timeline-title"
    >
      <div className="section-container">
        <motion.div
          className="section-header"
          variants={sectionHeader}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="section-number">06 / JOURNEY</span>
          <h2 id="timeline-title" className="section-title">Academic Journey</h2>
          <p className="section-subtitle">
            Key milestones in my academic and research career.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Timeline line — draws in from the top */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-transparent origin-top"
            variants={lineDraw}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            aria-hidden="true"
          />

          <div className="space-y-12 relative">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative pl-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: easeOutExpo }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-1 w-10 h-10 flex items-center justify-center">
                  <motion.div
                    className={cn(
                      'w-3 h-3 rounded-full border-4 relative z-10 flex-shrink-0',
                      typeColors[item.type]
                    )}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 15,
                      delay: index * 0.12 + 0.25,
                    }}
                  />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-border bg-background" />
                </div>

                {/* Content card */}
                <Card className="group relative">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={cn(
                        'p-2 rounded-lg flex-shrink-0',
                        typeColors[item.type]
                      )}>
                        {(() => {
                          const Icon = iconMap[item.type]
                          return <Icon className="w-5 h-5" aria-hidden="true" />
                        })()}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{item.year}</p>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                      </div>
                    </div>
                    {item.subtitle && (
                      <p className="text-sm text-primary mb-2">{item.subtitle}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Current indicator */}
          <motion.div
            className="absolute left-4 bottom-0 w-3 h-3 rounded-full bg-primary animate-pulse"
            animate={{ boxShadow: ['0 0 0 0 hsl(var(--primary) / 0.4)', '0 0 0 10px hsl(var(--primary) / 0)', '0 0 0 0 hsl(var(--primary) / 0.4)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  )
}
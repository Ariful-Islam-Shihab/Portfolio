'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { research } from '@/data/research'

interface PipelineStage {
  stage: number
  name: string
  description: string
}

export function ResearchPipeline() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null)
  const [activeFlow, setActiveFlow] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const stages = research.mainProject.pipeline

  // Auto-advance flow animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlow((prev) => (prev + 1) % stages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stages.length])

  return (
    <div className="relative" role="region" aria-label="Research pipeline visualization">
      {/* Pipeline stages */}
      <div className="relative flex flex-col items-center gap-8">
        {stages.map((stage, index) => {
          const isHovered = hoveredStage === index
          const isActive = activeFlow === index
          const isCompleted = activeFlow > index
          
          return (
            <motion.div
              key={stage.stage}
              ref={index === 0 ? containerRef : undefined}
              className={cn(
                'relative w-full max-w-3xl px-4 transition-all duration-300',
                'flex flex-col items-center gap-3',
                isHovered && 'scale-[1.02] z-10'
              )}
              onMouseEnter={() => setHoveredStage(index)}
              onMouseLeave={() => setHoveredStage(null)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Connection line to next stage */}
              <AnimatePresence mode="wait">
                {index < stages.length - 1 && (
                  <motion.div
                    key={`line-${index}`}
                    className="absolute left-1/2 -translate-x-1/2 w-[2px] h-8 top-full"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    exit={{ scaleY: 0, opacity: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="relative h-full">
                      <div 
                        className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent"
                        style={{ opacity: isActive || isHovered ? 1 : 0.3 }}
                      />
                      {/* Flowing particle */}
                      <motion.div
                        className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary"
                        initial={{ y: -4, opacity: 0 }}
                        animate={{ 
                          y: isActive ? 20 : -4,
                          opacity: isActive ? [0, 1, 0] : 0
                        }}
                        transition={{ 
                          duration: isActive ? 1.5 : 0, 
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Stage card */}
              <motion.div
                className={cn(
                  'card-base w-full relative overflow-hidden',
                  'group',
                  isHovered && 'border-primary/50 shadow-xl shadow-primary/10',
                  isActive && 'ring-1 ring-primary/30'
                )}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Stage number indicator */}
                <div className="absolute -top-3 -right-3 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary text-sm font-mono font-bold border border-primary/20">
                  {stage.stage.toString().padStart(2, '0')}
                </div>
                
                {/* Progress ring */}
                <div className="absolute -top-3 -left-3 w-10 h-10">
                  <svg className="w-10 h-10 -rotate-90">
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="2"
                    />
                    <motion.circle
                      cx="16"
                      cy="16"
                      r="14"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeDasharray="88"
                      strokeDashoffset={isCompleted ? 0 : isActive ? 44 : 88}
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                  </svg>
                </div>

                <div className="relative z-10 pt-6">
                  <h4 className="text-lg font-semibold text-foreground">{stage.name}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{stage.description}</p>
                </div>

                {/* Hover tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 px-4 py-3 rounded-lg bg-card border border-border shadow-lg text-center z-20"
                    >
                      <p className="text-sm text-muted-foreground">{stage.description}</p>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-4 border-transparent border-t-border" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span>Active Stage</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border border-primary/30" />
          <span>Pending</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="14" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="88" strokeDashoffset="0" strokeLinecap="round" />
          </svg>
          <span>Completed</span>
        </div>
      </div>
    </div>
  )
}
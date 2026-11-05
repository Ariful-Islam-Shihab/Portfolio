'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { projects } from '@/data/projects'
import { Github, ExternalLink, Zap, Cpu, Database, Wifi, Server, Code, FlaskConical, Terminal } from 'lucide-react'
import { sectionHeader, viewportOnce, easeOutExpo } from '@/lib/animations'

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  python: Code,
  pytorch: Cpu,
  tensorflow: Cpu,
  opencv: Zap,
  mediapipe: Zap,
  react: Code,
  nextjs: Code,
  spring: Server,
  postgresql: Database,
  mysql: Database,
  esp32: Cpu,
  websocket: Wifi,
  docker: Server,
  tflite: Cpu,
}

const categoryConfig = {
  research: {
    icon: FlaskConical,
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    border: 'border-violet-500/30',
    badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    glow: '0 0 40px -8px hsl(262 83% 58% / 0.45)',
    accentLine: 'from-violet-500 to-purple-400',
  },
  software: {
    icon: Code,
    gradient: 'from-blue-500/15 via-cyan-500/8 to-transparent',
    border: 'border-blue-500/25',
    badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
    glow: '0 0 40px -8px hsl(215 80% 55% / 0.35)',
    accentLine: 'from-blue-500 to-cyan-400',
  },
  hardware: {
    icon: Cpu,
    gradient: 'from-emerald-500/15 via-teal-500/8 to-transparent',
    border: 'border-emerald-500/25',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    glow: '0 0 40px -8px hsl(160 60% 45% / 0.35)',
    accentLine: 'from-emerald-500 to-teal-400',
  },
  concept: {
    icon: Terminal,
    gradient: 'from-amber-500/15 via-orange-500/8 to-transparent',
    border: 'border-amber-500/25',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    glow: '0 0 40px -8px hsl(40 90% 50% / 0.3)',
    accentLine: 'from-amber-500 to-orange-400',
  },
}

const statusConfig = {
  completed: { label: 'Completed', dot: 'bg-emerald-400', text: 'text-emerald-400' },
  'in-development': { label: 'In Development', dot: 'bg-amber-400 animate-pulse', text: 'text-amber-400' },
  concept: { label: 'Concept', dot: 'bg-purple-400', text: 'text-purple-400' },
  planned: { label: 'Planned', dot: 'bg-blue-400', text: 'text-blue-400' },
}

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 sm:py-32 relative"
      aria-labelledby="projects-title"
    >
      {/* Section ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="section-container relative">
        <motion.div
          className="section-header"
          variants={sectionHeader}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="section-number">04 / PROJECTS</span>
          <h2 id="projects-title" className="section-title">Projects</h2>
          <p className="section-subtitle">
            Research implementations, embedded systems, full-stack applications, and developer tools.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.28 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const catKey = project.category.toLowerCase() as keyof typeof categoryConfig
  const cat = categoryConfig[catKey] ?? categoryConfig.software
  const status = statusConfig[project.status as keyof typeof statusConfig] ?? statusConfig.planned
  const CategoryIcon = cat.icon

  const getTechIcon = (tech: string) => {
    const key = tech.toLowerCase().replace(/\s+/g, '')
    return techIcons[key] || Code
  }

  return (
    <motion.article
      className={cn(
        'group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-500',
        'bg-card/60 backdrop-blur-md',
        cat.border,
      )}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: easeOutExpo, delay: index * 0.07 }}
      whileHover={{
        y: -8,
        boxShadow: cat.glow,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      {/* Top gradient accent bar */}
      <div className={cn('h-[2px] w-full bg-gradient-to-r flex-shrink-0', cat.accentLine)} />

      {/* Card inner gradient background */}
      <div className={cn('absolute inset-0 bg-gradient-to-br opacity-60', cat.gradient)} aria-hidden="true" />

      {/* Shimmer overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative flex flex-col flex-1 p-5 gap-4">
        {/* Header row: icon + title + status */}
        <div className="flex items-start gap-3">
          {/* Category icon badge */}
          <div className={cn(
            'flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border',
            cat.badge,
          )}>
            <CategoryIcon className="w-5 h-5" aria-hidden="true" />
          </div>

          {/* Title + category */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">{project.category}</p>
          </div>

          {/* Status indicator */}
          <div className="flex-shrink-0 flex items-center gap-1.5 mt-1">
            <span className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0', status.dot)} />
            <span className={cn('text-xs font-medium whitespace-nowrap', status.text)}>
              {status.label}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-shrink-0">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="space-y-1.5 flex-shrink-0">
          {project.features.slice(0, 3).map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-xs">
              <span className="mt-0.5 text-primary/60 flex-shrink-0">▸</span>
              <span className="text-muted-foreground">{feature.title}</span>
            </div>
          ))}
          {project.features.length > 3 && (
            <p className="text-xs text-primary/60 pl-4">
              +{project.features.length - 3} more
            </p>
          )}
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {project.technologies.slice(0, 5).map((tech, i) => {
            const TechIcon = getTechIcon(tech)
            return (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs border border-border/60 bg-background/50 text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors duration-200"
              >
                <TechIcon className="w-2.5 h-2.5" aria-hidden="true" />
                {tech}
              </span>
            )
          })}
          {project.technologies.length > 5 && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs border border-border/60 bg-background/50 text-muted-foreground">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-3 border-t border-border/50 flex-shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-medium',
                'border border-border/60 bg-background/40 text-muted-foreground',
                'hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-200',
              )}
            >
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-medium',
                'bg-primary/90 text-primary-foreground',
                'hover:bg-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-200',
              )}
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              Demo
            </a>
          )}
          {!project.github && !project.demo && (
            <div className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-medium border border-border/40 text-muted-foreground/50">
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}

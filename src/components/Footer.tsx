'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { profile } from '@/data/profile'
import { Github, Linkedin, GraduationCap, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30" role="contentinfo">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <Link href="#hero" className="flex items-center gap-2 font-display font-bold text-xl text-foreground hover:opacity-80 transition-opacity">
              <span className="font-mono text-primary">AIS</span>
              <span>Ariful Islam Shihab</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI/ML Researcher & Computer Vision Enthusiast
            </p>
            <p className="text-xs text-muted-foreground/70">
              {profile.university} · {profile.department}
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-4" role="list" aria-label="Social links">
            <SocialLink
              href={profile.github}
              label="GitHub"
              icon={Github}
              placeholder={profile.github.includes('[Add')}
            />
            <SocialLink
              href={profile.linkedin}
              label="LinkedIn"
              icon={Linkedin}
              placeholder={profile.linkedin.includes('[Add')}
            />
            <SocialLink
              href={profile.scholar}
              label="Google Scholar"
              icon={GraduationCap}
              placeholder={profile.scholar.includes('[Add')}
            />
            <SocialLink
              href={`mailto:${profile.email}`}
              label="Email"
              icon={Mail}
              placeholder={profile.email.includes('[Add')}
            />
          </div>

          {/* Right - Copyright */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ariful Islam Shihab
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, icon: Icon, placeholder }: { 
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  placeholder: boolean
}) {
  return (
    <a
      href={href}
      target={placeholder ? undefined : '_blank'}
      rel={placeholder ? undefined : 'noopener noreferrer'}
      className={cn(
        'p-2 rounded-lg transition-all duration-200',
        placeholder 
          ? 'bg-muted text-muted-foreground/50 cursor-not-allowed' 
          : 'bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary'
      )}
      aria-label={placeholder ? `${label} - not configured` : label}
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
    </a>
  )
}
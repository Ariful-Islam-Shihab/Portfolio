'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Mail, Github, Linkedin, GraduationCap, FileText, ArrowRight, Send } from 'lucide-react'

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    console.log('Form submitted:', data)
    alert('Thank you for your message! This is a demo form.')
    e.currentTarget.reset()
  }

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative"
      aria-labelledby="contact-title"
    >
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">08 / CONTACT</span>
          <h2 id="contact-title" className="section-title">Let's Build Something Meaningful</h2>
          <p className="section-subtitle">
            I'm always interested in research discussions, collaborations, interesting engineering problems, 
            and opportunities to build intelligent systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <ContactLink
                    icon={Mail}
                    label="Email"
                    value={profile.email}
                    href={`mailto:${profile.email}`}
                    description="Primary contact method"
                  />
                  <ContactLink
                    icon={Github}
                    label="GitHub"
                    value={profile.github}
                    href={profile.github}
                    description="Code & repositories"
                    external
                  />
                  <ContactLink
                    icon={Linkedin}
                    label="LinkedIn"
                    value={profile.linkedin}
                    href={profile.linkedin}
                    description="Professional network"
                    external
                  />
                  <ContactLink
                    icon={GraduationCap}
                    label="Google Scholar"
                    value={profile.scholar}
                    href={profile.scholar}
                    description="Research publications"
                    external
                  />
                  <ContactLink
                    icon={FileText}
                    label="Download CV"
                    value={profile.cv}
                    href={profile.cv}
                    description="Full academic CV"
                    external
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      label="Name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                    <FormField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <FormField
                    label="Subject"
                    name="subject"
                    type="text"
                    placeholder="Research collaboration, PhD inquiry, etc."
                    required
                  />
                  <FormField
                    label="Message"
                    name="message"
                    type="textarea"
                    placeholder="Tell me about your project, research idea, or opportunity..."
                    rows={5}
                    required
                  />
                  <Button type="submit" className="w-full sm:w-auto group">
                    <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                    Send Message
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactLink({ 
  icon: Icon, 
  label, 
  value, 
  href, 
  description, 
  external = false 
}: { 
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href: string
  description: string
  external?: boolean
}) {
  const isPlaceholder = value.includes('[Add') || value.includes('[Add')
  
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        'flex items-center gap-4 p-4 rounded-lg transition-all duration-200 group',
        isPlaceholder ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/5 hover:border-primary/30'
      )}
      aria-label={isPlaceholder ? `${label} - not configured yet` : `${label}: ${value}`}
    >
      <div className={cn(
        'p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0',
        isPlaceholder && 'bg-muted text-muted-foreground'
      )}>
        <Icon className="w-5 h-5" aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground truncate">{description}</p>
        <p className="text-xs font-mono text-muted-foreground/70 mt-1 truncate">{value}</p>
      </div>
      {external && !isPlaceholder && (
        <ArrowRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
      )}
    </a>
  )
}

function FormField({ label, name, type, placeholder, required, rows }: { 
  label: string
  name: string
  type: 'text' | 'email' | 'textarea'
  placeholder: string
  required?: boolean
  rows?: number
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          rows={rows || 4}
          placeholder={placeholder}
          required={required}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      )}
    </div>
  )
}
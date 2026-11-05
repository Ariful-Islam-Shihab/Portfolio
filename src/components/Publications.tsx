'use client'

import { motion } from 'framer-motion'
import { publications, publicationStatusLabels } from '@/data/publications'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ExternalLink, Award, MapPin } from 'lucide-react'
import { sectionHeader, viewportOnce, easeOutExpo } from '@/lib/animations'

export function Publications() {
  return (
    <section
      id="publications"
      className="py-24 sm:py-32 relative"
      aria-labelledby="publications-title"
    >
      <div className="section-container">
        <motion.div
          className="section-header"
          variants={sectionHeader}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="section-number">03 / RESEARCH & PUBLICATIONS</span>
          <h2 id="publications-title" className="section-title">Research & Publications</h2>
          <p className="section-subtitle">
            Peer-reviewed conference papers and ongoing research submissions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          {publications.map((pub, index) => {
            const statusConfig = publicationStatusLabels[pub.status]

            return (
              <motion.div
                key={pub.id}
                className="card-base group relative overflow-hidden"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-0 h-full w-1 bg-primary" />
                
                <CardContent className="pt-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Award className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{pub.year}</p>
                        <p className="text-sm text-muted-foreground">{pub.venue}</p>
                        {pub.location && (
                          <p className="text-xs text-muted-foreground/70 flex items-center gap-1">
                            <MapPin className="w-3 h-3" aria-hidden="true" />
                            {pub.location}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={statusConfig.className}>{statusConfig.label}</Badge>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">{pub.title}</h3>
                  <p className="text-muted-foreground mb-4">{pub.shortDescription}</p>

                  {pub.authors.length > 0 && (
                    <p className="text-sm text-muted-foreground mb-4">
                      Authors: {pub.authors.join(', ')}
                    </p>
                  )}

                  {pub.status === 'published' && pub.doi && (
                    <div className="flex flex-wrap items-center gap-3">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" aria-hidden="true" />
                          DOI
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
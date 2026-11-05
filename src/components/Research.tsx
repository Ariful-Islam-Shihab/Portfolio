'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { research } from '@/data/research'
import { ResearchPipeline } from '@/components/ResearchPipeline'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { BarChart, Database, Zap, GitBranch, ArrowRight, Info } from 'lucide-react'

export function Research() {
  return (
    <section
      id="research"
      className="py-24 sm:py-32 relative"
      aria-labelledby="research-title"
    >
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">03 / RESEARCH</span>
          <h2 id="research-title" className="section-title">{research.title}</h2>
          <p className="section-subtitle">{research.subtitle}</p>
        </motion.div>

        {/* Main Research Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="card-base relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" aria-hidden="true" />
            <div className="relative max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="published">PUBLISHED · ICCIT 2025</Badge>
                <Badge variant="default">HYBRID PIPELINE</Badge>
                <Badge variant="default">COMPUTER VISION</Badge>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                {research.mainProject.name}
              </h3>
              <p className="text-xl text-primary font-medium mb-6">
                {research.mainProject.fullName}
              </p>
              <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
                <p>{research.mainProject.description}</p>
                <p>
                  <strong className="text-foreground">Key distinction:</strong> This is a <strong className="text-foreground">hybrid research pipeline</strong>. 
                  MediaPipe provides a <strong className="text-foreground">learned facial landmark detector</strong>, while the geometric descriptors 
                  (distance metrics), temporal dynamics (velocity/acceleration), and weighting framework are 
                  <strong className="text-foreground">engineered/mathematically defined representations with learnable weighting mechanisms</strong>. 
                  The system should not be labeled as purely "deep learning" nor purely "handcrafted".
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research Pipeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10">Interactive Research Pipeline</h3>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            Hover over each stage to see details. The animated flow shows data progression through the pipeline.
          </p>
          <ResearchPipeline />
        </motion.div>

        {/* Research Snapshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10">Research Snapshot</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SnapshotCard icon={Zap} title="Problem" value="Micro-expression apex frame localization" />
            <SnapshotCard icon={Database} title="Input" value="Facial video sequences" />
            <SnapshotCard icon={GitBranch} title="Landmarks" value="MediaPipe Face Landmarker (468 pts)" />
            <SnapshotCard icon={BarChart} title="Core Representations" value="Euclidean, Manhattan, Cosine distances" />
            <SnapshotCard icon={Zap} title="Temporal Signals" value="Velocity & acceleration" />
            <SnapshotCard icon={GitBranch} title="Framework" value="Spatio-temporal geometric weighting" />
            <SnapshotCard icon={Database} title="Key Datasets" value="MMEW, CASME II, CASME Square" />
            <SnapshotCard icon={Info} title="Methodology" value="Hybrid: Learned landmarks + engineered features" />
          </div>
        </motion.div>

        {/* Datasets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10">Datasets</h3>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            Datasets used in experiments and considered for evaluation. Checkmarks indicate datasets used in published results.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {research.datasets.map((dataset) => (
              <motion.div
                key={dataset.name}
                className={cn(
                  'card-base flex items-center gap-4 p-4',
                  dataset.used ? 'border-green-500/30 bg-green-500/5' : 'border-yellow-500/30 bg-yellow-500/5'
                )}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className={cn(
                  'w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0',
                  dataset.used ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                )}>
                  {dataset.used ? (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="font-medium text-sm">{dataset.name}</p>
                  <p className="text-xs text-muted-foreground">{dataset.description}</p>
                  <p className={cn('text-xs mt-1 font-medium', dataset.used ? 'text-green-400' : 'text-yellow-400')}>
                    {dataset.used ? 'Used in experiments' : 'Considered for evaluation'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Methodology Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10">Methodology: Hybrid Pipeline</h3>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Zap className="w-5 h-5" aria-hidden="true" />
                  Learned Component
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <MethodItem title="MediaPipe Face Landmarker" description="Pre-trained deep learning model for 468-point 3D facial landmark detection. Provides robust, real-time landmark extraction." />
                <MethodItem title="Role in Pipeline" description="Serves as the feature extractor — the \'eyes\' of the system. Not trained or modified by this research." />
                <MethodItem title="Output" description="468 × 3D coordinates per frame, normalized for scale/rotation/translation." />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <GitBranch className="w-5 h-5" aria-hidden="true" />
                  Engineered + Learnable Components
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <MethodItem title="Geometric Descriptors" description="Euclidean, Manhattan, Cosine distances computed per anatomical region. Mathematically defined." />
                <MethodItem title="Temporal Dynamics" description="Velocity (1st derivative) and acceleration (2nd derivative) of distance time series. Pure signal processing." />
                <MethodItem title="Learnable Weighting" description="Region weights, metric weights, dynamic feature weights, Gaussian temporal smoothing, temporal position prior. Optimized via validation." />
                <MethodItem title="Apex Prediction" description="Final frame index prediction with confidence scoring." />
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SnapshotCard({ icon: Icon, title, value }: { icon: React.ComponentType<{ className?: string }>; title: string; value: string }) {
  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
        </div>
        <p className="text-sm text-foreground">{value}</p>
      </CardContent>
    </Card>
  )
}

function MethodItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-medium text-sm text-foreground">{title}</span>
      <span className="text-xs text-muted-foreground">{description}</span>
    </div>
  )
}
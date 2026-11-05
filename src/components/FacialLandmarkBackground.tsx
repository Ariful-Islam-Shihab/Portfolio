'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LandmarkPoint {
  x: number
  y: number
  vx: number
  vy: number
  baseX: number
  baseY: number
  connections: number[]
  intensity: number
  type: 'contour' | 'eyebrow' | 'eye' | 'nose' | 'mouth' | 'extra'
}

export function FacialLandmarkBackground({
  className,
  density = 1,
  interactionEnabled = true,
  reducedMotion = false,
}: {
  className?: string
  density?: number
  interactionEnabled?: boolean
  reducedMotion?: boolean
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const pointsRef = useRef<LandmarkPoint[]>([])
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const timeRef = useRef(0)

  const initializePoints = useCallback((width: number, height: number) => {
    const points: LandmarkPoint[] = []
    const numPoints = Math.floor(68 * density)
    
    // Create facial landmark-like structure - centered in the upper portion where content is
    const faceCenterX = width / 2
    const faceCenterY = height * 0.38 // Higher up to align with hero content
    const faceWidth = Math.min(width, height) * 0.28
    const faceHeight = faceWidth * 1.15

    // Facial contour points (oval) - 17 points
    for (let i = 0; i < 17; i++) {
      const angle = (Math.PI * i) / 16
      const x = faceCenterX + Math.cos(angle) * faceWidth * 0.5
      const y = faceCenterY + Math.sin(angle) * faceHeight * 0.5
      points.push({
        x, y, vx: 0, vy: 0, baseX: x, baseY: y,
        connections: i > 0 ? [i - 1] : [],
        intensity: 0.4 + Math.random() * 0.3,
        type: 'contour',
      })
    }

    // Eyebrows - 5 points each (10 total)
    for (let brow = 0; brow < 2; brow++) {
      const browY = faceCenterY - faceHeight * 0.22 + brow * faceHeight * 0.04
      for (let i = 0; i < 5; i++) {
        const x = faceCenterX - faceWidth * 0.18 + (i / 4) * faceWidth * 0.36
        const y = browY + Math.sin(i * 0.4) * 3
        const idx = points.length
        points.push({
          x, y, vx: 0, vy: 0, baseX: x, baseY: y,
          connections: i > 0 ? [idx - 1] : [],
          intensity: 0.5 + Math.random() * 0.25,
          type: 'eyebrow',
        })
      }
    }

    // Eyes - 8 points each (16 total)
    for (let eye = 0; eye < 2; eye++) {
      const eyeX = faceCenterX + (eye === 0 ? -1 : 1) * faceWidth * 0.14
      const eyeY = faceCenterY - faceHeight * 0.08
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8
        const x = eyeX + Math.cos(angle) * faceWidth * 0.055
        const y = eyeY + Math.sin(angle) * faceHeight * 0.035
        const idx = points.length
        points.push({
          x, y, vx: 0, vy: 0, baseX: x, baseY: y,
          connections: [(idx + 1) % 8 + idx - (i === 7 ? 8 : 0)],
          intensity: 0.6 + Math.random() * 0.2,
          type: 'eye',
        })
      }
    }

    // Nose bridge - 5 points
    for (let i = 0; i < 5; i++) {
      const x = faceCenterX + (Math.random() - 0.5) * faceWidth * 0.03
      const y = faceCenterY + (i / 4) * faceHeight * 0.12
      const idx = points.length
      points.push({
        x, y, vx: 0, vy: 0, baseX: x, baseY: y,
        connections: i > 0 ? [idx - 1] : [],
        intensity: 0.35 + Math.random() * 0.2,
        type: 'nose',
      })
    }

    // Nose tip - 1 point
    points.push({
      x: faceCenterX,
      y: faceCenterY + faceHeight * 0.15,
      vx: 0, vy: 0,
      baseX: faceCenterX,
      baseY: faceCenterY + faceHeight * 0.15,
      connections: [points.length - 1],
      intensity: 0.5,
      type: 'nose',
    })

    // Mouth - 12 points
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * i) / 11
      const x = faceCenterX + Math.cos(angle) * faceWidth * 0.12
      const y = faceCenterY + faceHeight * 0.18 + Math.sin(angle) * faceHeight * 0.025
      const idx = points.length
      points.push({
        x, y, vx: 0, vy: 0, baseX: x, baseY: y,
        connections: i > 0 ? [idx - 1] : [],
        intensity: 0.45 + Math.random() * 0.2,
        type: 'mouth',
      })
    }

    // Additional scattered points for density (subtle)
    const extraPoints = Math.max(0, numPoints - points.length)
    for (let i = 0; i < extraPoints; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = faceWidth * 0.55 * Math.sqrt(Math.random())
      const x = faceCenterX + Math.cos(angle) * radius
      const y = faceCenterY + Math.sin(angle) * radius * 1.1
      points.push({
        x, y, vx: 0, vy: 0, baseX: x, baseY: y,
        connections: [],
        intensity: 0.15 + Math.random() * 0.15,
        type: 'extra',
      })
    }

    // Build connection map for extra points
    points.forEach((p, i) => {
      if (p.connections.length === 0 && i > 0 && p.type === 'extra') {
        let minDist = Infinity
        let nearest = -1
        points.forEach((other, j) => {
          if (i !== j) {
            const dist = Math.hypot(p.baseX - other.baseX, p.baseY - other.baseY)
            if (dist < minDist && dist < 50) {
              minDist = dist
              nearest = j
            }
          }
        })
        if (nearest !== -1) {
          p.connections = [nearest]
        }
      }
    })

    pointsRef.current = points
  }, [density])

  const resize = useCallback(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const rect = canvas.parentElement?.getBoundingClientRect()
    if (!rect) return
    
    const width = rect.width
    const height = rect.height
    
    canvas.width = width * window.devicePixelRatio
    canvas.height = height * window.devicePixelRatio
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    
    setDimensions({ width, height })
    initializePoints(width, height)
  }, [initializePoints])

  useEffect(() => {
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [resize])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactionEnabled) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [interactionEnabled])

  useEffect(() => {
    if (reducedMotion) return

    const animate = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const { width, height } = dimensions
      if (!width || !height) return

      timeRef.current += 0.016

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      const points = pointsRef.current
      const mouse = mouseRef.current
      const pulse = (Math.sin(timeRef.current * 1.2) + 1) / 2 // 0–1 pulse

      // Update point positions
      points.forEach((point) => {
        // Subtle floating motion
        const floatX = Math.sin(timeRef.current * 0.4 + point.baseX * 0.008) * 2
        const floatY = Math.cos(timeRef.current * 0.25 + point.baseY * 0.008) * 1.5
        
        // Mouse interaction
        let mouseForceX = 0
        let mouseForceY = 0
        if (mouse.active) {
          const dx = mouse.x - point.x
          const dy = mouse.y - point.y
          const dist = Math.hypot(dx, dy)
          if (dist < 220 && dist > 1) {
            const force = Math.pow((220 - dist) / 220, 2) * 1.2
            mouseForceX = (dx / dist) * force
            mouseForceY = (dy / dist) * force
          }
        }

        // Spring back to base position
        const springX = (point.baseX + floatX - point.x) * 0.015
        const springY = (point.baseY + floatY - point.y) * 0.015

        point.vx = (point.vx + springX + mouseForceX) * 0.9
        point.vy = (point.vy + springY + mouseForceY) * 0.9
        point.x += point.vx
        point.y += point.vy
      })

      // Draw connections first (behind points) — dual-tone by type
      points.forEach((point, i) => {
        point.connections.forEach((connIdx) => {
          const other = points[connIdx]
          if (other && connIdx > i) {
            const isCyan = point.type === 'eye' || point.type === 'eyebrow'
            const grad = ctx.createLinearGradient(point.x, point.y, other.x, other.y)
            if (isCyan) {
              grad.addColorStop(0, 'hsla(190, 95%, 60%, 0.32)')
              grad.addColorStop(1, 'hsla(262, 83%, 68%, 0.18)')
            } else {
              grad.addColorStop(0, 'hsla(262, 83%, 68%, 0.22)')
              grad.addColorStop(1, 'hsla(290, 70%, 65%, 0.12)')
            }
            ctx.strokeStyle = grad
            ctx.lineWidth = isCyan ? 0.7 : 0.5
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        })
      })

      // Draw points
      points.forEach((point) => {
        const isCyan = point.type === 'eye' || point.type === 'eyebrow'
        const hue = isCyan ? 190 : 262
        const sat = isCyan ? 95 : 83
        const lit = isCyan ? 70 : 68
        const alpha = 0.38 + point.intensity * 0.52
        const size = 1.8 + point.intensity * 2.2
        
        // Pulsing outer glow ring (only for key points)
        if (point.type !== 'extra') {
          const ringSize = size * (3.5 + pulse * 1.5)
          const ringAlpha = (0.08 + pulse * 0.07) * point.intensity
          const ringGrad = ctx.createRadialGradient(point.x, point.y, size * 0.5, point.x, point.y, ringSize)
          ringGrad.addColorStop(0, `hsla(${hue}, ${sat}%, ${lit}%, ${ringAlpha})`)
          ringGrad.addColorStop(1, `hsla(${hue}, ${sat}%, ${lit}%, 0)`)
          ctx.fillStyle = ringGrad
          ctx.beginPath()
          ctx.arc(point.x, point.y, ringSize, 0, Math.PI * 2)
          ctx.fill()
        }
        
        // Outer glow
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size * 3)
        gradient.addColorStop(0, `hsla(${hue}, ${sat}%, ${lit}%, ${alpha * 0.5})`)
        gradient.addColorStop(0.5, `hsla(${hue}, ${sat}%, ${lit}%, ${alpha * 0.15})`)
        gradient.addColorStop(1, `hsla(${hue}, ${sat}%, ${lit}%, 0)`)
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(point.x, point.y, size * 3, 0, Math.PI * 2)
        ctx.fill()

        // Point core with bright center
        const coreGrad = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size)
        coreGrad.addColorStop(0, `hsla(${hue}, ${sat}%, 92%, ${alpha})`)
        coreGrad.addColorStop(0.4, `hsla(${hue}, ${sat}%, ${lit}%, ${alpha})`)
        coreGrad.addColorStop(1, `hsla(${hue}, ${sat}%, ${lit}%, ${alpha * 0.6})`)
        ctx.fillStyle = coreGrad
        ctx.beginPath()
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
        ctx.fill()

        // Highlight ring on mouse proximity
        if (mouse.active) {
          const dx = mouse.x - point.x
          const dy = mouse.y - point.y
          const dist = Math.hypot(dx, dy)
          if (dist < 90) {
            const highlightAlpha = Math.pow(1 - dist / 90, 2) * 0.75
            ctx.strokeStyle = `hsla(${hue}, ${sat}%, 85%, ${highlightAlpha})`
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.arc(point.x, point.y, size * 2, 0, Math.PI * 2)
            ctx.stroke()
          }
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, reducedMotion, interactionEnabled])

  return (
    <motion.div
      className={cn('relative overflow-hidden', className)}
      style={{ width: '100%', height: '100%' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        aria-hidden="true"
      />
    </motion.div>
  )
}
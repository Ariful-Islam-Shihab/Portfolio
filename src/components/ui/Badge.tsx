'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: 'default' | 'published' | 'submitted' | 'preparation' | 'concept'
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'border border-border bg-transparent text-muted-foreground',
      published: 'border-green-500/30 bg-green-500/10 text-green-400',
      submitted: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400',
      preparation: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
      concept: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
    }
    
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'
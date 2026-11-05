'use client'

import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', asChild = false, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
    
    const variants = {
      primary: 'rounded-lg bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25',
      secondary: 'rounded-lg border border-border bg-transparent px-6 py-3 text-sm text-foreground hover:bg-secondary hover:text-foreground',
      ghost: 'rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground',
      outline: 'rounded-lg border border-border bg-transparent px-6 py-3 text-sm text-foreground hover:bg-secondary',
    }
    
    const sizes = {
      default: 'px-6 py-3 text-sm',
      sm: 'px-4 py-2 text-xs',
      lg: 'px-8 py-4 text-base',
      icon: 'p-2',
    }

    const Component = asChild ? 'span' : 'button'
    
    return (
      <Component
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
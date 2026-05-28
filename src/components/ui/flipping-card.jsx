import React, { useState } from 'react'
import { cn } from '@/lib/utils'

export function FlippingCard({
  className,
  frontContent,
  backContent,
  height = 300,
  width = 350,
  frontClassName,
  backClassName,
  'aria-label': ariaLabel,
}) {
  const [forcedFlip, setForcedFlip] = useState(false)

  const handleClick = () => {
    // Toggle for touch/mobile devices that don't support hover
    if (window.matchMedia('(hover: none)').matches) {
      setForcedFlip((prev) => !prev)
    }
  }

  return (
    <div
      className={cn('flip-card-perspective cursor-pointer')}
      style={{ height: `${height}px`, width: `${width}px` }}
      onClick={handleClick}
      aria-label={ariaLabel}
      role="article"
    >
      {/* Inner rotating container */}
      <div
        className={cn(
          'relative w-full h-full rounded-2xl transform-preserve-3d',
          'transition-all duration-700',
          forcedFlip ? '[transform:rotateY(180deg)]' : '',
          className
        )}
        style={{ transformStyle: 'preserve-3d' }}
        /* CSS hover flip — applied via group in parent hover chain */
        onMouseEnter={(e) => {
          if (!window.matchMedia('(hover: none)').matches) {
            e.currentTarget.style.transform = 'rotateY(180deg)'
          }
        }}
        onMouseLeave={(e) => {
          if (!window.matchMedia('(hover: none)').matches && !forcedFlip) {
            e.currentTarget.style.transform = 'rotateY(0deg)'
          }
        }}
      >
        {/* Front Face */}
        <div
          className={cn(
            'absolute inset-0 w-full h-full rounded-[inherit] backface-hidden',
            frontClassName
          )}
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="h-full w-full" style={{ transform: 'translateZ(60px) scale(0.94)' }}>
            {frontContent}
          </div>
        </div>

        {/* Back Face */}
        <div
          className={cn(
            'absolute inset-0 w-full h-full rounded-[inherit] backface-hidden',
            backClassName
          )}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="h-full w-full" style={{ transform: 'translateZ(60px) scale(0.94)' }}>
            {backContent}
          </div>
        </div>
      </div>
    </div>
  )
}

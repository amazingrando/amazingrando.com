"use client"

import React from "react"

// Define types
type AnimationPattern = 'random' | 'circular'

interface SparkleType {
  id: string
  createdAt: number
  color: string
  size: number
  style: {
    top: string
    left: string
  }
}

interface SparkleProps {
  size: number
  color: string
  style: {
    top: string
    left: string
  }
}

interface SparklesProps {
  color?: string
  children: React.ReactNode
  maxSparkles?: number
  minSize?: number
  maxSize?: number
  pattern?: AnimationPattern
  animationDuration?: number
}

// Utility functions
const random = (min: number, max: number): number => 
  Math.floor(Math.random() * (max - min)) + min

const range = (start: number, end?: number, step: number = 1): number[] => {
  const output: number[] = []
  if (typeof end === "undefined") {
    end = start
    start = 0
  }
  for (let i = start; i < end; i += step) {
    output.push(i)
  }
  return output
}

const QUERY = "(prefers-reduced-motion: no-preference)"
const isRenderingOnServer = typeof window === "undefined"
const getInitialState = (): boolean => {
  return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches
}

const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(
    getInitialState
  )

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY)
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches)
    }
    mediaQueryList.addEventListener('change', listener)
    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [])

  return prefersReducedMotion
}

const useRandomInterval = (
  callback: () => void,
  minDelay: number | null,
  maxDelay: number | null
): (() => void) => {
  const timeoutId = React.useRef<number | null>(null)
  const savedCallback = React.useRef(callback)

  React.useEffect(() => {
    savedCallback.current = callback
  })

  React.useEffect(() => {
    const isEnabled = typeof minDelay === "number" && typeof maxDelay === "number"
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay as number, maxDelay as number)
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current()
          handleTick()
        }, nextTickAt)
      }
      handleTick()
    }
    return () => window.clearTimeout(timeoutId.current || undefined)
  }, [minDelay, maxDelay])

  const cancel = React.useCallback(() => {
    window.clearTimeout(timeoutId.current || undefined)
  }, [])

  return cancel
}

const DEFAULT_COLOR = "hsla(36, 100%, 54%, 1)"

const ANIMATION_PATTERNS = {
  random: (top: number, left: number) => ({ 
    top: `${top}%`, 
    left: `${left}%` 
  }),
  circular: (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI
    const radius = 40
    const centerX = 50
    const centerY = 50
    return {
      top: `${centerY + radius * Math.sin(angle)}%`,
      left: `${centerX + radius * Math.cos(angle)}%`,
    }
  }
}

const generateSparkle = (
  color: string, 
  minSize: number, 
  maxSize: number, 
  pattern: AnimationPattern = 'random',
  index: number = 0,
  total: number = 1
): SparkleType => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(minSize, maxSize),
    style: pattern === 'random'
      ? ANIMATION_PATTERNS.random(random(0, 100), random(0, 100))
      : ANIMATION_PATTERNS.circular(index, total),
  }
  return sparkle
}

const Sparkles: React.FC<SparklesProps> = React.memo(({ 
  color = DEFAULT_COLOR, 
  children, 
  maxSparkles = 3,
  minSize = 10,
  maxSize = 30,
  pattern = 'random',
  animationDuration = 750,
  ...delegated 
}) => {
  const [sparkles, setSparkles] = React.useState<SparkleType[]>(() => {
    return range(maxSparkles).map((_, i) => 
      generateSparkle(color, minSize, maxSize, pattern, i, maxSparkles)
    )
  })
  
  const prefersReducedMotion = usePrefersReducedMotion()
  
  useRandomInterval(
    () => {
      const now = Date.now()
      const nextSparkles = sparkles.filter(sp => {
        const delta = now - sp.createdAt
        return delta < animationDuration
      })
      
      if (nextSparkles.length < maxSparkles) {
        nextSparkles.push(
          generateSparkle(
            color, 
            minSize, 
            maxSize, 
            pattern, 
            nextSparkles.length, 
            maxSparkles
          )
        )
      }
      
      setSparkles(nextSparkles)
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450
  )

  return (
    <span 
      {...delegated} 
      className="inline relative"
      role="presentation"
    >
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </span>
  )
})

const Sparkle: React.FC<SparkleProps> = React.memo(({ size, color, style }) => {
  const path =
    "M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"

  return (
    <div
      className="absolute animate-come-in-out"
      style={style}
    >
      <svg
        className="block animate-spin"
        width={size}
        height={size}
        viewBox="0 0 68 68"
        fill={color}
      >
        <path d={path} fill={color} />
      </svg>
    </div>
  )
})

// Add display names for better debugging
Sparkles.displayName = 'Sparkles'
Sparkle.displayName = 'Sparkle'

export default Sparkles 
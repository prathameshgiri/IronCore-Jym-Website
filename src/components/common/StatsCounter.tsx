import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StatsCounterProps {
  value: number
  suffix?: string
  label: string
  icon?: React.ReactNode
  className?: string
  delay?: number
}

function useCountUp(end: number, isInView: boolean, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isInView) return
    const timeout = setTimeout(() => {
      let startTime: number | null = null
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * end))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, delay * 1000)
    return () => clearTimeout(timeout)
  }, [end, isInView, duration, delay])
  return count
}

export default function StatsCounter({ value, suffix = '', label, icon, className, delay = 0 }: StatsCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const count = useCountUp(value, isInView, 2000, delay)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={cn('text-center py-2', className)}
    >
      {icon && (
        <div className="mb-2 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[hsl(15,90%,55%)]/8 text-[hsl(15,90%,55%)]">
          {icon}
        </div>
      )}
      <div className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-0.5">
        {count.toLocaleString()}<span className="text-[hsl(15,90%,55%)]">{suffix}</span>
      </div>
      <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">{label}</p>
    </motion.div>
  )
}

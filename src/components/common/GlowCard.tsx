import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export default function GlowCard({ children, className, glowColor = 'hsla(15, 90%, 55%, 0.08)' }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative rounded-xl overflow-hidden',
        'bg-white',
        'border border-[#e2e8f0]',
        'shadow-sm',
        'transition-all duration-300',
        'hover:border-[#cbd5e1] hover:shadow-md',
        className
      )}
    >
      {/* Subtle mouse glow */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300 opacity-60"
          style={{
            width: '300px',
            height: '300px',
            left: mousePos.x - 150,
            top: mousePos.y - 150,
            background: `radial-gradient(circle, ${glowColor}, transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  badge?: string
  title: string
  highlight?: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl mb-12', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn('mb-4', align === 'center' ? 'flex justify-center' : '')}
        >
          <div className="badge-premium">
            {badge}
          </div>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-[2rem] sm:text-[2.5rem] font-display font-bold text-[#0f172a]"
      >
        {title}{' '}
        {highlight && <span className="text-[#ea580c]">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-4 text-[16px] text-[#64748b]"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

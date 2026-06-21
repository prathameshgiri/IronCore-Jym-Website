import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dumbbell } from 'lucide-react'

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
        >
          {/* Background Glow */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-orange/10 rounded-full blur-[100px]" />
          </div>

          {/* Loader Content */}
          <div className="relative flex flex-col items-center gap-6">
            {/* Spinning Ring */}
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 rounded-full border-2 border-transparent border-t-neon-orange border-r-neon-red"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 rounded-full border-2 border-transparent border-b-neon-purple border-l-neon-blue"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Dumbbell className="w-6 h-6 text-neon-orange" />
              </motion.div>
            </div>

            {/* Brand Name */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center"
            >
              <h2 className="text-2xl font-display font-bold text-gradient">IronCore</h2>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.3em] mt-1">Loading</p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full w-1/2 bg-gradient-to-r from-neon-orange to-neon-purple rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

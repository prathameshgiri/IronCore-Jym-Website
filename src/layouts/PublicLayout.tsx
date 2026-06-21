import { useLocation, useOutlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import AnimatedBackground from '@/components/common/AnimatedBackground'

export default function PublicLayout() {
  const location = useLocation()
  const element = useOutlet()

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <AnimatedBackground />
      <Navbar />
      <div className="flex-1 flex flex-col relative z-10">
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="flex-1 flex flex-col"
          >
            {element}
          </motion.main>
        </AnimatePresence>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

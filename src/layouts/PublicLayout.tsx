import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import AnimatedBackground from '@/components/common/AnimatedBackground'

export default function PublicLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="relative z-10"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

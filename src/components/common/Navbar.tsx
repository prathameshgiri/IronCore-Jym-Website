import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Dumbbell } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/constants'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  
  const isHome = location.pathname === '/'
  const isTransparent = !isScrolled
  const useLightText = isHome && isTransparent

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 py-6">
        <nav className="container mx-auto px-5 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#ea580c] flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <span className={cn(
              "text-xl font-display font-bold tracking-tight transition-colors",
              useLightText ? "text-white" : "text-[#0f172a]"
            )}>
              IronCore
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'relative px-4 py-2 text-[14px] font-semibold rounded-md transition-colors duration-200',
                    isActive
                      ? (useLightText ? 'text-white' : 'text-[#ea580c]')
                      : (useLightText ? 'text-white/80 hover:text-white' : 'text-[#475569] hover:text-[#0f172a]')
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-4 right-4 h-[2px] rounded-full bg-[#ea580c]"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login">
              <button className={cn(
                "px-4 py-2 text-[14px] font-semibold transition-colors",
                useLightText ? "text-white hover:text-white/80" : "text-[#475569] hover:text-[#0f172a]"
              )}>
                Log In
              </button>
            </Link>
            <Link to="/register">
              <button className="btn-primary text-[14px] py-2 px-5">
                Join Now
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              useLightText ? "text-white hover:bg-white/10" : "text-[#0f172a] hover:bg-[#f1f5f9]"
            )}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#f8fafc]/80 backdrop-blur-md flex flex-col overflow-y-auto p-5"
          >
            {/* Header matching reference */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#ea580c] flex items-center justify-center shadow-lg border-2 border-white">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#ea580c] text-xl leading-none">IronCore</h3>
                  <p className="text-[13px] text-[#475569] mt-1 font-medium">Premium Fitness</p>
                </div>
              </div>
              <button 
                onClick={() => setIsMobileOpen(false)} 
                className="w-11 h-11 border-2 border-[#8b5cf6] bg-[#8b5cf6]/10 rounded-2xl flex items-center justify-center text-[#8b5cf6] shadow-sm hover:bg-[#8b5cf6] hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Glassmorphic Links Card */}
            <div className="bg-white/60 backdrop-blur-2xl border border-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-fit">
              <div className="space-y-6">
                {NAV_ITEMS.map((item) => {
                  const isActive = location.pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        'block text-[18px] font-medium transition-colors',
                        isActive ? 'text-[#0f172a]' : 'text-[#475569]'
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}

                {/* Mobile Auth Buttons integrated into the list */}
                <div className="pt-4 border-t border-[#0f172a]/5 space-y-6 mt-6">
                  <Link to="/login" className="flex items-center justify-between w-full text-[18px] text-[#475569] font-medium transition-colors">
                    Login
                  </Link>
                  <Link to="/register" className="flex items-center justify-between w-full text-[18px] text-[#475569] font-medium transition-colors">
                    Signup
                    <svg className="w-4 h-4 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

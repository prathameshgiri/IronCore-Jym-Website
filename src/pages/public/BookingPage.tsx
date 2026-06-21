import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock, Users, Flame, Calendar, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { CLASSES } from '@/constants'

export default function BookingPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const gymClass = CLASSES.find(c => c.id === id)

  if (!gymClass) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-[#fffcf9]">
        <h1 className="text-3xl font-display font-bold text-[#0f172a] mb-4">Class Not Found</h1>
        <p className="text-[#64748b] mb-8">The class you are trying to book does not exist.</p>
        <button onClick={() => navigate('/classes')} className="btn-primary">Back to Classes</button>
      </div>
    )
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#fffcf9] min-h-screen pt-32 pb-20 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-10 max-w-md w-full mx-5 border border-[#e2e8f0] shadow-xl text-center"
        >
          <div className="w-20 h-20 bg-[#d1fae5] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#10b981]" />
          </div>
          <h2 className="text-3xl font-display font-bold text-[#0f172a] mb-4">Booking Confirmed!</h2>
          <p className="text-[#475569] mb-8">
            You're all set for <strong>{gymClass.name}</strong> with {gymClass.trainer}. We have sent the details to your email.
          </p>
          <button onClick={() => navigate('/classes')} className="btn-primary w-full">View More Classes</button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-[#fffcf9] min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-5 lg:px-8 max-w-6xl">
        
        <Link to="/classes" className="inline-flex items-center gap-2 text-[#64748b] hover:text-[#ea580c] font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Classes
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Class Details */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#e2e8f0]">
            <div className="h-64 relative">
              <img src={gymClass.image} alt={gymClass.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className="text-[12px] font-bold px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#0f172a]">
                  {gymClass.category}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-3xl font-display font-bold text-white mb-2">{gymClass.name}</h1>
                <p className="text-[#ffedd5] font-medium">Instructor: {gymClass.trainer}</p>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-[#475569] leading-relaxed mb-8">{gymClass.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#f8fafc] p-4 rounded-xl border border-[#e2e8f0] flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[13px] font-bold text-[#0f172a] uppercase tracking-wider mb-1">
                    <Clock className="w-4 h-4 text-[#ea580c]" /> Duration
                  </div>
                  <span className="text-[#475569]">{gymClass.duration}</span>
                </div>
                <div className="bg-[#f8fafc] p-4 rounded-xl border border-[#e2e8f0] flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[13px] font-bold text-[#0f172a] uppercase tracking-wider mb-1">
                    <Flame className="w-4 h-4 text-[#ea580c]" /> Intensity
                  </div>
                  <span className="text-[#475569]">{gymClass.calories} cal</span>
                </div>
                <div className="bg-[#f8fafc] p-4 rounded-xl border border-[#e2e8f0] flex flex-col gap-1 col-span-2">
                  <div className="flex items-center gap-2 text-[13px] font-bold text-[#0f172a] uppercase tracking-wider mb-1">
                    <Users className="w-4 h-4 text-[#ea580c]" /> Capacity
                  </div>
                  <span className="text-[#475569]">{gymClass.enrolled} enrolled / {gymClass.maxCapacity} total spots</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-[#e2e8f0]">
            <h2 className="text-2xl font-display font-bold text-[#0f172a] mb-2">Reserve Your Spot</h2>
            <p className="text-[#64748b] mb-8">Fill out your details to guarantee your place in this session.</p>

            <form onSubmit={handleBooking} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-[#0f172a]">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your Full Name"
                  className="w-full px-5 py-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-bold text-[#0f172a]">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="Your Email Id"
                  className="w-full px-5 py-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-bold text-[#0f172a]">Select Date & Time</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                  <select 
                    required
                    className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all appearance-none text-[#0f172a]"
                  >
                    <option value="">Choose a slot...</option>
                    <option value="today">Today at 6:00 PM</option>
                    <option value="tomorrow">Tomorrow at 7:00 AM</option>
                    <option value="friday">Friday at 5:00 PM</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-[15px] mt-4">
                Confirm Reservation
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

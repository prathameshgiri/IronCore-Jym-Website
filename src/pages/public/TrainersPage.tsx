import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ArrowRight, Clock, Award, Filter, Sparkles } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading'
import GlowCard from '@/components/common/GlowCard'
import { TRAINERS } from '@/constants'

const specialties = ['All', 'Strength & Conditioning', 'Yoga & Mindfulness', 'HIIT & CrossFit', 'Zumba & Dance Fitness', 'Cardio & Endurance', 'Nutrition & Weight Management']

export default function TrainersPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredTrainers = activeFilter === 'All'
    ? TRAINERS
    : TRAINERS.filter(t => t.specialty === activeFilter)

  return (
    <div className="bg-[#fffcf9] min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="relative pt-12 pb-16">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex justify-center"
            >
              <div className="badge-premium">
                <Sparkles className="w-3.5 h-3.5" />
                CERTIFIED PROFESSIONALS
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-bold text-[#0f172a] mb-6"
            >
              Our <span className="text-[#ea580c]">Trainers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[16px] sm:text-lg text-[#64748b]"
            >
              World-class coaches with decades of combined experience ready to guide your transformation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-5 lg:px-8">
          {/* Filters */}
          <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-4 scrollbar-hide snap-x">
            <Filter className="w-4 h-4 text-[#64748b] shrink-0 mr-2" />
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setActiveFilter(specialty)}
                className={`px-4 py-2 rounded-full text-[14px] font-semibold whitespace-nowrap transition-all shrink-0 snap-start ${
                  activeFilter === specialty
                    ? 'bg-[#ea580c] text-white shadow-md'
                    : 'bg-white border border-[#e2e8f0] text-[#475569] hover:bg-[#f8fafc] hover:border-[#cbd5e1]'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredTrainers.map((trainer, index) => (
                <motion.div
                  key={trainer.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlowCard className="h-full flex flex-col">
                    <div className="relative overflow-hidden h-72">
                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
                      
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
                        <Star className="w-3.5 h-3.5 text-[#ea580c] fill-[#ea580c]" />
                        <span className="text-[13px] font-bold text-[#0f172a]">{trainer.rating}</span>
                      </div>

                      <div className="absolute bottom-4 left-5 right-5">
                        <h3 className="text-xl font-display font-bold text-white mb-0.5">{trainer.name}</h3>
                        <p className="text-[13px] text-[#ffedd5] font-medium">{trainer.specialty}</p>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-[14px] text-[#475569] mb-6 leading-relaxed line-clamp-3">{trainer.bio}</p>

                      <div className="flex items-center gap-5 mb-6">
                        <div className="flex items-center gap-2 text-[13px] font-medium text-[#64748b]">
                          <Clock className="w-4 h-4 text-[#ea580c]" />
                          {trainer.experience}
                        </div>
                        <div className="flex items-center gap-2 text-[13px] font-medium text-[#64748b]">
                          <Award className="w-4 h-4 text-[#ea580c]" />
                          {trainer.certifications.length} Certs
                        </div>
                      </div>

                      {/* Certifications Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {trainer.certifications.map((cert) => (
                          <span key={cert} className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#f8fafc] text-[#475569] border border-[#e2e8f0]">
                            {cert}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-6 border-t border-[#f1f5f9]">
                        <Link 
                          to={`/trainers/${trainer.id}`}
                          className="w-full py-2.5 rounded-lg bg-transparent text-[#0f172a] border border-[#e2e8f0] font-semibold text-[14px] transition-all flex items-center justify-center gap-2 hover:bg-[#f1f5f9] group"
                        >
                          View Profile
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredTrainers.length === 0 && (
            <div className="text-center py-20 text-[#64748b]">
              No trainers found for this specialty.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Users, Flame, Filter, Zap, ArrowRight, Sparkles } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading'
import GlowCard from '@/components/common/GlowCard'
import { CLASSES } from '@/constants'

const categories = ['All', 'Yoga', 'Cardio', 'CrossFit', 'Strength Training', 'Zumba', 'HIIT']

const difficultyColors: Record<string, string> = {
  Beginner: 'text-[#10b981] bg-[#d1fae5] border-[#a7f3d0]',
  Intermediate: 'text-[#ea580c] bg-[#ffedd5] border-[#fed7aa]',
  Advanced: 'text-[#ef4444] bg-[#fee2e2] border-[#fecaca]',
}

export default function ClassesPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredClasses = activeCategory === 'All'
    ? CLASSES
    : CLASSES.filter(c => c.category === activeCategory)

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
                120+ WEEKLY CLASSES
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-bold text-[#0f172a] mb-6"
            >
              Our <span className="text-[#ea580c]">Classes</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[16px] sm:text-lg text-[#64748b]"
            >
              From high-intensity workouts to mindful yoga sessions, find the perfect class for your fitness journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-5 lg:px-8">
          {/* Category Filters */}
          <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-4 scrollbar-hide snap-x">
            <Filter className="w-4 h-4 text-[#64748b] shrink-0 mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-[14px] font-semibold whitespace-nowrap transition-all shrink-0 snap-start ${
                  activeCategory === category
                    ? 'bg-[#ea580c] text-white shadow-md'
                    : 'bg-white border border-[#e2e8f0] text-[#475569] hover:bg-[#f8fafc] hover:border-[#cbd5e1]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((gymClass, index) => (
              <motion.div
                key={gymClass.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                layout
              >
                <GlowCard className="h-full flex flex-col">
                  <div className="relative overflow-hidden h-64 rounded-t-xl">
                    <img
                      src={gymClass.image}
                      alt={gymClass.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${difficultyColors[gymClass.difficulty]}`}>
                        {gymClass.difficulty}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#0f172a] shadow-sm">
                        {gymClass.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-5 right-5">
                      <h3 className="text-xl font-display font-bold text-white mb-0.5">{gymClass.name}</h3>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-[14px] text-[#475569] mb-5 line-clamp-2 leading-relaxed">{gymClass.description}</p>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="flex flex-col gap-1 text-[13px] font-medium text-[#64748b]">
                        <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#ea580c]" /> {gymClass.duration}</div>
                      </div>
                      <div className="flex flex-col gap-1 text-[13px] font-medium text-[#64748b]">
                        <div className="flex items-center gap-1.5"><Flame className="w-3.5 h-3.5 text-[#ea580c]" /> {gymClass.calories} cal</div>
                      </div>
                      <div className="flex flex-col gap-1 text-[13px] font-medium text-[#64748b]">
                        <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-[#ea580c]" /> {gymClass.enrolled}/{gymClass.maxCapacity}</div>
                      </div>
                    </div>

                    {/* Capacity Bar */}
                    <div className="mb-6">
                      <div className="w-full h-2 bg-[#f1f5f9] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(gymClass.enrolled / gymClass.maxCapacity) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-[#ea580c] rounded-full"
                        />
                      </div>
                      <p className="text-[11px] font-medium text-[#64748b] mt-1.5">
                        {gymClass.maxCapacity - gymClass.enrolled} spots remaining
                      </p>
                    </div>

                    <div className="mt-auto pt-5 border-t border-[#f1f5f9] flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider">Trainer</p>
                        <p className="text-[14px] font-bold text-[#0f172a]">{gymClass.trainer}</p>
                      </div>
                      <Link
                        to={`/classes/book/${gymClass.id}`}
                        className="btn-primary py-2 px-5 text-[13px] hover:scale-105 active:scale-95 transition-transform block"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
          {filteredClasses.length === 0 && (
            <div className="text-center py-20 text-[#64748b]">
              No classes found for this category.
            </div>
          )}
        </div>
      </section>

      {/* Schedule Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5 lg:px-8">
          <SectionHeading
            badge="Weekly Schedule"
            title="Class Timetable"
            subtitle="Plan your week with our comprehensive class schedule."
          />

          <div className="max-w-5xl mx-auto overflow-x-auto pb-4">
            <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#f8fafc]">
                    <th className="text-left p-4 text-[13px] font-bold text-[#475569] uppercase tracking-wider border-b border-[#e2e8f0]">Time</th>
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <th key={day} className="p-4 text-[13px] font-bold text-[#475569] uppercase tracking-wider border-b border-[#e2e8f0] text-center">{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { time: '5:00 AM', classes: ['CrossFit', '', 'CrossFit', '', 'CrossFit', 'HIIT'] },
                    { time: '6:00 AM', classes: ['Cardio', 'HIIT', 'Cardio', 'HIIT', 'Cardio', 'CrossFit'] },
                    { time: '7:00 AM', classes: ['Yoga', '', 'Yoga', '', 'Yoga', ''] },
                    { time: '10:00 AM', classes: ['', 'Strength', '', 'Strength', '', ''] },
                    { time: '5:00 PM', classes: ['Zumba', '', 'Zumba', '', 'Zumba', ''] },
                    { time: '6:00 PM', classes: ['', 'Power Yoga', '', 'Dance', '', ''] },
                  ].map((row) => (
                    <tr key={row.time} className="border-b border-[#f1f5f9] hover:bg-[#f8fafc] transition-colors">
                      <td className="p-4 text-[14px] font-bold text-[#ea580c] whitespace-nowrap">{row.time}</td>
                      {row.classes.map((cls, i) => (
                         <td key={i} className="p-4 text-center">
                          {cls ? (
                            <span className="text-[12px] font-semibold px-3 py-1.5 rounded-lg bg-white text-[#0f172a] border border-[#e2e8f0] shadow-sm whitespace-nowrap">
                              {cls}
                            </span>
                          ) : (
                            <span className="text-[#cbd5e1]">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import {
  ArrowRight, Play, Star, ChevronDown, ChevronUp, Users, Dumbbell,
  Calendar, Award, Target, Check, Quote, Sparkles,
  Zap, Flame, Crown, Gem
} from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading'
import GlowCard from '@/components/common/GlowCard'
import { MEMBERSHIP_PLANS, TRAINERS, TESTIMONIALS, BLOG_POSTS, FAQS, CLASSES } from '@/constants'
import { formatCurrency } from '@/lib/utils'
import type { BMIResult } from '@/types'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' }
  }),
}

// ====== Hero ======
function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-24 pb-20 overflow-hidden">
      {/* Full Width Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0f172a]">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop" 
          alt="IronCore Gym Training" 
          className="w-full h-full object-cover opacity-90"
        />
        
        {/* Smooth Fading Blur Effect on Left Side */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[75%] backdrop-blur-md bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-transparent [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_50%,transparent_100%)]" />
        
        {/* Subtle overall darkening for the right side */}
        <div className="absolute inset-0 bg-[#0f172a]/20" />
      </div>
      
      <div className="container mx-auto px-5 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="badge-premium bg-white/10 border-white/20 text-white backdrop-blur-md inline-flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-2 text-[#ea580c]" />
              PREMIUM FITNESS EXPERIENCE
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-[clamp(2.75rem,5vw,4.5rem)] font-display font-bold leading-[1.1] tracking-tight mb-6 text-white"
          >
            Transform With <br className="hidden lg:block" />
            <span className="text-[#ea580c]">IronCore Gym</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-display font-semibold leading-[1.3] text-white/90 mb-6"
          >
            Mumbai's Premier Fitness & Personal Training Experts
          </motion.h2>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-[#cbd5e1] text-base sm:text-lg mb-10 leading-relaxed max-w-lg"
          >
            Achieve your fitness goals with world-class equipment, elite trainers, and a supportive community. Your transformation starts here.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14"
          >
            <Link to="/membership">
              <button className="btn-primary px-8 py-4 text-base shadow-lg shadow-[#ea580c]/20 hover:shadow-xl hover:shadow-[#ea580c]/30 transition-all">
                Join IronCore
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <button className="px-8 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl shadow-sm border border-white/20 transition-all flex items-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Watch Tour
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-between sm:justify-start gap-3 sm:gap-10 bg-[#0f172a]/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 w-full sm:w-fit"
          >
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white mb-0.5 sm:mb-1">5k<span className="text-[#ea580c]">+</span></div>
              <div className="text-[10px] sm:text-[12px] text-[#94a3b8] font-bold uppercase tracking-wider">Members</div>
            </div>
            <div className="w-px h-8 sm:h-12 bg-white/10" />
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white mb-0.5 sm:mb-1">50<span className="text-[#ea580c]">+</span></div>
              <div className="text-[10px] sm:text-[12px] text-[#94a3b8] font-bold uppercase tracking-wider">Trainers</div>
            </div>
            <div className="w-px h-8 sm:h-12 bg-white/10" />
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white mb-0.5 sm:mb-1">15<span className="text-[#ea580c]">+</span></div>
              <div className="text-[10px] sm:text-[12px] text-[#94a3b8] font-bold uppercase tracking-wider">Years</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


// ====== Amenities ======
function AmenitiesSection() {
  const amenities = [
    { title: 'World-Class Equipment', desc: 'State-of-the-art machines and free weights.', icon: Dumbbell },
    { title: 'Luxury Spa', desc: 'Post-workout recovery with sauna & steam.', icon: Gem },
    { title: '24/7 Access', desc: 'Train anytime that fits your schedule.', icon: Zap },
    { title: 'Expert Coaches', desc: 'Internationally certified personal trainers.', icon: Award },
  ]
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-5 lg:px-8">
        <SectionHeading badge="Why Choose Us" title="Premium Facilities" subtitle="Everything you need to reach your peak performance." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, i) => (
            <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <GlowCard className="h-full">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#ea580c]/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#ea580c]" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#0f172a] mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#475569]">{item.desc}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ====== Personal Training ======
function PersonalTrainingSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#64748b] uppercase leading-relaxed mb-6">
              Your body & your fitness requirements are unique.<br className="hidden sm:block" />
              Your personal training should reflect that!
            </p>

            <h2 className="text-[clamp(1.8rem,6vw,3.5rem)] font-display font-black italic text-[#ea580c] leading-[0.95] tracking-tight mb-6 uppercase">
              <span className="whitespace-nowrap">Certified Personal</span><br />
              Trainers
            </h2>

            <p className="text-[15px] text-[#475569] mb-8 leading-relaxed">
              Get fit faster with IronCore Gym's internationally <span className="font-bold text-[#0f172a]">certified personal trainers</span>. Enjoy cardio, strength, and weight training with top equipment. Your goals, your timeline, your results.
            </p>

            <Link to="/trainers">
              <button className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-5 sm:px-8 py-3.5 sm:py-4 text-[14px] sm:text-[16px] font-black italic uppercase whitespace-nowrap tracking-wide rounded-md shadow-lg shadow-[#ea580c]/30 hover:shadow-xl hover:shadow-[#ea580c]/40 transition-all mb-8 transform hover:-translate-y-1">
                Book My Free PT Session
              </button>
            </Link>

            <div className="block">
              <Link to="/trainers" className="text-[9.5px] sm:text-[12px] font-bold tracking-normal sm:tracking-[0.1em] text-[#64748b] uppercase hover:text-[#0f172a] transition-colors inline-flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                Learn more about our personal training <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Image (Skewed) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 transform -skew-x-6 overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white/50">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1200&fit=crop"
                alt="Personal Training"
                className="w-full h-full object-cover transform skew-x-6 scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ====== Featured Classes ======
function FeaturedClassesSection() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-5 lg:px-8">
        <SectionHeading badge="Programs" title="Discover Our Classes" subtitle="Find the perfect workout to match your fitness goals." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLASSES.slice(0, 3).map((cls, i) => (
            <motion.div key={cls.id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Link to="/classes">
                <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all">
                  <img src={cls.image} alt={cls.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-block px-3 py-1 bg-[#ea580c] text-white text-[10px] font-bold uppercase tracking-wider rounded-md mb-3">
                      {cls.category}
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-1">{cls.name}</h3>
                    <div className="flex items-center gap-4 text-[12px] text-white/80">
                      <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {cls.trainer}</span>
                      <span className="flex items-center gap-1.5"><Flame className="w-3.5 h-3.5" /> {cls.difficulty}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/classes">
            <button className="btn-secondary">View All Classes</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// ====== Trainers ======
function TrainersShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5 lg:px-8">
        <SectionHeading
          badge="Experts"
          title="Meet Our Elite Trainers"
          subtitle="Certified professionals dedicated to your success."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAINERS.slice(0, 3).map((trainer, index) => (
            <motion.div
              key={trainer.id}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GlowCard>
                <div className="relative overflow-hidden rounded-t-[inherit]">
                  <img src={trainer.image} alt={trainer.name} className="w-full h-64 object-cover" loading="lazy" />
                  <div className="absolute bottom-3 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-display font-bold text-[#0f172a]">{trainer.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-[#ea580c] fill-[#ea580c]" />
                        <span className="text-[11px] font-semibold text-[#0f172a]">{trainer.rating}</span>
                      </div>
                    </div>
                    <p className="text-[12px] text-[#ea580c] font-medium">{trainer.specialty}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[14px] text-[#475569] line-clamp-2 mb-4">{trainer.bio}</p>
                  <Link to="/trainers" className="text-[13px] font-bold text-[#0f172a] hover:text-[#ea580c] flex items-center gap-1.5 transition-colors">
                    View Profile <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/trainers">
            <button className="btn-secondary">
              View All Trainers
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// ====== Testimonials ======
function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ea580c]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0f172a] rounded-full blur-[120px]" />
      <div className="container mx-auto px-5 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[12px] font-bold text-white uppercase tracking-wider mb-4">
              <Star className="w-3.5 h-3.5 text-[#ea580c] fill-[#ea580c]" />
              Success Stories
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Don't Just Take Our Word For It</h2>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
            <motion.div key={testimonial.id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 h-full flex flex-col transition-all hover:bg-white/10">
                <Quote className="w-10 h-10 text-[#ea580c]/40 mb-6" />
                <p className="text-white/90 text-[15px] leading-relaxed mb-8 flex-1">"{testimonial.content}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#ea580c]" />
                  <div>
                    <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                    <span className="text-[#ea580c] text-[12px] font-medium">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ====== Main ======
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AmenitiesSection />
      <PersonalTrainingSection />
      <FeaturedClassesSection />
      <TrainersShowcase />
      <TestimonialsSection />
    </>
  )
}

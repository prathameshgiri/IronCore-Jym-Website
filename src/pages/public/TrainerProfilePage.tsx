import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Clock, Award, CalendarDays } from 'lucide-react'
import { TRAINERS } from '@/constants'
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from '@/components/common/SocialIcons'

function getSocialIcon(iconName: string) {
  switch (iconName) {
    case 'Instagram': return Instagram
    case 'Facebook': return Facebook
    case 'Twitter': return Twitter
    case 'Youtube': return Youtube
    case 'Linkedin': return Linkedin
    default: return Instagram
  }
}

export default function TrainerProfilePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const trainer = TRAINERS.find(t => t.id === id)

  if (!trainer) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-[#fffcf9]">
        <h1 className="text-3xl font-display font-bold text-[#0f172a] mb-4">Trainer Not Found</h1>
        <p className="text-[#64748b] mb-8">The trainer you are looking for does not exist.</p>
        <button onClick={() => navigate('/trainers')} className="btn-primary">Back to Trainers</button>
      </div>
    )
  }

  return (
    <div className="bg-[#fffcf9] min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-5 lg:px-8">
        
        {/* Back Button */}
        <Link to="/trainers" className="inline-flex items-center gap-2 text-[#64748b] hover:text-[#ea580c] font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to All Trainers
        </Link>

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#e2e8f0] flex flex-col lg:flex-row">
          
          {/* Image Section */}
          <div className="relative h-[400px] lg:h-auto lg:w-2/5 shrink-0">
            <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ea580c] shadow-sm mb-4">
                <Star className="w-3.5 h-3.5 text-white fill-white" />
                <span className="text-[13px] font-bold text-white">{trainer.rating} Rating</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{trainer.name}</h1>
              <p className="text-xl text-[#ffedd5] font-medium">{trainer.specialty}</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-8 lg:p-12 lg:py-16">
            
            {/* About */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">About {trainer.name.split(' ')[0]}</h2>
              <p className="text-[#475569] leading-relaxed text-lg">{trainer.bio}</p>
            </section>

            {/* Quick Stats Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-[#f8fafc] p-6 rounded-2xl border border-[#e2e8f0]">
                <div className="flex items-center gap-2 text-[#0f172a] font-bold mb-2">
                  <Clock className="w-5 h-5 text-[#ea580c]" /> Experience
                </div>
                <p className="text-[#475569]">{trainer.experience} in fitness industry</p>
              </div>
              <div className="bg-[#f8fafc] p-6 rounded-2xl border border-[#e2e8f0]">
                <div className="flex items-center gap-2 text-[#0f172a] font-bold mb-4">
                  <Award className="w-5 h-5 text-[#ea580c]" /> Certifications
                </div>
                <div className="flex flex-wrap gap-2">
                  {trainer.certifications.map((cert) => (
                    <span key={cert} className="text-[12px] font-semibold px-3 py-1.5 rounded-lg bg-white text-[#475569] border border-[#e2e8f0] shadow-sm">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Weekly Schedule */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
                <CalendarDays className="w-6 h-6 text-[#ea580c]" /> Class Schedule
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {trainer.schedule.map((slot, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-white border border-[#e2e8f0] shadow-sm hover:border-[#cbd5e1] transition-colors">
                    <div>
                      <p className="font-bold text-[#0f172a]">{slot.class}</p>
                      <p className="text-[14px] text-[#64748b]">{slot.day}</p>
                    </div>
                    <div className="text-[14px] font-bold text-[#ea580c] bg-[#ffedd5] px-4 py-1.5 rounded-full w-fit mt-3 sm:mt-0">
                      {slot.time}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Socials */}
            <section>
              <h3 className="text-[13px] font-bold text-[#64748b] uppercase tracking-wider mb-4">Connect with {trainer.name.split(' ')[0]}</h3>
              <div className="flex gap-4">
                {trainer.socialLinks.map((social) => {
                  const IconComponent = getSocialIcon(social.icon)
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center text-[#475569] hover:text-white hover:bg-[#ea580c] hover:border-[#ea580c] shadow-sm transition-all"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}

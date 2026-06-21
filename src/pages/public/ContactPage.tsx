import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle, Sparkles } from 'lucide-react'
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from '@/components/common/SocialIcons'
import SectionHeading from '@/components/common/SectionHeading'
import GlowCard from '@/components/common/GlowCard'
import { CONTACT_INFO, SOCIAL_LINKS } from '@/constants'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactForm = z.infer<typeof contactSchema>

const contactCards = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Call Us',
    details: [CONTACT_INFO.phone],
    action: `tel:${CONTACT_INFO.phone}`,
    color: '#ff6b35',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Us',
    details: [CONTACT_INFO.email],
    action: `mailto:${CONTACT_INFO.email}`,
    color: '#3b82f6',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Visit Us',
    details: [CONTACT_INFO.address],
    action: '#map',
    color: '#a855f7',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Working Hours',
    details: [CONTACT_INFO.hours.weekday, CONTACT_INFO.hours.weekend],
    action: '#',
    color: '#10b981',
  },
]

const IconMap: Record<string, any> = {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (_data: ContactForm) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
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
                GET IN TOUCH
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-bold text-[#0f172a] mb-6"
            >
              Contact <span className="text-[#ea580c]">Us</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[16px] sm:text-lg text-[#64748b]"
            >
              Have a question or ready to start? We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-8">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard className="h-full">
                  <a href={card.action} className="block p-8 text-center h-full">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${card.color}15`, color: card.color }}
                    >
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-display font-bold text-[#0f172a] mb-2">{card.title}</h3>
                    {card.details.map((detail, i) => (
                      <p key={i} className="text-[14px] text-[#64748b] leading-relaxed">{detail}</p>
                    ))}
                  </a>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlowCard className="h-full">
                <div className="p-8 lg:p-10">
                  <h2 className="text-2xl font-display font-bold text-[#0f172a] mb-8">Send Us a Message</h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center h-full"
                    >
                      <div className="w-20 h-20 bg-[#d1fae5] rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10 text-[#10b981]" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-[#0f172a] mb-2">Message Sent!</h3>
                      <p className="text-[#64748b]">We'll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[13px] font-bold text-[#475569] mb-2">Name</label>
                          <input
                            {...register('name')}
                            placeholder="John Doe"
                            className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#e2e8f0] text-[15px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-shadow shadow-sm"
                          />
                          {errors.name && <p className="text-[12px] text-[#ef4444] mt-1.5 font-medium">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="block text-[13px] font-bold text-[#475569] mb-2">Email</label>
                          <input
                            {...register('email')}
                            type="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#e2e8f0] text-[15px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-shadow shadow-sm"
                          />
                          {errors.email && <p className="text-[12px] text-[#ef4444] mt-1.5 font-medium">{errors.email.message}</p>}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[13px] font-bold text-[#475569] mb-2">Phone</label>
                          <input
                            {...register('phone')}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#e2e8f0] text-[15px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-shadow shadow-sm"
                          />
                          {errors.phone && <p className="text-[12px] text-[#ef4444] mt-1.5 font-medium">{errors.phone.message}</p>}
                        </div>
                        <div>
                          <label className="block text-[13px] font-bold text-[#475569] mb-2">Subject</label>
                          <input
                            {...register('subject')}
                            placeholder="Membership inquiry"
                            className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#e2e8f0] text-[15px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-shadow shadow-sm"
                          />
                          {errors.subject && <p className="text-[12px] text-[#ef4444] mt-1.5 font-medium">{errors.subject.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[13px] font-bold text-[#475569] mb-2">Message</label>
                        <textarea
                          {...register('message')}
                          rows={5}
                          placeholder="Tell us how we can help..."
                          className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#e2e8f0] text-[15px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-shadow shadow-sm resize-none"
                        />
                        {errors.message && <p className="text-[12px] text-[#ef4444] mt-1.5 font-medium">{errors.message.message}</p>}
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full btn-primary py-4 text-[15px] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </div>
              </GlowCard>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <GlowCard className="h-full min-h-[500px]">
                <div className="p-2 h-full">
                  <div id="map" className="rounded-xl overflow-hidden h-full bg-[#f8fafc] flex items-center justify-center border border-[#e2e8f0]">
                    <iframe
                      src={CONTACT_INFO.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: '500px' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="IronCore Gym Location"
                    />
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-white border-y border-[#f1f5f9]">
        <div className="container mx-auto px-5 lg:px-8">
          <SectionHeading
            badge="Social Media"
            title="Follow Us Online"
            subtitle="Stay connected with us on social media for daily fitness inspiration."
          />

          <div className="flex items-center justify-center gap-6 flex-wrap">
            {SOCIAL_LINKS.map((social, index) => {
              const IconComp = IconMap[social.icon]
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border border-[#e2e8f0] shadow-sm rounded-2xl px-8 py-8 text-center min-w-[150px] hover:border-[#ea580c] hover:shadow-md transition-all group"
                >
                  <div className="flex justify-center mb-4 text-[#0f172a] group-hover:text-[#ea580c] transition-colors">
                    {IconComp ? <IconComp className="w-8 h-8" /> : <div className="text-2xl font-bold">{social.platform.charAt(0)}</div>}
                  </div>
                  <p className="text-[14px] font-bold text-[#0f172a]">{social.platform}</p>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

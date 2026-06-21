import { motion } from 'framer-motion'
import { Target, Eye, Heart, Shield, Users, Award, Trophy, Sparkles } from 'lucide-react'
import { Linkedin, Twitter, Instagram } from '@/components/common/SocialIcons'
import SectionHeading from '@/components/common/SectionHeading'
import GlowCard from '@/components/common/GlowCard'
import StatsCounter from '@/components/common/StatsCounter'
import { TEAM_MEMBERS, ACHIEVEMENTS } from '@/constants'

const values = [
  { icon: <Target className="w-6 h-6" />, title: 'Excellence', description: 'We pursue the highest standards in everything we do, from equipment to coaching.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Community', description: 'Building a supportive family that motivates and inspires every member.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Integrity', description: 'Honest guidance, transparent pricing, and genuine care for your well-being.' },
  { icon: <Sparkles className="w-6 h-6" />, title: 'Innovation', description: 'Embracing cutting-edge technology and training methodologies.' },
]

const IconMap: Record<string, any> = {
  Linkedin,
  Twitter,
  Instagram
}

export default function AboutPage() {
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
                <Award className="w-3.5 h-3.5" />
                ESTABLISHED 2010
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-bold text-[#0f172a] mb-6"
            >
              Our <span className="text-[#ea580c]">Story</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[16px] sm:text-lg text-[#64748b] leading-relaxed"
            >
              From a single gym floor in Mumbai to India's most premium fitness chain. 
              IronCore Gym was born from a passion to make world-class fitness accessible to everyone.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlowCard className="h-full">
                <div className="p-8 lg:p-10 h-full flex flex-col justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#ffedd5] flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-[#ea580c]" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#0f172a] mb-4">Our Vision</h3>
                  <p className="text-[15px] text-[#64748b] leading-relaxed">
                    To become India's most trusted and innovative fitness brand, empowering 
                    1 million lives through health, strength, and community by 2030.
                  </p>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlowCard className="h-full">
                <div className="p-8 lg:p-10 h-full flex flex-col justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#e0e7ff] flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-[#6366f1]" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#0f172a] mb-4">Our Mission</h3>
                  <p className="text-[15px] text-[#64748b] leading-relaxed">
                    To provide a premium, inclusive fitness environment with world-class trainers, 
                    cutting-edge technology, and personalized programs that transform lives.
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white border-y border-[#f1f5f9]">
        <div className="container mx-auto px-5 lg:px-8 relative">
          <SectionHeading
            badge="Our Values"
            title="What We Stand For"
            subtitle="The core principles that drive everything we do at IronCore Gym."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard className="h-full">
                  <div className="p-8 text-center h-full flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#ffedd5] flex items-center justify-center mb-6 text-[#ea580c]">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-display font-bold text-[#0f172a] mb-3">{value.title}</h3>
                    <p className="text-[14px] text-[#64748b] leading-relaxed">{value.description}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <StatsCounter value={5000} suffix="+" label="Active Members" icon={<Users className="w-5 h-5 text-[#ea580c]" />} />
            <StatsCounter value={50} suffix="+" label="Expert Trainers" icon={<Award className="w-5 h-5 text-[#ea580c]" />} delay={0.1} />
            <StatsCounter value={10} suffix="" label="Locations" icon={<Trophy className="w-5 h-5 text-[#ea580c]" />} delay={0.2} />
            <StatsCounter value={15} suffix="+" label="Years Experience" icon={<Shield className="w-5 h-5 text-[#ea580c]" />} delay={0.3} />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white border-y border-[#f1f5f9]">
        <div className="container mx-auto px-5 lg:px-8">
          <SectionHeading
            badge="Leadership"
            title="Meet Our Team"
            subtitle="The passionate leaders driving IronCore's mission forward."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard className="h-full flex flex-col bg-white">
                  <div className="overflow-hidden h-64 rounded-t-xl relative group">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#0f172a]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      {member.socialLinks.map((social) => {
                        const IconComp = IconMap[social.icon]
                        return (
                          <a key={social.platform} href={social.url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white text-[#0f172a] flex items-center justify-center hover:bg-[#ea580c] hover:text-white transition-colors shadow-lg">
                            {IconComp ? <IconComp className="w-4 h-4" /> : <div className="text-[12px] font-bold">{social.platform.charAt(0)}</div>}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                  <div className="p-6 text-center flex flex-col flex-1">
                    <h3 className="text-lg font-display font-bold text-[#0f172a]">{member.name}</h3>
                    <p className="text-[13px] font-bold text-[#ea580c] mb-3 uppercase tracking-wider">{member.role}</p>
                    <p className="text-[14px] text-[#64748b] leading-relaxed">{member.bio}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-5 lg:px-8">
          <SectionHeading
            badge="Our Journey"
            title="The IronCore Timeline"
            subtitle="Key milestones that shaped who we are today."
          />

          <div className="max-w-4xl mx-auto relative mt-16">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-[#f1f5f9]" />

            {ACHIEVEMENTS.map((achievement, index) => (
              <motion.div
                key={achievement.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#ea580c] border-4 border-white shadow-sm z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-[12px] font-bold text-white bg-[#ea580c] px-3 py-1 rounded-full mb-3 inline-block">{achievement.year}</span>
                    <h3 className="text-xl font-display font-bold text-[#0f172a] mb-2">{achievement.title}</h3>
                    <p className="text-[14px] text-[#64748b] leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

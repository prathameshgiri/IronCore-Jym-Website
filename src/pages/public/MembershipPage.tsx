import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Check, ArrowRight, Sparkles, Zap, Flame, Crown, Gem } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading'
import GlowCard from '@/components/common/GlowCard'
import { MEMBERSHIP_PLANS } from '@/constants'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' }
  }),
}
import { formatCurrency } from '@/lib/utils'

const compareFeatures = [
  { feature: 'Gym Floor Access', basic: true, premium: true, elite: true, personal: true },
  { feature: 'Basic Equipment', basic: true, premium: true, elite: true, personal: true },
  { feature: 'Locker Facility', basic: true, premium: true, elite: true, personal: true },
  { feature: 'Group Classes', basic: false, premium: true, elite: true, personal: true },
  { feature: 'Swimming Pool', basic: false, premium: true, elite: true, personal: true },
  { feature: 'Sauna & Steam', basic: false, premium: true, elite: true, personal: true },
  { feature: 'Personal Training', basic: false, premium: false, elite: '4 sessions', personal: 'Unlimited' },
  { feature: 'Custom Diet Plan', basic: false, premium: false, elite: true, personal: true },
  { feature: 'Custom Workout Plan', basic: false, premium: false, elite: true, personal: true },
  { feature: 'Spa Access', basic: false, premium: false, elite: true, personal: true },
  { feature: 'VIP Lounge', basic: false, premium: false, elite: true, personal: true },
  { feature: 'Dedicated Trainer', basic: false, premium: false, elite: false, personal: true },
  { feature: '24/7 Trainer Chat', basic: false, premium: false, elite: false, personal: true },
  { feature: 'Competition Prep', basic: false, premium: false, elite: false, personal: true },
]

export default function MembershipPage() {
  const [isYearly, setIsYearly] = useState(false)

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
                PRICING
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-bold text-[#0f172a] mb-6"
            >
              Simple, Transparent <span className="text-[#ea580c]">Plans</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[16px] sm:text-lg text-[#64748b]"
            >
              Flexible membership options designed to match your fitness goals and lifestyle. No hidden fees.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container mx-auto px-5 lg:px-8">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!isYearly ? 'text-[#0f172a] font-semibold' : 'text-[#64748b]'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-11 h-6 rounded-full transition-colors ${isYearly ? 'bg-[#ea580c]' : 'bg-[#cbd5e1]'}`}
            >
              <motion.div
                animate={{ x: isYearly ? 22 : 2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm"
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-[#0f172a] font-semibold' : 'text-[#64748b]'}`}>
              Yearly <span className="text-[10px] font-bold text-[#ea580c] bg-[#ffedd5] px-2 py-0.5 rounded-full ml-1.5">-20%</span>
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {MEMBERSHIP_PLANS.map((plan, index) => (
              <motion.div
                key={plan.id}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="relative h-full">
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ea580c] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap w-max shadow-sm z-10">
                      Most Popular
                    </div>
                  )}
                  <GlowCard className={`h-full flex flex-col ${plan.highlighted ? 'border-[#ea580c] shadow-md' : ''}`}>
                  <div className="p-6 lg:p-8 flex flex-col h-full">
                    <div className="text-3xl mb-3 text-[#ea580c]">
                      {plan.icon === 'Zap' && <Zap className="w-10 h-10" />}
                      {plan.icon === 'Flame' && <Flame className="w-10 h-10" />}
                      {plan.icon === 'Crown' && <Crown className="w-10 h-10" />}
                      {plan.icon === 'Gem' && <Gem className="w-10 h-10" />}
                    </div>
                    <h3 className="text-xl font-display font-bold text-[#0f172a] mb-1">{plan.name}</h3>
                    <p className="text-[13px] text-[#64748b] mb-6">{plan.description}</p>

                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-4xl font-display font-bold text-[#0f172a]">
                        {formatCurrency(isYearly ? plan.yearlyPrice : plan.price)}
                      </span>
                      <span className="text-sm text-[#64748b]">
                        {isYearly ? '/yr' : '/mo'}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-[14px] text-[#475569]">
                          <Check className="w-4 h-4 shrink-0 text-[#ea580c] mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-3 rounded-lg font-semibold text-[14px] transition-all flex items-center justify-center gap-2 group ${
                      plan.highlighted
                        ? 'btn-primary'
                        : 'bg-[#f8fafc] text-[#0f172a] border border-[#e2e8f0] hover:bg-[#f1f5f9]'
                    }`}>
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  </GlowCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5 lg:px-8">
          <SectionHeading
            badge="Compare"
            title="Plan Comparison"
            subtitle="See exactly what's included in each membership tier."
          />

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-[#64748b] border-b border-[#e2e8f0] min-w-[200px]">Feature</th>
                  {MEMBERSHIP_PLANS.map((plan) => (
                    <th key={plan.id} className="p-4 text-center border-b border-[#e2e8f0] min-w-[120px]">
                      <span className="text-[15px] font-bold text-[#0f172a]">{plan.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareFeatures.map((row, index) => (
                  <tr key={row.feature} className="border-b border-[#f1f5f9] hover:bg-[#f8fafc] transition-colors">
                    <td className="p-4 text-[14px] text-[#475569] font-medium">{row.feature}</td>
                    {['basic', 'premium', 'elite', 'personal'].map((planKey) => {
                      const value = row[planKey as keyof typeof row]
                      return (
                        <td key={planKey} className="p-4 text-center">
                          {value === true ? (
                            <Check className="w-5 h-5 text-[#ea580c] mx-auto" />
                          ) : value === false ? (
                            <span className="text-[#cbd5e1]">—</span>
                          ) : (
                          <span className="text-[13px] text-[#ea580c] font-semibold">{value}</span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

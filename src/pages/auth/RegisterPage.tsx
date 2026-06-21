import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Dumbbell, Mail, Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react'
import GlowCard from '@/components/common/GlowCard'

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type RegisterForm = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterForm) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Register attempt:', data)
  }

  return (
    <div className="bg-[#fffcf9] min-h-screen pt-24 pb-20 flex items-center justify-center px-5 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl"
      >
        <GlowCard className="overflow-hidden bg-white shadow-xl border-[#e2e8f0]">
          <div className="grid lg:grid-cols-2">
            {/* Left: Form */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
              <div className="mb-10 lg:hidden flex justify-center">
                <div className="w-12 h-12 rounded-xl bg-[#ea580c] flex items-center justify-center shadow-md">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="text-center lg:text-left mb-10">
                <h1 className="text-3xl font-display font-bold text-[#0f172a] mb-2">Join IronCore</h1>
                <p className="text-[#64748b] text-[15px]">Create your account and start transforming today.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-[13px] font-bold text-[#475569] mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-[15px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all shadow-sm"
                    />
                  </div>
                  {errors.name && <p className="text-[12px] text-[#ef4444] mt-1.5 font-medium">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#475569] mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="Your Email Id"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-[15px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all shadow-sm"
                    />
                  </div>
                  {errors.email && <p className="text-[12px] text-[#ef4444] mt-1.5 font-medium">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#475569] mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                    <input
                      {...register('password')}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-[15px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-[#475569] transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-[12px] text-[#ef4444] mt-1.5 font-medium">{errors.password.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full btn-primary py-4 text-[15px] flex items-center justify-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-8 text-center text-[14px] text-[#64748b]">
                Already have an account?{' '}
                <Link to="/login" className="font-bold text-[#ea580c] hover:text-[#c2410c] transition-colors">
                  Log In
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative hidden lg:block h-full min-h-[600px] bg-[#0f172a] order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1000&fit=crop"
                alt="Join IronCore Gym"
                className="absolute inset-0 w-full h-full object-cover opacity-60 transform -scale-x-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <div className="w-12 h-12 rounded-xl bg-[#ea580c] flex items-center justify-center mb-6 shadow-lg">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-3">Push Your Limits</h2>
                <p className="text-[#cbd5e1] text-[15px] leading-relaxed">
                  Join a community of thousands who have transformed their lives through dedication and premium coaching.
                </p>
              </div>
            </div>
          </div>
        </GlowCard>
      </motion.div>
    </div>
  )
}

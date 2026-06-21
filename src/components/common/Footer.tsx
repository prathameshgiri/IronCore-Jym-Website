import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Dumbbell, Mail, Phone, MapPin, Heart } from 'lucide-react'
import { NAV_ITEMS, SOCIAL_LINKS, CONTACT_INFO } from '@/constants'
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

const footerLinks = [
  {
    title: 'Quick Links',
    links: NAV_ITEMS.slice(0, 4),
  },
  {
    title: 'Programs',
    links: [
      { label: 'CrossFit', href: '/classes' },
      { label: 'Yoga', href: '/classes' },
      { label: 'HIIT', href: '/classes' },
      { label: 'Strength Training', href: '/classes' },
      { label: 'Zumba', href: '/classes' },
      { label: 'Personal Training', href: '/membership' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQs', href: '/#faq' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Careers', href: '/careers' },
    ],
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-white border-t border-[#f1f5f9] overflow-hidden pt-20">
      <div className="relative container mx-auto px-5 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 lg:pr-10">
            <Link to="/" className="flex items-center gap-3 mb-6 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-[#ea580c] flex items-center justify-center shadow-lg shadow-[#ea580c]/20">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-display font-bold text-[#0f172a] tracking-tight">IronCore</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#64748b] -mt-0.5">
                  Gym & Fitness
                </span>
              </div>
            </Link>
            <p className="text-[#475569] text-[15px] leading-relaxed mb-8 max-w-sm">
              Transform your body, elevate your mind. IronCore Gym is your premium destination 
              for world-class fitness training, expert coaching, and a community that inspires greatness.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 text-sm text-[#475569] hover:text-[#ea580c] transition-colors">
                <Phone className="w-4 h-4 text-[#ea580c]" />
                {CONTACT_INFO.phone}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-sm text-[#475569] hover:text-[#ea580c] transition-colors">
                <Mail className="w-4 h-4 text-[#ea580c]" />
                {CONTACT_INFO.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-[#475569] max-w-[280px]">
                <MapPin className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = getSocialIcon(social.icon)
                return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center text-[#475569] hover:text-white hover:bg-[#ea580c] hover:border-[#ea580c] shadow-sm transition-all"
                  aria-label={social.platform}
                >
                  <IconComponent className="w-4 h-4" />
                </motion.a>
              )})}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold font-display mb-6 text-[#0f172a] uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-[15px] text-[#475569] hover:text-[#ea580c] transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]/0 group-hover:bg-[#ea580c] transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#f1f5f9] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748b] font-medium tracking-wide">
            © {currentYear} IronCore Gym. All rights reserved.
          </p>
          <p className="text-xs text-[#64748b] font-medium tracking-wide flex items-center gap-1.5">
            Build with <a href="https://build.prathameshgiri.in/" target="_blank" rel="noopener noreferrer" className="text-[#ea580c] hover:underline font-bold transition-colors">Prathamesh Giri</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

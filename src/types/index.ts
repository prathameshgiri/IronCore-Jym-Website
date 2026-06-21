// ===== Navigation =====
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

// ===== Membership Plans =====
export interface MembershipPlan {
  id: string
  name: string
  price: number
  yearlyPrice: number
  duration: string
  features: string[]
  highlighted: boolean
  icon: string
  color: string
  description: string
}

// ===== Trainer =====
export interface Trainer {
  id: string
  name: string
  specialty: string
  experience: string
  certifications: string[]
  image: string
  rating: number
  bio: string
  schedule: TrainerSchedule[]
  socialLinks: SocialLink[]
}

export interface TrainerSchedule {
  day: string
  time: string
  class: string
}

// ===== Class =====
export interface GymClass {
  id: string
  name: string
  description: string
  trainer: string
  duration: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  schedule: string
  maxCapacity: number
  enrolled: number
  image: string
  category: string
  calories: string
}

// ===== Testimonial =====
export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  image: string
  rating: number
  transformation?: {
    before: string
    after: string
  }
}

// ===== Blog =====
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  authorImage: string
  date: string
  category: string
  readTime: string
  tags: string[]
}

// ===== Stats =====
export interface Stat {
  label: string
  value: number
  suffix: string
  icon: string
}

// ===== FAQ =====
export interface FAQ {
  question: string
  answer: string
}

// ===== Gallery =====
export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: 'images' | 'videos' | 'events' | 'transformations'
  type: 'image' | 'video'
}

// ===== Contact =====
export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

// ===== Social Links =====
export interface SocialLink {
  platform: string
  url: string
  icon: string
}

// ===== Team Member =====
export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  socialLinks: SocialLink[]
}

// ===== Achievement =====
export interface Achievement {
  year: string
  title: string
  description: string
}

// ===== User =====
export interface User {
  id: string
  name: string
  email: string
  phone: string
  role: 'member' | 'trainer' | 'admin' | 'super-admin'
  avatar: string
  membershipPlan?: string
  joinDate: string
}

// ===== BMI =====
export interface BMIResult {
  bmi: number
  category: string
  color: string
  advice: string
}

// ===== Success Story =====
export interface SuccessStory {
  id: string
  name: string
  age: number
  duration: string
  weightLost: string
  story: string
  beforeImage: string
  afterImage: string
  quote: string
}

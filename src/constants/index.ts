import type { NavItem, MembershipPlan, Stat, FAQ, GymClass, Trainer, Testimonial, BlogPost, TeamMember, Achievement, SuccessStory } from '@/types'

// ===== Navigation =====
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/membership' },
  { label: 'Trainers', href: '/trainers' },
  { label: 'Classes', href: '/classes' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

// ===== Statistics =====
export const STATS: Stat[] = [
  { label: 'Active Members', value: 5000, suffix: '+', icon: 'Users' },
  { label: 'Expert Trainers', value: 50, suffix: '+', icon: 'Dumbbell' },
  { label: 'Classes Weekly', value: 120, suffix: '+', icon: 'Calendar' },
  { label: 'Years Experience', value: 15, suffix: '+', icon: 'Award' },
]

// ===== Membership Plans =====
export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 1499,
    yearlyPrice: 14999,
    duration: '/month',
    icon: 'Zap',
    color: '#3b82f6',
    highlighted: false,
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Access to gym floor',
      'Basic equipment usage',
      'Locker facility',
      'Free WiFi',
      '2 Guest passes/month',
      'Fitness assessment',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 2999,
    yearlyPrice: 29999,
    duration: '/month',
    icon: 'Flame',
    color: '#ff6b35',
    highlighted: true,
    description: 'Most popular choice for serious fitness enthusiasts',
    features: [
      'Everything in Basic',
      'All group classes',
      'Swimming pool access',
      'Sauna & steam room',
      'Personal locker',
      'Nutrition consultation',
      '4 Guest passes/month',
      'Progress tracking app',
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 4999,
    yearlyPrice: 49999,
    duration: '/month',
    icon: 'Crown',
    color: '#a855f7',
    highlighted: false,
    description: 'The ultimate fitness experience with premium perks',
    features: [
      'Everything in Premium',
      '4 PT sessions/month',
      'Custom diet plan',
      'Custom workout plan',
      'Priority booking',
      'Spa access',
      'Unlimited guest passes',
      'VIP lounge access',
      'Recovery zone access',
      'Quarterly health checkup',
    ],
  },
  {
    id: 'personal',
    name: 'Personal Training',
    price: 7999,
    yearlyPrice: 79999,
    duration: '/month',
    icon: 'Gem',
    color: '#ec4899',
    highlighted: false,
    description: 'One-on-one dedicated training with elite coaches',
    features: [
      'Everything in Elite',
      'Unlimited PT sessions',
      'Dedicated personal trainer',
      'Customized meal plans',
      'Weekly progress review',
      '24/7 trainer chat support',
      'Competition prep',
      'Supplement guidance',
      'Body composition analysis',
      'Video session recordings',
      'Priority scheduling',
      'Exclusive workshops',
    ],
  },
]

// ===== Trainers =====
export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Marcus Rodriguez',
    specialty: 'Strength & Conditioning',
    experience: '12 years',
    certifications: ['NSCA-CSCS', 'ACE-CPT', 'Precision Nutrition'],
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop',
    rating: 4.9,
    bio: 'Former professional athlete turned elite strength coach. Specializes in building functional strength and athletic performance.',
    schedule: [
      { day: 'Mon-Fri', time: '6:00 AM - 2:00 PM', class: 'Strength Training' },
      { day: 'Sat', time: '8:00 AM - 12:00 PM', class: 'CrossFit' },
    ],
    socialLinks: [
      { platform: 'instagram', url: '#', icon: 'Instagram' },
      { platform: 'twitter', url: '#', icon: 'Twitter' },
    ],
  },
  {
    id: '2',
    name: 'Sarah Chen',
    specialty: 'Yoga & Mindfulness',
    experience: '10 years',
    certifications: ['RYT-500', 'Meditation Teacher', 'Prenatal Yoga'],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop',
    rating: 4.8,
    bio: 'Internationally certified yoga instructor bringing harmony to body and mind through ancient practices and modern science.',
    schedule: [
      { day: 'Mon-Wed-Fri', time: '7:00 AM - 8:00 AM', class: 'Vinyasa Yoga' },
      { day: 'Tue-Thu', time: '6:00 PM - 7:00 PM', class: 'Power Yoga' },
    ],
    socialLinks: [
      { platform: 'instagram', url: '#', icon: 'Instagram' },
    ],
  },
  {
    id: '3',
    name: 'James Thompson',
    specialty: 'HIIT & CrossFit',
    experience: '8 years',
    certifications: ['CrossFit L3', 'NASM-CPT', 'TRX Certified'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop',
    rating: 4.9,
    bio: 'High-energy CrossFit coach dedicated to pushing boundaries. Former military fitness instructor with a passion for intense training.',
    schedule: [
      { day: 'Mon-Fri', time: '5:00 AM - 1:00 PM', class: 'CrossFit' },
      { day: 'Sat', time: '7:00 AM - 10:00 AM', class: 'HIIT Bootcamp' },
    ],
    socialLinks: [
      { platform: 'instagram', url: '#', icon: 'Instagram' },
      { platform: 'youtube', url: '#', icon: 'Youtube' },
    ],
  },
  {
    id: '4',
    name: 'Priya Sharma',
    specialty: 'Zumba & Dance Fitness',
    experience: '7 years',
    certifications: ['Zumba ZIN', 'AFAA Group Fitness', 'Bollywood Dance'],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop',
    rating: 4.7,
    bio: 'Energetic dance fitness instructor who makes workouts feel like a party. Combines Latin rhythms with Bollywood beats.',
    schedule: [
      { day: 'Mon-Wed-Fri', time: '5:00 PM - 6:00 PM', class: 'Zumba' },
      { day: 'Tue-Thu', time: '6:00 PM - 7:00 PM', class: 'Dance Fitness' },
    ],
    socialLinks: [
      { platform: 'instagram', url: '#', icon: 'Instagram' },
    ],
  },
  {
    id: '5',
    name: 'David Kim',
    specialty: 'Cardio & Endurance',
    experience: '9 years',
    certifications: ['ACE-CPT', 'UESCA Running Coach', 'First Aid'],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop',
    rating: 4.8,
    bio: 'Marathon runner and endurance specialist. Helps clients build cardiovascular health and running performance from 5K to ultra marathons.',
    schedule: [
      { day: 'Mon-Fri', time: '6:00 AM - 12:00 PM', class: 'Cardio Blast' },
      { day: 'Sun', time: '6:00 AM - 9:00 AM', class: 'Long Run Club' },
    ],
    socialLinks: [
      { platform: 'instagram', url: '#', icon: 'Instagram' },
      { platform: 'twitter', url: '#', icon: 'Twitter' },
    ],
  },
  {
    id: '6',
    name: 'Elena Martinez',
    specialty: 'Nutrition & Weight Management',
    experience: '11 years',
    certifications: ['RD', 'ISSN-SNS', 'Precision Nutrition L2'],
    image: 'https://images.unsplash.com/photo-1609899537878-48db7b3b63f1?w=400&h=500&fit=crop',
    rating: 4.9,
    bio: 'Registered dietitian and sports nutritionist who transforms bodies through science-backed nutrition strategies and lifestyle coaching.',
    schedule: [
      { day: 'Mon-Fri', time: '10:00 AM - 6:00 PM', class: 'Nutrition Consultation' },
    ],
    socialLinks: [
      { platform: 'instagram', url: '#', icon: 'Instagram' },
      { platform: 'linkedin', url: '#', icon: 'Linkedin' },
    ],
  },
]

// ===== Classes =====
export const CLASSES: GymClass[] = [
  {
    id: '1',
    name: 'Power Yoga',
    description: 'Build strength, flexibility, and inner peace through dynamic yoga sequences designed to challenge body and mind.',
    trainer: 'Sarah Chen',
    duration: '60 min',
    difficulty: 'Intermediate',
    schedule: 'Mon, Wed, Fri – 7:00 AM',
    maxCapacity: 25,
    enrolled: 18,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
    category: 'Yoga',
    calories: '300-400',
  },
  {
    id: '2',
    name: 'Cardio Blast',
    description: 'High-energy cardiovascular workout combining running, cycling, and plyometric exercises for maximum calorie burn.',
    trainer: 'David Kim',
    duration: '45 min',
    difficulty: 'Advanced',
    schedule: 'Mon-Fri – 6:00 AM',
    maxCapacity: 30,
    enrolled: 25,
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&h=400&fit=crop',
    category: 'Cardio',
    calories: '500-700',
  },
  {
    id: '3',
    name: 'CrossFit WOD',
    description: 'Constantly varied functional movements performed at high intensity. Build strength, endurance, and mental toughness.',
    trainer: 'James Thompson',
    duration: '60 min',
    difficulty: 'Advanced',
    schedule: 'Mon-Sat – 5:00 AM',
    maxCapacity: 20,
    enrolled: 17,
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=400&fit=crop',
    category: 'CrossFit',
    calories: '600-800',
  },
  {
    id: '4',
    name: 'Strength Foundations',
    description: 'Master the fundamental compound lifts with progressive overload programming for maximum muscle growth.',
    trainer: 'Marcus Rodriguez',
    duration: '75 min',
    difficulty: 'Beginner',
    schedule: 'Tue, Thu – 10:00 AM',
    maxCapacity: 15,
    enrolled: 12,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop',
    category: 'Strength Training',
    calories: '400-500',
  },
  {
    id: '5',
    name: 'Zumba Party',
    description: 'Dance your way to fitness with infectious Latin and Bollywood rhythms. No dance experience required!',
    trainer: 'Priya Sharma',
    duration: '60 min',
    difficulty: 'Beginner',
    schedule: 'Mon, Wed, Fri – 5:00 PM',
    maxCapacity: 35,
    enrolled: 30,
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&h=400&fit=crop',
    category: 'Zumba',
    calories: '400-600',
  },
  {
    id: '6',
    name: 'HIIT Inferno',
    description: 'Maximum effort intervals with strategic rest periods. Torch calories and boost metabolism for hours post-workout.',
    trainer: 'James Thompson',
    duration: '30 min',
    difficulty: 'Advanced',
    schedule: 'Tue, Thu, Sat – 6:00 AM',
    maxCapacity: 25,
    enrolled: 22,
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop',
    category: 'HIIT',
    calories: '500-700',
  },
]

// ===== Testimonials =====
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Patel',
    role: 'Lost 25kg in 6 months',
    content: 'IronCore Gym completely transformed my life. The trainers are world-class and the community is incredibly supportive. I went from barely being able to run for 5 minutes to completing a half marathon!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    rating: 5,
  },
  {
    id: '2',
    name: 'Anita Desai',
    role: 'Premium Member – 2 Years',
    content: 'The facilities are absolutely top-notch. From the state-of-the-art equipment to the immaculate locker rooms, every detail speaks of luxury. Worth every penny of the premium membership.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michael Chang',
    role: 'CrossFit Enthusiast',
    content: "Coach James is an absolute beast and an incredible motivator. The CrossFit program here is the best I've experienced, and I've trained at gyms across three countries. The community pushes you to be your best.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    rating: 5,
  },
  {
    id: '4',
    name: 'Sneha Kapoor',
    role: 'Yoga Student – 1 Year',
    content: "Sarah's yoga classes are a perfect blend of challenge and serenity. I've seen remarkable improvement in my flexibility, strength, and mental clarity. The studio environment is absolutely peaceful.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    rating: 4,
  },
]

// ===== Blog Posts =====
export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '10 Compound Exercises That Build Serious Muscle',
    excerpt: 'Discover the most effective compound movements that target multiple muscle groups simultaneously for maximum gains.',
    content: '',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop',
    author: 'Marcus Rodriguez',
    authorImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=100&h=100&fit=crop',
    date: '2025-06-15',
    category: 'Workout Guides',
    readTime: '8 min read',
    tags: ['strength', 'muscle building', 'compound exercises'],
  },
  {
    id: '2',
    title: 'The Ultimate Guide to Post-Workout Nutrition',
    excerpt: 'What you eat after training is crucial for recovery and growth. Learn the science-backed nutrition strategies.',
    content: '',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop',
    author: 'Elena Martinez',
    authorImage: 'https://images.unsplash.com/photo-1609899537878-48db7b3b63f1?w=100&h=100&fit=crop',
    date: '2025-06-12',
    category: 'Diet Tips',
    readTime: '6 min read',
    tags: ['nutrition', 'recovery', 'protein'],
  },
  {
    id: '3',
    title: 'HIIT vs Steady-State Cardio: Which Burns More Fat?',
    excerpt: 'The debate continues. We break down the science behind both training methods and reveal the optimal approach.',
    content: '',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&h=400&fit=crop',
    author: 'David Kim',
    authorImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=100&h=100&fit=crop',
    date: '2025-06-08',
    category: 'Fitness Articles',
    readTime: '10 min read',
    tags: ['HIIT', 'cardio', 'fat loss'],
  },
  {
    id: '4',
    title: 'Yoga for Athletes: Flexibility Meets Performance',
    excerpt: 'How incorporating yoga into your training routine can enhance athletic performance and prevent injuries.',
    content: '',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop',
    author: 'Sarah Chen',
    authorImage: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=100&h=100&fit=crop',
    date: '2025-06-05',
    category: 'Fitness Articles',
    readTime: '7 min read',
    tags: ['yoga', 'flexibility', 'recovery'],
  },
  {
    id: '5',
    title: 'Building a Home Gym: Essential Equipment Guide',
    excerpt: 'Everything you need to set up an effective home gym without breaking the bank. Expert recommendations inside.',
    content: '',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=400&fit=crop',
    author: 'James Thompson',
    authorImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=100&h=100&fit=crop',
    date: '2025-06-01',
    category: 'Workout Guides',
    readTime: '12 min read',
    tags: ['home gym', 'equipment', 'beginner'],
  },
  {
    id: '6',
    title: '7-Day Meal Prep Guide for Muscle Gain',
    excerpt: 'A complete weekly meal prep blueprint designed for lean muscle gain with easy-to-follow recipes and macro breakdowns.',
    content: '',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop',
    author: 'Elena Martinez',
    authorImage: 'https://images.unsplash.com/photo-1609899537878-48db7b3b63f1?w=100&h=100&fit=crop',
    date: '2025-05-28',
    category: 'Diet Tips',
    readTime: '15 min read',
    tags: ['meal prep', 'muscle gain', 'nutrition'],
  },
]

// ===== FAQs =====
export const FAQS: FAQ[] = [
  {
    question: 'What are the gym operating hours?',
    answer: 'IronCore Gym is open Monday to Saturday from 5:00 AM to 11:00 PM, and Sundays from 6:00 AM to 8:00 PM. Our premium members enjoy 24/7 access with their key card.',
  },
  {
    question: 'Can I freeze my membership?',
    answer: 'Yes! You can freeze your membership for up to 30 days per year at no additional cost. Simply contact our front desk or use the member portal to request a freeze.',
  },
  {
    question: 'Do you offer personal training?',
    answer: 'Absolutely! We have certified personal trainers specializing in strength training, weight loss, sports performance, yoga, and more. Personal training sessions can be booked individually or as part of our Elite and Personal Training membership plans.',
  },
  {
    question: 'Is there a joining fee?',
    answer: 'We occasionally waive the joining fee during promotional periods. Standard joining fee is ₹999, which includes a fitness assessment, gym orientation, and a starter kit.',
  },
  {
    question: 'What amenities are included?',
    answer: 'All memberships include access to our state-of-the-art gym floor, locker rooms, and free WiFi. Premium members also get access to the swimming pool, sauna, steam room, and group classes.',
  },
  {
    question: 'Can I bring a guest?',
    answer: 'Yes! Basic members get 2 guest passes per month, Premium members get 4, and Elite/Personal Training members get unlimited guest passes. Additional guest passes can be purchased at the front desk.',
  },
  {
    question: 'Do you offer online classes?',
    answer: 'Yes! We offer live-streamed classes and on-demand workout videos through our member portal. Premium and above members get full access to our online class library.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Monthly memberships can be cancelled with 30 days notice. Annual memberships can be cancelled after the minimum commitment period with a small processing fee. No questions asked.',
  },
]

// ===== Team Members =====
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Arjun Mehta',
    role: 'Founder & CEO',
    bio: 'Former national-level bodybuilder with a vision to revolutionize the fitness industry in India.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'Linkedin' },
      { platform: 'twitter', url: '#', icon: 'Twitter' },
    ],
  },
  {
    id: '2',
    name: 'Kavita Reddy',
    role: 'Head of Operations',
    bio: 'MBA from IIM-B with 15 years of experience in fitness industry management and operations.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'Linkedin' },
    ],
  },
  {
    id: '3',
    name: 'Dr. Vikram Singh',
    role: 'Chief Medical Officer',
    bio: 'Sports medicine specialist ensuring our training programs are safe, effective, and scientifically backed.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop',
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'Linkedin' },
    ],
  },
  {
    id: '4',
    name: 'Neha Gupta',
    role: 'Marketing Director',
    bio: 'Digital marketing expert who has grown IronCore from a single location to a recognized national brand.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'Linkedin' },
      { platform: 'instagram', url: '#', icon: 'Instagram' },
    ],
  },
]

// ===== Achievements =====
export const ACHIEVEMENTS: Achievement[] = [
  { year: '2010', title: 'Founded IronCore Gym', description: 'Started with a single 2000 sq ft facility in Mumbai with just 3 trainers and a dream.' },
  { year: '2013', title: 'First Expansion', description: 'Opened our second location in Pune, growing to 1000+ active members.' },
  { year: '2016', title: 'Best Gym Award', description: 'Won "Best Fitness Center" award from the Indian Health & Fitness Association.' },
  { year: '2018', title: 'Digital Transformation', description: 'Launched our mobile app and digital member management system.' },
  { year: '2020', title: 'Virtual Fitness Pioneer', description: 'Became the first gym chain in India to offer live-streamed classes during the pandemic.' },
  { year: '2022', title: '10 Locations Milestone', description: 'Expanded to 10 locations across Maharashtra with 5000+ active members.' },
  { year: '2024', title: 'AI-Powered Fitness', description: 'Integrated AI-powered personal training and nutrition recommendations.' },
  { year: '2025', title: 'National Expansion', description: 'Expanding to 25 locations across India with plans for international presence.' },
]

// ===== Success Stories =====
export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: '1',
    name: 'Amit Verma',
    age: 32,
    duration: '8 months',
    weightLost: '30 kg',
    story: 'From 110kg to 80kg. Amit completely transformed his lifestyle with dedication and the right guidance from our trainers.',
    beforeImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop',
    quote: "IronCore didn't just change my body — it changed who I am as a person.",
  },
  {
    id: '2',
    name: 'Pooja Nair',
    age: 28,
    duration: '6 months',
    weightLost: '20 kg',
    story: 'Pooja overcame PCOS-related weight gain through a combination of strength training and nutrition coaching at IronCore.',
    beforeImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop',
    quote: 'The trainers here understand that fitness is not one-size-fits-all. They created a plan specifically for my body.',
  },
]

// ===== Social Links =====
export const SOCIAL_LINKS = [
  { platform: 'Instagram', url: 'https://instagram.com/ironcoregym', icon: 'Instagram' },
  { platform: 'Facebook', url: 'https://facebook.com/ironcoregym', icon: 'Facebook' },
  { platform: 'Twitter', url: 'https://twitter.com/ironcoregym', icon: 'Twitter' },
  { platform: 'YouTube', url: 'https://youtube.com/ironcoregym', icon: 'Youtube' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/ironcoregym', icon: 'Linkedin' },
]

// ===== Contact Info =====
export const CONTACT_INFO = {
  address: '123 Fitness Street, Andheri West, Mumbai, Maharashtra 400058',
  phone: '+91 98765 43210',
  email: 'info@ironcoregym.com',
  hours: {
    weekday: 'Mon - Sat: 5:00 AM - 11:00 PM',
    weekend: 'Sunday: 6:00 AM - 8:00 PM',
  },
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.682!2d72.837!3d19.136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA4JzA5LjYiTiA3MsKwNTAnMTMuMiJF!5e0!3m2!1sen!2sin!4v1234567890',
}

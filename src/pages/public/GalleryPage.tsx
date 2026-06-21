import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

const categories = ['All', 'Gym Floor', 'Classes', 'Events', 'Transformations']

const galleryItems = [
  { id: '1', src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop', alt: 'Gym floor overview', category: 'Gym Floor' },
  { id: '2', src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop', alt: 'Weight training area', category: 'Gym Floor' },
  { id: '3', src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop', alt: 'Group fitness class', category: 'Classes' },
  { id: '4', src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop', alt: 'Yoga session', category: 'Classes' },
  { id: '5', src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop', alt: 'HIIT workout', category: 'Classes' },
  { id: '6', src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop', alt: 'Deadlift training', category: 'Gym Floor' },
  { id: '7', src: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&h=600&fit=crop', alt: 'Cardio zone', category: 'Gym Floor' },
  { id: '8', src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=400&fit=crop', alt: 'CrossFit competition', category: 'Events' },
  { id: '9', src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=600&fit=crop', alt: 'Transformation result', category: 'Transformations' },
  { id: '10', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop', alt: 'Home gym setup', category: 'Gym Floor' },
  { id: '11', src: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&h=600&fit=crop', alt: 'Dance fitness class', category: 'Classes' },
  { id: '12', src: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=400&fit=crop', alt: 'Personal training', category: 'Gym Floor' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredItems.length)
    }
  }

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length)
    }
  }

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
                VISUAL TOUR
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-bold text-[#0f172a] mb-6"
            >
              Our <span className="text-[#ea580c]">Gallery</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[16px] sm:text-lg text-[#64748b]"
            >
              Take a visual tour of our world-class facilities, energetic classes, and inspiring transformations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-5 lg:px-8">
          {/* Filters */}
          <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-[14px] font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-[#ea580c] text-white shadow-md'
                    : 'bg-white border border-[#e2e8f0] text-[#475569] hover:bg-[#f8fafc] hover:border-[#cbd5e1]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-2xl bg-white shadow-sm border border-[#e2e8f0]"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-[#0f172a]/30 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-[#ea580c] shadow-lg">
                        <Camera className="w-6 h-6" />
                      </div>
                    </motion.div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0f172a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[15px] text-white font-bold mb-0.5">{item.alt}</p>
                    <p className="text-[12px] font-semibold text-[#ffedd5]">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0f172a]/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filteredItems[selectedIndex].src}
              alt={filteredItems[selectedIndex].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 text-center text-white bg-black/40 px-6 py-2 rounded-full backdrop-blur-md">
              <p className="text-[14px] font-bold">{filteredItems[selectedIndex].alt}</p>
              <p className="text-[12px] text-white/70 mt-0.5 font-medium">{selectedIndex + 1} / {filteredItems.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

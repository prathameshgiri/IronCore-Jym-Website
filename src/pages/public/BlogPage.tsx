import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, BookOpen, ArrowRight, Clock, Tag, Sparkles } from 'lucide-react'
import GlowCard from '@/components/common/GlowCard'
import { BLOG_POSTS } from '@/constants'

const blogCategories = ['All', 'Workout Guides', 'Diet Tips', 'Fitness Articles']

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchCategory = activeCategory === 'All' || post.category === activeCategory
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  const featuredPost = BLOG_POSTS[0]

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
                FITNESS KNOWLEDGE
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-bold text-[#0f172a] mb-6"
            >
              Our <span className="text-[#ea580c]">Blog</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[16px] sm:text-lg text-[#64748b] mb-10"
            >
              Expert articles, workout guides, and nutrition tips to fuel your fitness journey.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-xl mx-auto relative"
            >
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-5 py-4 rounded-full bg-white border border-[#e2e8f0] text-[15px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/20 shadow-sm transition-all"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-5 lg:px-8">
          <GlowCard className="overflow-hidden bg-white border-[#e2e8f0]">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="overflow-hidden relative min-h-[350px] lg:min-h-full">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-[11px] font-bold text-[#ea580c] bg-[#ffedd5] px-3 py-1 rounded-full w-fit mb-6 tracking-wider uppercase">
                  Featured Article
                </span>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-display font-bold text-[#0f172a] mb-4 hover:text-[#ea580c] transition-colors cursor-pointer leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-[15px] text-[#64748b] mb-8 leading-relaxed">{featuredPost.excerpt}</p>
                
                <div className="flex items-center justify-between mb-8 pb-8 border-b border-[#f1f5f9]">
                  <div className="flex items-center gap-4">
                    <img src={featuredPost.authorImage} alt={featuredPost.author} className="w-12 h-12 rounded-full object-cover shadow-sm border border-[#e2e8f0]" />
                    <div>
                      <p className="text-[14px] font-bold text-[#0f172a]">{featuredPost.author}</p>
                      <p className="text-[12px] font-medium text-[#64748b]">{featuredPost.date} · {featuredPost.readTime}</p>
                    </div>
                  </div>
                </div>
                
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="btn-primary inline-flex items-center justify-center gap-2 w-fit px-8 py-3.5"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white border-t border-[#f1f5f9] mt-8">
        <div className="container mx-auto px-5 lg:px-8">
          {/* Categories */}
          <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-[#ea580c] text-white shadow-md'
                    : 'bg-white border border-[#e2e8f0] text-[#475569] hover:bg-[#f8fafc] hover:border-[#cbd5e1]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlowCard className="h-full flex flex-col bg-white">
                  <div className="overflow-hidden h-56 relative rounded-t-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[11px] font-bold text-[#ea580c] bg-[#ffedd5] px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#64748b]">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-display font-bold text-[#0f172a] mb-3 line-clamp-2 hover:text-[#ea580c] transition-colors cursor-pointer flex-1">
                      {post.title}
                    </h3>

                    <p className="text-[14px] text-[#475569] line-clamp-2 mb-6 leading-relaxed">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#f8fafc] border border-[#e2e8f0] text-[#475569] flex items-center gap-1.5">
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#f1f5f9]">
                      <div className="flex items-center gap-3">
                        <img src={post.authorImage} alt={post.author} className="w-9 h-9 rounded-full object-cover border border-[#e2e8f0]" />
                        <div>
                          <p className="text-[13px] font-bold text-[#0f172a]">{post.author}</p>
                          <p className="text-[11px] font-medium text-[#64748b]">{post.date}</p>
                        </div>
                      </div>
                      <Link to={`/blog/${post.id}`} className="text-[13px] font-bold text-[#ea580c] hover:text-[#c2410c] transition-colors flex items-center gap-1.5 group">
                        Read
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-24 bg-white rounded-2xl border border-[#e2e8f0]">
              <BookOpen className="w-16 h-16 text-[#cbd5e1] mx-auto mb-4" />
              <p className="text-[16px] font-medium text-[#64748b]">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

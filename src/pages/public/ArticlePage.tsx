import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Tag, Share2, Bookmark } from 'lucide-react'
import { BLOG_POSTS } from '@/constants'

export default function ArticlePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const article = BLOG_POSTS.find(p => p.id === id)

  if (!article) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-[#fffcf9]">
        <h1 className="text-3xl font-display font-bold text-[#0f172a] mb-4">Article Not Found</h1>
        <p className="text-[#64748b] mb-8">The blog post you are looking for does not exist.</p>
        <button onClick={() => navigate('/blog')} className="btn-primary">Back to Blog</button>
      </div>
    )
  }

  return (
    <div className="bg-[#fffcf9] min-h-screen pt-24 pb-20">
      
      {/* Article Header */}
      <div className="container mx-auto px-5 lg:px-8 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-[#64748b] hover:text-[#ea580c] font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[12px] font-bold text-[#ea580c] bg-[#ffedd5] px-3 py-1.5 rounded-full uppercase tracking-wider">
              {article.category}
            </span>
            <div className="flex items-center gap-1.5 text-[13px] font-medium text-[#64748b]">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-[#0f172a] leading-[1.1] mb-6">
            {article.title}
          </h1>
          
          <p className="text-lg md:text-xl text-[#64748b] leading-relaxed mb-8">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between py-6 border-y border-[#e2e8f0]">
            <div className="flex items-center gap-4">
              <img src={article.authorImage} alt={article.author} className="w-12 h-12 rounded-full object-cover shadow-sm" />
              <div>
                <p className="text-[15px] font-bold text-[#0f172a]">{article.author}</p>
                <p className="text-[13px] text-[#64748b]">{article.date}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-[#f8fafc] flex items-center justify-center text-[#64748b] hover:text-[#ea580c] hover:bg-[#ffedd5] transition-colors">
                <Bookmark className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#f8fafc] flex items-center justify-center text-[#64748b] hover:text-[#ea580c] hover:bg-[#ffedd5] transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Hero Image */}
      <div className="container mx-auto px-5 lg:px-8 max-w-5xl mb-12">
        <div className="rounded-3xl overflow-hidden aspect-video bg-gray-100">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-5 lg:px-8 max-w-3xl">
        <article className="prose prose-lg prose-slate max-w-none text-[#334155] leading-loose">
          
          {/* Simulated Rich Text Content */}
          <p className="text-xl leading-relaxed mb-8">
            Whether you are a seasoned athlete or just starting your fitness journey, understanding the fundamental mechanics of {article.category.toLowerCase()} is critical to achieving your goals. In this comprehensive guide, we'll break down exactly what you need to know to optimize your results and prevent injuries.
          </p>

          <h2 className="text-2xl font-bold text-[#0f172a] mt-12 mb-6">The Core Philosophy</h2>
          <p className="mb-6">
            The foundation of any successful fitness regimen lies in consistency and progressive overload. You can have the most scientifically sound program in the world, but if you don't execute it consistently, you will not see results. It is essential to focus on mastering the basics before attempting complex variations.
          </p>
          
          <div className="my-10 p-8 rounded-2xl bg-[#f8fafc] border-l-4 border-[#ea580c]">
            <p className="text-xl italic font-medium text-[#0f172a] m-0">
              "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come."
            </p>
          </div>

          <h3 className="text-xl font-bold text-[#0f172a] mt-10 mb-4">Key Strategies for Success</h3>
          <ul className="space-y-4 mb-8 list-none pl-0">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#ea580c]/10 flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[#ea580c]" />
              </div>
              <span><strong>Prioritize Form Over Weight:</strong> Never sacrifice technique to lift heavier. Poor form leads directly to injury.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#ea580c]/10 flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[#ea580c]" />
              </div>
              <span><strong>Fuel Your Recovery:</strong> Nutrition and sleep are where the actual muscle building and fat loss happen.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#ea580c]/10 flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[#ea580c]" />
              </div>
              <span><strong>Track Your Progress:</strong> Keep a log of your workouts to ensure you are progressively overloading over time.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0f172a] mt-12 mb-6">Putting it into Practice</h2>
          <p className="mb-6">
            Start by implementing one new habit at a time. If you try to change your entire lifestyle overnight, you are much more likely to burn out. Add a 10-minute mobility routine to your mornings, or commit to tracking your protein intake. Small, incremental changes compound into massive transformations over the course of a year.
          </p>

          {article.content && (
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          )}

        </article>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-[#e2e8f0]">
          <h4 className="text-[13px] font-bold text-[#0f172a] uppercase tracking-wider mb-4">Tagged In</h4>
          <div className="flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span key={tag} className="text-[13px] font-medium px-4 py-2 rounded-full bg-[#f1f5f9] text-[#475569] flex items-center gap-2 hover:bg-[#e2e8f0] transition-colors cursor-pointer">
                <Tag className="w-3.5 h-3.5" />
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { blogPosts } from './data'

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <nav className="flex justify-between items-center mb-16 border-b border-white/5 pb-8 font-mono">
          <Link href="/" className="text-3xl font-black tracking-tighter text-white uppercase italic underline decoration-purple-500 decoration-4 underline-offset-8">KIMPULER</Link>
          <Link href="/" className="text-white/60 hover:text-white transition text-sm">← Back to Home</Link>
        </nav>

        <header className="mb-16">
          <h1 className="text-5xl font-black text-white mb-6">Insights & Articles</h1>
          <p className="text-xl text-slate-400 max-w-3xl">
            Thoughts on technology, development, and the future of web. We share what we learn working with clients worldwide.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
              <div className="bg-slate-900/30 p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">{post.date}</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition">{post.title}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-white/10 px-2 py-1 rounded-full text-slate-300">#{tag}</span>
                  ))}
                </div>
                <div className="text-purple-400 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read more <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
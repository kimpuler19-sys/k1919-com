// app/blog/[slug]/page.js
'use client'

import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import { blogPosts } from '../data'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex justify-between items-center mb-16 border-b border-white/5 pb-8 font-mono">
          <Link href="/" className="text-3xl font-black tracking-tighter text-white uppercase italic underline decoration-purple-500 decoration-4 underline-offset-8">KIMPULER</Link>
          <Link href="/blog" className="text-white/60 hover:text-white transition text-sm">← All Articles</Link>
        </nav>

        <article className="prose prose-invert prose-lg max-w-none">
          <header className="mb-8 not-prose">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full">#{tag}</span>
              ))}
            </div>
          </header>

          <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-slate-300 leading-relaxed" />

          <hr className="my-12 border-white/10" />

          <div className="not-prose bg-purple-900/20 p-8 rounded-3xl border border-purple-500/30 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Like this article?</h2>
            <p className="text-slate-300 mb-6">I write about tech, development strategies, and future trends. Subscribe to get updates (no spam, just insights).</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Your email" className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-purple-500 outline-none text-white" required />
              <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-purple-500 transition whitespace-nowrap">Subscribe</button>
            </form>
            <p className="text-[10px] text-slate-500 mt-4">I'll never share your email. Unsubscribe anytime.</p>
          </div>

          <div className="not-prose mt-12 flex justify-between">
            <Link href="/blog" className="text-purple-400 hover:text-white transition flex items-center gap-2">
              ← Back to all articles
            </Link>
            <a href="https://wa.me/6283841632837" target="_blank" className="text-emerald-400 hover:text-white transition flex items-center gap-2">
              Let's talk about your project →
            </a>
          </div>
        </article>
      </div>
    </div>
  )
}
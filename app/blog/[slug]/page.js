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
      {/* ... background ... */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex justify-between items-center mb-16 border-b border-white/5 pb-8 font-mono">
          <Link href="/" className="text-3xl font-black tracking-tighter text-white uppercase italic underline decoration-purple-500 decoration-4 underline-offset-8">KIMPULER</Link>
          <Link href="/blog" className="text-white/60 hover:text-white transition text-sm">← All Articles</Link>
        </nav>

        <article className="prose prose-invert prose-lg max-w-none">
          {/* ... header post ... */}
          
          <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-slate-300 leading-relaxed" />

          <hr className="my-12 border-white/10" />

          <div className="not-prose bg-purple-900/20 p-8 rounded-3xl border border-purple-500/30 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Like this article?</h2>
            <p className="text-slate-300 mb-6">We write about tech, development strategies, and future trends. Subscribe to get updates (no spam, just insights).</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Your email" className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-purple-500 outline-none text-white" required />
              <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-purple-500 transition whitespace-nowrap">Subscribe</button>
            </form>
            <p className="text-[10px] text-slate-500 mt-4">We'll never share your email. Unsubscribe anytime.</p>
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
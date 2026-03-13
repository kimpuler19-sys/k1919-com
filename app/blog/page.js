// app/blog/page.js
'use client'

import Link from 'next/link'
import { blogPosts } from './data'

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30">
      {/* ... background ... */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <nav className="flex justify-between items-center mb-16 border-b border-white/5 pb-8 font-mono">
          <Link href="/" className="text-3xl font-black tracking-tighter text-white uppercase italic underline decoration-purple-500 decoration-4 underline-offset-8">KIMPULER</Link>
          <Link href="/" className="text-white/60 hover:text-white transition text-sm">← Back to Home</Link>
        </nav>

        <header className="mb-16">
          <h1 className="text-5xl font-black text-white mb-6">Insights & Articles</h1>
          <p className="text-xl text-slate-400 max-w-3xl">Thoughts on technology, development, and the future of web. We share what we learn working with clients worldwide.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ... mapping posts ... */}
        </div>
      </div>
    </div>
  )
}
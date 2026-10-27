// app/blog/BlogList.js
'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

export default function BlogList({ posts, tags }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialTag = searchParams.get('tag') || 'All'

  const [activeTag, setActiveTag] = useState(initialTag)
  const [query, setQuery] = useState('')

  // Filter logic
  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesTag = activeTag === 'All' || post.tags.includes(activeTag)
      const matchesQuery =
        query.trim() === '' ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      return matchesTag && matchesQuery
    })
  }, [posts, activeTag, query])

  // Featured = newest 1 post (only when no filter applied)
  const featured = activeTag === 'All' && query === '' ? posts[0] : null
  const rest = featured ? filtered.filter((p) => p.slug !== featured.slug) : filtered

  const handleTagClick = (tagName) => {
    setActiveTag(tagName)
    if (tagName === 'All') {
      router.push('/blog', { scroll: false })
    } else {
      router.push(`/blog?tag=${encodeURIComponent(tagName)}`, { scroll: false })
    }
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30">
      {/* Background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* ─────── NAV ─────── */}
        <nav className="flex justify-between items-center mb-16 border-b border-white/5 pb-8 font-mono">
          <Link
            href="/"
            className="text-3xl font-black tracking-tighter text-white uppercase italic underline decoration-purple-500 decoration-4 underline-offset-8"
          >
            KIMPULER
          </Link>
          <Link
            href="/"
            className="text-white/60 hover:text-white transition text-sm"
          >
            ← Back to Home
          </Link>
        </nav>

        {/* ─────── HEADER ─────── */}
        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Insights & Articles
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Deep dives on crypto programming, private AI infrastructure,
            enterprise automation, and the engineering decisions that separate
            production systems from prototypes.
          </p>
        </header>

        {/* ─────── SEARCH + FILTER BAR ─────── */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="relative">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles by title, topic, or tag..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 pl-12 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition"
              aria-label="Search articles"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Tag filter pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleTagClick('All')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeTag === 'All'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              All ({posts.length})
            </button>
            {tags.map(({ name, count }) => (
              <button
                key={name}
                onClick={() => handleTagClick(name)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  activeTag === name
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {name} ({count})
              </button>
            ))}
          </div>

          {/* Result count */}
          <p className="text-sm text-slate-500">
            {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
            {activeTag !== 'All' && ` tagged #${activeTag}`}
            {query && ` matching "${query}"`}
          </p>
        </div>

        {/* ─────── FEATURED POST ─────── */}
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="block mb-12 group"
          >
            <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-8 md:p-12 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition overflow-hidden">
              <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Latest
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-purple-300 mb-4">
                <time dateTime={featured.dateModified || featured.date}>
                  {featured.date}
                </time>
                <span>•</span>
                <span>{featured.readTime}</span>
                {featured.author?.name && (
                  <>
                    <span>•</span>
                    <span>{featured.author.name}</span>
                  </>
                )}
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-purple-200 transition leading-tight">
                {featured.title}
              </h2>
              <p className="text-slate-300 text-lg mb-6 max-w-3xl leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/10 px-3 py-1 rounded-full text-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 text-purple-300 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Read article <span>→</span>
              </div>
            </div>
          </Link>
        )}

        {/* ─────── GRID ─────── */}
        {rest.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="group"
              >
                <article className="bg-slate-900/30 p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition h-full flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <time
                      dateTime={post.dateModified || post.date}
                      className="text-xs text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full"
                    >
                      {post.date}
                    </time>
                    <span className="text-xs text-slate-500">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-white/10 px-2 py-1 rounded-full text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 4 && (
                      <span className="text-[10px] text-slate-500 px-2 py-1">
                        +{post.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="text-purple-400 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <span>→</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg mb-4">
              No articles found matching your filter.
            </p>
            <button
              onClick={() => {
                setActiveTag('All')
                setQuery('')
                router.push('/blog', { scroll: false })
              }}
              className="text-purple-400 hover:text-white transition underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ─────── CTA FOOTER ─────── */}
        <div className="mt-20 bg-purple-900/20 p-10 rounded-3xl border border-purple-500/30 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to build production-grade systems?
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Kimpuler engineers secure, scalable infrastructure for crypto, AI,
            and enterprise automation. Let's discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-purple-500 transition shadow-xl"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/6283841632837"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-white/20 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
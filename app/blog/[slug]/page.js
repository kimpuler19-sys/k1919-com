// app/blog/[slug]/page.js
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '../data'

// ────────────────────────────────────────────────────────────────────────────
// STATIC PARAMS — generate all routes at build time (SSG / ISR ready)
// ────────────────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

// ────────────────────────────────────────────────────────────────────────────
// DYNAMIC METADATA — full SEO: title, description, canonical, OG, Twitter
// ────────────────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}

  const baseUrl = 'https://kimpuler.com'
  const canonical = post.canonicalUrl || `${baseUrl}/blog/${post.slug}`

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author?.name || 'Kimpuler Engineering Team' }],
    creator: post.author?.name || 'Kimpuler',
    publisher: 'Kimpuler',
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'article',
      title: post.ogTitle || post.title,
      description: post.ogDescription || post.excerpt,
      url: canonical,
      siteName: 'Kimpuler',
      images: [
        {
          url: post.ogImage || `${baseUrl}/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.dateModified || undefined,
      modifiedTime: post.dateModified || undefined,
      authors: [post.author?.name || 'Kimpuler Engineering Team'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.twitterTitle || post.ogTitle || post.title,
      description: post.twitterDescription || post.ogDescription || post.excerpt,
      images: [post.ogImage || `${baseUrl}/og-default.jpg`],
      creator: '@kimpuler',
    },
  }
}

// ────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ────────────────────────────────────────────────────────────────────────────
export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const baseUrl = 'https://kimpuler.com'
  const canonical = post.canonicalUrl || `${baseUrl}/blog/${post.slug}`

  // Sort related posts by tag overlap (simple relevance ranking)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((r) => r.post)

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30">
      {/* Background gradient blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      {/* ─────────────────────────────────────────────────────────────────
          JSON-LD SCHEMA — injected from post.schema (@graph pattern)
          Works for BlogPosting + FAQPage + Person + Organization + Breadcrumb
      ───────────────────────────────────────────────────────────────── */}
      {post.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(post.schema) }}
        />
      )}

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-16 border-b border-white/5 pb-8 font-mono">
          <Link
            href="/"
            className="text-3xl font-black tracking-tighter text-white uppercase italic underline decoration-purple-500 decoration-4 underline-offset-8"
          >
            KIMPULER
          </Link>
          <Link
            href="/blog"
            className="text-white/60 hover:text-white transition text-sm"
          >
            ← All Articles
          </Link>
        </nav>

        <article className="prose prose-invert prose-lg max-w-none">
          {/* ─────────────── HEADER ─────────────── */}
          <header className="mb-8 not-prose">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <time dateTime={post.dateModified || post.date}>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
              {post.author?.name && (
                <>
                  <span>•</span>
                  <span>By {post.author.name}</span>
                </>
              )}
              {post.readingLevel && (
                <>
                  <span>•</span>
                  <span className="text-purple-400">{post.readingLevel}</span>
                </>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="text-xs bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full hover:bg-purple-500/20 transition"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </header>

          {/* ─────────────── GEO ANSWER CAPSULE (TL;DR) ───────────────
              Front-loaded summary optimized for LLM extraction (GEO).
              Cited more by AI search engines when placed above the fold.
          */}
          {post.geoAnswerCapsule && (
            <aside className="not-prose mb-10 p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
                  TL;DR
                </span>
              </div>
              <p className="text-slate-300 text-base leading-relaxed m-0">
                {post.geoAnswerCapsule}
              </p>
            </aside>
          )}

          {/* ─────────────── MAIN CONTENT ─────────────── */}
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-slate-300 leading-relaxed"
          />

          {/* ─────────────── FAQ SECTION ───────────────
              Rendered as accordion + already embedded in schema for GEO.
          */}
          {post.geoFaq?.length > 0 && (
            <section className="not-prose mt-16">
              <h2 className="text-2xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {post.geoFaq.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-white/5 border border-white/10 rounded-xl p-5 open:border-purple-500/30 open:bg-purple-500/5 transition"
                  >
                    <summary className="cursor-pointer list-none flex justify-between items-center gap-4">
                      <span className="font-semibold text-white">
                        {faq.question}
                      </span>
                      <span className="text-purple-400 group-open:rotate-45 transition-transform text-xl leading-none">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <hr className="my-12 border-white/10" />

          {/* ─────────────── CTA ─────────────── */}
          <div className="not-prose bg-purple-900/20 p-8 rounded-3xl border border-purple-500/30 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need help building this?
            </h2>
            <p className="text-slate-300 mb-6">
              Kimpuler engineers production-grade systems for enterprises. Let's
              discuss your project.
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

          {/* ─────────────── RELATED POSTS ─────────────── */}
          {relatedPosts.length > 0 && (
            <div className="not-prose mt-16">
              <h2 className="text-xl font-bold text-white mb-6">
                Related Articles
              </h2>
              <div className="grid gap-4">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="block p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition group"
                  >
                    <h3 className="font-semibold text-white group-hover:text-purple-300 transition mb-2">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-2">
                      {rp.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-slate-500">
                      <span>{rp.date}</span>
                      <span>•</span>
                      <span>{rp.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* ─────────────── BACK ─────────────── */}
          <div className="not-prose mt-12 flex justify-between">
            <Link
              href="/blog"
              className="text-purple-400 hover:text-white transition flex items-center gap-2"
            >
              ← Back to all articles
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
// app/blog/page.js
import { Suspense } from 'react'
import { blogPosts } from './data'
import BlogList from './BlogList'

// ────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// ────────────────────────────────────────────────────────────────────────────
export const metadata = {
  title: 'Blog — Kimpuler Engineering Insights',
  description:
    'Production-grade insights on crypto programming, private AI infrastructure, enterprise automation, and modern software engineering from the Kimpuler team.',
  keywords: [
    'kimpuler blog',
    'crypto programming',
    'private AI infrastructure',
    'enterprise automation',
    'software engineering insights',
    'RAG systems',
    '2027 tech trends',
  ],
  authors: [{ name: 'Kimpuler Engineering Team' }],
  alternates: {
    canonical: 'https://kimpuler.com/blog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    title: 'Blog — Kimpuler Engineering Insights',
    description:
      'Production-grade insights on crypto, private AI, enterprise automation, and modern software engineering.',
    url: 'https://kimpuler.com/blog',
    siteName: 'Kimpuler',
    images: [
      {
        url: 'https://kimpuler.com/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Kimpuler Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Kimpuler Engineering Insights',
    description:
      'Production-grade insights on crypto, private AI, enterprise automation, and modern software engineering.',
    images: ['https://kimpuler.com/og-blog.jpg'],
    creator: '@kimpuler',
  },
}

// ────────────────────────────────────────────────────────────────────────────
// PAGE (Server Component)
// ────────────────────────────────────────────────────────────────────────────
export default function BlogIndex() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.dateModified || b.date) - new Date(a.dateModified || a.date)
  )

  const tagCounts = sortedPosts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1
    })
    return acc
  }, {})
  const tags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count }))

  // JSON-LD: CollectionPage + ItemList + BreadcrumbList
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://kimpuler.com/blog#collection',
        name: 'Kimpuler Engineering Blog',
        description:
          'Production-grade insights on crypto programming, private AI infrastructure, enterprise automation, and modern software engineering.',
        url: 'https://kimpuler.com/blog',
        isPartOf: { '@id': 'https://kimpuler.com#website' },
        publisher: { '@id': 'https://kimpuler.com#organization' },
      },
      {
        '@type': 'ItemList',
        '@id': 'https://kimpuler.com/blog#itemlist',
        name: 'Blog Articles',
        numberOfItems: sortedPosts.length,
        itemListElement: sortedPosts.map((post, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `https://kimpuler.com/blog/${post.slug}`,
          name: post.title,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://kimpuler.com/blog#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://kimpuler.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
          },
        ],
      },
      {
        '@type': 'Organization',
        '@id': 'https://kimpuler.com#organization',
        name: 'Kimpuler',
        url: 'https://kimpuler.com',
        logo: 'https://kimpuler.com/logo.png',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://kimpuler.com#website',
        url: 'https://kimpuler.com',
        name: 'Kimpuler',
        publisher: { '@id': 'https://kimpuler.com#organization' },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Suspense fallback={<BlogSkeleton />}>
        <BlogList posts={sortedPosts} tags={tags} />
      </Suspense>
    </>
  )
}

// Fallback skeleton — juga berperan sebagai static shell untuk SEO
function BlogSkeleton() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <nav className="flex justify-between items-center mb-16 border-b border-white/5 pb-8 font-mono">
          <span className="text-3xl font-black tracking-tighter text-white uppercase italic underline decoration-purple-500 decoration-4 underline-offset-8">
            KIMPULER
          </span>
        </nav>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-slate-900/30 p-8 rounded-3xl border border-white/5 h-64 animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>

    
  )
}
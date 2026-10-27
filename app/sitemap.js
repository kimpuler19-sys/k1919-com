// app/sitemap.js
import { blogPosts } from './blog/data'

const BASE_URL = 'https://kimpuler.com'

// Build timestamp — captured once per generation, bukan per route
const BUILD_TIME = new Date().toISOString()

// Static routes dengan priority dan changeFrequency yang tepat per jenis halaman
const STATIC_ROUTES = [
  { path: '',               priority: 1.0, changeFrequency: 'weekly'  },
  { path: '/services',      priority: 0.9, changeFrequency: 'monthly' },
  { path: '/portfolio',     priority: 0.9, changeFrequency: 'monthly' },
  { path: '/how-it-works',  priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about',         priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog',          priority: 0.9, changeFrequency: 'weekly'  }, // hub page
  { path: '/faq',           priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact',       priority: 0.7, changeFrequency: 'yearly'  },
  { path: '/rewards',       priority: 0.6, changeFrequency: 'monthly' },
  { path: '/terms',         priority: 0.3, changeFrequency: 'yearly'  },
]

// Safe date parser — prefer ISO dateModified, fallback to parsed date, fallback to build time
function safeLastModified(post) {
  if (post.dateModified) return post.dateModified
  if (post.date) {
    const parsed = new Date(post.date)
    if (!Number.isNaN(parsed.getTime())) return parsed.toISOString()
  }
  return BUILD_TIME
}

export default async function sitemap() {
  // ─────────────────────────────────────────────────────────────────
  // 1. Static routes
  // ─────────────────────────────────────────────────────────────────
  const staticRoutes = STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: BUILD_TIME,
    changeFrequency,
    priority,
  }))

  // ─────────────────────────────────────────────────────────────────
  // 2. Blog posts — use dateModified (ISO) for accurate freshness signal
  //    Priority boosted for 2027 trend articles (higher commercial value)
  // ─────────────────────────────────────────────────────────────────
  const blogRoutes = blogPosts.map((post) => {
    const isTrending =
      post.slug.includes('2027') ||
      post.slug.includes('private-ai') ||
      post.slug.includes('crypto-programming') ||
      post.slug.includes('ai-agents')

    return {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: safeLastModified(post),
      changeFrequency: isTrending ? 'weekly' : 'monthly',
      priority: isTrending ? 0.8 : 0.6,
    }
  })

  // ─────────────────────────────────────────────────────────────────
  // 3. Merge + dedupe (jaga-jaga jika ada slug duplikat di data)
  // ─────────────────────────────────────────────────────────────────
  const seen = new Set()
  const allRoutes = [...staticRoutes, ...blogRoutes].filter((route) => {
    if (seen.has(route.url)) return false
    seen.add(route.url)
    return true
  })

  return allRoutes
}
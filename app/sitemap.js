import { blogPosts } from './blog/data'

export default async function sitemap() {
  const baseUrl = 'https://kimpuler.com'

  // Halaman statis
  const staticRoutes = [
    '',
    '/services',
    '/about',
    '/portfolio',
    '/how-it-works',
    '/faq',
    '/blog',
    '/contact',
    '/rewards',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Halaman blog (dinamis berdasarkan data)
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
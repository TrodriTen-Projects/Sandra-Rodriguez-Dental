import type { MetadataRoute } from 'next'
import { blogPosts, BRAND } from '@/content'

// Evaluated at build time so the sitemap is emitted as a static file (required
// by `output: 'export'`).
export const dynamic = 'force-static'

const BASE = BRAND.SITE_URL

/** Absolute URL for a site path, with the trailing slash Next emits (trailingSlash: true). */
const url = (path: string) => `${BASE}${path.replace(/\/?$/, '/')}`
/** Absolute URL for an asset in /public (assets are served without a trailing slash). */
const asset = (path: string) => `${BASE}${path}`

// Static routes. Image lists reference real files in /public — the previous
// entries pointed at names that were never exported (protesis-*.webp, etc.).
const routes: Array<{
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  images?: string[]
}> = [
  { path: '/', priority: 1, changeFrequency: 'weekly', images: ['/logo.svg', '/home.webp', '/logoWhite.svg'] },
  { path: '/tratamientos-dentales', priority: 0.9, changeFrequency: 'weekly', images: ['/consultorio.webp'] },
  { path: '/blog', priority: 0.9, changeFrequency: 'weekly' },
  // /cases se omite a propósito: está oculta (noindex) hasta tener contenido real.
  { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/tratamientos-dentales/protesis-dentales-fija', priority: 0.8, changeFrequency: 'weekly', images: ['/hippy.webp'] },
  { path: '/tratamientos-dentales/protesis-dentales-removible', priority: 0.8, changeFrequency: 'weekly', images: ['/removible.webp'] },
  { path: '/tratamientos-dentales/protesis-dentales-sobreimplantes', priority: 0.8, changeFrequency: 'weekly', images: ['/pelirroja.webp'] },
  { path: '/tratamientos-dentales/protesis-dentales-sobredientes', priority: 0.8, changeFrequency: 'weekly', images: ['/sobrediente.webp'] },
  { path: '/tratamientos-dentales/estetica-dental-blanqueamientos', priority: 0.8, changeFrequency: 'weekly', images: ['/blanqueamientos.webp'] },
  { path: '/tratamientos-dentales/protesis-dentales-coronas-nometal', priority: 0.8, changeFrequency: 'weekly', images: ['/corona_no_metal.webp'] },
  { path: '/tratamientos-dentales/protesis-dentales-coronas-porcelana', priority: 0.8, changeFrequency: 'weekly', images: ['/corona_metal.webp'] },
  { path: '/tratamientos-dentales/protesis-dentales-coronas-sobreimplante', priority: 0.8, changeFrequency: 'weekly', images: ['/corona_sobreimplante.webp'] },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticUrls: MetadataRoute.Sitemap = routes.map((r) => ({
    url: url(r.path),
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    ...(r.images ? { images: r.images.map(asset) } : {}),
  }))

  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
    images: [post.coverImage.startsWith('http') ? post.coverImage : asset(post.coverImage)],
  }))

  return [...staticUrls, ...blogUrls]
}

import type { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blogPosts'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `https://www.sandrarodriguezdental.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
    images: post.coverImage.startsWith('http') 
      ? [post.coverImage] 
      : [`https://www.sandrarodriguezdental.com${post.coverImage}`],
  }));

  return [
    {
      url: 'https://www.sandrarodriguezdental.com/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        'https://www.sandrarodriguezdental.com/logo.svg',
        'https://www.sandrarodriguezdental.com/home.webp',
        'https://www.sandrarodriguezdental.com/logoWhite.svg',
      ],
    },
    {
      url: 'https://www.sandrarodriguezdental.com/tratamientos',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.sandrarodriguezdental.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.sandrarodriguezdental.com/tratamientos/protesis/removible',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://www.sandrarodriguezdental.com/protesis-removible.webp',
      ],
    },
    {
      url: 'https://www.sandrarodriguezdental.com/tratamientos/protesis/fija',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://www.sandrarodriguezdental.com/protesis-fija.webp',
      ],
    },
    {
      url: 'https://www.sandrarodriguezdental.com/tratamientos/protesis/sobreimplantes',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://www.sandrarodriguezdental.com/protesis-sobreimplantes.webp',
      ],
    },
    {
      url: 'https://www.sandrarodriguezdental.com/tratamientos/protesis/sobredientes',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://www.sandrarodriguezdental.com/protesis-sobredientes.webp',
      ],
    },
    {
      url: 'https://www.sandrarodriguezdental.com/tratamientos/estetica/blanqueamientos',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://www.sandrarodriguezdental.com/blanqueamientos.webp',
      ],
    },
    {
      url: 'https://www.sandrarodriguezdental.com/tratamientos/protesis/coronas/nometal',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://www.sandrarodriguezdental.com/coronas-nometal.webp',
      ],
    },
    {
      url: 'https://www.sandrarodriguezdental.com/tratamientos/protesis/coronas/porcelana',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://www.sandrarodriguezdental.com/coronas-porcelana.webp',
      ],
    },
    {
      url: 'https://www.sandrarodriguezdental.com/tratamientos/protesis/coronas/sobreimplante',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://www.sandrarodriguezdental.com/coronas-sobreimplante.webp',
      ],
    },
    ...blogUrls,
  ]
}
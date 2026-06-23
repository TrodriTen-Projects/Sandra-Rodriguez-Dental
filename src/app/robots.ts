import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/blog/', '/tratamientos/', '_next/static/', '_next/image'],
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://www.sandrarodriguezdental.com/sitemap.xml',
  }
}

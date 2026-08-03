import type { MetadataRoute } from 'next'
import { BRAND } from '@/content'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/blog/', '/tratamientos-dentales/', '/_next/static/', '/_next/image'],
        disallow: ['/api/'],
      },
    ],
    sitemap: `${BRAND.SITE_URL}/sitemap.xml`,
  }
}

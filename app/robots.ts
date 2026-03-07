import type { MetadataRoute } from 'next'
import { baseUrl } from '../config/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/products/',
        '/product/',
        '/Outside-Micrometer-Set/',
        '/category/',
        '/tag/',
        '/cart/',
        '/checkout/',
        '/shop/',
        '/order/',
        '/purchase/',
        '/author/',
        '/page/',
        '/feed/',
        '/search/',
        '/trackback/',
        '/embed/',
        '/comments/',
        '/?replytocom=',
        '/archive/',
        '/item/',
        '/catalog/',
        '/store/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

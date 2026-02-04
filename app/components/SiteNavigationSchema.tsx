export default function SiteNavigationSchema() {
  const baseUrl = 'https://www.319webdesign.com'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'Prozess',
        url: `${baseUrl}/#prozess`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'Leistungen',
        url: `${baseUrl}/leistungen`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'Webdesign',
        url: `${baseUrl}/leistungen/webdesign`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'SEO-Optimierung',
        url: `${baseUrl}/leistungen/seo`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 5,
        name: 'Website-Wartung',
        url: `${baseUrl}/leistungen/wartung`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 6,
        name: 'Portfolio',
        url: `${baseUrl}/portfolio`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 7,
        name: 'Kontakt',
        url: `${baseUrl}/kontakt`,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

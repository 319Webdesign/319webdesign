import { baseUrl } from '../../config/seo'

export default function SiteNavigationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'Unser Angebot',
        url: `${baseUrl}/unser-angebot`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'Über Mich',
        url: `${baseUrl}/uber-mich`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'Leistungen',
        url: `${baseUrl}/leistungen`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'Webdesign & Launch',
        url: `${baseUrl}/leistungen/webdesign-launch`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 5,
        name: 'Relaunch',
        url: `${baseUrl}/website-relaunch`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 6,
        name: 'Wachstum & SEO',
        url: `${baseUrl}/leistungen/wachstum-seo`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 7,
        name: 'Strategische Begleitung',
        url: `${baseUrl}/leistungen/strategische-begleitung`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 8,
        name: 'Portfolio',
        url: `${baseUrl}/portfolio`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 9,
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

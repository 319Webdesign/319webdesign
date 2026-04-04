import { websiteRelaunchFaqItems } from '../../config/websiteRelaunchFaq'

/** FAQPage JSON-LD für /website-relaunch (Rich-Snippets). */
export default function WebsiteRelaunchFaqJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: websiteRelaunchFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answerPlain,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

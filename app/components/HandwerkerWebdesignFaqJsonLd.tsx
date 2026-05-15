import { handwerkerWebdesignFaqItems } from '../../config/handwerkerWebdesignFaq'

/** FAQPage JSON-LD für /webdesign-handwerker (Rich-Snippets). */
export default function HandwerkerWebdesignFaqJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: handwerkerWebdesignFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
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

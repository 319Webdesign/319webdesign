interface CreativeWorkSchemaProps {
  name: string
  description: string
  image: string
  url: string
  authorName?: string
  authorUrl?: string
  datePublished?: string
}

export default function CreativeWorkSchema({
  name,
  description,
  image,
  url,
  authorName = '319Webdesign',
  authorUrl = 'https://319webdesign.com',
  datePublished,
}: CreativeWorkSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    description,
    image: image.startsWith('http') ? image : `https://319webdesign.com${image}`,
    url,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: authorUrl,
    },
    ...(datePublished && { datePublished }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

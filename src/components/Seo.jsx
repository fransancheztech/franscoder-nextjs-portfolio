import Head from 'next/head'
import useLanguage from '../hooks/useLanguage'

// Site origin. Open Graph requires ABSOLUTE urls — a relative og:image path is
// silently ignored by LinkedIn, Slack, WhatsApp and X, which is why link
// previews were showing no image.
const SITE_URL = 'https://fransancheztech.com'

const SEO = () => {
  const { t, locale } = useLanguage()

  return (
    <Head>
      <title>{t.seo.title}</title>
      <meta
        httpEquiv='x-ua-compatible'
        content='ie=edge'
      />
      <meta
        name='description'
        content={t.seo.description}
      />
      {/* Was `noindex, follow`, which told search engines not to list the site
          at all. That made sense while the content was stale; it is the
          opposite of what is wanted now that this is the page recruiters are
          meant to find. */}
      <meta
        name='robots'
        content='index, follow'
      />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      <meta
        name='title'
        property='og:title'
        content={t.seo.ogTitle}
      />
      <meta
        property='og:description'
        content={t.seo.ogDescription}
      />
      <meta
        property='og:image'
        content={`${SITE_URL}/og-image.png`}
      />
      <meta
        property='og:image:width'
        content='2400'
      />
      <meta
        property='og:image:height'
        content='1260'
      />
      <meta
        property='og:image:type'
        content='image/png'
      />
      <meta
        property='og:image:alt'
        content='Francisco Sánchez — Python Engineer · AI, Platform & Full-Stack'
      />
      <meta
        property='og:url'
        content={`${SITE_URL}/`}
      />
      {/* `website`, not `article`. A portfolio is a site, not a piece of
          writing with an author and a publication date. */}
      <meta
        property='og:type'
        content='website'
      />
      <meta
        property='og:locale'
        content={locale === 'es' ? 'es_ES' : 'en_GB'}
      />
      <meta
        name='author'
        property='og:article:author'
        content='Francisco Sánchez'
      />
      {/* Twitter/X reads its own tags and falls back poorly without them. */}
      <meta
        name='twitter:card'
        content='summary_large_image'
      />
      <meta
        name='twitter:title'
        content={t.seo.ogTitle}
      />
      <meta
        name='twitter:description'
        content={t.seo.ogDescription}
      />
      <meta
        name='twitter:image'
        content={`${SITE_URL}/og-image.png`}
      />
      <link
        rel='canonical'
        href={locale === 'es' ? `${SITE_URL}/es` : `${SITE_URL}/`}
      />
      <link
        rel='icon'
        href='/favicon.ico'
      />
    </Head>
  )
}

export default SEO

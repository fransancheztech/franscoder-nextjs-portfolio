# fransancheztech.com

My personal site: background, selected work, and contact details.
Bilingual (English / Spanish), light and dark themes.

**Live:** https://fransancheztech.com

## Stack

- **Next.js 16** (Pages Router) with built-in i18n routing for `en` / `es`
- **React 18**, JSX
- **Sass** for styling, with Tailwind alongside for utilities
- **EmailJS** for the contact form
- **AOS** for scroll animations, **react-slick** for the project galleries

Translations live in `messages/en.json` and `messages/es.json`. Every string on
the site comes from there — components hold no copy of their own, so adding a
language means adding a file rather than touching markup.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Layout

```
messages/            en.json / es.json — all site copy, both languages
public/assets/
  img/portfolio/     project screenshots
  scss/              the real stylesheet source (main.scss + main/*)
src/
  components/        about, portfolio, hero, contact, switches
  hooks/             useLanguage — picks the message file from the locale
  pages/             _app, _document, index, 404
og-image.typ         social card source, rendered to public/og-image.png with:
                     typst compile --format png --ppi 72 og-image.typ public/og-image.png
```

Note: styles are compiled from `public/assets/scss/`, imported through
`src/styles/index.scss`. Editing CSS anywhere else has no effect.

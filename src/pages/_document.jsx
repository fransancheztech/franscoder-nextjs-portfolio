import Document, { Html, Head, Main, NextScript } from 'next/document'

// The Google Fonts stylesheet lives here rather than in next/head. A <link
// rel="stylesheet"> inside next/head gets re-inserted on client-side
// navigation and is not prioritised properly by the browser, which costs first
// paint and can flash unstyled text. _document renders once, server-side, into
// the initial HTML — which is where a global stylesheet belongs.
//
// preconnect hints are new: they open the TCP and TLS connections to Google's
// two font hosts in parallel with parsing, rather than waiting for the
// stylesheet to be parsed before the font files are even requested.
class MyDocument extends Document {
    render() {
        // Respect the active locale so screen readers and search engines get
        // the right language. The site is bilingual EN/ES via next.config i18n.
        const locale = this.props.__NEXT_DATA__?.locale || 'en'

        return (
            <Html lang={locale}>
                <Head>
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin='anonymous'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

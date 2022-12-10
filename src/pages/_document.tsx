import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='theme-color' content='#0F62FE' />
          <meta name='google' content='nositelinkssearchbox' />
          <meta name='description' content='Ajeeb Design System' />
          <meta name='robots' content='noindex' />

          <meta property='og:locale' content='en_IN' />
          <meta property='og:url' content='https://ajeeb.ram.codes' />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content='Ajeeb Design System' />
          <meta property='og:description' content='' />
          <meta property='og:title' content='Ajeeb Design System' />
          <meta name='theme-color' content='#0F62FE' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

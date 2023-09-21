import Document, { Head, Html, Main, NextScript } from 'next/document';

const Favicon = () => (
  <>
    <link
      rel="icon"
      href="/favicon.ico"
    />
  </>
);

const Fonts = () => (
  <>
    
  </>
);

class CustomDocument extends Document {
  render() {

    return (
      <Html lang="en">
      <Head>
        <Favicon />
        <Fonts />
        <link 
        rel="preconnect" 
        href="https://fonts.googleapis.com"
        />
        <link 
        rel="preconnect" 
        href="https://fonts.gstatic.com" 
        crossOrigin="true"
        />
        <link 
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" 
        rel="stylesheet" 
        />
        <link 
        href="https://fonts.googleapis.com/css2?family=Montserrat&family=Unica+One&display=swap"
        rel="stylesheet" 
        />

        <link 
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
        rel="stylesheet" 
        />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

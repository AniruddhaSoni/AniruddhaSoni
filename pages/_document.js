import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth scroll-p-16" lang="en">
      <Head>
        {/* Google Verification Meta tag */}
        <meta
          name="google-site-verification"
          content="7HEdvwdFbQSHkjAqT9azDhxCZ1uWmuaBhkgXQ3al02g"
        />
        {/* <!-- Primary Meta Tags --> */}
        <meta
          name="title"
          content="Aniruddha Soni | Portfolio | Web Developer"
        />
        <meta
          name="description"
          content="Hi, I am Aniruddh Soni, an enthusiast developer from India who focuses on user interfaces, including rich experiences, design, and command line tools."
        />
        <meta
          name="keywords"
          content="Anirudh , Soni, Aniruddha , Aniruddh , Web , Developer , MERN , LAMP  "
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aniruddhsoni.ml/" />
        <meta
          property="og:title"
          content="Aniruddha Soni | Portfolio | Web Developer"
        />
        <meta
          property="og:description"
          content="Hi, I am Aniruddh Soni, an enthusiast developer from India who focuses on user interfaces, including rich experiences, design, and command line tools."
        />
        <meta property="og:image" content="/aniruddhsoni.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.aniruddhsoni.ml/" />
        <meta
          property="twitter:title"
          content="Aniruddha Soni | Portfolio | Web Developer"
        />
        <meta
          property="twitter:description"
          content="Hi, I am Aniruddh Soni, an enthusiast developer from India who focuses on user interfaces, including rich experiences, design, and command line tools."
        />
        <meta property="twitter:image" content="/aniruddhsoni.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

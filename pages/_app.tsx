import Layout from '../components/layout'
import Head from 'next/head'
import { useRouter } from 'next/router';
import '../styles/application.scss'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pageName = router.pathname.replace(/\//g, "").charAt(0).toUpperCase() + router.pathname.slice(2);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* REMOVE BEFORE LAUNCH - prevents search engine from crawling*/}
        <meta name="robots" content="noindex" />
        {/* END REMOVE BEFORE LAUNCH */}

        {/* <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" /> */}

        <title>{`${pageName} | KeepKey`}</title>
        <meta name="description" key="desc" content="KeepKey - The premier hardware wallet to help protect your cryptocurrencies and safeguard your assets from hackers." />
        <link rel="canonical" href={`https://www.keepkey.com${router.pathname}`} />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
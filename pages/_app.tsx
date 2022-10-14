import Layout from '../components/layout'
import Head from 'next/head'
import ogImage from 'public/images/hardware/wallet-horizontal-cropped.png'
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

        <title>{`${pageName} | KeepKey`}</title>
        <meta name="description" key="desc" content="KeepKey - The premier hardware wallet to help protect your cryptocurrencies and safeguard your assets from hackers." />
        <link rel="canonical" href={`https://www.keepkey.com${router.pathname}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${pageName} | KeepKey`} />
        <meta property="og:description" content="KeepKey - The premier hardware wallet to help protect your cryptocurrencies and safeguard your assets from hackers." />
        <meta property="og:url" content={`https://www.keepkey.com${router.pathname}`} />
        <meta property="og:site_name" content="KeepKey" />
        <meta property="og:image" content={ogImage.src} />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
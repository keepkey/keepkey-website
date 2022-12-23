import * as React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import ogImage from 'public/images/hardware/wallet-horizontal-2.png'
import { useRouter } from 'next/router';
import '../styles/application.scss'
// pages/_app.js
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  let titleTag: string;

  if (router.pathname === '/') {
    titleTag = 'KeepKey'
  } else {
    titleTag = `${router.pathname.replace(/\//g, "").charAt(0).toUpperCase() + router.pathname.slice(2)} | KeepKey`;
  }

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <title>{titleTag}</title>
        <meta name="description" key="desc" content="KeepKey - The premier hardware wallet to help protect your cryptocurrencies and safeguard your assets from hackers." />
        <link rel="canonical" href={`https://www.keepkey.com${router.pathname}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={titleTag} />
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
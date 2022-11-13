import Head from 'next/head'
import heroBgImage from 'public/images/heros/blue-lines.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HeroSimple from '../components/hero-simple';
const pageTitle = "Integration Guide";


export default function IntegrationGuide() {

  return (
    <>
      <Head><title>{pageTitle} | KeepKey</title></Head>
      <HeroSimple
        heroBgImg={heroBgImage}
        pageTitle={pageTitle}
      />
      <Main />
    </>
  )
}


const Main = () => {
  return (

    <section className="container">
      <h2 className="text-center mb-16">Choose the best SDK for your integration type</h2>
      <Tabs>
        <TabList>
          <Tab>Onboard.js</Tab>
          <Tab>KeepKey-SDK</Tab>
          <Tab>HDwallet</Tab>
        </TabList>

        <hr className="mt-16" />

        <TabPanel>
          <h2>Onboard.js</h2>
          <p className="mb-6">
            <br />
            Build Ethereum Dapps With onboard.js!
            <br />
            <br />
            View the docs! <a className="text-gold" href="https://docs.blocknative.com/onboard" target="_blank" rel="noreferrer">here</a>

          </p>
          <iframe className="responsive-video" src="https://www.youtube.com/embed/ohOl_rvO0KA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </TabPanel>
        <TabPanel>
          <h2 className="mb-6">KeepKey SDK</h2>
          <p>
            Communication with a KeepKey in your Dapp or application by REST commands. Documented here
            <br />
            <br />
            <a className="text-xl text-gold" href="https://github.com/BitHighlander/keepkey-sdk" target="_blank" rel="noreferrer" >KeepKey-SDK</a>
          </p>
        </TabPanel>
        <TabPanel>
          <h2 className="mb-6">HDwallet</h2>
          <p>
            Add KeepKey into your wallet or low level native integration with the full controller library here.
            <br />
            <br />
            <a className="text-xl text-gold" href="https://github.com/shapeshift/hdwallet" target="_blank" rel="noreferrer" >HDwallet</a>
          </p>
        </TabPanel>
      </Tabs>

    </section>
  )
}
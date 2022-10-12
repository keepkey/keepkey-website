
import heroBgImage from 'public/images/heros/blue-lines.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HeroSimple from '../components/hero-simple';

export default function IntegrationGuide() {

  return (
    <>
      <HeroSimple
        heroBgImg={heroBgImage}
        pageTitle="Integration Guide"
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
          <Tab>ETH/Dapps</Tab>
          <Tab>Multi-Chain</Tab>
        </TabList>

        <hr className="mt-16" />

        <TabPanel>
          <h2>Onboard.js</h2>
          <p className="mb-6">
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum ad error voluptatibus perferendis nam maxime repellat, facere eum. Deleniti ex quas commodi vitae nemo earum, magni illum! Similique, ullam aut?
            <br />
            <br />
            View the guide <a className="text-gold" href="https://docs.blocknative.com/onboard" target="_blank" rel="noreferrer">here</a>

          </p>
          <iframe className="responsive-video" src="https://www.youtube.com/embed/ohOl_rvO0KA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </TabPanel>
        <TabPanel>
          <h2 className="mb-6">HDwallet</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem provident animi aperiam, pariatur tenetur ea ad totam, repudiandae voluptas itaque libero, nihil molestiae nostrum quos reiciendis ab aut alias atque.
            <br />
            <br />
            <a className="text-xl text-gold" href="https://github.com/shapeshift/hdwallet" target="_blank" rel="noreferrer" >Shapeshift HDwallet</a>
          </p>
        </TabPanel>
      </Tabs>

    </section>
  )
}
import Image from 'next/image'
import heroBgImage from 'public/images/heros/blue-lines.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function IntegrationGuide() {
  return (
    <>
      <Hero />
      <Main />
    </>
  )
}


const Hero = () => {
  return(
    <>
      <div className="relative z-0 pt-28 pb-20 lg:pt-52 lg:pb-36 bg-black">
        <Image
        src={heroBgImage}
        alt='keepkey wallet on desk'
        layout="fill"
        objectFit="cover"
        quality={100}
        objectPosition="top "
        priority={true}
        >
        </Image>
        <div className="container relative grid xl:grid-cols-[650px_1fr] items-center z-10">
          <div>
            <h1 className="text-4xl xl:text-6xl leading-tight tracking-wide font-bold text-white mb-4">Integration Guide</h1>
            {/* <p className="text-2xl text-white mb-8 leading-relaxed tracking-wide">Choose the best SDK for your integration type</p> */}

          </div>
            <div className="absolute max-w-[650px] top-[-70px] right-[-30px]">
              {/* <Image
                alt="KeepKey wallet"
                src={supportedAppsImg}
                quality={100}
                        >
              </Image> */}
            </div>
        </div>

      </div>
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
            <br/>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum ad error voluptatibus perferendis nam maxime repellat, facere eum. Deleniti ex quas commodi vitae nemo earum, magni illum! Similique, ullam aut?
            <br/>
            <br/>
            View the guide <a className="text-gold" href="https://docs.blocknative.com/onboard" target="_blank" rel="noreferrer">here</a>
           
          </p>
           <iframe className="responsive-video" src="https://www.youtube.com/embed/ohOl_rvO0KA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </TabPanel>
        <TabPanel>
          <h2 className="mb-6">HDwallet</h2>
          <p>
            <a className="text-xl text-gold" href="https://github.com/shapeshift/hdwallet" target="_blank" rel="noreferrer" >Shapeshift HDwallet</a>
          </p>
        </TabPanel>
      </Tabs>

      </section>
  )
}
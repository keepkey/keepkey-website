import Head from 'next/head'
import Image from 'next/image'
import heroBgImage from 'public/images/heros/blue-lines.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HeroSimple from '../components/hero-simple';
const pageTitle = "Developer Guide";
import api from 'public/images/developer/OpenAPI.png'
import keepkey from 'public/images/developer/KeepKeyDiagram.png'

export default function DeveloperGuide() {

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
      <h2 className="text-center mb-16">Developer Documentation</h2>
      <Tabs>
        <TabList>
          <Tab>Desktop Application</Tab>
          <Tab>REST API (openAPI)</Tab>
        </TabList>

        <hr className="mt-16" />

        <TabPanel>
          <h2>Desktop Application</h2>
          <p className="mb-6">
            <br />
            <Image
                src={keepkey}
                alt='keepkey api'
                objectFit="cover"
                quality={100}
                objectPosition="center"
                priority={true}
            ></Image>

          </p>

        </TabPanel>
        <TabPanel>
          <h2 className="mb-6">KeepKey REST api</h2>
          <p>

            <br />
            <Image
                src={api}
                alt='keepkey api'
                objectFit="cover"
                quality={100}
                objectPosition="center"
                priority={true}
            ></Image>

          </p>
        </TabPanel>
      </Tabs>

    </section>
  )
}
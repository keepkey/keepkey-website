import Head from 'next/head'
import Image from 'next/image'
import heroBgImage from 'public/images/heros/blue-lines.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HeroSimple from '../components/hero-simple';
const pageTitle = "Application Waltkthrough";
import walletVertical from '../../assets/images/desktop/pin.png'

export default function DesktopGuide() {

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
            <h2 className="text-center mb-16">About The KeepKey Desktop Application</h2>
            <text>
                <Image
                    src={walletVertical}
                    alt='keepkey api'
                    objectFit="cover"
                    quality={100}
                    objectPosition="center"
                    priority={true}
                ></Image>
            </text>
            <br/>
            <p>
                
            </p>
        </section>
    )
}
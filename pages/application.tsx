import Head from 'next/head'
import Image from 'next/image'
import heroBgImage from 'public/images/heros/blue-lines.jpg'
import HeroSimple from '../components/hero-simple';
const pageTitle = "Application Waltkthrough";

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
            </text>
            <br/>
            <p>
                
            </p>
        </section>
    )
}
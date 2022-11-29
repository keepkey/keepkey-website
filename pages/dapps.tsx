import Head from 'next/head'
import Image from 'next/image'
import heroBgImage from 'public/images/heros/blue-lines.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HeroSimple from '../components/hero-simple';
const pageTitle = "Dapp Guide";
import store from 'public/images/desktop/DappStore.png'

export default function Dapps() {

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
            <h2 className="text-center mb-16">Dapp Guide</h2>
            <h3>Intro</h3>
            <text>
                <p>
                    A Dapp (decentralized application) is an application written by developers outside of keepkey designed to integrate with our wallet. These applications use a protocol known as Wallet-Connect and are typically hosted on a traditional domain names.
                </p>
                <br/>
                <p>
                    What separates a Dapp with a traditional application is that it can operate autonomously, typically through the use of smart contracts, that run on a decentralized computing, blockchain or other distributed ledger system.
                </p>
                <br/>
                <p>
                    is the ecosystem that connects you to the world of decentralized finance. There are thousands of projects out there working to change the world. These Applications can do anything from decentralized lending to stable coin issuance, multi-chain swapping, and liquidity pool providing to web3 gaming. There are opportunities for users to participate in these ventures and a permissionless and decentralized way.
                </p>
            </text>
            <br/>
            <h2>Dapp Store</h2>
            <Image
                alt="KeepKey Store"
                src={store}
                width={600}
                height={400}
                quality={100}
            ></Image>
        </section>
    )
}
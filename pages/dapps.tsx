import Head from 'next/head'
import Image from 'next/image'
import heroBgImage from 'public/images/heros/blue-lines.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HeroSimple from '../components/hero-simple';
const pageTitle = "Dapp Guide";
import store from 'public/images/desktop/DappStore.png'
import uniswap from 'public/images/walletconnect/uniswap.png'
import connect from 'public/images/walletconnect/connect.png'
import options from 'public/images/walletconnect/options.png'
import pasteString from 'public/images/walletconnect/pasteString.png'
import walletconnect from 'public/images/walletconnect/walletconnect.png'


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

//Steps
interface Step {
    key: number
    title: string
    description?: string
    image?: any
    hasVideo: boolean
    video?: string
    listItems?: string[]
}

// @ts-ignore
const steps: Step[] = [
    {
        key: 1,
        image: uniswap,
        hasVideo: false,
        title: 'Select Dapp',
        listItems: [
            'Select the Dapp you wish to connect to.',
            'In this example we chose Uniswap',
        ]
    },
    {
        key: 2,
        image: options,
        hasVideo: false,
        title: 'Connect',
        listItems: [
            'Select the Wallet Connect option of the Dapp',
        ]
    },
    {
        key: 3,
        image: connect,
        hasVideo: false,
        title: 'Copy',
        listItems: [
            'Copy the Connection string.',
        ]
    },
    {
      key: 4,
      image: walletconnect,
      hasVideo: false,
      title: 'click on Wallet Connect',
      listItems: [
        'The Wallet connect option is in the top right corner of the app.',
      ]
    },
    {
        key: 4,
        image: pasteString,
        hasVideo: false,
        title: 'Paste your connection string',
        listItems: [
            'Paste your connection string.',
            '(note) form will auto-fill from clipboard',
        ]
    },

]

const Step = (props: Step) => {
    return (
        <div className="grid xl:grid-cols-2 gap-16 xl:gap-26 2xl:gap-36 align-center py-20 lg:py-32 border-solid border-2 border-blue-900">
            <div>
                <h3 className="mb-6" dangerouslySetInnerHTML={{ __html: props.title }}></h3>
                <p className="mb-6" dangerouslySetInnerHTML={{ __html: props.description }}></p>
                <ul className="list-disc pl-10">
                    {props.listItems.map((item, index) =>
                        <li className="py-2"
                            key={index}
                            dangerouslySetInnerHTML={{ __html: item }}></li>
                    )}
                </ul>
            </div>
            <div className="self-center w-100">
                {props.hasVideo ?
                    <div className="">
                        <div dangerouslySetInnerHTML={{ __html: props.video }}></div>
                    </div>
                    :
                    <Image
                        alt="KeepKey wallet"
                        src={props.image}
                    >
                    </Image>
                }
            </div>
        </div>
    )
}

const Main = () => {
    return (

        <section className="container">
            <h2 className="text-center mb-16">Dapp Guide</h2>
            <h3>Intro</h3>
            <br/>
            <text>
                <p>
                    A Dapp (decentralized application) is an application written by developers outside of keepkey designed to integrate with our wallet. These applications use a protocol known as Wallet-Connect and are typically hosted on a traditional domain names.
                </p>
                <br/>
                <p>
                    What separates a Dapp with a traditional application is that it can operate autonomously, through the use of smart contracts, that run on a decentralized blockchain.
                </p>
                <br/>
                <p>
                    These networks of dapps and protocol are the ecosystem that connects your wallet to the world of decentralized finance. There are thousands of projects out there working to change the world of finance. These Applications can offer decentralized lending, stable coin issuance, multi-chain swapping, liquidity pool providing, exchanges, games, finance, gambling, storage, high-risk investments, governance, property, identity, media, social applications.
                </p>
                <br/>
                <p>
                    There are opportunities for users to participate in these ventures and a permissionless and decentralized way.
                </p>
            </text>
            <br/>
            <h2>Dapp Store</h2>
            <br/>
            <p>
                The KeepKey Desktop client has a built in App-Store. Allowing you to find and connect to a curated list of decentralized applications.
            </p>
            <br/>
            <br/>
            <text>
                <Image
                    src={store}>
                </Image>
            </text>
            <br/>
            <br/>
            <br/>
            <h2>Walkthrough</h2>
            {steps.map((step, i, arr) =>
                <>
                    <Step
                        key={step.key}
                        image={step.image}
                        hasVideo={step.hasVideo}
                        video={step.video}
                        title={step.title}
                        description={step.description}
                        listItems={step.listItems}
                    />
                    {i === arr.length - 1 ? '' : <hr />}
                </>
            )}
        </section>
    )
}
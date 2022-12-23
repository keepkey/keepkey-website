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
import walletconnected from 'public/images/walletconnect/connected.png'
import connectedUniswap from 'public/images/walletconnect/connectedUniswap.png'

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
            'After choosing Uniswap, you see the application has been opened in the built in browser.',
        ]
    },
    {
        key: 2,
        image: options,
        hasVideo: false,
        title: 'Connect',
        listItems: [
            'Select the "WalletConnect" option of the Dapp',
            'This Will Open the Wallet Connect embed connection QR code. Shown in the next step',
        ]
    },
    {
        key: 3,
        image: connect,
        hasVideo: false,
        title: 'Copy',
        listItems: [
            'Click the "Copy to Clipboard" option.',
            'This will copy the Connection string to your systems clipboard.',
        ]
    },
    {
      key: 4,
      image: walletconnect,
      hasVideo: false,
      title: 'click on Wallet Connect',
      listItems: [
        'The Wallet connect option is in the top right corner of the KeepKey Desktop application. (click it)',
      ]
    },
    {
        key: 4,
        image: pasteString,
        hasVideo: false,
        title: 'Paste your connection string',
        listItems: [
            'Paste in your connection string.',
            '(note) this form will auto-fill from your systems clipboard if available',
        ]
    },
    {
        key: 4,
        image: walletconnected,
        hasVideo: false,
        title: 'Connected',
        listItems: [
            'Verify Your Dapp icon in your wallet connect session window. You can view this in the top right hand corner of the KeepKey Desktop application. This Icon should match uniswap  if it is correct'
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
            <h3>Intro</h3>
            <br/>
            <text>
                <p>
                    KeepKey makes it easy to interact with decentralized applications. You can use our in-app browser to easily access these dapps and use our wallet-connect integration to securely sign transactions. Our in-app browser ensures that you are always interacting with the correct version of the application you intend to access.                </p>
                <br/>
                <p>
                    Dapps (decentralized applications) are applications that run autonomously on a decentralized blockchain according to predefined smart contracts. Dapps and related protocols make up the decentralized finance (DeFi) ecosystem, which currently has a market value of hundreds of billions of dollars and is constantly growing. With KeepKey, you can securely access this DeFi ecosystem and take part in ventures such as decentralized lending, stable coin issuance, multi-chain swapping, liquidity pool providing, exchanges, games, gambling, storage, high-risk investments, governance, property, identity, media, and social applications. KeepKeys built-in DApp Store and in-app browser provide a secure and easy way to explore and interact with these dapps.
                </p>
            </text>
            <div className="grid xl:grid-cols-2 gap-16 xl:gap-26 2xl:gap-36 align-center py-20 lg:py-32 border-solid border-2 border-blue-900">
                <div className="self-center w-100">
                    <br/>
                    <h2>Dapp Store</h2>
                    <br/>
                    <p>
                        The KeepKey Desktop client has a built in DApp-Store. This store allows you to discover and connect to a list of decentralized applications.
                    </p>
                    <br/>
                    <p>
                        Here is a preview of our applications Dapp store. It has a featured application that introduces you to new an exciting Dapps. Below is a searchable list of available and commonly used dapps.
                    </p>
                    <br/>
                </div>
                <div>
                    <text>
                        <Image
                            height="400"
                            width="600"
                            src={store}>
                        </Image>
                    </text>
                </div>
            </div>

            <br/>
            <br/>
            <br/>
            <h2>Walkthrough</h2>

            <p>
                In this walkthough you will be shown to open a dapp the the desktop clients browser window. It will guide you through the steps of using wallet connect to connect your KeepKey to the decentralized application.
            </p>
            <br/>
            <div>
             These Steps will connect to a Dapp, copy a connection string to your clipboard, and save a connection string into the KeepKey Desktops application.
            </div>

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
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ShopifyBuyButton from '../components/ShopifyBuyButton'
// import { loadShopifyBuyButton } from '../components/ShopifyBuyButton'
import SecurityWarning from '../components/SecurityWarning'
import heroBgImage from 'public/images/heros/home.png'
import walletImage from 'public/images/hardware/wallet-hero.png'
import walletVertical from 'public/images/hardware/wallet-vertical.png'
import computerLockImage from 'public/images/icons/computer-lock.svg'
import shibaSpinning from 'public/images/icons/dogecoin-spinning.gif'
import backupImage from 'public/images/icons/backup.svg'
import ebStorageImage from 'public/images/icons/eb-storage.svg'
import pin from 'public/images/desktop/Pin.png'
import openSourceImage from 'public/images/icons/open-source.svg'
import walletDeskImage from 'public/images/heros/wallet-desk-grayscale.png'
import platform from 'platform-detect/os.mjs'
import axios from 'axios';
const shopifyBuyButtonId = 1663605399427;
const shop = 'https://keepkey.myshopify.com/collections/frontpage/products/keepkey-the-simple-bitcoin-hardware-wallet'
import { Button } from '@chakra-ui/react'
export default function Home() {

  // useEffect(() => {
  //   loadShopifyBuyButton(shopifyBuyButtonId);
  // }, []);

  return (
    <>
      <Head>
        <title>KeepKey Hardware Wallet - The Next Frontier of Crypto Security</title>
      </Head>
      <Hero />
      <FeaturesSection />
      <PromoSection />
      <LeadingCryptos />
      <ProductInfo />
      <div className="container">
        <SecurityWarning />
      </div>
      <TrustedBy />
    </>

  )
}

const Hero = () => {

  const [urlMacOS, seturlMacOS] = useState('')
  const [urlWindows, seturlWindows] = useState('')
  const [urlLinux, seturlLinux] = useState('')

  //find latest release
  let findLatestReleaseLinks = async function () {
    try {
      let resp = await axios({ method: 'GET', url: 'https://api.github.com/repos/keepkey/keepkey-desktop/releases/latest' })
      console.log('findLatestReleaseLinks', resp.data)
      let version = resp.data.tag_name
      version = version.replace("v", "")
      seturlMacOS("https://github.com/keepkey/keepkey-desktop/releases/download/v" + version + "/KeepKey-Desktop-" + version + ".dmg")
      seturlWindows("https://github.com/keepkey/keepkey-desktop/releases/download/v" + version + "/KeepKey-Desktop-Setup-" + version + ".exe")
      seturlLinux("https://github.com/keepkey/keepkey-desktop/releases/download/v" + version + "/KeepKey-Desktop-" + version + ".AppImage")

    } catch (e) {
      console.error(' e: ', e)
    }
  }

  useEffect(() => {
    findLatestReleaseLinks()
  }, []);

  return (
    <div className="relative z-0 pt-32 pb-20 lg:py-4 bg-black">
      <Image
        src={heroBgImage}
        alt='keepkey wallet on desk'
        layout="fill"
        objectFit="cover"
        quality={100}
        objectPosition="center"
        priority={true}
      >
      </Image>
      <div className="container relative grid lg:grid-cols-[730px_1fr] items-center text-center lg:text-left">
        <div>
          <h1 className="text-[39px] leading-tight tracking-wide lg:text-6xl lg:leading-tight font-bold text-white mb-4">The Next Frontier <br /> of Crypto Security</h1>
          <div className="w-[45%] mt-8 mb-5 mx-auto lg:hidden">
            <Image
              alt="KeepKey wallet"
              src={walletVertical}
              quality={100}
              priority={true}
              layout="responsive"
            >
            </Image>
          </div>
          <p className="text-xl leading-relaxed lg:text-2xl lg:leading-relaxed text-white mb-8 tracking-wide">KeepKey is the leading hardware wallet for securely storing digital assets. Our Dapp Store offers access to thousands of decentralized finance opportunities. Get started today and unlock the world of secure, decentralized finance.</p>

          <div className="w-100">

            <a className="btn btn-lg w-100" target="_blank" rel="noreferrer" href="https://keepkey.myshopify.com/collections/frontpage/products/keepkey-the-simple-bitcoin-hardware-wallet" >
              Buy Now
            </a>

            {platform.macos ? <div className="mb-4 inline-block ml-8">
              <Link href={urlMacOS}>
                <a className="btn btn-lg btn--transparent">Download for macOS </a>
              </Link>
            </div> : ""}

            {platform.windows ? <div className="mb-4 inline-block">
              <Link href={urlWindows}>
                <a className="btn btn-lg btn--transparent">Download for Windows</a>
              </Link>
            </div> : ""}

            {platform.linux ? <div className="mb-4 inline-block">
              <Link href={urlLinux}>
                <a className="btn btn-lg btn--transparent">Download for Linux</a>
              </Link>
            </div> : ""}

            <div className="ml-10 inline-block align-sub">
              <a href="https://keepkey.myshopify.com/collections/frontpage/products/keepkey-doge-mystery-box" target="_blank" rel="noreferrer">
                <Image
                  alt="Dogecoin logo"
                  src={shibaSpinning}
                  quality={100}
                  width={86}
                  height={86}
                >
                </Image>
              </a>
            </div>

            {/* <Link href="/get-started">
              <a className="btn btn-lg btn--transparent">Get Started</a>
            </Link> */}
          </div>


        </div>
        <div className="w-full mx-auto max-w-[200px] md:max-w-[400px] lg:max-w-[500px] lg:mt-40 hidden lg:block">
          <Image
            alt="KeepKey wallet"
            src={walletImage}
            height={760}
            unoptimized={true}
            objectFit="cover"
            priority={true}
            layout="responsive"
          >
          </Image>
        </div>
      </div>
    </div >
  )
}

//Features
interface Feature {
  key: number
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    key: 1,
    icon: computerLockImage,
    title: 'Stress-Free Security',
    description: 'Generate and manage your private keys offline in cold storage, guarded from computer vulnerabilities and viruses, while utilizing wallet software for safe transactions.'
  },
  {
    key: 2,
    icon: backupImage,
    title: 'Straightforward Backup and Recovery',
    description: 'Each device generates a 12-word recovery sentence during initialization that can be used to retrieve your private keys. Have peace of mind that your funds are secure, even if you lose or break your KeepKey.'
  },
  {
    key: 3,
    icon: ebStorageImage,
    title: 'Sleek and Simple Display',
    description: 'The large display gives clarity to every digital asset sent and received on your device. Each transaction must be manually approved using the confirmation button, giving you control and visibility over your transactions.'
  },
  {
    key: 4,
    icon: openSourceImage,
    title: 'Effortless Exchanges',
    description: 'Quickly exchange cryptocurrencies via the native Thorchain integration, directly from your wallet.'
  },
]

const FeaturesSection = () => {
  return (
    <section className="bg-white">
      <h2 className="text-center mb-20 px-4">The Premier Hardware Wallet</h2>
      <div className="container grid gap-24 md:grid-cols-2 xl:grid-cols-4">
        {features.map(feature =>
          <FeatureCard
            key={feature.key}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />

        )}
      </div>
    </section>
  )
}

const FeatureCard = (props: Feature) => {
  return (
    <div className="text-center">
      <Image
        src={props.icon}
        alt='image'
        width={60}
        height={60}
      >
      </Image>
      <h4 className="mt-6">{props.title}</h4>
      <p className="mt-3 tracking-wide">{props.description}</p>
    </div>
  )
}


const PromoSection = () => {
  return (
    <section className="bg-zinc-100">
      <div className="container grid gap-24 md:grid-cols-2">
        <div className="my-auto">
          <h2>Now with a stand alone application!</h2>
          <p className="font-bold mt-6 mb-4">A KeepKey-secured platform built to handle all of your crypto needs</p>
          <p>KeepKey now offers an open source application with a native RESTful API that simplifies the process of building dapps on the platform.</p>
        </div>
        <div className="max-w-xl">
          <Image
            src={pin}
            alt='desktop'
            layout="responsive"
            quality={100}
          >
          </Image>
        </div>
      </div>
    </section>
  )
}


import binanceIcon from 'public/images/icons/binance.png'
import ethIcon from 'public/images/icons/ethereum.png'
import bchIcon from 'public/images/icons/bch.png'
import litecoinIcon from 'public/images/icons/litecoin.png'
import dashIcon from 'public/images/icons/dash.png'
import btgIcon from 'public/images/icons/btg.png'
import goIcon from 'public/images/icons/go.png'

const LeadingCryptos = () => {
  return (
    <section className="relative z-0">
      <Image
        src={walletDeskImage}
        alt='keepkey wallet on desk'
        layout="fill"
        objectFit="cover"
        quality={100}
        objectPosition="center"
      >
      </Image>
      <div className="container text-center z-10 relative">
        <h2 className="text-white z-10">Supports the World’s Leading Cryptocurrencies</h2>
        <p className="text-white my-6">Send, receive, and store dozens of the leading tokens and coins available on the market.</p>
        <div className="flex justify-center mt-6">
          <div className="w-40"><Image src={binanceIcon} alt="binance icon" unoptimized={true}></Image></div>
          <div className="w-40"><Image src={ethIcon} alt="eth icon" unoptimized={true}></Image></div>
          <div className="w-40"><Image src={bchIcon} alt="bch icon" unoptimized={true}></Image></div>
          <div className="w-40"><Image src={litecoinIcon} alt="litecoin icon" unoptimized={true}></Image></div>
          <div className="w-40"><Image src={dashIcon} alt="dash icon" unoptimized={true}></Image></div>
          <div className="w-40"><Image src={btgIcon} alt="btg icon" unoptimized={true}></Image></div>
          <div className="w-40"><Image src={goIcon} alt="go icon" unoptimized={true}></Image></div>
        </div>
      </div>
    </section>
  )
}

import walletsStackedImage from 'public/images/hardware/wallets-stacked.png'
import walletHorizontal from 'public/images/hardware/wallet-horizontal.png'

const ProductInfo = () => {
  return (
    <section>
      <div className="container grid md:grid-cols-2 gap-16 gap-y-28 lg:gap-32 lg:gap-y-52">
        <div>
          <h2>A Hardware Wallet that’s as <br /> Serious About Crypto as You Are</h2>
          <p className="my-6">Whether you’re a newcomer or a veteran to the crypto community, we all have one thing in common: the critical need for secure storage of private keys for our digital assets.</p>
          <p className="font-bold">KeepKey gives you:</p>
          <ul className="list-disc pl-10">
            <li className="pt-4">PIN protection against unauthorized use</li>
            <li>Additional passphrase protection</li>
            <li>Customizable transaction speeds</li>
            <li>Limitless wallet addresses on one device</li>
          </ul>
          <Link href="/get-started">
            <a className="btn mt-8">Get Started</a>
          </Link>
        </div>
        <Image
          src={walletsStackedImage}
          alt='keepkey wallet on desk'
          quality={100}
        >
        </Image>
        <div className="order-2 md:order-none hidden md:block">
          <Image
            src={walletHorizontal}
            alt='keepkey wallet on desk'
            quality={100}
            layout="responsive"
          >
          </Image>
        </div>
        <div>
          <h2>Build on Keepkey!</h2>
          <p className="mt-6">Announcing the KeepKey SDK! Build on KeepKey! get started today.</p>
          <Link href="https://medium.com/@highlander_35968/building-on-the-keepkey-sdk-2023fda41f38">
            <a className="btn mt-8" target="_blank">Get started!</a>
          </Link>
        </div>
        <br/>
        <small>KeepKey is OSS: to contribute to donate here: bc1qfce6cck3tcy94v8s4q6fpfeusj0g8g27asaakh</small>
      </div>
    </section>
  )
}

import forbesImg from 'public/images/customers/forbes.png'
import cointelegraphImg from 'public/images/customers/cointelegraph.png'
import coindeskImg from 'public/images/customers/coindesk.png'
import nasdaqImg from 'public/images/customers/nasdaq.png'
import bitcoinMagazineImg from 'public/images/customers/bitcoin-magazine.png'

const TrustedBy = () => {
  return (
    <section className="bg-zinc-100 py-16 mt-32">
      <div className="container flex justify-between align-center">
        <div className="w-40"><Image src={forbesImg} alt="forbes logo" quality={100}></Image></div>
        <div className="w-40"><Image src={cointelegraphImg} alt="coin telegraph logo" quality={100}></Image></div>
        <div className="w-40"><Image src={coindeskImg} alt="coindesk logo" quality={100}></Image></div>
        <div className="w-40"><Image src={nasdaqImg} alt="nasdaq logo" quality={100}></Image></div>
        <div className="w-40"><Image src={bitcoinMagazineImg} alt="bitcoin magazine logo" quality={100}></Image></div>
      </div>
    </section>
  )
}

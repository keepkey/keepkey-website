import Head from 'next/head'
import Image from 'next/image'
import ShopifyBuyButton from '../components/ShopifyBuyButton'
import styles from '../styles/pages/Home.module.scss'
import walletImage from '../public/images/hardware/wallet-hero.png'
import computerLockImage from '../public/images/icons/computer-lock.svg'
import backupImage from '../public/images/icons/backup.svg'
import ebStorageImage from '../public/images/icons/eb-storage.svg'
import openSourceImage from '../public/images/icons/open-source.svg'
import shapeshiftDemoImage from '../public/images/software/shapeshift-demo.png'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PromoSection />
    </>

  )
}

const Hero = () => {
  return(
    <div className={`${styles.hero} flex items-center py-28`}>
    <div className="container relative grid lg:grid-cols-2 items-center mw-1200">
      <div className="max-w-2xl">
        <h1 className="text-6xl leading-snug tracking-wide font-bold text-white mb-4">The Next Frontier of Crypto Security</h1>
        <p className="text-2xl text-white mb-10 leading-relaxed tracking-wide">Protect your cryptocurrencies, store your private keys offline, and safeguard your 
          assets from hackers. It’s time to achieve financial freedom in the most secure way with KeepKey.</p>
        <ShopifyBuyButton></ShopifyBuyButton>
        <Link href="/onboarding">
          <a className="btn btn-lg btn--transparent mt-4">Get Started</a>
        </Link>

      </div>
      <div className={styles.hero__image} >
        <Image
          alt="KeepKey wallet"
          src={walletImage}
          unoptimized={true}
          layout="responsive"
                  >
        </Image>
      </div>
    </div>
  </div>
  )
}

//Features
interface Feature {
  key: number
  icon: string
  title: string
  description: string
}

export const features: Feature[] = [
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
    description: 'Quickly exchange cryptocurrencies via the ShapeShift integration, directly from your wallet.'
  },
]

const Features = () => {
  return (
    <section className="bg-white">
      <h2 className="text-center mb-20 tracking-wide">The Premier Hardware Wallet</h2>
      <div className="container grid gap-24 md:grid-cols-2 xl:grid-cols-4">
      {features.map(feature => 
        <FeatureCard 
          key = {feature.key}
          icon = {feature.icon}
          title = {feature.title}
          description = {feature.description}
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
      <div className="container grid md:grid-cols-2">
        <div>
          <h2>Now Available!</h2>
          <p className="font-bold mt-6 mb-4">A KeepKey-secured platform built to handle all of your crypto needs</p>
          <p>KeepKey is the premier wallet in the new ShapeShift Platform, a web-based interface that consolidates your many crypto tools into one, beautiful environment. Click below to experience a new era in hardware security.</p>
          <Link href="https://beta.shapeshift.com">
            <a className="btn mt-7">Explore Now</a>
          </Link>
        </div>
        <div className="max-w-xl">
          <Image
            src={shapeshiftDemoImage}
            alt='shapeshift demo'
            unoptimized={true}
            layout="responsive"
            // objectFit='contain'
            >
          </Image>
        </div>
      </div>
    </section>
  )
}
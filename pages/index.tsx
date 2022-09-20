import Head from 'next/head'
import Image from 'next/image'
import ShopifyBuyButton from '../components/ShopifyBuyButton'
import styles from '../styles/pages/Home.module.scss'
import walletImage from '../public/images/hardware/wallet-hero.png'
import computerLockImage from '../public/images/icons/computer-lock.svg'
import backupImage from '../public/images/icons/backup.svg'
import ebStorageImage from '../public/images/icons/eb-storage.svg'
import openSourceImage from '../public/images/icons/open-source.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />

    </>

  )
}

const Hero = () => {
  return(
    <div className={`${styles.hero} flex items-center py-28`}>
    <div className="container mx-auto px-4 relative grid lg:grid-cols-2 items-center mw-1200">
      <div className="max-w-2xl">
        <h1 className="text-6xl leading-snug tracking-wide font-bold text-white mb-4">The Next Frontier of Crypto Security</h1>
        <p className="text-2xl text-white mb-4 leading-relaxed tracking-wide">Protect your cryptocurrencies, store your private keys offline, and safeguard your 
          assets from hackers. It’s time to achieve financial freedom in the most secure way with KeepKey.</p>
        <ShopifyBuyButton></ShopifyBuyButton>
        <Link href="/onboarding">
          <a className="btn btn--transparent mt-4 ml-6">Get Started</a>
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
  icon: string
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: computerLockImage,
    title: 'Stress-Free Security',
    description: 'Generate and manage your private keys offline in cold storage, guarded from computer vulnerabilities and viruses, while utilizing wallet software for safe transactions.'
  },
  {
    icon: backupImage,
    title: 'Straightforward Backup and Recovery',
    description: 'Each device generates a 12-word recovery sentence during initialization that can be used to retrieve your private keys. Have peace of mind that your funds are secure, even if you lose or break your KeepKey.'
  },
  {
    icon: ebStorageImage,
    title: 'Sleek and Simple Display',
    description: 'The large display gives clarity to every digital asset sent and received on your device. Each transaction must be manually approved using the confirmation button, giving you control and visibility over your transactions.'
  },
  {
    icon: openSourceImage,
    title: 'Effortless Exchanges',
    description: 'Quickly exchange cryptocurrencies via the ShapeShift integration, directly from your wallet.'
  },
]

const Features = () => {
  return (
    <section className="bg-white">
      <h2 className="text-center text-4xl mb-20 tracking-wide">The Premier Hardware Wallet</h2>
      <div className="container mx-auto grid gap-24 md:grid-cols-2 xl:grid-cols-4">
      {features.map(feature => 
        <FeatureCard
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
          width={60}
          height={60}
          >
        </Image>
        <h4 className="text-2xl tracking-wide mt-6">{props.title}</h4>
        <p className="mt-3 text-lg tracking-wide">{props.description}</p>
      </div>
  )
}

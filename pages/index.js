import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.scss'
import Button from '../components/button'
import walletImage from '../public/images/hardware/wallet-hero.png'

export default function Home() {
  return(
    <div className={`${styles.hero} flex items-center`}>
      <div className="container mx-auto px-4 relative grid grid-cols-2 items-center">
        <div className="hero__text">
          <h1 className="hero__title font-bold text-white">The Next Frontier of Crypto Security</h1>
          <p className="hero__description text-white">Protect your cryptocurrencies, store your private keys offline, and safeguard your 
            assets from hackers. It’s time to achieve financial freedom in the most secure way with KeepKey.</p>
          <a href="/" className="btn btn-primary">Buy Now</a>
        </div>
        <div class={styles.hero__image} >
          <Image
            alt="KeepKey wallet"
            src={walletImage}
            layout="responsive"
                    >
          </Image>
        </div>
      </div>
    </div>
  )
}
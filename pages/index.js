import Head from 'next/head'
import Image from 'next/image'
import ShopifyBuyButton from '../components/ShopifyBuyButton'
import styles from '../styles/pages/Home.module.scss'
import walletImage from '../public/images/hardware/wallet-hero.png'

export default function Home() {
  return(
    <div className={`${styles.hero} flex items-center`}>
      <div className="container mx-auto px-4 relative grid grid-cols-2 items-center mw-1200">
        <div className={`${styles.hero__text}`}>
          <h1 className={`${styles.hero__title} font-bold text-white mb-4`}>The Next Frontier of Crypto Security</h1>
          <p className={`${styles.hero__description} text-white mb-4`}>Protect your cryptocurrencies, store your private keys offline, and safeguard your 
            assets from hackers. It’s time to achieve financial freedom in the most secure way with KeepKey.</p>
          {/* <a href="#" className="btn btn-primary mt-4">Buy Now</a> */}
          <ShopifyBuyButton></ShopifyBuyButton>

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


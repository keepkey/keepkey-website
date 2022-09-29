import Image from 'next/image'
import Link from 'next/link'
import supportedAppsImg from 'public/images/supported-applications/supported-apps-collage.png'
import shapeShiftDemoImg from 'public/images/software/shapeshift-demo-mac-md.png'
import styles from '../styles/pages/Onboarding.module.scss'
import heroBgImage from 'public/images/heros/geomatric-black.jpg'
import SecurityWarning from "../components/SecurityWarning"
export default function Onboarding() {
  return (
    <>
      <Hero />
      <Main />
    </>
  )
}


const Hero = () => {
  return(
    <div className="relative z-0 pt-44 pb-20 xl:py-72 bg-black">
      <Image
      src={heroBgImage}
      alt='keepkey wallet on desk'
      layout="fill"
      objectFit="cover"
      quality={100}
      objectPosition="center center"
      priority={true}
      >
      </Image>
      <div className="container relative grid lg:grid-cols-2 gap-x-8 2xl:gap-x-32 items-center">
        <div>
          <h1 className="text-4xl leading-tight tracking-wide lg:text-5xl lg:leading-tight 2xl:text-6xl 2xl:leading-tight font-bold text-white mb-4">Support for Leading Crypto Applications</h1>
          <p className="text-2xl text-white mb-8 leading-relaxed tracking-wide">See below for a list of our recommendations.</p>

        </div>
          <div className="w-100 xl:w-[600px] 2xl:w-[700px]">
            <Image
              alt="KeepKey wallet"
              src={supportedAppsImg}
              quality={100}
                      >
            </Image>
          </div>
      </div>

    </div>
  )
}


import shapeShiftLogo from 'public/images/supported-applications/shapeshift-block-black.jpg' 
import electrumLogo from 'public/images/supported-applications/electrum-block-black.png' 
import myCryptoLogo from 'public/images/supported-applications/mycrypto-block-black.png' 


const Main = () => {
  return (
    <section>
      <div className="container grid gap-y-24 md:gap-y-48">

        <div className="grid md:grid-cols-2 gap-y-10 gap-x-24 lg:gap-32">
          <div className="self-center order-1 md:order-none">
            <h2>ShapeShift</h2>
            <p className="my-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem est, soluta temporibus vitae atque ipsam deleniti error quasi impedit, earum adipisci accusamus quos, ad minima. Laborum, facere. Fugit, voluptate adipisc.</p>
          <Link href="https://app.shapeshift.io">
            <a className="btn mt-8" target="_blank">Get Started</a>
          </Link>
          </div>
          <div className="w-100">
            <Image
              src={shapeShiftLogo}
              alt='shapeshift logo'
              quality={100}
              layout="responsive"
              >
            </Image>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-y-10 gap-x-24 lg:gap-32">
          <div className="w-100 relative">
            <Image
              src={electrumLogo}
              alt='my crypto logo'
              quality={100}
              >
            </Image>
            </div>
            <div className="self-center">
              <h2>Electrum</h2>
              <p className="mt-6">Electrum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati repellat dolores necessitatibus quae animi. Odio eos vero ab quibusdam repudiandae a nam ut earum, veniam voluptatibus itaque, labore vel. ipsum</p>
              <Link href="https://interfect.github.io/#!/posts/004-KeepKey-and-Electrum.md">
              <a className="btn mt-8" target="_blank">View the Guide</a>
              </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-y-10 gap-x-24 lg:gap-32">
          <div className="order-1 md:order-none">
            <h2>MyCrypto</h2>
            <p className="my-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem est, soluta temporibus vitae atque ipsam deleniti error quasi impedit, earum adipisci accusamus quos, ad minima. Laborum, facere. Fugit, voluptate adipisc.</p>
            <Link href="https://coinguides.org/electrum-multisig-wallet/">
            <a className="btn mt-8" target="_blank" >Read the Guide</a>
            </Link>
          </div>
          <div className="w-100">
            <Image
              src={myCryptoLogo}
              alt='mycrypto logo'
              quality={100}
              layout="responsive"
              >
            </Image>
          </div>
        </div>
      </div>
    </section>
  )
}
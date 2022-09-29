import Image from 'next/image'
import Link from 'next/link'
import supportedAppsImg from 'public/images/supported-applications/supported-apps-collage.png'
import shapeShiftDemoImg from 'public/images/software/shapeshift-demo-mac-md.png'
import styles from '../styles/pages/Onboarding.module.scss'
import heroBgImage from 'public/images/heros/community-web.jpg'
import SecurityWarning from "../components/SecurityWarning"
export default function Onboarding() {
  return (
    <>
      <Hero />
      <div className="h-96">
        <div className="my-80"></div>
      </div>
      {/* <Main /> */}
    </>
  )
}


const Hero = () => {
  return(
    <>
      <div className="relative z-0 pt-28 pb-20 lg:pt-52 lg:pb-36 bg-black">
        <Image
        src={heroBgImage}
        alt='keepkey wallet on desk'
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
        objectPosition="center center"
        >
        </Image>
        <div className="container relative grid xl:grid-cols-[650px_1fr] items-center z-10">
          <div>
            <h1 className="text-4xl xl:text-6xl leading-tight tracking-wide font-bold text-white mb-4">Community</h1>
            {/* <p className="text-2xl text-white mb-8 leading-relaxed tracking-wide">See below for a list of our recommendations.</p> */}

          </div>
            <div className="absolute max-w-[650px] top-[-70px] right-[-30px]">
              {/* <Image
                alt="KeepKey wallet"
                src={supportedAppsImg}
                quality={100}
                        >
              </Image> */}
            </div>
        </div>

      </div>
  </>
  )
}


import shapeShiftLogo from 'public/images/supported-applications/shapeshift-block-black.jpg' 
import electrumLogo from 'public/images/supported-applications/electrum-block-black.png' 
import myCryptoLogo from 'public/images/supported-applications/mycrypto-block-black.png' 


const Main = () => {
  return (
    <section>
      <div className="container grid md:grid-cols-2 gap-32 gap-y-48">
        <div className="self-center">
          <h2>ShapeShift</h2>
          <p className="my-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem est, soluta temporibus vitae atque ipsam deleniti error quasi impedit, earum adipisci accusamus quos, ad minima. Laborum, facere. Fugit, voluptate adipisc.</p>
          {/* <p className="font-bold">KeepKey gives you:</p> */}
          {/* <ul className="list-disc pl-10">
            <li className="pt-4">PIN protection against unauthorized use</li>
            <li>Additional passphrase protection</li>
            <li>Customizable transaction speeds</li>
            <li>Limitless wallet addresses on one device</li>
          </ul> */}
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

        <div className="self-center">
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
    </section>
  )
}
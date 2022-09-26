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
    <>
      <div className="relative z-0 py-80 bg-black">
        <div className={styles.hero__img}>
          <Image
          src={heroBgImage}
          alt='keepkey wallet on desk'
          layout="fill"
          objectFit="cover"
          quality={100}
          objectPosition="center center"
          >
          </Image>
        </div>
        <div className="container relative grid xl:grid-cols-[650px_1fr] items-center z-10">
          <div>
            <h1 className="text-6xl leading-tight tracking-wide font-bold text-white mb-4">Support for Leading Crypto Applications</h1>
            <p className="text-2xl text-white mb-8 leading-relaxed tracking-wide">See below for a list of our recommendations.</p>

          </div>
            <div className="absolute max-w-[650px] top-[-70px] right-[-30px]">
              <Image
                alt="KeepKey wallet"
                src={supportedAppsImg}
                quality={100}
                        >
              </Image>
            </div>
        </div>

      </div>
  </>
  )
}


const Main = () => {
  return (
    <section>
      <div className="">

      </div>
    </section>
  )
}
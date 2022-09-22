import Image from 'next/image'
import Link from 'next/link'
import shapeShiftDemoImg from 'public/images/hardware/shapeshift-with-keepkey.png'
import styles from '../styles/pages/Onboarding.module.scss'
import heroBgImage from 'public/images/heros/golden-lines-lg.jpg'
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
      <div className="relative z-0 py-80">
        <div className={styles.hero__img}>
          <Image
          src={heroBgImage}
          alt='keepkey wallet on desk'
          layout="fill"
          objectFit="cover"
          quality={100}
          objectPosition="center"
          >
          </Image>
        </div>
        <div className="container relative grid xl:grid-cols-2 items-center z-10">
          <div>
            <h1 className="text-5xl leading-tight tracking-wide font-bold text-white mb-4">KeepKey Works Seamlessly with the ShapeShift Platform</h1>
            <p className="text-2xl text-white mb-8 leading-relaxed tracking-wide">Follow the guide below to get started using your KeepKey.</p>

          </div>
            <div className="absolute max-w-[850px] top-[-50px] right-[-150px]">
              <Image
                alt="KeepKey wallet"
                src={shapeShiftDemoImg}
                width={1200}
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
      <SecurityWarning/>
      <div className="grid lg:grid-cols-2 py-20">

      </div>
    </section>
  )
}
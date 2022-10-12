import Head from 'next/head'
import Image from 'next/image'
import shapeShiftDemoWalletImg from 'public/images/hardware/shapeshift-with-keepkey.png'
import shapeShiftDemoImg from 'public/images/software/shapeshift-demo-mac-md.png'
import heroBgImage from 'public/images/heros/golden-lines-lg.jpg'
import SecurityWarning from "../components/SecurityWarning"

export default function Onboarding() {
  return (
    <>
      <Head>
        <title>Onboarding | KeepKey</title>
      </Head>
      <Hero />
      <Main />
    </>
  )
}


const Hero = () => {
  return (
    <div className="relative z-0 pt-44 pb-20 xl:py-72 bg-black">
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
      <div className="container relative grid lg:grid-cols-2 gap-x-20 items-center z-10">
        <div>
          <h1 className="text-4xl leading-tight tracking-wide lg:text-5xl lg:leading-tight 2xl:text-6xl 2xl:leading-tight font-bold text-white mb-4">KeepKey Works Seamlessly with the ShapeShift Platform</h1>
          <p className="text-xl leading-relaxed lg:text-2xl lg:leading-relaxed text-white mb-8 tracking-wide">Follow the guide below to get started using your KeepKey.</p>

        </div>
        <div className="xl:absolute xl:max-w-[650px] xl:right-0 2xl:max-w-[765px] 2xl:right-[-150px]">
          <Image
            alt="KeepKey wallet"
            src={shapeShiftDemoWalletImg}
            quality={100}
          >
          </Image>
        </div>
      </div>

    </div>
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

const steps: Step[] = [
  {
    key: 1,
    image: shapeShiftDemoImg,
    hasVideo: false,
    title: '1. Go to <a class="text-gold font-medium text-3xl hover:underline" target="_blank" href="https://app.shapeshift.com">app.shapeshift.com</a>',
    listItems: [
      'Plug the KeepKey into your computer.',
      'On upper left corner of the screen, select “Connect a wallet”, then select “KeepKey” in the window that opens.',
      'In the next screen that opens, agree to the terms and click “Pair KeepKey.”',
      'Highlight the KeepKey you would like to pair and then click "Connect".'
    ]
  },
  {
    key: 2,
    hasVideo: true,
    video: '<iframe class="responsive-video" src="https://www.youtube.com/embed/FO-k684Dti4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    title: '2. Update your device',
    listItems: [
      'If see a message to update your device. Select “Download Updater App”.Then, select “Get the app.”',
      'Install and launch the software (Important: make sure to close ShapeShift on your browser, since only one application can interact with the KeepKey at a time).',
      'Once the application has detected your device, select “update now.”',
      'Please follow the on-screen instruction carefully. If you get confused at any point, please make sure to watch the video.',
      'Once you have updated your device, close the application. Then go to <a class="text-gold hover:underline" target="_blank" href="https://app.shapeshift.com">app.shapeshift.com</a>'
    ]
  },
  {
    key: 3,
    hasVideo: true,
    video: '<iframe class="responsive-video" src="https://www.youtube.com/embed/YSeLTYhkQf8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    title: '3. Initialize your Device',
    listItems: [
      'On the upper left corner of the screen, select “Connect a wallet”, then select “KeepKey” in the window that opens.',
      'On the screen that opens select “Initialize KeepKey”.',
      'On the following screen, select “Continue”.”',
      'Follow the instructions on the next few screens, to label your wallet, set up a PIN code and get your back up phrase, as seen in the video.',
      'Once you have finished setting up your KeepKey, you’re ready to go.'
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
            width={1200}
            quality={100}
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
      <SecurityWarning />
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
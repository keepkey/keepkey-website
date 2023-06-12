import Image from 'next/image'
import Link from 'next/link'
import heroBgImage from 'public/images/heros/golden-lines-lg.jpg'
import unboxImage from 'public/images/heros/keepkey-unboxed.jpeg'
import connectImage from 'public/images/desktop/Connecting.png'
import pin from 'public/images/desktop/Pin.png'
import download from 'public/images/desktop/Download.png'
import updaterMode from 'public/images/desktop/UpdaterMode.png'
import bootloader from 'public/images/desktop/Bootloader.png'
import firmware from 'public/images/desktop/Firmware.png'
import createWallet from 'public/images/desktop/CreateWallet.png'
import recoverWallet from 'public/images/desktop/Recover.png'
import axios from "axios";
import { useEffect, useState } from "react";

export default function Onboarding() {
  return (
    <>
      <Hero />
      <Main />
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
          <h1 className="text-4xl leading-tight tracking-wide lg:text-5xl lg:leading-tight 2xl:text-6xl 2xl:leading-tight font-bold text-white mb-4">Introducing the new KeepKey Client</h1>
          <p className="text-xl leading-relaxed lg:text-2xl lg:leading-relaxed text-white mb-8 tracking-wide">Follow the guide below to get started using your KeepKey.</p>
          <Link href={urlMacOS}>
            <a className="btn btn-md btn--transparent mb-5 md:mr-5">download for macOS </a>
          </Link>
          <Link href={urlWindows}>
            <a className="btn btn-md btn--transparent mb-5 md:mr-5">download for Windows </a>
          </Link>
          <Link href={urlLinux}>
            <a className="btn btn-md btn--transparent mb-5">download for Linux </a>
          </Link>
        </div>
        <div className="mb-10">
          <iframe style={{ aspectRatio: '16/9', width: '100%' }} src="https://www.youtube.com/embed/js6VMMvz9aQ" title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
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

// @ts-ignore
const steps: Step[] = [
  {
    key: 1,
    image: download,
    hasVideo: false,
    title: '1. <a class="text-gold font-medium text-3xl hover:underline" target="_blank" href="https://github.com/keepkey/keepkey-desktop/releases/latest">Download the latest KeepKey Client</a>',
    listItems: [
      'Select the appropriate download for your OS.',
      'note: (linux users) usb drivers: <a class="text-gold font-medium text-1xl hover:underline" target="_blank" href="https://github.com/keepkey/udev-rules"> Update your Udev rules</a>',
      'note: (linux users) you may need to chmod your download file to run the application and connect via USB',
      'note: (Windows users) you may need continue past unsafe download errors'
    ]
  },
  {
    key: 2,
    image: unboxImage,
    hasVideo: false,
    // video: '<iframe class="responsive-video" src="https://www.youtube.com/watch?v=bKG0c7xNIFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    title: '2. Unbox your device',
    listItems: [
      'Prepare your materials for mnemonic recovery phrase storage',
    ]
  },
  {
    key: 3,
    image: connectImage,
    hasVideo: false,
    // video: '<iframe class="responsive-video" src="https://www.youtube.com/watch?v=bKG0c7xNIFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    title: '3. Connect your Device',
    listItems: [
      'Connect your KeepKey to your computer',
    ]
  },
  {
    key: 4,
    image: updaterMode,
    hasVideo: false,
    // video: '<iframe class="responsive-video" src="https://www.youtube.com/watch?v=bKG0c7xNIFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    title: '4. Enter Updater Mode',
    listItems: [
      'Unplug Device',
      'Hold Down Button on KeepKey',
      'Plug Device back in',
    ]
  },
  {
    key: 5,
    image: bootloader,
    hasVideo: false,
    // video: '<iframe class="responsive-video" src="https://www.youtube.com/watch?v=bKG0c7xNIFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    title: '5. Update your Devices Bootloader',
    listItems: [
      'Do NOT unplug your keepkey while uploading!',
      'You will be prompted to unplug and reconnect your device',
      'Do not disconnect your device until prompted to do so on device',
    ]
  },
  {
    key: 6,
    image: firmware,
    hasVideo: false,
    // video: '<iframe class="responsive-video" src="https://www.youtube.com/watch?v=bKG0c7xNIFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    title: '6. Update Your devices Firmware',
    listItems: [
      'The Latest Firmware is required to use the platform',
    ]
  },
  {
    key: 7,
    image: createWallet,
    hasVideo: false,
    // video: '<iframe class="responsive-video" src="https://www.youtube.com/watch?v=bKG0c7xNIFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    title: '7. Create your Wallet',
    listItems: [
      'Initialize your wallet by generating a new Mnemonic recovery phrase',
    ]
  },
  {
    key: 8,
    image: recoverWallet,
    hasVideo: false,
    // video: '<iframe class="responsive-video" src="https://www.youtube.com/watch?v=bKG0c7xNIFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    title: '8. (optional) Restore your Wallet using a Mnemonic recovery phrase',
    listItems: [
      'You Will be Prompted to use a cypher to enter text via your keyboard',
      'Never Enter your Mnemonic recovery phrase in an application without using a cypher',
      'Any Application asking to enter a Mnemonic recovery phrase without a cypher is a scam!',
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
      <div className="self-center w-100 max-w-[600px]">
        {props.hasVideo ?
          <div className="">
            <div dangerouslySetInnerHTML={{ __html: props.video }}></div>
          </div>
          :
          <Image
            alt="KeepKey wallet"
            src={props.image}
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
      {/*<SecurityWarning />*/}
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
      <div><h4>Still unable to connect? troubleshoot </h4></div>
      <a href="https://medium.com/@highlander_35968/troubleshooting-connections-with-the-keepkey-4599f1aaee0" rel="noreferrer" target="_blank">more information here</a>
    </section>
  )
}

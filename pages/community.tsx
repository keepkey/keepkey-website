import Image from 'next/image'
import heroBgImg from 'public/images/heros/community-web.jpg'
import HeroSimple from '../components/hero-simple';
const pageTitle = "Community"

export default function Onboarding() {

  return (
    <>
      <HeroSimple
        heroBgImg={heroBgImg}
        pageTitle={pageTitle}
      />
      <Main />
    </>
  )
}


import discordIcon from 'public/images/icons/discord.svg'
import redditIcon from 'public/images/icons/reddit.svg'
import dworkIcon from 'public/images/icons/dwork.png'
import securityIcon from 'public/images/icons/security.svg'
import salesIcon from 'public/images/icons/sales-marketing.png'
import githubIcon from 'public/images/icons/github.svg'

interface CommunityCard {
  icon: string,
  url: string,
  title: string,
  description: string,
  external?: boolean
}

const communityCards: CommunityCard[] = [
  {
    icon: discordIcon,
    url: 'https://discord.gg/fYB4DPmQtW',
    title: 'Discord',
    description: 'Join KeepKeys Discord Server',
    external: true
  },
  {
    icon: redditIcon,
    url: 'https://www.reddit.com/r/keepkeydevs',
    title: 'Reddit',
    description: 'Start a thread or ask a question for the community.',
    external: true
  },
  {
    icon: dworkIcon,
    url: 'https://app.dework.xyz/shapeshift-dao/keepkey-bounties',
    title: 'Bounty hunters',
    description: 'Contribute to the KeepKey DAO. View the current bounties on dework.',
    external: true
  },
  {
    icon: securityIcon,
    url: 'https://www.keepkey.com/security',
    title: 'Security researchers',
    description: 'Links to our responsible disclosures.',
    external: true
  },
  {
    icon: salesIcon,
    url: 'https://keepkey-referral.vercel.app/',
    title: 'Sales/Marketing',
    description: 'View our affiliate programs.',
    external: true
  },
  {
    icon: githubIcon,
    url: 'https://github.com/keepkey',
    title: 'Github repos',
    description: 'Got some developer skills? Check out our Github! We always welcome new contributors. Please also join one of our dev channels in Discord to say hello!',
    external: true
  },
]

const Main = () => {
  return (
    <section className="container max-w-4xl">
      <h2 className="text-center mb-16">Engage with us</h2>

      <div className="container grid md:grid-cols-2 gap-8 gap-y-10">

        {communityCards.map((card, index) =>

          <CommunityCard
            key={index}
            icon={card.icon}
            url={card.url}
            title={card.title}
            description={card.description}
            external={card.external}
          />
        )}


      </div>
    </section>
  )
}

const CommunityCard = (props: CommunityCard) => {
  return (

    <a href={props.url} target={props.external ? "_blank" : " "} rel="noreferrer">
      <div className="text-center h-full min-h-[300px] border-solid border-[1px] border-gray-300 px-8 py-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="w-16 mx-auto">
          <Image
            alt="Discord Icon"
            src={props.icon}
            quality={100}
            layout="responsive"
          >
          </Image>
        </div>
        <h3 className="py-6 text-black">{props.title}</h3>
        <p className="text-[16px] text-black" dangerouslySetInnerHTML={{ __html: props.description }}></p>
      </div>
    </a>

  )
}

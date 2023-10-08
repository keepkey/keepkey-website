import Image from 'next/image'
import heroBgImg from 'public/images/heros/community-web.jpg'
import HeroSimple from '../components/hero-simple';
const pageTitle = "Authorized Resellers"

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


import brazilIcon from 'public/images/flags/brazil.png'
import polandIcon from 'public/images/flags/poland.png'
import shapeshiftIcon from 'public/images/supported-applications/shapeshift-block-black.jpg'
import cryptherionIcon from 'public/images/resellers/cryptherion.svg'
import cryptomerchant from 'public/images/resellers/thecryptomerchant.png'
import cointrustIcon from 'public/images/resellers/cointrust.png'
import kriptoIcon from 'public/images/resellers/kripto-siyah.png'
// import discordIcon from 'public/images/icons/discord.svg'
// import redditIcon from 'public/images/icons/reddit.svg'
import dworkIcon from 'public/images/icons/dwork.png'
import securityIcon from 'public/images/icons/security.svg'
import salesIcon from 'public/images/icons/sales-marketing.png'
import githubIcon from 'public/images/icons/github.svg'

interface CommunityCard {
  icon: any,
  url: string,
  title: string,
  description: string,
  external?: boolean
}

const communityCards: CommunityCard[] = [
  {
    icon: polandIcon,
    url: 'https://keepkey.pl',
    title: 'Poland',
    description: 'email: sklep@keepkey.pl and phone: +48 572 275 572',
    external: true
  },
  {
    icon: brazilIcon,
    url: 'https://keepkeybr.myshopify.com/products/carteira-keepkey-classic',
    title: 'Brazil',
    description: 'twitter: @ShapeShiftDAOBR',
    external: true
  },
  {
    icon: shapeshiftIcon,
    url: 'https://swag.shapeshift.com/',
    title: 'ShapeShift',
    description: 'ShapeShift DAO swag store.',
    external: true
  },
  // {
  //   icon: cryptherionIcon,
  //   url: 'https://cryptherion.io/',
  //   title: 'cryptherion',
  //   description: 'Reseller in The Netherlands.',
  //   external: true
  // },
  {
    icon: cointrustIcon,
    url: 'https://cointrust.se/',
    title: 'Cointrust',
    description: 'Reseller in Sweden.',
    external: true
  },
  {
    icon: cryptomerchant,
    url: 'https://www.thecryptomerchant.com/',
    title: 'The Crypto Merchant',
    description: 'Reseller South America.',
    external: true
  },
   {
    icon: kriptoIcon,
    url: 'https://kriptolojik.com/',
    title: 'Kriptologic',
    description: 'Reseller Turkey.',
    external: true
  }
  
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

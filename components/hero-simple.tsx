
import Image, { StaticImageData } from 'next/image'

interface Props {
    heroBgImg: StaticImageData,
    pageTitle: string
  }

const Hero = ({ heroBgImg, pageTitle }: Props) => {

    return(
        <div className="relative z-0 pt-28 pb-20 lg:pt-52 lg:pb-36 bg-black">
            <Image
            src={heroBgImg}
            alt='keepkey wallet on desk'
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
            objectPosition="center center"
            >
            </Image>
            <div className="container relative z-10">
                <div className="">
                <h1 className="text-4xl xl:text-6xl leading-tight tracking-wide font-bold text-white mb-4">{pageTitle}</h1>
                {/* <p className="text-2xl text-white mb-8 leading-relaxed tracking-wide">See below for a list of our recommendations.</p> */}
                </div>
                <div className="absolute max-w-[650px] top-[-70px] right-[-30px]">
                </div>
            </div>
        </div>
      )
  }

export default Hero;
  
  
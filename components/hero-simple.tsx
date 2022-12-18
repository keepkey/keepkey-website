
import Image, { StaticImageData } from 'next/image'
import React from "react";

interface Props {
    heroBgImg: StaticImageData,
    pageTitle: string,
    assets?: string,
    blockchains?: string,
    dapps?: string
  }

const Hero = ({ heroBgImg, pageTitle, assets, blockchains, dapps }: Props) => {

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
                    <div className="text-2xl xl:text-6xl leading-tight tracking-wide font-bold text-white mb-4">
                        {assets ? <div>Supported Assets: {assets}</div> : <div></div>}
                        {blockchains ? <div>Supported Blockchains: {blockchains}</div> : <div></div>}
                        {dapps ? <div>Supported Dapps: {dapps}</div> : <div></div>}
                    </div>
                {/* <p className="text-2xl text-white mb-8 leading-relaxed tracking-wide">See below for a list of our recommendations.</p> */}
                </div>
            </div>
        </div>
      )
  }

export default Hero;
  
  
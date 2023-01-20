
import Image, { StaticImageData } from 'next/image'
import React from "react";

interface Props {
    heroBgImg: StaticImageData,
    pageTitle: string,
    subTitle?: string,
    assets?: string,
    blockchains?: string,
    dapps?: string
}

const Hero = ({ heroBgImg, pageTitle, subTitle, assets, blockchains, dapps }: Props) => {

    return (
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
                <h1 className="text-[39px] leading-tight tracking-wide lg:text-6xl lg:leading-tight font-bold text-white mb-5">{pageTitle}</h1>
                <div className="text-2xl xl:text-6xl leading-tight tracking-wide font-bold text-white mb-4">
                    {assets ? <h3 className="mb-3">Supported Assets: {assets}</h3> : ''}
                    {blockchains ? <h3 className="mb-3">Supported Blockchains: {blockchains}</h3> : ''}
                    {dapps ? <h3>Supported Dapps: {dapps}</h3> : ''}
                </div>
                {subTitle ? <p className="text-3xl text-white mb-8 leading-relaxed tracking-wide">{subTitle}</p> : ''}
            </div>
        </div>
    )
}

export default Hero;


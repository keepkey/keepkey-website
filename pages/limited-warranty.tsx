import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import supportedAppsImg from 'public/images/supported-applications/supported-apps-collage.png'
import heroBgImage from 'public/images/heros/geomatric-black.jpg'
import { loadShopifyBuyButton } from '../components/ShopifyBuyButton'
import ShopifyBuyButton from '../components/ShopifyBuyButton'
const shopifyBuyButtonId = 1665077510555;
const pageTitle = "Limited Warranty"

export default function Onboarding() {

    return (
        <>
            <Head><title>{pageTitle} | KeepKey</title></Head>
            <Hero />
            <Main />
        </>
    )
}


const Hero = () => {
    return (
        <div className="relative z-0 pt-44 pb-20 xl:py-72 bg-black">

        </div>
    )
}


import shapeShiftLogo from 'public/images/supported-applications/shapeshift-block-black.jpg'
import electrumLogo from 'public/images/supported-applications/electrum-block-black.png'
import myCryptoLogo from 'public/images/supported-applications/mycrypto-block-black.png'


const Main = () => {
    return (
        <section>
            <div className="container grid ">
                <h2>Limited Warranty
                </h2>
                <p className="my-6"></p>
                KeepKey, LLC (“KeepKey”) warrants to end user, that its product, excluding content and or software supplied with or on the product,
                will be free from material defects in manufacture, will conform to KeepKey’s published product specifications and be fit for normal use
                during the applicable Warranty Period commencing on the date of purchase. THE APPLICABLE WARRANTY PERIOD SHALL BE ONE YEAR FROM THE DATE OF PURCHASE.
                To make a warranty claim please contact KeepKey at support@keepkey.com within the Warranty Period and provide proof of purchase
                (showing date and place of purchase and name of the reseller, if any) and the product name, type and number.
                <br/>
                You may return the product by following the guidelines listed. For further information see www.keepkey.com and select “support”.
                KeepKey may at its option repair this product or provide you with an equivalent product; and if unable to repair or replace the product, will refund the purchase price.
                Neither KeepKey nor any parent, officer, director, member, shareholder agent, employee or joint venturer of KeepKey shall be liable for any direct, indirect,
                consequential, incidental or special damages whatever, including, without limitation, business interruption, extra expense, loss of profits,
                loss of property (for purposes of this warranty the term “property” shall specifically include any Bitcoin or any other form of crypto-currency/property
                stored or maintained on the product), loss of use of property, delay or damages consequential upon delay and/or loss of use or loss of use of property,
                or for damage caused by improper use (including use in an incompatible device and use not in accordance with the instructions), or by improper installation,
                unprofessional repair, modification or accident, whether resulting from negligence, breach of contract, failure of essential purpose, or otherwise,
                and even if the possibility of such is or was foreseeable by end user, KeepKey, LLC or any other person or entity. For purposes of this Agreement,
                the foregoing types of excluded damages shall include any cost arising out of a product recall. This constitutes KeepKey’s entire liability which will never exceed
                the price you paid for it, plus the necessary costs you made for the warranty claim.
                <br/>
                **KEEPKEY DISCLAIMS ALL EXPRESS AND IMPLIED WARRANTIES TO THE FULLEST EXTENT PERMITTED BY LAW.
                IF KEEPKEY CANNOT DISCLAIM IMPLIED WARRANTIES UNDER APPLICABLE LAW, THEN TO THE EXTENT POSSIBLE, SUCH IMPLIED WARRANTIES ARE LIMITED TO THE DURATION OF THE EXPRESS WARRANTY.
                THE WARRANTY DURATION ON ANY REPLACED PRODUCT WILL BE THAT PORTION OF THE WARRANTY PERIOD REMAINING ON YOUR ORIGINAL PRODUCT.**
                <br/>
                National, state and local laws may grant you other rights that are not affected by this warranty.
            </div>

        </section>
    )
}
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
        <div className="relative z-0 pt-44 pb-20 xl:py-48 bg-black">

        </div>
    )
}


import shapeShiftLogo from 'public/images/supported-applications/shapeshift-block-black.jpg'
import electrumLogo from 'public/images/supported-applications/electrum-block-black.png'
import myCryptoLogo from 'public/images/supported-applications/mycrypto-block-black.png'


const Main = () => {
    return (
        <section>
            <div className="container grid">

                <h2>KEEPKEY NON-REFUND POLICY</h2>
                <h4>No Refunds or Returns</h4>
                <p className="my-6">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Pursuant to this policy (hereinafter referred to as "Policy"), all purchases made through KeepKey (hereinafter referred to as "Company" or "We") are conclusively deemed final. We explicitly do not offer refunds or accept returns for any purchased products, irrespective of any circumstances or conditions, including but not limited to defects in materials, workmanship, packaging, or shipping.
                </p>

                <h4>Purchase Verification</h4>
                <p className="my-6">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    It is the sole responsibility of the customer (hereinafter referred to as "You") to ensure the veracity and appropriateness of your product selection prior to confirmation of your purchase. The Company disclaims all liability for any errors, inaccuracies, or misunderstandings concerning the nature, specifications, or quantity of the product(s) ordered.
                </p>

                <h4>Exceptions</h4>
                <p className="my-6">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Regardless of the product's condition upon receipt or the condition of the original packaging, the Company maintains an unwavering no-returns and no-refunds policy. No exceptions shall be made to this policy, including but not limited to instances of perceived product malfunction, dissatisfaction, or miscommunication.
                </p>

                <h4>Proof of Purchase</h4>
                <p className="my-6">
                    Please note that a valid receipt or proof of purchase will be necessary for any and all interactions with our customer support services, regardless of the nature of the request. Any service requests without such a valid proof of purchase may be unilaterally rejected by the Company.
                </p>

                <h4>Limitation of Liability</h4>
                <p className="my-6">
                    To the extent permitted by law, in no event shall the Company be liable for any direct, indirect, punitive, incidental, special, consequential damages or any damages whatsoever arising out of or connected with the use or misuse of its products. Certain state laws do not allow limitations on implied warranties or the exclusion or limitation of certain damages. If these laws apply to you, some or all of the above disclaimers, exclusions, or limitations may not apply to you, and you might have additional rights.
                </p>

                <p className="my-6">
                    By placing an order with the Company, you expressly acknowledge and agree to this Policy in its entirety. If you do not agree with this Policy, you are advised not to proceed with your purchase.
                </p>
                    </div>
        </section>
    )
}

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

                        <h2>KeepKey Refund Policy
                        </h2>
                        <h4>Refunds</h4>
                        <p className="my-6"></p>
                        To be eligible for a return, your item must be in the same condition that you received it. It must also be in the original packaging. To complete your return, we require a receipt or proof of purchase.
                        <br/>

                        Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.

                        <br/>

                        If you are approved, then your refund will be processed, and a representative from KeepKey will contact you for your preferred method of payment.
                        <br/>
                        <h4>Late or Missing Refunds</h4>
                        If you have not received a refund by this point, please contact us at support@keepkey.com.
                        <br/>
                        <h4>Bitcoin Payment Refunds</h4>
                        Refunds for orders paid with BTC will be issued for the full USD value of the order and processed at the BTC exchange rate when the refund is completed.
                        <br/>
                        <h4>Exchanges</h4>
                        We will only replace defective devices. If you need to exchange your KeepKey, please contact customer support.
                        <br/>
                        <h4>Shipping</h4>
                        Please return your device to:
                        <br/>
                        Key Hodlers, LLC\
                        1550 Larimer St. Suite 221\
                        Denver, CO 80202
                        <br/>
                        You will be responsible for paying for return shipping costs. The cost of shipping is non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
                        <br/>

                        Shipping times may vary.
                        <br/>

                        We highly recommend that you choose a shipping method with tracking information and proof of delivery.
                        <br/>
                    </div>
        </section>
    )
}
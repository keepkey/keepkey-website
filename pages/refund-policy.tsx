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

    useEffect(() => {
        loadShopifyBuyButton(shopifyBuyButtonId);
    }, []);

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
            <div className="container grid gap-y-24 md:gap-y-48">

                <div className="grid md:grid-cols-2 gap-y-10 gap-x-24 lg:gap-32">
                    <div className="self-center order-1 md:order-none">
                        <h2>KeepKey Refund Policy
                        </h2>
                        <p className="my-6"></p>

                        <text>
                            KeepKey Refund Policy
                            <p>
                            Refunds are available within 30 days of your purchase. If more than 30 days have passed since your purchase, you are not eligible for a refund.
                            </p>
                            <br/>
                            <p>
                            To be eligible for a return, your item must be in the same condition that you received it. It must also be in the original packaging.
                                <br/></p>
                            To complete your return, we require a receipt or proof of purchase.
                            <p>
                                Refunds
                                Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.

                                <br/></p>
                            <p>
                                If you are approved, then your refund will be processed, and ww will contact you for your preferred method of payment.
                                <br/></p>
                            <p>
                                Late or Missing Refunds
                                If you haven’t received a refund by this point, please contact us at support@keepkey.com.
                                <br/></p>
                            <p>Bitcoin Payment Refunds
                                Refunds for orders paid with BTC will be issued for the full USD value of the order and processed at the BTC exchange rate when the refund is completed.
                                <br/></p>
                            <p>Exchanges
                                We will only replace defective devices. If you need to exchange your KeepKey, please contact customer support.
                                <br/></p>
                            <p>Shipping
                                Please return your device to:
                                <br/></p>
                            <p>Key Hodlers, LLC
                                1550 Larimer St. Suite 221
                                Denver, CO 80202
                                <br/></p>
                            <p>You will be responsible for paying for return shipping costs. The cost of shipping is non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
                                <br/></p>
                            <p>
                                Shipping times may vary.
                                <br/></p>
                            <p>
                                We highly recommend that you choose a shipping method with tracking information and proof of delivery.
                                <br/></p>
                        </text>
                    </div>
                </div>


            </div>
        </section>
    )
}
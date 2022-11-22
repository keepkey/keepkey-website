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
                        <h2>KeepKey Shipping Policy
                        </h2>
                        <p className="my-6"></p>

                        <text>
IMPORTANT UPDATE: Due to COVID 19 related circumstances, we've had to temporarily remove some countries from being able to place an order. International Service Suspensions from USPS can be found here.

All orders ship within 5 business days of the order. Shipping facilities are open Monday–Friday, 9am–5pm.

Carriers:

- USPS
- DHL

Order Tracking


If a tracking number is provided by the shipping carrier, we will update your order with the tracking information once it is received.

Shipping Rates


The rate charged for the shipping of your order is a flat rate based of shipping speed. Before the final checkout page, you will be shown what the cost of shipping will be, and you will have a chance to stop the ordering process if you decide that you do not want to move forward with purchasing the KeepKey.

For a limited time, we are offering discounted shipping on international orders.

Backorders


If KeepKey goes on backorder, we will ship it to you when it is back in stock. Your KeepKey will ship in the order that it was received.

Customs and VAT


International orders are generally subject to local import duties and taxes (VAT). We are not responsible for, nor can we offer, any specific advice regarding any customs related fees that you may incur. For specific information, please consult with your local government import office.

We only collect Washington sales tax for orders shipped to an address within Washington State. Sales tax is not a VAT, and cannot be recovered by non-USA visitors when returning home.

If you return a product to us, you will be the exporter from the destination country. Title and risk of loss transfer to us upon our receipt of the merchandise. Shipping carriers will assist you in recovering your taxes and duties for a fee. Please contact shipping carriers directly to initiate this service.

Your privacy is important to us. We strive to exceed your expectations for privacy. Cross-border shipments are subject to inspection by customs authorities. We may also be called upon to provide certain order, shipment, and product information to our international carriers. Carriers may communicate such information to customs authorities for the purpose of facilitating customs clearance and compliance with local laws.

Cross-border shipments going through customs inspections can delay delivery. These delays are out of our control as well as the carriers. Please check with your local government import office to determine what you can expect for any delays associated with the arrival of your order.
                        </text>
                    </div>
                </div>


            </div>
        </section>
    )
}
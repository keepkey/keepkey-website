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


const Main = () => {
    return (
        <section>
            <div className="container grid">

                        <h2>Online Privacy Notice
                        </h2>
                        <p className="my-6"></p>
                        Data protection and security are important to Key Hodlers, LLC
                        (“KeepKey”; “we”), as is your trust in our company and services. KeepKey
                        is committed to processing your personal data responsibly and in
                        compliance with legal requirements.

                        This Online Privacy Notice describes how we collect and process your
                        personal data when you use our website https://keepkey.com
                        (including any sub-sites and related extensions thereof; “the website”).
                        <br/>
                        <h4>Personal data we collect and process in order to make the website available</h4>
                        You can visit the website and obtain information about our services
                        without telling us who you are. As with any connection with a webserver,
                        however, the server on which we host the website automatically logs and
                        temporarily stores certain technical data.
                        <br/>
                        Technical data that is stored includes the IP address and operating
                        system of your device, the data and time of access, or the type of
                        browser you use to access the website. This is required for technical
                        reasons to make the website available to you. To the extent we, thereby,
                        process personal data, we do so based on our legitimate interest to
                        bring you the best possible user experience and to safeguard the
                        security and stability of our systems.
                        <br/>
                        Our website uses fonts by Google LLC (“Google”) (“Google Fonts”). To
                        integrate Google Fonts into the website, your browser establishes a
                        connection to the Google server. In doing so, the IP address of your
                        device is transmitted to Google. Google logs records of font queries and
                        protects this data from unauthorized access. Google analyzes aggregated
                        data to optimize Google Fonts and identify which websites use Google
                        Fonts. Further information on Google Fonts can be found here:
                        https://fonts.google.com. Further information on how Google handles
                        personal data can be found here: [https://policies.google.com/privacy?hl=en](https://policies.google.com/privacy?hl=en).
                        <br/>
                        <h4>Personal data we collect and process to provide services to you and to respond to your inquiries</h4>
                        If you interact with order or inquiry forms on the website (e.g.
                        purchasing a KeepKey device or requesting support regarding a device),
                        we will collect the information that you provide to us. We collect and
                        process this personal data for the purpose of providing products and
                        services, as well as information about our products and services to you.
                        <br/>
                        This may include your full name, your shipping and billing address,
                        your phone number, your e-mail address, and your credit card
                        information.
                        <br/>
                        Where such processing of your personal data is not strictly necessary
                        to perform our contractual obligations to you or to comply with legal
                        requirements, we will use this personal data based on our legitimate
                        interest to respond to your inquiry, to contact you if we have any
                        questions about your inquiry, to follow up on your inquiry, to process
                        your orders, to develop, enhance and improve our products and services,
                        to bring you the best possible experience or to safeguard the security
                        and stability of our services. Further, based on our legitimate interest
                        to inform our customers and partners about new developments, products,
                        services or offers, we will send you certain commercial information
                        (e.g. our newsletter or blog posts). However, you may at any time
                        opt-out of receiving such information.
                        <br/>
                        If you download and interact with the KeepKey client on Google
                        Chrome, we will collect and process your device’s xpub data. This data
                        is necessary to provide the services of the KeepKey client and will
                        always be stored securely. We also use the services of BlockCypher for
                        certain indexing requirements. Further information on data protection
                        and your options in connection with the services of BlockCypher can be
                        found here: [https://www.blockcypher.com/privacy.html](https://www.blockcypher.com/privacy.html).
                        <br/>
                        <h4>We store all of the personal data you provide to us in an encrypted fashion.</h4>
                        We use the services of Shopify to process orders on our website.
                        Further information on data protection and your options in connection
                        with the services of Shopify can be found here: [https://www.shopify.com/legal/privacy](https://www.shopify.com/legal/privacy).
                        <br/>
                        We use the services of ShipStation for order fulfillment and shipping
                        logistics. Further information on data protection and your options in
                        connection with the services of ShipStation can be found here: [https://www.shipstation.com/privacy-policy/](https://www.shipstation.com/privacy-policy/).
                        <br/>
                        We also use the services of FedEx for some order fulfillment and
                        shipping logistics. Further information on data protection and your
                        options in connection with the services of FedEx can be found here: [https://www.fedex.com/en-us/trust-center/global-privacy-policy.html](https://www.fedex.com/en-us/trust-center/global-privacy-policy.html).
                        <br/>
                        We use the services of SendGrid to send transactional emails. Further
                        information on data protection and your options in connection with the
                        services of SendGrid can be found here: [https://sendgrid.com/policies/privacy/](https://sendgrid.com/policies/privacy/).
                        <br/>
                        We also use the services of Autopilot, an email automation platform,
                        to better reach KeepKey product subscribers who have opted in to receive
                        such communications. Emails are sent out to convey information such as
                        notifications related to activity on the platform, general updates,
                        product additions, product news, partnerships, event announcements, and
                        survey requests. Autopilot does not sell or otherwise use the
                        information it collects on behalf of KeepKey, except as discussed in
                        this policy. More information about data protection and your options in
                        connection with the services of AutoPilot can be found here: [https://www.autopilothq.com/legal/privacy-policy](https://www.autopilothq.com/legal/privacy-policy).
                        <br/>
                        We use the services of Zendesk, Inc. (“Zendesk”) to answer live
                        queries on the website, in which we have a legitimate interest. Zendesk
                        uses cookies in order to provide these services. Further information on
                        data protection and your options in connection with the services of
                        Zendesk can be found here: [https://www.zendesk.com/company/customers-partners/privacy-policy/](https://www.zendesk.com/company/customers-partners/privacy-policy/) (Zendesk Privacy Policy) and [https://www.zendesk.com/company/customers-partners/cookie-policy/](https://www.zendesk.com/company/customers-partners/cookie-policy/) (Zendesk Cookie Policy).
                        <br/>
                        <h4>Data we collect and process to analyze and improve the use of the website; use of cookies</h4>
                        In addition, based on our legitimate interest to bring you the best
                        possible user experience, we analyze the use of the website to gain
                        insight on how we may improve our services. The website uses cookies
                        (text files that are downloaded to your computer or mobile device when
                        you visit a website) to support this analysis.
                        <br/>
                        The data we collect may include information on the type of web
                        browser or device you use to access the website, the geographical region
                        where you access the website, the date and time of your access, and the
                        parts of the website you access.
                        <br/>
                        We also use cookies to analyze the use of the website, to optimize
                        our services and to enable the use of marketing tools. Further
                        information on web analysis and our marketing activities can be found
                        below.
                        <br/>
                        We use Google Analytics, a web analytics service provided by Google
                        LLC (“Google”). Google uses cookies to collect the information that is
                        required to evaluate your use of the website in order to create reports
                        on the use of the website and to provide other services that support our
                        analysis and improvement of the use of the website, in which we have a
                        legitimate interest.
                        <br/>
                        We use Google Analytics only with IP anonymization enabled. This
                        means that your IP address will be shortened beforehand. Only in
                        exceptional cases will the full IP address be transmitted to a Google
                        server in the USA and shortened there. Accordingly, Google only stores
                        the information collected via cookies in anonymous form and processes it
                        in aggregated form. You can prevent Google Analytics from using your
                        data by downloading and installing a browser add-on to disable Google
                        Analytics ([https://tools.google.com/dlpage/gaoptout?hl=en](https://tools.google.com/dlpage/gaoptout?hl=en)). Further information on data protection and your options in connection with Google Analytics can be found here: [https://support.google.com/analytics/answer/6004245?hl=en](https://support.google.com/analytics/answer/6004245?hl=en).
                        <br/>
                        We use the services of Cloudflare, Inc. (“Cloudflare”) in order to
                        identify trusted web traffic (i.e. to identify individual clients behind
                        a shared IP address and apply security settings on a per-client basis),
                        in which we have a legitimate interest. Cloudflare uses cookies in
                        order to provide these services. The cookies do not correspond to any
                        user ID in your web application, and do not store any personal data.
                        Further information on data protection and your options in connection
                        with the services of Cloudflare can be found here: [https://www.cloudflare.com/privacypolicy/](https://www.cloudflare.com/privacypolicy/) (Cloudflare Privacy Policy) and [https://www.cloudflare.com/cookie-policy/](https://www.cloudflare.com/cookie-policy/) (Cloudflare Cookie Policy).
                        <br/>
                        By adjusting your web-browser’s settings accordingly, you can prevent
                        the storage of cookies on your device and the collection of data. Note,
                        however, that some functions of the website may be limited or
                        unavailable if you disable the storing of cookies.
                        <br/>
                        <h4>Data that we collect and process to target potential customers</h4>
                        We use Google Tag Manager to generate tags for the website and
                        applications. These tags enable us to tailor marketing measures for our
                        services to potential customers (re-targeting).
                        <br/>
                        We use advertising technologies by Google (AdWords). Google sets
                        conversion cookies in accordance with our settings in Google Tag
                        Manager. This is necessary for checking the effectiveness of the
                        respective advertising campaigns. We have a legitimate interest in this.
                        We also use Google Tag Manager to set re-targeting tags. These tags
                        enable us to target users with information about our services when they
                        visit different websites. For information regarding your choices in
                        relation to usage-based online advertising, see: [http://www.youronlinechoices.com](http://www.youronlinechoices.com/).
                        For information about your options in connection with cookies, see
                        above “Data we collect and process to analyze and improve the use of the
                        website; use of cookies”.
                        <br/>
                        <h4>How we process and protect your personal data; how long we store it</h4>
                        We collect, process and protect your personal data responsibly and in
                        accordance with applicable laws. We process it only for the purposes
                        for which you provide the personal data to us, as set forth in this
                        Online Privacy Notice and/or in accordance with applicable laws. We
                        store your personal data only for as long as this is necessary.
                        <br/>
                        We apply adequate technical and organizational security measures,
                        commensurate with the level of known risk, in order to protect the
                        confidentiality and integrity of the personal data we collect on the
                        website.
                        <br/>
                        <br/>
                        Specifically, such sharing of data may be necessary to manage your
                        order, to respond to your inquiry, to execute the transaction, to
                        provide access to additional information, or to follow up on your
                        inquiry and inform you on new services or offers.
                        <br/>
                        Further, to the extent we are requested by public authorities or
                        courts and legally required to do so, we will share your personal data
                        with them or other third parties.
                        <br/>
                        The data sharing may include transfers to companies or organizations
                        in countries without an adequate standard of data protection. In these
                        cases, we transfer personal data in accordance with applicable
                        provisions on the international transfer of personal data, such as,
                        where applicable, the respective provisions of the EU General Data
                        Protection Regulation (GDPR).
                        <br/>
                        <h4>The rights you have regarding your personal data</h4>
                        <br/>
                        If you are a citizen of the European Union, you have certain
                        individual rights regarding the personal data that we collect and
                        process about you through the website.
                        <br/>
                        You have the right to access or receive certain information about the
                        personal data we process about you. You also have a right to have your
                        personal data rectified, to object to the processing of your personal
                        data, or to ask us to restrict processing or delete your personal data.
                        If the GDPR applies and we process your personal data to perform a
                        contract with you or based on your consent, you also have the right to
                        receive a copy of your personal data for the purpose of transferring
                        such data to a third party.
                        <br/>
                        Please note, however, that your rights are subject to exceptions or
                        derogations. Specifically, we may need to further process and retain
                        your personal data to perform a contract with you or your company or
                        organization, to protect our legitimate interests (such as the
                        establishment, exercise or defense of legal claims) or to comply with
                        legal requirements. To the extent permitted by law, namely to protect
                        the rights and freedoms of others or to protect our own legitimate
                        interests, we may therefore refuse to satisfy your request or we may
                        satisfy your request only restrictedly.
                        <br/>
                        Lastly, you have a right to lodge a complaint with the competent supervisory authority.
                        <br/>
                        <h4>Who we are and how to contact us</h4>
                        KeepKey is the controller in relation to the collection and
                        processing of personal data through the website.
                        <br/>
                        If you have any questions or concerns, you may contact us by writing to KeepKey as set forth below.
                        <br/>
                        To inquire about the collection or processing of your personal data
                        in connection with the website, or if you have any questions or concerns
                        about this Online Privacy Notice, you may contact us through the
                        KeepKey Help Center, located here:(support@keepkey.com).
                        <br/>
                        For all correspondence, please include any necessary identifying
                        information such as your name, return e-mail or physical address.
                        Failure to do so may prevent us from providing a response.
                        <br/>
                        <h4>Links to Other Websites</h4>
                        Our website does contain links to affiliate and other websites.
                        KeepKey does not claim nor accept responsibility for any privacy
                        policies, practices and/or procedures of other such websites. Therefore,
                        we encourage all users and visitors to be aware when they leave our
                        website and to read the privacy statements of each and every website
                        that collects personally identifiable information. The aforementioned
                        Privacy Policy Agreement applies only and solely to the information
                        collected by our website.
                        <br/>
                        <h4>How we can change this Online Privacy Notice</h4>
                        We reserve the right to change this Online Privacy Notice at any
                        time. The version published on the website is the applicable version.
                    </div>

        </section>
    )
}

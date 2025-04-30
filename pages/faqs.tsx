import { useState, useEffect, useRef } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
    Grid,
    Show,
} from '@chakra-ui/react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Head from 'next/head'
import heroBgImage from 'public/images/heros/blue-lines.jpg'
import HeroSimple from '../components/hero-simple';
const pageTitle = "FAQs";
const subTitle = "Frequently asked questions about Keepkey."

export default function Faqs() {

    return (
        <>
            <Head><title>{pageTitle} | KeepKey</title></Head>
            <HeroSimple
                heroBgImg={heroBgImage}
                pageTitle={pageTitle}
                subTitle={subTitle}
            />
            <Main />
        </>
    )
}

const SideNav = () => {

    const [active, setActive] = useState(null)


    return (
        <div className="relative ml-12">
            <div className="sticky top-[150px] ">
                <h3 className="mb-8 text-[24px] font-bold">Contents</h3>
                {faqs.map((item, i, arr) =>
                    <div
                        key={item.category}
                        className={`mb-4`}

                    >
                        <AnchorLink
                            href={`#${item.category.replaceAll(' ', '-').toLowerCase()}`}
                            className={`${active === item ? 'text-gold' : 'text-black'} text-xl font-medium hover:text-gold`}
                            offset='100'
                            onClick={() => setActive(item)}

                        >
                            {item.category}
                        </AnchorLink>

                    </div>
                )}
            </div>
        </div >
    )

}

const Main = () => {


    return (
        <section className="container">

            <Grid templateColumns={{ base: "100%", md: "70% 1fr" }} gap={70}>

                <Accordion defaultIndex={[0]} allowMultiple>

                    {faqs.map((item, i, arr) =>

                        <div key={item.category} className="mb-20" id={item.category.replaceAll(' ', '-').toLowerCase()}>
                            <Heading mb={10}>{item.category}</Heading>

                            {item.questions.map((question, index, arr) =>

                                <AccordionItem py={5} key={`${item.id}-${index}`} >
                                    <AccordionButton pl={0} _hover={{ bg: "none" }}>
                                        <Box as="span" flex='1' textAlign='left' fontSize={26} >
                                            {question.question}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel fontSize={20} pb={4} fontWeight={300} pl={0} >
                                        <div dangerouslySetInnerHTML={{ __html: question.answer }}></div>
                                    </AccordionPanel>
                                </AccordionItem>
                            )}
                        </div>
                    )}

                </Accordion>

                <Show above='md'>

                    <SideNav />
                </Show>
            </Grid>

        </section >


    )
}



const faqs = [
    {
        id: 1,
        category: "How To",
        questions: [
            {
                question: 'How do I recover my device from seed?',
                answer: 'Check out this guide <a target=\"_blank\" href=\"https://x.com/KeepKeyDevs/status/1818337467541450842\">recovery</a>'
            },
            {
                question: 'How do I send Bitcoin with my Keepkey?',
                answer: 'Check out this guide <a target="_blank" href="https://x.com/KeepKeyDevs/status/1876469691436143015">Sending Bitcoin</a>'
            },
            {
                question: "How do I update my firmware?",
                answer: 'Check out this guide <a target="_blank" href="https://x.com/cryptokeepkey/status/1910892138432278821">Updating your KeepKey</a>'
            },
            {
                question: 'How do I use the Pin cipher?',
                answer: 'Check out this guide <a target="_blank" href="https://x.com/cryptokeepkey/status/1910892797978100089">Understanding the KeepKey PIN</a>'
            },
            {
                question: 'How do I wipe my KeepKey?',
                answer: 'Check out this guide <a target="_blank" href="https://x.com/KeepKeyDevs/status/1861737457160753484">How to wipe your KeepKey</a>'
            },
            {
                question: "Can I use a KeepKey with my Phone?",
                answer: 'No, KeepKey requires a USB connection to KeepKey Desktop and is only compatible with Windows/MacOS/Linux.'
            },
            {
                question: "What Coins can I use with KeepKey?",
                answer: 'View our coin support page. <a target="_blank" href="https://www.keepkey.com/coin-support">Coin support</a>'
            },
            {
                question: "I cant find XRP/DASH/DGB in my dashboard how do I use my Ripple?",
                answer: 'Unfortunately ShapeShift has removed support for these assets. You can however find our new stand alone applications for managing these assets. <a target="_blank" href="https://peakd.com/ripple/@keepkey/using-the-keepkey-browser-extension-to-self-custody-your-xrp">tutorial</a>'
            }
        ],
    },
    {
        id: 2,
        category: "General",
        questions: [
            {
                question: "Is KeepKey Open Source?",
                answer: "Yes! KeepKey firmware has a deterministic build process. The community is able to audit every release we have made over the last 9 years. More information:  <a target=\"_blank\" href=\"https://x.com/KeepKeyDevs/status/1820548509130698930\">Deterministic Build process</a>",
            },
            {
                question: "How do I buy crypto?",
                answer: "Simple! ShapeShift makes it simple buy/sell crypto and is integrated natively inside KeepKey Desktop! Read more about shapeshift here: <a target=\"_blank\" href=\"https://shapeshift.com\">shapeshift</a>",
            },
            {
                question: "Can I trade and swap crypto?",
                answer: "YES! Simple! Our native Thorchain integration is a decentralized protocol that allows frictionless native swapping without using wrapped tokens on bridges. Read more here: <a target=\"_blank\" href=\"https://x.com/KeepKeyDevs/status/1828870800767603116\">thorchain</a>",
            },
            {
                question: "Is KeepKey owned by ShapeShift DAO?",
                answer: "No, KeepKey is owned and operated by former employees of ShapeShift independently. KeepKey continues to fund the ShapeShift DAO. 10pct of all device sale revenue goes to the ShapeShift DAO treasury. <a target=\"_blank\" href=\"https://snapshot.org/#/shapeshiftdao.eth/proposal/0x2528af775ea702a12da168b6d7f8438ba4eae1cebf43d73b36ad1ddb3edef260\">KeepKey Workstream</a>",
            },
            {
                question: "How do I use ShapeShift with my keepkey?",
                answer: "ShapeShift is listed in our dapp store. <a target=\"_blank\" href=\"https://x.com/cryptokeepkey/status/1852426385899565566\">How to open ShapeShift</a>",
            }
        ]
    },
    {
        id: 3,
        category: "Troubleshooting",
        questions: [
            {
                question: "My KeepKey is not recognized by my computer",
                answer: "Check out our troubleshooting guide <a target=\"_blank\" href=\"https://x.com/KeepKeyDevs/status/1916342274197278813\">Troubleshooting your KeepKey</a>",
            },
            {
                question: "I can't get ShapeShift.com or KeepKey Desktop to recognize my device, what do I do?",
                answer: "You can use KKcli to update your firmware. <a target=\"_blank\" href=\"https://x.com/cryptokeepkey/status/1910894300637913094\">Using KKcli to debug your KeepKey</a>",
            },
            {
                question: "What do I do if I lose my PIN?",
                answer: "Wipe your device and proceed with <a target=\"_blank\" href=\"https://x.com/KeepKeyDevs/status/1818337467541450842\">recovery</a>",
            },
            {
                question: "What do I do if I lose my KeepKey?",
                answer: "Purchase a new KeepKey and proceed with <a target=\"_blank\" href=\"https://x.com/KeepKeyDevs/status/1818337467541450842\">recovery</a>",
            },
            {
                question: "What do I do if I lose my Recovery Phrase?",
                answer: "Purchase a new KeepKey. Initialize and set up the new device. Transfer your funds to the new device.",
            },
        ]
    },
    {
        id: 5,
        category: "General Security",
        questions: [
            {
                question: "How do I validate the Devices Firmware?",
                answer: "Review the process to compile the KeepKey firmware and show you how to verify that the code on your device is indeed the code available publicly from KeepKey. <a target=\"_blank\" href=\"https://x.com/KeepKeyDevs/status/1811434857945350232\">Verifying KeepKey firmware \n</a>",
            },
            {
                question: "I want to know about Hardware wallet security. what makes KeepKey unique compared to other hardware wallets?",
                answer: "Read more about the industry and the reasons behind the prevalence of myths when it comes to hardware wallet security. <a target=\"_blank\" href=\"https://x.com/KeepKeyDevs/status/1820172985254420801\">5 Myths about Hardware Wallets</a>",
            },
            {
                question: "Can I self-custody bitcoin between multiple devices with multi-sig?",
                answer: "Yes, check out this Electrum guide <a target=\"_blank\" href=\"https://x.com/KeepKeyDevs/status/1829927803434750449\">Electrum Multi-sig Guide</a>"
            },
            {
                question: "How do I protect my funds from physical attacks, for instance a stolen or lost device?",
                answer: "Protect your assets from physical attacks with a BIP39 Passphrase: <a href='https://x.com/cryptokeepkey/status/1910895411507716204'>Securing your KeepKey</a>",
            },
        ]
    },
    {
        id: 6,
        category: "Web3 Community",
        questions: [
            {
                question: "Can I use my KeepKey with Uniswap?",
                answer: "Yes, you can use Uniswap and most web3 applications via wallet-connect. See our dApp guide: <a target=\"_blank\" href='https://www.keepkey.com/dapps'>dApp guide</a>",
            }
        ]
    },
    // {
    //     id: 7,
    //     category: "Cryptocurrency concepts",
    //     questions: [
    //     ]
    // },
    {
        id: 8,
        category: "Developer Community",
        questions: [
            {
                question: "what is the KeepKey REST api?",
                answer: "KeepKey REST api is the primary interface for integrating KeepKey into your application: <a target='_blank' href='https://x.com/KeepKeyDevs/status/1916344099432546431'>KeepKey REST api.</a>",
            }
        ]
    }
]

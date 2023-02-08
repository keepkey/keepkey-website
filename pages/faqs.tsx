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

let mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@highlander_35968";

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
                question: 'How do I send Bitcoin with my Keepkey?',
                answer: 'Check out this guide <a target="_blank" href="https://medium.com/@highlander_35968/how-to-send-and-receive-bitcoin-in-keepkey-desktop-858e70312611">Sending Bitcoin</a>'
            },
            {
                question: "How do I update my firmware?",
                answer: 'Check out this guide <a target="_blank" href="https://medium.com/@highlander_35968/updating-your-keepkey-154a49445d4c">Updating your KeepKey</a>'
            },
            {
                question: 'How do I use the Pin cipher?',
                answer: 'Check out this guide <a target="_blank" href="https://medium.com/@highlander_35968/understanding-the-keepkey-pin-6dca3499b973">Understanding the KeepKey PIN</a>'
            },
            {
                question: "Can I use a KeepKey with my Phone?",
                answer: 'No, KeepKey requires a USB connection to KeepKey Desktop and is only compatible with Windows/MacOS/Linux.'
            },
            {
                question: "What Coins can I use with KeepKey?",
                answer: 'View our coin support page. <a target="_blank" href="https://www.keepkey.com/coin-support">Coin support</a>'
            }
        ],
    },
    {
        id: 2,
        category: "General",
        questions: [
            {
                question: "Is KeepKey owned by ShapeShift DAO?",
                answer: "No, KeepKey is owned and operated by former employees of ShapeShift independently. KeepKey continues to fund the ShapeShift DAO. 10pct of all device sale revenue goes to the ShapeShift DAO treasury.  <a target=\"_blank\" href=\"https://snapshot.org/#/shapeshiftdao.eth/proposal/0x2528af775ea702a12da168b6d7f8438ba4eae1cebf43d73b36ad1ddb3edef260\">KeepKey Workstream</a>",
            },
            {
                question: "How do I use ShapeShift with my keepkey?",
                answer: "ShapeShift is listed in our dapp store. <a target=\"_blank\" href=\"https://medium.com/@highlander_35968/how-to-open-shapeshift-dapp-from-inside-keepkey-desktop-310bb16cc7c\">How to open ShapeShift</a>",
            }
        ]
    },
    {
        id: 3,
        category: "Troubleshooting",
        questions: [
            {
                question: "My KeepKey is not recognized by my computer",
                answer: "Check out our troubleshooting guide <a target=\"_blank\" href=\"https://medium.com/@highlander_35968/troubleshooting-connections-with-the-keepkey-4599f1aaee0\">Troubleshooting your KeepKey</a>",
            },
            {
                question: "I can't get ShapeShift.com or KeepKey Desktop to recognize my device, what do I do?",
                answer: "You can use KKcli to update your firmware. <a target=\"_blank\" href=\"https://medium.com/@highlander_35968/using-kkcli-to-debug-your-keepkey-3830b504edff\">Using KKcli to debug your KeepKey</a>",
            },
            {
                question: "What do I do if I lose my PIN?",
                answer: "Wipe your device and proceed with recovery",
            },
            {
                question: "What do I do if I lose my KeepKey?",
                answer: "Purchase a new KeepKey and proceed with recovery",
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
                question: "Can I self-custody bitcoin between multiple devices with multi-sig?",
                answer: "Yes, check out this Electrum guide <a target=\"_blank\" href=\"https://medium.com/@highlander_35968/storing-bitcoin-with-multisig-with-your-keepkey-and-electrum-d959941f1dd1\">Electrum Multi-sig Guide</a>"
            },
            {
                question: "How do I protect my funds from physical attacks, for instance a stolen or lost device?",
                answer: "Protect your assets from physical attacks with a BIP39 Passphrase: <a href='https://medium.com/@highlander_35968/bip39-passphrase-and-securing-your-keepkey-from-physical-attacks-954ed4ac1dcc'>Securing your KeepKey</a>",
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
            },
            {
                question: "How do I participate in DAO governance with my KeepKey?",
                answer: "You can use the Snapshot dapp guide: <a target=\"_blank\" href='https://medium.com/@highlander_35968/how-to-use-your-keepkey-to-vote-on-snapshot-ec3c86cb5aaa'>vote-on-snapshot<a>",
            },
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
                question: "How do I support KeepKey on my application?",
                answer: "If you are a Web3 project we recommend onboard.js and enabling wallet-connect: <a target='_blank' href='https://onboard.blocknative.com/'>onboard.js developer documentation</a>",
            },
            {
                question: "what is the KeepKey REST api?",
                answer: "KeepKey REST api is the primary interface for integrating KeepKey into your application: <a target='_blank' href='https://medium.com/@highlander_35968/understanding-the-keepkey-rest-api-f9801b5db220'>KeepKey REST api.</a>",
            },
            {
                question: "A dapp I use is not listed in the dapp store, how do I get it listed?",
                answer: "You can submit the dapp yourself! chart the dapp for others to follow. guide: <a target='_blank' href='https://medium.com/@highlander_35968/how-to-list-a-dapp-on-pioneer-cdf54fc9d1de'>Charting a DAPP on Pioneer platform.</a>",
            },
            {
                question: "How do I build multi-chain dapps for KeepKey users and promote my product or service?",
                answer: "See our developer guide for building multi-chain dApps: <a target='_blank' href='https://medium.com/@highlander_35968/creating-a-dapp-for-the-keepkey-desktop-f61e506f5026'>Creating a DAPP for the KeepKey Desktop.</a>",
            },
        ]
    }
]

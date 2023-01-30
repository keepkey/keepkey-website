// import React, { Component, useEffect, useState } from "react";
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

const SideNav = () => (
    <div className="relative ml-12">
        <div className="sticky top-[150px] ">
            <h3 className="mb-6 text-xxl">Contents</h3>
            {faqs.map((item, i, arr) =>
                <div
                    key={item.id}
                    className={`mb-4`}
                >
                    <AnchorLink
                        href={`#${item.category.replaceAll(' ', '-').toLowerCase()}`}
                        className="text-black text-xl"
                        offset='100'
                    >
                        {item.category}
                    </AnchorLink>

                </div>
            )}
        </div>
    </div>
)

const Main = () => {


    return (
        <section className="container">

            <Grid templateColumns={{ base: "100%", md: "70% 1fr" }} gap={6}>

                <Accordion defaultIndex={[0]} allowMultiple>

                    {faqs.map((item, i, arr) =>

                        <div key={item.id} className="mb-20" id={item.category.replaceAll(' ', '-').toLowerCase()}>
                            <Heading mb={10}>{item.category}</Heading>

                            {item.questions.map((question, i, arr) =>
                                <AccordionItem mb={5} key={item.id + 1} >
                                    <AccordionButton >
                                        <Box as="span" flex='1' textAlign='left' fontSize={26} >
                                            {question.question}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel fontSize={20} pb={4} fontWeight={300}>
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
            }
        ]
    },
// {
//     id: 4,
//     category: "Technical Questions",
//     questions: [
//         {
//             question: "How do I be?",
//             answer: "Lorem ipsum dolor sit"
//         },
//     ]
//
// },
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
                answer: "Protect your assets from physical attacks with a BIP39 Passphrase: <a href='https://medium.com/@highlander_35968/bip39-passphrase-and-securing-your-keepkey-from-physical-attacks-954ed4ac1dcc'>Securing your KeepKey<a>",
            },
        ]
    },
    {
        id: 5,
        category: "Web3 Community",
        questions: [
            {
                question: "Can I use my KeepKey with Uniswap?",
                answer: "Yes, you can use Uniswap and most web3 applications via wallet-connect. See our dApp guide: <a target=\"_blank\" href='https://www.keepkey.com/dapps'>dApp guide<a>",
            },
            {
                question: "How do I participate in DAO governance with my KeepKey?",
                answer: "See our coin support page: <a target=\"_blank\" href='https://www.keepkey.com/coin-support'>Coin support page<a>",
            },
        ]
    },
    {
        id: 6,
        category: "Developer Community",
        questions: [
            {
                question: "How do I support KeepKey on my application?",
                answer: "If you are a Web3 project we recommend onboard.js and enabling wallet-connect: <a target=\"_blank\" href='https://onboard.blocknative.com/'>onboard.js developer documentation<a>",
            },
            {
                question: "How do I build multi-chain dapps for KeepKey users and promote my product or service?",
                answer: "See our developer guide for building multi-chain dApps: <a target=\"_blank\" href='https://medium.com/@highlander_35968/creating-a-dapp-for-the-keepkey-desktop-f61e506f5026'>Creating a DAPP for the KeepKey Desktop<a>",
            },
        ]
    }
]

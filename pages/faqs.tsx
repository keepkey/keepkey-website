import React, { Component, useEffect, useState } from "react";
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
        category: "Orders & Shipping",
        questions: [
            {
                question: 'Do you ship to my country?',
                answer: 'We ship to a number of countries. More info on our <a href="/shipping-policy">shipping policy page</a>'
            },
            {
                question: "Can I return my order after it has been delivered?",
                answer: 'lorem ipsum',
            }
        ],
    },
    {
        id: 2,
        category: "Warranty & Refunds",
        questions: [
            {
                question: "How long is the warranty?",
                answer: "https://www.keepkey.com/limited-warranty",
            },
        ]
    },
    {
        id: 3,
        category: "Technical Questions",
        questions: [
            {
                question: "What are the requirements to use KeepKey?",
                answer: "Lorem ipsum dolor sit"
            },
            {
                question: "What are the requirements to use KeepKey?",
                answer: "Lorem ipsum dolor sit"
            },
        ]

    },
    {
        id: 4,
        category: "Product Information",
        questions: [
            {
                question: "Which coins do you currently support?",
                answer: "KeepKey supports an ever-growing list of cryptocurrencies and digital assets. Search for supported coins on our : <a href='https://www.keepkey.com/coin-support'>coin support page<a>",
            },
            {
                question: "Which coins do you currently support?",
                answer: "KeepKey supports an ever-growing list of cryptocurrencies and digital assets. Search for supported coins on our : <a href='https://www.keepkey.com/coin-support'>coin support page<a>",
            },
            {
                question: "Which coins do you currently support?",
                answer: "KeepKey supports an ever-growing list of cryptocurrencies and digital assets. Search for supported coins on our : <a href='https://www.keepkey.com/coin-support'>coin support page<a>",
            },
            {
                question: "Which coins do you currently support?",
                answer: "KeepKey supports an ever-growing list of cryptocurrencies and digital assets. Search for supported coins on our : <a href='https://www.keepkey.com/coin-support'>coin support page<a>",
            },
            {
                question: "Which coins do you currently support?",
                answer: "KeepKey supports an ever-growing list of cryptocurrencies and digital assets. Search for supported coins on our : <a href='https://www.keepkey.com/coin-support'>coin support page<a>",
            },
            {
                question: "Which coins do you currently support?",
                answer: "KeepKey supports an ever-growing list of cryptocurrencies and digital assets. Search for supported coins on our : <a href='https://www.keepkey.com/coin-support'>coin support page<a>",
            },

        ]
    }
]

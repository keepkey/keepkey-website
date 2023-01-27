import React, { Component, useEffect, useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
    Text,
    Grid,
    Show
} from '@chakra-ui/react'
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


const Main = () => {


    return (
        <section className="container">

            <Grid templateColumns={{ base: "100%", md: "70% 1fr" }} gap={6}>

                <Accordion defaultIndex={[0]} allowMultiple>

                    {faqs.map((item, i, arr) =>

                        <div className="mb-20" id={item.category.replaceAll(' ', '-').toLowerCase()}>
                            <Heading mb={10}>{item.category}</Heading>

                            {item.questions.map((question, i, arr) =>
                                < AccordionItem mb={5} >
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' fontSize={26} >
                                                {question.question}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} dangerouslySetInnerHTML={{ __html: question.answer }}>
                                    </AccordionPanel>
                                </AccordionItem>
                            )}
                        </div>
                    )}

                </Accordion>

                <Show above='md'>
                    <div className="sticky">
                        <ul>
                            {faqs.map((item, i, arr) =>
                                <li>
                                    <a href={`#${item.category.replaceAll(' ', '-').toLowerCase()}`}>{item.category}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </Show>
            </Grid>

        </section >


    )
}



const faqs = [
    {
        category: "Orders & Shipping",
        questions: [
            {
                question: 'Do you ship to my country?',
                answer: 'We ship to a number of countries. More info <a href="/shipping-policy">here</a>'
            },
            {
                question: "Can I return my order after it has been delivered?",
                answer: '<a className="text-gold font-medium text-1xl hover:underline" target="_blank" href="https://github.com/keepkey/udev-rules"> Update your Udev rules</a>',
            }
        ],
    },
    {
        category: "Warranty & Refunds",
        questions: [
            {
                question: "How long is the warranty?",
                answer: "https://www.keepkey.com/limited-warranty",
            },
        ]
    },
    {
        category: "Technical Questions",
        questions: [
            {
                question: "What are the requirements to use Ledger Nano X?",
                answer: "Lorem ipsum dolor sit"
            },
        ]

    },
    {
        category: "Product Information",
        questions: [
            {
                question: "Which coins do you currently support?",
                answer: "KeepKey supports an ever-growing list of cryptocurrencies and digital assets. Search for supported coins on our coin support page: https://www.keepkey.com/coin-support",
            },


        ]
    }
]

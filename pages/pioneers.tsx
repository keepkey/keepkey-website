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
const pageTitle = "Pioneer Program";
const subTitle = "Vote for your favorite dApps."

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
        category: "ETHDenver 2023 info",
        questions: [
            {
                question: 'I got a pioneer PAOP, What does this POAP do?',
                answer: 'Check out this guide <a target="_blank" href="https://medium.com/@highlander_35968/how-to-vote-for-dapps-on-pioneer-b0c9a06b9ec3">How to vote</a>'
            },
            {
                question: 'Can I use Pioneer devlopment tools to help with my hackathon project?',
                answer: 'Yes! Check out this guide <a target="_blank" href="https://medium.com/@highlander_35968/using-the-keepkey-template-to-deploy-your-dapp-webstorm-a0e8ca7e8906">Using KeepKey template</a>'
            },
            {
                question: 'If I use KeepKey template, will I be able submit my Dapp for additional hackaton bounties!?',
                answer: 'Yes! List your Dapp, top dapps will be rewarded bounties! winners announced after ETHDenver <a target="_blank" href="https://medium.com/@highlander_35968/how-to-list-a-dapp-on-pioneer-cdf54fc9d1de">how to list a dapp</a>'
            },
        ],
    },
    {
        id: 2,
        category: "General",
        questions: [
            {
                question: "How do I see my POAPS?",
                answer: "go here <a target=\"_blank\" href=\"https://app.poap.xyz/\">Poaps</a>",
            }
        ]
    },
]

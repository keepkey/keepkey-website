import Head from 'next/head'
import heroBgImage from 'public/images/heros/blue-lines.jpg'
import HeroSimple from '../components/hero-simple';
const pageTitle = "Support";
import React, { useState } from 'react';
import ImageNext from "next/image";
import alertIcon from 'public/images/icons/alert.svg'
import ticket from 'public/images/discord/ticket.png'
import createTicket from 'public/images/discord/create-ticket.png'
import discord from 'public/images/discord/discord.png'
import highlander from 'public/images/discord/highlander.png'
import supportChannel from 'public/images/discord/support-channel.png'

import { Box, Heading, Stack, Text, SimpleGrid, Divider } from '@chakra-ui/react'



export default function Support() {

    return (
        <>
            <Head><title>{pageTitle} | KeepKey</title></Head>
            <HeroSimple
                heroBgImg={heroBgImage}
                pageTitle={pageTitle}
                subTitle="Follow these simple steps to get in touch with KeepKey."
            />
            <Main />
        </>
    )
}

function Feature({ title, desc, ...rest }) {
    return (
        <Box p={{ base: 0, lg: 5 }} {...rest}>
            <Heading>{title}</Heading>
            <Text mt={4}>{desc}</Text>
        </Box>
    )
}

function FeatureDiscord({ title, desc, ...rest }) {
    return (
        <>
            <Box p={{ base: 0, lg: 5 }} {...rest}>
                <Heading>{title}</Heading>
                <Text mt={4}>{desc}</Text>
                <br />
                <a href="https://discord.com/" className="btn" target="_blank" rel="noreferrer">
                    Download Discord
                </a>

            </Box>
        </>

    )
}

const Main = () => {

    return (

        <section className="container">
            <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-center max-w-5xl border-3 rounded-xl py-5 border-gold bg-tan px-6 lg:px-8 mx-auto">
                <div className="w-12 md:w-28 self-center">
                    <ImageNext
                        src={alertIcon}
                        alt='alert icon'
                        height='100px'
                        width='100px'
                    />
                </div>
                <div className="md:ml-8 md:items-center">
                    <h4 className="font-medium">Security Warning</h4>
                    <p className="mt-2">Zendesk Support has been retired! Live Support will only be provided through our Discord Ticket system.</p>
                </div>
            </div >

            <div>
                <SimpleGrid columns={[1, null, null, 2]} spacingX={32} spacingY={{ base: 20, lg: 40 }} my={{ base: 32, lg: 40 }}>

                    <FeatureDiscord
                        title='How to get Support'
                        desc="If you need to get support from KeepKey, the only way to do so is by using Discord. Discord is an online platform that is designed to bring people together. It's a great way to talk with others, share ideas, and get answers to questions. It's also a great way to get in touch with KeepKey support.">
                    </FeatureDiscord>
                    <div className="md:justify-center self-center">
                        <ImageNext
                            src={ticket}
                            alt='alert icon'
                            object-fit="contain"
                        />

                    </div>

                    <Feature
                        title='How to open a ticket'
                        desc={'In Discord, you can open up a ticket from the Contact Support room. Click the Contact Support button and fill out the dialogue box.'} />
                    <div className="md:justify-center self-center">
                        <ImageNext
                            src={createTicket}
                            alt='alert icon'
                            quality={100}
                            objectPosition="center"
                            object-fit="contain"
                        />
                    </div>
                    <Feature
                        title='Configure Settings'
                        desc='Before getting in touch with KeepKey support, its important to make sure that your audio and microphone settings are live. This will help ensure that your communication with KeepKey support is clear and uninterrupted. ' />
                    <div className="md:justify-center self-center">
                        <ImageNext
                            src={ticket}
                            alt='alert icon'
                            object-fit="contain"
                        />
                    </div>
                    <Feature
                        title='Understand the Support Channels'
                        desc='KeepKey members will never DM you first. If a user is asking you to share information or share your screen, you can verify they are a KeepKey member by looking at their tag. Only KeepKey support members will be able to see the content you post in the support thread.' />
                    <div className="mh-10">
                        <ImageNext
                            src={highlander}
                            alt='alert icon'
                            object-fit="contain"
                        />
                    </div>
                </SimpleGrid>

            </div>
        </section >
    )
}
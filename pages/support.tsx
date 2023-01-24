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

import { Button, Image, Box, Heading, Stack, Text } from '@chakra-ui/react'



export default function Support() {

    return (
        <>
            <Head><title>{pageTitle} | KeepKey</title></Head>
            <HeroSimple
                heroBgImg={heroBgImage}
                pageTitle={pageTitle}
            />
            <Main />
        </>
    )
}

function Feature({ title, desc, ...rest }) {
    return (
        <Box p={5} shadow='md' borderWidth='1px' {...rest}>
            <Heading fontSize='xl'>{title}</Heading>
            <Text mt={4}>{desc}</Text>
        </Box>
    )
}

function FeatureDiscord({ title, desc, ...rest }) {
    return (
        <Box p={5} shadow='md' borderWidth='1px' {...rest}>
            <Heading fontSize='xl'>{title}</Heading>
            <Text mt={4}>{desc}</Text>
            <br/>
            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                <Button colorScheme='green' size="xlarge">Discord</Button>
            </a>
        </Box>
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
                <div className="md:ml-8">
                    <h4 className="font-medium">Security Warning</h4>
                    <p className="mt-2">Zendesk Support has been retired! Live Support will only be provided through our Discord Ticket system.</p>
                </div>
            </div>

            <div>
                <br/>
                <Stack spacing={3}>
                        <FeatureDiscord
                            title='How to get Support'
                            desc='If you need to get support from KeepKey, the only way to do this is by using Discord. Discord is an online platform that is designed to bring people together. Its a great way to talk with others, share ideas, and get answers to questions. Its also a great way to get in touch with KeepKey support.'>
                        </FeatureDiscord>
                    <div className="md:justify-center self-center">

                        <ImageNext
                            src={createTicket}
                            alt='alert icon'
                            height='400px'
                            width='800px'
                        />
                    </div>
                        <Feature
                            title='How to open a ticket'
                            desc={'In Discord, you can open up a ticket from the Contact Support room. You can go straight to the Contact Support room by clicking.'} />
                    <div className="md:justify-center self-center">
                    <ImageNext
                            src={ticket}
                            alt='alert icon'
                            height='400px'
                            width='800px'
                        />
                    </div>
                        <Feature
                            title='Configure Settings'
                            desc='Before getting in touch with KeepKey support, its important to make sure that your audio and microphone settings are live. This will help ensure that your communication with KeepKey support is clear and uninterrupted. ' />
                    <div className="md:justify-center self-center">
                    <ImageNext
                            src={ticket}
                            alt='alert icon'
                            height='400px'
                            width='800px'
                        />
                    </div>
                        <Feature
                            title='Understand the Support Channels'
                            desc='Also, KeepKey members will never DM you first. If a user is asking you to share information or share your screen, you can verify they are a KeepKey member by looking at their tag. Only KeepKey support members will be able to see the content you post in the support thread.' />
                    <div className="md:justify-center self-center">
                    <ImageNext
                            src={highlander}
                            alt='alert icon'
                            height='400px'
                            width='800px'
                        />
                    </div>
                        <Feature
                            title='Understand the Support Channels'
                            desc='By following these simple steps, you can easily get in touch with KeepKey support and get the help you need.' />

                </Stack>
            </div>
        </section >
    )
}
import { useEffect } from 'react';
import Head from 'next/head';
import heroBgImage from 'public/images/heros/blue-lines.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HeroSimple from '../components/hero-simple';
import pin from 'public/images/desktop/Pin.png'
import Image from "next/image";
const pageTitle = "Launch";

export default function Launch() {

    const launchKeepKey = () => {
        try {
            console.log('window: ', window);
            console.log('window.location: ', window.location);
            if (window) {
                setTimeout(() => {
                    window.location.assign('keepkey://launch');
                }, 100); // Adding a slight delay before launching the URL
            }
        } catch (error) {
            console.error('Failed to launch KeepKey:', error);
        }
    };

    useEffect(() => {
        launchKeepKey();
    }, []);

    return (
        <>
            <Head><title>{pageTitle} | KeepKey</title></Head>
            <HeroSimple
                heroBgImg={heroBgImage}
                pageTitle={pageTitle}
            />
            <Main />
        </>
    );
}

const Main = () => {
    return (
        <section className="container">
            <Image
                src={pin}
                alt='desktop'
                layout="responsive"
                quality={100}
            >
            </Image>
            <h2 className="text-center mb-16">Launching KeepKey Desktop</h2>
        </section>
    );
}

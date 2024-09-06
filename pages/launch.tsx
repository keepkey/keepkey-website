import {useEffect, useState} from 'react';
import Head from 'next/head';
import heroBgImage from 'public/images/heros/blue-lines.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HeroSimple from '../components/hero-simple';
import pin from 'public/images/desktop/pin.png'
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
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
    const [urlMacOS, seturlMacOS] = useState('')
    const [urlWindows, seturlWindows] = useState('')
    const [urlLinux, seturlLinux] = useState('')
    //find latest release
    let findLatestReleaseLinks = async function () {
        try {
            let resp = await axios({ method: 'GET', url: 'https://api.github.com/repos/keepkey/keepkey-desktop/releases/latest' })
            console.log('findLatestReleaseLinks', resp.data)
            let version = resp.data.tag_name
            version = version.replace("v", "")
            seturlMacOS("https://github.com/keepkey/keepkey-desktop/releases/download/v" + version + "/KeepKey-Desktop-" + version + "-arm64.dmg")
            seturlWindows("https://github.com/keepkey/keepkey-desktop/releases/download/v" + version + "/KeepKey-Desktop-Setup-" + version + ".exe")
            seturlLinux("https://github.com/keepkey/keepkey-desktop/releases/download/v" + version + "/KeepKey-Desktop-" + version + ".AppImage")

        } catch (e) {
            console.error(' e: ', e)
        }
    }

    useEffect(() => {
        findLatestReleaseLinks()
    }, []);
    return (
        <section className="container bg-black">
            <div className="container mx-auto flex flex-col items-center justify-center text-center py-12 ">
                <div>
                    <h1 className="text-4xl leading-tight tracking-wide lg:text-5xl lg:leading-tight 2xl:text-6xl 2xl:leading-tight font-bold text-white mb-4">
                        Introducing the new KeepKey Client
                    </h1>
                    <p className="text-xl leading-relaxed lg:text-2xl lg:leading-relaxed text-white mb-8 tracking-wide">
                        Follow the guide below to get started using your KeepKey.
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <Link href={urlMacOS}>
                            <a className="btn btn-md btn--transparent mb-5 md:mr-5">Download for macOS</a>
                        </Link>
                        <Link href={urlWindows}>
                            <a className="btn btn-md btn--transparent mb-5 md:mr-5">Download for Windows</a>
                        </Link>
                        <Link href={urlLinux}>
                            <a className="btn btn-md btn--transparent mb-5">Download for Linux</a>
                        </Link>
                    </div>
                </div>
            </div>
            <Image
                src={pin}
                alt='desktop'
                layout="responsive"
                quality={100}
            >
            </Image>
        </section>
    );
}

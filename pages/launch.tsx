import { useEffect, useState } from 'react';
import Head from 'next/head';
import heroBgImage from 'public/images/heros/blue-lines.jpg';
import HeroSimple from '../components/hero-simple';
import pin from 'public/images/desktop/pin.png';
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const pageTitle = "Launch";

const Launch = () => {
    const launchKeepKey = (delay = 0) => {
        try {
            if (window) {
                setTimeout(() => {
                    window.location.assign('keepkey://launch');
                }, delay);
            }
        } catch (error) {
            console.error('Failed to launch KeepKey:', error);
        }
    };

    useEffect(() => {
        // Auto-launch KeepKey with a 300ms delay
        launchKeepKey(300);
    }, []);

    return (
        <>
            <Head><title>{pageTitle} | KeepKey</title></Head>
            <HeroSimple
                heroBgImg={heroBgImage}
                pageTitle={pageTitle}
            />
            <section className="container mx-auto text-center py-4">
                <h2 className="text-2xl font-bold text-white">KeepKey Protocol Launch</h2>
                <button
                    className="mt-4 px-8 py-4 text-xl font-bold text-white bg-green-600 hover:bg-green-500 rounded-lg"
                    onClick={() => launchKeepKey()}
                >
                    Launch KeepKey
                </button>
            </section>
            <Main />
        </>
    );
};

const Main = () => {
    const [urlMacOS, setUrlMacOS] = useState('');
    const [urlWindows, setUrlWindows] = useState('');
    const [urlLinux, setUrlLinux] = useState('');

    const findLatestReleaseLinks = async () => {
        try {
            const resp = await axios.get('https://api.github.com/repos/keepkey/keepkey-desktop/releases/latest');
            const version = resp.data.tag_name.replace("v", "");
            setUrlMacOS(`https://github.com/keepkey/keepkey-desktop/releases/download/v${version}/KeepKey-Desktop-${version}-arm64.dmg`);
            setUrlWindows(`https://github.com/keepkey/keepkey-desktop/releases/download/v${version}/KeepKey-Desktop-Setup-${version}.exe`);
            setUrlLinux(`https://github.com/keepkey/keepkey-desktop/releases/download/v${version}/KeepKey-Desktop-${version}.AppImage`);
        } catch (error) {
            console.error('Error fetching release links:', error);
        }
    };

    useEffect(() => {
        findLatestReleaseLinks();
    }, []);

    return (
        <section className="container bg-black">
            <div className="container mx-auto flex flex-col items-center justify-center text-center py-12">
                <div>
                    <h1 className="text-4xl font-bold text-white mb-4">Introducing the new KeepKey Client</h1>
                    <p className="text-xl text-white mb-8">Follow the guide below to get started using your KeepKey.</p>
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
                alt="desktop"
                layout="responsive"
                quality={100}
            />
        </section>
    );
};

export default Launch;

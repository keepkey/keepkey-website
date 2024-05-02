import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import supportedAppsImg from 'public/images/supported-applications/supported-apps-collage.png';
import heroBgImage from 'public/images/heros/geomatric-black.jpg';
import { loadShopifyBuyButton } from '../components/ShopifyBuyButton';
import ShopifyBuyButton from '../components/ShopifyBuyButton';
import GPG_KEY from './support/GpgKey';  // Import the GPG key

const shopifyBuyButtonId = 1665077510555;
const pageTitle = "Security Overview | KeepKey";

export default function SecurityOverview() {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <Hero />
            <Main />
        </>
    );
}

const Hero = () => {
    return (
        <div className="relative z-0 pt-44 pb-20 xl:py-48 bg-black" style={{backgroundImage: `url(${heroBgImage})`, backgroundSize: 'cover'}}>
            <div className="container mx-auto text-center">
                <h1 className="text-white text-4xl font-bold">Your Security, Our Priority</h1>
            </div>
        </div>
    );
};

const Main = () => {
    return (
        <section>
            <div className="container mx-auto p-6">
                <div className="mb-10">
                    <h2>KeepKey Manifesto on Self-Custody</h2>
                    <ul>
                        <li><strong>Empowerment Through Ownership:</strong> Control your assets without central authority oversight.</li>
                        <li><strong>Philosophy of Self-Custody:</strong> Self-custody as a political statement—empowering personal financial destiny.</li>
                        <li><strong>Key Benefits:</strong>
                            <ul>
                                <li>Security: Direct control over your private keys ensures security.</li>
                                <li>Inclusivity: Financial services accessible worldwide without intermediaries.</li>
                            </ul>
                        </li>
                        <li><strong>Risks of Not Holding Your Private Keys:</strong> Relying on third parties puts your assets at risk due to their vulnerabilities.</li>
                    </ul>
                    <p>"Don't trust, verify." – KeepKey promotes financial autonomy through self-custody.</p>
                </div>

                <div className="mb-10">
                    <h2>KeepKey Values</h2>
                    <ul>
                        <li><strong>Open Source Software (OSS):</strong> Ensures transparency and security; fosters innovation and community involvement.</li>
                        <li><strong>Copyleft:</strong> Guarantees that all enhancements remain free and open, underlining our commitment to collaborative development. <a href="https://www.gnu.org/gnu/manifesto.en.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Read the GNU Manifesto</a>.</li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h2>Introduction to Security Features</h2>
                    <p>Explore KeepKey's advanced security features, including deterministic builds for firmware integrity. <a href="https://medium.com/keepkeydevs/deterministic-build-process-11674787d92f" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Learn more</a>.</p>
                </div>

                <div className="mb-10">
                    <h2>Advanced Security: Managing DAOs and Ethereum Multisig</h2>
                    <p>Utilize KeepKey for enhanced security in managing DAOs and Ethereum multisig operations. <a href="https://medium.com/keepkeydevs/using-safe-with-your-keepkey-for-a-versatile-multisig-vault-on-evms-0cd797116382" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Explore how</a>.</p>
                </div>

                <div className="mb-10">
                    <h2>Bitcoin Multisig with KeepKey and Electrum</h2>
                    <p>Secure your Bitcoin transactions with multisig technology through Electrum. <a href="https://medium.com/@highlander_35968/storing-bitcoin-with-multisig-with-your-keepkey-and-electrum-d959941f1dd1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Get started</a>.</p>
                </div>

                <div className="mb-10">
                    <h2>Resource and Learning Center</h2>
                    <p>Access tutorials and guides to maximize your security with KeepKey. Explore our comprehensive resources:</p>
                    <ul>
                        <li><a href="https://medium.com/keepkeydevs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">KeepKey on Medium</a> - Discover all our latest updates and insights.</li>
                        <li><a href="https://medium.com/keepkeydevs/title-5-myths-about-hardware-wallets-aecf21cb1520" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">5 Myths About Hardware Wallets</a> - Learn about common misconceptions and the truths behind them.</li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h2>Vulnerability Disclosure</h2>
                    <p>Report vulnerabilities securely to help improve KeepKey security. Use our GPG key for encrypted communication:</p>
                    <details>
                        <summary>Click to view GPG Key</summary>
                        <p>{GPG_KEY}</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

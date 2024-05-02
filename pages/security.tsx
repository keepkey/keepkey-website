import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import supportedAppsImg from 'public/images/supported-applications/supported-apps-collage.png';
import heroBgImage from 'public/images/heros/geomatric-black.jpg';
import { loadShopifyBuyButton } from '../components/ShopifyBuyButton';
import ShopifyBuyButton from '../components/ShopifyBuyButton';

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
                    <p>Don{'\u0027'}t trust, verify. – KeepKey promotes financial autonomy through self-custody.</p>
                </div>

                <div className="mb-10">
                    <h2>KeepKey Values</h2>
                    <ul>
                        <li><strong>Open Source Software (OSS):</strong> Ensures transparency and security; fosters innovation and community involvement.</li>
                        <li><strong>Copyleft:</strong> Guarantees that all enhancements remain free and open, underlining our commitment to collaborative development. <a href="https://www.gnu.org/gnu/manifesto.en.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Read the GNU Manifesto</a>.</li>
                    </ul>
                    <div className="text-align: center;">
                        <p><i>KeepKey and all supporting software we produce is licensed under the GNU (GPL) license.</i></p>
                    </div>
                </div>

                <div className="mb-10">
                    <h2>Introduction to Security Features</h2>
                    <p>Explore KeepKey{'\u0027'}s advanced security features, including deterministic builds for firmware integrity. <a href="https://medium.com/keepkeydevs/deterministic-build-process-11674787d92f" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Learn more</a>.</p>
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
                        <br/>
                        <p>-----BEGIN PGP PUBLIC KEY BLOCK-----<br/>
                            mQINBFqzSDABEAC8+iDfkjzoCiELiP4XQ5mc+UvEyYmkawy3iVJA36lXUgAXepM2
                            CqFRdcEamwukzP9XnpHlrTZIgYYkBCXPqy19bnvBiZ3LXwnPvvWG/skWQcoI9n6g
                            bgbYQ/DME/U7G8UjUXknKLfURYyAt2DE3VJP4qilJRQRIF0a3bMF1w6mSCOHwFUS
                            I+0EURF9wnTwq7QX3bKiPzj9D/8MTUN0vfLcN0oTeJz9F8oM/9d4/n0xhD2D+hgm
                            xUFa82COYuB93G3Wltiwg8+tEtqQ0hbsoWCGqgLiDZlA8fmuojcBqHsFXt09BXeJ
                            PN8dgb5Dfnsh1pQbROxYK7rAfaZRP6sRfGrGCxwIyYlN7jIaaK4wGAv+KKrxuZ+V
                            hoEnsNBhlrGRD7HlDvltH2WA/8ocyi4h0jWEMTSgGYHjVtSTaGBKpDd2FapKxw8+
                            WuuejzvPOC1FJT7JtbjDmjw4CPFruG2YzphNMWbAt3UNMyujneR7ZHZ2BNDeQa7m
                            r+g/o6OrxoPcIBHQ+aenJ+8HhYbl46GIZ1cVlroUWqD9w0JLc7UQRYRGKqPfJwLf
                            XioRCx/4KH6gTGVRLCgy0iGci9BZvoTgBAkwk/4Fmxga3xdfEG/DKNUi+fHYs41b
                            rT+TDJ5DYy/+iLvQcrAVtP/ub/OT67NECI8VMwcxi0jJ/wko0Si6wTrdMwARAQAB
                            tC1TZWN1cml0eSAoQWlyR2FwcGVkKSA8c2VjdXJpdHlAc2hhcGVzaGlmdC5pbz6J
                            Aj0EEwEKACcFAlqzSDACGwMFCQPCZwAFCwkIBwMFFQoJCAsFFgIDAQACHgECF4AA
                            CgkQBLl8Md92+kA8+RAAh9iQTNNi/yabsmrDsHNzW5YDfsCD0tTLQqkBS2FUZIb4
                            G23rWrAbvDlidXl6dJ0CRp1Zsi2kNVYM0qYzYNFZ9nQ/y76Gd8pKvgVr8sihp2XL
                            pp8iO0u6jQIiy5WDZi8vSKLY7LaN94OGHEmO8BIqusXWcDogVMdCnEuILw2tJRYT
                            wp/TULDYwUrXlm5oBB4qvkqb7tFSYid+7VxY6sAXfMf6AzS1Mjkv2/EQ6PEfI3GF
                            3jphPE6Y6S+rdS/XNaaodCFwLG6pFPN9fFJzQHl+ae7nAbBtLeeCjR5eyD+b1uuz
                            YXzAhr/hOlM58pMGu/iud5Ccxp2/MSgR7ey+mXzOgqxtcW6fMNeDR+38IK4KpvV7
                            eiAcGJrL/ZsbNBU37Fb/2ZQHpWDBkyXeoHU3KO7Hoi1N+3U5+d6o+bHChiODDptH
                            YyDyFQCSFSU5eAW+jfhpP2DVi7B3BvTnBcvECjfYcBH/03MJUK9U1STiWIX5xdvi
                            6mmOW0iZOCdkRzJvllHnXBR4oa8nva10Ad8zN6/nfFVnnLdbAKWPq0BJUHUpBXQ7
                            yD2j8DjyVYFs1j4UdmdSlArjxGpVwi1lT7xzKYGWmVT7WaFEVm5GWfk3y+m6HrIn
                            ItisUaIN/jzT3qXQ2bzOv3UWkz/NWUbJ6VhXZltbGGiDH1AgjT7QAJmnh4DrEDO0
                            K1NlY3VyaXR5IChBaXJHYXBwZWQpIDxzZWN1cml0eUBrZWVwa2V5LmNvbT6JAj0E
                            EwEKACcFAlqzSK4CGwMFCQPCZwAFCwkIBwMFFQoJCAsFFgIDAQACHgECF4AACgkQ
                            BLl8Md92+kBy5hAAj00uVyzu4uSaacbDThk+gcTBcpQxYmOFnUKZ6TWESd0RyzIW
                            Rai9aH/Qx73tJsAkLadM1mi+2TEgmB6vMmqgy+rq4Zu7hvzJjS/xJyVPxA2uL/V5
                            jQBKYaNalICbYwxmpubY8OHBNCCTuYRU07IEndmXx7cdhUdfkB6py6UTbpZ1f32U
                            RImtXdXKkz0Bl4QKByMNUE+xgeTXm7ucyiwD/oxrU1/Y6ga1R2r/U9P7C0bQrQGZ
                            WS/cv4FtgXbwLKhZdo0ahz28vptz2qy861ZCRC58IptO/iS3aPNjzZDA/Lz0oj74
                            qfZ9kf3HYK3pux52xLecZbyYh/3qOAEn9DGsj5jamJXTRI/ikoipVq8DQ1PnBTCs
                            aRjDIvi0YapeRz6KJyGvwyCFyU3ciYVtc2G1RjXOsbmCH48MNYja9zaswJGjBUnn
                            B41mBoUsBRvXyZZ6rWwqIaGKsqg+9coqRkZRU9EU2JC1Jk5E7IFG52BtcwoNG2gH
                            aOsyU1K9QSenZMLWY4Tz3+FBjSuUp+fAvFlB7uld00CBsifNVDJ/UjA2NQNrXrvx
                            coYx2PHlhEItgWkgHEayUHG6TL+NIqQlfm2tHVia6Si3FNLd7yg0hc6WlVRXPops
                            RyP2UPQ7uVjm11sgr69x98F2F4vgnCwXGthnzwcrw4JEE+1saVMvqpK/Gou5Ag0E
                            WrNItgEQAMvsoxJOb53qEwMhQeeuz+8B1IiJEEf9+MJZni1FW6a0rAPWtGGxaQxy
                            OCYEG7sKFkubtSHlvnS8DuvcarPyDWWjvkgwJWj3dazqK9gq9GJtd3EgFA4znkEF
                            dC9OaTdRRd1FtwKig9MTmUTShEXW8b/GsZHEoqarvltQ5Zs0jDVr1grppCt03nXI
                            kL9WqLPZBlVChLcI3y9fS6fN/Sh17dbzcSBYR7CmpkRC21P5qLzq+qk51+UtrYul
                            MEPLqaUIgqHDmsZxjCdlKuZ2kkpHSICBqB/SkrbMA7WLOm0/9Hk2EPH66mJ4S3dI
                            0tFEANaz2BFmUARAR7xMuSykY6nGHsCjpNEFU68rw7rT0cY//iU0jgNUoGIyu2PR
                            99sFlIk09USl+pVsovUc/IjgEKKzp24aG7HB0wn1h9cMnrbXn29LfrJ7lE0qa9OW
                            JnuETSfbNA6MrLu3sX+apgZKd3DZUHpbjwJ+TWI2RvFFyW7Fpl0qw9jgK2RSmhvb
                            sO+kssKyDYvoKdb2oWrbd3cQGf+DFB5KBO7ULOjEOhf/RgI8UoV2h4AlODHMOyBa
                            D77Z35hRQKXcZqoGePJ419AKLRRv41f+IZgNGF8xDJiGEbj9aWUgMSi99/zJLhkK
                            Nq5H5vhlKkTU6aG4jqyy4oT8eCiYUBVHwcNIVXg96gysRAIFX5AFABEBAAGJAiUE
                            GAEKAA8FAlqzSLYCGwwFCQPCZwAACgkQBLl8Md92+kDV+hAAhFJcbtab1zoWR5Sb
                            I0QKUv1VDdTFBaAuGJym2ySAQpBO3UklNxIY+Pxose+MO0KhWxVWouWOFqIEwJ1S
                            XH7whRcDgve5OcTRW9ylDS2QFjdaFSlEE9B7qbWibr0PO4duSs6W/R2XZthb3bf1
                            whJz5TbtqQ2DHFGgrcVS4KwEqkbcNVJH8okEtldk5bH1woegRcIoSpvWOn/oxDbu
                            N+RJgfeN+5+i7W66Ze/zimHLvgJjvK/t9yHXh06Xuc0D1BzWo+qhq1PH8ltyqQxW
                            rVzmU+2bUavaYXIJn74C/QaHhuUUvv8KZWCxjWtFHj/g8DkFVpahiFB6kIoSyqNx
                            lJsalOmkBdFT4Qqz3c92T7rnySmNGwsipEMHLmBrZ5t/7JtRsnXwgh2L59U345xE
                            VAPKd0AMvYOqiMYTIXcf7qztodlTY3HMNCrvQc5ltqDEv38J+bdSKZI0VEkK5Cjm
                            3fZGoXuU/heByFks+aZgbPATjERVb0tPTuRc1m6BMG963PBxi1ZzmXAXVpfaJK/M
                            sB5Lz3tokmGAOnQoN2x/A/ki/O03dwqo2OFF7rkhW7yfS5hRhoefIUw8lcCMDHFz
                            GU6vD0PjsTgm+n10nTYnpeMthFHjHkIbayN9HCKk98dwSruk1vJhQrATxvbAA1K2
                            d+jEZJdCsJUsYSuhzaTfNjzy/qy5Ag0EWrNI0gEQAK8RPInGMMZnQp06QWHKtL2M
                            7NVAsMYKqQrhfkNS8XddbIBmhszAXq+1cYVac7skBSeDb/FJXS7R1qbKBJX35bAF
                            MNpqjmB26NbtUgoCuknB9UjB9DrV67foSfI9Jaj7jcN9pVs8kE8+PW93dwkdPoD0
                            Mpv22HYaPRotdprITBwXpO0ZLzlBBXAy4P/6RJ6nqTn//DiHG2SBvdGd03OgLpkd
                            /gqOOH1Xb6X/RarP93DMBNKZgKZ/qEJsROQFiS/p5bPAcW2cOEXPORT7ICcq92tg
                            Qu6os/h4zkTEsJr8SVcjo8/V4HUHRC4op4GUnSCEWhOp9wiWD1MD0bvOuCND3Ivq
                            Z379IbaCbr6UgipZvr+FUONpAjVRQodyuLt56NJjRHpMBih1mAQMbvSmQuQXHAF7
                            MuaxkoMXFgM8FIROnCmHpPbAeGKpWxNuPNVTGx3Df0oPvKxZWRvtSTo6Z++x3+2B
                            1iFC2lOH/vsH007rb6zNMd96JvHU6TcU9WodUJ640yvHHxJA6LPsEbWfhWSYMyMI
                            8mhlA0Gybgj8sbB7sB3lexC8rV4ckQYnz7yXtfMfhqHdrGxOmJ6TJ3dxs74l2g33
                            cqyvZ+TexomWruxE1V0PpGts/rYKKSZYbphnaCWmyVvxM7WnOENPvXbcedWsefn+
                            Xs+ERp877Z2oHkkyTviPABEBAAGJBEQEGAEKAA8FAlqzSNICGwIFCQPCZwACKQkQ
                            BLl8Md92+kDBXSAEGQEKAAYFAlqzSNIACgkQg5bPBbyR2lAKPQ//QcWhEHhsM6sX
                            4Xcv63+4Vs0UUfN0NEQi4KeMt6ursIRqxq5iaFgOXK8pirOjK94PEhSbFqgUlhKa
                            NWlhfhp06/zFQxYvySbW9BH4AQ171WWM3K/aUJnw1i1GjErIJYIhEsq516weVGx0
                            KcB8J9NylrioxxKmHtimqcPTRmGPTXxDpLpxDH9dtW/7rAZwJP5PYsBDiDWR/p/Z
                            58adx9k+Bv3n9SVhO5gvicgJdg4xebzoFeu+97c15sw+seMYnOfrJuiWK9CWO4o7
                            KRZrQzidSKEhhWVfl1AUCjtB/9b/rUj6oEtRlxR1FJjj94BCl2AwQ5nKQw5LsvJO
                            5MhDqkQ2FoadLgddFTxdBAPbV+9aIlP1CqPEdSlkMmj9eHRwopyFir8/WQ5aYx4Y
                            eros2mPx08uCE+Mm6xvNBKegdZpU75bd3t3xVujSNAkuZvfnGT910w2j1leTujj7
                            W68s0P1VXEp6hDx0uvNOLwdKQV1E2cmoezR5/Ymq7ZzBAXMn9RYZ/3ThP9rftPMC
                            EO19YW4GD9qi8HKM1pUcmjjF5Fc2IvD8OqoYUi8YrE2ClqSicbRMioEvnUPuX1Z8
                            IE9xYGHQiEEomA58vOn6SZJd/8WWb5C7UdWiUsZ7GvYZ6oETH2EGkCI2PJEcqBBg
                            bSj2YcJ4YKMpmoplngcJCs323Ek4FD2tohAAg/VAecWh4Pp60Gbs0DAnKMrN376S
                            mEuRIbHRZkdCG+F/Es6qYJxCULNbI/40pTN3vx7RFVSVSKsyZnMhd0o9oZG/y8ux
                            KLdusYUgl5jP77AE4XLR5UxnGuKd7c9TiVPqkQ821fzMJVGjYbT4scBO+8hWx8wc
                            9RNaDO5AE10QSZ9asqPscQVgOVIm+oJ0n+R35kl2y3kRP+hr0oGbm+R/Y3yshuBa
                            LnFQXZP2Alc1G39/fWkcjawUCMppiDqDty2+CpjKFUpdNVDmW/lKxsr4nxbxEwoY
                            LNMCK9L4xaEFETyV+CU+3VWs26ov6sVnI7+dlNplXPko2JVC8n2HnxKe2N8ZlqBH
                            36FFRA16skbgwS4vAKMgNwhld+XMKfN61t2igzShik1YaF3JRtGgoMY9+w1rOsNs
                            Qy+ArXXsZ6tkw7ZUiOl400hE4exGk2CjXqXBTxXhYi9jMl+8Ho8VgyQoc2JPBB6/
                            tB2+UO/Nwpiskw2328CHPNCb1YYsAuNRyRkGbJi/hY2Qu6D8AwUZtffXiVR/eg+k
                            t4qqiXfKrL/z520LYos2PmDloEj/z1ezItCfpEtUv6UASpeRnwFIgHndYy2M5y3B
                            ELz4oMjKb0M8ooSv26UusBMS63vqCy1oN3RDzgOkt0N3rcltJ6Q87X1h/cVo+tOd
                            vdS+QrWAKcrcUEg=
                            =G0QG<br/>
                            -----END PGP PUBLIC KEY BLOCK-----`</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import supportedAppsImg from 'public/images/supported-applications/supported-apps-collage.png';
import heroBgImage from 'public/images/heros/geomatric-black.jpg';
import { loadShopifyBuyButton } from '../components/ShopifyBuyButton';
import ShopifyBuyButton from '../components/ShopifyBuyButton';

const shopifyBuyButtonId = 1665077510555;
const pageTitle = "Limited Warranty";

export default function Onboarding() {
    return (
        <>
            <Head>
                <title>{pageTitle} | KeepKey</title>
            </Head>
            <Hero />
            <Main />
        </>
    );
}

const Hero = () => {
    return (
        <div className="relative z-0 pt-44 pb-20 xl:py-48 bg-black">
            {/* Hero content goes here */}
        </div>
    );
};

import shapeShiftLogo from 'public/images/supported-applications/shapeshift-block-black.jpg';
import electrumLogo from 'public/images/supported-applications/electrum-block-black.png';
import myCryptoLogo from 'public/images/supported-applications/mycrypto-block-black.png';

const Main = () => {
    return (
        <section>
            <div className="container grid">
                <h2>Security Policy</h2>
                <p className="my-6"></p>
                <br />
                {/* Security policy content goes here */}
                <br />
                <br />
                If you would like to disclose a vulnerability to KeepKey, we encourage you to send a new email to security@keepkey.com with the word **[VULNERABILITY]** in the subject line.
                <br />
                Please include the following information in your email:

                - Your name, nickname, handle, or what you’d like to be called while we communicate with you.
                - The date/time you first identified the vulnerability.
                - How you identified the vulnerability.
                - As much detail about the vulnerability as you can.
                - How many times you leveraged the vulnerability during your testing (and if applicable, a list of each test you performed).
                - Any additional information you feel may be pertinent.

                <br />
                If you would like to encrypt your vulnerability report, you can use the following GPG key:
                <br />
                <div>
                    {/* GPG Key content goes here */}
                </div>
                <details>
                    <summary>GPG Key</summary>
                    <p>
                        -----BEGIN PGP PUBLIC KEY BLOCK-----
                        <br />
                        mQINBGO4eXYBEAC3uXhD/3vkkMm+sLBeVFipCRCnY+nOgwcmiQ9juAoLJl7/y3jS
                        gOlJZXpnIlVeV/Aca0v4EkVITxdiBHQWtuOmpD/nToDkzJnAd4WBLRTYwd8WCcTo
                        vLX0MZBx5f8JV0RqTpII5qVfmEVal7bIHbeHp8r5kYDw+3PbY10GbEYZlosXwWw2
                        eg2SVpZ7qG79Ak+6rHghzyVsPvvj3RSQlg4g9fs+i+K2omf6HgOXX+1+ExXARpvI
                        PNe5GtPiwdzpnlUAqT+1rTS1m8JZ6f/8bOtVdJkTGgChu0fePkY24xiCW3VcOuVJ
                        H1+ILjPU9sP0qUkWhUUZM4K54x/2S9hvH79I3rjoRQir2p71S02IG8ethIY4uoJU
                        1sJHSXxN49S2BbEYZgJHW+ZhRkqXLDdteJqOGezjy2n0aY9CiS4v5+IrO2slxPlO
                        69g4iQMWMVrw7FQsvWWvYgGrTtdocEVVzkkyaNHLV5qQb/9IdeUyyuAP+4UoMxcr
                        LTJr2ixbPQBfihGPEFTZsn0t980ofroaHOjVtx3Z6/DBE/gerN0U7P6yVHaUDeTw
                        AL6QAxFRZSf/rZjIEMjsPtGxWD8m9xAkJhUgaufMdmlUVk2SFyO528+G4Gapk7zq
                        YHf0jRhwmmZwrXJZttcrfanS1ZYyCax+HwoyhyZmrddiSenAUO8sMb3W0QARAQAB
                        tCdLZWVwS2V5IFNlY3VyaXR5IDxzZWN1cml0eUBrZWVwa2V5LmNvbT6JAk4EEwEI
                        ADgWIQQdQOCfysUXSozzwVr73OGve5lq2QUCY7h5dgIbAwULCQgHAgYVCgkICwIE
                        FgIDAQIeAQIXgAAKCRD73OGve5lq2T4hD/9AE6c5I2kG1rg/vUd6i/MZPTBnakru
                        kWa5BJn2Qpv+e/i3D0EVfoZAtyREfAcHyqAZvdc1bUz/vmUmUslm3tXTzrYBdulO
                        PGQ3reN7I2N/q77ZrdjW7KDHc5w+t9Dl1Ei/iLt5j3wEa04d2/t7cuv97yMi587L
                        XmTwMbsfOtnl08oHjWtMjwX9RmIBHqveLdGsEzuJ4s+7MLPhmyDnPzzoRsTxeSU+
                        UuvaRvfZtNbfUK7OxvoAvreyk6JHS9AMAtyXROf9fTN+2vEzzmzNDIfHtEDasANY
                        w21rhNSUIQ9EPMBzvrTkUToqlnahhHyOFki0WjRxsIniQClDEyRPeq6VqC2YSEOo
                        4w8vT7/CxS2oFReZsDQcXcPFgKV9FyBq4zKjGPrxnKwcb+82ACLYTVj5qUNX3aug
                        qJ1yD7vLxN9J3Rolx4rdHpnAZbfvELydLcdi9qQazLsR0wR/ofj6TgJux4mVsQfr
                        GgoYuOMJZUwcYCidu3Drpi7KvK/y0bYEeEeIxzUIgRMVTIwEbcoEgMCh3s3Cu5eU
                        GQOhwzno0O3fSfr/1UPJUHdRAm2u1BvlzDk7GMELV7CkMHlXVfL5bf0zRERM1YqY
                        OUMajfk8FAcAv2fPTZ57dJtwu/rIh5rNRizcHn3fFloci+ReuT2X1wlbKQnrITTg
                        EUli2Q8sY8MLC7kCDQRjuHl2ARAAsB5mAR8btR374iaTNcLUaA/KLPoZI23tsKiU
                        SMhJ0MiORkfYjjUD019rZQMVZG/dBxL/mXwGqlMxLZ/NjpGV38lJ+HyTq6onTq+H
                        1HIqJqsIvJ0nGu/j3N4lNp5NUwCAij8smKkirVTrAQ1ggCTCKjNgYVe8rr0RW9Dw
                        pxnvOWt3rcOOnuY02ZWbiiUmpW7msGVG0MJR86IInBml7r6SN+6hnhIEhGKrKe2a
                        LgFgT/oqEMirvv2vlcfRmKSsrghFPZsWcV+F6RSsS0tODPC5pYJ7vaqGZFLE24cS
                        RVkKK/zbr3sI6WiFnolM3vH41de0ejYPRU5cGGseGEBfxpy0sL5yJzFZ+OBjBmys
                        XuW/htIgCLXVdKcj/T/c1ypHJe8jOhT7A5OleTZqXeQx1HCi+n3fBTK7+KrPlq9H
                        A3ccesTuKC5Whj6sFFs6bBhTffW+upg+T7z+DFWVz4swxsqO9tyipeCcObHMp8yi
                        b7O5uwEvpvP/QqhocSGrR6gipjwprgcrWp5Nga+ycM1Lh5lbCTLeG6mAFovunMG4
                        Bt1v5nv2iCm0aiq7/CCJUYJk+ZxmTT4yyijusnklLDbm7OJ/fDYhhqrJMOSl+PrX
                        eXcIiIdFNhoyc1e33AdbcDuYBQ4b68arw+rXA1ZJRjhvQJwYfwEZ6y4Mw2VWJfl6
                        3FBLr3cAEQEAAYkCNgQYAQgAIBYhBB1A4J/KxRdKjPPBWvvc4a97mWrZBQJjuHl2
                        AhsMAAoJEPvc4a97mWrZQvIP/iq4sXo8tYk/wF+HraSCcIeVTAGWgwn9IKwyHaq1
                        yf6iDAvMtUg3h74Om63INrfxEusfSrJK86f1Q1nXJoxneJKNAnpIdmv63bDghyd3
                        aFrtPFtB+mIxzg38/2ka3yfOx36wAc9Q5YHYPuT5jnRiwyUdTNL1BBYBFSpukUDs
                        e0k71l+asqHQL9HHw8Ug+7B9jkXgwuwDkmH3m274XyUdmzagzPdXdQcgSNIKZG27
                        4NPqSirByQDRhjMai5272jZlleD/LAuh+hNf8a2MrckEhNqlfYwEvqP6T3mFdcr7
                        jkBXyRHWKt2X2gyfgd8Yz/0vO2kzSfwZj/Pm2sHKUAZXr8OLVyhlN/cWzjFQqR9b
                        l3twcMdl3LuoaQWyjU1jqIvClpD7wjvpXg0RwVwtYX0Ma9RqacwdjMrIj5uSLQUS
                        DyA6wwyMEXsHf55dNUX8jy/i0gN8mta5Ofc11B+Jtr+b5E7l8QgnOsbKxTgJOi9z
                        salPPYoPvIQ5LNi8vfLrs2ou9LVYoElw4TNqDIT7OnN/7yaWpXjfmvrLsN4sn+Oy
                        goi+0Shty6zGJPTsk9g1PrjGNt9+QpDHm7Dm4jYMvGM4co/tdmhxK+d5KEA5TJAT
                        vFLvoJ8hXCfYOOfkKdo77biOs5Mf4hamdUY+Xyvtfns5mbuuIfP+DTLEXXCXypMP
                        wemd
                        =XEEu
                        <br />
                        -----END PGP PUBLIC KEY BLOCK-----
                    </p>
                </details>
            </div>
        </section>
    );
};

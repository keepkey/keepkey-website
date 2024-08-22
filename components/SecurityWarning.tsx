import alertIcon from 'public/images/icons/alert.svg'
import Image from 'next/image'
export default function SecurityWarning() {
    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* First Warning Box */}
            <div className="border-3 rounded-xl py-5 border-gold bg-tan px-6 lg:px-8">
                <div className="flex flex-wrap md:flex-nowrap md:items-center">
                    <div className="w-12 md:w-28 self-center">
                        <Image
                            src={alertIcon}
                            alt='alert icon'
                        />
                    </div>
                    <div className="md:ml-8 mt-4 md:mt-0">
                        <h4 className="font-medium">Security Warning</h4>
                        <p className="mt-2">
                            Scammers may send fake emails claiming your KeepKey account is compromised or funds are being held, demanding payment to release them. Remember: KeepKey is a non-custodial wallet. We never hold your funds, and any such claims are fraudulent.
                        </p>
                        <a
                            href="https://medium.com/keepkeydevs/warning-on-scams-protecting-your-keepkey-wallet-3d5398e94293"
                            className="text-blue-600 underline mt-2 inline-block"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            More info
                        </a>
                    </div>
                </div>
            </div>

            {/* Second Warning Box */}
            <div className="border-3 rounded-xl py-5 border-gold bg-tan px-6 lg:px-8">
                <div className="flex flex-wrap md:flex-nowrap md:items-center">
                    <div className="w-12 md:w-28 self-center">
                        <Image
                            src={alertIcon}
                            alt='alert icon'
                        />
                    </div>
                    <div className="md:ml-8 mt-4 md:mt-0">
                        <h4 className="font-medium">Security Warning</h4>
                        <p className="mt-2">
                            The KeepKey Chrome app has been retired, and there are scam versions which can steal your money. NEVER enter a recovery phrase into any software unencrypted. Official clients will always use KeepKey's built-in text cipher.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

import alertIcon from 'public/images/icons/alert.svg'
import Image from 'next/image'


export default function SecurityWarning() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap lg:items-center lg:justify-center max-w-5xl border-3 rounded-xl py-5 border-gold bg-tan px-6 lg:px-8 mx-auto">
      <div className="w-28 self-center">
        <Image
          src={alertIcon}
          alt='alert icon'
          >
        </Image>
      </div>
      <div className="lg:ml-8">
        <h4 className="font-medium">Security Warning</h4>
        <p className="mt-2">The KeepKey Chrome app has been retired, and there are scam versions which can steal your money. Use your KeepKey ONLY with the ShapeShift web platform.</p>
      </div>
    </div>
  )
}

import alertIcon from 'public/images/icons/alert.svg'
import Image from 'next/image'


export default function SecurityWarning() {
  return (
    <div className="container flex align-center justify-center max-w-5xl border-3 rounded-xl py-5 border-gold bg-tan">
      <div className="w-32 self-end">
      < Image
          src={alertIcon}
          alt='alert icon'
          >
        </Image>
      </div>
      <div className="ml-8">
        <h4 className="font-medium">Security Warning</h4>
        <p className="mt-2">The KeepKey Chrome app has been retired, and there are scam versions which can steal your money. Use your KeepKey ONLY with the ShapeShift web platform.</p>
      </div>
    </div>
  )
}

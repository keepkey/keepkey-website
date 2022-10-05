import Link from 'next/link'

export default function Footer() {
  return(
    <footer className="bg-dark-gold py-14">
      <p className="font-normal text-center">© {new Date().getFullYear()} KeepKey</p>
      <div className="flex flex-wrap justify-center align-center mt-6">
        <Link href="/limited-warranty"><a className="font-normal px-4 hover:underline" target="_blank">Limited Warranty</a></Link>
        <span className="self-center">|</span>
        <Link href="/privacy-policy"><a className="font-normal px-4 hover:underline" target="_blank">Privacy Policy</a></Link>
        <span className="self-center">|</span>
        <Link href="/refund-policy"><a className="font-normal px-4 hover:underline" target="_blank">Refund Policy</a></Link>
        <span className="self-center">|</span>
        <Link href="/shipping-policy"><a className="font-normal px-4 hover:underline" target="_blank">Shipping Policy</a></Link>
        <span className="self-center">|</span>
        <Link href="/terms-of-use"><a className="font-normal px-4 hover:underline" target="_blank">Terms of Use</a></Link>
      </div>
    </footer>
  )
}
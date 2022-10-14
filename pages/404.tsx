
import Link from 'next/link'

export default function Custom404() {
    return (
        <section className="bg-black text-white min-h-screen text-center flex items-center justify-center">
            <div className="container">
                <h2>Uh oh. That page doesn&apos;t exist.</h2>
                <p className="my-12 text-xl">Head to our homepage or reach out to us on one of our social links below.</p>
                <Link href="/">
                    <a className="btn">Return Home</a>
                </Link>
            </div>
        </section>
    )
}
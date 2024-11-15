import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Navbar from './navbar'
import Footer from './footer'


const Layout = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    const logNavigationEvent = (type, url) => {
      console.log(`[Navigation ${type}] ${url} - ${new Date().toISOString()}`)
      if (window.performance) {
        const perfEntry = window.performance.getEntriesByType('navigation')[0]
        console.log(`[Performance] Load Time: ${perfEntry.loadEventEnd}ms`)
      }
    }

    router.events.on('routeChangeStart', (url) => {
      console.log('🚀 Navigation Started:', url)
      performance.mark('routeChangeStart')
      logNavigationEvent('Start', url)
    })

    router.events.on('routeChangeComplete', (url) => {
      console.log('✅ Navigation Complete:', url)
      performance.mark('routeChangeComplete')
      performance.measure('Navigation Duration', 'routeChangeStart', 'routeChangeComplete')
      logNavigationEvent('Complete', url)
    })

    router.events.on('routeChangeError', (err, url) => {
      console.error('❌ Navigation Error:', url, err)
      logNavigationEvent('Error', url)
    })

    return () => {
      router.events.off('routeChangeStart', logNavigationEvent)
      router.events.off('routeChangeComplete', logNavigationEvent)
      router.events.off('routeChangeError', logNavigationEvent)
    }
  }, [router])

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
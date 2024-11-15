import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Navbar from './navbar'
import Footer from './footer'


const Layout = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    // Disable route change animation to prevent duplicate wallet initialization
    router.events.on('beforeHistoryChange', () => {
      // Remove any transition classes that might be slowing things down
      document.documentElement.style.scrollBehavior = 'auto'
    })

    return () => {
      router.events.off('beforeHistoryChange', () => {
        document.documentElement.style.scrollBehavior = ''
      })
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
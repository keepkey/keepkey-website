import Navbar from './navbar'
import Footer from './footer'
import HeroSimple from './hero-simple';

const Layout = ({ children, meta, heroBgImg }) => {
  return (
    <>
      <Navbar 
        slimLayout = {true}
      />
        <main>
          <HeroSimple
              heroBgImg = {heroBgImg}
              pageTitle = {meta.pageTitle}
            />
          <section className="container">
            {children}
          </section>
        </main>
      <Footer />
    </>
  )
}

export default Layout
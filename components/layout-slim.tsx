import HeroSimple from './hero-simple';

const Layout = ({ children, meta, heroBgImg }) => {
  return (
    <>
      <HeroSimple
          heroBgImg = {heroBgImg}
          pageTitle = {meta.pageTitle}
        />
      <section className="container">
        {children}
      </section>
    </>
  )
}

export default Layout
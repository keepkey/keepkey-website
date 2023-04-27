import Image from 'next/image'
import Link from 'next/link'
import keepkeyLogo from '../public/images/logos/keepkey_logo.png'
import dogecoinLogo from '../public/images/logos/doge-shiba.svg'
import { useState, useEffect } from 'react';

interface NavLink {
  id: number,
  name: string,
  url: string,
  external?: boolean
}

const navLinks: NavLink[] = [
  {
    id: 0,
    name: 'Get Started',
    url: '/get-started',
    external: false
  },
  {
    id: 1,
    name: 'FAQ\'s',
    url: '/faqs',
    external: false
  },
  {
    id: 2,
    name: 'Community',
    url: '/community',
    external: false
  },
  {
    id: 3,
    name: 'Dapps',
    url: '/dapps',
    external: false
  },
  {
    id: 4,
    name: 'Coins',
    url: '/coin-support',
    external: false
  },
  {
    id: 5,
    name: 'Support',
    url: '/support',
    external: false
  },
  {
    id: 6,
    name: 'Blog',
    url: '/blog',
    external: false
  }
]

export default function Navbar() {

  //add scroll class
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });

    //close mobile nav on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        setIsActive(false);
      }
    });

  }, [])

  //mobile nav active
  const [isActive, setIsActive] = useState(false);

  const toggleMobileNav = () => {
    setIsActive(current => !current);
  };

  const closeMobileNav = () => {
    if (isActive) {
      setIsActive(current => !current);
    }
  };


  return (

    <nav className={`nav fixed w-full py-4 z-10 transition-all ease-in-out duration-400 
        ${scroll && !isActive ? 'bg-black lg:py-3' : 'lg:pt-6'} 
        ${isActive ? 'nav--is-open' : ''}`
    }>
      <div className="container mx-auto flex flex-wrap items-center">

        {/* Keepkey logo - replaced by doge for now */}
        {/* <Link href="/">
          <div className="nav__logo-wrap-fixed-width mr-5">
            <a onClick={closeMobileNav} className={`cursor-pointer nav__logo-wrap ${scroll ? 'nav__logo-wrap--scrolled' : ''}`}>
              <Image
                alt="KeepKey logo"
                src={keepkeyLogo}
                className="cursor-pointer nav__logo transition-all ease-in-out duration-400"
                layout="responsive"
                quality={100}
              >
              </Image>
            </a>
          </div>
        </Link> */}

        {/* Dogecoin logo - temporary */}
        <Link href="/">
          <div className="nav__logo-wrap-fixed-width mr-5">
            <a href="https://keepkey.myshopify.com/collections/frontpage/products/keepkey-doge-mystery-box" target="_blank" rel="noreferrer" onClick={closeMobileNav} className={`cursor-pointer nav__logo-wrap mr-5 z-10 ${scroll ? 'nav__logo-wrap--scrolled' : ''}`}>
              <Image
                alt="Dogecoin logo"
                src={dogecoinLogo}
                className="cursor-pointer nav__logo transition-all ease-in-out duration-400"
                layout="responsive"
                quality={100}
                object-fit="contain"
              >
              </Image>
            </a>
          </div>
        </Link>

        {navLinks.map(link => (
          <div key={link.id}>
            <Link href={`${link.url}`}>
              <a className="hidden lg:block transition-opacity text-white text-base px-4 xl:px-8 font-normal opacity-80 hover:opacity-100">{link.name}</a>
            </Link>
          </div>
        ))}

        <div className="ml-auto flex items-center mt-2">
          <MobileNav
            toggleMobileNav={toggleMobileNav}
            isActive={isActive}
            navLinks={navLinks}
          />

        </div>
      </div>
    </nav >
  )
}

const MobileNav = ({ isActive, toggleMobileNav, navLinks }) => {

  return (
    <>
      <button className={`${isActive ? 'mobile-open' : ''} lg:hidden nav-mobile__toggle ml-auto`} onClick={toggleMobileNav} aria-label="Toggle navigation menu" type="button">
        <span className="nav-mobile__menu-line nav-mobile__menu-line--top"></span>
        <span className="nav-mobile__menu-line nav-mobile__menu-line--bottom"></span>
      </button>

      <div aria-hidden="false" className="nav-mobile__menu lg:hidden" role="menu">
        <ul className="nav-mobile__category-wrapper">

          {navLinks.map(link => (
            <li key={link.id} className="nav-mobile__category-item nav-mobile__category-line">
              <button className="nav-mobile__category-item-link accordion-toggle" type="button">
                <div className="nav-mobile__category-item-layout">
                  <Link href={link.url}>
                    <a onClick={toggleMobileNav} className="nav-mobile__title-wrapper">
                      <span className="nav-mobile__title">
                        <span>{link.name}</span>
                      </span>
                    </a>
                  </Link>
                </div>

              </button>
            </li>
          ))}

        </ul>
      </div>
    </>
  )
}

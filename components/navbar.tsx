import Image from 'next/image'
import Link from 'next/link'
import keepkeyLogo from '../public/images/logos/keepkey_logo.png'
import dogecoinLogo from '../public/images/logos/dogecoin-doge-logo.svg'
import { useState, useEffect } from 'react';
import { loadShopifyBuyButton } from '../components/ShopifyBuyButton'
import ShopifyBuyButton from '../components/ShopifyBuyButton'
const shopifyBuyButtonId = 1665073941285;

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

        <a href="https://keepkey.myshopify.com/collections/frontpage/products/keepkey-doge-mystery-box" target="_blank" onClick={closeMobileNav} className={`cursor-pointer nav__logo-wrap mr-5 z-10 ${scroll ? 'nav__logo-wrap--scrolled' : ''}`}>
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

        {navLinks.map(link => (
          <div key={link.id}>
            <Link href={`${link.url}`}>
              <a className="hidden lg:block transition-opacity text-white text-base px-4 xl:px-8 font-normal opacity-80 hover:opacity-100">{link.name}</a>
            </Link>
          </div>
        ))}

        <div className="ml-auto flex items-center mt-2">
          {/* <div className="hidden sm:inline-block mr-8 lg:mr-0">
            <Link href="https://app.shapeshift.com">
              <a target="_blank" className="btn btn--round btn--blue ml-auto">Launch Shapeshift</a>
            </Link>
          </div> */}

          <MobileNav
            toggleMobileNav={toggleMobileNav}
            isActive={isActive}
            navLinks={navLinks}
          />

        </div>
      </div>
      {/* <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button> */}
      {/* <div id="dropdownNavbar" className="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
          </ul>
          <div className="py-1">
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
          </div>
      </div> */}
    </nav >
  )
}

const MobileNav = ({ isActive, toggleMobileNav, navLinks }) => {

  useEffect(() => {
    loadShopifyBuyButton(shopifyBuyButtonId);
  }, []);

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
                  {/* <div className="chevron-wrapper">
                    <span className="chevron">
                      <svg fill="none" focusable="false" height="6" className="block" viewBox="0 0 10 6" width="10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1l4 4 4-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="#000"></path>
                      </svg>
                    </span>
                  </div> */}
                </div>

              </button>
              <div className="accordion-container">
                <div className="accordion-wrapper">
                  <ul>
                    <li>
                      {/* <a className="nav-mobile__menu-item-link" href="#">
                        <span>Lorem ipsume</span>
                      </a> */}
                    </li>
                    <li>
                      {/* <a className="nav-mobile__menu-item-link" href="#">
                        <span>Lorem ipsum</span>
                      </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}

        </ul>
        {/* <a className="btn btn-lg btn-blue mobile-cta" href="/request-demo">Get demo</a> */}
        <div className="absolute bottom-[30px] left-1/2 translate-x-[-50%]">
          <ShopifyBuyButton buttonId={shopifyBuyButtonId}></ShopifyBuyButton>
        </div>
      </div>
    </>
  )
}

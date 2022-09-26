import Image from 'next/image'
import Link from 'next/link'
import keepkeyLogo from '../public/images/logos/keepkey_logo.png'
import {useState, useEffect} from 'react';

export default function Navbar() {

  const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }, [])

  return (
    
    <nav className={`nav fixed w-full pb-3 z-10 transition-all ease-in-out duration-400 ${scroll ? 'bg-black pt-4' : 'pt-8'}`}>
      <div className="container mx-auto flex flex flex-wrap items-center mx-auto">
        <Link href="/">
          <div className="nav__logo-wrap-fixed-width">
            <a className={`cursor-pointer nav__logo-wrap ${scroll ? 'nav__logo-wrap--scrolled' : '' }`}>
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
        </Link>
        <Link href="/community">
          <a className="nav__link transition-opacity text-white text-lg px-8 font-normal block z-30 opacity-80 hover:opacity-100">Community</a>
        </Link>
        <Link href="/supported-applications">
          <a  className="nav__link transition-opacity text-white text-lg px-8 font-normal block z-30 opacity-80 hover:opacity-100">Supported Applications</a>
        </Link>
        <Link href="/integration-guide">
          <a  className="nav__link transition-opacity text-white text-lg px-8 font-normal block z-30 opacity-80 hover:opacity-100">Integration Guide</a>
        </Link>
        <Link href="/onboarding">
          <a className="nav__link transition-opacity text-white text-lg px-8 font-normal block z-30 opacity-80 hover:opacity-100">Onboarding</a>
        </Link>
        <Link href="https://app.shapeshift.com">
          <a target="_blank" className="btn btn--round btn--blue ml-auto">Launch Shapeshift</a>
        </Link>
      </div>
      {/* <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg class="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button> */}
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
  </nav>
  )
}

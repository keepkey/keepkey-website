import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import keepkeyLogo from '../public/images/logos/keepkey_logo.png';
import githubIcon from '../public/images/icons/github.png';
import SecurityIcon from '../public/images/icons/security.svg';

interface NavLink {
  id: number;
  name: string;
  url?: string;
  external?: boolean;
  children?: NavLink[];
}

const navLinks: NavLink[] = [
  {
    id: 0,
    name: 'Get Started',
    url: '/get-started',
  },
  {
    id: 1,
    name: 'Security',
    url: '/security',
  },
  {
    id: 2,
    name: 'FAQs',
    url: '/faqs',
  },
  {
    id: 3,
    name: 'Info',
    children: [
      {
        id: 31,
        name: 'Community',
        url: '/community',
      },
      {
        id: 32,
        name: 'Resellers',
        url: '/resellers',
      },
      {
        id: 33,
        name: 'Dapps',
        url: '/dapps',
      },
    ],
  },
  {
    id: 4,
    name: 'Coins',
    url: '/coin-support',
  },
  {
    id: 5,
    name: 'Support',
    url: '/support',
  },
  {
    id: 6,
    name: 'Blog',
    url: '/blog',
  },
];

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<Record<number, boolean>>({});
  const dropdownRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const isDismissed = localStorage.getItem('bexBannerDismissed');
      if (!isDismissed) {
        setShowBanner(true);
      }
    } catch (error) {
      console.warn('localStorage not available');
    }
  }, []);

  useEffect(() => {
    const initialDropdownState: Record<number, boolean> = {};
    navLinks.forEach((link) => {
      if (link.children) {
        initialDropdownState[link.id] = false;
      }
    });
    setDropdownOpen(initialDropdownState);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.keys(dropdownOpen).forEach((key) => {
        if (dropdownOpen[key] && dropdownRefs.current[key] && !dropdownRefs.current[key]?.contains(event.target as Node)) {
          setDropdownOpen((prev) => ({ ...prev, [key]: false }));
        }
      });
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const dismissBanner = () => {
    setShowBanner(false);
    localStorage.setItem('bexBannerDismissed', 'true');
  };

  const toggleDropdown = (id: number) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className={`w-full bg-yellow-500 text-center py-2 fixed top-0 left-0 z-[60] flex justify-center items-center transition-opacity duration-300 ${!isMounted || !showBanner ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        <Link href="https://keepkey.com/bex" passHref>
          <a className="text-black font-bold hover:underline flex-grow">
            Try the new KeepKey Browser Extension! Click here to learn more.
          </a>
        </Link>
        <button
          onClick={dismissBanner}
          className="px-4 hover:opacity-75 text-black"
          aria-label="Dismiss banner"
        >
          ✕
        </button>
      </div>

      {/* Navigation bar */}
      <nav className={`nav fixed w-full py-4 z-[50] ${showBanner ? 'top-8' : 'top-0'} transition-all ease-in-out duration-400 ${scroll ? 'bg-black' : ''
        } ${isMenuOpen ? 'bg-black' : ''}`}>
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/">
            <a className="nav__logo-wrap" onClick={() => setIsMenuOpen(false)}>
              <Image src={keepkeyLogo} alt="KeepKey logo" layout="responsive" quality={100} />
            </a>
          </Link>
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="hamburger-icon"></span>
          </button>
          <div className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row w-full lg:w-auto`}>
            {navLinks.map((link) => (
              <div key={link.id} className="relative">
                {link.name === 'Security' ? (
                  <Link href={link.url}>
                    <a className="text-white text-base px-4 font-normal opacity-80 hover:opacity-100 flex items-center">
                      {link.name}
                      <span style={{ backgroundColor: '#f5f5f5', borderRadius: '50%', padding: '2px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image src={SecurityIcon} alt="Security" width={24} height={24} />
                      </span>
                    </a>
                  </Link>
                ) : link.children ? (
                  <button className="text-white px-4" onClick={() => toggleDropdown(link.id)}>{link.name}</button>
                ) : (
                  <Link href={link.url}>
                    <a className="text-white text-base px-4 font-normal opacity-80 hover:opacity-100">{link.name}</a>
                  </Link>
                )}
                {dropdownOpen[link.id] && (
                  <div className="absolute left-0 bg-white shadow-md" ref={(el) => (dropdownRefs.current[link.id] = el)}>
                    {link.children.map((sublink) => (
                      <Link href={sublink.url} key={sublink.id}>
                        <a className="block p-2 text-black hover:bg-gray-200">{sublink.name}</a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex items-center">
            <Link href="https://github.com/keepkey">
              <a className="px-4">
                <Image src={githubIcon} alt="GitHub" width={30} height={30} />
              </a>
            </Link>
            <Link href="https://keepkey-docs-o9qn.vercel.app/">
              <a className="px-4">Docs</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

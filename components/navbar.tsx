import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import keepkeyLogo from '../public/images/logos/keepkey_logo.png';
import githubIcon from '../public/images/icons/github.png'; // Update this path to your GitHub icon
import SecurityIcon from '../public/images/icons/security.svg';
interface NavLink {
  id: number,
  name: string,
  url?: string,
  external?: boolean,
  children?: NavLink[]  // Optional children for dropdowns
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
    id: 1,
    name: 'FAQ\'s',
    url: '/faqs',
  },
  {
    id: 2,
    name: 'Info',
    children: [
      {
        id: 21,
        name: 'Community',
        url: '/community',
      },
      {
        id: 22,
        name: 'Resellers',
        url: '/resellers',
      },
      {
        id: 23,
        name: 'Dapps',
        url: '/dapps',
      }
    ]
  },
  {
    id: 5,
    name: 'Coins',
    url: '/coin-support',
  },
  {
    id: 6,
    name: 'Support',
    url: '/support',
  },
  {
    id: 7,
    name: 'Blog',
    url: '/blog',
  }
];

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<Record<number, boolean>>({});
  const dropdownRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle for hamburger menu

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      Object.keys(dropdownOpen).forEach(key => {
        if (dropdownOpen[key] && dropdownRefs.current[key] && !dropdownRefs.current[key]?.contains(event.target as Node)) {
          setDropdownOpen(prev => ({ ...prev, [key]: false }));
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const toggleDropdown = (id: number) => {
    setDropdownOpen(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
      <nav className={`nav fixed w-full py-4 z-10 transition-all ease-in-out duration-400 ${scroll ? 'bg-black' : ''} ${isMenuOpen ? 'bg-black' : ''}`}>
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/">
            <a className="nav__logo-wrap" onClick={() => setIsMenuOpen(false)}>
              <Image src={keepkeyLogo} alt="KeepKey logo" layout="responsive" quality={100} />
            </a>
          </Link>
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {/* Hamburger Icon */}
            <span className="hamburger-icon"></span>
          </button>
          <div className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row w-full lg:w-auto`}>
            {navLinks.map(link => (
                <div key={link.id} className="relative">
                  {link.children ? (
                      <button className="text-white px-4" onClick={() => setIsActive(!isActive)}>{link.name}</button>
                  ) : (
                      <Link href={link.url}>
                        <a className="text-white text-base px-4 font-normal opacity-80 hover:opacity-100">{link.name}</a>
                      </Link>
                  )}
                  {isActive && link.children && (
                      <div className="absolute left-0 bg-white shadow-md">
                        {link.children.map(sublink => (
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
            <Link href="https://keepkey-affiliate.vercel.app/">
              <a className="btn btn-lg w-100 text-black" target="_blank" rel="noreferrer">Earn Crypto with Us</a>
            </Link>
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
  );
}

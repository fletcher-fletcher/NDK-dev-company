'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Главная' },
  { href: '/about', label: 'О компании' },
  { href: '/services', label: 'Услуги' },
  { href: '/projects', label: 'Проекты' },
  { href: '/contacts', label: 'Контакты' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="group">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-[#1e3c2c] to-[#2d6a4a] bg-clip-text text-transparent">
            НДК
          </h1>
          <p className="text-xs text-gray-500 hidden sm:block">Национальная девелоперская компания</p>
        </Link>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors hover:text-[#2d6a4a] relative group ${
                pathname === link.href ? 'text-[#2d6a4a]' : 'text-[#1a1e24]'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#2d6a4a] rounded-full" />
              )}
            </Link>
          ))}
        </div>

        <button className="hidden md:inline-block bg-[#1e3c2c] text-white font-semibold py-2 px-6 rounded-full text-sm hover:bg-[#2d6a4a] transition">
          Связаться
        </button>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t mt-3 py-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 font-medium ${
                pathname === link.href ? 'text-[#2d6a4a]' : 'text-[#1a1e24]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="w-full bg-[#1e3c2c] text-white font-semibold py-3 rounded-full mt-3 hover:bg-[#2d6a4a] transition">
            Связаться
          </button>
        </div>
      )}
    </nav>
  );
}
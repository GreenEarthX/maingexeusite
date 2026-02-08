'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const isActive = (href: string) => pathname === href;
  const isSolutionsActive = pathname?.startsWith('/solutions');
  const navLinkClass = (active: boolean) =>
    `${active ? 'text-[#00A63E] font-semibold' : 'text-gray-600 hover:text-gray-900'} transition-colors text-sm font-medium`;

  useEffect(() => {
    if (!isSolutionsOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!solutionsRef.current?.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSolutionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSolutionsOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/gex-logo.png"
              alt="Green Earth X"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={navLinkClass(isActive('/'))}>
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              ref={solutionsRef}
            >
              <button
                type="button"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className={`flex items-center gap-1 ${navLinkClass(!!isSolutionsActive)}`}
              >
                Solutions
                <svg className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                  <Link
                    href="/solutions/certification-tool"
                    className={`block px-4 py-3 hover:bg-gray-50 transition-colors ${isActive('/solutions/certification-tool') ? 'bg-green-50/70' : ''}`}
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    <div className={`font-medium text-sm ${isActive('/solutions/certification-tool') ? 'text-[#00A63E]' : 'text-gray-900'}`}>
                      Certification Tool & Plant Builder
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">Design and certify sustainable plants</div>
                  </Link>
                  <Link
                    href="/solutions/geomap"
                    className={`block px-4 py-3 hover:bg-gray-50 transition-colors ${isActive('/solutions/geomap') ? 'bg-green-50/70' : ''}`}
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    <div className={`font-medium text-sm ${isActive('/solutions/geomap') ? 'text-[#00A63E]' : 'text-gray-900'}`}>
                      GeoMap Tool
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">Geographic intelligence & monitoring</div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className={navLinkClass(isActive('/about'))}>
              About
            </Link>
            <Link href="/team" className={navLinkClass(isActive('/team'))}>
              Team
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-[#00A63E] text-white text-sm font-medium rounded-full hover:bg-[#009032] transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link href="/" className={navLinkClass(isActive('/'))}>
                Home
              </Link>
              <Link href="/solutions/certification-tool" className={navLinkClass(isActive('/solutions/certification-tool'))}>
                Certification Tool & Plant Builder
              </Link>
              <Link href="/solutions/geomap" className={navLinkClass(isActive('/solutions/geomap'))}>
                GeoMap Tool
              </Link>
              <Link href="/about" className={navLinkClass(isActive('/about'))}>
                About
              </Link>
              <Link href="/team" className={navLinkClass(isActive('/team'))}>
                Team
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#00A63E] text-white text-sm font-medium rounded-full hover:bg-[#009032] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

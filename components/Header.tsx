'use client';
import { useState } from 'react';
import CTA, { CTA_URL } from './CTA';
import Link from 'next/link';
import Image from 'next/image';

export default function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gold-100 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative">
            <Image 
              src="/logo.png" 
              alt="BDG Win Game Logo" 
              width={40} 
              height={40} 
              className="rounded-lg"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg opacity-20 animate-pulse"></div>
          </div>
          <span className="font-bold tracking-wide text-lg bg-gradient-to-r from-gold-600 to-gold-800 bg-clip-text text-transparent">
            BDG Win Game
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link className="link-gold hover:text-gold-700 transition-colors" href="/blog">Blog</Link>
          <Link className="link-gold hover:text-gold-700 transition-colors" href="/faq">FAQ</Link>
          <Link className="link-gold hover:text-gold-700 transition-colors" href="/about">About</Link>
          <Link className="link-gold hover:text-gold-700 transition-colors" href="/contact">Contact</Link>
        </nav>
        
        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          {/* Login Button */}
          <a 
            href={CTA_URL} 
            target="_blank" 
            rel="nofollow noopener" 
            className="shine-button relative group px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #F59E0B 0%, #D4AF37 50%, #F59E0B 100%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s infinite, pulse-glow 2s ease-in-out infinite'
            }}
          >
            <span className="relative z-10 text-white font-bold">Login</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </a>
          
          {/* Register Button */}
          <a 
            href={CTA_URL} 
            target="_blank" 
            rel="nofollow noopener" 
            className="shine-button relative group px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 overflow-hidden transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #F59E0B 25%, #D4AF37 50%, #F59E0B 75%, #D4AF37 100%)',
              backgroundSize: '300% 100%',
              animation: 'shimmer 2s infinite, pulse-glow 1.5s ease-in-out infinite',
              boxShadow: '0 6px 20px rgba(212, 175, 55, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            <span className="relative z-10 text-white font-bold flex items-center gap-1">
              <span>🎁</span>
              <span>Register</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative p-2 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-white"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur border-b border-gold-100 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <nav className="flex flex-col gap-4">
              <Link 
                className="link-gold hover:text-gold-700 transition-colors py-2" 
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                className="link-gold hover:text-gold-700 transition-colors py-2" 
                href="/faq"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                className="link-gold hover:text-gold-700 transition-colors py-2" 
                href="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                className="link-gold hover:text-gold-700 transition-colors py-2" 
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            
            <div className="flex flex-col gap-3 pt-4 border-t border-gold-100">
              {/* Mobile Login Button */}
              <a 
                href={CTA_URL} 
                target="_blank" 
                rel="nofollow noopener" 
                className="relative group px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 overflow-hidden text-center"
                style={{
                  background: 'linear-gradient(135deg, #F59E0B 0%, #D4AF37 50%, #F59E0B 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s infinite',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 text-white font-bold">Login</span>
              </a>
              
              {/* Mobile Register Button */}
              <a 
                href={CTA_URL} 
                target="_blank" 
                rel="nofollow noopener" 
                className="relative group px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 overflow-hidden text-center"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F59E0B 25%, #D4AF37 50%, #F59E0B 75%, #D4AF37 100%)',
                  backgroundSize: '300% 100%',
                  animation: 'shimmer 2s infinite',
                  boxShadow: '0 6px 20px rgba(212, 175, 55, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 text-white font-bold flex items-center justify-center gap-1">
                  <span>🎁</span>
                  <span>Register</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

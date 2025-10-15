import CTA, { CTA_URL } from './CTA';
import Link from 'next/link';

export default function Header(){
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gold-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="h-9 w-9 rounded-full border border-gold-400" />
          <span className="font-bold tracking-wide">BDG Win Game</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link className="link-gold" href="/blog">Blog</Link>
          <Link className="link-gold" href="/faq">FAQ</Link>
          <Link className="link-gold" href="/about">About</Link>
          <Link className="link-gold" href="/contact">Contact</Link>
        </nav>
        <div className="flex gap-2">
          <a href={CTA_URL} target="_blank" rel="nofollow noopener" className="btn-gold">Login</a>
          <CTA label="Register Now" />
        </div>
      </div>
    </header>
  );
}

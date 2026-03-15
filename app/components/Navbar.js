'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="flex justify-between items-center mb-16 border-b border-white/5 pb-8 font-mono">
      <Link href="/" className="text-3xl font-black tracking-tighter text-white uppercase italic underline decoration-purple-500 decoration-4 underline-offset-8">
        KIMPULER
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`text-sm uppercase tracking-wider transition ${
              pathname === item.path
                ? 'text-purple-400 border-b-2 border-purple-500 pb-1'
                : 'text-white/70 hover:text-white'
            }`}
          >
            {item.name}
          </Link>
        ))}
        <a
          href="https://wa.me/6283841632837"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-2 rounded-full font-black hover:bg-purple-500 hover:text-white transition-all uppercase tracking-widest text-[10px]"
        >
          Let's Talk
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-slate-950 border-t border-white/5 py-6 px-6 flex flex-col gap-4 md:hidden z-50">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm uppercase tracking-wider transition ${
                pathname === item.path ? 'text-purple-400' : 'text-white/70 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://wa.me/6283841632837"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-full font-black hover:bg-purple-500 hover:text-white transition-all uppercase tracking-widest text-[10px] text-center"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  )
}
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Teachers', href: '/teachers' },
    { name: 'Students', href: '/students' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
      <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-5">
        <Link href="/" className="text-lg font-bold text-black">
          Nest Education
        </Link>

        <nav className="hidden gap-6 sm:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium ${
                pathname === link.href
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="text-2xl sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-white px-5 py-3 sm:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 text-sm font-medium ${
                pathname === link.href
                  ? 'text-blue-600'
                  : 'text-gray-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

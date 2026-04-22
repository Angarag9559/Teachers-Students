'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Teachers', href: '/teachers' },
    { name: 'Students', href: '/students' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-5">
        <Link href="/" className="text-xl sm:text-2xl font-black tracking-tighter text-black">
          Nest Education
        </Link>
        
        <nav className="flex items-center gap-4 sm:gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase transition-colors hover:text-blue-600 ${
                  isActive ? 'text-blue-600' : 'text-black/60'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

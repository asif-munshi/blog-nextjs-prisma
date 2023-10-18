'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isActive: (pathname: string) => boolean = (path) => pathname === path

  return (
    <nav className="flex items-center p-8">
      <div className="left">
        <Link
          href="/"
          data-active={isActive('/')}
          className="inline-block font-bold text-black no-underline data-[active=true]:text-[#808080]"
        >
          Feed
        </Link>
      </div>
    </nav>
  )
}

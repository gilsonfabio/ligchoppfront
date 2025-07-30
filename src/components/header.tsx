'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-slate-950 shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo principal */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/ligchoppwhite.png"
            alt="Logo LigChopp"
            width={120}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Navegação desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-sm font-medium hover:underline">
            Quem somos
          </Link>
          <Link href="/" className="text-sm font-medium hover:underline">
            Produtos
          </Link>
          <Link href="/" className="text-sm font-medium hover:underline">
            Parceiros
          </Link>
          <Link href="/" className="text-sm font-medium hover:underline">
            Contato
          </Link>
        </nav>

        {/* Logo secundária (desktop apenas) */}
        <div className="hidden md:block">
          <Image
            src="/images/oktoswhite.png"
            alt="Logo Parceiro"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Botão mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-slate-950 text-white">
          <Link href="/" className="block text-base font-medium">
            Quem somos
          </Link>
          <Link href="/" className="block text-base font-medium">
            Produtos
          </Link>
          <Link href="/" className="block text-base font-medium">
            Parceiros
          </Link>
          <Link href="/" className="block text-base font-medium">
            Contato
          </Link>
        </div>
      )}
    </header>
  )
}

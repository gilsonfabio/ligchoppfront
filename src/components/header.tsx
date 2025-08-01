'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-slate-800 shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo principal */}
        <div className="flex items-center gap-4">
          <Link href="/" className="block text-base font-medium">
            <Image
              src="/images/ligchoppwhite.png"
              alt="Logo LigChopp"
              width={120}
              height={50}
              className="object-contain"
            />
          </Link>  
        </div>
        {/* Navegação desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/about" className="text-sm font-medium hover:underline">
            Quem somos
          </Link>
          <Link href="/calc" className="text-sm font-medium hover:underline">
            Calculadora
          </Link>
          <Link href="https://oktos.com.br" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline">
            Parceiros
          </Link>
          <Link href="https://wa.me/556492386166" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline">
            Contato
          </Link>
        </nav>

        {/* Logo secundária (desktop apenas) */}
        <div className="">
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
          <Link href="/about" className="block text-base font-medium">
            Quem somos
          </Link>
          <Link href="/calc" className="block text-base font-medium">
            Calculadora
          </Link>
          <Link href="https://oktos.com.br" target="_blank" rel="noopener noreferrer" className="block text-base font-medium">
            Parceiros
          </Link>
          <Link href="https://wa.me/556492386166" target="_blank" rel="noopener noreferrer" className="block text-base font-medium">
            Contato
          </Link>
        </div>
      )}
    </header>
  )
}

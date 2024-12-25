'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Heart, ShoppingCart, UserCircle } from 'lucide-react'
import CartDropdown from '../cartDropDown'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full bg-white shadow-sm">
      {/* Main container for Navbar */}
      <div className="max-w-[1286px] mx-auto px-4 flex items-center justify-between h-[70px] md:h-[80px]">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image src={'/logo.png'} alt={'Logo'} height={32} width={50} className="block" />
          <h1 className="text-[24px] md:text-[34px] font-bold font-montserrat text-black">
            Furniro
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center gap-8">
          <Link href="/" className="text-sm md:text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">Home</Link>
          <Link href="/shop" className="text-sm md:text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">Shop</Link>
          <Link href="/blog" className="text-sm md:text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">Blog</Link>
          <Link href="/contact" className="text-sm md:text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">Contact</Link>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/" aria-label="Account" className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <UserCircle className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
          <button aria-label="Search" className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Search className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <Link href="/" aria-label="Wishlist" className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Heart className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
         <CartDropdown />
        </div>
      </div>

      {/* Mobile View - Hamburger Menu */}
      <div className="sm:hidden flex items-center justify-between px-4 py-2">
        <button
          aria-label="Menu"
          className="p-2 bg-transparent"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-1 bg-black mb-1 transition-transform duration-300" />
          <span className="block w-6 h-1 bg-black mb-1 transition-transform duration-300" />
          <span className="block w-6 h-1 bg-black transition-transform duration-300" />
        </button>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-white shadow-lg z-10 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          <Link href="/" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/shop" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/blog" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/contact" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

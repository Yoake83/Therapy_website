'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="w-full bg-[#F5F0EB]">
      <nav className="container-custom py-5 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-xl md:text-2xl font-normal text-[#1E2A3A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Dr. Maya Reynolds
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-10">
            <li>
              <a
                href="#about"
                className="text-[#1E2A3A] hover:text-[#7A9E8E] transition-colors text-sm tracking-wide"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-[#1E2A3A] hover:text-[#7A9E8E] transition-colors text-sm tracking-wide"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[#1E2A3A] hover:text-[#7A9E8E] transition-colors text-sm tracking-wide"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#1E2A3A] p-1"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#1E2A3A]/15 pt-4">
            <ul className="space-y-3">
              {['About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={toggleMenu}
                    className="block text-[#1E2A3A] hover:text-[#7A9E8E] transition-colors text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
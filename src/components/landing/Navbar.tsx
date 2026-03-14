'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Sparkles } from 'lucide-react'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/95 border-b border-white/60 shadow-xl supports-[backdrop-filter:blur()]:bg-white/90"
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 font-black text-xl sm:text-2xl"
            onClick={closeMenu}
          >
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-500" />
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              CRMPro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition-all hover:scale-105"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition-all hover:scale-105"
            >
              Pricing
            </Link>
            <Link href="/register">
              <button className="px-8 py-3 text-lg font-bold bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Get Started Free
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white/98 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link
                href="#features"
                onClick={closeMenu}
                className="block text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors py-3 px-4 rounded-xl hover:bg-indigo-50"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                onClick={closeMenu}
                className="block text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors py-3 px-4 rounded-xl hover:bg-indigo-50"
              >
                Pricing
              </Link>
              <Link
                href="/login"
                onClick={closeMenu}
                className="block text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors py-3 px-4 rounded-xl hover:bg-indigo-50"
              >
                Iniciar Sesión
              </Link>
              <div className="pt-2">
                <Link href="/register" onClick={closeMenu}>
                  <button className="w-full py-4 text-lg font-bold bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all shadow-lg">
                    🚀 Crear Mi CRM Gratis
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

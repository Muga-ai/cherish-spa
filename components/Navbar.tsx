"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Scissors, Image, Calendar, Phone, Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-lg text-white z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-xl font-bold text-red-500">
          Cherish
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm items-center">
          <Link href="/services" className="flex items-center gap-2 hover:text-red-500">
            <Scissors size={16}/> Services
          </Link>
          <Link href="/gallery" className="flex items-center gap-2 hover:text-red-500">
            <Image size={16}/> Gallery
          </Link>
          <Link href="/booking" className="flex items-center gap-2 hover:text-red-500">
            <Calendar size={16}/> Book
          </Link>
          <Link href="/contact" className="flex items-center gap-2 hover:text-red-500">
            <Phone size={16}/> Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black border-t border-zinc-800 px-6 py-6 space-y-6"
          >
            <Link href="/services" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <Scissors size={18}/> Services
            </Link>
            <Link href="/gallery" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <Image size={18}/> Gallery
            </Link>
            <Link href="/booking" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <Calendar size={18}/> Book
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <Phone size={18}/> Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
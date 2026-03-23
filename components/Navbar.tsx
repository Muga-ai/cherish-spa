"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Scissors, Image, Calendar, Phone } from "lucide-react"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-black/80 backdrop-blur-lg text-white z-50 border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link href="/" className="text-xl font-bold tracking-wider text-red-500">
          Cherish
        </Link>

        <div className="space-x-8 hidden md:flex text-sm items-center">

          <Link href="/services" className="flex items-center gap-2 hover:text-red-500 transition">
            <Scissors size={16}/> Services
          </Link>

          <Link href="/gallery" className="flex items-center gap-2 hover:text-red-500 transition">
            <Image size={16}/> Gallery
          </Link>

          <Link href="/booking" className="flex items-center gap-2 hover:text-red-500 transition">
            <Calendar size={16}/> Book
          </Link>

          <Link href="/contact" className="flex items-center gap-2 hover:text-red-500 transition">
            <Phone size={16}/> Contact
          </Link>

        </div>

      </div>
    </motion.nav>
  )
}
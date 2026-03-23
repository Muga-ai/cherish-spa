"use client"

import { motion } from "framer-motion"
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

        <h1 className="text-xl font-bold tracking-wider text-red-500">
          Cherish
        </h1>

        <div className="space-x-8 hidden md:flex text-sm items-center">

          <a href="/services" className="flex items-center gap-2 hover:text-red-500 transition">
            <Scissors size={16}/> Services
          </a>

          <a href="/gallery" className="flex items-center gap-2 hover:text-red-500 transition">
            <Image size={16}/> Gallery
          </a>

          <a href="/booking" className="flex items-center gap-2 hover:text-red-500 transition">
            <Calendar size={16}/> Book
          </a>

          <a href="/contact" className="flex items-center gap-2 hover:text-red-500 transition">
            <Phone size={16}/> Contact
          </a>

        </div>

      </div>
    </motion.nav>
  )
}
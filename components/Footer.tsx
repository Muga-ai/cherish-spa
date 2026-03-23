"use client"

import Link from "next/link"
import { Scissors, Image, Calendar, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-500">Cherish</h2>
          <p>Luxury spa, salon & barbershop in Nairobi.</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-2 text-gray-300">
            <Link href="/services" className="hover:text-red-500 flex items-center gap-1"><Scissors size={14}/> Services</Link>
            <Link href="/gallery" className="hover:text-red-500 flex items-center gap-1"><Image size={14}/> Gallery</Link>
            <Link href="/booking" className="hover:text-red-500 flex items-center gap-1"><Calendar size={14}/> Book</Link>
            <Link href="/contact" className="hover:text-red-500 flex items-center gap-1"><Phone size={14}/> Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p>📍 Nairobi, Kenya</p>
          <p>📞 +254 700 000 000</p>
        </div>
      </div>

      <div className="text-center text-gray-500 py-6 border-t border-zinc-800 text-sm">
        &copy; {new Date().getFullYear()} Cherish Spa. All rights reserved.
      </div>
    </footer>
  )
}
"use client"

import Link from "next/link"
import { Scissors, Image, Calendar, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

        {/* Contact & Branding */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">Cherish Spa</h2>
          <p>Luxury spa, salon & barbershop in Nairobi.</p>

          <div className="mt-6 space-y-2">
            <p>📍 Suite 20A, Groundfloor, NextGen Mall, Mombasa Road, Nairobi</p>
            <p>📞 +254 724 758 120</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            <div className="space-y-2">
              <Link href="/services" className="hover:text-red-500 flex items-center gap-1">
                <Scissors size={14}/> Services
              </Link>
              <Link href="/booking" className="hover:text-red-500 flex items-center gap-1">
                <Calendar size={14}/> Book
              </Link>
              <Link href="/contact" className="hover:text-red-500 flex items-center gap-1">
                <Phone size={14}/> Contact
              </Link>
            </div>

            {/* Google Maps iframe */}
            <div className="mt-6 md:mt-0">
              <iframe
                title="Cherish Spa Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.589123456!2d36.8532!3d-1.3148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e1a2a2b2b3%3A0xabcdef1234567890!2sNextGen%20Mall%2C%20Mombasa%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1699999999999!5m2!1sen!2ske"
                width="100%"
                height="200"
                className="rounded-lg border border-zinc-800"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>

      <div className="text-center py-6 border-t border-zinc-800 text-sm text-gray-500">
        © {new Date().getFullYear()} Cherish Spa. All rights reserved.
      </div>
    </footer>
  )
}
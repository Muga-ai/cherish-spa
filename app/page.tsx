"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {
  const images = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
    "/images/hero4.jpg",
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="bg-black text-white min-h-screen">

      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">

        {/* Hero Image Rotation */}
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`Cherish Spa ${index + 1}`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Cherish Spa, Salon & Barbershop
          </motion.h1>

          <motion.p className="mt-4 text-gray-300">
            Premium grooming, beauty and relaxation in Nairobi.
          </motion.p>

          <motion.a
            href="/booking"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-6 bg-red-600 px-6 py-3 rounded-xl"
          >
            Book Appointment
          </motion.a>
        </div>
      </section>
    </main>
  )
}
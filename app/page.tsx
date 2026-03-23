"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import Navbar from "../components/Navbar"

const heroImages = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
  "/images/hero5.jpg",
  "/images/hero6.jpg",
  "/images/hero7.jpg",
  "/images/hero8.jpg",
  "/images/hero9.jpg",
  "/images/hero10.jpg",
  "/images/hero11.jpg",
  "/images/hero12.jpg",
  "/images/hero13.jpg",
  "/images/hero14.jpg",
  "/images/hero15.jpg",
  "/images/hero16.jpg",
  "/images/hero17.jpg",
  "/images/hero18.jpg",
  "/images/hero19.jpg",
  "/images/hero20.jpg",
]

export default function Home() {

  const [index, setIndex] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)

  }, [])

  return (

    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

        {/* Background Image Slider */}
        <AnimatePresence mode="wait">

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >

            <Image
              src={heroImages[index]}
              alt="Cherish Spa, Salon & Barbershop"
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover"
            />

          </motion.div>

        </AnimatePresence>

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 px-6 max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Cherish Spa, Salon & Barbershop
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-base sm:text-lg text-gray-300 max-w-xl mx-auto"
          >
            Premium grooming, beauty and relaxation in Nairobi.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mt-8 bg-red-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-red-500 active:scale-95 shadow-lg"
          >
            Book Appointment
          </motion.button>

        </div>

      </section>

    </main>
  )
}
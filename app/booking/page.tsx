"use client"

import { useState } from "react"

export default function Booking() {
  const [name, setName] = useState("")
  const [service, setService] = useState("")
  const [date, setDate] = useState("")

  const phone = "254700000000" // replace with your real number

  const handleWhatsApp = () => {
    const message = `Hello Cherish Spa,%0A%0A
Name: ${name}%0A
Service: ${service}%0A
Preferred Date: ${date}%0A%0A
I'd like to book an appointment.`

    const url = `https://wa.me/${phone}?text=${message}`
    window.open(url, "_blank")
  }

  return (
    <section className="py-24 bg-black text-white min-h-screen">
      <div className="max-w-xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Book Appointment
        </h1>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 bg-zinc-900 rounded-xl outline-none"
          />

          <select
            onChange={(e) => setService(e.target.value)}
            className="w-full p-4 bg-zinc-900 rounded-xl"
          >
            <option>Select Service</option>
            <option>Spa</option>
            <option>Salon</option>
            <option>Barbershop</option>
          </select>

          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-4 bg-zinc-900 rounded-xl"
          />

          <button
            onClick={handleWhatsApp}
            className="w-full bg-green-600 py-4 rounded-xl font-semibold hover:bg-green-500"
          >
            Book via WhatsApp
          </button>

        </div>

      </div>
    </section>
  )
}
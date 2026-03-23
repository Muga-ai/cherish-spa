export default function Booking() {
  return (
    <section className="py-24 bg-black text-white min-h-screen">
      <div className="max-w-xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Book Appointment
        </h1>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 bg-zinc-900 rounded-xl outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-zinc-900 rounded-xl outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-4 bg-zinc-900 rounded-xl outline-none"
          />

          <select className="w-full p-4 bg-zinc-900 rounded-xl">
            <option>Select Service</option>
            <option>Spa</option>
            <option>Salon</option>
            <option>Barbershop</option>
          </select>

          <input
            type="date"
            className="w-full p-4 bg-zinc-900 rounded-xl"
          />

          <button className="w-full bg-red-600 py-4 rounded-xl font-semibold hover:bg-red-500">
            Confirm Booking
          </button>

        </form>

      </div>
    </section>
  )
}
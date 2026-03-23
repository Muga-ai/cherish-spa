export default function Services() {
  return (
    <section className="py-24 bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-16">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-zinc-900 p-8 rounded-2xl hover:border hover:border-red-500 transition">
            <h2 className="text-2xl font-semibold mb-4 text-red-500">Spa</h2>
            <p className="text-gray-400">
              Professional massage, facials, and body treatments for total relaxation.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl hover:border hover:border-red-500 transition">
            <h2 className="text-2xl font-semibold mb-4 text-red-500">Salon</h2>
            <p className="text-gray-400">
              Hair styling, coloring, and beauty services tailored to your look.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl hover:border hover:border-red-500 transition">
            <h2 className="text-2xl font-semibold mb-4 text-red-500">Barbershop</h2>
            <p className="text-gray-400">
              Clean cuts, beard grooming, and premium barber services.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
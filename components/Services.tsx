export default function Services() {
  return (

    <section className="py-24 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-zinc-900 p-8 rounded-2xl hover:border hover:border-red-500 transition">
            <h3 className="text-2xl font-semibold mb-4 text-red-500">
              Spa
            </h3>
            <p className="text-gray-400">
              Relax and rejuvenate with professional massage, facials, and
              body treatments designed to restore your body and mind.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl hover:border hover:border-red-500 transition">
            <h3 className="text-2xl font-semibold mb-4 text-red-500">
              Salon
            </h3>
            <p className="text-gray-400">
              Modern hair styling, coloring, and beauty treatments tailored
              to enhance your unique style.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl hover:border hover:border-red-500 transition">
            <h3 className="text-2xl font-semibold mb-4 text-red-500">
              Barbershop
            </h3>
            <p className="text-gray-400">
              Precision haircuts, beard grooming, and classic barber
              services delivered by skilled professionals.
            </p>
          </div>

        </div>

      </div>

    </section>

  )
}
export default function Contact() {
  return (
    <section className="py-24 bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h1 className="text-4xl font-bold mb-10">
          Contact Us
        </h1>

        <div className="space-y-6 text-gray-300">

          <p>📍 Nairobi, Kenya</p>
          <p>📞 +254 724 758 120</p>
          <p>📧 Lindaeunice86@gmail.com</p>

        </div>

        <div className="mt-10">
          <a
            href="https://wa.me/+254724758120"
            target="_blank"
            className="bg-green-600 px-6 py-3 rounded-xl"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}
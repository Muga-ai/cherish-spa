"use client"

export default function WhatsAppButton() {
  const phone = "254724758120"

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
    >
      💬
    </a>
  )
}
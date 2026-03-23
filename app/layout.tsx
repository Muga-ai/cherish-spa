import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Cherish Spa, Salon & Barbershop",
  description: "Luxury spa, salon and barbershop in Nairobi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <Navbar />

        {children}

      </body>
    </html>
  );
}
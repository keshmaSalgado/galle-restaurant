import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Chatbot from "./component/chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galle Restaurant",
  description: "Experience the finest cuisine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="bg-amber-900 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-amber-200">
              🍽️ Galle Restaurant
            </Link>
            <ul className="flex gap-8">
              <li>
                <Link href="/" className="hover:text-amber-200 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="hover:text-amber-200 transition">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-200 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="hover:text-amber-200 transition">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="grow">{children}</main>

        {/* ✅ ADD CHATBOT HERE */}
        <Chatbot />
        <footer className="bg-amber-900 text-white text-center py-4 mt-12">
          <p>&copy; 2026 Galle Restaurant. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

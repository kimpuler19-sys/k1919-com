import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Inter } from 'next/font/google'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kimpuler Design Digital Solution",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  description: "Full-Stack Solutions: Web Development, DBA, Crypto Solutions, and Professional Live Commerce Hosting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                <FloatingWhatsApp />
        {children}
         
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RentedIt",
  description: "Rent, Use, Return - It's That Simple !",
  keywords: "Rent, Use, Return, Simple. RentedIt",
  openGraph: {
    title: "RentedIt",
    description: "Rent, Use, Return - It's That Simple !",
    url: "http://localhost:3000",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Image Alt Text",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} overflow-x-hidden`}>
      <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

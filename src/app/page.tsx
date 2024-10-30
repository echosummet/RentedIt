
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Navbar from "@/components/Navbar/Navbar";
import TopRentedItems from "@/components/TopRentedItems/TopRentedItems";
import UserTestimonials from "@/components/UserTestimonials/UserTestimonials";
import { Metadata } from "next";
import { NhostProvider } from "@nhost/nextjs";
import { nhost } from '../lib/nhost'

export const metadata: Metadata = {
  title: "Home - RentedIt",
  description: "Explore the top rented items, how it works, and user testimonials at RentedIt.",
  keywords: "rental, items, user testimonials, how it works",
  openGraph: {
    title: "RentedIt - Home",
    description: "Discover top rental items and read user testimonials.",
    url: "https://RentedIt.vercel.app",
    type: "website",
    images: [
      {
        url: "https://RentedIt.vercel.app/logo.svg",
        width: 1200,
        height: 630,
        alt: "RentedIt Home Page Image",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="bg-[#040312]">

      <div className="flex flex-col items-center justify-center">
        <div className="w-[75%] max-sm:w-full">
          <Hero />
          <TopRentedItems />
          <HowItWorks />
          <UserTestimonials />
        </div>
      </div>

    </main>
  );
}

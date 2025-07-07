"use client";

import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import USP from "@/components/USP";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Reviews />
      <Services />
      <USP />
      <Contact />
    </main>
  );
}
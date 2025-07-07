"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative text-white py-12 sm:py-24 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      >
        <source src="/videos/GartenbauStroe.mp4" type="video/mp4" />
        Dein Browser unterstützt keine HTML5-Videos.
      </video>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            GARTEN- UND LANDSCHAFTSBAU STROE
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 px-2">
            ROBUST. STARK. STROE. – IHR PARTNER FÜR GARTEN & LANDSCHAFTSBAU.
          </p>
          <Link href="https://tidycal.com/team/stroe/galabau" target="_blank">
            <Button
              size="lg"
              className="bg-white text-[#92c43f] hover:bg-gray-100 w-full sm:w-auto text-sm sm:text-base"
            >
              JETZT KOSTENLOSES ERSTGESPRÄCH SICHERN{" "}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
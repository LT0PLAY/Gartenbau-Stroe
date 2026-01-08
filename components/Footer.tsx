'use client';

import Link from "next/link";
import { MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Kontakt</h3>
            <div className="w-full max-w-md space-y-6 sm:space-y-8">
              <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 transform transition-all hover:scale-105">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <div className="bg-[#92c43f]/10 p-2 sm:p-3 rounded-full">
                    <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-[#92c43f]" />
                  </div>
                  <span className="text-base sm:text-lg font-medium">Adresse</span>
                </div>
                <div className="pl-12 sm:pl-16 space-y-1">
                  <p className="text-sm sm:text-base text-white/90">Garten- und Landschaftsbau Stroe</p>
                  <p className="text-sm sm:text-base text-white/90">Gewerbering 5</p>
                  <p className="text-sm sm:text-base text-white/90">82544 Egling</p>
                  <p className="text-sm sm:text-base text-white/90">Bayern, Deutschland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Öffnungszeiten</h3>
            <div className="w-full max-w-md">
              <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 transform transition-all hover:scale-105">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="bg-[#92c43f]/10 p-2 sm:p-3 rounded-full">
                    <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-[#92c43f]" />
                  </div>
                  <span className="text-base sm:text-lg font-medium">Unsere Zeiten</span>
                </div>
                <div className="pl-12 sm:pl-16 space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-white/90">Montag - Freitag</span>
                    <span className="text-sm sm:text-base text-[#92c43f]">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-white/90">Samstag</span>
                    <span className="text-sm sm:text-base text-[#92c43f]">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-white/90">Sonntag</span>
                    <span className="text-sm sm:text-base text-red-400">Geschlossen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 sm:mt-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Rechtliches</h3>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8">
            <Link 
              href="/impressum" 
              className="bg-zinc-800/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#92c43f]/10 transition-colors"
            >
              Impressum
            </Link>
            <Link 
              href="/datenschutz" 
              className="bg-zinc-800/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#92c43f]/10 transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-sm sm:text-base text-white/70 uppercase">&copy; {new Date().getFullYear()} GARTEN- UND LANDSCHAFTSBAU STROE. ALLE RECHTE VORBEHALTEN.</p>
        </div>
      </div>
    </footer>
  );
}
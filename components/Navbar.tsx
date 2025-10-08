"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-[#92c43f]/50 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20"> {/* erhöht, damit Platz fürs größeres Logo ist */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/Pictures/Stroe_ALL_White.png"
                alt="Stroe Logo"
                className="h-[75px] w-auto transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("services")} className="text-white hover:text-gray-200">
              DIENSTLEISTUNGEN
            </button>
            <button onClick={() => scrollToSection("reviews")} className="text-white hover:text-gray-200">
              BEWERTUNGEN
            </button>
            <button onClick={() => scrollToSection("usp")} className="text-white hover:text-gray-200">
              VORTEILE
            </button>
            {/* 
            <Link href="/werke" className="text-white hover:text-gray-200">
              UNSERE WERKE
            </Link>
            */}
            <Link href="/#contact">
              <Button variant="outline" className="bg-white text-[#92c43f] hover:bg-gray-100 border-none">
                KONTAKT
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-[#83b136]"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#92c43f]/50 backdrop-blur-sm">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-2 text-white hover:bg-[#83b136]"
            >
              DIENSTLEISTUNGEN
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="block w-full text-left px-3 py-2 text-white hover:bg-[#83b136]"
            >
              BEWERTUNGEN
            </button>
            <button
              onClick={() => scrollToSection("usp")}
              className="block w-full text-left px-3 py-2 text-white hover:bg-[#83b136]"
            >
              VORTEILE
            </button>
            {/*
            <Link
              href="/werke"
              className="block w-full text-left px-3 py-2 text-white hover:bg-[#83b136]"
              onClick={() => setIsOpen(false)}
            >
              UNSERE WERKE
            </Link>
            */}
            <Link
              href="/#contact"
              className="block w-full text-left px-3 py-2 bg-white text-[#92c43f] hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              KONTAKT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
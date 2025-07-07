"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setShowConsent(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookieConsent", "essential");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-sm z-50 p-4 shadow-lg border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">Diese Website verwendet Cookies</h3>
            <p className="text-gray-300 text-sm">
              Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
              Einige sind technisch notwendig, andere helfen uns, die Website und ihre Nutzung zu verbessern. 
              Weitere Informationen finden Sie in unserer{" "}
              <Link href="/datenschutz" className="text-[#92c43f] hover:underline">
                Datenschutzerklärung
              </Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 min-w-[300px]">
            <Button
              variant="outline"
              className="border-gray-700 hover:bg-gray-800 text-white"
              onClick={acceptEssential}
            >
              Nur Essenzielle
            </Button>
            <Button
              className="bg-[#92c43f] hover:bg-[#83b136] text-white"
              onClick={acceptAll}
            >
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
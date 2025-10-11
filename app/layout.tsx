import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GARTEN- UND LANDSCHAFTSBAU STROE",
  description: "Ihre vertrauenswürdige Anlaufstelle für professionelle Dienstleistungen",
  icons: { icon: "/Pictures/favicon.png" }, // /public/Pictures/favicon.png
  openGraph: {
    title: "Garten- und Landschaftsbau Stroe",
    description: "Robust, Schnell & Stark – Ihr Partner für Garten- & Landschaftsbau in Bayern.",
    url: "https://stroe-galabau.de",
    siteName: "Garten- und Landschaftsbau Stroe",
    images: [
      {
        url: "https://stroe-galabau.de/Pictures/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Vorschau Garten- und Landschaftsbau Stroe",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garten- und Landschaftsbau Stroe",
    description: "Ihr Profi für Garten- und Landschaftsbau – Robust, Schnell & Stark.",
    images: ["https://stroe-galabau.de/Pictures/social-preview.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16">{children}</div>
        <Footer />
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="cffb62bb-b752-4288-9d41-021c2a2f48e4"
          data-blockingmode="auto"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
// src/app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://stroe-galabau.de";
const siteName = "Garten- und Landschaftsbau Stroe";
const defaultTitle = "Garten- und Landschaftsbau Stroe";
const defaultDescription =
  "Garten- und Landschaftsbau in Bayern: Pflege, Neuanlagen, Pflasterarbeiten, Erdarbeiten und mehr. Robust, Schnell & Stark – Ihr Partner vor Ort.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/Pictures/favicon.png",
    apple: "/Pictures/favicon.png",
  },

  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/Pictures/social-preview.png",
        width: 1200,
        height: 630,
        alt: `Vorschau ${siteName}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/Pictures/social-preview.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ✅ WICHTIG: Nur echte Links eintragen. Wenn du keine hast: sameAs leer lassen/entfernen.
  const sameAs: string[] = [
    // "https://www.instagram.com/DEIN_ACCOUNT",
    // "https://www.facebook.com/DEINE_SEITE",
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/Pictures/favicon.png`,
    image: `${siteUrl}/Pictures/social-preview.png`,
    description: defaultDescription,
    telephone: "+4915223230374",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gewerbering 5",
      addressLocality: "Egling",
      postalCode: "82544",
      addressRegion: "Bayern",
      addressCountry: "DE",
    },
    areaServed: { "@type": "AdministrativeArea", name: "Bayern" },
    priceRange: "$$",
    sameAs: sameAs.length ? sameAs : undefined,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    inLanguage: "de-DE",
  };

  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16">{children}</div>
        <Footer />

        {/* ✅ Strukturierte Daten */}
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="schema-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* ✅ Cookiebot */}
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
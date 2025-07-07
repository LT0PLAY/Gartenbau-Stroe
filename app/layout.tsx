import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ihre Firma - Professionelle Dienstleistungen',
  description: 'Ihre vertrauenswürdige Anlaufstelle für professionelle Dienstleistungen',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
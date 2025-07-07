"use client";

import Link from "next/link";

export default function MovingBanner() {
  return (
    <div className="relative overflow-hidden py-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Content */}
      <div className="relative z-20 animate-scroll whitespace-nowrap text-white text-xl font-semibold">
        <Link 
          href="http://www.munichmotions.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-colors inline-block mr-[50vw]"
        >
          MUNICHMOTIONS – WEIL GUTE VIDEOS KEINE ZUFÄLLE SIND
        </Link>
        <Link 
          href="http://www.munichmotions.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-colors inline-block mr-[50vw]"
        >
          MUNICHMOTIONS – WEIL GUTE VIDEOS KEINE ZUFÄLLE SIND
        </Link>
        <Link 
          href="http://www.munichmotions.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-colors inline-block"
        >
          MUNICHMOTIONS – WEIL GUTE VIDEOS KEINE ZUFÄLLE SIND
        </Link>
      </div>
    </div>
  );
}
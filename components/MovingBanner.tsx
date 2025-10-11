"use client";

import Link from "next/link";
import "../app/MovingBanner.css";

export default function MovingBanner() {
  return (
    <Link
      href="http://www.munichmotions.com"
      target="_blank"
      rel="noopener noreferrer"
      className="block" // macht den Link block-level, damit der ganze Banner klickbar ist
    >
      <div className="relative overflow-hidden py-4 marquee-paused cursor-pointer">
        {/* Hintergrundbild */}
        <div
          className="absolute inset-0 z-0 bg-center bg-cover"
          style={{ backgroundImage: 'url("/Pictures/Munichmotions_Banner.webp")' }}
          aria-hidden="true"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10 transition-opacity duration-200 hover:opacity-80" />

        {/* Content */}
        <div className="relative z-20 text-white text-xl font-semibold whitespace-nowrap overflow-hidden">
          <div className="animate-marquee">
            <BannerText />
            <BannerText /> {/* dupliziert für Loop */}
          </div>
        </div>
      </div>
    </Link>
  );
}

function BannerText() {
  return (
    <>
      <span className="inline-block mr-[50vw]">
        MUNICHMOTIONS – DEIN VIDEO - DEINE STORY - UNSER HANDWERK
      </span>
      <span className="inline-block mr=[50vw] mr-[50vw]">
        MUNICHMOTIONS – WEIL GUTE VIDEOS KEINE ZUFÄLLE SIND
      </span>
      <span className="inline-block">
        MUNICHMOTIONS – WEIL GUTE VIDEOS KEINE ZUFÄLLE SIND
      </span>
    </>
  );
}
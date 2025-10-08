"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Banner() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const tryPlay = async (v: HTMLVideoElement) => {
    try {
      v.muted = true;
      // iOS/Safari: playsinline sicherstellen
      v.setAttribute("playsinline", "");
      if (v.paused) {
        await v.play();
      }
      setIsPlaying(true);
      setNeedsInteraction(false);
      return true;
    } catch {
      setIsPlaying(false);
      setNeedsInteraction(true);
      return false;
    }
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReduced) {
      setNeedsInteraction(true);
      return;
    }

    const start = () => void tryPlay(v);

    if (v.readyState >= 1) {
      start();
    } else {
      const onLoadedMeta = () => start();
      v.addEventListener("loadedmetadata", onLoadedMeta, { once: true });
      return () => v.removeEventListener("loadedmetadata", onLoadedMeta);
    }
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    const el = sectionRef.current;
    if (!v || !el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isPlaying) {
          void tryPlay(v);
        }
      },
      { root: null, threshold: 0.35, rootMargin: "20% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [isPlaying]);

  const handleUserPlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    await tryPlay(v);
  };

  return (
    <section
      ref={sectionRef}
      className="relative text-white py-12 sm:py-24 overflow-hidden"
      onClick={needsInteraction ? handleUserPlay : undefined}
      aria-label="Garten- und Landschaftsbau Stroe Hero"
    >
      {/* Hintergrundvideo */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/Pictures/GartenbauStroe-poster.jpg"
        disablePictureInPicture
        controls={false}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 pointer-events-none select-none"
      >
        <source src="/videos/GartenbauStroe.mp4" type="video/mp4" />
        Dein Browser unterstützt keine HTML5-Videos.
      </video>

      {/* dunkler Tint */}
      <div className="absolute inset-0 bg-black/40 z-0" aria-hidden="true" />

      {/* Overlay bei Autoplay-Block */}
      {needsInteraction && !isPlaying && (
        <button
          type="button"
          onClick={handleUserPlay}
          className="absolute inset-0 z-50 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
          aria-label="Video abspielen"
        >
          <span className="flex items-center whitespace-nowrap gap-3 text-black text-sm sm:text-base font-bold bg-white rounded-full px-6 py-3 tracking-wide shadow-lg">
            <Play className="h-3 w-3 shrink-0" />
            APPLE ENERGIESPARMODUS: TIPPEN ZUM ABSPIELEN
          </span>
        </button>
      )}

      {/* Inhalt */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            GARTEN- UND LANDSCHAFTSBAU STROE
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 px-2">
            ROBUST, SCHNELL & STARK
          </p>
          <Link href="https://tidycal.com/team/stroe/galabau" target="_blank">
            <Button
              size="lg"
              className="bg-white text-[#92c43f] hover:bg-gray-100 w-full sm:w-auto text-sm sm:text-base"
            >
              JETZT KOSTENLOSES ERSTGESPRÄCH SICHERN
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
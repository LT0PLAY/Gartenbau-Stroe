"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    title: "GARTENGESTALTUNG UND -PLANUNG",
    description: "Ein gut geplanter Garten ist mehr als nur ein schöner Anblick – er ist Lebensraum, Rückzugsort und Ausdruck Ihres persönlichen Stils. Mit professioneller Gartengestaltung und individueller Gartenplanung verwandeln wir Ihre Außenfläche in ein grünes Paradies, das funktional und ästhetisch überzeugt. Ob naturnaher Garten, moderne Gestaltung oder stilvolle Wohlfühloase – wir entwickeln gemeinsam mit Ihnen ein Konzept, das perfekt zu Ihrem Grundstück, Ihrem Alltag und Ihren Wünschen passt.",
    image: "/Pictures/Hintergrund-1.webp",
    icon: "/Pictures/Hintergrund-2.webp"
  },
  {
    title: "Erdarbeiten und Bodenbearbeitung",
    description: "Erdarbeiten und Bodenbearbeitung bilden die Grundlage für jedes erfolgreiche Bau- oder Gartenprojekt. Mit moderner Technik, langjähriger Erfahrung und präziser Ausführung übernehmen wir alle anfallenden Erdarbeiten schnell, sauber und effizient. Unsere Leistungen reichen vom Abtragen von Mutterboden über das Anlegen von Baugruben, Drainagen und Tragschichten bis hin zur flächigen Bodenbearbeitung für Rasen, Beete, Wege oder Pflasterflächen.",
    image: "/Pictures/Hintergrund-4.webp",
    icon: "/Pictures/Hintergrund-3.webp"
  },
  {
    title: "Pflaster- und Wegebau",
    description: "Professioneller Pflaster- und Wegebau schafft nicht nur Ordnung und Struktur, sondern verleiht jedem Außenbereich Charakter und Wert. Ob Einfahrt, Gartenweg, Terrasse oder Platzanlage – wir gestalten Ihre Flächen funktional, langlebig und optisch ansprechend. Als erfahrene Experten im Garten- und Landschaftsbau planen und realisieren wir Pflasterarbeiten mit höchster Präzision und Liebe zum Detail.",
    image: "/Pictures/Hintergrund-6.webp",
    icon: "/Pictures/Hintergrund-5.webp"
  },
  {
    title: "Begrünung und Bepflanzung",
    description: "Begrünung und Bepflanzung bringen Leben, Farbe und Struktur in jeden Außenbereich. Mit einem durchdachten Pflanzkonzept schaffen wir grüne Räume, die nicht nur schön, sondern auch funktional und pflegeleicht sind. Von der klassischen Beetgestaltung über Hecken und Sträucher bis hin zu Bäumen, Blühflächen oder Kübelpflanzungen – wir setzen gezielt Akzente und schaffen harmonische Gesamtbilder.",
    image: "/Pictures/Hintergrund-4.webp",
    icon: "https://yumeinihon.com/cdn/shop/files/Dabi_Kuji_Figur_PNG_500x500_Yumei.png?v=1723747089"
  },
  {
    title: "Teich- und Wasseranlagen",
    description: "Teich- und Wasseranlagen bringen Ruhe, Bewegung und natürliche Eleganz in jeden Garten. Ob moderner Zierteich, naturnaher Schwimmteich, plätschernder Bachlauf oder stilvolles Wasserspiel – Wasser schafft Atmosphäre und wertet jede Außenanlage spürbar auf. Als erfahrene Fachleute gestalten wir Wasseranlagen, die perfekt zu Ihrem Grundstück, Stil und Anspruch passen.",
    image: "/Pictures/Hintergrund-5.webp",
    icon: "https://yumeinihon.com/cdn/shop/files/Dabi_Kuji_Figur_PNG_500x500_Yumei.png?v=1723747089"
  },
  {
    title: "Holz- und Zaunbau",
    description: "Holz- und Zaunbau vereinen Funktionalität mit natürlicher Ästhetik – und geben Ihrem Garten Struktur, Schutz und Charakter. Ob dekorativer Gartenzaun, massiver Sichtschutz, elegante Pergola oder individuelle Holzkonstruktionen: Wir planen und realisieren langlebige Lösungen, die sich harmonisch in Ihre Außenanlage einfügen.",
    image: "/Pictures/Hintergrund-6.webp",
    icon: "https://yumeinihon.com/cdn/shop/files/Dabi_Kuji_Figur_PNG_500x500_Yumei.png?v=1723747089"
  },
  {
    title: "Mauer- und Steinarbeiten",
    description: "Mauer- und Steinarbeiten verleihen Gärten Struktur, Stabilität und zeitlose Eleganz. Ob Natursteinmauer, Gabionen, Stützmauer oder dekorative Steinsetzungen – wir schaffen mit hochwertigen Materialien und handwerklichem Können dauerhafte Werte für Ihren Außenbereich. Als Experten im Garten- und Landschaftsbau planen und realisieren wir individuelle Mauer- und Steinkonzepte.",
    image: "/Pictures/Hintergrund-7.webp",
    icon: "https://yumeinihon.com/cdn/shop/files/Dabi_Kuji_Figur_PNG_500x500_Yumei.png?v=1723747089"
  },
  {
    title: "Gartenpflege und Instandhaltung",
    description: "Ein gepflegter Garten ist das Aushängeschild jeder Immobilie – und braucht regelmäßige Aufmerksamkeit, damit er dauerhaft gesund, ordentlich und einladend bleibt. Mit unserer professionellen Gartenpflege und Instandhaltung sorgen wir dafür, dass Ihre Grünflächen das ganze Jahr über in bestem Zustand sind.",
    image: "/Pictures/Hintergrund-8.webp",
    icon: "https://yumeinihon.com/cdn/shop/files/Dabi_Kuji_Figur_PNG_500x500_Yumei.png?v=1723747089"
  },
  {
    title: "Winterdienst",
    description: "Wenn Schnee und Eis den Alltag erschweren, sorgt ein professioneller Winterdienst für Sicherheit und reibungslose Abläufe. Wir übernehmen zuverlässig alle Aufgaben rund um Schneeräumung, Streudienst und Glättebekämpfung – für private Haushalte, Wohnanlagen, Gewerbeflächen und öffentliche Bereiche.",
    image: "/Pictures/Hintergrund-9.webp",
    icon: "https://yumeinihon.com/cdn/shop/files/Dabi_Kuji_Figur_PNG_500x500_Yumei.png?v=1723747089"
  },
  {
    title: "Hausmeister Dienstleistungen",
    description: "Unsere Hausmeister-Dienstleistungen bieten Ihnen einen zuverlässigen Rundum-Service für Ihre Immobilie. Mit professioneller Betreuung sorgen wir dafür, dass Ihre Immobilie stets in einem einwandfreien Zustand ist und ihren Wert behält. Als erfahrene Fachkräfte übernehmen wir alle anfallenden Aufgaben rund um Wartung, Pflege und Instandhaltung.",
    image: "/Pictures/Hintergrund-10.webp",
    icon: "https://yumeinihon.com/cdn/shop/files/Dabi_Kuji_Figur_PNG_500x500_Yumei.png?v=1723747089"
  },
  {
    title: "Beleuchtung und Bewässerung",
    description: "Moderne Gartenbeleuchtung und durchdachte Bewässerung machen Ihren Außenbereich nicht nur schöner, sondern auch komfortabler und effizienter. Mit maßgeschneiderten Lösungen sorgen wir dafür, dass Ihr Garten rund um die Uhr im besten Licht erscheint und Ihre Pflanzen immer optimal versorgt sind.",
    image: "/Pictures/Hintergrund-11.webp",
    icon: "https://yumeinihon.com/cdn/shop/files/Dabi_Kuji_Figur_PNG_500x500_Yumei.png?v=1723747089"
  }
];

export default function Services() {
  const [expandedDescription, setExpandedDescription] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const firstItem = document.querySelector('.carousel-item-first');
      if (firstItem) {
        firstItem.classList.add('animate-slide');
      }
    }, 1000);
  }, []);

  const toggleDescription = (index: number) => {
    setExpandedDescription(expandedDescription === index ? null : index);
  };

  return (
    <section id="services" className="bg-card min-h-screen">
      <div className="h-screen">
        <Carousel className="h-full">
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className={`h-screen carousel-item ${index === 0 ? 'carousel-item-first' : ''}`}>
                <div className="relative h-full">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 z-0 opacity-50"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col lg:flex-row items-stretch">
                    {/* Title Section */}
                    <div className="w-full lg:w-1/3 flex items-center justify-center p-4 lg:p-8">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#92c43f] text-center lg:text-left">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Icon Section */}
                    <div className="flex-1 relative flex items-end justify-center py-8 lg:py-0">
                      <img 
                        src={service.icon} 
                        alt={service.title}
                        className="w-[31.2rem] h-[31.2rem] sm:w-[41.6rem] sm:h-[41.6rem] lg:w-[62.4rem] lg:h-[62.4rem] object-contain"
                      />
                    </div>
                    
                    {/* Description Section */}
                    <div className="w-full lg:w-1/3 p-4 lg:p-8 flex flex-col items-center lg:items-start bg-black/50">
                      <div className={`lg:block ${expandedDescription === index ? 'block' : 'line-clamp-3 lg:line-clamp-none'}`}>
                        <p className="text-sm sm:text-base lg:text-lg text-white text-center lg:text-left">
                          {service.description}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleDescription(index)}
                        className="mt-2 text-[#92c43f] hover:text-[#83b136] flex items-center gap-1 lg:hidden"
                      >
                        {expandedDescription === index ? (
                          <>
                            Weniger anzeigen
                            <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Mehr anzeigen
                            <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
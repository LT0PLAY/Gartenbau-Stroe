"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const portfolioImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1558904541-efa843a96f01",
    title: "Moderner Garten",
    category: "Gartengestaltung"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1584479898061-15742e14f50d",
    title: "Steinweg im Garten",
    category: "Pflasterarbeiten"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1598902108854-10e335adac99",
    title: "Gartenteich",
    category: "Wasseranlagen"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    title: "Blumenbeet",
    category: "Bepflanzung"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1598902108854-10e335adac99",
    title: "Naturstein Mauer",
    category: "Steinarbeiten"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1595828204607-77edb2555c01",
    title: "Holzterrasse",
    category: "Holzarbeiten"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe",
    title: "Beleuchteter Garten",
    category: "Beleuchtung"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1598902108854-10e335adac99",
    title: "Automatische Bewässerung",
    category: "Bewässerung"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1605178325023-d977d8f9d314",
    title: "Japanischer Garten",
    category: "Gartengestaltung"
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1598512199776-e5681b7b9e5f",
    title: "Moderne Terrasse",
    category: "Pflasterarbeiten"
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1599685315640-be89e7410b9f",
    title: "Gartenpflege",
    category: "Pflege"
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1558904557-3f9261815e5d",
    title: "Naturnaher Garten",
    category: "Gartengestaltung"
  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1598512195945-bd8091e2e86c",
    title: "Steinmauer mit Bepflanzung",
    category: "Steinarbeiten"
  },
  {
    id: 14,
    url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
    title: "Gartenweg",
    category: "Pflasterarbeiten"
  },
  {
    id: 15,
    url: "https://images.unsplash.com/photo-1598901796257-8459b3ee2b97",
    title: "Wasserspiel",
    category: "Wasseranlagen"
  },
  {
    id: 16,
    url: "https://images.unsplash.com/photo-1584622781867-1c5fe50e7523",
    title: "Staudengarten",
    category: "Bepflanzung"
  },
  {
    id: 17,
    url: "https://images.unsplash.com/photo-1599685315398-957fd61ad570",
    title: "Holzpergola",
    category: "Holzarbeiten"
  },
  {
    id: 18,
    url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    title: "Gartenbeleuchtung",
    category: "Beleuchtung"
  },
  {
    id: 19,
    url: "https://images.unsplash.com/photo-1598902108854-10e335adac99",
    title: "Automatische Bewässerung",
    category: "Bewässerung"
  }
];

export default function Werke() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  // Close modal when clicking outside the image
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Close modal on escape key press
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  // Add and remove event listener for escape key
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-white">
          UNSERE WERKE
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioImages.map((image) => (
            <Card 
              key={image.id}
              className="group cursor-pointer overflow-hidden bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300"
              onClick={() => openModal(image.id)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <img
                    src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                    alt={image.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-semibold">{image.title}</h3>
                    <p className="text-[#92c43f] text-sm">{image.category}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={handleBackdropClick}
          >
            <div className="relative max-w-7xl mx-auto px-4">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-[#92c43f] transition-colors p-2 rounded-full bg-black/50"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={`${portfolioImages.find(img => img.id === selectedImage)?.url}?auto=format&fit=crop&w=1600&q=90`}
                alt={portfolioImages.find(img => img.id === selectedImage)?.title}
                className="max-h-[90vh] w-auto mx-auto"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
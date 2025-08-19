"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const reviews = [
  {
    id: 1,
    name: "Dr. Kay Sauckel",
    role: "Kunde",
    content: "Kompetentes, freundliches und schnelles Team. Mehrfach für uns im Bereich Gartenbau, Gartenpflege und Bau- und Pflasterarbeiten tätig gewesen, immer zu unserer vollsten Zufriedenheit! Jederzeit gerne wieder und immer eine gute Empfehlung!",
    rating: 5,
    link: "https://share.google/eq6gClC0pFajoOj9h"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Director, InnovateCorp",
    content: "Professional team that delivers on their promises every time.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Brown",
    role: "Founder, DigitalFirst",
    content: "Transformed our business processes with innovative solutions.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          WAS UNSERE KUNDEN SAGEN
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-card">
              <CardContent className="p-6">
                {review.link ? (
                  <a 
                    href={review.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity"
                  >
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-[#92c43f] fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">{review.content}</p>
                    <div>
                      <p className="font-semibold text-white">{review.name}</p>
                      <p className="text-sm text-gray-400">{review.role}</p>
                    </div>
                  </a>
                ) : (
                  <>
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-[#92c43f] fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">{review.content}</p>
                    <div>
                      <p className="font-semibold text-white">{review.name}</p>
                      <p className="text-sm text-gray-400">{review.role}</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
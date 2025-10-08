"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const reviews = [
  {
    id: 1,
    name: "Dr. Kay Sauckel",
    role: "Kunde",
    content:
      "Kompetentes, freundliches und schnelles Team. Mehrfach für uns im Bereich Gartenbau, Gartenpflege und Bau- und Pflasterarbeiten tätig gewesen, immer zu unserer vollsten Zufriedenheit! Jederzeit gerne wieder und immer eine gute Empfehlung!",
    rating: 5,
    link: "https://share.google/eq6gClC0pFajoOj9h",
  },
  {
    id: 2,
    name: "Patrick Schrall",
    role: "Kunde",
    content:
      "Herr Stroe hat nach einem Wasserschaden meinen Keller saniert. Die Arbeiten wurden zuverlässig, sauber und professionell ausgeführt. Ich bin mit dem Ergebnis sehr zufrieden und kann ihn uneingeschränkt weiterempfehlen.",
    rating: 5,
    link: "https://maps.app.goo.gl/yroMz892KSDCtq4A7",
  },
  {
    id: 3,
    name: "Kar Dit",
    role: "Kunde",
    content:
      "Chris Stroe und sein Team haben hervorragende Arbeit geleistet. Die Pflasterung meiner Garageneinfahrt wurde präzise und ästhetisch ansprechend umgesetzt. Die Kommunikation war klar und professionell, und das Team war stets pünktlich und zuverlässig. Ich bin äußerst zufrieden und kann Stroe Garten und Landschaftsbau uneingeschränkt weiterempfehlen.",
    rating: 5,
    link: "https://maps.app.goo.gl/Vq7iB4yHgUFS31Pg8",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          WAS UNSERE KUNDEN SAGEN
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => {
            const Inner = (
              <>
                <div className="flex mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#92c43f] fill-current" />
                  ))}
                </div>

                <p className="text-gray-200/90 mb-4 leading-relaxed">
                  {review.content}
                </p>

                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-gray-400">{review.role}</p>
                </div>
              </>
            );

            return (
              <Card
                key={review.id}
                className="
                  rounded-2xl
                  bg-neutral-800
                  border border-neutral-700
                  shadow-lg shadow-black/40
                  ring-1 ring-white/5
                  transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl
                "
              >
                <CardContent className="p-6">
                  {review.link ? (
                    <a
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#92c43f]/50 rounded-xl"
                    >
                      {Inner}
                    </a>
                  ) : (
                    Inner
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
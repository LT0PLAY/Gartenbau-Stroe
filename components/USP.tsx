"use client";

import { CheckCircle, Shield, Clock, Trophy } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const benefits = [
  {
    title: "Expertise",
    description: "Erfahrung, die Wurzeln schlägt.",
    icon: Trophy,
  },
  {
    title: "Qualität",
    description: "Jeder Handgriff ein Qualitätsversprechen.",
    icon: Shield,
  },
  {
    title: "Effizienz",
    description: "Effizienz, die Ergebnisse liefert.",
    icon: Clock,
  },
  {
    title: "Garantie",
    description: "Zufriedenheitsgarantie für alle unsere Dienstleistungen",
    icon: CheckCircle,
  },
];

export default function USP() {
  return (
    <section id="usp" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          WARUM SIE UNS VERTRAUEN KÖNNEN
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg bg-card">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <benefit.icon className="h-12 w-12 text-[#92c43f]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
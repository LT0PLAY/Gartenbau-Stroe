"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import MovingBanner from "./MovingBanner";

type SendStatus = "idle" | "sending" | "ok" | "error";

export default function Contact() {
  const [status, setStatus] = useState<SendStatus>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    // native required-Validation
    if (!form.reportValidity()) return;

    setStatus("sending");
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // robustes Parsen, falls kein JSON zurückkommt
      let data: any = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      const ok = res.ok && data?.ok === true;
      setStatus(ok ? "ok" : "error");
      if (ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section id="contact" className="py-8 sm:py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-white uppercase">
              Kontaktieren Sie uns
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8">
              {/* Formular */}
              <div className="md:col-span-6">
                <Card className="bg-background/50 backdrop-blur-sm border-gray-800">
                  <CardContent className="p-4 sm:p-8">
                    <form className="space-y-4 sm:space-y-6" onSubmit={onSubmit} noValidate>
                      {/* Honeypot: leer lassen, Bots füllen ihn */}
                      <input
                        type="hidden"
                        name="honeypot"
                        value=""
                        tabIndex={-1}
                        autoComplete="off"
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <Input
                          name="name"
                          placeholder="Ihr Name"
                          required
                          className="bg-background/50 border-gray-700 focus:border-[#92c43f] transition-colors"
                        />
                        <Input
                          name="email"
                          type="email"
                          placeholder="E-Mail Adresse"
                          required
                          className="bg-background/50 border-gray-700 focus:border-[#92c43f] transition-colors"
                        />
                      </div>
                      <Textarea
                        name="message"
                        placeholder="Ihre Nachricht"
                        required
                        className="h-32 sm:h-40 bg-background/50 border-gray-700 focus:border-[#92c43f] transition-colors"
                      />
                      <Button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full bg-[#92c43f] hover:bg-[#83b136] text-white"
                      >
                        {status === "sending" ? "Senden ..." : "Nachricht senden"}
                      </Button>
                      {status === "ok" && (
                        <p className="text-sm text-green-400">Nachricht versendet.</p>
                      )}
                      {status === "error" && (
                        <p className="text-sm text-red-400">Fehler beim Senden.</p>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Kontaktinformationen */}
              <div className="md:col-span-6">
                <Card className="bg-zinc-900/50 backdrop-blur-sm border-gray-800 h-full">
                  <CardContent className="p-4 sm:p-8">
                    <div className="space-y-6 sm:space-y-8">
                      {/* E-Mail */}
                      <div className="flex items-start space-x-4 sm:space-x-6">
                        <div className="bg-[#92c43f]/10 p-2 sm:p-3 rounded-full flex-shrink-0">
                          <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#92c43f]" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-semibold text-white">E-Mail</h3>
                          <p className="text-sm sm:text-base text-gray-400 break-all">
                            kundenservice@stroe-galabau.de
                          </p>
                        </div>
                      </div>

                      {/* Telefon */}
                      <div className="flex items-start space-x-4 sm:space-x-6">
                        <div className="bg-[#92c43f]/10 p-2 sm:p-3 rounded-full flex-shrink-0">
                          <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-[#92c43f]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-white">Telefon</h3>
                          <p className="text-sm sm:text-base text-gray-400">
                            +49 1522 3230374
                          </p>
                        </div>
                      </div>

                      {/* Adresse */}
                      <div className="flex items-start space-x-4 sm:space-x-6">
                        <div className="bg-[#92c43f]/10 p-2 sm:p-3 rounded-full flex-shrink-0">
                          <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#92c43f]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-white">Adresse</h3>
                          <div className="space-y-1 text-sm sm:text-base text-gray-400">
                            <p>Garten- und Landschaftsbau Stroe</p>
                            <p>Beuerbergerstraße 38</p>
                            <p>82549 Königsdorf</p>
                            <p>Bayern, Deutschland</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MovingBanner />
    </>
  );
}
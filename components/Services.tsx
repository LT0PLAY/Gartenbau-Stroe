"use client";

import { useEffect, useRef } from "react";
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
    sections: [
      {
        heading: "Gartengestaltung, die zu Ihnen passt",
        content:
          "Wir gestalten Gärten, die sich Ihrem Stil und Ihrem Alltag anpassen – mit kreativen Ideen, fachlicher Erfahrung und einem sicheren Gespür für schöne Details. Ob naturnah, modern oder elegant – wir planen Ihren Garten ganz individuell."
      },
      {
        heading: "Ihre Wünsche im Mittelpunkt",
        content:
          "Ob pflegeleichte Lösung, Anlage mit Wasser und Stein, Terrasse mit gemütlicher Sitzecke oder Rückzugsort mit blühenden Pflanzen. Wir setzen Ihre Ideen professionell um und achten dabei auf Qualität, Funktionalität und Ästhetik."
      },
      {
        heading: "Unser Weg zu Ihrem Traumgarten",
        content:
          "Die Gartenplanung beginnt mit einer persönlichen Beratung. Wir hören zu, nehmen Maß und entwickeln gemeinsam mit Ihnen ein passendes Konzept. Von der ersten Skizze bis zur fertigen Umsetzung begleiten wir Ihr Projekt mit Liebe zum Detail."
      },
      {
        heading: "Ihr Partner in München",
        content:
          "Garten- und Landschaftsbau Stroe steht für Zuverlässigkeit, Kreativität und Leidenschaft für schöne Außenbereiche. Ob in München, im Süden der Stadt oder im grünen Umland – wir sind Ihr Ansprechpartner für Gartengestaltung mit Charakter und Qualität. Lassen Sie uns gemeinsam Ihren Traumgarten verwirklichen."
      }
    ],
    image: "/Pictures/GARTENGESTALTUNG_UND-PLANUNG.webp",
    icon: "/Pictures/Gartengestaltung.webp"
  },
  {
    title: "ERDARBEITEN UND BODENBEARBEITUNG",
    sections: [
      {
        heading: "Das Fundament für jedes Gartenprojekt",
        content:
          "Ein stabiles Fundament ist der erste Schritt für jedes erfolgreiche Gartenprojekt. Erdarbeiten und Bodenbearbeitung schaffen die Basis für Wege, Terrassen, Beete oder Pflasterflächen. Wir übernehmen diese Arbeiten mit moderner Technik, viel Erfahrung und einem Auge für saubere Ausführung."
      },
      {
        heading: "Präzise Vorbereitung für gesunde Flächen",
        content:
          "Ob es um den Aushub einer Baugrube geht, das Abtragen von Mutterboden oder das Anlegen von Tragschichten – wir sorgen für den passenden Untergrund. Auch Drainagen, Planierungen und Bodenmodellierungen setzen wir fachgerecht um. Nur mit der richtigen Vorbereitung wachsen Pflanzen dauerhaft gesund und Flächen bleiben stabil."
      },
      {
        heading: "Individuell auf Ihren Garten abgestimmt",
        content:
          "Wir lockern, nivellieren und verdichten Böden genau dort, wo es nötig ist. Dabei achten wir auf das natürliche Gefälle, die Bodenstruktur und die spätere Nutzung der Fläche. Unsere Erdarbeiten eignen sich für private Gärten ebenso wie für größere Außenanlagen."
      },
      {
        heading: "Ihr Partner für gründliche Vorbereitung",
        content:
          "Ob im Raum München, im südlichen Landkreis oder im Umland – wir sind Ihr verlässlicher Partner für vorbereitende Arbeiten im Gartenbau. Garten- und Landschaftsbau Stroe steht für gründliche Vorbereitung, termintreue Umsetzung und langlebige Qualität. Vereinbaren Sie jetzt Ihren Termin und legen Sie mit uns die Grundlage für ein gelungenes Gartenprojekt."
      }
    ],
    image: "/Pictures/ERDARBEITEN_UND_BODENBEARBEITUNG.webp",
    icon: "/Pictures/Erdarbeiten.webp"
  },
  {
    title: "PFLASTER- UND WEGEBAU",
    sections: [
      {
        heading: "Ordnung, Struktur und Stil",
        content:
          "Professionell ausgeführter Pflaster- und Wegebau sorgt nicht nur für Ordnung im Außenbereich, sondern schafft klare Strukturen, Wertigkeit und Stil. Ob Einfahrt, Gartenweg, Terrasse oder Vorplatz – wir gestalten Ihre Flächen langlebig, funktional und optisch überzeugend."
      },
      {
        heading: "Individuelle Muster und Akzente",
        content:
          "Unsere besondere Stärke liegt im präzisen Abschätzen und Verlegen individueller Muster. Segmentbögen, Kreise oder weich verlaufende Linien setzen architektonische Akzente und verleihen jeder Fläche ihren ganz eigenen Charakter."
      },
      {
        heading: "Detaillierte Planung für perfekte Ergebnisse",
        content:
          "Wir planen jedes Detail im Voraus, berücksichtigen Höhenführung, Wasserabfluss und Materialwahl und sorgen dafür, dass das fertige Ergebnis perfekt zu Ihrem Zuhause passt. Als erfahrene Fachfirma für Garten- und Landschaftsbau in der Region München verbinden wir technisches Können mit gestalterischem Feingefühl."
      },
      {
        heading: "Ihr Partner für Qualität im Pflasterbau",
        content:
          "Ob modernes Betonpflaster, rustikaler Klinker oder edler Naturstein – wir beraten Sie individuell und setzen Ihre Wünsche mit höchster Sorgfalt und viel Liebe zum Detail um. Unsere Pflasterflächen sind stabil, pflegeleicht und ein optischer Gewinn für jedes Grundstück. Vertrauen Sie auf Garten- und Landschaftsbau Stroe – Ihren Partner für präzise Pflasterarbeiten mit Stil, Struktur und Qualität."
      }
    ],
    image: "/Pictures/PFLASTER-UND_WEGEBAU.webp",
    icon: "/Pictures/Pflastersteine1.webp"
  },
  {
    title: "BEGRÜNUNG UND BEPFLANZUNG",
    sections: [
      {
        heading: "Gärten voller Leben und Farbe",
        content:
          "Begrünung und Bepflanzung verwandeln jede Außenfläche in einen lebendigen Ort voller Farbe, Charakter und Naturgefühl. Mit einem durchdachten Pflanzkonzept schaffen wir harmonische Gartenräume, die nicht nur ästhetisch wirken, sondern auch funktional, pflegeleicht und standortgerecht geplant sind."
      },
      {
        heading: "Individuelle Pflanzkonzepte",
        content:
          "Ob blühendes Staudenbeet, strukturgebende Hecken, mediterrane Kübelpflanzen oder gezielt gesetzte Solitärbäume – wir setzen Ihre Wünsche in lebendige Gestaltung um. Dabei achten wir auf den richtigen Rhythmus von Farben, Höhen und Blühzeiten und wählen Pflanzen, die zum Standort, Klima und Pflegeaufwand passen."
      },
      {
        heading: "Eine grüne Oase mit Bestand",
        content:
          "Unser Ziel ist eine Gartenlandschaft, die langfristig Freude macht und sich natürlich in das Gesamtbild Ihres Gartens einfügt. Garten- und Landschaftsbau Stroe steht für kreative Pflanzplanung mit Liebe zum Detail, fachgerechter Ausführung und fundiertem Wissen über Boden, Licht und Wuchsverhalten."
      },
      {
        heading: "Ihr Partner in München und Umgebung",
        content:
          "Egal ob Neuanlage oder Umgestaltung – wir beraten Sie individuell und setzen gezielt Akzente, die Ihre Außenfläche lebendig machen. In der Region rund um München sind wir Ihr zuverlässiger Ansprechpartner für Begrünung mit Konzept. Lassen Sie sich inspirieren und entdecken Sie, wie wirkungsvoll Pflanzen Atmosphäre schaffen können."
      }
    ],
    image: "/Pictures/BEGRÜNUNG_UND_BEPFLANZUNG.webp",
    icon: "/Pictures/Begruenung.webp"
  },
  {
    title: "TEICH- UND WASSERANLAGEN",
    sections: [
      {
        heading: "Wasser als lebendiges Gestaltungselement",
        content:
          "Teich- und Wasseranlagen bringen Leben, Ruhe und natürliche Dynamik in jeden Garten. Ob Zierteich, Schwimmteich, Bachlauf oder Wasserspiel – Wasser schafft Atmosphäre, zieht Blicke auf sich und verleiht Ihrem Außenbereich ein besonderes Flair."
      },
      {
        heading: "Individuelle Planung und Umsetzung",
        content:
          "Wir gestalten Wasseranlagen, die optimal zu Ihrem Grundstück, Ihren ästhetischen Vorstellungen und Ihrem Pflegeaufwand passen. Dabei berücksichtigen wir nicht nur die Optik, sondern auch technische Details wie Wasserführung, Abdichtung, Filterung und Sicherheit."
      },
      {
        heading: "Harmonie mit der Natur",
        content:
          "Ein plätschernder Quellstein im Vorgarten, ein klarer Teich mit Seerosen oder ein Schwimmteich mit Naturcharakter – jedes Projekt wird von uns mit Kreativität, Erfahrung und Liebe zum Detail umgesetzt. Wir achten auf eine harmonische Einbindung in den Garten, den richtigen Standort und die passende Bepflanzung."
      },
      {
        heading: "Ihr Partner für Wasseranlagen in München",
        content:
          "Wasserflächen lassen sich wunderbar mit Stein, Holz oder Licht kombinieren und verwandeln jeden Garten in einen Ort der Entspannung. Garten- und Landschaftsbau Stroe plant und realisiert Ihre Wasseranlage von der Idee bis zur fertigen Umsetzung zuverlässig, kompetent und mit hohem gestalterischen Anspruch. In der Region rund um München sind wir Ihr Ansprechpartner für Teich- und Wasseranlagen mit Qualität und Charakter."
      }
    ],
    image: "/Pictures/TEICH-und_WASSERANLAGEN.webp",
    icon: "/Pictures/Wasseranlagen.webp"
  },
  {
    title: "HOLZ- UND ZAUNBAU",
    sections: [
      {
        heading: "Natürlichkeit trifft auf Funktionalität",
        content:
          "Holz- und Zaunbau verbinden praktischen Nutzen mit natürlicher Schönheit und verleihen Ihrem Garten Struktur, Privatsphäre und einen individuellen Charakter. Ob als Sichtschutz, Grundstücksbegrenzung oder Gestaltungselement – hochwertige Holzkonstruktionen schaffen klare Linien und eine einladende Atmosphäre."
      },
      {
        heading: "Individuelle Lösungen für jeden Garten",
        content:
          "Wir planen und realisieren Zäune und Holzbauten, die sich harmonisch in Ihre Außenanlage einfügen und sowohl optisch als auch funktional überzeugen. Von klassischen Gartenzäunen über moderne Sichtschutzwände bis hin zu maßgefertigten Pergolen, Carports oder Holzdecks – wir gestalten nach Ihren Wünschen und Anforderungen."
      },
      {
        heading: "Holz als lebendiger Werkstoff",
        content:
          "Holz strahlt Wärme aus und steht im Einklang mit der Natur. Mit der richtigen Konstruktion und Pflege wird es zu einem dauerhaften Gestaltungselement in Ihrem Garten. Ob gerade Linien, verspielte Elemente oder kreative Kombinationen mit Stein, Metall oder Pflanzen – wir schaffen Lösungen, die nicht nur schön aussehen, sondern auch lange halten."
      },
      {
        heading: "Ihr Partner für stilvolle Gartengestaltung",
        content:
          "In der gesamten Region rund um München ist Garten- und Landschaftsbau Stroe Ihr verlässlicher Partner für stilvollen Holz- und Zaunbau. Vertrauen Sie auf unsere Erfahrung, unser handwerkliches Können und unser Gespür für harmonische Gartengestaltung. Lassen Sie uns gemeinsam Ihre Außenanlage funktional und zugleich wohnlich gestalten – mit Holz in seiner schönsten Form."
      }
    ],
    image: "/Pictures/HOLZ-UND_ZAUNBAU.webp",
    icon: "/Pictures/Zaunbau.webp"
  },
  {
    title: "MAUER- UND STEINARBEITEN",
    sections: [
      {
        heading: "Charakter und Stabilität für Ihren Garten",
        content:
          "Mauer- und Steinarbeiten geben jedem Garten Charakter, Form und ein solides Fundament. Sie schaffen Höhenunterschiede, trennen Flächen, stützen Hänge oder setzen markante Akzente. Ob klassisch oder modern – mit Naturstein, Betonstein oder Gabionen lassen sich dauerhafte und stilvolle Lösungen gestalten."
      },
      {
        heading: "Individuelle Mauern und Steinelemente",
        content:
          "Wir planen und realisieren Mauern und Steinelemente, die sich harmonisch in Ihr Gelände einfügen und sowohl funktional als auch ästhetisch überzeugen. Ob Trockenmauer zur Beetabgrenzung, Sichtschutzmauer zur Nachbarseite oder robuste Stützmauer im Hangbereich – wir beraten Sie kompetent und finden die passende Lösung."
      },
      {
        heading: "Dekorative Akzente mit Stein",
        content:
          "Auch dekorative Elemente wie freistehende Findlinge, kleine Steinsetzungen oder Trittplattenwege gestalten wir mit Fingerspitzengefühl und einem Blick für das Besondere. Wir arbeiten mit hochwertigen Materialien aus der Region und setzen auf eine präzise handwerkliche Ausführung."
      },
      {
        heading: "Ihr Partner für Qualität und Substanz",
        content:
          "Jeder Stein wird sorgfältig platziert, jede Mauerlinie genau ausgerichtet – so entstehen langlebige Bauwerke, die Wind und Wetter standhalten und über viele Jahre Freude bereiten. In der Region rund um München steht Garten- und Landschaftsbau Stroe für hochwertige Mauer- und Steinarbeiten mit Stil und Substanz. Lassen Sie uns gemeinsam die Basis für Ihre neue Gartenstruktur legen – Stein für Stein, mit Herz und Hand."
      }
    ],
    image: "/Pictures/Mauer_und_Steinarbeiten.webp",
    icon: "/Pictures/Mauer.webp"
  },
  {
    title: "GARTENPFLEGE UND INSTANTHALTUNG",
    sections: [
      {
        heading: "Ein gepflegter Garten das ganze Jahr",
        content:
          "Ein gepflegter Garten ist nicht nur schön anzusehen, sondern auch ein Zeichen für Wertschätzung und Lebensqualität. Damit Ihr Garten das ganze Jahr über gesund, ordentlich und einladend bleibt, braucht es regelmäßige Pflege, Fachwissen und einen zuverlässigen Partner."
      },
      {
        heading: "Umfassende Pflegeleistungen",
        content:
          "Wir übernehmen für Sie die komplette Gartenpflege und Instandhaltung – mit professionellem Anspruch und viel Liebe zum Detail. Ob Rasen mähen, Hecken schneiden, Beete pflegen oder Unkraut entfernen: wir kümmern uns darum, dass jede Fläche in Bestform bleibt. Auch die Kontrolle und Instandsetzung von Wegen, Mauern, Zäunen oder Teichanlagen gehört zu unserem Service."
      },
      {
        heading: "Individuell und vorausschauend",
        content:
          "Wir erkennen frühzeitig, wo Pflegebedarf besteht, und handeln vorausschauend, bevor größere Schäden entstehen. Unsere Leistungen passen wir individuell an Ihre Wünsche und die Bedürfnisse Ihres Gartens an – ob regelmäßige Pflege im Rahmen eines Jahresvertrags oder punktuelle Einsätze zu bestimmten Jahreszeiten."
      },
      {
        heading: "Ihr Partner für nachhaltige Gartenpflege",
        content:
          "Mit modernem Gerät, geschultem Blick und ökologischer Verantwortung sorgen wir für gesunde Pflanzen, gepflegte Rasenflächen und ein harmonisches Gesamtbild. In der Region rund um München ist Garten- und Landschaftsbau Stroe Ihr zuverlässiger Partner für nachhaltige Gartenpflege. Vertrauen Sie auf Erfahrung, Gründlichkeit und das Gespür für den richtigen Schnitt zur richtigen Zeit."
      }
    ],
    image: "/Pictures/GARTENPFLEGE_UND_INSTANTHALTUNG.webp",
    icon: "/Pictures/Gartenpflege.webp"
  },
  {
    title: "WINTERDIENST",
    sections: [
      {
        heading: "Sicher durch den Winter",
        content:
          "Sobald Schnee fällt und Glätte droht, zählt jede Minute. Ein zuverlässiger Winterdienst ist entscheidend, um Wege, Zufahrten und Flächen sicher begeh- und befahrbar zu halten. Wir sind pünktlich, gründlich und effizient für Sie im Einsatz."
      },
      {
        heading: "Professioneller Räum- und Streudienst",
        content:
          "Ob private Einfahrt, Firmenparkplatz, Wohnanlage oder öffentlicher Gehweg – wir übernehmen Schneeräumung, Streudienst und Glättebekämpfung nach den aktuellen gesetzlichen Vorgaben. Mit modernem Fuhrpark und erfahrenem Team sind wir bestens auf jede Wetterlage vorbereitet."
      },
      {
        heading: "Rundum-Sorglos-Paket",
        content:
          "Unser besonderer Service: das Winterdienst-Abomodell. Damit sind Sie komplett abgesichert, ohne jeden Tag neu planen zu müssen. Wir kümmern uns automatisch um alle notwendigen Einsätze – auch früh morgens oder an Wochenenden."
      },
      {
        heading: "Verlässlicher Partner im Winter",
        content:
          "Unser Team überwacht kontinuierlich Wetterdaten und reagiert sofort bei Bedarf. Wir garantieren maximale Sicherheit für Bewohner, Kunden, Mitarbeiter und Passanten. Garten- und Landschaftsbau Stroe steht für Verantwortung, Sorgfalt und professionelle Abläufe – damit Sie den Winter entspannt genießen können."
      }
    ],
    image: "/Pictures/Winterdienst_Radlader.webp",
    icon: "/Pictures/Winterdienst.webp"
  },
  {
    title: "HAUSMEISTER DIENSTLEISTUNGEN",
    sections: [
      {
        heading: "Mehr als nur Kontrollgänge",
        content:
          "Hausmeisterdienstleistungen sind der Schlüssel zu Werterhalt, Sicherheit und einem gepflegten Erscheinungsbild Ihrer Immobilie. Garten- und Landschaftsbau Stroe bietet Ihnen im gesamten Raum südlich von München einen zuverlässigen Hausmeisterservice mit Verantwortung und Weitblick."
      },
      {
        heading: "Umfassende Betreuung Ihrer Immobilie",
        content:
          "Ob Wohnanlage, Gewerbeimmobilie oder privates Objekt – wir kümmern uns um alle laufenden Aufgaben rund um Pflege, Wartung und Instandhaltung. Unser Team sorgt für saubere Außenflächen, überprüft technische Anlagen, beseitigt kleinere Schäden und achtet auf Ordnung und Sicherheit."
      },
      {
        heading: "Rundum-Sorglos-Paket",
        content:
          "Mit unserem praktischen Abomodell übernehmen wir die regelmäßige Betreuung Ihrer Immobilie komplett für Sie. Keine Koordination mehr mit mehreren Dienstleistern und keine unerwarteten Ausfälle – Sie profitieren von einem zuverlässigen Service, der proaktiv denkt, Wartungsbedarf frühzeitig erkennt und schnell handelt."
      },
      {
        heading: "Ihr verlässlicher Partner",
        content:
          "Unsere Leistungen umfassen unter anderem die Kontrolle von Beleuchtung und Haustechnik, Mülltonnenservice, Reinigungsarbeiten im Außenbereich, Kleinreparaturen, saisonale Pflege sowie das Monitoring von Sicherheitsaspekten. Jeder Einsatz wird dokumentiert, unsere Ansprechpartner sind jederzeit erreichbar und passen Einsätze flexibel an. Mit Garten- und Landschaftsbau Stroe haben Sie einen Hausmeisterdienst an Ihrer Seite, der Ihre Immobilie rund um die Uhr im Blick behält – kompetent, diskret und engagiert."
      }
    ],
    image: "/Pictures/Hausmeister.webp",
    icon: "/Pictures/Hausmeisterdienst.webp"
  },
  {
    title: "BELEUCHTUNG UND BEWÄSSERUNG",
    sections: [
      {
        heading: "Komfort trifft auf Effizienz",
        content:
          "Beleuchtung und Bewässerung spielen eine entscheidende Rolle in der Gestaltung moderner Außenanlagen. Sie verbinden Komfort mit Effizienz und setzen dabei gezielt ästhetische wie funktionale Akzente. Wir entwickeln individuelle Lösungen, die genau auf Ihre Bedürfnisse und Ihr Grundstück abgestimmt sind."
      },
      {
        heading: "Stimmungsvolle Gartenbeleuchtung",
        content:
          "Unsere Gartenbeleuchtung bringt nicht nur Sicherheit und Orientierung, sondern auch Atmosphäre in Ihren Außenbereich. Ob dezente Wegbeleuchtung, akzentuierte Lichtinszenierung von Pflanzen und Mauern oder die effektvolle Ausleuchtung von Sitzplätzen und Fassaden – wir setzen gezielt Lichtpunkte, die Ihren Garten in Szene setzen."
      },
      {
        heading: "Effiziente Bewässerungssysteme",
        content:
          "Unsere moderne Bewässerungstechnik sorgt für eine gleichmäßige und ressourcenschonende Versorgung Ihrer Grünflächen. Automatische Systeme mit Sensoren, Zeitschaltsteuerung oder App-Steuerung machen die Pflege einfacher und nachhaltiger. Wir achten auf versteckte Leitungsführung, optimale Wasserverteilung und passende Komponenten für jede Pflanzengruppe."
      },
      {
        heading: "Ihr Mehrwert durch moderne Technik",
        content:
          "Ob unterirdisches Tropfsystem, Versenkregner oder Kombinationen – wir planen und installieren alles fachgerecht und wartungsarm. Unser Ziel ist es, Technik so einzusetzen, dass sie Ihr Leben erleichtert und Ihre Außenanlage rund um die Uhr gepflegt und einladend bleibt. Vertrauen Sie auf unsere Kompetenz, Qualität und Liebe zum Detail."
      }
    ],
    image: "/Pictures/BELEUCHTUNG_UND_BEWAESSERUNG.webp",
    icon: "/Pictures/Beleuchtung.webp"
  },
  {
  title: "ABRISSARBEITEN",
  sections: [
    {
      heading: "Schnell, sicher und zuverlässig",
      content:
        "Abrissarbeiten erfordern Fachwissen, Erfahrung und die richtige Technik. Wir übernehmen den Abbruch von Gebäuden, Mauern und Außenanlagen professionell, sicher und effizient – stets mit Blick auf Ihre individuellen Anforderungen."
    },
    {
      heading: "Umweltgerechte Entsorgung",
      content:
        "Bei allen Abrissarbeiten achten wir auf eine fachgerechte Sortierung und Entsorgung der Materialien. So stellen wir sicher, dass wiederverwertbare Stoffe in den Kreislauf zurückgeführt und Schadstoffe fachgerecht entsorgt werden."
    },
    {
      heading: "Moderner Maschinenpark",
      content:
        "Mit leistungsstarken Geräten und modernen Maschinen sorgen wir für einen reibungslosen Ablauf – vom Rückbau kleinerer Objekte bis hin zu komplexen Abrissprojekten. Effizienz und Sicherheit stehen dabei an erster Stelle."
    },
    {
      heading: "Alles aus einer Hand",
      content:
        "Von der Planung über den Abbruch bis zur Entsorgung bieten wir Ihnen ein komplettes Leistungspaket. Vertrauen Sie auf unsere Erfahrung und Kompetenz, wenn es um fachgerechte Abrissarbeiten geht."
    }
  ],
  image: "/Pictures/Abrissarbeiten.webp",
  icon: "/Pictures/Abriss.webp"
}
];

export default function Services() {
  const descRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const firstItem = document.querySelector(".carousel-item-first");
      if (firstItem) {
        firstItem.classList.add("animate-slide");
      }
    }, 1000);
  }, []);

  return (
    <section id="services" className="bg-card min-h-screen">
      <div className="min-h-screen">
        <Carousel className="h-full">
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className={`min-h-screen carousel-item ${
                  index === 0 ? "carousel-item-first" : ""
                }`}
              >
                <div className="relative h-full">
                  {/* Hintergrundbild */}
                  <div
                    className="absolute inset-0 z-0 opacity-50"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Inhalt */}
                  <div className="relative z-10 h-full flex flex-col lg:flex-row items-stretch">
                    {/* Titel */}
                    <div className="w-full lg:w-1/3 flex items-center justify-center p-4 lg:p-8">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#92c43f] text-center lg:text-left">
                        {service.title}
                      </h3>
                    </div>

                    {/* Icon */}
                    <div className="flex-1 relative flex items-end justify-center py-8 lg:py-0">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-[31.2rem] h-[31.2rem] sm:w-[41.6rem] sm:h-[41.6rem] lg:w-[62.4rem] lg:h-[62.4rem] object-contain"
                      />
                    </div>

                    {/* Beschreibung */}
                    <div
                      ref={(el) => {
                        descRefs.current[index] = el;
                      }}
                      className="relative w-full lg:w-1/3 p-4 lg:p-8 flex flex-col items-center lg:items-start bg-black/50 overflow-y-auto"
                    >
                      {Array.isArray((service as any).sections) ? (
                        <div className="space-y-4 pb-24">
                          {(service as any).sections.map(
                            (sec: any, i: number) => (
                              <div key={i}>
                                <h4 className="text-lg font-semibold text-[#92c43f] mb-1 text-center lg:text-left">
                                  {sec.heading}
                                </h4>
                                <p className="text-sm sm:text-base lg:text-lg text-white text-center lg:text-left">
                                  {sec.content}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      ) : (
                        <p className="text-sm sm:text-base lg:text-lg text-white text-center lg:text-left pb-24">
                          {(service as any).description}
                        </p>
                      )}

                      {/* Mobiler Button – fix mittig */}
                        <div className="absolute bottom-15 inset-x-29 flex justify-center lg:hidden">
                        <CarouselNext className="w-5/6 max-w-xs inline-flex items-center justify-center 
                        bg-[#92c43f] text-black font-bold py-2 rounded-md text-sm 
                        shadow-md hover:bg-[#83b136] transition">
                         WEITERE SERVICES →
                        </CarouselNext>
                      </div>
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
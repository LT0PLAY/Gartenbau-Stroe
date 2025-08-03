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
    description: "Ein schöner Garten ist mehr als nur eine grüne Fläche. Er ist Lebensqualität, Entspannung und ein Stück Zuhause. Wir gestalten Gärten, die zu Ihrem Stil und Ihrem Alltag passen. Mit kreativen Ideen, fachlicher Erfahrung und einem sicheren Gespür für schöne Details. Ob naturnah, modern oder elegant. Wir planen Ihren Garten ganz individuell. Möchten Sie eine pflegeleichte Lösung oder eine Anlage mit Wasser und Stein? Vielleicht wünschen Sie sich eine Terrasse mit gemütlicher Sitzecke oder einen Rückzugsort mit blühenden Pflanzen? Wir setzen Ihre Ideen professionell um und achten dabei auf Qualität, Funktion und Ästhetik. Unsere Gartenplanung beginnt mit einer persönlichen Beratung. Wir hören genau zu, nehmen Maß und entwickeln gemeinsam mit Ihnen ein passendes Konzept. Von der ersten Skizze bis zur fertigen Umsetzung begleiten wir Ihr Projekt mit Liebe zum Detail. Garten- und Landschaftsbau Stroe steht für Zuverlässigkeit, Kreativität und Leidenschaft für schöne Außenbereiche. Ob in München, im Süden der Stadt oder im grünen Umland – wir sind Ihr Ansprechpartner für Gartengestaltung mit Charakter und Qualität. Lassen Sie uns gemeinsam Ihren Traumgarten verwirklichen. Vereinbaren Sie jetzt einen Termin, wir freuen uns auf Ihre Anfrage.",
    image: "/Pictures/Hintergrund-1.webp",
    icon: "/Pictures/Gartengestaltung.webp"
  },
  {
    title: "ERDARBEITEN UND BODENBEARBEITUNG",
    description: "Ein stabiles Fundament ist der erste Schritt für jedes erfolgreiche Gartenprojekt. Erdarbeiten und Bodenbearbeitung schaffen die Basis für Wege, Terrassen, Beete oder Pflasterflächen. Wir übernehmen diese Arbeiten mit moderner Technik, viel Erfahrung und einem Auge für saubere Ausführung. Ob es um den Aushub einer Baugrube geht, das Abtragen von Mutterboden oder das Anlegen von Tragschichten, wir sorgen für den passenden Untergrund. Auch Drainagen, Planierungen und Bodenmodellierungen setzen wir fachgerecht um. Sie möchten Ihren Garten neu anlegen oder umgestalten? Dann ist eine präzise Bodenbearbeitung unerlässlich. Nur mit der richtigen Vorbereitung wachsen Pflanzen dauerhaft gesund und Flächen bleiben stabil. Wir lockern, nivellieren und verdichten Böden genau dort, wo es nötig ist. Dabei achten wir auf das natürliche Gefälle, die Bodenstruktur und die spätere Nutzung der Fläche. Unsere Erdarbeiten eignen sich für private Gärten ebenso wie für größere Außenanlagen. Ob im Raum München, im südlichen Landkreis oder im Umland, wir sind Ihr verlässlicher Partner für vorbereitende Arbeiten im Gartenbau. Garten- und Landschaftsbau Stroe steht für gründliche Vorbereitung, termintreue Umsetzung und langlebige Qualität. Vereinbaren Sie jetzt Ihren Termin und legen Sie mit uns die Grundlage für ein gelungenes Gartenprojekt.",
    image: "/Pictures/Hintergrund-4.webp",
    icon: "/Pictures/Erdarbeiten.webp"
  },
  {
    title: "PFLASTER- UND WEGEBAU",
    description: "Professionell ausgeführter Pflaster und Wegebau sorgt nicht nur für Ordnung im Außenbereich sondern schafft klare Strukturen Wertigkeit und Stil. Ob Einfahrt Gartenweg Terrasse oder Vorplatz. Wir gestalten Ihre Flächen langlebig funktional und optisch überzeugend. Unsere besondere Stärke liegt im präzisen Abschätzen und Verlegen individueller Muster. Segmentbögen Kreise oder weich verlaufende Linien setzen architektonische Akzente und verleihen jeder Fläche ihren ganz eigenen Charakter. Wir planen jedes Detail im Voraus berücksichtigen Höhenführung Wasserabfluss und Materialwahl und sorgen dafür dass das fertige Ergebnis perfekt zu Ihrem Zuhause passt. Als erfahrene Fachfirma für Garten- und Landschaftsbau in der Region München verbinden wir technisches Können mit gestalterischem Feingefühl. Ob modernes Betonpflaster rustikaler Klinker oder edler Naturstein - wir beraten Sie individuell und setzen Ihre Wünsche mit höchster Sorgfalt und viel Liebe zum Detail um. Unsere Pflasterflächen sind stabil pflegeleicht und ein optischer Gewinn für jedes Grundstück. Vertrauen Sie auf Garten und Landschaftsbau Stroe Ihren Partner für präzise Pflasterarbeiten mit Stil Struktur und Qualität. Nehmen Sie jetzt Kontakt auf und lassen Sie uns gemeinsam Ihre Wege gestalten.",
    image: "/Pictures/Hintergrund-1.webp",
    icon: "/Pictures/Pflastersteine.webp"
  },
  {
    title: "BEGRÜNUNG UND BEPFLANZUNG",
    description: "Begrünung und Bepflanzung verwandeln jede Außenfläche in einen lebendigen Ort voller Farbe Charakter und Naturgefühl. Mit einem durchdachten Pflanzkonzept schaffen wir harmonische Gartenräume die nicht nur ästhetisch wirken sondern auch funktional pflegeleicht und standortgerecht geplant sind. Ob blühendes Staudenbeet strukturgebende Hecken mediterrane Kübelpflanzen oder gezielt gesetzte Solitärbäume – wir setzen Ihre Wünsche in lebendige Gestaltung um. Dabei achten wir auf den richtigen Rhythmus von Farben Höhen und Blühzeiten und wählen Pflanzen die zum Standort Klima und Pflegeaufwand passen. Unser Ziel ist eine grüne Oase die langfristig Freude macht und sich natürlich in das Gesamtbild Ihres Gartens einfügt. Garten- und Landschaftsbau Stroe steht für kreative Pflanzplanung mit Liebe zum Detail fachgerechter Ausführung und fundiertem Wissen über Boden Licht und Wuchsverhalten. Egal ob Neuanlage oder Umgestaltung – wir beraten Sie individuell und setzen gezielt Akzente die Ihre Außenfläche lebendig machen. In der Region rund um München sind wir Ihr zuverlässiger Ansprechpartner für Begrünung mit Konzept. Lassen Sie sich inspirieren und entdecken Sie wie wirkungsvoll Pflanzen Atmosphäre schaffen können. Garten- und Landschaftsbau Stroe gestaltet Gärten mit Leben Farbe und Struktur. Sprechen Sie uns an - wir freuen uns auf Ihr Projekt.",
    image: "/Pictures/Hintergrund-4.webp",
    icon: "/Pictures/Begrünung.webp"
  },
  {
    title: "TEICH- UND WASSERANLAGEN",
    description: "Teich- und Wasseranlagen bringen Leben, Ruhe und natürliche Dynamik in jeden Garten. Ob Zierteich, Schwimmteich, Bachlauf oder Wasserspiel. Wasser schafft Atmosphäre, zieht Blicke auf sich und verleiht Ihrem Außenbereich ein besonderes Flair. Bei Garten- und Landschaftsbau Stroe gestalten wir individuelle Wasseranlagen, die optimal zu Ihrem Grundstück, Ihren ästhetischen Vorstellungen und Ihrem Pflegeaufwand passen. Dabei denken wir nicht nur an die Optik, sondern auch an technische Details wie Wasserführung, Abdichtung, Filterung und Sicherheit. Ein plätschernder Quellstein im Vorgarten, ein klarer Teich mit Seerosen oder ein Schwimmteich mit Naturcharakter. Jedes Projekt wird von uns mit Kreativität, Erfahrung und Liebe zum Detail umgesetzt. Wir achten auf eine harmonische Einbindung in den Garten, den richtigen Standort und die passende Bepflanzung. Wasserflächen lassen sich wunderbar mit Stein, Holz oder Licht kombinieren und verwandeln jeden Garten in einen Ort der Entspannung. Garten- und Landschaftsbau Stroe plant und realisiert Ihre Wasseranlage von der Idee bis zur fertigen Umsetzung zuverlässig, kompetent und mit hohem gestalterischen Anspruch. In der gesamten Region rund um München sind wir Ihr Ansprechpartner für Teich- und Wasseranlagen mit Qualität und Charakter. Sprechen Sie mit uns über Ihre Vorstellungen - wir bringen Bewegung, Spiegelung und Ruhe in Ihren Garten.",
    image: "/Pictures/Hintergrund-5.webp",
    icon: "/Pictures/Wasseranlagen.webp"
  },
  {
    title: "HOLZ- UND ZAUNBAU",
    description: "Holz- und Zaunbau verbinden praktischen Nutzen mit natürlicher Schönheit und verleihen Ihrem Garten Struktur, Privatsphäre und einen individuellen Charakter. Ob als Sichtschutz, Grundstücksbegrenzung oder Gestaltungselement. Hochwertige Holzkonstruktionen schaffen klare Linien und eine einladende Atmosphäre. Garten- und Landschaftsbau Stroe plant und realisiert Zäune und Holzbauten, die sich harmonisch in Ihre Außenanlage einfügen und sowohl optisch als auch funktional überzeugen. Von klassischen Gartenzäunen über moderne Sichtschutzwände bis hin zu maßgefertigten Pergolen, Carports oder Holzdecks. Wir gestalten nach Ihren Wünschen und Anforderungen. Dabei setzen wir auf langlebige Materialien, fachgerechte Verarbeitung und ein geschultes Auge für Details. Holz ist ein lebendiger Werkstoff, der Wärme ausstrahlt und mit der Natur im Einklang steht. Mit der richtigen Konstruktion und Pflege wird es zu einem dauerhaften Gestaltungselement in Ihrem Garten. Ob gerade Linien, verspielte Elemente oder kreative Kombinationen mit Stein, Metall oder Pflanzen - wir schaffen Lösungen, die nicht nur schön aussehen, sondern auch lange halten. In der gesamten Region rund um München ist Garten- und Landschaftsbau Stroe Ihr verlässlicher Partner für stilvollen Holz- und Zaunbau. Vertrauen Sie auf unsere Erfahrung, unser handwerkliches Können und unser Gespür für harmonische Gartengestaltung. Lassen Sie uns gemeinsam Ihre Außenanlage funktional und zugleich wohnlich gestalten - mit Holz in seiner schönsten Form",
    image: "/Pictures/Hintergrund-6.webp",
    icon: "/Pictures/Zaunbau.webp"
  },
  {
    title: "MAUER- UND STEINARBEITEN",
    description: "Mauer und Steinarbeiten geben jedem Garten Charakter, Form und ein solides Fundament. Sie schaffen Höhenunterschiede, trennen Flächen, stützen Hänge oder setzen markante Akzente. Ob klassisch oder modern, mit Naturstein, Betonstein oder Gabionen lassen sich dauerhafte und stilvolle Lösungen gestalten. Garten- und Landschaftsbau Stroe plant und realisiert individuelle Mauern und Steinelemente, die sich harmonisch in Ihr Gelände einfügen und sowohl funktional als auch ästhetisch überzeugen. Ob Sie eine Trockenmauer zur Beetabgrenzung wünschen, eine Sichtschutzmauer zur Nachbarseite oder eine robuste Stützmauer im Hangbereich, wir beraten Sie kompetent und finden gemeinsam die passende Lösung. Auch dekorative Elemente wie freistehende Findlinge, kleine Steinsetzungen oder Trittplattenwege gestalten wir mit Fingerspitzengefühl und einem Blick für das Besondere. Wir arbeiten mit hochwertigen Materialien aus der Region und setzen auf eine präzise handwerkliche Ausführung. Jeder Stein wird sorgfältig platziert, jede Mauerlinie genau ausgerichtet, so entstehen langlebige Bauwerke, die Wind und Wetter standhalten und über viele Jahre Freude bereiten. In der gesamten Region rund um München steht Garten- und Landschaftsbau Stroe für hochwertige Mauer und Steinarbeiten mit Stil und Substanz. Vertrauen Sie auf unser Fachwissen, unsere Erfahrung und unsere Leidenschaft für Gartengestaltung. Wir schaffen Lösungen, die stabil sind, natürlich wirken und Ihrem Garten das gewisse Etwas verleihen. Lassen Sie uns gemeinsam die Basis für Ihre neue Gartenstruktur legen, Stein für Stein, mit Herz und Hand.",
    image: "/Pictures/Hintergrund-7.webp",
    icon: "/Pictures/Mauer.webp"
  },
  {
    title: "GARTENPFLEGE UND INSTANTHALTUNG",
    description: "Ein gepflegter Garten ist nicht nur schön anzusehen, sondern auch ein Zeichen für Wertschätzung und Lebensqualität. Damit Ihr Garten das ganze Jahr über gesund, ordentlich und einladend bleibt, braucht es regelmäßige Pflege, Fachwissen und einen zuverlässigen Partner. Garten- und Landschaftsbau Stroe übernimmt für Sie die komplette Gartenpflege und Instandhaltung mit professionellem Anspruch und viel Liebe zum Detail. Ob Rasen mähen, Hecken schneiden, Beete pflegen oder Unkraut entfernen - wir kümmern uns darum, dass jede Fläche in Bestform bleibt. Auch die Kontrolle und Instandsetzung von Wegen, Mauern, Zäunen oder Teichanlagen gehört zu unserem Service. Wir erkennen frühzeitig, wo Pflegebedarf besteht, und handeln vorausschauend, bevor größere Schäden entstehen. Unsere Leistungen passen wir individuell an Ihre Wünsche und die Bedürfnisse Ihres Gartens an. Ob regelmäßige Pflege im Rahmen eines Jahresvertrags oder punktuelle Einsätze zu bestimmten Jahreszeiten – wir sind flexibel für Sie da. Mit modernem Gerät, geschultem Blick und ökologischer Verantwortung sorgen wir für gesunde Pflanzen, gepflegte Rasenflächen und ein harmonisches Gesamtbild. Dabei achten wir auf Nachhaltigkeit und verwenden möglichst umweltschonende Methoden und Materialien. Garten- und Landschaftsbau Stroe ist Ihr zuverlässiger Partner für Gartenpflege in der gesamten Region rund um München. Vertrauen Sie auf Erfahrung, Gründlichkeit und das Gespür für den richtigen Schnitt zur richtigen Zeit. Damit Ihr Garten jederzeit gepflegt aussieht und Sie ihn unbeschwert genießen können. Vereinbaren Sie jetzt einen unverbindlichen Beratungstermin und lassen Sie sich von unserem Rundum Service überzeugen.",
    image: "/Pictures/Hintergrund-8.webp",
    icon: "/Pictures/Gartenpflege.webp"
  },
  {
    title: "WINTERDIENST",
    description: "Sobald Schnee fällt und Glätte droht, zählt jede Minute. Ein zuverlässiger Winterdienst ist entscheidend, um Wege, Zufahrten und Flächen sicher begeh- und befahrbar zu halten. Garten- und Landschaftsbau Stroe bietet Ihnen einen professionellen Winterdienst in der gesamten Region südlich von München - pünktlich, gründlich und effizient. Ob private Einfahrt, Firmenparkplatz, Wohnanlage oder öffentlicher Gehweg. Wir übernehmen Schneeräumung, Streudienst und Glättebekämpfung nach den aktuellen gesetzlichen Vorgaben. Mit unserem modernen Fuhrpark und erfahrenem Team sind wir bestens vorbereitet auf jede Wetterlage. Unser besonderer Service: das Winterdienst Rundumsorglos Paket im praktischen Abomodell. Damit sind Sie komplett abgesichert, ohne jeden Tag neu planen zu müssen. Wir kümmern uns automatisch um alle notwendigen Einsätze – auch früh morgens oder an Wochenenden. Sie erhalten eine feste Saisonbetreuung mit klaren Reaktionszeiten und einem zuverlässigen Ansprechpartner. Unser Team überwacht kontinuierlich Wetterdaten und ist bei Bedarf sofort zur Stelle. So garantieren wir maximale Sicherheit für Bewohner, Kunden, Mitarbeiter und Passanten. Der Winterdienst von Garten- und Landschaftsbau Stroe steht für Verantwortung, Sorgfalt und professionelle Abläufe. Wir dokumentieren unsere Einsätze transparent und handeln vorausschauend, damit Sie sich ganz auf Ihre täglichen Aufgaben konzentrieren können. Schützen Sie sich rechtzeitig vor Schnee und Eis mit einem Partner, auf den Sie sich verlassen können. Fordern Sie noch heute Ihr individuelles Winterdienst Angebot an und genießen Sie den Winter entspannt mit unserem Abo Service.",
    image: "/Pictures/Hintergrund-9.webp",
    icon: "/Pictures/Winterdienst.webp"
  },
  {
    title: "HAUSMEISTER DIENSTLEISTUNGEN",
    description: "Hausmeisterdienstleistungen sind mehr als nur regelmäßige Kontrollgänge, sie sind der Schlüssel zu Werterhalt, Sicherheit und einem gepflegten Erscheinungsbild Ihrer Immobilie. Garten- und Landschaftsbau Stroe bietet Ihnen im gesamten Raum südlich von München einen zuverlässigen Hausmeisterservice mit Verantwortung und Weitblick. Ob Wohnanlage, Gewerbeimmobilie oder privates Objekt. Wir kümmern uns um alle laufenden Aufgaben rund um Pflege, Wartung und Instandhaltung. Unser Team aus erfahrenen Fachkräften sorgt für saubere Außenflächen, überprüft technische Anlagen, beseitigt kleinere Schäden und achtet auf Ordnung und Sicherheit. Mit unserem Rundum Sorglospaket im praktischen Abomodell übernehmen wir die regelmäßige Betreuung Ihrer Immobilie komplett für Sie. Das bedeutet: keine Koordination mehr mit mehreren Dienstleistern, keine unerwarteten Ausfälle, sondern ein zuverlässiger Service, der proaktiv denkt und schnell handelt. Wir reagieren nicht nur auf Probleme, sondern erkennen Wartungsbedarf frühzeitig und handeln vorausschauend. Unsere Leistungen umfassen unter anderem die Kontrolle von Beleuchtung und Haustechnik, Mülltonnenservice, Reinigungsarbeiten im Außenbereich, Kleinreparaturen, saisonale Pflege sowie das Monitoring von Sicherheitsaspekten. Jeder Einsatz wird dokumentiert, unsere Ansprechpartner sind jederzeit erreichbar und Einsätze werden flexibel angepasst. Mit Garten- und Landschaftsbau Stroe haben Sie einen Hausmeisterdienst an Ihrer Seite, der Ihre Immobilie rund um die Uhr im Blick behält – kompetent, diskret und engagiert. Sichern Sie sich jetzt Ihr persönliches Angebot und profitieren Sie von einem Service, der wirklich entlastet.",
    image: "/Pictures/Hintergrund-10.webp",
    icon: "/Pictures/Hausmeisterdienst.webp"
  },
  {
    title: "BELEUCHTUNG UND BEWÄSSERUNG",
    description: "Beleuchtung und Bewässerung spielen eine entscheidende Rolle in der Gestaltung moderner Außenanlagen. Sie verbinden Komfort mit Effizienz und setzen dabei gezielt ästhetische wie funktionale Akzente. Garten- und Landschaftsbau Stroe entwickelt für private Gärten, Wohnanlagen und Gewerbeflächen im Raum südlich von München individuelle Lösungen, die genau auf Ihre Bedürfnisse und Ihr Grundstück abgestimmt sind. Unsere Gartenbeleuchtung bringt nicht nur Sicherheit und Orientierung, sondern auch stimmungsvolle Atmosphäre in Ihren Außenbereich. Ob dezente Wegbeleuchtung, akzentuierte Lichtinszenierung von Pflanzen und Mauern oder die effektvolle Ausleuchtung von Sitzplätzen und Fassaden. Wir setzen gezielt Lichtpunkte, die Ihren Garten in Szene setzen und den Aufenthalt im Freien auch in den Abendstunden zum Genuss machen. Gleichzeitig sorgt unsere moderne Bewässerungstechnik für eine gleichmäßige und ressourcenschonende Wasserversorgung Ihrer Grünflächen. Automatische Systeme mit Sensoren, Zeitschaltsteuerung oder App-Steuerung machen die Pflege einfacher und nachhaltiger. Dabei achten wir auf versteckte Leitungsführung, optimale Wasserverteilung und die passenden Komponenten für jede Pflanzengruppe. Ob unterirdisches Tropfsystem, Versenkregner oder Kombinationen. Wir planen und installieren alles fachgerecht und wartungsarm. Unser Ziel ist es, Technik so einzusetzen, dass sie Ihr Leben erleichtert und Ihre Außenanlage rund um die Uhr gepflegt und einladend bleibt. Mit Garten- und Landschaftsbau Stroe setzen Sie auf Kompetenz, Qualität und Liebe zum Detail. Lassen Sie uns Ihre Außenbeleuchtung und Gartenbewässerung zu einem echten Mehrwert machen. Kontaktieren Sie uns für ein persönliches Beratungsgespräch.",
    image: "/Pictures/Hintergrund-11.webp",
    icon: "Pictures/Beleuchtung.webp"
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
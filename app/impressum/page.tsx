"use client";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-white">Impressum</h1>
        
        <section className="space-y-6 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-2">
              <p className="font-semibold text-white">Unternehmen: Garten- und Landschaftsbau Stroe</p>
              <p>Inhaber: Christian Stroe</p>
              <div>
                <p>Beuerbergerstraße 38</p>
                <p>82549 Königsdorf</p>
                <p>Bayern, Deutschland</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">Kontakt</h2>
            <div className="space-y-1">
              <p>Telefon: +49 1522 3230374</p>
              <p>E-Mail: Christian.stroe@stroe-dienstleistungen.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">Umsatzsteuer-Identifikationsnummer</h2>
            <p>gemäß §27a UStG: DE339748070</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">Haftungsausschluss</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-white">Haftung für Inhalte</h3>
                <p className="text-sm leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-white">Haftung für Links</h3>
                <p className="text-sm leading-relaxed">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-white">Urheberrecht</h3>
                <p className="text-sm leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">Berufsrechtliche Angaben</h2>
            <div className="space-y-2">
              <p>Berufsbezeichnung: Garten- und Landschaftsbau</p>
              <p className="text-sm">Die Tätigkeit im Bereich Garten- und Landschaftsbau unterliegt den Vorschriften der Handwerksordnung (HwO). Informationen hierzu finden Sie auf den Webseiten der Handwerkskammern.</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">Hinweis gemäß Online-Streitbeilegung</h2>
            <p className="text-sm leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie hier finden: <a href="https://ec.europa.eu/consumers/odr/" className="text-[#92c43f] hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">Seiten-Erstellung</h2>
            <p>Diese Website wurde erstellt von:</p>
            <p>Andreas Wallner</p>
            <a href="http://www.munichmotions.com" className="text-[#92c43f] hover:underline" target="_blank" rel="noopener noreferrer">www.munichmotions.com</a>
          </div>
        </section>
      </div>
    </div>
  );
}
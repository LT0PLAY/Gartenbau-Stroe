"use client";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-white">Datenschutzerklärung</h1>

        <section className="space-y-8 text-gray-300">
          <p className="text-lg">
            Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie über die Erhebung, Verarbeitung und Nutzung Ihrer Daten im Rahmen der geltenden Datenschutzgesetze, insbesondere der EU-Datenschutz-Grundverordnung (DSGVO).
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">1. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <div className="mt-2 space-y-1">
              <p>Garten- und Landschaftsbau Stroe</p>
              <p>Inhaber: Christian Stroe</p>
              <p>Gewerbering 5</p>
              <p>82544 Egling</p>
              <p>Bayern, Deutschland</p>
              <p>Telefon: +49 1522 3230374</p>
              <p>E-Mail: kundenservice@stroe-galabau.de</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="mb-3">
              Beim Besuch unserer Website werden durch den Webserver unseres Hosting-Providers automatisch folgende Daten erhoben:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>IP-Adresse des anfragenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Verwendeter Browsertyp und Version</li>
              <li>Betriebssystem des Nutzers</li>
            </ul>
            <p className="mt-3">
              Diese Daten sind technisch notwendig, um Ihnen unsere Website anzuzeigen und deren Stabilität und Sicherheit zu gewährleisten. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">3. Nutzung von Cookies</h2>
            <p>
              Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie können die Speicherung von Cookies durch entsprechende Einstellungen in Ihrem Browser verhindern. Wir weisen jedoch darauf hin, dass die Funktionalität unserer Website dadurch eingeschränkt sein kann.
            </p>
            <p className="mt-3">
              Wir setzen den Consent-Dienst <strong>Cookiebot</strong> (Usercentrics A/S, Dänemark) ein, um Ihre Einwilligungen zur Verwendung von Cookies rechtskonform zu verwalten. 
              Weitere Informationen finden Sie unter{" "}
              <a
                href="https://www.cookiebot.com/de/privacy-policy/"
                className="text-[#92c43f] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.cookiebot.com/de/privacy-policy/
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">4. Rechte der Betroffenen</h2>
            <p className="mb-3">Sie haben das Recht:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu erhalten (Art. 15 DSGVO).</li>
              <li>Die Berichtigung unrichtiger Daten oder die Vervollständigung Ihrer bei uns gespeicherten Daten zu verlangen (Art. 16 DSGVO).</li>
              <li>Die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen (Art. 17 DSGVO), soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
              <li>Die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen (Art. 18 DSGVO).</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen (Art. 21 DSGVO).</li>
              <li>Die Übertragung Ihrer Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu verlangen (Art. 20 DSGVO).</li>
            </ul>
            <p className="mt-3">
              Zur Ausübung dieser Rechte können Sie uns unter den oben angegebenen Kontaktmöglichkeiten erreichen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">5. Drittanbieter</h2>
            <p>
              Unsere Website kann Inhalte von Drittanbietern einbinden, z. B. Kartenmaterial von Google Maps oder Videos von YouTube. Diese Anbieter können Ihre IP-Adresse speichern, um ihre Inhalte korrekt auszuliefern. Bitte beachten Sie die Datenschutzrichtlinien der jeweiligen Drittanbieter.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">6. Hosting</h2>
            <p>
              Diese Website wird bei <strong>Vercel Inc.</strong> (San Francisco, USA) gehostet. Der Betrieb erfolgt über verteilte Rechenzentren und CDN-Knoten. 
              Es kann dabei zu Übermittlungen in Drittländer kommen. Die Übermittlung erfolgt auf Basis von EU-Standardvertragsklauseln. 
              Weitere Informationen:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                className="text-[#92c43f] hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vercel.com/legal/privacy-policy
              </a>.
            </p>
            <p className="mt-3">
              Rechtsgrundlage für das Hosting ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und performanten Bereitstellung der Website).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">7. Änderung dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um den aktuellen rechtlichen Anforderungen zu entsprechen oder Änderungen unserer Dienstleistungen umzusetzen. Für Ihren erneuten Besuch gilt die jeweils aktuelle Datenschutzerklärung.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
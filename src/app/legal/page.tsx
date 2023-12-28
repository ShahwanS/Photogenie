"use client";

import React, { useState } from "react";
import Header from "../../../components/utils/Header";
import Footer from "../../../components/utils/Footer";

const LegalSection: React.FC<LegalSectionProps> = ({
  title,
  id,
  isOpen,
  onClick,
  content,
}) => {
  const createMarkup = () => {
    return { __html: content };
  };

  return (
    <div className="bg-[#454545] text-white rounded-lg overflow-hidden shadow-lg mb-4">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full px-4 py-3 sm:px-6 sm:py-4 bg-[#1E1E1E] hover:bg-[#303030] transition duration-300"
      >
        <span className="text-base sm:text-lg md:text-xl font-semibold">
          {title}
        </span>
        <span className="text-base sm:text-lg md:text-xl">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      {isOpen && (
        <div
          className="px-4 py-3 text-sm sm:text-md md:text-lg transition-all duration-500 ease-in-out"
          dangerouslySetInnerHTML={createMarkup()}
        />
      )}
    </div>
  );
};

interface LegalSectionProps {
  title: string;
  id: string; // Added the id property
  isOpen: boolean;
  onClick: () => void;
  content: string;
}

export default function Home() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <Header />
      <main className="bg-[#2D2D2D]">
        <div className="container mx-auto px-4 sm:px-6 py-40 min-h-screen">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-10">
            Legal Information
          </h1>

          <LegalSection
            title="Impressum"
            id="Impressum"
            isOpen={openSection === "Impressum"}
            onClick={() => toggleSection("Impressum")}
            content={ImpressumContent}
          />
          <LegalSection
            title="AGB"
            id="AGB"
            isOpen={openSection === "AGB"}
            onClick={() => toggleSection("AGB")}
            content={AGBContent}
          />

          <LegalSection
            title="Datenschutz"
            id="Datenschutz"
            isOpen={openSection === "Datenschutz"}
            onClick={() => toggleSection("Datenschutz")}
            content={datenschutzContent}
          />
          <LegalSection
            title="Cookies"
            id="Cookies"
            isOpen={openSection === "Cookies"}
            onClick={() => toggleSection("Cookies")}
            content={cookiesContent}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

const ImpressumContent = ` <h1>Impressum</h1>
<p>Angaben gemäß § 5 TMG</p>

<h2>Kontakt</h2>
<p><strong>Name:</strong> Seif Shahwan</p>
<p><strong>Adresse:</strong> Großseelheimer Straße 42, 35039 Marburg, Deutschland</p>
<p><strong>E-Mail:</strong> <a href="mailto:Saif_shahwan@Hotmail.com">Saif_shahwan@Hotmail.com</a></p>

<h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
<p>Seif Shahwan (Anschrift wie oben)</p>

<h3>Haftungsausschluss</h3>
<p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

<h3>Urheberrecht</h3>
<p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
`;

const cookiesContent = ` <h1>Cookies-Richtlinie</h1>
<p>Zuletzt aktualisiert: 28. Dezember 2023</p>
<p>Diese Cookies-Richtlinie erklärt, was Cookies sind und wie wir sie verwenden. Sie sollten diese Richtlinie lesen, um zu verstehen, welche Arten von Cookies wir verwenden, welche Informationen wir mit Cookies sammeln und wie diese Informationen verwendet werden. Diese Cookies-Richtlinie wurde mit Hilfe des <a href="https://www.termsfeed.com/cookies-policy-generator/" target="_blank">Cookies Policy Generators</a> erstellt.</p>
<p>Cookies enthalten in der Regel keine Informationen, die einen Benutzer persönlich identifizieren, aber die persönlichen Informationen, die wir über Sie speichern, können mit den Informationen verknüpft werden, die in Cookies gespeichert und von ihnen abgerufen werden. Weitere Informationen darüber, wie wir Ihre persönlichen Daten verwenden, speichern und sicher aufbewahren, finden Sie in unserer Datenschutzrichtlinie.</p>
<p>Wir speichern keine sensiblen persönlichen Informationen, wie Postanschriften, Passwörter usw., in den von uns verwendeten Cookies.</p>
<h2>Auslegung und Definitionen</h2>
<h3>Auslegung</h3>
<p>Die Wörter, deren Anfangsbuchstabe großgeschrieben ist, haben Bedeutungen, die unter den folgenden Bedingungen definiert sind. Die folgenden Definitionen haben unabhängig davon, ob sie im Singular oder Plural erscheinen, dieselbe Bedeutung.</p>
<h3>Definitionen</h3>
<p>Für die Zwecke dieser Cookies-Richtlinie:</p>
<ul>
    <li><strong>Unternehmen</strong> (bezeichnet als "das Unternehmen", "Wir", "Uns" oder "Unser" in dieser Cookies-Richtlinie) bezieht sich auf Photogenie.</li>
    <li><strong>Cookies</strong> sind kleine Dateien, die von einer Website auf Ihrem Computer, Mobilgerät oder einem anderen Gerät platziert werden und Details Ihres Browserverlaufs auf dieser Website enthalten.</li>
    <li><strong>Website</strong> bezieht sich auf Photogenie, zugänglich von <a href="http://www.photogenie.photos" rel="external nofollow noopener" target="_blank">http://www.photogenie.photos</a></li>
    <li><strong>Sie</strong> bezeichnet die Person, die die Website nutzt oder darauf zugreift, oder ein Unternehmen oder eine juristische Einheit, für die eine solche Person die Website nutzt oder darauf zugreift.</li>
</ul>
<h2>Verwendung der Cookies</h2>
<h3>Arten von Cookies, die wir verwenden</h3>
<p>Cookies können "dauerhafte" oder "Sitzungs-Cookies" sein. Dauerhafte Cookies bleiben auf Ihrem persönlichen Computer oder mobilen Gerät, wenn Sie offline gehen, während Sitzungs-Cookies gelöscht werden, sobald Sie Ihren Webbrowser schließen.</p>
<p>Wir verwenden sowohl Sitzungs- als auch dauerhafte Cookies für die folgenden Zwecke:</p>
<ul>
    <li>
        <p><strong>Notwendige / Wesentliche Cookies</strong></p>
        <p>Typ: Sitzungs-Cookies</p>
        <p>Verwaltet von: Uns</p>
        <p>Zweck: Diese Cookies sind wesentlich, um Ihnen die Dienste, die über die Website verfügbar sind, bereitzustellen und einige ihrer Funktionen zu nutzen. Sie helfen dabei, Benutzer zu authentifizieren und den betrügerischen Gebrauch von Benutzerkonten zu verhindern. Ohne diese Cookies können die von Ihnen angeforderten Dienste nicht bereitgestellt werden, und wir verwenden diese Cookies nur, um Ihnen diese Dienste zur Verfügung zu stellen.</p>
    </li>
    <li>
        <p><strong>Funktionalitäts-Cookies</strong></p>
        <p>Typ: Dauerhafte Cookies</p>
        <p>Verwaltet von: Uns</p>
        <p>Zweck: Diese Cookies ermöglichen es uns, sich an Ihre Entscheidungen zu erinnern, wenn Sie die Website nutzen, wie zum Beispiel Ihre Anmeldeinformationen oder Sprachpräferenz. Der Zweck dieser Cookies ist es, Ihnen eine persönlichere Erfahrung zu bieten und zu verhindern, dass Sie Ihre Präferenzen jedes Mal neu eingeben müssen, wenn Sie die Website nutzen.</p>
    </li>
</ul>
<h3>Ihre Wahlmöglichkeiten in Bezug auf Cookies</h3>
<p>Wenn Sie die Verwendung von Cookies auf der Website vermeiden möchten, müssen Sie zunächst die Verwendung von Cookies in Ihrem Browser deaktivieren und dann die Cookies löschen, die in Ihrem Browser im Zusammenhang mit dieser Website gespeichert sind. Sie können diese Option jederzeit nutzen, um die Verwendung von Cookies zu verhindern.</p>
<p>Wenn Sie unsere Cookies nicht akzeptieren, können Sie einige Unannehmlichkeiten bei der Nutzung der Website erleben und einige Funktionen funktionieren möglicherweise nicht richtig.</p>
<p>Wenn Sie Cookies löschen oder Ihrem Webbrowser anweisen möchten, Cookies zu löschen oder abzulehnen, besuchen Sie bitte die Hilfeseiten Ihres Webbrowsers.</p>
<ul>
    <li>
        <p>Für den Chrome-Webbrowser besuchen Sie bitte diese Seite von Google: <a href="https://support.google.com/accounts/answer/32050" rel="external nofollow noopener" target="_blank">https://support.google.com/accounts/answer/32050</a></p>
    </li>
    <li>
        <p>Für den Internet Explorer-Webbrowser besuchen Sie bitte diese Seite von Microsoft: <a href="http://support.microsoft.com/kb/278835" rel="external nofollow noopener" target="_blank">http://support.microsoft.com/kb/278835</a></p>
    </li>
    <li>
        <p>Für den Firefox-Webbrowser besuchen Sie bitte diese Seite von Mozilla: <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" rel="external nofollow noopener" target="_blank">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></p>
    </li>
    <li>
        <p>Für den Safari-Webbrowser besuchen Sie bitte diese Seite von Apple: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" rel="external nofollow noopener" target="_blank">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></p>
    </li>
</ul>
<p>Für jeden anderen Webbrowser besuchen Sie bitte die offiziellen Webseiten Ihres Browsers.</p>
<h3>Weitere Informationen über Cookies</h3>
<p>Sie können hier mehr über Cookies erfahren: <a href="https://www.termsfeed.com/blog/cookies/" target="_blank">Alles über Cookies von TermsFeed</a>.</p>
<h3>Kontaktieren Sie uns</h3>
<p>Wenn Sie Fragen zu dieser Cookies-Richtlinie haben, können Sie uns kontaktieren:</p>
<ul>
    <li>Indem Sie diese Seite auf unserer Website besuchen: <a href="http://www.photogenie.photos/contact" rel="external nofollow noopener" target="_blank">http://www.photogenie.photos/contact</a></li>
</ul>`;

const AGBContent = `<h1>Allgemeine Geschäftsbedingungen</h1>
<p>Zuletzt aktualisiert: 28. Dezember 2023</p>
<p>Bitte lesen Sie diese Allgemeinen Geschäftsbedingungen sorgfältig durch, bevor Sie unseren Service nutzen.</p>

<h2>Anerkennung</h2>
<p>Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung dieses Dienstes und die Vereinbarung, die zwischen Ihnen und dem Unternehmen besteht. Diese Geschäftsbedingungen legen die Rechte und Pflichten aller Nutzer in Bezug auf die Nutzung des Dienstes fest.</p>
<p>Der Zugriff auf und die Nutzung des Dienstes setzt die Annahme dieser Geschäftsbedingungen voraus. Diese gelten für alle Besucher, Nutzer und andere, die auf den Dienst zugreifen oder ihn nutzen.</p>
<p>Mit dem Zugriff auf oder der Nutzung des Dienstes erklären Sie sich mit diesen Geschäftsbedingungen einverstanden. Wenn Sie mit einem Teil dieser Geschäftsbedingungen nicht einverstanden sind, dürfen Sie den Dienst nicht nutzen.</p>

<h2>Nutzungsbedingungen</h2>
<p>Die auf dieser Website präsentierten Fotos sind ausschließlich zum Ansehen bestimmt. Jeder Download, jede Reproduktion, Weiterverbreitung oder sonstige Verwendung der Bilder ist ohne ausdrückliche schriftliche Zustimmung des Urhebers strengstens untersagt.</p>

<h2>Haftungsbeschränkung</h2>
<p>Die Website wird "wie besehen" und "wie verfügbar" bereitgestellt. Wir übernehmen keine Gewährleistung für die ständige Verfügbarkeit, Fehlerfreiheit oder die Genauigkeit der Inhalte. Wir haften nicht für direkte oder indirekte Schäden, die durch die Nutzung der Website entstehen könnten.</p>

<h2>Anwendbares Recht</h2>
<p>Diese Geschäftsbedingungen unterliegen dem Recht der Bundesrepublik Deutschland.</p>

<h2>Änderungen der Geschäftsbedingungen</h2>
<p>Wir behalten uns das Recht vor, diese Geschäftsbedingungen jederzeit zu ändern. Die fortgesetzte Nutzung unserer Website nach solchen Änderungen gilt als Zustimmung zu den neuen Bedingungen.</p>

<h2>Kontakt</h2>
<p>Bei Fragen zu diesen Allgemeinen Geschäftsbedingungen kontaktieren Sie uns bitte über: <a href="http://www.photogenie.photos/contact" target="_blank">http://www.photogenie.photos/contact</a></p>`;

const datenschutzContent = `<h1>Datenschutzerklärung</h1>
<p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
<p>Saif Shahwan</p>
<h2>Ihre Betroffenenrechte</h2>
<p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
<ul>
<li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
<li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
<li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
<li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
<li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
<li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
</ul>
<p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
<p>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.</p>
<p>Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" target="_blank" rel="noopener nofollow">https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html</a>.</p>
<p></p><h2>Cookies</h2>
<p>Wie viele andere Webseiten verwenden wir auch so genannte „Cookies“. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Webseite besuchen. </p>
<p>Sie können Sie einzelne Cookies oder den gesamten Cookie-Bestand löschen. Darüber hinaus erhalten Sie Informationen und Anleitungen, wie diese Cookies gelöscht oder deren Speicherung vorab blockiert werden können. Je nach Anbieter Ihres Browsers finden Sie die notwendigen Informationen unter den nachfolgenden Links:</p>
<ul>
<li>Mozilla Firefox: <a href="https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen" target="_blank" rel="nofollow noopener">https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen</a></li>
<li>Internet Explorer: <a href="https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="nofollow noopener">https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies</a></li>
<li>Google Chrome: <a href="https://support.google.com/accounts/answer/61416?hl=de" target="_blank" rel="nofollow noopener">https://support.google.com/accounts/answer/61416?hl=de</a></li>
<li>Opera: <a href="http://www.opera.com/de/help" target="_blank" rel="nofollow noopener">http://www.opera.com/de/help</a></li>
<li>Safari: <a href="https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE" target="_blank" rel="nofollow noopener">https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE</a></li>
</ul>
<h3>Speicherdauer und eingesetzte Cookies:</h3>
<p>Soweit Sie uns durch Ihre Browsereinstellungen oder Zustimmung die Verwendung von Cookies erlauben, können folgende Cookies auf unseren Webseiten zum Einsatz kommen:</p>
<p></p><h2>Technisch notwendige Cookies </h2>
<h3>Art und Zweck der Verarbeitung: </h3>
<p>Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten. Einige Elemente unserer Internetseite erfordern es, dass der aufrufende Browser auch nach einem Seitenwechsel identifiziert werden kann.</p>
<p>Der Zweck der Verwendung technisch notwendiger Cookies ist, die Nutzung von Websites für die Nutzer zu vereinfachen. Einige Funktionen unserer Internetseite können ohne den Einsatz von Cookies nicht angeboten werden. Für diese ist es erforderlich, dass der Browser auch nach einem Seitenwechsel wiedererkannt wird.</p>
<p>Für folgende Anwendungen benötigen wir Cookies:</p>
<p></p><h3>Rechtsgrundlage und berechtigtes Interesse: </h3>
<p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einer nutzerfreundlichen Gestaltung unserer Website.</p>
<h3>Empfänger: </h3>
<p>Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Website als Auftragsverarbeiter tätig werden.</p>
<p></p><h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
<p>Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne diese Daten ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein.</p>
<h3>Widerspruch</h3>
<p>Lesen Sie dazu die Informationen über Ihr Widerspruchsrecht nach Art. 21 DSGVO weiter unten.</p>
<p></p><h2>Kontaktformular</h2>
<h3>Art und Zweck der Verarbeitung:</h3>
<p>Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional.</p>
<h3>Rechtsgrundlage:</h3>
<p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).</p>
<p>Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.</p>
<p>Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der in das Kontaktformular eingegebenen Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).</p>
<h3>Empfänger:</h3>
<p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
<p></p><h3>Speicherdauer:</h3>
<p>Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.</p>
<p>Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf dieser Fristen. </p>
<h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
<p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.</p>
<p></p><h2>SSL-Verschlüsselung</h2>
<p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>
<p></p><hr>
<h2>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</h2>
<h3>Einzelfallbezogenes Widerspruchsrecht</h3>
<p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.</p>
<p>Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
<h3>Empfänger eines Widerspruchs</h3>
<p></p><hr>
<h2>Änderung unserer Datenschutzbestimmungen</h2>
<p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
<h2>Fragen an den Datenschutzbeauftragten</h2>
<p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:</p>`;

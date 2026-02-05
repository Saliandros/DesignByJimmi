import { FiDownload, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState } from "react";

export default function CV() {
  const [previousEducationOpen, setPreviousEducationOpen] = useState(false);

  const handleDownloadPDF = () => {
    // PDF download functionality will be added here
    console.log("Download PDF");
  };

  return (
    <main>
      <header className="m-6 mt-12 pb-6 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="size-xl font-bold text-primary">Mit CV</h1>
        </div>
      </header>

      <article className="pb-6 max-w-5xl mx-auto">
        {/* Personal Info */}
        <section className="bg-primary text-white rounded-2xl p-12">
          <h2 className="size-lg font-bold text-white mb-4">Personlige oplysninger</h2>
          <figure className="flex flex-col md:flex-row gap-34 mb-6">
            <img
              src="/assets/image/Jimmi.jpg"
              alt="Profilbillede"
              className="w-48 h-60 rounded-xl object-cover shadow-lg flex-shrink-0"
            />
            <figcaption className="text-white text-sm flex-1">
              <p className="font-semibold mb-2">Om mig</p>
              <p>Jeg er i gang som professionsbachelor i webudvikling på Aarhus Erhvervesakademi, hvor jeg arbejder med React, JavaScript, Tailwind CSS og meget mere. Som full-stack developer har jeg også kendskab til backend med Node.js & Express samt databaser som NoSQL og SQL. Før webudvikling har jeg færdiggjort multimediedesigner, som har givet mig erfaring med digital design. Jeg har også færdiggjort IT-supporter, som har givet mig erfaring med PowerShell samt netværk.</p>
            </figcaption>
          </figure>
          <div className="mt-4 grid md:grid-cols-2 gap-6 items-start">
            <address className="space-y-2 text-white text-sm not-italic">
              <p><span className="font-semibold">Navn:</span> Jimmi Berg Larsen</p>
              <p><span className="font-semibold">Email:</span> din.email@example.com</p>
              <p><span className="font-semibold">Telefon:</span> +45 XX XX XX XX</p>
              <p><span className="font-semibold">Lokation:</span> Danmark</p>
            </address>
            <div className="text-center md:text-center">
              <p className="text-base text-white mb-2">Du kan også downloade mit CV her.</p>
              <button
                onClick={handleDownloadPDF}
                className="inline-flex items-center gap-2 color-secondary px-4 py-2 rounded-lg bg-hover-color hover:text-white hover:shadow-lg transition cursor-pointer"
              >
                <FiDownload className="w-5 h-5" />
                Download mit CV
              </button>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white rounded-2xl p-6 mb-10">
          <h2 className="size-lg font-bold text-secondary mb-4">Uddannelse</h2>
          <article className="border-l-4 border-primary pl-4">
            <h3 className="font-bold text-primary mb-1">Webudvikler - Igangværende</h3>
            <p className="text-sm text-gray-600 mb-2">Aarhus Erhvervesakademi - 2025 - 2027</p>
            <p className="text-primary">Speciale - Full-Stack developer</p>
            <p className="text-sm mt-2">En praksisnær uddannelse inden for webudvikling, hvor jeg lærer at udvikle moderne webapplikationer med fokus på både frontend og backend. Uddannelsen omfatter teknologier som React, JavaScript, HTML og CSS samt databasehåndtering og API-integration.</p>
          </article>
        </section>

        {/* Previous Education */}
        <section className="bg-white rounded-2xl p-6 mb-10 transition-shadow duration-300 hover:shadow-lg">
          <button
            onClick={() => setPreviousEducationOpen(!previousEducationOpen)}
            className="w-full flex justify-between items-center cursor-pointer hover-color active-color transition-colors duration-200"
          >
            <h2 
              className={`size-lg font-bold text-secondary transition-colors duration-200`}
              style={previousEducationOpen ? { color: 'var(--color-active)' } : {}}
            >
              Tidligere uddannelser
            </h2>
            <div className={`transition-transform duration-300 ${previousEducationOpen ? 'rotate-180' : ''}`}>
              <FiChevronDown className="w-6 h-6 text-secondary" />
            </div>
          </button>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              previousEducationOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="space-y-6 mt-4">
              <article className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-primary mb-1">Multimediedesigner</h3>
                <p className="text-sm text-gray-600 mb-2">Erhvervesakademi Midtvest - 2023 - 2025</p>
                <p className="text-sm mt-2">En komprehensiv uddannelse inden for digital design og multimedieproduktion. Læring om grafisk design, videobehandling, webdesign og brugergrænsefladedesign med fokus på kreative og funktionelle løsninger.</p>
              </article>
              <article className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-primary mb-1">IT-Supporter</h3>
                <p className="text-sm text-gray-600 mb-2">Mercentec Viborg - 2015 - 2019</p>
                <p className="text-sm mt-2">En erhvervsuddannelse med praktik inden for IT-support og systembeherskelse. Uddannelsen gav mig erfaringer med brugeradministration, troubleshooting, netværk og grundlæggende systemadministration.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="bg-white rounded-2xl p-6 mb-10">
          <h2 className="size-lg font-bold text-secondary mb-4">Arbejdserfaring</h2>
          <div className="space-y-6">
            <article className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-primary mb-1">Praktikant - Digital Design</h3>
              <p className="text-sm text-gray-600 mb-2">Flamingo Tours - 2025</p>
              <p className="text-sm mt-2">Praktikforløb som del af Multimediedesigner-uddannelsen med fokus på digital design, markedsføringsmaterialer og brugeroplevelse.</p>
            </article>
            <article className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-primary mb-1">Uddannelses Ambassadør</h3>
              <p className="text-sm text-gray-600 mb-2">Erhvervsakademi Midtvest - 2023 - 2025</p>
              <p className="text-sm mt-2">Repræsenterede skolen ved studievalgsarrangementer, informerede kommende studerende og bidrog til at skabe et positivt læringsmiljø.</p>
            </article>
            <article className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-primary mb-1">Vikar</h3>
              <p className="text-sm text-gray-600 mb-2">Temp-Team - 2022 - 2025</p>
              <p className="text-sm mt-2">Diverse vikariater sideløbende med uddannelsen, herunder rengøring og serviceopgaver.</p>
            </article>
          </div>
        </section>

        {/* Leisure & Volunteer */}
        <section className="bg-white rounded-2xl p-6 mb-10">
          <h2 className="size-lg font-bold text-secondary mb-4">Fritid & Frivilligt arbejde</h2>
          <article className="border-l-4 border-primary pl-4">
            <h3 className="font-bold text-primary mb-1">Fredagsbar</h3>
            <p className="text-sm text-gray-600 mb-2">Erhvervsakademi Midtvest - 2023 - 2025</p>
            <p className="text-sm mt-2">Aktivt medlem af fredagsbaren hvor jeg hjalp med planlægning, arrangement og drift af sociale arrangementer for medstuderende.</p>
          </article>
        </section>

        {/* Languages */}
        <section className="bg-white rounded-2xl p-6 mb-10">
          <h2 className="size-lg font-bold text-secondary mb-4">Sprog</h2>
          <div>
            <h3 className="font-semibold text-primary text-sm mb-2">Flydende</h3>
            <ul className="space-y-2 text-sm text-primary mb-4">
              <li>Dansk - Modersmål</li>
              <li>Engelsk - Flydende</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary text-sm mb-2">Skriftligt kendskab</h3>
            <ul className="space-y-2 text-sm text-primary">
              <li>Norsk</li>
              <li>Svensk</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-white rounded-2xl p-6 mb-10">
          <h2 className="size-lg font-bold text-secondary mb-4">Færdigheder</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <article>
              <h3 className="font-bold text-primary mb-3">Frontend</h3>
              <ul className="space-y-1 text-sm text-primary">
                <li>React & JavaScript</li>
                <li>Tailwind CSS</li>
                <li>Git & GitHub</li>
              </ul>
            </article>
            <article>
              <h3 className="font-bold text-primary mb-3">Backend</h3>
              <ul className="space-y-1 text-sm text-primary">
                <li>Node.js & Express</li>
                <li>PowerShell ISE & Scripting</li>
                <li>Netværk CCNA fra 2019</li>
                <li>Virtualisering</li>
              </ul>
            </article>
            <article>
              <h3 className="font-bold text-primary mb-3">Databaser</h3>
              <ul className="space-y-1 text-sm text-primary">
                <li>Mongoose</li>
                <li>SQL</li>
                <li>SQL Databaser</li>
              </ul>
            </article>
            <article>
              <h3 className="font-bold text-primary mb-3">OS-Erfaringer</h3>
              <ul className="space-y-2 text-sm text-primary">
                <li>Mac OS X Mavericks</li>
                <li>Windows XP/Vista/7/8/10</li>
                <li>Linux (Ubuntu, Mint)</li>
                <li>Windows 2012 R2 Server</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Additional Information */}
        <section className="bg-white rounded-2xl p-6 mb-10">
          <h2 className="size-lg font-bold text-secondary mb-4">Yderligere Information</h2>
          <ul className="space-y-2 text-sm text-primary">
            <li>Mødestabil</li>
            <li>Ikke ryger</li>
            <li>Kørekort kategori B</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
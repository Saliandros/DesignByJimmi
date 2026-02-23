import { FiDownload, FiChevronDown, FiUser, FiPhone, FiMapPin } from "react-icons/fi";
import { useState } from "react";

export default function CV() {
  const [previousEducationOpen, setPreviousEducationOpen] = useState(false);

  const handleDownloadPDF = () => {
    // PDF download functionality will be added here
    console.log("Download PDF");
  };

  return (
    <main>
      <header className="cv-header">
      </header>

      <article className="cv-body">
        {/* Personal Info */}
        <section className="cv-section cv-section-primary">
          <h2 className="cv-section-title">Personlige oplysninger</h2>
          <figure className="cv-profile">
            <img
              src="/assets/image/Jimmi.jpg"
              alt="Profilbillede"
              className="cv-profile-image"
            />
            <figcaption className="cv-profile-content">
              <p className="cv-profile-heading">Om mig</p>
              <p>Jeg er i gang som professionsbachelor i webudvikling på Aarhus Erhvervesakademi, hvor jeg arbejder med React, JavaScript, CSS og meget mere. Som full-stack developer har jeg også kendskab til backend med Node.js & Express samt databaser som NoSQL og SQL. Før webudvikling har jeg færdiggjort multimediedesigner, som har givet mig erfaring med digital design. Jeg har også færdiggjort IT-supporter, som har givet mig erfaring med PowerShell samt netværk.</p>
            </figcaption>
          </figure>
          <div className="cv-contact">
            <address className="cv-contact-address">
              <p className="cv-contact-row">
                <FiUser className="cv-contact-icon" aria-hidden="true" />
                Jimmi Berg Larsen
              </p>
              <p className="cv-contact-row">
                <FiPhone className="cv-contact-icon" aria-hidden="true" />
                +45 30 53 64 14
              </p>
              <p className="cv-contact-row">
                <FiMapPin className="cv-contact-icon" aria-hidden="true" />
                Kollegievænget 3, 8700 Horsens
              </p>
            </address>
            <div className="cv-download">
              <p className="cv-download-text">Du kan også downloade mit CV her.</p>
              <button
                onClick={handleDownloadPDF}
                className="cv-download-button"
              >
                <FiDownload className="cv-download-icon" />
                Download mit CV
              </button>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="cv-section cv-section-card">
          <h2 className="cv-section-title">Uddannelse</h2>
          <article className="cv-entry">
            <h3 className="cv-entry-title">Webudvikler - Igangværende</h3>
            <p className="cv-entry-meta">Aarhus Erhvervesakademi - 2025 - 2027</p>
            <p className="cv-entry-role">Speciale - Full-Stack developer</p>
            <p className="cv-entry-description">En praksisnær uddannelse inden for webudvikling, hvor jeg lærer at udvikle moderne webapplikationer med fokus på både frontend og backend. Uddannelsen omfatter teknologier som React, JavaScript, HTML og CSS samt databasehåndtering og API-integration.</p>
          </article>
        </section>

        {/* Previous Education */}
        <section className="cv-section cv-section-card cv-section-hover">
          <button
            onClick={() => setPreviousEducationOpen(!previousEducationOpen)}
            className="cv-toggle"
          >
            <h2 
              className="cv-toggle-title"
              style={previousEducationOpen ? { color: 'var(--color-accent-active)' } : {}}
            >
              Tidligere uddannelser
            </h2>
            <div className={`cv-toggle-icon ${previousEducationOpen ? 'cv-toggle-icon--open' : ''}`}>
              <FiChevronDown className="cv-toggle-chevron" />
            </div>
          </button>
          <div
            className={`cv-toggle-content ${previousEducationOpen ? 'cv-toggle-content--open' : ''}`}
          >
            <div className="cv-toggle-list">
              <article className="cv-entry">
                <h3 className="cv-entry-title">Multimediedesigner</h3>
                <p className="cv-entry-meta">Erhvervesakademi Midtvest - 2023 - 2025</p>
                <p className="cv-entry-description">En komprehensiv uddannelse inden for digital design og multimedieproduktion. Læring om grafisk design, videobehandling, webdesign og brugergrænsefladedesign med fokus på kreative og funktionelle løsninger.</p>
              </article>
              <article className="cv-entry">
                <h3 className="cv-entry-title">IT-Supporter</h3>
                <p className="cv-entry-meta">Mercentec Viborg - 2015 - 2019</p>
                <p className="cv-entry-description">En erhvervsuddannelse med praktik inden for IT-support og systembeherskelse. Uddannelsen gav mig erfaringer med brugeradministration, troubleshooting, netværk og grundlæggende systemadministration.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="cv-section cv-section-card">
          <h2 className="cv-section-title">Arbejdserfaring</h2>
          <div className="cv-stack">
            <article className="cv-entry">
              <h3 className="cv-entry-title">Praktikant - Digital Design</h3>
              <p className="cv-entry-meta">Flamingo Tours - 2025</p>
              <p className="cv-entry-description">Praktikforløb som del af Multimediedesigner-uddannelsen med fokus på digital design, markedsføringsmaterialer og brugeroplevelse.</p>
            </article>
            <article className="cv-entry">
              <h3 className="cv-entry-title">Uddannelses Ambassadør</h3>
              <p className="cv-entry-meta">Erhvervsakademi Midtvest - 2023 - 2025</p>
              <p className="cv-entry-description">Repræsenterede skolen ved studievalgsarrangementer, informerede kommende studerende og bidrog til at skabe et positivt læringsmiljø.</p>
            </article>
            <article className="cv-entry">
              <h3 className="cv-entry-title">Vikar</h3>
              <p className="cv-entry-meta">Temp-Team - 2022 - 2025</p>
              <p className="cv-entry-description">Diverse vikariater sideløbende med uddannelsen, herunder rengøring og serviceopgaver.</p>
            </article>
          </div>
        </section>

        {/* Leisure & Volunteer */}
        <section className="cv-section cv-section-card">
          <h2 className="cv-section-title">Fritid & Frivilligt arbejde</h2>
          <article className="cv-entry">
            <h3 className="cv-entry-title">Fredagsbar</h3>
            <p className="cv-entry-meta">Erhvervsakademi Midtvest - 2023 - 2025</p>
            <p className="cv-entry-description">Aktivt medlem af fredagsbaren hvor jeg hjalp med planlægning, arrangement og drift af sociale arrangementer for medstuderende.</p>
          </article>
        </section>

        {/* Languages */}
        <section className="cv-section cv-section-card">
          <h2 className="cv-section-title">Sprog</h2>
          <div>
            <h3 className="cv-subtitle">Flydende</h3>
            <ul className="cv-list">
              <li>Dansk - Modersmål</li>
              <li>Engelsk - Flydende</li>
            </ul>
          </div>
          <div>
            <h3 className="cv-subtitle">Skriftligt kendskab</h3>
            <ul className="cv-list">
              <li>Norsk</li>
              <li>Svensk</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="cv-section cv-section-card">
          <h2 className="cv-section-title">Færdigheder</h2>
          <div className="cv-skills">
            <article>
              <h3 className="cv-skill-title">Frontend</h3>
              <ul className="cv-list">
                <li>React & JavaScript</li>
                <li>CSS</li>
                <li>Git & GitHub</li>
              </ul>
            </article>
            <article>
              <h3 className="cv-skill-title">Backend</h3>
              <ul className="cv-list">
                <li>Node.js & Express</li>
                <li>PowerShell ISE & Scripting</li>
                <li>Netværk CCNA fra 2019</li>
                <li>Virtualisering</li>
              </ul>
            </article>
            <article>
              <h3 className="cv-skill-title">Databaser</h3>
              <ul className="cv-list">
                <li>Mongoose</li>
                <li>SQL</li>
                <li>SQL Databaser</li>
              </ul>
            </article>
            <article>
              <h3 className="cv-skill-title">OS-Erfaringer</h3>
              <ul className="cv-list">
                <li>Mac OS X Mavericks</li>
                <li>Windows XP/Vista/7/8/10</li>
                <li>Linux (Ubuntu, Mint)</li>
                <li>Windows 2012 R2 Server</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Additional Information */}
        <section className="cv-section cv-section-card">
          <h2 className="cv-section-title">Yderligere Information</h2>
          <ul className="cv-list cv-list-loose">
            <li>Ikke ryger</li>
            <li>Kørekort kategori B</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
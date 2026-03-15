import {
  FiDownload,
  FiChevronDown,
  FiUser,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import PageSidebar from "../components/PageSidebar.jsx";

const sidebarItems = [
  { label: "Uddannelse", href: "#uddannelse" },
  { label: "Arbejdserfaring", href: "#arbejdserfaring" },
  { label: "Fritid", href: "#fritid" },
  { label: "Sprog", href: "#sprog" },
  { label: "Færdigheder", href: "#faerdigheder" },
];

export default function CV() {
  const downloadUrl =
    "https://drive.google.com/uc?export=download&id=13bCOuTfu_HnEme5GShPVFWj4Q_vI289a";

  const [previousEducationOpen, setPreviousEducationOpen] = useState(false);
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const purpleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!purpleRef.current) return;
      const purpleTop = purpleRef.current.getBoundingClientRect().top;
      const links = document.querySelectorAll(".cv-grid-layout .page-sidebar-link");
      links.forEach((link) => {
        const { top, bottom } = link.getBoundingClientRect();
        const mid = (top + bottom) / 2;
        link.classList.toggle("page-sidebar-link--on-purple", mid >= purpleTop);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadPDF = () => {
    setShowDownloadPopup(true);

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setShowDownloadPopup(false);
    }, 3000);
  };

  return (
    <>
      {showDownloadPopup && <div className="cv-popup">Downloader CV...</div>}
      <section className="cv-blue-section">
          <div className="cv-body">
            <h2 className="heading-2">Personlige oplysninger</h2>
            <div className="cv-header-columns">
              <div className="cv-header-left">
                <img
                  src="/assets/image/HERO.webp"
                  alt="Profilbillede"
                  className="cv-profile-image"
                />
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
              </div>
              <div className="cv-header-right">
                <p className="cv-profile-heading">Om mig</p>
                <p>
                  Jeg er i gang som professionsbachelor i{" "}
                  <strong>webudvikling</strong> på Aarhus Erhvervsakademi, hvor
                  man på studiet arbejder med <strong>Frontend</strong>,{" "}
                  <strong>Backend</strong> og <strong>Databaser</strong>.
                  <br />
                  Jeg har kendskab til <strong>React</strong>,{" "}
                  <strong>JavaScript</strong>, <strong>Node.js</strong>,{" "}
                  <strong>Express</strong> og meget mere, og er altid åbent for
                  at lære mere.
                </p>
                <p style={{ marginTop: "0.75rem" }}>
                  For at kunne læse <strong>webudvikling</strong> har jeg
                  færdiggjort <strong>multimediedesigner</strong>, som har givet
                  mig erfaring med digital design.
                  <br />
                  Jeg har også uddannelsen{" "}
                  <strong>IT-supporter</strong>, hvilket har givet mig erfaring
                  med Software, jeg er derfor ret hurtig til at sætte mig ind i
                  dem.
                </p>
                <div className="cv-download" style={{ marginTop: "3rem", padding: 0, textAlign: "left" }}>
                  <p className="cv-download-text">
                    Du kan også downloade mit CV her.
                  </p>
                  <button
                    onClick={handleDownloadPDF}
                    className="cv-download-button"
                  >
                    <FiDownload className="cv-download-icon" />
                    Download mit CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cv-grid-layout">
          <PageSidebar items={sidebarItems} />
          <article className="cv-body cv-grid-content">
          {/* Education */}
          <section id="uddannelse" className="cv-section cv-section-card">
            <h2 className="heading-2">Uddannelse</h2>
            <article className="cv-entry">
              <h3 className="heading-3">Webudvikler - Igangværende</h3>
              <p className="cv-entry-meta">
                Aarhus Erhvervesakademi - 2025 - 2027
              </p>
              <p className="cv-entry-role">Speciale - Full-Stack developer</p>
              <p className="cv-entry-description">
                En praksisnær uddannelse inden for webudvikling, hvor jeg lærer
                at udvikle moderne webapplikationer med fokus på både frontend
                og backend. Uddannelsen omfatter teknologier som React,
                JavaScript, HTML og CSS samt databasehåndtering og
                API-integration.
              </p>
            </article>
          </section>

          {/* Previous Education */}
          <section className="cv-section cv-section-card cv-section-hover">
            <button
              onClick={() => setPreviousEducationOpen(!previousEducationOpen)}
              className="cv-toggle"
            >
              <h2
                className="heading-2"
                style={
                  previousEducationOpen
                    ? { color: "var(--color-accent-active)" }
                    : {}
                }
              >
                Tidligere uddannelser
              </h2>
              <div
                className={`cv-toggle-icon ${previousEducationOpen ? "cv-toggle-icon--open" : ""}`}
              >
                <FiChevronDown className="cv-toggle-chevron" />
              </div>
            </button>
            <div
              className={`cv-toggle-content ${previousEducationOpen ? "cv-toggle-content--open" : ""}`}
            >
              <div className="cv-toggle-list">
                <article className="cv-entry">
                  <h3 className="heading-3">Multimediedesigner</h3>
                  <p className="cv-entry-meta">
                    Erhvervesakademi Midtvest - 2023 - 2025
                  </p>
                  <p className="cv-entry-description">
                    En komprehensiv uddannelse inden for digital design og
                    multimedieproduktion. Læring om grafisk design,
                    videobehandling, webdesign og brugergrænsefladedesign med
                    fokus på kreative og funktionelle løsninger.
                  </p>
                </article>
                <article className="cv-entry">
                  <h3 className="heading-3">IT-Supporter</h3>
                  <p className="cv-entry-meta">
                    Mercentec Viborg - 2015 - 2019
                  </p>
                  <p className="cv-entry-description">
                    En erhvervsuddannelse med praktik inden for IT-support og
                    systembeherskelse. Uddannelsen gav mig erfaringer med
                    brugeradministration, troubleshooting, netværk og
                    grundlæggende systemadministration.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="arbejdserfaring" className="cv-section cv-section-card">
            <h2 className="heading-2">Arbejdserfaring</h2>
            <div className="cv-stack">
              <article className="cv-entry">
                <h3 className="heading-3">Praktikant - Digital Design</h3>
                <p className="cv-entry-meta">Flamingo Tours - 2025</p>
                <p className="cv-entry-description">
                  Praktikforløb som del af Multimediedesigner-uddannelsen med
                  fokus på digital design, markedsføringsmaterialer og
                  brugeroplevelse.
                </p>
              </article>
              <article className="cv-entry">
                <h3 className="heading-3">Uddannelses Ambassadør</h3>
                <p className="cv-entry-meta">
                  Erhvervsakademi Midtvest - 2023 - 2025
                </p>
                <p className="cv-entry-description">
                  Repræsenterede skolen ved studievalgsarrangementer,
                  informerede kommende studerende og bidrog til at skabe et
                  positivt læringsmiljø.
                </p>
              </article>
              <article className="cv-entry">
                <h3 className="heading-3">Vikar</h3>
                <p className="cv-entry-meta">Temp-Team - 2022 - 2025</p>
                <p className="cv-entry-description">
                  Diverse vikariater sideløbende med uddannelsen, herunder
                  rengøring og serviceopgaver.
                </p>
              </article>
            </div>
          </section>

          {/* Leisure & Volunteer */}
          <section id="fritid" className="cv-section cv-section-card">
            <h2 className="heading-2">Fritid & Frivilligt arbejde</h2>
            <article className="cv-entry">
              <h3 className="heading-3">Fredagsbar</h3>
              <p className="cv-entry-meta">
                Erhvervsakademi Midtvest - 2023 - 2025
              </p>
              <p className="cv-entry-description">
                Aktivt medlem af fredagsbaren hvor jeg hjalp med planlægning,
                arrangement og drift af sociale arrangementer for medstuderende.
              </p>
            </article>
          </section>
        </article>

        <section ref={purpleRef} className="cv-purple-section cv-grid-full">
          <div className="cv-body">
            {/* Languages */}
            <section id="sprog" className="cv-section cv-section-card">
              <h2 className="heading-2">Sprog</h2>
              <div>
                <h3 className="heading-3">Flydende</h3>
                <ul className="cv-list">
                  <li>Dansk - Modersmål</li>
                  <li>Engelsk - Flydende</li>
                </ul>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <h3 className="heading-3">Skriftligt kendskab</h3>
                <ul className="cv-list">
                  <li>Norsk</li>
                  <li>Svensk</li>
                </ul>
              </div>
            </section>

            {/* Skills */}
            <section id="faerdigheder" className="cv-section cv-section-card">
              <h2 className="heading-2">Færdigheder</h2>
              <div className="cv-skills">
                <article>
                  <h3 className="heading-3">Frontend</h3>
                  <ul className="cv-list">
                    <li>React & JavaScript</li>
                    <li>CSS</li>
                    <li>Git & GitHub</li>
                  </ul>
                </article>
                <article>
                  <h3 className="heading-3">Backend</h3>
                  <ul className="cv-list">
                    <li>Node.js & Express</li>
                    <li>PowerShell ISE & Scripting</li>
                    <li>Netværk CCNA fra 2019</li>
                    <li>Virtualisering</li>
                    <li>PHP</li>
                  </ul>
                </article>
                <article>
                  <h3 className="heading-3">Databaser</h3>
                  <ul className="cv-list">
                    <li>Mongoose</li>
                    <li>SQL</li>
                    <li>MySQL</li>
                  </ul>
                </article>
                <article>
                  <h3 className="heading-3">OS-Erfaringer</h3>
                  <ul className="cv-list">
                    <li>Mac OS X Mavericks</li>
                    <li>Windows XP/Vista/7/8/10</li>
                    <li>Linux (Ubuntu, Mint)</li>
                    <li>Windows 2012 R2 Server</li>
                  </ul>
                </article>
                <article>
                  <h3 className="heading-3">CMS systemer</h3>
                  <ul className="cv-list">
                    <li>WordPress</li>
                  </ul>
                </article>
              </div>
            </section>

            {/* Additional Information */}
            <section className="cv-section cv-section-card">
              <h2 className="heading-2">Yderligere Information</h2>
              <ul className="cv-list cv-list-loose">
                <li>Ikke ryger</li>
                <li>Kørekort kategori B</li>
              </ul>
            </section>
          </div>
        </section>
        </div>
    </>
  );
}

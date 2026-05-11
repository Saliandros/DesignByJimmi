import { SiGithub, SiExpo } from "react-icons/si";
import { FiCalendar } from "react-icons/fi";
import PageSidebar from "../../components/PageSidebar.jsx";

const sidebarItems = [
  { label: "Overblik", href: "#overblik" },
  { label: "Hvad er StickerSmash?", href: "#indhold-01" },
  { label: "Tech stack", href: "#indhold-02" },
  { label: "Funktioner", href: "#indhold-03" },
];

export default function StickerSmashProject() {
  return (
    <>
      {/* Dark header */}
      <section className="project-header">
        <div className="cv-body">
          <h1 className="heading-1">StickerSmash</h1>
          <div className="project-header-columns">
            <div className="project-header-left">
              <img
                src="/assets/image/HERO.webp"
                alt="StickerSmash"
                className="cv-profile-image"
              />
              <address className="cv-contact-address">
                <p className="cv-contact-row">
                  <FiCalendar className="cv-contact-icon" aria-hidden="true" />
                  April 2026
                </p>
                <a
                  href="https://github.com/Saliandros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-link"
                >
                  <SiGithub className="project-github-icon" aria-hidden="true" />
                  Se på GitHub
                </a>
              </address>
            </div>
            <div className="project-header-right">
              <p className="cv-profile-heading">Tech Stack</p>
              <ul className="cv-list">
                <li>React Native</li>
                <li>Expo</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content with sidebar */}
      <article className="cv-body">
        <div className="page-with-sidebar">
          <PageSidebar items={sidebarItems} />
          <div className="project-cv-content">

            <section id="overblik" className="cv-section cv-section-card">
              <div className="project-overview-grid">
                <div>
                  <h2 className="heading-2">Om projektet</h2>
                  <p>
                    StickerSmash er en mobilapp bygget med{" "}
                    <strong>React Native</strong> og <strong>Expo</strong>.
                    Appen giver brugerne mulighed for at vælge et billede fra
                    deres galleri og dekorere det med sjove stickers.
                  </p>
                  <p className="mt-075">
                    Projektet er mit første dyk ned i{" "}
                    <strong>cross-platform mobiludvikling</strong> — samme
                    kodebase kører på både iOS og Android.
                  </p>
                </div>
              </div>
            </section>

            <section id="indhold-01" className="cv-section cv-section-card">
              <h2 className="heading-2">Hvad er StickerSmash?</h2>
              <p>
                StickerSmash er en legende app, hvor du kan tage et billede
                eller vælge et fra dit galleri og derefter placere stickers
                ovenpå. Det færdige billede kan gemmes direkte til din
                telefon.
              </p>
              <p className="mt-075">
                Projektet tog udgangspunkt i Expo's officielle tutorial, men
                er videreudviklet med egne tilpasninger og løsninger undervejs.
                Det gav en solid introduktion til React Native's komponent-
                model og hvordan den adskiller sig fra web-React.
              </p>
            </section>

            <section id="indhold-02" className="cv-section cv-section-card">
              <h2 className="heading-2">Tech stack</h2>
              <p>
                Appen er bygget med <strong>React Native</strong> via{" "}
                <strong>Expo</strong>, som gør det nemt at komme i gang med
                mobiludvikling uden at skulle sætte et fuldt native
                udviklingsmiljø op.
              </p>
              <p className="mt-075">
                Expo håndterer build-processen og giver adgang til
                telefonens native API'er som kameraet og billedgalleriet
                gennem færdige pakker som{" "}
                <strong>expo-image-picker</strong> og{" "}
                <strong>expo-media-library</strong>.
              </p>
            </section>

            <section id="indhold-03" className="cv-section cv-section-card">
              <h2 className="heading-2">Funktioner</h2>
              <ul className="cv-list mt-075">
                <li>Vælg billede fra telefonens galleri</li>
                <li>Placer og flyt stickers frit på billedet</li>
                <li>Gem det færdige billede til galleriet</li>
                <li>Kører på iOS, Android og web via Expo</li>
              </ul>
            </section>

          </div>
        </div>
      </article>
    </>
  );
}

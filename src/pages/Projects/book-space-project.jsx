import { SiGithub } from "react-icons/si";
import { FiCalendar } from "react-icons/fi";
import PageSidebar from "../../components/PageSidebar.jsx";

const sidebarItems = [
  { label: "Overblik", href: "#overblik" },
  { label: "Hvad er Book Space?", href: "#indhold-01" },
  { label: "Tech stack", href: "#indhold-02" },
  { label: "Funktioner", href: "#indhold-03" },
];

export default function BookSpaceProject() {
  return (
    <>
      {/* Dark header */}
      <section className="project-header">
        <div className="cv-body">
          <h1 className="heading-1">Book Space</h1>
          <div className="project-header-columns">
            <div className="project-header-left">
              <img
                src="/assets/image/HERO.webp"
                alt="Book Space"
                className="cv-profile-image"
              />
              <address className="cv-contact-address">
                <p className="cv-contact-row">
                  <FiCalendar className="cv-contact-icon" aria-hidden="true" />
                  April 2026
                </p>
                <a
                  href="https://github.com/eaaa-dob-wu-e25a/awu-exam-Saliandros"
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
                <li>React 19</li>
                <li>Vite</li>
                <li>React Router</li>
                <li>CSS Modules</li>
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
                    Book Space er en digital boghylde-applikation bygget som
                    eksamensprojekt. Appen giver brugerne mulighed for at
                    opdage nye bøger, søge i et bogkatalog og bygge en
                    personlig samling.
                  </p>
                  <p className="mt-075">
                    Projektet er udviklet med{" "}
                    <strong>React</strong> og <strong>Vite</strong> og følger
                    den samme komponentbaserede arkitektur og CSS-struktur som
                    mit portfolio.
                  </p>
                </div>
              </div>
            </section>

            <section id="indhold-01" className="cv-section cv-section-card">
              <h2 className="heading-2">Hvad er Book Space?</h2>
              <p>
                Book Space er et eksamensprojekt fra min professionsbachelor
                som Webudvikler på EAAA. Ideen er at skabe en platform, der
                fungerer som brugerens digitale boghylde — et sted man kan
                holde styr på bøger man har læst, er i gang med, eller gerne
                vil læse.
              </p>
              <p className="mt-075">
                Projektet tager udgangspunkt i et reelt brugerbehov: det er
                svært at huske hvilke bøger man har læst og hvad man synes om
                dem. Book Space løser dette ved at samle det hele ét sted.
              </p>
            </section>

            <section id="indhold-02" className="cv-section cv-section-card">
              <h2 className="heading-2">Tech stack</h2>
              <p>
                Applikationen er bygget med <strong>React 19</strong> og{" "}
                <strong>Vite</strong> som build-tool. Routing håndteres af{" "}
                <strong>React Router</strong>, og styling følger den samme
                modulære CSS-arkitektur som dette portfolio — med CSS custom
                properties og en klar opdeling i base, layout, komponenter og
                sider.
              </p>
              <p className="mt-075">
                Valget af tech stack er bevidst: det er den samme stack som
                portfolioet, hvilket giver en ensartet og velkendt
                udviklingsoplevelse og gør det nemt at vedligeholde begge
                projekter parallelt.
              </p>
            </section>

            <section id="indhold-03" className="cv-section cv-section-card">
              <h2 className="heading-2">Funktioner</h2>
              <p>Book Space indeholder følgende kernefunktioner:</p>
              <ul className="cv-list mt-075">
                <li>Søgning og filtrering i bogkatalog</li>
                <li>Personlig boghylde — gem dine bøger</li>
                <li>Bogkort med titel, forfatter og genre</li>
                <li>Responsivt design til mobil og desktop</li>
                <li>Tilgængelighed med ARIA-labels og tastaturnavigation</li>
              </ul>
            </section>

          </div>
        </div>
      </article>
    </>
  );
}

import { SiGithub } from "react-icons/si";
import { FiCalendar } from "react-icons/fi";
import PageSidebar from "../../components/PageSidebar.jsx";

const sidebarItems = [
  { label: "Overblik", href: "#overblik" },
  { label: "Fra ide til produkt", href: "#indhold-01" },
];

export default function LineUp() {
  return (
    <>
      {/* Dark header */}
      <section className="project-header">
        <div className="cv-body">
          <h1 className="heading-1">LineUp</h1>
          <div className="project-header-columns">
            <div className="project-header-left">
              <img
                src="/assets/image/projectimage/lineup-img.svg"
                alt="LineUp"
                className="cv-profile-image"
                style={{ objectFit: "contain", backgroundColor: "#FFCF70", borderRadius: "0.75rem" }}
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
                <li>React 19</li>
                <li>React Router</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Supabase (PostgreSQL)</li>
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
                    LineUp er det afsluttende projekt fra <strong>Semester 1</strong>. Vi blev indelt i grupper,
                    hvor vi skulle bygge et projekt fra bunden. Vi valgte at supplere med <strong>Tailwind CSS</strong> for
                    at afprøve dette som alternativ til traditionel CSS.
                  </p>
                  <p className="mt-075">
                    Projektet som I kan se er et <strong>forked repository</strong>, da jeg valgte at arbejde videre
                    på projektet efter semesteret og derfor ikke ønskede at skulle henvende mig til resten af gruppen.
                  </p>
                  <p className="mt-075">
                    I gruppearbejdet var opgaverne fordelt og styret via <strong>GitHub Projects</strong>.
                    Dette gav os et godt overblik over opgaverne og gjorde det nemt at holde styr på, hvem der arbejdede på hvad,
                    og hvilke opgaver der var i gang, færdige eller endnu ikke påbegyndte.
                  </p>
                </div>
              </div>
            </section>

            <section id="indhold-01" className="cv-section cv-section-card">
              <h2 className="heading-2">Fra ide til produkt</h2>
              <p>
                Vi startede ugen ud med at få udleveret et <strong>Figma design</strong>, hvor projektet
                skulle ligge så tæt op af som muligt.
              </p>
              <p className="mt-075">
                Jeg stod selv for <strong>Onboarding</strong>, <strong>Chat</strong> samt <strong>venne-funktionen</strong>.
                Så jeg holdt mig primært inden for frontend under første fase af projektet.
              </p>
              <p className="mt-075">
                I anden fase, hvor jeg valgte at <strong>forke projektet</strong>, valgte jeg også at hoste en ny database
                for at få backend- og databaseviden med. Databasen er hosted ved <strong>Supabase</strong>, som er en
                relationel database baseret på <strong>PostgreSQL</strong>.
              </p>
              <p className="mt-075">
                I forbindelse med databasen lavede jeg et <strong>ER-diagram</strong> — udarbejdet i samarbejde med
                ChatGPT da jeg skulle normalisere til <strong>3. normalform</strong>. Diagrammet kan ses herunder.
              </p>
              <img
                src="/assets/image/PortfolioDB.svg"
                alt="ER diagram for LineUp databasen"
                className="project-content-image"
                loading="lazy"
              />
            </section>

          </div>
        </div>
      </article>
    </>
  );
}

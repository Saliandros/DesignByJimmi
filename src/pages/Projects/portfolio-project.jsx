import { Link } from "react-router-dom";
import { SiGithub } from "react-icons/si";
import { FiCalendar } from "react-icons/fi";
import PageSidebar from "../../components/PageSidebar.jsx";

const sidebarItems = [
  { label: "Overblik", href: "#overblik" },
  { label: "Indhold placeholder", href: "#indhold-01" },
  { label: "Note placeholder", href: "#note-02" },
  { label: "Note placeholder", href: "#note-03" },
];

export default function PortfolioProject() {
  return (
    <>
      {/* Dark header */}
      <section className="project-header">
        <div className="cv-body">
          <h1 className="heading-1">Portfolio Website</h1>
          <div className="project-header-columns">
            <div className="project-header-left">
              <img
                src="/assets/image/HERO.webp"
                alt="Portfolio Website"
                className="cv-profile-image"
              />
              <address className="cv-contact-address">
                <p className="cv-contact-row">
                  <FiCalendar className="cv-contact-icon" aria-hidden="true" />
                  Januar 2026
                </p>
                <a
                  href="https://github.com/Saliandros/Saliandros.dk"
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

            {/* Overview + note links */}
            <section className="cv-section cv-section-card">
              <div className="project-overview-grid">
                <div>
                  <h2 className="heading-2">Om projektet</h2>
                  <p>
                    Mit personlige portfolio website bygget fra bunden med{" "}
                    <strong>React</strong> og <strong>Vite</strong>. Siden
                    fungerer som en showcase for mine projekter og færdigheder,
                    og er designet med fokus på brugervenlighed, animationer og
                    et rent visuelt udtryk.
                  </p>
                  <p className="mt-075">
                    Projektet har været en løbende læringsproces, hvor jeg har
                    eksperimenteret med <strong>CSS clip-path</strong>,
                    keyframe-animationer og komponentbaseret arkitektur.
                  </p>
                </div>
                <div>
                  <h2 className="heading-2">Noter</h2>
                  <ul className="project-notes-index">
                    <li>
                      <Link to="/projects/portfolio/note-placeholder" className="project-note-link">
                        Note placeholder
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects/portfolio/note-placeholder" className="project-note-link">
                        Note placeholder
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects/portfolio/note-placeholder-2" className="project-note-link">
                        Note placeholder
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Content sections — sidebar navigates here */}
            <section id="indhold-01" className="cv-section cv-section-card">
              <h2 className="heading-2">Indhold placeholder</h2>
              <p>Indhold kommer her.</p>
            </section>

            <section id="note-02" className="cv-section cv-section-card">
              <h2 className="heading-2">Note placeholder</h2>
              <p>Indhold kommer her.</p>
            </section>

            <section id="note-03" className="cv-section cv-section-card">
              <h2 className="heading-2">Note placeholder</h2>
              <p>Indhold kommer her.</p>
            </section>

          </div>
        </div>
      </article>
    </>
  );
}

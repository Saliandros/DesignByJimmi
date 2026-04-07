import { FiCalendar } from "react-icons/fi";
import PageSidebar from "../../components/PageSidebar.jsx";

const sidebarItems = [
  { label: "Overblik", href: "#overblik" },
  { label: "Placeholder", href: "#indhold-01" },
];

export default function GroupAppProject() {
  return (
    <>
      {/* Dark header */}
      <section className="project-header">
        <div className="cv-body">
          <h1 className="heading-1">Gruppe App</h1>
          <div className="project-header-columns">
            <div className="project-header-left">
              <img
                src="/assets/image/HERO.webp"
                alt="Gruppe App"
                className="cv-profile-image"
              />
              <address className="cv-contact-address">
                <p className="cv-contact-row">
                  <FiCalendar className="cv-contact-icon" aria-hidden="true" />
                  Placeholder dato
                </p>
              </address>
            </div>
            <div className="project-header-right">
              <p className="cv-profile-heading">Tech Stack</p>
              <ul className="cv-list">
                <li>Placeholder</li>
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
                  <p>Placeholder beskrivelse.</p>
                </div>
              </div>
            </section>

            <section id="indhold-01" className="cv-section cv-section-card">
              <h2 className="heading-2">Placeholder</h2>
              <p>Placeholder indhold.</p>
            </section>

          </div>
        </div>
      </article>
    </>
  );
}

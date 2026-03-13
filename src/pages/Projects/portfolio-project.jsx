import { Link } from "react-router-dom";
import { SiGithub } from "react-icons/si";
import { FiCalendar } from "react-icons/fi";
import PageSidebar from "../../components/PageSidebar.jsx";

const sidebarItems = [
  { label: "Overblik", href: "#overblik" },
  { label: "Fra ide til produkt", href: "#indhold-01" },
  { label: "Optimering af siden", href: "#indhold-02" },
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
                {/* <div>
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
                </div> */}
              </div>
            </section>

            {/* Content sections — sidebar navigates here */}
            <section id="indhold-01" className="cv-section cv-section-card">
              <h2 className="heading-2">Fra ide til produkt</h2>
              <p>
                Jeg havde tidligere et portfolio bygget i <strong>WordPress</strong> fra min tid som multimediedesigner. 
                Da jeg startede på min professionsbachelor som <strong>Webudvikler</strong>, lærte vi om moderne 
                frontend-teknologier som React, Vite og komponentbaseret udvikling. Det blev hurtigt klart, at min 
                gamle side ikke længere afspejlede mine nuværende kompetencer.
              </p>
              <p className="mt-075">
                Jeg valgte bevidst <strong>ikke at inkludere Node.js</strong> eller anden backend-teknologi i projektet. 
                For et portfolio er et <strong>statisk site</strong> mere end rigeligt – det er hurtigere, nemmere at hoste, 
                og demonstrerer stadig mine frontend-færdigheder på bedste vis.
              </p>
              <p className="mt-075">
                <strong>Farvepaletten</strong> er inspireret af de teknologier jeg elsker: Bootstrap's <strong>lilla</strong> nuancer 
                kombineret med React's karakteristiske <strong>blå</strong> toner. Jeg bruger lilla og hvid til at bryde den blå 
                farve og skabe kontrast gennem hele sitet.
              </p>
              <p className="mt-075">
                Typografisk har jeg valgt <strong>Montserrat</strong> som font. Den udstråler elegance og samtidig god læsbarhed, 
                hvilket passer perfekt til et portfolio. Det eneste kompromis er, at det er en Google Font, som loader eksternt 
                når siden åbnes – men for mig vejer det elegante udtryk tungere end de få ekstra millisekunder i load-tid.
              </p>
              <p className="mt-075">
                Alle billeder på siden har afrundede hjørner gennem <strong>border-radius</strong>. Dette skaber et blødere, 
                mere moderne udtryk og får billederne til at flyde bedre sammen med resten af designet. De skarpe hjørner 
                brydes, hvilket giver et mere tilgængeligt og venligt indtryk – perfekt til et portfolio der skal vise 
                både professionalisme og personlighed.
              </p>
            </section>

            <section id="indhold-02" className="cv-section cv-section-card">
              <h2 className="heading-2">Optimering af siden</h2>
              <p>
                Performance og bæredygtighed har været vigtige fokuspunkter i udviklingen. Jeg har kørt omfattende tests 
                gennem <strong>Lighthouse</strong>, <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="link-style-body">PageSpeed Insights</a> og{" "}
                <a href="https://www.websitecarbon.com/" target="_blank" rel="noopener noreferrer" className="link-style-body">Website Carbon</a>{" "}
                for at sikre, at siden både er hurtig og miljøvenlig.
              </p>
              <p className="mt-075">
                Alle billeder er konverteret til <strong>WebP-format</strong> og komprimeret til en balanceret kvalitet. 
                Derudover bruger alle billeder <strong>lazy loading</strong>, hvilket betyder at de først loades når de skal 
                vises på skærmen. Selvom det betyder en lille reduktion i billedkvalitet, er det en acceptabel trade-off for web – 
                og resultatet er betydeligt hurtigere load-tider og mindre databrug.
              </p>
              <p className="mt-075">
                SEO har også været i fokus. Jeg har optimeret meta-tags, alt-tekster og heading-struktur for at sikre, 
                at siden rangerer godt i søgemaskinerne. Det handler ikke kun om at vise mine projekter – men også om at 
                <strong> blive fundet</strong>.
              </p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}

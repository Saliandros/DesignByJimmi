import { SiGithub } from "react-icons/si";
import Typewriter from "../../components/writers/typewriter";

export default function PortfolioProject() {
  return (
    <main>
      <section className="project-overview">
        <div className="project-overview-about">
          <h1 className="heading-1">Portfolio Website</h1>
          <p className="project-overview-date">29. januar 2026</p>
          <p className="project-overview-text">
            Mit personlige portfolio website bygget fra bunden med React og
            Vite. Siden fungerer som en showcase for mine projekter og
            færdigheder, og er designet med fokus på brugervenlighed,
            animationer og et rent visuelt udtryk.
          </p>
          <p className="project-overview-text">
            Projektet har været en løbende læringsproces, hvor jeg har
            eksperimenteret med CSS clip-path, keyframe-animationer og
            komponentbaseret arkitektur.
          </p>
          <a
            href="https://github.com/Saliandros/Saliandros.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="link-style project-github-link"
          >
            <SiGithub className="project-github-icon" aria-hidden="true" />
            <span>Se på GitHub</span>
          </a>
        </div>

        <div className="project-overview-media">
          <img
            src="/assets/image/Jimmi.webp"
            alt="Portfolio Website"
            className="cv-profile-image"
          />
          <div className="project-overview-typewriter">
            <Typewriter
              words={["React", "Vite", "CSS", "JavaScript", "React Router"]}
              prefix="Tech stack: "
            />

          </div>
        </div>
      </section>

      <section className="project-process">
        <h2 className="heading-2">Processen</h2>
        <ol className="project-process-list">
          <li className="project-process-step">
            <span className="project-process-number">01</span>
            <div className="project-process-content">
              <h3 className="heading-3">Idé og planlægning</h3>
              <p>
                Startede med at skitsere layoutet og definere hvilke sider og
                komponenter der skulle til. Besluttede tidligt at gå med React
                og Vite for hurtig udvikling og nem deployment.
              </p>
            </div>
          </li>
          <li className="project-process-step">
            <span className="project-process-number">02</span>
            <div className="project-process-content">
              <h3 className="heading-3">Design og styling</h3>
              <p>
                Byggede et designsystem med CSS-variabler for farver, fonte og
                spacing. Eksperimenterede med clip-path trekanter som
                designelement på tværs af sider.
              </p>
            </div>
          </li>
          <li className="project-process-step">
            <span className="project-process-number">03</span>
            <div className="project-process-content">
              <h3 className="heading-3">Komponent-arkitektur</h3>
              <p>
                Opdelte siden i genanvendelige komponenter — hero, bio, tools,
                projektkort og kontaktformular. Brugte React Router til
                klientsiderouting.
              </p>
            </div>
          </li>
          <li className="project-process-step">
            <span className="project-process-number">04</span>
            <div className="project-process-content">
              <h3 className="heading-3">Animationer og polish</h3>
              <p>
                Tilføjede slide-in og fade-up animationer til hero-sektionen,
                en typewriter-effekt og hover-interaktioner for at give siden
                liv og personlighed.
              </p>
            </div>
          </li>
        </ol>
      </section>
    </main>
  );
}

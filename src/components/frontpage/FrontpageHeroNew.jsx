import { SiLinkedin, SiGithub } from "react-icons/si";
import TypewriterSimple from "../writers/TypewriterSimple";

export default function FrontpageHeroNew() {
  return (
    <section className="new-hero">
      <div className="new-hero-text">
        <span className="new-hero-typewriter">
          <TypewriterSimple
            words={[
              "UX/UI-design",
              "React",
              "Databaser",
              "IT-sikkerhed",
              "Webudvikling",
            ]}
            prefix="Skal vi lave: "
            initialDelay={2200}
          />
        </span>
        <h1 className="new-hero-h1">Jimmi Larsen</h1>
        <h2 className="new-hero-h2">Webudvikler</h2>
        <li className="hero-socialmedia-row hero-socialmedia new-hero-socialmedia">
          <a
            href="https://www.linkedin.com/in/jimmi-larsen/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profil"
            className="link-style hero-socialmedia-linkedin"
          >
            <SiLinkedin className="hero-socialmedia-icon" aria-hidden="true" />
            <span className="hero-socialmedia-label">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Saliandros"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profil"
            className="link-style hero-socialmedia-github"
          >
            <SiGithub className="hero-socialmedia-icon" aria-hidden="true" />
            <span className="hero-socialmedia-label">GitHub</span>
          </a>
        </li>
      </div>

      <img
        src="/assets/image/Jimmi.webp"
        alt="Billede af Jimmi Berg Larsen"
        className="new-hero-image"
      />
    </section>
  );
}

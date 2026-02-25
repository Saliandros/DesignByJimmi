import { SiLinkedin, SiGithub } from "react-icons/si";
import Typewriter from "../writers/typewriter";
import ContactForm from "../form/contactform";

export default function FrontpageHero() {
  return (
    <section className="page-section hero">
      <article className="hero-content">
        <Typewriter
          words={["Omhyggelig", "Hjælpsom", "Kreativ", "Passioneret", "Nysgerrig"]}
          prefix="Som person er jeg: "
        />
        <h1 className="heading-1">Velkommen til mit portfolio</h1>
        <p className="hero-p">
          Hej, Jeg er Jimmi Berg Larsen. Webudvikler under uddannelse, og dette
          er mit portfolio.<br></br> Her kan du finde eksempler på mine
          projekter og faerdigheder.
        </p>
        <p className="hero-p">
          Jeg er passioneret omkring webudvikling og elsker at skabe
          brugervenlige og æstetisk tiltalende webapplikationer.
        </p>
        <p className="hero-p">Man kan følge mig her:</p>
        <ul className="hero-socialmedia">
          <li className="hero-socialmedia-row">
            <a
              href="https://www.linkedin.com/in/jimmi-larsen/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profil"
              className="link-style hero-socialmedia-linkedin"
            >
              <SiLinkedin
                className="hero-socialmedia-icon"
                aria-hidden="true"
              />
              <span className="hero-socialmedia-label">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Saliandros"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profil"
              className="link-style hero-socialmedia-github"
            >
              <SiGithub
                className="hero-socialmedia-icon"
                aria-hidden="true"
              />
              <span className="hero-socialmedia-label">GitHub</span>
            </a>
          </li>
        </ul>
      </article>

      <img
        src="/assets/image/Jimmi.webp"
        alt="Billede af Jimmi Berg Larsen"
        className="hero-image"
      />
    </section>
  );
}

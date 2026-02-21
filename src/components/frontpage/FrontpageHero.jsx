import { SiLinkedin, SiGithub } from "react-icons/si";

export default function FrontpageHero() {
  return (
    <section className="frontpage-hero">
      <article className="frontpage-hero-content">
        <h1 className="frontpage-hero-heading">
          Velkommen til mit portfolio
        </h1>
        <p className="frontpage-hero-p">
          Hej, Jeg er Jimmi Berg Larsen. Webudvikler under uddannelse, og
          dette er mit portfolio.<br></br> Her kan du finde eksempler på mine
          projekter og faerdigheder.
        </p>
        <p className="frontpage-hero-p">
          Jeg er passioneret omkring webudvikling og elsker at skabe
          brugervenlige og æstetisk tiltalende webapplikationer.
        </p>
        <p className="frontpage-hero-p">man kan følge mig her:</p>
        <ul className="frontpage-hero-socialmedia">
          <li className="frontpage-hero-socialmedia-row">
            <a
              href="https://www.linkedin.com/in/jimmi-larsen/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profil"
              className="link-style frontpage-hero-socialmedia-linkedin"
            >
              <SiLinkedin className="frontpage-hero-socialmedia-icon" aria-hidden="true" />
              <span className="frontpage-hero-socialmedia-label">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Saliandros"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profil"
              className="link-style frontpage-hero-socialmedia-github"
            >
              <SiGithub className="frontpage-hero-socialmedia-icon" aria-hidden="true" />
              <span className="frontpage-hero-socialmedia-label">GitHub</span>
            </a>
          </li>
        </ul>
      </article>

      <img
        src="/assets/image/Jimmi.png"
        alt="Picture of Jimmi Berg Larsen"
        className="frontpage-hero-image"
      />
    </section>
  );
}

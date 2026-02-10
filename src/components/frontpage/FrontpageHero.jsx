import { SiLinkedin, SiGithub } from "react-icons/si";

export default function FrontpageHero() {
  return (
    <section className="frontpage-hero fade-in slide-up">
      <article className="frontpage-hero__copy">
        <h1 className="frontpage-hero__title">
          Velkommen til mit portfolio
        </h1>
        <p>
          Hej, Jeg er Jimmi Berg Larsen. Webudvikler under uddannelse, og
          dette er mit portfolio.<br></br> Her kan du finde eksempler paa mine
          projekter og faerdigheder.
        </p>
        <p className="frontpage-hero__paragraph">
          Jeg er passioneret omkring webudvikling og elsker at skabe
          brugervenlige og aestetisk tiltalende webapplikationer.
        </p>
        <p className="frontpage-hero__paragraph">man kan foelge mig her:</p>
        <ul className="frontpage-hero__social">
          <li className="frontpage-hero__social-row">
            <a
              href="https://www.linkedin.com/in/jimmi-larsen/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profil"
              className="frontpage-hero__social-link frontpage-hero__social-link--linkedin"
            >
              <SiLinkedin className="frontpage-hero__social-icon" aria-hidden="true" />
              <span className="frontpage-hero__social-label">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Saliandros"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profil"
              className="frontpage-hero__social-link frontpage-hero__social-link--github"
            >
              <SiGithub className="frontpage-hero__social-icon" aria-hidden="true" />
              <span className="frontpage-hero__social-label">GitHub</span>
            </a>
          </li>
        </ul>
      </article>

      <img
        src="/assets/image/Jimmi.jpg"
        alt="Picture of Jimmi Berg Larsen"
        className="frontpage-hero__image"
      />
    </section>
  );
}

import TypewriterSimple from "../writers/TypewriterSimple";

export default function FrontpageBio() {
  return (
    <section className="page-section bio">
      <article className="hero-content">
        <h2 className="heading-2">Om mig</h2>
        <p className="hero-p">
          Hej, jeg er Jimmi Berg Larsen — webudvikler under uddannelse på Aarhus
          Erhvervsakademi. Dette er mit portfolio, hvor du kan finde eksempler på
          mine projekter og færdigheder.
        </p>
        <p className="hero-p">
          Jeg er passioneret omkring webudvikling og elsker at skabe
          brugervenlige og æstetisk tiltalende webapplikationer — fra idé til
          færdigt produkt.
        </p>
        <p className="hero-p">
          Læs mere om mig på <a href="/about" className="link-style-body">About</a>
        </p>
      </article>

      <img
        src="/assets/image/Jimmi.webp"
        alt="Billede af Jimmi Berg Larsen"
        className="hero-image"
      />
    </section>
  );
}

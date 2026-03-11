export default function FrontpageBio() {
  return (
    <section className="page-section bio">
      <article className="hero-content">
        <h2 className="heading-2">Om mig</h2>
        <p className="hero-p">
          Hej der! Mit navn er Jimmi Larsen, og jeg er lidt af en IT-nørd. Mit
          interesse for IT startede som helt lille med computerspil, som jeg
          senere har brugt som springbræt i forhold til karrierevej.
        </p>
        <p className="hero-p">
          I dag læser jeg til Webudvikler på Aarhus Erhvervsakademi. Jeg elsker
          at skabe brugervenlige, men også æstetiske produkter, og det her er
          mit portfolio, hvor man kan se de programmer jeg har lavet.
        </p>
        <p className="hero-p">
          Læs mere om mig på <a href="/about" className="link-style-body">About</a>
        </p>
      </article>

      <img
        src="/assets/image/Jimmi.webp"
        alt="Billede af Jimmi Berg Larsen"
        className="hero-image"
        loading="eager"
        fetchpriority="high"
      />
    </section>
  );
}

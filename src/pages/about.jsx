import Typewriter from "../components/writers/typewriter";

export default function About() {
  return (
    <main>
      {/* Hvem er jeg — projekt-layout med billede + typewriter */}
      <section className="project-overview">
        <div className="project-overview-about">
          <h1 className="heading-1">Hvem er jeg?</h1>
          <p className="project-overview-text">
            Hej! Jeg er Jimmi Berg Larsen — en nysgerrig og omhyggelig
            webudvikler under uddannelse på Aarhus Erhvervsakademi. Jeg er
            vokset op med en stor kærlighed til teknologi og kreativitet, og
            webudvikling er stedet hvor de to ting mødes for mig.
          </p>
          <p className="project-overview-text">
            Jeg er ikke kun kode og skærme. Jeg er en person der sætter pris
            på gode samtaler, fællesskab og at hjælpe andre — og det afspejler
            sig i måden jeg tilgår mit arbejde på.
          </p>
        </div>

        <div className="project-overview-media">
          <img
            src="/assets/image/Jimmi.webp"
            alt="Billede af Jimmi Berg Larsen"
            className="cv-profile-image"
          />
          <div className="project-overview-typewriter">
            <Typewriter
              words={["Omhyggelig", "Hjælpsom", "Kreativ", "Passioneret", "Nysgerrig"]}
              prefix="Som person er jeg: "
            />
          </div>
        </div>
      </section>

      <section className="about-content-wrapper">
      <article className="about-body">
        {/* Hvordan jeg arbejder */}
        <section className="about-section about-section-card">
          <h2 className="heading-2">Hvordan jeg arbejder</h2>
          <p>
            Jeg er en person der godt kan lide at forstå tingene — ikke bare
            få dem til at virke. Når jeg sidder med et problem bruger jeg tid
            på at finde ud af <em>hvorfor</em> det er et problem, før jeg
            kaster mig over løsningen. Det gør at mine løsninger holder
            længere og er nemmere for andre at arbejde videre med.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Jeg skriver kode som om en anden skal læse den — for det skal de
            som regel. Jeg tænker over navngivning, struktur og om tingene
            giver mening uden at man skal gætte sig til det. Det er ikke
            perfektionisme, det er respekt for fremtidigt arbejde.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Jeg trives bedst i et miljø hvor der er plads til at stille
            spørgsmål, prøve sig frem og lære undervejs. Jeg er ikke bange for
            at sige "det ved jeg ikke" — men jeg er heller ikke bange for at
            finde svaret. Og når jeg finder det, deler jeg det gerne.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Samarbejde er vigtigt for mig. Jeg bidrager aktivt i grupper, lytter
            til andres perspektiver og er god til at finde kompromiser der
            fungerer for alle. Jeg tror på at det bedste arbejde sker når folk
            føler sig hørt.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Vil du se mine konkrete færdigheder, uddannelse og arbejdserfaring?{" "}
            <a href="/cv" className="link-style about-cv-link">Se mit CV</a>
          </p>
        </section>

        {/* Fritid */}
        <section className="about-section about-section-card">
          <h2 className="heading-2">Hvad laver jeg uden for arbejde?</h2>
          <p>
            Jeg er et socialt menneske og sætter stor pris på fællesskab. Jeg
            har i en periode været aktivt med i fredagsbaren på min uddannelse,
            hvor vi arrangerede sociale events og skabte et godt miljø for
            medstuderende. Den slags er vigtig for mig — at folk har det godt
            og føler sig inkluderet.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Udover det følger jeg med i hvad der sker inden for teknologi og
            webudvikling. Jeg elsker at eksperimentere med nye frameworks,
            koncepter og designs — ikke fordi jeg skal, men fordi jeg synes
            det er sjovt. Nysgerrighed er min motor.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Og så kan jeg godt lide at spille spil, høre musik og bare koble
            af med gode venner. Balance er vigtigt.
          </p>
        </section>
      </article>
      </section>
    </main>
  );
}

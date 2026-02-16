import Typewriter from "../components/writers/typewriter.jsx";

export default function About() {
  return (
    <main>
      <header className="cv-header">
        <div className="cv-header__inner">
          <h1 className="cv-title">Om mig</h1>
        </div>
      </header>

      <article className="cv-body">
        <section className="cv-section cv-section--primary">
          <h2 className="cv-section__title">Hvem er jeg?</h2>
          <p className="cv-profile__content">
            Jeg hedder Jimmi Berg Larsen og er en passioneret full-stack
            developer baseret i Horsens, Danmark. Mit fokus er på at skabe
            moderne, brugervenlige webapplikationer med fokus på både design og
            funktionalitet. Jeg er i gang med en professionsbachelor i
            webudvikling på Aarhus Erhvervesakademi.
          </p>
        </section>

        <section className="cv-section cv-section--card">
          <h2 className="cv-section__title">Min baggrund</h2>
          <p>
            Jeg har en bred baggrund inden for IT og design. Jeg startede med
            IT-support i 2015, skiftede til multimediedesign i 2023, og er nu
            fuldt dedikeret til webudvikling. Denne vej har givet mig en stor
            værktøjskasse til at tackle komplekse problemer ud fra flere
            perspektiver.
          </p>
        </section>

        <section className="cv-section cv-section--card">
          <h2 className="cv-section__title">Min tilgang</h2>
          <p>
            Jeg tror på at bygge software, der ikke kun fungerer, men også
            glæder brugerne. Jeg prioriterer:
          </p>
          <ul className="cv-list">
            <li>Brugervenlighed og tilgængelighed</li>
            <li>Ren, vedligeholdelsbar kode</li>
            <li>Skalerbare arkitekturer</li>
            <li>Kontinuerlig læring og forbedring</li>
          </ul>
        </section>

        <section className="cv-section cv-section--card">
          <h2 className="cv-section__title">Tech stack</h2>
          <Typewriter
            words={["React", "Node.js", "JavaScript", "CSS", "SQL", "Git"]}
            prefix="Jeg arbejder med: "
          />
          <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
            Og meget mere! Se min CV for en fuld liste over mine færdigheder.
          </p>
        </section>

        <section className="cv-section cv-section--card">
          <h2 className="cv-section__title">Hvad laver jeg uden for arbejde?</h2>
          <p>
            Når jeg ikke code'r, nyder jeg at være blandt mennesker. Jeg er
            aktiv medlem af fredagsbaren på min uddannelse, hvor jeg hjælper
            til med at arrangere sociale events. Jeg holder også af at lære
            nye teknologier og følge med i udviklingen af web'ens landskap.
          </p>
        </section>
      </article>
    </main>
  );
}
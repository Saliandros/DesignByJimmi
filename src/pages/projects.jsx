import AllProjects from "../components/cards/allprojects.jsx";

export default function Projects() {
  return (
    <main>
      <header className="cv-header">
        <div className="cv-header__inner">
          <h1 className="cv-title">Projekter</h1>
        </div>
      </header>

      <article className="cv-body">
        <section className="cv-section cv-section--primary">
          <h2 className="cv-section__title">Udvalgte projekter</h2>
          <p className="cv-profile__content">
            Her finder du projekter, jeg har bygget med fokus paa design,
            brugervenlighed og stabil kode. Jeg opdaterer listen loebende,
            saa du altid kan se de nyeste projekter.
          </p>
        </section>

        <section className="cv-section cv-section--card">
          <h2 className="cv-section__title">Alle projekter</h2>
          <AllProjects />
        </section>
      </article>
    </main>
  );
}
export default function PrivacyPolicy() {
  return (
    <main>
      <header className="cv-header">
        <div className="cv-header__inner">
          <h1 className="heading-1">Privatlivspolitik</h1>
        </div>
      </header>

      <article className="cv-body">
        <section className="cv-section cv-section-card">
          <h2 className="heading-2">Om denne politik</h2>
          <p>
            Denne privatlivspolitik beskriver, hvordan jeg behandler dine
            personoplysninger på denne hjemmeside. Jeg er forpligtet til at
            beskytte dine oplysninger og respektere dit privatliv.
          </p>
        </section>

        <section className="cv-section cv-section-card">
          <h2 className="heading-2">Indsamling af data</h2>
          <p>
            Jeg indsamler kun de oplysninger, der er nødvendige for at drive
            hjemmesiden. Dette kan omfatte:
          </p>
          <ul className="cv-list">
            <li>Dit navn og e-mail, hvis du kontakter mig via kontaktformularen</li>
            <li>Din IP-adresse og enhedens information (via almindelige log-filer)</li>
            <li>Anonyme analysedata via Google Analytics</li>
          </ul>
        </section>

        <section className="cv-section cv-section-card">
          <h2 className="heading-2">Brug af data</h2>
          <p>Dine oplysninger bruges alene til at:</p>
          <ul className="cv-list">
            <li>Besvare dine henvendelser</li>
            <li>Forbedre hjemmesidens indhold og funktionalitet</li>
            <li>Analysere brugen af hjemmesiden</li>
          </ul>
        </section>

        <section className="cv-section cv-section-card">
          <h2 className="heading-2">Dine rettigheder</h2>
          <p>
            Du har ret til at anmode om adgang til, rettelse af eller sletning
            af dine personoplysninger. Du kan også tilbagetrække dit samtykke
            til behandling af dine data når som helst.
          </p>
        </section>

        <section className="cv-section cv-section-card">
          <h2 className="heading-2">Kontakt</h2>
          <p>
            Hvis du har spørgsmål til denne privatlivspolitik eller ønsker at
            udøve dine rettigheder, kan du kontakte mig via kontaktformularen.
          </p>
        </section>
      </article>
    </main>
  );
}
export default function About() {
  return (
    <main>
      <section className="new-hero">
        <div className="new-hero-text">
          <h1 className="new-hero-h1">Jimmi Larsen</h1>
          <h2 className="new-hero-h2">Webudvikler</h2>
        </div>

        <img
          src="/assets/image/Jimmi.webp"
          alt="Billede af Jimmi Berg Larsen"
          className="new-hero-image"
        />
      </section>

      <section className="about-content-wrapper">
        <article className="about-body">
          {/* Intro */}
          <section className="about-section about-section-card">
            <h2 className="heading-2">Hej der! Mit navn er Jimmi Larsen.</h2>
            <p>
              Jeg er 30 år, jeg brænder for at lave det gode produkt til kunden,
              og har altid været meget kvalitetsbevidst.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Min interesse startede som 7-årig, hvor jeg første gang fik
              bekendtskab med Diablo 2 Lord of Destruction, som har været med
              til at forme mig til det jeg er i dag. Som barn ville jeg være
              "sådan en der laver computerspil", da vidste jeg dog ikke at det
              hed en Programmør. Men da det ikke er så udbredt i Danmark, har
              jeg valgt at kigge efter min anden passion, nemlig at hjælpe andre
              mennesker med deres problemer.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Min måde at hjælpe på er igennem kreativitet og IT, og det er det
              der til sidst landede mig på Webudvikleren på Aarhus Erhvervsakademi.
              Jeg er ret kvalitetsbevidst, og elsker når kunden går smilende ud
              af døren efter en god service.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Men vejen her hen har ikke været lige ud af landevejen. Jeg startede
              mit voksenliv uden rigtig at vide hvad jeg ville, og har prøvet lidt
              af hvert, fra lastbilchauffør til elektriker, inden jeg til sidst
              slog mig ned i IT som IT-supporter. Jeg har derfor en ret stærk
              IT-profil, og kan hurtigt sætte mig ind i nye programmer og kodesprog.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Vil du se mine konkrete færdigheder, uddannelse og arbejdserfaring?{" "}
              <a href="/cv" className="link-style-body">Se mit CV</a>
            </p>
          </section>

          {/* Rejsen her til */}
          <section className="about-section about-section-card">
            <h2 className="heading-2">Rejsen her til</h2>
            <p>
              Jeg voksede op i pleje på en gård nær Ikast og Brande, og det er
              jeg faktisk ret glad for. Det var et sted der lærte mig at tage
              ansvar, arbejde hårdt og sætte pris på fællesskab. Mange af mine
              værdier kommer derfra, og dem jeg voksede op med har haft en kæmpe
              betydning for hvem jeg er i dag.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Nemlig en kæmpe dyreelsker, som ikke kunne lade programmer som
              "Den Blå Planet" være da jeg var lille. Der var noget ved den
              nysgerrighed, at sidde og absorbere verden og forstå hvordan
              tingene hang sammen. Og hvis du spørger mig i dag, er det den
              samme nysgerrighed der dengang fik mig til at stirre på skærmen i
              timevis, der ledte mig ind i computerspil som så ledte mig ind i
              IT og webudvikling.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Man kan sige med den baggrund, hvorfor fortsatte jeg så ikke som
              IT-supporter? Det skyldes et brændende ønske om at blive
              programmør. I forbindelse med at jeg kom til at lege med WordPress
              og PowerShell Scripting fandt jeg vejen. Jeg skulle være
              Datamatiker, og jeg søgte den retning med stor entusiasme. Men der
              var noget galt. Jeg manglede det grafiske som jeg også elsker, og
              koden alene føltes ikke som nok. Så efter 2 semestre stoppede jeg
              og fandt en ny retning, nemlig Multimediedesigner, som kombinerede
              det tekniske og det kreative på en måde der gav mening for mig.
              Det uddannelsesforløb har jeg brugt som springbræt til at kunne
              læse Webudvikler, og det er præcis det rigtige sted for mig at
              være.
            </p>
          </section>

          {/* Fritid */}
          <section className="about-section about-section-card">
            <h2 className="heading-2">Hvad laver jeg uden for arbejde?</h2>
            <p>
              Jeg er et socialt menneske og sætter stor pris på fællesskab. En
              stor del af det sociale for mig finder faktisk sted foran skærmen,
              nemlig i MMORPGs. WoW, ESO og FFXIV er mine absolutte favoritter,
              og ikke kun fordi gameplayet er fedt. Det er de verdener der er
              bygget op, historierne bag dem og ikke mindst de mennesker man
              møder undervejs. Guilds og fællesskaber i de her spil er lige så
              rigtige som dem man møder ansigt til ansigt. Jeg tager også gerne
              til meet-ups, hvor man kan sætte ansigt på dem man spiller med
              online.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Uden for PCen har jeg en lille men knyttet vennegruppe. Vi er 3
              gutter der har kendt hinanden siden 4. klasse, og det siger noget
              om os at vi stadig holder godt fast i hinanden i dag. Vi tager
              jævnligt ud og spiser, ser film i biografen og sørger for at holde
              os opdaterede på hinandens liv. Den slags venskaber tager man ikke
              for givet.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Og så er der musikken. Når jeg ikke spiller, laver jeg den selv.
              Det er en anden slags kreativitet end webudvikling, men den samme
              nysgerrighed driver det. Og hvis hverken spil eller musik kalder,
              er der altid et nyt framework at eksperimentere med. Der er altid
              noget at lege med, og det er sådan jeg godt kan lide det.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}

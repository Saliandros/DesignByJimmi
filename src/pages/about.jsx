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
            <p className="mt-075">
              Min interesse startede som 7-årig, hvor jeg første gang mødte
              Diablo 2 Lord of Destruction, som har været med
              til at forme min interesse inden for IT. Som barn ville jeg være
              "sådan en der laver computerspil", da vidste jeg dog ikke at det
              hed en game-developer, og som ikke er så udbredt i Danmark.
              Jeg valgte da at kigge efter min anden passion, nemlig at hjælpe andre
              mennesker med deres IT-problemer.
            </p>
            <p className="mt-075">
              Jeg har altid haft det nemmere med IT, og det har også altid sagt mig meget,
              som  ledte mig til at søge vejen som IT-Supporter, en uddannelse der til sidst
              påvirkede mig til at søge Webudvikleren på Aarhus Erhvervsakademi.
              Jeg er ret kvalitetsbevidst, og elsker når kunden går smilende ud
              af døren efter en god service.
            </p>
            <p className="mt-075">
              Ud over det tekniske har jeg en stor passion for det kreative, og det er også
              en af grundene til at jeg valgte Webudvikleren, da det kombinerer det tekniske og
              det kreative på en måde der giver mening for mig. Jeg elsker at bygge ting, og
              det er præcis det jeg gør når jeg koder. Det er en kreativ proces hvor jeg kan
              skabe noget ud af ingenting, og det er virkelig tilfredsstillende.
            </p>
            <p className="mt-075">
              Vil du se mine konkrete færdigheder, uddannelse og arbejdserfaring?{" "}
              <a href="/cv" className="link-style-body">Se mit CV</a>
            </p>
          </section>

          {/* Rejsen her til */}
          <section className="about-section about-section-card">
            <h2 className="heading-2">Rejsen her til Webudvikleren</h2>
            <p>
              Jeg voksede op i pleje på en gård nær Ikast, en del af min midtjyske opvækst
              som har formet mig meget. Her var vi 8 børn som i dag er voksne mennesker med
              forskellige veje i livet, men den gang hjalp vi med at få alt til at løbe rundt.
              Mange af mine værdier og min tilgang til livet, som jeg har i dag, stammer fra den tid.
            </p>
            <p className="mt-075">
              Efter folkeskolen vidste jeg ikke hvad jeg ville med mit liv, så jeg startede på Lastbil Chauffør uddannelsen
              på Learnmark i Horsens, men det var ikke det rigtige for mig, og jeg stoppede efter første semester.
              Jeg havde altid haft en interesse for IT, men den gang ville jeg ikke gøre Hobby til job.
              Jeg startede på IT-supporter uddannelsen på Herning Erhvervsskole efter at have prøvet kræfter med Elektrikeren.
              Det var en god oplevelse, og jeg lærte meget om IT-support og kundeservice og udvidede min horisont inden for IT og Software.
            </p>
            <p className="mt-075">
              Så med den baggrund, hvorfor fortsatte jeg egentlig ikke som
              IT-supporter? Det var fordi jeg ville være programmør.
              Da jeg begyndte at lege med WordPress
              og PowerShell Scripting fandt jeg vejen. Jeg skulle være
              Datamatiker, og jeg søgte den retning med stor entusiasme. Men jeg
              manglede det grafiske.
              Koden alene var fedt men jeg har også altid godt kunne lide det visuelle.
              Jeg valgte derfor at finde en ny retning, nemlig Multimediedesigner, som kombinerede
              det tekniske og det kreative på en måde der gav mening for mig.
              Det uddannelsesforløb har jeg brugt som springbræt til at kunne
              toppe den op med Webudvikler, og det er præcis det rigtige sted for mig at
              være.
            </p>
          </section>

          {/* Fritid */}
          <section className="about-section about-section-card">
            <h2 className="heading-2">Hvad laver jeg uden for arbejde?</h2>
            <p>
              Jeg er et socialt menneske og sætter stor pris på fællesskab. En
              stor del af det sociale sker faktisk foran skærmen,
              nemlig i MMORPGs, som jeg også bruger til at koble af med.
              Jeg kan godt lide verdenerne og atmosfæren i den her type spil.
            </p>
            <p className="mt-075">
              Uden for PCen har jeg en lille men knyttet vennegruppe. Vi er 3
              gutter der har kendt hinanden siden 4. klasse, og det siger noget
              om os at vi stadig holder godt fast i hinanden i dag. Vi tager
              jævnligt ud og spiser, ser film i biografen og sørger for at holde
              os opdaterede på hinandens liv. Den slags venskaber tager man ikke
              for givet.
            </p>
            <p className="mt-075">
              Udover det har jeg stor passion for dyr, noget der kommer fra min opvækst
              på gården, vi har altid haft både hunde og katte. En passion der førte mig til at skulle se,
              alle afsnit af "Den Blå Planet" som lille, og som har udvidet til mere end de mere almindelige.
              Jeg har faktisk min egen kat, her er hun:
            </p>
            <img
              src="/assets/image/cat.webp"
              alt="Jimmis kat"
              className="about-cat-image"
            />
            <p className="mt-075">
              Men det er ikke bare de almindelige husdyr, jeg har også en stor interesse for eksotiske dyr, og jeg har altid drømt om at have en slange eller en øgle som kæledyr.
              Jeg har dog ikke haft mulighed.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}

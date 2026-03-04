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
              Diablo 2 Lord of Destruction, som har været med til at forme min
              interesse inden for IT. Som barn ville jeg være{" "}
              <em>&ldquo;sådan en der laver computerspil&rdquo;</em>, da vidste
              jeg dog ikke at det hed en <strong>game-developer</strong>, og som
              ikke er et udbredt fag i Danmark. Jeg valgte da at kigge efter min
              anden passion, nemlig at hjælpe andre mennesker med deres
              IT-problemer.
            </p>
            <p className="mt-075">
              Jeg har altid haft det nemt med IT, og det har også altid sagt mig
              meget, hvilket ledte mig til at søge vejen som{" "}
              <strong>IT-Supporter</strong> &ndash; en uddannelse der til sidst
              påvirkede mig til at søge <strong>Webudvikleren</strong> på Aarhus
              Erhvervsakademi. Jeg er ret kvalitetsbevidst, og elsker når kunden
              går smilende ud ad døren efter en god service.
            </p>
            <p className="mt-075">
              Ud over det tekniske har jeg en stor passion for det kreative, og
              det er også en af grundene til, at jeg valgte{" "}
              <strong>Webudvikleren</strong>, da det kombinerer det tekniske og
              det kreative på en måde, der giver mening for mig. Jeg elsker at
              bygge ting &ndash; det er præcis det jeg gør når jeg koder. Det er
              en kreativ proces, hvor jeg kan skabe noget ud af ingenting, og det
              er virkelig tilfredsstillende.
            </p>
            <p className="mt-075">
              Vil du se mine konkrete færdigheder, uddannelse og
              arbejdserfaring?{" "}
              <a href="/cv" className="link-style-body">
                Se mit CV
              </a>
            </p>
          </section>

          {/* Rejsen her til */}
          <section className="about-section about-section-card">
            <h2 className="heading-2">Rejsen her til Webudvikleren</h2>
            <p>
              Jeg voksede op i pleje på en gård nær Ikast. Den del af min
              midtjyske opvækst har formet mig meget. Her var vi 8 børn, som i
              dag er voksne mennesker med forskellige veje i livet. Vi har altid
              hjulpet til at få tingene til at løbe rundt. Mange af mine værdier
              og min tilgang til livet, som jeg har i dag, stammer fra den tid.
            </p>
            <p className="mt-075">
              Efter folkeskolen vidste jeg ikke, hvad jeg ville med mit liv, så
              jeg startede på{" "}
              <strong>Lager &amp; Logistik-uddannelsen</strong> på Learnmark i
              Horsens. Det var ikke det rigtige for mig, og jeg stoppede efter
              første semester. Jeg havde altid haft en interesse for IT, men den
              gang ville jeg ikke gøre hobby til job. Jeg startede på{" "}
              <strong>IT-supporter-uddannelsen</strong> på Herning Erhvervsskole
              efter at have prøvet kræfter med{" "}
              <strong>Elektriker-uddannelsen</strong>. Det var en god oplevelse,
              som lærte mig meget om IT-support og kundeservice og den udvidede
              også min horisont inden for IT og Software.
            </p>
            <p className="mt-075">
              Hvorfor fortsatte jeg egentlig ikke som IT-supporter? kunne man
              tænke. Det var, fordi jeg ville være programmør, en barndomsdrøm
              der stammer helt tilbage fra Diablo 2 Lord of Destruction.
              <br />
              På IT-Supporteren begyndte at lege med WordPress og PowerShell
              Scripting, som hjalp mig til at finde vejen. Jeg skulle være
              Datamatiker, og jeg søgte den retning med stor entusiasme, men jeg
              fandt ret hurtigt ud af at jeg manglede det grafiske. Kodningen
              alene var fedt, men jeg har også altid godt kunne lide det
              visuelle. Jeg valgte derfor at finde en ny retning, nemlig{" "}
              <strong>Multimediedesigner-uddannelsen</strong>, som kombinerede
              det tekniske og det kreative på en måde, der gav mening for mig.
              Det uddannelsesforløb har jeg brugt som springbræt til at kunne
              toppe den op med Webudvikleren, og det er præcis det rigtige sted
              for mig at være.
            </p>
          </section>

          {/* Fritid */}
          <section className="about-section about-section-card">
            <h2 className="heading-2">Hvad laver jeg uden for arbejde?</h2>
            <div className="about-cat-layout">
              <img
                src="/assets/image/cat.webp"
                alt="Billede af Michella"
                className="about-cat-image"
              />
              <div>
                <p>
                  Jeg er et socialt menneske og sætter stor pris på fællesskab.
                  En stor del af det sociale sker faktisk foran skærmen, nemlig
                  i MMORPGs, som jeg også bruger til at koble af med. Jeg kan
                  godt lide verdenerne, historierne og atmosfæren i den her type
                  spil.
                </p>
                <p className="mt-075">
                  Uden for PCen har jeg en lille men tætknyttet vennegruppe. Vi
                  er 3 gutter, der har kendt hinanden siden 4. klasse. Det siger
                  noget om os, at vi stadig holder godt fast i hinanden i dag.
                  Vi tager jævnligt ud og spiser, ser film i biografen og sørger
                  for at holde os opdaterede på hinandens liv. Den slags
                  venskaber tager man ikke for givet.
                </p>
                <p className="mt-075">
                  Udover det har jeg stor passion for dyr, noget der kommer fra
                  min opvækst på gården. Vi har altid haft både hunde og katte.
                  En passion, der førte mig til at skulle se alle afsnit af{" "}
                  <em>&ldquo;Den Blå Planet&rdquo;</em> som lille, og som har
                  udvidet min passion for dyr som helhed. Jeg har faktisk min
                  egen kat, her er hun.
                </p>
                <p className="mt-075">
                  Men det er ikke bare de almindelige husdyr. Jeg har også en
                  stor interesse for eksotiske dyr, og jeg har altid drømt om at
                  have en slange eller en øgle som kæledyr. Jeg har dog ikke
                  haft mulighed.
                </p>
              </div>
            </div>
          </section>
        </article>
      </section>
    </main>
  );
}

export default function PrivacyPolicy() {
  return (
    <main>
      <section className="new-hero">
        <div className="new-hero-text">
          <h1 className="new-hero-h1">Privatlivspolitik</h1>
          <h2 className="new-hero-h2">Dine data, din tryghed</h2>
        </div>
      </section>

      <section className="about-content-wrapper">
        <article className="about-body">

          <section className="about-section about-section-card">
            <h2 className="heading-2">Dataansvarlig</h2>
            <p>
              Den dataansvarlige for denne hjemmeside er:
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              <strong>Jimmi Berg Larsen</strong><br />
              Kontakt via kontaktformularen på denne hjemmeside.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Denne politik er sidst opdateret den <strong>1. marts 2026</strong> og gælder
              for behandling af personoplysninger i forbindelse med besøg på
              saliandros.dk.
            </p>
          </section>

          <section className="about-section about-section-card">
            <h2 className="heading-2">Hvad er personoplysninger?</h2>
            <p>
              Personoplysninger er enhver form for information, der direkte
              eller indirekte kan identificere en fysisk person — f.eks. navn,
              e-mailadresse eller IP-adresse. Denne hjemmeside behandler
              personoplysninger i overensstemmelse med EU's
              databeskyttelsesforordning (GDPR, forordning 2016/679).
            </p>
          </section>

          <section className="about-section about-section-card">
            <h2 className="heading-2">Hvilke oplysninger indsamles — og hvorfor?</h2>

            <h3 className="heading-3" style={{ marginTop: "1rem" }}>1. Kontaktformular</h3>
            <p>
              Når du udfylder kontaktformularen, indsamles følgende oplysninger:
            </p>
            <ul className="cv-list" style={{ marginTop: "0.5rem" }}>
              <li>Fornavn og efternavn</li>
              <li>E-mailadresse</li>
              <li>Din besked</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>
              <strong>Formål:</strong> At besvare din henvendelse.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              <strong>Retsgrundlag:</strong> GDPR artikel 6, stk. 1, litra b (opfyldelse af en
              anmodning du selv har indsendt) samt litra f (legitim interesse i
              at kunne kommunikere med besøgende).
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              <strong>Databehandler:</strong> Formularen sender dine oplysninger til
              tjenesten <strong>Formspree</strong> (formspree.io), som videresender
              beskeden til mig via e-mail. Formspree er en amerikansk virksomhed
              og fungerer som databehandler. Overførslen er dækket af
              Formsprees egne databehandleraftaler i overensstemmelse med GDPR.
              Du kan læse Formsprees privatlivspolitik på{" "}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style-body"
              >
                formspree.io/legal/privacy-policy
              </a>.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              <strong>Opbevaring:</strong> Dine oplysninger opbevares kun så længe det er
              nødvendigt for at besvare din henvendelse og er herefter ikke
              tilgængelige via hjemmesiden. Formspree opbevarer data i henhold
              til deres egne retningslinjer.
            </p>

            <h3 className="heading-3" style={{ marginTop: "1.5rem" }}>2. Server-logs (Netlify)</h3>
            <p>
              Hjemmesiden er hostet på <strong>Netlify</strong> (Netlify, Inc., USA).
              Netlify genererer automatisk server-logs ved hvert sidebesøg.
              Disse logs indeholder typisk:
            </p>
            <ul className="cv-list" style={{ marginTop: "0.5rem" }}>
              <li>IP-adresse</li>
              <li>Tidspunkt for besøget</li>
              <li>Den side der er besøgt</li>
              <li>Browser og styresystem (User-Agent)</li>
              <li>Henvisende hjemmeside (Referrer), hvis relevant</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>
              <strong>Formål:</strong> Driftssikkerhed, fejlfinding og beskyttelse mod
              misbrug.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              <strong>Retsgrundlag:</strong> GDPR artikel 6, stk. 1, litra f (legitim
              interesse i at sikre stabil og sikker drift af hjemmesiden).
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              <strong>Opbevaring:</strong> Server-logs opbevares typisk i 30 dage og
              styres af Netlify. Du kan læse Netlifys privatlivspolitik på{" "}
              <a
                href="https://www.netlify.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style-body"
              >
                netlify.com/privacy
              </a>.
            </p>

            <h3 className="heading-3" style={{ marginTop: "1.5rem" }}>3. Google Fonts</h3>
            <p>
              Hjemmesiden bruger skrifttyper (Montserrat, Roboto Slab og Roboto)
              fra Googles skrifttypeservice, Google Fonts. Skrifttyperne
              indlæses fra Googles servere via{" "}
              <strong>fonts.googleapis.com</strong>, hvilket betyder at din
              IP-adresse automatisk sendes til Google ved hvert sidebesøg —
              uanset om du interagerer med hjemmesiden eller ej.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              <strong>Formål:</strong> Visuel præsentation af hjemmesiden med de valgte
              skrifttyper.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              <strong>Retsgrundlag:</strong> GDPR artikel 6, stk. 1, litra f (legitim
              interesse i at levere et visuelt konsistent design).
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              <strong>Datamodtager:</strong> Google LLC, USA. Google kan behandle data i
              USA, som er et tredjeland uden for EU/EØS. Overførslen sker i
              henhold til Googles{" "}
              <a
                href="https://privacy.google.com/businesses/processorterms/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style-body"
              >
                databehandlervilkår
              </a>{" "}
              og EU's{" "}
              <a
                href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style-body"
              >
                standardkontraktbestemmelser (SCC)
              </a>. Du kan læse mere om Googles generelle datapraksis på{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style-body"
              >
                policies.google.com/privacy
              </a>.
            </p>
          </section>

          <section className="about-section about-section-card">
            <h2 className="heading-2">JavaScript og teknologi på siden</h2>
            <p>
              Denne hjemmeside er bygget som en React-applikation og kræver
              JavaScript for at fungere korrekt. Her er en oversigt over hvad
              JavaScript bruges til — og hvad det <em>ikke</em> bruges til:
            </p>
            <ul className="cv-list" style={{ marginTop: "0.75rem" }}>
              <li>
                <strong>React (UI-bibliotek):</strong> Bruges til at bygge og opdatere
                sidens indhold i browseren. Sender ingen data til eksterne
                servere.
              </li>
              <li>
                <strong>React Router:</strong> Håndterer navigation mellem sider
                uden at genindlæse siden. Sender ingen data eksternt.
              </li>
              <li>
                <strong>React Icons:</strong> Viser ikoner som SVG-grafik direkte i
                browseren. Ingen ekstern kommunikation.
              </li>
              <li>
                <strong>Kontaktformular:</strong> Sender dine indtastede oplysninger
                til Formspree, kun når du aktivt trykker "Send".
              </li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>
              Siden bruger <strong>ikke</strong>:
            </p>
            <ul className="cv-list" style={{ marginTop: "0.5rem" }}>
              <li>Cookies sat af siden selv</li>
              <li>localStorage eller sessionStorage til at gemme persondata</li>
              <li>Sporings- eller analysesoftware (f.eks. Google Analytics)</li>
              <li>Reklamenetværk eller tredjepartssporing</li>
              <li>Fingerprinting-teknologier</li>
            </ul>
          </section>

          <section className="about-section about-section-card">
            <h2 className="heading-2">Cookies</h2>
            <p>
              Denne hjemmeside sætter selv ingen cookies. Google Fonts-anmodningen
              kan dog resultere i at Google sætter cookies i din browser i
              forbindelse med sin infrastruktur. Du kan administrere og slette
              cookies i din browsers indstillinger.
            </p>
          </section>

          <section className="about-section about-section-card">
            <h2 className="heading-2">Videregivelse af oplysninger</h2>
            <p>
              Dine personoplysninger videregives ikke til tredjeparter med
              henblik på markedsføring eller salg. Oplysninger deles kun med:
            </p>
            <ul className="cv-list" style={{ marginTop: "0.75rem" }}>
              <li>
                <strong>Formspree</strong> — som databehandler for
                kontaktformularen
              </li>
              <li>
                <strong>Google LLC</strong> — modtager automatisk din IP-adresse
                via Google Fonts
              </li>
              <li>
                <strong>Netlify, Inc.</strong> — opbevarer server-logs som
                led i hosting af hjemmesiden
              </li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>
              Der overføres data til USA (Google, Formspree, Netlify). Overførslen sker
              på grundlag af EU's{" "}
              <a
                href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style-body"
              >
                standardkontraktbestemmelser (SCC)
              </a>{" "}
              og/eller de pågældende virksomheders certificeringer under EU-US
              Data Privacy Framework.
            </p>
          </section>

          <section className="about-section about-section-card">
            <h2 className="heading-2">Dine rettigheder</h2>
            <p>
              Som registreret har du efter GDPR følgende rettigheder. Det er
              vigtigt at forstå, hvad jeg som dataansvarlig reelt har adgang
              til: når du indsender kontaktformularen, modtager jeg en
              e-mail via Formspree. Jeg gemmer ikke dine oplysninger i en
              database — de eneste persondata jeg selv besidder, er den
              e-mail der lander i min indbakke.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Det betyder at for størstedelen af rettighederne nedenfor skal
              du henvende dig direkte til de tredjeparter der rent faktisk
              opbevarer dine data — primært{" "}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style-body"
              >
                Formspree
              </a>{" "}
              og{" "}
              <a
                href="https://www.netlify.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style-body"
              >
                Netlify
              </a>.
              Jeg besvarer alle henvendelser rettet til mig inden for 30 dage.
            </p>

            <h3 className="heading-3" style={{ marginTop: "1.25rem" }}>Ret til indsigt (art. 15)</h3>
            <p>
              Jeg kan give dig indsigt i den e-mail jeg har modtaget fra dig.
              For oplysninger opbevaret hos Formspree (formulardata) og
              Netlify (server-logs) skal du kontakte dem direkte — de er
              databehandlere og har deres egne procedurer for indsigtsanmodninger.
            </p>

            <h3 className="heading-3" style={{ marginTop: "1.25rem" }}>Ret til berigtigelse (art. 16)</h3>
            <p>
              Hvis den e-mail jeg har modtaget fra dig indeholder fejlagtige
              oplysninger, kan du kontakte mig og bede om at jeg noterer
              rettelsen. For data hos Formspree og Netlify skal du kontakte
              dem direkte.
            </p>

            <h3 className="heading-3" style={{ marginTop: "1.25rem" }}>Ret til sletning (art. 17)</h3>
            <p>
              Du kan anmode om at jeg sletter den e-mail jeg har modtaget fra
              dig. Det vil jeg gøre. For sletning af formulardata hos
              Formspree og server-logs hos Netlify skal du kontakte dem
              direkte. Bemærk: Netlifys server-logs indeholder IP-adresser der
              ikke er knyttet direkte til dig som person — de slettes automatisk
              efter 30 dage.
            </p>

            <h3 className="heading-3" style={{ marginTop: "1.25rem" }}>Ret til begrænsning (art. 18)</h3>
            <p>
              Hvis du ønsker at begrænse behandlingen af dine oplysninger,
              kan du kontakte mig. I praksis vil det betyde at jeg ikke
              bruger e-mailen til andet end at besvare din henvendelse.
              For begrænsning hos Formspree og Netlify skal du kontakte dem
              direkte.
            </p>

            <h3 className="heading-3" style={{ marginTop: "1.25rem" }}>Ret til dataportabilitet (art. 20)</h3>
            <p>
              Du kan anmode om at modtage den e-mail jeg har fra dig i et
              læsbart format. For selve formulardata skal du kontakte
              Formspree direkte, da det er dem der modtager og videresender
              oplysningerne. Denne ret gælder ikke for server-logs.
            </p>

            <h3 className="heading-3" style={{ marginTop: "1.25rem" }}>Ret til indsigelse (art. 21)</h3>
            <p>
              Du kan gøre indsigelse mod behandling baseret på legitim
              interesse (art. 6, stk. 1, litra f) — det gælder Netlifys
              server-logs og brugen af Google Fonts. Indsigelse mod Google
              Fonts kræver i praksis at du blokerer fonts.googleapis.com i
              din browser, f.eks. via et adblocker-filter, da anmodningen
              sker automatisk ved hvert sidebesøg. Kontakt mig via
              kontaktformularen eller Netlify/Google direkte.
            </p>
          </section>

          <section className="about-section about-section-card">
            <h2 className="heading-2">Klage til tilsynsmyndighed</h2>
            <p>
              Hvis du mener at behandlingen af dine personoplysninger er i strid
              med GDPR, har du ret til at indgive en klage til
              Datatilsynet — den danske tilsynsmyndighed for databeskyttelse:
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              <strong>Datatilsynet</strong><br />
              Carl Jacobsens Vej 35<br />
              2500 Valby<br />
              Telefon: +45 33 19 32 00<br />
              <a
                href="https://www.datatilsynet.dk/kontakt"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style-body"
              >
                datatilsynet.dk/kontakt
              </a>
            </p>
          </section>

          <section className="about-section about-section-card">
            <h2 className="heading-2">Ændringer til denne politik</h2>
            <p>
              Denne privatlivspolitik kan opdateres løbende, f.eks. hvis
              hjemmesiden udvides med nye funktioner eller tjenester. Den
              aktuelle version er altid tilgængelig på denne side med angivelse
              af seneste opdateringsdato øverst i afsnittet om den
              dataansvarlige.
            </p>
          </section>

        </article>
      </section>
    </main>
  );
}

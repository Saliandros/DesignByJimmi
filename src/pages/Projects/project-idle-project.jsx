import { SiGithub } from "react-icons/si";
import { FiCalendar } from "react-icons/fi";
import PageSidebar from "../../components/PageSidebar.jsx";

const sidebarItems = [
  { label: "Overblik", href: "#overblik" },
  { label: "Fra ide til produkt", href: "#indhold-01" },
  { label: "Teknisk opbygning", href: "#indhold-02" },
];

export default function ProjectIdle() {
  return (
    <>
      {/* Dark header */}
      <section className="project-header">
        <div className="cv-body">
          <h1 className="heading-1">Project Idle</h1>
          <div className="project-header-columns">
            <div className="project-header-left">
              <img
                src="/assets/image/projectimage/project-idle-img.svg"
                alt="Project Idle"
                className="cv-profile-image"
                style={{ objectFit: "contain", backgroundColor: "#FFCF70", borderRadius: "0.75rem" }}
              />
              <address className="cv-contact-address">
                <p className="cv-contact-row">
                  <FiCalendar className="cv-contact-icon" aria-hidden="true" />
                  April 2026
                </p>
                <a
                  href="https://github.com/Saliandros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-link"
                >
                  <SiGithub className="project-github-icon" aria-hidden="true" />
                  Se på GitHub
                </a>
              </address>
            </div>
            <div className="project-header-right">
              <p className="cv-profile-heading">Tech Stack</p>
              <ul className="cv-list">
                <li>React Native</li>
                <li>Expo</li>
                <li>Supabase (PostgreSQL)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content with sidebar */}
      <article className="cv-body">
        <div className="page-with-sidebar">
          <PageSidebar items={sidebarItems} />
          <div className="project-cv-content">

            <section id="overblik" className="cv-section cv-section-card">
              <div className="project-overview-grid">
                <div>
                  <h2 className="heading-2">Om projektet</h2>
                  <p>
                    Project Idle er et projekt, jeg har arbejdet på i forbindelse med <strong>Cross-Platform</strong> udvikling.
                    Det er en <strong>incremental</strong> app i samme stil som <strong>Clicker Heroes</strong>.
                  </p>
                </div>
              </div>
            </section>

            <section id="indhold-01" className="cv-section cv-section-card">
              <h2 className="heading-2">Fra ide til produkt</h2>
              <p>
                Vi startede projektet med at brainstorme ideer og konceptualisere, hvad vi gerne ville lave.
                Jeg ente med at forsætte min ideen om at lave et klikker-spil, da jeg godt kan lide den type spil,
                men synes der mangler et nyt godt klikker-spil som ikke er fyldt med mikrotransaktioner og reklamer.
              </p>
              <p>
                Ideen er at blande spil genrene <strong>clicker</strong> og <strong>resource management</strong> sammen, 
                i en <strong>fantasy</strong> setting. Man starter op med at vælge en af de tre factioner, <strong>Elves</strong>, <strong>Humans</strong> eller <strong>Lizardmen</strong>.
                Alle factioner har forskellige styrker og svagheder, og forskellige strategier man kan bruge for at optimere sin progression.
              </p>
              <p>
                Factionerne har deres egen <strong>primær resource</strong>, som man bruger til at opgradere deres enheder, men man kan også sælge den for <strong>gold</strong>.
                På et tidspunkt under progressionen vil man få adgang til en <strong>ambassade</strong>, hvor man kan lave diplomatiske relationer med de andre factioner.
                Det gør at man får adgang til at starte en ny koloni med den pågældende faction og dermed få adgang til deres resourcer.
                Det bliver relevant da man på sigt skal bruge alle tre factioners primære resource for at progress videre.
              </p>
              <h3 className="heading-3">Det skal ikke bare være det næste dårlige klikker-spil</h3>
              <p>
                For mig er det meget vigtig, at det ikke bare bliver det næste dårlige klikker-spil, som man finder på app store.
                Jeg vil gerne lave et spil, som er sjovt at spille, og som har en god progression og belønning system.
                Det er også vigtig at selvom jeg kalder det for et incrimental spil, at det ikke bare bliver et clicker-spil,
                hvor man bare klikker på en knap for at få ressourcer. Jeg vil gerne låne ideen fra Coockie Clicker om at man har de her minigames der åbner op som man får flere heroes.
                Min tanke er at i stedet for at man køber folk så låner vi ideen om at levele heroes op ligesom i eks Clicker Heroes.
                Selvom det er det samme koncept, men det får det til at lyde lidt RPG agtigt.
              </p>      
              <p>
                Tanken om at lave et <strong>"New Game+"</strong> system, hvor man kan starte forfra er også tiltalende, men bliver ikke en del af mit første draft.
                Til at starte med fokuserede jeg på at få det grundlæggende gameplay op at køre, og derfor kun lave en af factionerne.
              </p>
              <img
                src="/assets/image/gamedesign"
                alt="Skitse af spillet"
                className="project-content-image"
                loading="lazy"
              />
              <p>
                Det er en skitse af det første draft hvor jeg har tegnet hvordan jeg forstiller mig at spillet kommer til at se ud.
                Hvis man vil se wireframes og mockups kan man se det på min Figma, som er offentligt tilgængeligt her{" "}
                 <a href="https://www.figma.com/file/0n9sH8mLh7Xo2l3j1u5qkA/Project-Idle?type=design&node-id=0-1&t=Zt6n9vK7b2eXoVh-4" target="_blank" rel="noopener noreferrer" className="link-style-body">Figma</a>.
              </p>
              <p className="mt-075">
                Billederne i projektet er genereret med <strong>ChatGPT</strong>. Da dette er et skoleprojekt har
                det ikke været prioritet at få en grafiker tilknyttet. Hvis projektet på sigt udvikler sig til noget
                jeg vil udgive, vil jeg selvfølgelig få en rigtig grafiker til at lave artwork.
              </p>                
            </section>

            <section id="indhold-02" className="cv-section cv-section-card">
              <h2 className="heading-2">Teknisk opbygning</h2>
              <p>
                En af de vigtigste tekniske beslutninger i projektet var at implementere et <strong>login-system</strong>.
                Årsagen er at spillerens progression skal gemmes og kunne tilgås på tværs af sessioner og enheder.
              </p>
              <p className="mt-075">
                For at håndtere dette gemmes al spildata i en <strong>SQL-database</strong>, hvor hver bruger har
                sin egen række med tilknyttet progress. Det betyder at spillet kræver en konto, og at man aldrig
                mister sin fremgang selvom man skifter enhed eller rydder sin browser.
              </p>
              <p className="mt-075">
                Login-systemet er bygget med <strong>JWT-tokens</strong> til autentificering, så brugerens session
                holdes aktiv sikkert uden at skulle gemme følsomme oplysninger i appen. JWT fungerer særligt godt
                i et <strong>cross-platform</strong> projekt, da tokens kan bruges på tværs af web og native apps uden
                at være bundet til en specifik platform. Når en bruger logger ind,
                hentes deres gemte spildata fra databasen og injiceres direkte ind i spillets state.
              </p>
              <p className="mt-075">
                Databaseskemaet er designet til at være <strong>normaliseret til 3. normalform</strong> for at undgå
                redundans og sikre dataintegritet. Det gør det også nemt at udvide spillet med nye features,
                eksempelvis nye factions, heroes eller diplomatiske relationer, uden at skulle omstrukturere hele databasen.
              </p>
              <img
                src="/assets/image/ER-diagram-project-idle.webp"
                alt="ER diagram for Project Idle databasen"
                className="project-content-image"
                loading="lazy"
              />
            </section>
          </div>
        </div>
      </article>
    </>
  );
}

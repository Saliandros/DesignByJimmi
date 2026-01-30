import NewestProjects from "../components/cards/newestprojects.jsx";

export default function Frontpage() {
  return (
    <main>
      <section className="m-6 mt-12 flex flex-col-reverse md:flex-row gap-6 fade-in slide-up justify-center">
        <article className="md:w-1/2 text-primary size-md md:size-xl leading-relaxed mr-8">
          <h1 className="size-xl md:size-xl font-bold mb-4">
            Velkommen til mit portfolio
          </h1>
          <p>
            Hej, Jeg er Jimmi Berg Larsen. Webudvikler under uddannelse, og
            dette er mit portfolio.<br></br> Her kan du finde eksempler på mine
            projekter og færdigheder.
          </p>
          <p className="mt-4">
            Jeg er passioneret omkring webudvikling og elsker at skabe
            brugervenlige og æstetisk tiltalende webapplikationer.
          </p>
          <p className="mt-4">man kan følge mig her:</p>
          <ul className="list-disc list-inside mt-2 list-none">
            <li className="gap-4 flex flex-col md:flex-row md:gap-8">
              <a
                href="https://www.linkedin.com/in/jimmi-larsen/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profil"
                className="inline-flex items-center gap-2 text-[#0A66C2] hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.369-1.85 3.6 0 4.267 2.368 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.07 0-1.144.925-2.07 2.069-2.07 1.143 0 2.069.926 2.069 2.07 0 1.144-.926 2.07-2.069 2.07zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.278V1.723C24 .771 23.2 0 22.222 0z" />
                </svg>

                <span className="text-secondary text-base">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Saliandros"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profil"
                className="inline-flex items-center gap-2 text-gray-800 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M12 .296c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404c1.019.005 2.045.138 3.003.404 2.292-1.552 3.298-1.23 3.298-1.23.655 1.653.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12z" />
                </svg>

                <span className="text-secondary text-base">GitHub</span>
              </a>
            </li>
          </ul>
        </article>

        <img
          src="/assets/image/Jimmi.jpg"
          alt="Picture of me"
          className="md:w-1/2 max-w-xs md:max-w-md rounded-4xl shadow-lg object-cover"
        />
      </section>
      <section className="bg-primary pt-6">
        <h2 className="size-lg mb-4 text-center text-secondary color-primary">
          Seneste Projekter
        </h2>
        <NewestProjects />
      </section>
    </main>
  );
}

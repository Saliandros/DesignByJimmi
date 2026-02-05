import NewestProjects from "../components/cards/newestprojects.jsx";
import { tools } from "../data/tools.js";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Frontpage() {
  return (
    <main>
      <section className="m-6 mt-12 pb-6 flex flex-col-reverse md:flex-row gap-6 fade-in slide-up justify-center">
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
                <SiLinkedin className="w-6 h-6" aria-hidden="true" />
                <span className="text-secondary text-base">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Saliandros"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profil"
                className="inline-flex items-center gap-2 text-gray-800 hover:underline"
              >
                <SiGithub className="w-6 h-6" aria-hidden="true" />
                <span className="text-secondary text-base">GitHub</span>
              </a>
            </li>
          </ul>
        </article>

        <img
          src="/assets/image/Jimmi.jpg"
          alt="Picture of Jimmi Berg Larsen"
          className="md:w-1/2 max-w-xs md:max-w-md rounded-4xl shadow-lg object-cover"
        />
      </section>
      <section className="m-6 mt-2 pb-6 max-w-7xl flex items-center justify-center mx-auto">
        <div className="rounded-2xl p-6 md:p-8">
          <h2 className="size-lg mb-6 text-center text-secondary">
            Jeg har kendskab til
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-18 lg:grid-cols-8">
            {tools.map((tool) => (
              <li key={tool.label} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-primary text-secondary flex items-center justify-center transition-transform hover:scale-110">
                  <tool.Icon
                    className="w-8 h-8 color-primary"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-sm md:text-base text-secondary font-medium">
                  {tool.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-primary pt-8">
        <h2 className="size-lg mb-4 text-center text-secondary color-primary">
          Seneste Projekter
        </h2>
        <NewestProjects />
      </section>
    </main>
  );
}

import NewestProjects from "../components/cards/newestprojects.jsx";
import { tools } from "../data/tools.js";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Frontpage() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const itemsPerView = 4;
  const maxIndex = Math.max(0, tools.length - itemsPerView);

  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setCarouselIndex((prevIndex) => {
          if (prevIndex + itemsPerView >= tools.length) {
            return 0;
          }
          return prevIndex + itemsPerView;
        });
        setIsExiting(false);
      }, 250);
    }, 6000);

    return () => clearInterval(interval);
  }, [maxIndex, isHovering]);

  const handlePrev = () => {
    setIsExiting(true);
    setTimeout(() => {
      setCarouselIndex((prevIndex) => {
        if (prevIndex === 0) {
          return Math.max(0, tools.length - itemsPerView);
        }
        return Math.max(0, prevIndex - itemsPerView);
      });
      setIsExiting(false);
    }, 250);
  };

  const handleNext = () => {
    setIsExiting(true);
    setTimeout(() => {
      setCarouselIndex((prevIndex) => {
        if (prevIndex + itemsPerView >= tools.length) {
          return 0;
        }
        return prevIndex + itemsPerView;
      });
      setIsExiting(false);
    }, 250);
  };

  const remainingTools = tools.length - carouselIndex;
  const currentItemsPerView = Math.min(itemsPerView, remainingTools);
  const visibleTools = tools.slice(carouselIndex, carouselIndex + currentItemsPerView);
  return (
    <main>
      <section className="m-6 mt-12 pb-6 flex flex-col-reverse md:flex-row gap-6 fade-in slide-up justify-center">
        <article className="md:w-1/2 text-primary size-md md:size-xl leading-relaxed md:mr-8">
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
          className="mx-auto md:mx-0 md:w-1/2 max-w-xs md:max-w-md rounded-4xl shadow-lg object-cover"
        />
      </section>
      <section className="m-6 mt-2 pb-6 max-w-7xl flex items-center justify-center mx-auto">
        <div className="rounded-2xl p-6 md:p-8 w-full">
          <h2 className="size-lg mb-6 text-center text-secondary">
            Jeg har kendskab til
          </h2>
          
          {/* Desktop Grid */}
          <ul className="hidden md:grid grid-cols-3 md:grid-cols-4 gap-18 lg:grid-cols-8">
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

          {/* Mobile Carousel */}
          <div className="md:hidden flex items-center gap-4" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <button
              onClick={handlePrev}
              className="p-2 text-secondary hover:text-primary hover:bg-primary hover:rounded-lg transition-all duration-300 cursor-pointer"
              aria-label="Forrige værktøjer"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex-1 overflow-hidden">
              <ul key={carouselIndex} className={`grid grid-cols-4 gap-4 ${isExiting ? 'animate-slide-out' : 'animate-slide-in'}`}>
                {visibleTools.map((tool) => (
                  <li key={tool.label} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center transition-transform hover:scale-110">
                      <tool.Icon
                        className="w-6 h-6 color-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-xs text-secondary font-medium text-center">
                      {tool.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleNext}
              className="p-2 text-secondary hover:text-primary hover:bg-primary hover:rounded-lg transition-all duration-300 cursor-pointer"
              aria-label="Næste værktøjer"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
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

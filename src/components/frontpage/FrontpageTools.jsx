import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { tools } from "../../data/tools.js";

export default function FrontpageTools() {
  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const [isSlideHovering, setIsSlideHovering] = useState(false);
  const [toolsPerPage, setToolsPerPage] = useState(8);

  useEffect(() => {
    const updateToolsPerPage = () => {
      const nextPerPage = window.innerWidth <= 768 ? 4 : 8;
      setToolsPerPage(nextPerPage);
    };

    updateToolsPerPage();
    window.addEventListener("resize", updateToolsPerPage);
    return () => window.removeEventListener("resize", updateToolsPerPage);
  }, []);

  useEffect(() => {
    if (isSlideHovering || tools.length === 0) return;

    const interval = setInterval(() => {
      setActiveToolIndex((prevIndex) => (prevIndex + 1) % tools.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isSlideHovering]);

  const toolsPageIndex = toolsPerPage === 0
    ? 0
    : Math.floor(activeToolIndex / toolsPerPage);

  const maxToolsPage = Math.max(0, Math.ceil(tools.length / toolsPerPage) - 1);

  const handleToolsPrev = () => {
    if (toolsPerPage === 0 || tools.length === 0) return;
    const nextPage = toolsPageIndex === 0 ? maxToolsPage : toolsPageIndex - 1;
    setActiveToolIndex(nextPage * toolsPerPage);
  };

  const handleToolsNext = () => {
    if (toolsPerPage === 0 || tools.length === 0) return;
    const nextPage = toolsPageIndex === maxToolsPage ? 0 : toolsPageIndex + 1;
    setActiveToolIndex(nextPage * toolsPerPage);
  };

  const handleToolSelect = (index) => {
    setActiveToolIndex(index);
  };

  const startIndex = toolsPageIndex * toolsPerPage;
  const visibleTools = tools.slice(startIndex, startIndex + toolsPerPage);
  const activeTool = tools[activeToolIndex] ?? tools[0];

  return (
    <section className="frontpage-tools">
      <div className="frontpage-tools__panel">
        <h2 className="frontpage-tools__title">
          Jeg har kendskab til
        </h2>
        <div
          className="frontpage-tools__content"
          onMouseEnter={() => setIsSlideHovering(true)}
          onMouseLeave={() => setIsSlideHovering(false)}
        >
          <div className="frontpage-tools__list">
            <ul className="frontpage-tools__grid">
              {visibleTools.map((tool) => {
                const toolIndex = tools.findIndex((item) => item.label === tool.label);
                return (
                  <li
                    key={tool.label}
                    className={`frontpage-tools__item ${
                      activeToolIndex === toolIndex ? "frontpage-tools__item--active" : ""
                    }`}
                  >
                    <button
                      type="button"
                      className="frontpage-tools__item-button"
                      onClick={() => handleToolSelect(toolIndex)}
                    >
                      <div className="frontpage-tools__icon">
                        <tool.Icon
                          className="frontpage-tools__svg color-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="frontpage-tools__label">
                        {tool.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="frontpage-tools__pager">
              <button
                type="button"
                className="frontpage-tools__pager-button"
                onClick={handleToolsPrev}
                aria-label="Forrige vaerktoejer"
              >
                <FiChevronLeft className="frontpage-tools__pager-chevron" />
              </button>
              <button
                type="button"
                className="frontpage-tools__pager-button"
                onClick={handleToolsNext}
                aria-label="Naeste vaerktoejer"
              >
                <FiChevronRight className="frontpage-tools__pager-chevron" />
              </button>
            </div>
          </div>

          {activeTool && (
            <div className="frontpage-tools__slideshow">
              <div
                className="frontpage-tools__slide"
                aria-live="polite"
              >
                <div className="frontpage-tools__slide-icon">
                  <activeTool.Icon
                    className="frontpage-tools__slide-svg"
                    aria-hidden="true"
                  />
                </div>
                <div className="frontpage-tools__slide-content">
                  <h3 className="frontpage-tools__slide-title">{activeTool.label}</h3>
                  <p className="frontpage-tools__slide-text">{activeTool.description}</p>
                  <p className="frontpage-tools__slide-text">{activeTool.purpose}</p>
                  <p className="frontpage-tools__slide-text">{activeTool.usage}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

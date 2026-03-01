import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { tools } from "../../data/tools.js";

export default function FrontpageTools() {
  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const [isSlideHovering, setIsSlideHovering] = useState(false);
  const [toolsPerPage, setToolsPerPage] = useState(8);

  useEffect(() => {
    const updateToolsPerPage = () => {
      const nextPerPage = window.innerWidth <= 768 ? 6 : 8;
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
    <section className="page-section">
      <h2 className="heading-2">
          Jeg har kendskab til
        </h2>
        <div
          className="tools-content"
          onMouseEnter={() => setIsSlideHovering(true)}
          onMouseLeave={() => setIsSlideHovering(false)}
        >
          <div className="tools-list">
            <ul className="tools-grid">
              {visibleTools.map((tool) => {
                const toolIndex = tools.findIndex((item) => item.label === tool.label);
                return (
                  <li
                    key={tool.label}
                    className={`tools-item ${
                      activeToolIndex === toolIndex ? "tools-item--active" : ""
                    }`}
                  >
                    <button
                      type="button"
                      className="tools-item-button"
                      onClick={() => handleToolSelect(toolIndex)}
                    >
                      <div className="tools-icon">
                        <tool.Icon
                          className="tools-svg color-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="tools-label">
                        {tool.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {maxToolsPage > 0 && (
              <div className="tools-pager">
                <button
                  type="button"
                  className="tools-pager-button"
                  onClick={handleToolsPrev}
                  aria-label="Forrige vaerktoejer"
                >
                  <FiChevronLeft className="tools-pager-chevron" />
                </button>
                <button
                  type="button"
                  className="tools-pager-button"
                  onClick={handleToolsNext}
                  aria-label="Naeste vaerktoejer"
                >
                  <FiChevronRight className="tools-pager-chevron" />
                </button>
              </div>
            )}
          </div>

          {activeTool && (
            <div className="tools-slideshow">
              <div
                className="tools-slide"
                aria-live="polite"
              >
                <div className="tools-slide-icon">
                  <activeTool.Icon
                    className="tools-slide-svg"
                    aria-hidden="true"
                  />
                </div>
                <div className="tools-slide-content">
                  <h3 className="heading-3">{activeTool.label}</h3>
                  <p className="tools-slide-text">{activeTool.description}</p>
                  <p className="tools-slide-text">{activeTool.purpose}</p>
                  <p className="tools-slide-text">{activeTool.usage}</p>
                </div>
              </div>
            </div>
          )}
        </div>
    </section>
  );
}

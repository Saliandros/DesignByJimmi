import { useState } from "react";

export default function ProjectCard({ project, badgeNumber }) {
  const [dragStart, setDragStart] = useState(null);

  const handleMouseDown = (e) => {
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = (e) => {
    if (!dragStart) return;

    const dragDistance = Math.sqrt(
      Math.pow(e.clientX - dragStart.x, 2) + Math.pow(e.clientY - dragStart.y, 2)
    );

    // If dragged less than 10 pixels and on desktop, navigate
    if (dragDistance < 10 && window.innerWidth >= 768) {
      window.location.href = project.link;
    }

    setDragStart(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.location.href = project.link;
    }
  };

  return (
    <article
      className="project-card"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="link"
      aria-label={`Aabn projekt: ${project.title}`}
    >
      {badgeNumber ? (
        <div className="project-card-badge" aria-hidden="true">
          {badgeNumber}
        </div>
      ) : null}
      <img
        src={project.image}
        alt={project.title}
        className="project-card-image"
        loading="lazy"
      />
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
      </div>
    </article>
  );
}

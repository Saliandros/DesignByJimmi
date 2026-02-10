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

  return (
    <article
      className="project-card"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {badgeNumber ? (
        <div className="project-card__badge" aria-hidden="true">
          {badgeNumber}
        </div>
      ) : null}
      <div>
        <img
          src={project.image}
          alt={project.title}
          className="project-card__image"
          loading="lazy"
        />
      </div>
      <div className="project-card__content">
        <div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__description">{project.description}</p>
        </div>
      </div>
    </article>
  );
}

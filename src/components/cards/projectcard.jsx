import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project, badgeNumber }) {
  const dragStart = useRef(null);
  const touchStart = useRef(null);
  const navigate = useNavigate();

  const goToProject = () => {
    if (project.link) {
      if (project.link.startsWith("/")) navigate(project.link);
      else window.open(project.link, "_blank");
    } else if (project.id) {
      navigate(`/projects/${project.id}`);
    } else {
      navigate("/projects");
    }
  };

  const handleMouseDown = (e) => {
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = (e) => {
    if (!dragStart.current) return;
    const dist = Math.sqrt(
      Math.pow(e.clientX - dragStart.current.x, 2) + Math.pow(e.clientY - dragStart.current.y, 2)
    );
    if (dist < 10) goToProject();
    dragStart.current = null;
  };

  const handleTouchStart = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = Math.abs(t.clientX - touchStart.current.x);
    const dy = Math.abs(t.clientY - touchStart.current.y);
    // Tap = minimal movement; swipe = larger horizontal movement
    if (dx < 20 && dy < 20) goToProject();
    touchStart.current = null;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goToProject();
    }
  };

  return (
    <article
      className="project-card"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
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
        style={{
          objectFit: project.imageStyle || "cover",
          backgroundColor: project.imageBg || "transparent",
        }}
        loading="lazy"
      />
      <div className="project-card-content">
        <h3 className="heading-3">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
      </div>
    </article>
  );
}

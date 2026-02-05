import { useState } from "react";

export default function ProjectCard({ project }) {
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
      className="
        shrink-0 w-64 h-96 max-w-sm snap-center
        rounded-xl shadow-md overflow-hidden
        mx-0 flex flex-col
        md:hover:shadow-lg md:transition-shadow md:cursor-pointer
      "
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>
      <div className="bg-white flex flex-col justify-between flex-grow p-4 pb-24">
        <div>
          <h3 className="text-lg font-semibold mb-4">{project.title}</h3>
          <p className="text-sm mb-4">{project.description}</p>
        </div>
        <a href={project.link} className="text-blue-600 hover:underline md:hidden">
          Læs mere her
        </a>
      </div>
    </article>
  );
}

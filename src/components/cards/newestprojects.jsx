import { projects } from "../../data/projects.js";
import ProjectCard from "./projectcard.jsx";

export default function NewestProjects() {
  const newestProjects = [...projects]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <section className="newest-projects">
      <div className="newest-projects__list">
        {newestProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            badgeNumber={index + 1}
          />
        ))}
      </div>
    </section>
  );
}

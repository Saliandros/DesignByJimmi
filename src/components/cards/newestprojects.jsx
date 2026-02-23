import { projects } from "../../data/projects.js";
import ProjectCard from "./projectcard.jsx";

export default function NewestProjects() {
  const newestProjects = [...projects]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <section className="newest-projects">
      <ul className="newest-projects-list">
        {newestProjects.map((project, index) => (
          <li key={project.id}>
            <ProjectCard
              project={project}
              badgeNumber={index + 1}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

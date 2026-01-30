import { projects } from "../../data/projects.js";
import ProjectCard from "./projectcard.jsx";

export default function NewestProjects() {
  const newestProjects = [...projects]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <section className="mx-6 pb-8">
      <div
        className="
          flex gap-4 overflow-x-auto snap-x snap-mandatory
          md:grid md:grid-cols-5 md:gap-6 md:overflow-visible md:snap-none
        "
      >
        {newestProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

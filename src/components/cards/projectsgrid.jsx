import ProjectCard from "./projectcard.jsx";

export default function ProjectsGrid({ projects }) {
  return (
    <section className="projects-grid">
      <div
        className="projects-grid-list"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

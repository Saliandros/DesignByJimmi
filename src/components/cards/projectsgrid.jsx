import ProjectCard from "./projectcard.jsx";

export default function ProjectsGrid({ projects }) {
  return (
    <section className="mx-6 pb-8">
      <div
        className="
          flex gap-4 overflow-x-auto snap-x snap-mandatory
          md:grid md:grid-cols-5 md:gap-6 md:overflow-visible md:snap-none
        "
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

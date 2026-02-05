export default function ProjectCard({ project }) {
  return (
    <article
      className="
        shrink-0 w-64 h-96 max-w-sm snap-center
        rounded-xl shadow-md overflow-hidden
        mx-0 flex flex-col
      "
    >
      <div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>
      <div className="bg-white flex flex-col justify-between flex-grow p-4 pb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">{project.title}</h3>
          <p className="text-sm mb-4">{project.description}</p>
        </div>
        <a href={project.link} className="text-blue-600 hover:underline">
          Læs mere her
        </a>
      </div>
    </article>
  );
}

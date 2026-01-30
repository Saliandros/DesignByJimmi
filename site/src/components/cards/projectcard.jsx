export default function ProjectCard({ project }) {
  return (
<article
  className="
    shrink-0 w-64 max-w-sm snap-center
    rounded-xl shadow-md bg-white overflow-hidden
    mx-auto
  "
>
  <div className="h-48 flex items-center justify-center bg-gray-100">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>

  <div className="p-6">
    <h3 className="text-lg font-semibold mb-2">
      {project.title}
    </h3>
    <p className="text-sm mb-4">
      {project.description}
    </p>
    <a
      href={project.link}
      className="text-blue-600 hover:underline"
    >
      Læs mere her
    </a>
  </div>
</article>



  );
}

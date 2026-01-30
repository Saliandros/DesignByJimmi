import { projects } from "../../data/projects";
import ProjectsGrid from "./projectsgrid.jsx";

export default function AllProjects() {
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return <ProjectsGrid projects={sortedProjects} />;
}

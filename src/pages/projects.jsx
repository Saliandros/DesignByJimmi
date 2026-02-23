import AllProjects from "../components/cards/allprojects.jsx";

export default function Projects() {
  return (
    <main className="frontpage">
      <section>
        <h2 className="frontpage-latest-title">Alle projekter</h2>
        <p className="projects-description">
          Her finder du alle de projekter, jeg har arbejdet på. Kortene kan navigeres med tast eller mus.
        </p>
      </section>

      <AllProjects />
    </main>
  );
}
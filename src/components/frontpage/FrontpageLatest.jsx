import NewestProjects from "../cards/newestprojects.jsx";

export default function FrontpageLatest() {
  return (
    <section className="frontpage-latest">
      <h2 className="frontpage-latest__title">
        Seneste Projekter
      </h2>
      <NewestProjects />
    </section>
  );
}

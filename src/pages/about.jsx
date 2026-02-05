import Typewriter from "../components/writers/typewriter.jsx";

export default function About() {
  return (
    <main>
      <section>
        <h1 className="size-xl fade-in slide-up">Dette er about siden</h1>
        <Typewriter
          words={["React", "Angular", "Photoshop"]}
          prefix="Programmets tech stack er: "
        />
      </section>
    </main>
  );
}
import Typewriter from "../components/writers/typewriter.jsx";

export default function About() {
  return (
    <section className="">
        <h2 className="size-xl fade-in slide-up">Dette er about siden</h2>
        <Typewriter
  words={["React", "Angular", "Photoshop"]}
  prefix="Programmets tech stack er: "
/>
    </section>
  );
}
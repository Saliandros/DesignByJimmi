import {
  SiReact,
  SiJavascript,
  SiFigma,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiWordpress,
} from "react-icons/si";

export const tools = [
  {
    label: "React",
    Icon: SiReact,
    subtitle: "JavaScript-bibliotek",
    lines: [
      "Jeg lærte React på Webudvikerlen.",
      "React i kombination med en router-teknologi har vi brugt til at lave SPA'er.",
      "Men det kan meget mere, denne side er eks bygget på React.",
    ],
    links: [
      { label: "Portfolio Website", href: "/projects/portfolio-project" },
    ],
  },
  {
    label: "JavaScript",
    Icon: SiJavascript,
    subtitle: "Kodesprog",
    lines: [
      "Igennem min Multimediedesigner lærte vi JavaScript.",
      "Vi brugte det til at programmer interaktivitet ind på siderne.",
      "Her i blandt Microinteractions.",
    ],
    links: [
      { label: "JavaScript Blog", href: "/blog/javascript" },
    ],
  },
  {
    label: "Node.js",
    Icon: SiNodedotjs,
    subtitle: "Server-runtime",
    lines: [
      "Node.js har vi brugt til backend-udvikling trods denne side ikke har en.",
      "Jeg har både brugt det til at starte Java Scripts op, men også kørt.",
      "Server-side kode med Express.js oven på for routes.",
    ],
    links: [],
  },
  {
    label: "PostgreSQL",
    Icon: SiPostgresql,
    subtitle: "SQL-database",
    lines: [
      "Det brugte vi til skoleprojekter hvor vi skulle arbejde med relationelle databaser.",
      "Et eks kunne være da vi skulle lave vores chatbot, her brugte vi det til",
      "at gemme og hente chattråde. ellers var det også brugt i LineUp-projektet.",
    ],
    links: [],
  },
  {
    label: "MongoDB",
    Icon: SiMongodb,
    subtitle: "NoSQL-database",
    lines: [
      "Dokumentbaseret database hvor alle regler smides på jorden",
      "Dette var fundamentet på vores candidate-projekt, hvor jeg sad med",
      "Mongoose og MongoDB som hovedfokus, da jeg gerne ville dygtiggøre mig i det",
    ],
    links: [
      { label: "MongoDB — Condidate.dk", href: "/projects/candidate-project" },
    ],
  },
  {
    label: "WordPress",
    Icon: SiWordpress,
    subtitle: "CMS",
    lines: [
      "Er i teorien selvlært, men vi havde det også på Multimediedesigneren.",
      "Jeg lærte til det da jeg fik lov at prøve at lave en side til en Guild jeg var i.",
      "I dag kan jeg godt lide at blande JavaScript og WordPress sammen, for at undgå betalte løsninger.",
    ],
    links: [],
  },
  {
    label: "Figma",
    Icon: SiFigma,
    subtitle: "Designværktøj",
    lines: [
      "Jeg lærte Figma at kende under Datamatikeren til mockups.",
      "På multimediedesigneren brugte vi det til at skabe wireframes og prototyper.",
      "Og på Webudvikleren brugte vi Figma' devtool til designet under LineUp-projektet.",
    ],
    links: [{ label: "LineUp Project", href: "/projects/lineup-project" },
    ],
  },
];

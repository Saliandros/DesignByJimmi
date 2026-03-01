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
      "JavaScript-bibliotek til opbygning af brugerflader.",
      "Arbejder med komponenter, state, props og hooks.",
      "Brugt til at bygge denne portfolio fra bunden.",
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
      "Sproget der driver interaktivitet i browseren.",
      "Bruges til logik, DOM-manipulation og API-kald.",
      "Grundlaget for alt jeg bygger på nettet.",
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
      "JavaScript runtime der kører på serveren.",
      "Bruges til backend, tooling og scripts.",
      "Bruges til lokale scripts og build tools.",
    ],
    links: [],
  },
  {
    label: "PostgreSQL",
    Icon: SiPostgresql,
    subtitle: "SQL-database",
    lines: [
      "Relationsdatabase med fuld SQL-understøttelse.",
      "Bruges til struktureret data og komplekse queries.",
      "Arbejdet med CRUD i skoleprojekter.",
    ],
    links: [],
  },
  {
    label: "MongoDB",
    Icon: SiMongodb,
    subtitle: "NoSQL-database",
    lines: [
      "Dokumentbaseret database med fleksibelt schema.",
      "Bruges til data-modeller og REST API'er.",
      "Brugt i Condidate.dk-projektet.",
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
      "Content management system til websites.",
      "Bruges til at oprette og administrere indhold.",
      "Bygget og tilpasset WordPress-sites.",
    ],
    links: [],
  },
  {
    label: "Figma",
    Icon: SiFigma,
    subtitle: "Designværktøj",
    lines: [
      "Design- og prototypingsværktøj til UI.",
      "Bruges til wireframes og UI-mockups.",
      "Skitserer layout og komponenter inden kodning.",
    ],
    links: [{ label: "Figma — Condidate.dk", href: "/projects/candidate-project" },
    ],
  },
];

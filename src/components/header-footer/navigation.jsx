import { useState } from "react";

export default function Navigation() {
  const [active, setActive] = useState("projects");

  return (
    <header className="flex flex-wrap items-center justify-center md:justify-between gap-4 p-6 bg-primary color-primary">
      <h1 className="text-primary w-full text-center md:w-auto md:text-left">
        <a href="/" className="color-primary size-xl">
          DesignByJimmi
        </a>
      </h1>
      <nav className="text-secondary w-full md:w-auto color-primary size-md">
        <ul className="flex justify-center gap-5 md:justify-end">
          <li>
            <a
              href="/projects"
              onClick={() => setActive("projects")}
              className={`link-style hover-color ${active === "projects" && "color-active"}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/about"
              onClick={() => setActive("about")}
              className={`link-style hover-color ${active === "about" && "color-active"}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              onClick={() => setActive("contact")}
              className={`link-style hover-color ${active === "contact" && "color-active"}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

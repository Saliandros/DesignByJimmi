import { useState } from "react";

export default function Footer() {
  const [active, setActive] = useState("projects");

  return (
    <footer className="bg-primary color-primary shadow-inner mt-8">
      <section className="flex flex-wrap items-center justify-center gap-8 md:gap-0 md:justify-between p-6">
        <h1 className="w-full text-center md:w-auto md:text-left text-primary size-xl">
          <a href="/">DesignByJimmi</a>
        </h1>

        <nav className="text-secondary w-full md:w-auto color-primary size-md text-center md:text-right md:pr-[10%]">
          <ul>
            <li className="block py-1">
              <a
                href="/projects"
                onClick={() => setActive("projects")}
                className={`link-style hover-color ${active === "projects" && "color-active"}`}
              >
                Projects
              </a>
            </li>
            <li className="block py-1">
              <a
                href="/about"
                onClick={() => setActive("about")}
                className={`link-style hover-color ${active === "about" && "color-active"}`}
              >
                About
              </a>
            </li>
            <li className="block py-1">
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
      </section>

      <section className="pt-16 pb-4">
        <p className="text-center size-sm color-primary py-2">
          © 2024 DesignByJimmi. All rights reserved.
        </p>
        <p className="text-center size-sm color-primary">
          {" "}
          read more about our&nbsp;
          <a href="/privacy-policy" className="link-style hover-color">
            Privacy Policy
          </a>
        </p>
      </section>
    </footer>
  );
}

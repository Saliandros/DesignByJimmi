import { FiFolder, FiFileText, FiUser, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentPath = window.location.pathname;

  return (
    <footer className="bg-primary color-primary shadow-inner">
      <section className="flex flex-wrap items-center justify-center gap-8 md:gap-0 md:justify-between p-6">
        <h1 className="w-full text-center md:w-auto md:text-left text-primary size-xl">
          <a href="/">DesignByJimmi</a>
        </h1>

        <nav className="text-secondary w-full md:w-auto color-primary size-md text-center md:text-right md:pr-[10%]">
          <ul>
            <li className="block py-1">
              <a
                href="/projects"
                className={`link-style hover-color inline-flex items-center gap-2 ${currentPath === "/projects" && "color-active"}`}
              >
                <FiFolder className="w-4 h-4" aria-hidden="true" />
                Projects
              </a>
            </li>
            <li className="block py-1">
              <a
                href="/cv"
                className={`link-style hover-color inline-flex items-center gap-2 ${currentPath === "/cv" && "color-active"}`}
              >
                <FiFileText className="w-4 h-4" aria-hidden="true" />
                Mit CV
              </a>
            </li>
            <li className="block py-1">
              <a
                href="/about"
                className={`link-style hover-color inline-flex items-center gap-2 ${currentPath === "/about" && "color-active"}`}
              >
                <FiUser className="w-4 h-4" aria-hidden="true" />
                About
              </a>
            </li>
            <li className="block py-1">
              <a
                href="/contact"
                className={`link-style hover-color inline-flex items-center gap-2 ${currentPath === "/contact" && "color-active"}`}
              >
                <FiMail className="w-4 h-4" aria-hidden="true" />
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
          read more about our&nbsp;
          <a href="/privacy-policy" className="link-style hover-color">
            Privacy Policy
          </a>
        </p>
      </section>
    </footer>
  );
}

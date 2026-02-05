import { FiFolder, FiFileText, FiUser, FiMail } from "react-icons/fi";

export default function Navigation() {
  const currentPath = window.location.pathname;

  return (
    <header className="flex flex-wrap items-center justify-center md:justify-between gap-4 p-6 bg-primary color-primary">
      <p className="text-primary w-full text-center md:w-auto md:text-left">
        <a href="/" className="color-primary size-xl">
          DesignByJimmi
        </a>
      </p>
      <nav className="text-secondary w-full md:w-auto color-primary size-md">
        <ul className="flex justify-center gap-5 md:justify-end mr-12">
          <li>
            <a
              href="/projects"
              className={`link-style hover-color inline-flex items-center gap-2 ${currentPath === "/projects" && "color-active"}`}
            >
              <FiFolder className="w-4 h-4" aria-hidden="true" />
              Projects
            </a>
          </li>
          <li>
            <a
              href="/cv"
              className={`link-style hover-color inline-flex items-center gap-2 ${currentPath === "/cv" && "color-active"}`}
            >
              <FiFileText className="w-4 h-4" aria-hidden="true" />
              Mit CV
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`link-style hover-color inline-flex items-center gap-2 ${currentPath === "/about" && "color-active"}`}
            >
              <FiUser className="w-4 h-4" aria-hidden="true" />
              About
            </a>
          </li>
          <li>
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
    </header>
  );
}

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
        <ul className="flex justify-center gap-5 md:justify-end">
          <li>
            <a
              href="/projects"
              className={`link-style hover-color ${currentPath === "/projects" && "color-active"}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/cv"
              className={`link-style hover-color ${currentPath === "/cv" && "color-active"}`}
            >
              Mit CV
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`link-style hover-color ${currentPath === "/about" && "color-active"}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={`link-style hover-color ${currentPath === "/contact" && "color-active"}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

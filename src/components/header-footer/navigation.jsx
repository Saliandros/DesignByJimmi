import { FiFolder, FiFileText, FiUser, FiMail } from "react-icons/fi";

export default function Navigation() {
  const currentPath = window.location.pathname;

  return (
    <header className="heading">
      <p className="heading-logo">
        <a
          href="/"
          className="heading-logo-link"
          title="Gå til forsiden"
          aria-label="Gå til forsiden"
        >
          DesignByJimmi
        </a>
      </p>
      <nav className="navigation">
        <ul className="navigation-list">
          <li>
            <a
              href="/projects"
              className={`link-style hover-color navigation-link ${currentPath === "/projects" && "link-style-active"}`}
            >
              <FiFolder className="navigation-icon" aria-hidden="true" />
              Projekter
            </a>
          </li>
          <li>
            <a
              href="/cv"
              className={`link-style hover-color navigation-link ${currentPath === "/cv" && "link-style-active"}`}
            >
              <FiFileText className="navigation-icon" aria-hidden="true" />
              Mit CV
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`link-style hover-color navigation-link ${currentPath === "/about" && "link-style-active"}`}
            >
              <FiUser className="navigation-icon" aria-hidden="true" />
              Om mig
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={`link-style hover-color navigation-link ${currentPath === "/contact" && "link-style-active"}`}
            >
              <FiMail className="navigation-icon" aria-hidden="true" />
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

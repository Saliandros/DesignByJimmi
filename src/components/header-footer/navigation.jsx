import { FiFolder, FiFileText, FiUser, FiMail } from "react-icons/fi";

export default function Navigation() {
  const currentPath = window.location.pathname;

  return (
    <header className="site-nav">
      <p className="site-nav__brand">
        <a href="/" className="site-nav__brand-link">
          DesignByJimmi
        </a>
      </p>
      <nav className="site-nav__menu">
        <ul className="site-nav__list">
          <li>
            <a
              href="/projects"
              className={`link-style hover-color site-nav__link ${currentPath === "/projects" && "color-active"}`}
            >
              <FiFolder className="site-nav__icon" aria-hidden="true" />
              Projects
            </a>
          </li>
          <li>
            <a
              href="/cv"
              className={`link-style hover-color site-nav__link ${currentPath === "/cv" && "color-active"}`}
            >
              <FiFileText className="site-nav__icon" aria-hidden="true" />
              Mit CV
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`link-style hover-color site-nav__link ${currentPath === "/about" && "color-active"}`}
            >
              <FiUser className="site-nav__icon" aria-hidden="true" />
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={`link-style hover-color site-nav__link ${currentPath === "/contact" && "color-active"}`}
            >
              <FiMail className="site-nav__icon" aria-hidden="true" />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

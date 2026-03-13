import { FiFolder, FiFileText, FiUser, FiMail } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-top">
        <p className="heading-logo">
          <Link to="/">DesignByJimmi</Link>
        </p>
        <nav className="navigation">
          <ul className="navigation-list">
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `link-style hover-color navigation-link${isActive ? " link-style-active" : ""}`
                }
              >
                <FiFolder className="navigation-icon" aria-hidden="true" />
                Projekter
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cv"
                className={({ isActive }) =>
                  `link-style hover-color navigation-link${isActive ? " link-style-active" : ""}`
                }
              >
                <FiFileText className="navigation-icon" aria-hidden="true" />
                Mit CV
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `link-style hover-color navigation-link${isActive ? " link-style-active" : ""}`
                }
              >
                <FiUser className="navigation-icon" aria-hidden="true" />
                Om mig
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `link-style hover-color navigation-link${isActive ? " link-style-active" : ""}`
                }
              >
                <FiMail className="navigation-icon" aria-hidden="true" />
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
      <section className="footer-bottom">
        <p className="footer-text">
          © 2024 DesignByJimmi. Alle rettigheder forbeholdes.
        </p>
        <p className="footer-text">
          Læs mere om vores&nbsp;
          <Link to="/privacy-policy" className="link-style hover-color">
            Privatlivspolitik
          </Link>
        </p>
      </section>
    </footer>
  );
}

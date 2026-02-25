import { FiFolder, FiFileText, FiUser, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentPath = window.location.pathname;

  return (
    <footer className="footer">
      <section className="footer-top">
        <p className="heading-logo">
          <a href="/">DesignByJimmi</a>
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
      </section>
      <section className="footer-bottom">
        <p className="footer-text">
          © 2024 DesignByJimmi. Alle rettigheder forbeholdes.
        </p>
        <p className="footer-text">
          Læs mere om vores&nbsp;
          <a href="/privacy-policy" className="link-style hover-color">
            Privatlivspolitik
          </a>
        </p>
      </section>
    </footer>
  );
}

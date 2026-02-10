import { FiFolder, FiFileText, FiUser, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentPath = window.location.pathname;

  return (
    <footer className="site-footer">
      <section className="site-footer__top">
        <h1 className="site-footer__brand">
          <a href="/">DesignByJimmi</a>
        </h1>

        <nav className="site-footer__nav">
          <ul className="site-footer__list">
            <li className="site-footer__item">
              <a
                href="/projects"
                className={`link-style hover-color site-footer__link ${currentPath === "/projects" && "color-active"}`}
              >
                <FiFolder className="site-footer__icon" aria-hidden="true" />
                Projects
              </a>
            </li>
            <li className="site-footer__item">
              <a
                href="/cv"
                className={`link-style hover-color site-footer__link ${currentPath === "/cv" && "color-active"}`}
              >
                <FiFileText className="site-footer__icon" aria-hidden="true" />
                Mit CV
              </a>
            </li>
            <li className="site-footer__item">
              <a
                href="/about"
                className={`link-style hover-color site-footer__link ${currentPath === "/about" && "color-active"}`}
              >
                <FiUser className="site-footer__icon" aria-hidden="true" />
                About
              </a>
            </li>
            <li className="site-footer__item">
              <a
                href="/contact"
                className={`link-style hover-color site-footer__link ${currentPath === "/contact" && "color-active"}`}
              >
                <FiMail className="site-footer__icon" aria-hidden="true" />
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <section className="site-footer__bottom">
        <p className="site-footer__text">
          © 2024 DesignByJimmi. All rights reserved.
        </p>
        <p className="site-footer__text">
          read more about our&nbsp;
          <a href="/privacy-policy" className="link-style hover-color">
            Privacy Policy
          </a>
        </p>
      </section>
    </footer>
  );
}

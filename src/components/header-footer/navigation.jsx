import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiFolder, FiFileText, FiUser, FiMail, FiMenu, FiX } from "react-icons/fi";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef(null);
  const firstLinkRef = useRef(null);

  // Flyt focus til første link når drawer åbner, tilbage til burger når den lukker
  useEffect(() => {
    if (menuOpen) {
      firstLinkRef.current?.focus();
    } else {
      burgerRef.current?.focus();
    }
  }, [menuOpen]);

  // Luk drawer med Escape-tasten
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Undgå scroll bag drawer
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { to: "/projects", icon: <FiFolder aria-hidden="true" />, label: "Projekter" },
    { to: "/cv",       icon: <FiFileText aria-hidden="true" />, label: "Mit CV" },
    { to: "/about",    icon: <FiUser aria-hidden="true" />, label: "Om mig" },
    { to: "/contact",  icon: <FiMail aria-hidden="true" />, label: "Kontakt" },
  ];

  return (
    <header className="heading">
      <p className="heading-logo">
        <Link
          to="/"
          className="heading-logo-link"
          title="Gå til forsiden"
          aria-label="Gå til forsiden"
        >
          DesignByJimmi
        </Link>
      </p>

      {/* Desktop nav */}
      <nav className="navigation nav-desktop" aria-label="Primær navigation">
        <ul className="navigation-list">
          {navLinks.map(({ to, icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `link-style hover-color navigation-link${isActive ? " link-style-active" : ""}`
                }
              >
                {icon}
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger-knap — kun synlig på mobil */}
      <button
        className="nav-burger"
        aria-label={menuOpen ? "Luk menu" : "Åbn menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(true)}
        ref={burgerRef}
      >
        <FiMenu className="nav-burger-icon" />
      </button>

      {/* Overlay bag drawer */}
      <div
        className={`nav-overlay${menuOpen ? " nav-overlay--open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in drawer */}
      <nav
        className={`nav-drawer${menuOpen ? " nav-drawer--open" : ""}`}
        aria-label="Mobil navigation"
        aria-hidden={!menuOpen}
      >
        <button
          className="nav-drawer-close"
          aria-label="Luk menu"
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
        >
          <FiX className="nav-drawer-close-icon" />
        </button>

        <ul className="nav-drawer-list">
          {navLinks.map(({ to, icon, label }, index) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `nav-drawer-link${isActive ? " nav-drawer-link--active" : ""}`
                }
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
                ref={index === 0 ? firstLinkRef : null}
              >
                {icon}
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

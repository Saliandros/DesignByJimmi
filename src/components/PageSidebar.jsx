export default function PageSidebar({ items, variant }) {
  return (
    <aside className={`page-sidebar${variant ? ` page-sidebar--${variant}` : ""}`} aria-label="Sidenavigation">
      <nav>
        <ul className="page-sidebar-list">
          {items.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="page-sidebar-link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

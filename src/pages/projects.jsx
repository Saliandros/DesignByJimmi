import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AllProjects from "../components/cards/allprojects.jsx";
import { projects } from "../data/projects.js";
import { blogs } from "../data/blogs.js";

export default function Projects() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const lower = value.toLowerCase();
    const projectMatches = projects
      .filter((p) => p.title.toLowerCase().includes(lower))
      .map((p) => ({ title: p.title, link: p.link, type: "Projekt", date: p.date }));

    const blogMatches = blogs
      .filter((b) => b.title.toLowerCase().includes(lower))
      .map((b) => ({ title: b.title, link: b.link, type: "Notat", date: b.date }));

    setSuggestions([...projectMatches, ...blogMatches]);
  }

  function handleSelect(link) {
    setQuery("");
    setSuggestions([]);
    navigate(link);
  }

  return (
    <div className="frontpage">
      <section className="page-section">
        <h2 className="heading-2">Alle projekter</h2>
        <p className="projects-description">
          Her finder du alle de projekter, jeg har arbejdet på. Kortene kan navigeres med tast eller mus.
        </p>
        <div className="search-wrapper">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Søg i projekter og notater..."
            className="search-input"
            aria-label="Søg i projekter og notater"
          />
          {suggestions.length > 0 && (
            <ul className="search-suggestions">
              {suggestions.map((s, i) => (
                <li key={i} onClick={() => handleSelect(s.link)}>
                  <span className="search-suggestion-type">{s.type}</span>
                  <span className="search-suggestion-title">{s.title}</span>
                  {s.date && <span className="search-suggestion-date">{s.date}</span>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <AllProjects />
      <section className="blog-section">
        <h2 className="heading-2">Mine notater</h2>
        <div className="blog-groups-wrapper">
          {Object.entries(
            blogs.reduce((acc, b) => {
              (acc[b.type] = acc[b.type] || []).push(b);
              return acc;
            }, {})
          ).map(([type, entries]) => (
            <div key={type} className="blog-group">
              <h3 className="heading-3 blog-group-title">{type}</h3>
              <ul className="blog-group-list">
                {entries.map((b) => (
                  <li key={b.id}>
                    <Link to={b.link} className="blog-group-link">
                      {b.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/header-footer/navigation.jsx";
import Footer from "./components/header-footer/footer.jsx";

import Frontpage from "./pages/frontpage.jsx";
import Projects from "./pages/projects.jsx";
import About from "./pages/about.jsx";
import CV from "./pages/cv.jsx";
import Contact from "./pages/contact.jsx";
import PrivacyPolicy from "./pages/privacy-policy.jsx";
import Page404 from "./pages/page404.jsx";

/* project routes imports */
import PortfolioProject from "./pages/Projects/portfolio-project.jsx";
import MongoDBCondidate from "./pages/Projects/candidate-project.jsx";
import LineUp from "./pages/Projects/lineup-project.jsx";

/* blog routes imports */
import JavaScript from "./pages/blog/javascript.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <div className="app-shell">
      <Navigation />

      <main className="app-shell-main">
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* project routes */}
          <Route path="/projects/portfolio-project" element={<PortfolioProject />} />
          <Route path="/projects/candidate-project" element={<MongoDBCondidate />} />
          <Route path="/projects/lineup-project" element={<LineUp />} />

          {/* blog routes */}
          <Route path="/blog/javascript" element={<JavaScript />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>

      <Footer />
    </div>
  </BrowserRouter>
);

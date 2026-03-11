import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/header-footer/navigation.jsx";
import Footer from "./components/header-footer/footer.jsx";

const Frontpage = lazy(() => import("./pages/frontpage.jsx"));
const Projects = lazy(() => import("./pages/projects.jsx"));
const About = lazy(() => import("./pages/about.jsx"));
const CV = lazy(() => import("./pages/cv.jsx"));
const Contact = lazy(() => import("./pages/contact.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/privacy-policy.jsx"));
const Page404 = lazy(() => import("./pages/page404.jsx"));

/* project routes */
const PortfolioProject = lazy(() => import("./pages/Projects/portfolio-project.jsx"));
const MongoDBCondidate = lazy(() => import("./pages/Projects/candidate-project.jsx"));
const LineUp = lazy(() => import("./pages/Projects/lineup-project.jsx"));

/* blog routes */
const JavaScript = lazy(() => import("./pages/blog/javascript.jsx"));

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <div className="app-shell">
      <Navigation />

      <main className="app-shell-main">
        <Suspense fallback={null}>
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
        </Suspense>
      </main>

      <Footer />
    </div>
  </BrowserRouter>
);

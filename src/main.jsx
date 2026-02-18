import React from "react";
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

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <div className="app-shell">
      <Navigation />

      <main className="app-shell__main">
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-form" element={<ContactForm />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>

      <Footer />
    </div>
  </BrowserRouter>
);

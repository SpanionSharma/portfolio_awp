import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import resumeData from "./data";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="title-block">
            <h1 className="name">{resumeData.name}</h1>
            <p className="subtle">{resumeData.location}</p>
          </div>
          <nav className="links">
            <Link to="/">Home</Link>
            <Link to="/education">Education</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home data={resumeData} />} />
          <Route path="/education" element={<Education data={resumeData} />} />
          <Route path="/skills" element={<Skills data={resumeData} />} />
          <Route path="/projects" element={<Projects data={resumeData} />} />
          <Route path="/contact" element={<Contact data={resumeData} />} />
        </Routes>
      </main>

      <footer className="footer">
        
      </footer>
    </div>
  );
}

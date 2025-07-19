// src/App.js
import React from 'react';
// We're using HashRouter for easier deployment on GitHub Pages
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './Home.css'; // <--- ADD THIS LINE

// Import your components
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedText from './components/AnimatedText'; // <--- ADD THIS LINE

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import the specific icons you need
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // <--- CORRECTED IMPORT

// A simple Home component for your landing page
function Home() {
  return (<div className="home-section">
    <div className="hero-content">
      <p className="greeting">Hello, I'm</p>
      <h1 className="name">Neo Panes</h1>
      {/* Replace the static tagline with your AnimatedText component */}
      <p className="tagline">A passionate Web Developer building <AnimatedText /> and amazing things for the web.</p>
      {/* The AnimatedText component will dynamically fill in the "Shopify Templates, WordPress Templates, React Applications" part */}

      <div className="call-to-action">
        <Link to="/projects" className="btn primary-btn">View My Work</Link>
        <Link to="/contact" className="btn secondary-btn">Get In Touch</Link>
      </div>

      <div className="social-links">

        <p className="direct-email-text">Or, reach me directly at:</p>
        <a href="mailto:salmineo.panes@gmail.com" className="direct-email-link">
          <FontAwesomeIcon icon={faEnvelope} /> salmineo.panes@gmail.com
        </a>
        <div  style={{ display:'none'}}>
        <a href="https://github.com/putchiputchi" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        </div>
      </div>

    </div>
  </div>
  );
}

function App() {
  return (
    // HashRouter is used for compatibility with GitHub Pages static hosting
    // It uses URLs like yoursite.github.io/#/about
    // If you were hosting on a server that could handle client-side routing rewrites,
    // you would use BrowserRouter.
    <Router>
      <Navbar /> {/* The Navbar will always be visible */}

      <Routes>
        {/* Define your routes */}
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />
        {/* Route for the About Me page */}
        <Route path="/about" element={<About />} />
        {/* Route for the My Projects page */}
        <Route path="/projects" element={<Projects />} />
        {/* Route for the Contact page */}
        <Route path="/contact" element={<Contact />} />

        {/* Optional: A fallback for any undefined routes (e.g., a 404 page) */}
        {/* For a simple portfolio, you might not strictly need a dedicated 404 route if HashRouter is used,
            as invalid hash paths just don't match any component. */}
        {/* <Route path="*" element={<div><h1>404 - Page Not Found</h1><p>The page you are looking for does not exist.</p></div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
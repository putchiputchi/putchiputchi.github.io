import React from 'react';
import './App.css'; // You can remove default App.css content or create your own

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, I'm Putchi Putchi!</h1>
        <p>Welcome to my portfolio. I'm a [Your Skill/Role] passionate about [Your Interest].</p>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">My Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" style={{ padding: '20px', margin: '20px', border: '1px solid #ccc' }}>
        <h2>About Me</h2>
        <p>I'm a budding [Your Field] who loves creating amazing things.</p>
      </section>

      <section id="projects" style={{ padding: '20px', margin: '20px', border: '1px solid #ccc' }}>
        <h2>My Projects</h2>
        <p>Project 1: [Short Description]</p>
        <p>Project 2: [Short Description]</p>
        {/* Add more projects */}
      </section>

      <footer id="contact" style={{ padding: '20px', margin: '20px', border: '1px solid #ccc' }}>
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: [Your LinkedIn Profile]</p>
      </footer>
    </div>
  );
}

export default App;
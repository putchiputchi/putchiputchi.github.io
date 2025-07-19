// src/components/About.js
import React from 'react';
import '../About.css'; // <--- IMPORT THE NEW CSS FILE
import me from '../images/me.jpg'

function About() {
  return (
    <section id="about" className="about-section"> {/* Use a class for the main section */}
      <div className="about-content"> {/* Container for padding and centering */}
        <h2 className="about-heading">About Me</h2>

        {/* Profile Picture Placeholder */}
        <div className="profile-picture-container">
          <img
            src={ me } // <--- REPLACE WITH YOUR PROFILE PICTURE URL
            alt="Neo Panes"
            className="profile-picture"
          />
        </div>

        
        <p className="about-text">
          Hi, I'm <strong>Neo Panes</strong>! I am a passionate <strong>Web Developer</strong> dedicated to <strong>building modern websites, Shopify themes, and React applications with clean code and user-friendly design</strong>. My career is driven by a constant curiosity for how things work and a desire to create impactful digital experiences.
        </p>
        <p className="about-text">
          My journey in technology officially began when I pursued a <strong>Diploma in Software Engineering</strong> at <strong>Aptech Computer Education Bacolod Learning Center</strong>, graduating in <strong>2008</strong> after two years of intensive study starting in 2006. This foundational education provided me with a strong understanding of software principles and development methodologies.
        </p>
        <p className="about-text">
          Shortly after, I joined a private company focused on generating leads for a scholarship school. It was here that I truly started exploring the vast possibilities of web development beyond formal education. This role served as a crucial springboard into my freelance career, allowing me to dive deep into diverse web projects.
        </p>
        <p className="about-text">
          Since then, my expertise has grown, encompassing a wide range of technologies and platforms. I initially immersed myself in <strong>WordPress website development</strong>, building custom themes and robust solutions. This naturally extended to <strong>Shopify</strong>, where I've crafted tailored e-commerce experiences. More recently, I've embraced the power of <strong>React</strong>, developing dynamic and interactive web applications.
        </p>
        <p className="about-text">
          I enjoy constantly learning and building new things, striving to improve my skills in:
        </p>

        {/* Skills list styled as "tags" or "chips" */}
        <ul className="skills-list">
          <li className="skill-item">&#10003; React.js & Next.js</li>
          <li className="skill-item">&#10003; Shopify Theme Development</li>
          <li className="skill-item">&#10003; WordPress & PHP</li>
          <li className="skill-item">&#10003; MongoDB & Node.js</li>
          {/* Add more skills here */}
        </ul>

        <p className="about-text">
          When I'm not designing or coding, you can find me spending time with my kids, solving real-world problems with code, or exploring new creative side projects.
        </p>
        {/* Add more details about your education, experience, philosophy */}
      </div>
    </section>
  );
}

export default About;
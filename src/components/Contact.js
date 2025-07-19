// src/components/Contact.js
import React, { useState } from 'react';
import '../Contact.css'; // <--- IMPORT THE NEW CSS FILE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // <--- Import Font Awesome
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // <--- CORRECTED IMPORT
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Brands icons remain here


function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false); // To show error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // Prevent default form submission if you want to use client-side logic
    // For Formspree's direct action, you typically DON'T prevent default unless handling with Fetch API
    // e.preventDefault(); // Uncomment if you decide to use fetch API for submission

    setSubmitted(true); // Set state to show success message immediately

    // Optional: Reset form after submission (if not using Formspree's redirect)
    // setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-intro-text">
          I'm always open to new opportunities, collaborations, and conversations.
          Whether you have a project idea, a question, or just want to say hello,
          feel free to reach out.
        </p>

        {/* Conditional rendering for success/error messages */}
        {submitted && !error && (
          <p className="submission-message success">Thank you for your message! I'll get back to you soon.</p>
        )}
        {error && (
          <p className="submission-message error">Oops! Something went wrong. Please try again or email me directly.</p>
        )}

        <form
          action="https://formspree.io/f/xjkrojap" // <--- REPLACE WITH YOUR ACTUAL FORMSPREE ENDPOINT
          method="POST"
          className="contact-form"
          onSubmit={handleSubmit} // Keep onSubmit to set 'submitted' state
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>

          <input type="hidden" name="_next" value="https://putchiputchi.github.io/#/contact?success=true" />
          {/* Optional: spam protection, uncomment if you enable on Formspree dashboard */}
          {/* <input type="text" name="_gotcha" style={{display: 'none'}} /> */}

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        <div className="contact-info-block">
          <p className="response-time-text">I typically respond within 24-48 hours.</p>
          <p className="direct-email-text">Or, reach me directly at:</p>
          <a href="mailto:salmineo.panes@gmail.com" className="direct-email-link">
            <FontAwesomeIcon icon={faEnvelope} /> salmineo.panes@gmail.com
          </a>
        </div>


        <div className="social-links-contact" style={{ display:'none'}}>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon-contact">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a href="https://github.com/putchiputchi" target="_blank" rel="noopener noreferrer" className="social-icon-contact">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
// src/components/ProjectModal.js
import React, { useState } from 'react';
// We will put modal-specific CSS in Projects.css to keep it consolidated
// import './Projects.css'; // This is already imported by Projects.js, but useful to know

function ProjectModal({ project, onClose }) {const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

    const nextScreenshot = () => {
      setCurrentScreenshotIndex((prevIndex) => (prevIndex + 1) % project.screenshots.length);
    };
  
    const prevScreenshot = () => {
      setCurrentScreenshotIndex((prevIndex) =>
        (prevIndex - 1 + project.screenshots.length) % project.screenshots.length
      );
    };
  
    if (!project) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={onClose}>&times;</button>
  
          <h3 className="modal-title">{project.title}</h3>
  
          {/* New scrollable container for image and details */}
          <div className="modal-scroll-content">
              {/* Image Carousel */}
              <div className="modal-image-carousel">
                <div className="modal-image-wrapper">
                  <img
                    src={project.screenshots[currentScreenshotIndex]}
                    alt={project.title}
                    className="modal-main-image contained-image"
                  />
                </div>
                {project.screenshots.length > 1 && (
                  <>
                    <button className="carousel-btn prev" onClick={prevScreenshot}>&#10094;</button>
                    <button className="carousel-btn next" onClick={nextScreenshot}>&#10095;</button>
                  </>
                )}
                {project.screenshots.length > 1 && (
                  <div className="carousel-dots">
                    {project.screenshots.map((_, index) => (
                      <span
                        key={index}
                        className={`dot ${index === currentScreenshotIndex ? 'active' : ''}`}
                        onClick={() => setCurrentScreenshotIndex(index)}
                      ></span>
                    ))}
                  </div>
                )}
              </div>
  
              {/* Project Details */}
              <div className="modal-details-section">
                <p className="modal-description">{project.details}</p>
                <p className="modal-tech-stack">
                  <strong>Technologies Used:</strong> {project.technologies.join(', ')}
                </p>
                <p className="modal-type"><strong>Project Type:</strong> {project.type}</p>
                {/* No links here anymore, they move to a fixed bottom div */}
              </div>
          </div> {/* End of modal-scroll-content */}
  
          {/* Links are now outside the scrollable content, fixed at the bottom */}
          <div className="modal-links-fixed"> {/* NEW CLASS FOR FIXED LINKS CONTAINER */}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
                  View on GitHub
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-btn live-btn">
                  Live Demo
                </a>
              )}
          </div>
  
        </div>
      </div>
    );
  }
  
  export default ProjectModal;
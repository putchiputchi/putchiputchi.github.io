// src/components/Projects.js
import React, { useEffect, useState } from 'react';
import '../Project.css';
import ProjectModal from './ProjectModal';
import AllProjectsModal from './AllProjectsmodal'; // <--- NEW: Import the new AllProjectsModal
import projectWordpress1 from '../images/projects/2013/Park Acupuncture.png'
import projectWordpress2 from '../images/projects/2013/Health Insurance Florida.png'
import projectWordpress3 from '../images/projects/2013/Jax Axe.png'
import projectWordpress4 from '../images/projects/2013/The Military Heart.png'
import BROL1 from '../images/projects/2013/BROL - home-proof-changes.jpg'
import BROL2 from '../images/projects/2013/BROL - Vacations - Single.jpg'
import BROL3 from '../images/projects/2013/BROL - Booking-Form-Open.jpg'
import chavet1 from '../images/projects/2013/chauvet-dj.png'
import Rosetta1 from '../images/projects/2013/rosetta-Home.jpg'
import Rosetta2 from '../images/projects/2013/rosetta-About.jpg'
import Rosetta3 from '../images/projects/2013/rosetta-Food.jpg'
import LTC1 from '../images/projects/2013/LifestimeCapsule-1.png'
import LTC2 from '../images/projects/2013/LifestimeCapsule-2.png'
import cyberalerts1 from '../images/projects/2013/cyberalerts.png'
import chauvetpro1 from '../images/projects/2013/chauvet-pro-1.png'
import chauvetpro2 from '../images/projects/2013/chauvet-pro-2.png'
import chauvetpro3 from '../images/projects/2013/chauvet-pro-3.png'
import ionicaid1 from '../images/projects/2023/ionicaid-1.png'
import phaselabs1 from '../images/projects/2023/phaselabs1.png'
import aspgear from '../images/projects/2023/aspgear-index.jpg'
import edgecatering1 from '../images/projects/2023/edge-catering-1.jpg'
import palit1 from '../images/projects/2023/palit-home.png'
import palit2 from '../images/projects/2023/palit-2.png'
import palit3 from '../images/projects/2023/palit-3.png'
import gosu1 from '../images/projects/2023/gosu-1.png'
import gosu2 from '../images/projects/2023/gosu-2.png'
import gosu3 from '../images/projects/2023/gosu-3.png'
import gosu4 from '../images/projects/2023/gosu-4.png'
import eminence1 from '../images/projects/2023/eminence1.png'
import segmate1 from '../images/projects/2023/segmate1.png'
import majesticfountains1 from '../images/projects/2023/majesticfountains1.png'


import soundroomca from '../images/projects/2023/shopify-soundroom.png'
import advantagebox from '../images/projects/2023/shopify-advantagebox.png'
import cleanairkits from '../images/projects/2023/cleanairkits.png'



function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllProjectsModal, setShowAllProjectsModal] = useState(false);

  // NEW: useEffect to manage body scroll
  useEffect(() => {
    // Check if either modal is open
    if (selectedProject || showAllProjectsModal) {
      document.body.style.overflow = 'hidden'; // Disable scroll on body
      document.body.style.paddingRight = '15px'; // Add padding to prevent content shift if scrollbar disappears
    } else {
      document.body.style.overflow = 'unset'; // Enable scroll
      document.body.style.paddingRight = '0'; // Remove padding
    }

    // Cleanup function: This runs when the component unmounts or dependencies change
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0';
    };
  }, [selectedProject, showAllProjectsModal]); // Dependencies: Re-run effect when modal states change



  // IMPORTANT:
  // ONLY KEEP 5 SAMPLE PROJECTS HERE INITIALLY.
  // WHEN YOU ARE READY, REPLACE THIS ARRAY WITH YOUR CURATED LIST OF ~50 BEST PROJECTS.
  const projects = [
  {
      title: "CyberAlerts",
      description: "Worked on the entire project from front-end to backend to its API.",
      details: "The application is created to protect you and monitor your assets.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
      type: "Full-Stack",
      category: "full-stack",
      image: cyberalerts1, // Replace with your image
      screenshots: [cyberalerts1],
      liveLink: "https://cyberalerts.net/"
  },
  {
      title: "the Soundroom",
      description: "Shopify project",
      technologies: ["Shopify Theme", "Liquid", "Figma to Shopify Theme","JavaScript", "CSS","HTML", "Shopify 2.0"],
      type: "Shopify",
      category: "shopify",
      image: soundroomca, // Replace with your image
      screenshots: [soundroomca],
      liveLink: "https://www.soundroom.ca/" // Can be empty if no public live demo
  },
  {
      title: "Advantage Box",
      description: "Shopify project",
      technologies: ["Shopify Theme", "Liquid", "Figma to Shopify Theme","JavaScript", "CSS","HTML", "Shopify 2.0"],
      type: "Shopify",
      category: "shopify",
      image: advantagebox, // Replace with your image
      screenshots: [advantagebox],
      liveLink: "https://advantagebox.com/" // Can be empty if no public live demo
  },
  {
      title: "Clean Air Kits",
      description: "Shopify project",
      technologies: ["Shopify Theme", "Liquid", "Figma to Shopify Theme","JavaScript", "CSS","HTML", "Shopify 2.0"],
      type: "Shopify",
      category: "shopify",
      image: cleanairkits, // Replace with your image
      screenshots: [cleanairkits],
      liveLink: "https://www.cleanairkits.com/" // Can be empty if no public live demo
  },
  {
      title: "Ionic AID",
      description: "Shopify project",
      technologies: ["Shopify Theme", "Liquid", "PSD to Shopify Theme","JavaScript", "CSS","HTML","Shopify 2.0"],
      type: "Shopify",
      category: "shopify",
      image: ionicaid1, // Replace with your image
      screenshots: [ionicaid1],
      liveLink: "https://www.ionicaid.com/" // Can be empty if no public live demo
  },
  {
      title: "Palit",
      description: "Custom Crpyto Template",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "HTML5", "CSS3", "Javascript"],
      type: "Full-Stack",
      category: "full-stack",
      image: palit1, // Replace with your image
      screenshots: [palit1, palit2, palit3]
  },
  {
    title: "Eminence Print",
    description: "Worked for the Wordpress Theme..",
    technologies: ["WordPress", "Custom Plugins", "PDF", "Print", "PHP", "CSS", "JavaScript","jQuery"],
    type: "Wordpress",
    category: "wordpress",
    image: eminence1, // Replace with your image
    screenshots: [eminence1],
    liveLink: "https://eminenceprint.com/"
  },
  {
      title: "GosuSwap",
      description: "Custom Crpyto Template",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "HTML5", "CSS3", "Javascript"],
      type: "Full-Stack",
      category: "full-stack",
      image: gosu1, // Replace with your image
      screenshots: [gosu1, gosu2, gosu3,gosu4]
  },
  {
      title: "SegMateApp",
      description: "Custom HTML5/Javascript Template",
      technologies: ["HTML5", "CSS3", "Javascript"],
      type: "HTML",
      category: "html",
      image: segmate1, // Replace with your image
      screenshots: [segmate1],
      liveLink : "https://segmateapp.com/"
  },
  {
      title: "Phaze Labs",
      description: "Shopify project",
      technologies: ["Shopify Theme", "Liquid"],
      type: "Shopify",
      category: "shopify",
      image: phaselabs1, // Replace with your image
      screenshots: [phaselabs1],
      liveLink: "https://phazelabs.com/" // Can be empty if no public live demo
  },
  {
      title: "Life's Time Capsule",
      description: "A website where you can store your photos and share to your private love ones.",
      details: "Worked as Main Front End Developer and PHP Developer for the multi project Life's Time Capsule. Developed their First android and iOS app with Telerik Platform and coded in jQuery. Worked on Integrating Facebook Application into Website e.g. Photo Pulling and Photo Pushing, Video Pushing and Pulling. Auto Share to news Feed profile. Worked on the Dropbox Application that will pull and save the data into their capsule account.",
      technologies: ["PHP", "HTML5", "CSS3","jQuery","MOBILE APPLICATION"],
      type: "PHP Application",
      category: "vintage",
      image: LTC1, // Replace with your image
      screenshots: [LTC1, LTC2],
      liveLink: "https://lifestimecapsule.com/"
  },
  {
    title: "Chauvet Professional",
    description: "Worked for the Wordpress Theme. A WPML Site and worked for custom wordpress plugins.",
    technologies: ["WordPress", "WPML", "Custom Plugins", "PDF", "Print", "PHP", "CSS", "JavaScript","jQuery"],
    type: "WPML",
    category: "wordpress",
    image: chauvetpro1, // Replace with your image
    screenshots: [chauvetpro1,chauvetpro2,chauvetpro3],
    liveLink: "https://www.chauvetprofessional.com"
  },
  {
    title: "CHAUVETDJ",
    description: "Converted their PSD to Wordpress Theme",
    technologies: ["WordPress", "WPML", "PHP", "CSS", "JavaScript","jQuery"],
    type: "WPML",
    category: "wordpress",
    image: chavet1, // Replace with your image
    screenshots: [chavet1],
    liveLink: "https://www.chauvetdj.com/"
  },
  {
      title: "Rosetta Bakery | The Itallian Bakery",
      description: "Converted their PSD to Wordpress Theme",
      technologies: ["WordPress", "PHP", "CSS", "JavaScript","jQuery"],
      type: "WordPress Theme",
      category: "wordpress",
      image: Rosetta1, // Replace with your image
      screenshots: [Rosetta1,Rosetta2,Rosetta3],
      liveLink: "https://www.rosettabakery.com/"
  },
  {
      title: "Majestic Fountains",
      description: "Shopify project",
      technologies: ["Shopify Theme", "Liquid", "Node"],
      type: "Shopify",
      category: "shopify",
      image: majesticfountains1, // Replace with your image
      screenshots: [majesticfountains1],
      liveLink: "https://www.majesticfountains.com/" // Can be empty if no public live demo
  },
  {
      title: "ASP Gear USA",
      description: "Shopify project",
      technologies: ["Shopify Theme", "Liquid"],
      type: "Shopify",
      category: "shopify",
      image: aspgear, // Replace with your image
      screenshots: [aspgear],
      liveLink: "https://www.asp-usa.com/" // Can be empty if no public live demo
  },
  {
      title: "BROL",
      description: "Converted their PSD to Wordpress Theme",
      technologies: ["WordPress", "PHP", "CSS", "JavaScript","jQuery"],
      type: "WordPress Theme",
      category: "wordpress",
      image: BROL1, // Replace with your image
      screenshots: [BROL1,BROL2,BROL3],
      liveLink: "https://www.brol.com/"
  },
  {
      title: "EDGE Catering",
      description: "Shopify project",
      technologies: ["Shopify Theme", "Liquid"],
      type: "Shopify",
      category: "vintage",
      image: edgecatering1, // Replace with your image
      screenshots: [edgecatering1],
  },
  {
      title: "Jacksonvill Axemen Rugby League",
      description: "Converted their PSD to Wordpress Theme",
      technologies: ["WordPress", "PHP", "CSS", "JavaScript","jQuery"],
      type: "WordPress Theme",
      category: "wordpress",
      image: projectWordpress3, // Replace with your image
      screenshots: [projectWordpress3],
      liveLink: "https://www.jaxaxe.com/"
  },
  {
      title: "The Military Heart USA",
      description: "Converted their PSD to Wordpress Theme",
      technologies: ["WordPress", "PHP", "CSS", "JavaScript","jQuery"],
      type: "WordPress Theme",
      category: "wordpress",
      image: projectWordpress4, // Replace with your image
      screenshots: [projectWordpress4],
      liveLink: "https://www.facebook.com/TheMilitaryHeartUSA/"
  },
  {
      title: "Health Insurance Florida",
      description: "Converted their PSD to Wordpress Theme",
      technologies: ["WordPress", "PHP", "CSS", "JavaScript","jQuery"],
      type: "WordPress Theme",
      category: "vintage",
      image: projectWordpress2, // Replace with your image
      screenshots: [projectWordpress2],
      liveLink: ""
  },
  {
      title: "Park Acupuncture",
      description: "Converted their PSD to Wordpress Theme",
      technologies: ["WordPress", "PHP", "ACF", "CSS", "JavaScript","jQuery"],
      type: "WordPress Theme",
      category: "vintage",
      image: projectWordpress1, // Replace with your image
      screenshots: [projectWordpress1],
      liveLink: ""
  },
  
    // IMPORTANT: Add your ~45-50+ best projects here, ensuring they all have
    // 'id', 'title', 'description', 'details', 'technologies', 'type', 'category', 'image', 'screenshots', 'githubLink', 'liveLink'
    // This full list will be passed to the AllProjectsModal.
    // Example: { id: 6, title: "Another Modern Web Project", category: "modern-web", /* ... other fields */ },
    // Example: { id: 7, title: "Another Vintage Project", category: "vintage", /* ... other fields */ },
    // ... continue up to your desired total number of "best" projects.
  ];

  const openIndividualProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeIndividualProjectModal = () => {
    setSelectedProject(null);
  };

  const openAllProjectsModal = () => {
    setShowAllProjectsModal(true);
  };

  const closeAllProjectsModal = () => {
    setShowAllProjectsModal(false);
  };

  // Filter projects based on active category
  const filteredProjects = projects.filter(project =>
    activeCategory === 'all' ? true : project.category === activeCategory
  );

  // Display only the first 9 projects for the main view
  const projectsToDisplay = filteredProjects.slice(0, 12); // <--- NOW SHOWING 12 PROJECTS

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">My Recent Projects</h2>

      {/* Category Filter Buttons */}
      <div className="project-categories">
        <button
          className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => { setActiveCategory('all'); }}
        >
          All Categories
        </button>
        <button
          className={`category-btn ${activeCategory === 'shopify' ? 'active' : ''}`}
          onClick={() => { setActiveCategory('shopify'); }}
        >
          Shopify
        </button>
        <button
          className={`category-btn ${activeCategory === 'wordpress' ? 'active' : ''}`}
          onClick={() => { setActiveCategory('wordpress'); }}
        >
          WordPress
        </button>
        <button
          className={`category-btn ${activeCategory === 'full-stack' ? 'active' : ''}`}
          onClick={() => { setActiveCategory('full-stack'); }}
        >
          Full-Stack
        </button>
        <button
          className={`category-btn ${activeCategory === 'vintage' ? 'active' : ''}`}
          onClick={() => { setActiveCategory('vintage'); }}
        >
          Vintage Projects
        </button>
      </div>

      <div className="projects-grid">
        {projectsToDisplay.length > 0 ? (
          projectsToDisplay.map(project => (
            <div key={project.id} className="project-card" onClick={() => openIndividualProjectModal(project)}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                {project.type && <span className="project-type-tag">{project.type}</span>}
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-technologies">
                  <strong>Tech Stack:</strong> {project.technologies.join(', ')}
                </p>
                <div className="project-links">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn github-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn live-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  )}
                  {(!project.githubLink && !project.liveLink) && (
                      <button className="project-btn details-btn" onClick={(e) => { e.stopPropagation(); openIndividualProjectModal(project); }}>View Details</button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-projects-message">No projects found for this category yet.</p>
        )}
      </div>

      {/* Button to open the "All Projects" modal */}
      {/* This button will always show the total count of projects in your 'projects' array */}
      <button className="view-all-projects-btn" onClick={openAllProjectsModal}>
        View All My Projects ({projects.length})
      </button>

      {/* Individual Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeIndividualProjectModal} />
      )}

      {/* NEW: All Projects Modal */}
      {showAllProjectsModal && (
        <AllProjectsModal
          projects={projects} // Pass the entire 'projects' array to this modal
          onClose={closeAllProjectsModal}
          onProjectSelect={openIndividualProjectModal} // Allow it to open the individual project modal
        />
      )}
    </section>
  );
}

export default Projects;
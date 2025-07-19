// src/components/AllProjectsModal.js
import React, { useState } from 'react';
// import './Projects.css'; // Assume Projects.css contains all modal styles

function AllProjectsModal({ projects, onClose, onProjectSelect }) {
  // Optional: You could add search/filter capabilities here within this modal if 50+ projects are too many
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredProjects = projects.filter(project => {
    const matchesText = project.title.toLowerCase().includes(filterText.toLowerCase()) ||
                        project.description.toLowerCase().includes(filterText.toLowerCase()) ||
                        project.technologies.some(tech => tech.toLowerCase().includes(filterText.toLowerCase()));
    const matchesCategory = filterCategory === 'all' ? true : project.category === filterCategory;
    return matchesText && matchesCategory;
  });

  // Get unique categories for filtering within this modal
  const uniqueCategories = ['all', ...new Set(projects.map(p => p.category))];

  return (
    <div className="modal-overlay all-projects-modal-overlay" onClick={onClose}>
      <div className="modal-content all-projects-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>

        <h3 className="modal-title">All My Projects</h3>

        {/* Optional Filters within this modal */}
        <div className="all-projects-filters">
            <input
                type="text"
                placeholder="Search projects..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="project-search-input"
            />
            <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="project-category-select"
            >
                {uniqueCategories.map(category => (
                    <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category.replace(/-/g, ' ')}
                    </option>
                ))}
            </select>
        </div>


        <div className="all-projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <div key={project.id} className="project-card-small" onClick={() => onProjectSelect(project)}>
                <div className="project-image-container-small">
                  <img src={project.image} alt={project.title} className="project-image-small" />
                  {project.type && <span className="project-type-tag-small">{project.type}</span>}
                </div>
                <div className="project-info-small">
                  <h4 className="project-title-small">{project.title}</h4>
                  <p className="project-tech-small">{project.technologies[0]}...</p> {/* Just show first tech */}
                </div>
              </div>
            ))
          ) : (
            <p className="no-projects-message">No projects match your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllProjectsModal;
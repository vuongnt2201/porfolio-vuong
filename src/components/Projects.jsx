import React from 'react'
import { projects } from '../data/portfolioData'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {/* Placeholder cho ảnh project */}
                <div className="image-overlay">
                  <h3>{project.title}</h3>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> View Project
                    </a>
                  )}
                  {project.alternateLink && (
                    <a href={project.alternateLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> LINE Version
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


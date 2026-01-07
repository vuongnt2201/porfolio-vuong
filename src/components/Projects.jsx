import React from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/portfolioData'
import { FaExternalLinkAlt } from 'react-icons/fa'
import tadokamiBackground from '../assets/fslgamehub/tadokami/tadokami_background.png'
import fslImage from '../assets/image/fsl.png'
import gowImage from '../assets/image/gow.jpg'
import './Projects.css'

const Projects = () => {
  const navigate = useNavigate()

  const handleProjectClick = (project) => {
    if (project.detailRoute) {
      navigate(project.detailRoute)
    } else if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer')
    }
  }

  const customBackgrounds = {
    '/god-of-weapons': gowImage,
    '/tadokami': tadokamiBackground,
    '/fsl-gamehub': fslImage
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const projectImage = project.detailRoute ? customBackgrounds[project.detailRoute] : null
            const dynamicStyle = projectImage
              ? {
                  backgroundImage: `linear-gradient(135deg, rgba(7, 7, 20, 0.75), rgba(17, 17, 35, 0.65)), url(${projectImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }
              : {}

            return (
              <div 
                key={index} 
                className="project-card"
                onClick={() => project.detailRoute && handleProjectClick(project)}
                style={{ cursor: project.detailRoute ? 'pointer' : 'default' }}
              >
                <div 
                  className="project-image"
                  style={dynamicStyle}
                >
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
                    {project.detailRoute ? (
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          navigate(project.detailRoute)
                        }}
                        className="project-link"
                      >
                        <FaExternalLinkAlt /> View Details
                      </button>
                    ) : (
                      <>
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
                      </>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects


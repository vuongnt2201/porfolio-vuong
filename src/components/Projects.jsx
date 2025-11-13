import React from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/portfolioData'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import tadokamiBackground from '../assets/fslgamehub/tadokami/tadokami_background.png'
import './Projects.css'

const Projects = () => {
  const navigate = useNavigate()

  const handleProjectClick = (project) => {
    if (project.hasDetailPage) {
      navigate('/tadokami')
    } else if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer')
    }
  }

  const getProjectImage = (project) => {
    if (project.title === 'Tadokami - Telegram Mini App') {
      return tadokamiBackground
    }
    return null
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const projectImage = getProjectImage(project)
            return (
              <div 
                key={index} 
                className="project-card"
                onClick={() => project.hasDetailPage && handleProjectClick(project)}
                style={{ cursor: project.hasDetailPage ? 'pointer' : 'default' }}
              >
                <div 
                  className="project-image"
                  style={projectImage ? { 
                    backgroundImage: `url(${projectImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  } : {}}
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
                    {project.hasDetailPage ? (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          navigate('/tadokami')
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


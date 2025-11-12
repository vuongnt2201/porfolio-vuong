import React from 'react'
import { experience } from '../data/portfolioData'
import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                <p className="duration">{exp.duration} • {exp.location}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience


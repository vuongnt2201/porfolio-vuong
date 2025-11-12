import React from 'react'
import { personalInfo, education } from '../data/portfolioData'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{personalInfo.bio}</p>
            <p>
              I specialize in creating engaging gaming experiences and building robust software solutions. 
              With a strong foundation in both game development and web technologies, I bring ideas to life 
              through code and creativity.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <strong>Email:</strong> {personalInfo.email}
              </div>
              <div className="detail-item">
                <strong>Location:</strong> {personalInfo.location}
              </div>
            </div>
          </div>
          <div className="education">
            <h3>Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <h4>{edu.degree}</h4>
                <p className="school">{edu.school}</p>
                <p className="duration">{edu.duration}</p>
                <p className="description">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


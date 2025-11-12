import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{personalInfo.name}</span>
          </h1>
          <h2 className="hero-subtitle">{personalInfo.title}</h2>
          <p className="hero-description">
            {personalInfo.bio}
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
          <div className="social-links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            {/* Bạn có thể thêm ảnh profile tại đây */}
            <div className="avatar-circle">
              <span>{personalInfo.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-down" aria-label="Scroll down">
        <FaArrowDown />
      </a>
    </section>
  )
}

export default Hero


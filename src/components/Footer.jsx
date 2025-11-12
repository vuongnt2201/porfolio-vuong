import React from 'react'
import { personalInfo } from '../data/portfolioData'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
        <p>Built with React & Vite</p>
      </div>
    </footer>
  )
}

export default Footer


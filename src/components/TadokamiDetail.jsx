import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaCode, FaMemory, FaServer, FaGamepad } from 'react-icons/fa'
import tadokamiBackground from '../assets/fslgamehub/tadokami/tadokami_background.png'
import gameplayCombat from '../assets/fslgamehub/tadokami/gameplay_combat.gif'
import changeLanguage from '../assets/fslgamehub/tadokami/change-language.gif'
import './TadokamiDetail.css'

const TadokamiDetail = () => {
  const navigate = useNavigate()

  const techniques = [
    {
      icon: <FaGamepad />,
      title: "Turn-Based Combat System",
      description: "Developed a comprehensive turn-based combat system with strategic gameplay mechanics, character abilities, and dynamic battle scenarios.",
      image: gameplayCombat,
      details: [
        "Turn-based state machine architecture",
        "Character action queue and priority system",
        "Combat animations and visual feedback",
        "Damage calculation and status effect management"
      ]
    },
    {
      icon: <FaCode />,
      title: "WebGL Build & JS Library Integration",
      description: "Implemented WebGL build techniques with JavaScript library integration and maximum optimization to run on iOS devices with low memory requirements (only 128MB RAM).",
      details: [
        "Optimized Unity WebGL build settings for minimal memory footprint",
        "Integrated custom JavaScript libraries for platform-specific features",
        "Memory management and garbage collection optimization",
        "Texture compression and asset streaming for low-end devices"
      ]
    },
    {
      icon: <FaMemory />,
      title: "Addressable Assets & Localization",
      description: "Utilized Unity Addressable Asset System for game objects and localization to prevent lag during gameplay. Assets are loaded on-demand, reducing initial load time and memory usage.",
      image: changeLanguage,
      details: [
        "Addressable Asset System for dynamic content loading",
        "Multi-language support with image-based localization",
        "On-demand asset loading to reduce memory footprint",
        "Efficient asset caching and release strategies"
      ]
    },
    {
      icon: <FaServer />,
      title: "Unity Web Request & Backend Integration",
      description: "Implemented Unity Web Request to create API calls for interacting with the existing Telegram app backend server. This enables real-time data synchronization and user progress tracking.",
      details: [
        "RESTful API integration with Telegram backend",
        "Asynchronous web requests for non-blocking operations",
        "Error handling and retry mechanisms",
        "Secure data transmission and authentication"
      ]
    }
  ]

  return (
    <div className="tadokami-detail">
      <div className="tadokami-hero" style={{ backgroundImage: `url(${tadokamiBackground})` }}>
        <div className="hero-overlay">
          <button className="back-button" onClick={() => navigate('/')}>
            <FaArrowLeft /> Back to Portfolio
          </button>
          <div className="hero-content">
            <h1 className="tadokami-title">TADOKAMI</h1>
            <p className="tadokami-subtitle">A Turn-Based RPG Mini Game</p>
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-value">2 Months</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Role</span>
                <span className="meta-value">Solo Developer</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Platform</span>
                <span className="meta-value">Telegram Mini App</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tadokami-content">
        <div className="container">
          <section className="project-overview">
            <h2>Project Overview</h2>
            <p>
              Tadokami is a turn-based RPG mini-game developed for the FSL Game Hub platform on Telegram. 
              This project was completed in 2 months, with all code-related work handled independently. 
              The game features a sophisticated combat system, multi-language support, and seamless backend 
              integration, all optimized to run smoothly on low-end iOS devices with only 128MB of memory.
            </p>
            <div className="team-info">
              <div className="team-role">
                <h3>Development Team</h3>
                <ul>
                  <li><strong>Developer:</strong> Solo development - All code implementation</li>
                  <li><strong>Backend:</strong> User data management and server integration</li>
                  <li><strong>Designer & Artist:</strong> Content creation and asset production</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="techniques-section">
            <h2>Technical Implementation</h2>
            <div className="techniques-grid">
              {techniques.map((technique, index) => (
                <div key={index} className={`technique-card ${technique.image ? 'has-image' : ''}`}>
                  <div className="technique-content">
                    <div className="technique-header">
                      <div className="technique-icon">{technique.icon}</div>
                      <h3>{technique.title}</h3>
                    </div>
                    <p className="technique-description">{technique.description}</p>
                    <ul className="technique-details">
                      {technique.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  {technique.image && (
                    <div className="technique-image">
                      <img src={technique.image} alt={technique.title} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="challenges-section">
            <h2>Key Challenges & Solutions</h2>
            <div className="challenges-grid">
              <div className="challenge-card">
                <h3>Memory Optimization</h3>
                <p>
                  The biggest challenge was ensuring the game runs smoothly on iOS devices with only 128MB RAM. 
                  This required careful memory management, asset streaming, and aggressive optimization techniques.
                </p>
              </div>
              <div className="challenge-card">
                <h3>Real-time Backend Integration</h3>
                <p>
                  Implementing seamless API communication with the Telegram backend while maintaining smooth 
                  gameplay required asynchronous request handling and efficient data caching strategies.
                </p>
              </div>
              <div className="challenge-card">
                <h3>Solo Development</h3>
                <p>
                  Managing the entire codebase independently within a 2-month timeframe required efficient 
                  project planning, modular architecture, and reusable component design.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TadokamiDetail


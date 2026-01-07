import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaMicrochip, FaBrain, FaCogs } from 'react-icons/fa'
import gowBackground from '../assets/image/gow.jpg'
import ecsGif from '../assets/archmage/ecs.gif'
import gasBehaviourTreeGif from '../assets/archmage/gas_behaviour_tree.gif'
import './GodOfWeaponsDetail.css'

const techniques = [
  {
    icon: <FaMicrochip />,
    title: 'DOTS / ECS Enemy Horde System',
    description:
      'Applied Unity DOTS and Entity Component System to handle huge numbers of enemies and projectiles while keeping gameplay smooth on mid-range PCs.',
    image: ecsGif,
    details: [
      'Separated data and behaviour to allow highly cache-friendly processing of enemy stats, positions, and AI state',
      'Batch processed movement, targeting, and damage using Burst jobs and NativeArrays',
      'Used ECS for large scale combat while still running classic GameObjects for UI, VFX, and boss logic',
      'Profiling-driven iteration to keep frame time stable even when the screen is filled with entities'
    ]
  },
  {
    icon: <FaBrain />,
    title: 'Custom Gameplay Ability System (GAS)',
    description:
      'Designed and implemented a custom Gameplay Ability System inspired by Unreal Engine to drive player skills, weapons, and boss attacks.',
    image: gasBehaviourTreeGif,
    details: [
      'Ability definitions stored as data assets with cooldowns, resource costs, tags, and execution graphs',
      'Stackable gameplay effects for buffs, debuffs, and damage-over-time with automatic expiry handling',
      'Tag-based rules to resolve conflicts between abilities (interrupts, immunities, crowd-control)',
      'Built for designers to tweak values without touching code while still staying type-safe in C#'
    ]
  },
  {
    icon: <FaCogs />,
    title: 'Boss AI with Behaviour Tree Integration',
    description:
      'Combined the custom GAS with Behaviour Trees to create readable yet powerful logic for complex bosses in the DLC.',
    details: [
      'Behaviour Trees coordinate phases, positioning, and ability selection based on player state and timers',
      'Blackboard variables shared between Behaviour Tree nodes and abilities for synchronized decision making',
      'Authored reusable sub-trees for patterns like chase, barrage, and enraged phases',
      'Tooling and debug views inside the editor to inspect current node, active abilities, and cooldowns in real time'
    ]
  }
]

const GodOfWeaponsDetail = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="gow-detail">
      <div className="gow-hero" style={{ backgroundImage: `url(${gowBackground})` }}>
        <div className="hero-overlay">
          <button className="back-button" onClick={() => navigate('/')}>
            <FaArrowLeft /> Back to Portfolio
          </button>
          <div className="hero-content">
            <h1 className="gow-title">GOD OF WEAPONS</h1>
            <p className="gow-subtitle">DLC · Horde Action Roguelite</p>
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">Company</span>
                <span className="meta-value">Archmage Games Studio</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Role</span>
                <span className="meta-value">Unity Game Developer</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Tech</span>
                <span className="meta-value">Unity · DOTS · ECS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gow-content">
        <div className="container">
          <section className="project-overview">
            <h2>Project Overview</h2>
            <p>
              God of Weapons is an action roguelite with a focus on fast-paced horde combat and build diversity.
              At Archmage Games Studio I joined the DLC team, working directly with designers and animators to ship new
              enemies, weapons, and bosses while maintaining performance on a wide range of PC configurations.
            </p>
            <div className="team-info">
              <div className="team-role">
                <h3>My Responsibilities</h3>
                <ul>
                  <li>
                    <strong>Combat Content:</strong> Implemented new enemies, weapons, and boss encounters using the
                    internal tools and custom systems.
                  </li>
                  <li>
                    <strong>Game Feel & Polish:</strong> Iterated on hit feedback, timings, and VFX hooks based on
                    designer feedback.
                  </li>
                  <li>
                    <strong>Performance & Stability:</strong> Profiled levels, fixed gameplay / UI bugs, and ensured new
                    content respected existing performance budgets.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="gow-techniques-section">
            <h2>Technical Implementation</h2>
            <div className="gow-techniques-grid">
              {techniques.map((technique, index) => (
                <div key={index} className={`gow-technique-card ${technique.image ? 'gow-has-image' : ''}`}>
                  {technique.image && (
                    <div className="gow-technique-image">
                      <img src={technique.image} alt={technique.title} />
                    </div>
                  )}
                  <div className="gow-technique-content">
                    <div className="gow-technique-header">
                      <div className="gow-technique-icon">{technique.icon}</div>
                      <h3>{technique.title}</h3>
                    </div>
                    <p className="gow-technique-description">{technique.description}</p>
                    <ul className="gow-technique-details">
                      {technique.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="challenges-section">
            <h2>Key Challenges & Solutions</h2>
            <div className="challenges-grid">
              <div className="challenge-card">
                <h3>Scaling Enemy Counts</h3>
                <p>
                  Large enemy waves were essential to the fantasy of the game. By offloading the bulk of enemy logic to
                  DOTS / ECS systems while keeping presentation on GameObjects, we could push far more entities on
                  screen without sacrificing animation quality.
                </p>
              </div>
              <div className="challenge-card">
                <h3>Readable Yet Powerful Boss Logic</h3>
                <p>
                  Bosses required layered behaviours and ability combos. The custom GAS plus Behaviour Trees allowed us
                  to keep the logic inspectable for designers while still supporting complex patterns and phase changes.
                </p>
              </div>
              <div className="challenge-card">
                <h3>Long-term Maintainability</h3>
                <p>
                  DLC content needed to slot cleanly into an existing codebase. Abilities, effects, and ECS systems were
                  built as data-driven modules so future team members can extend them without rewriting core gameplay
                  code.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default GodOfWeaponsDetail



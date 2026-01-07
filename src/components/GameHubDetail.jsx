import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaReact, FaTelegramPlane, FaCreditCard, FaGamepad } from 'react-icons/fa'
import appPayment from '../assets/fslgamehub/gamehub/app_payment.gif'
import miniGame from '../assets/fslgamehub/gamehub/mini_game.gif'
import scratchTicket from '../assets/fslgamehub/gamehub/scratch_ticket.gif'
import cryptoPayment from '../assets/fslgamehub/gamehub/crypto_payment.gif'
import './GameHubDetail.css'

const featureHighlights = [
  {
    icon: <FaReact />,
    title: 'ReactJS Mini App Excellence',
    description: 'Delivered a pixel-perfect React application that mirrors the Telegram mini app design system while remaining responsive for LINE devices.',
    bullets: [
      'Component-driven architecture with shared design tokens',
      'Precise layout matching using CSS clamp + Telegram theme variables',
      'State management tuned for instant scene transitions inside the mini app shell',
      'Progressive enhancement keeps the experience smooth on memory constrained devices'
    ]
  },
  {
    icon: <FaTelegramPlane />,
    title: 'Telegram & LINE Native Behaviors',
    description: 'Deep integration with Telegram Mini App APIs and LINE client behaviors to unlock device sensors, secure storage, and star-based microtransactions.',
    bullets: [
      'Bridged Telegram in-app navigation, modals, haptics, and deep links',
      'Handled user authentication, theme changes, and viewport resize events',
      'Created shared context to reuse Tadokami data between Telegram and LINE',
      'Automated store readiness checks before each deployment'
    ]
  }
]

const miniGames = [
  {
    title: 'Scratch Ticket Rewards',
    media: scratchTicket,
    description: 'A tactile scratch-to-reveal mini game that rewards players with soft currency, badges, and Tadokami boosts. Built with canvas masking and real-time probability balancing.',
    mechanics: [
      'Frame-by-frame GIF for Telegram-compatible animations',
      'Dynamic reward tables served from backend live-ops',
      'SFX + particle bursts triggered only when device perf allows'
    ]
  },
  {
    title: 'Flip Duel',
    media: miniGame,
    description: 'High-tempo coin flipping experience where players bet on Tadokami tokens. Includes streak multipliers and backend-set odds for tournaments.',
    mechanics: [
      'Physics-inspired easing to mimic real-world flipping',
      'Secure bet resolution through signed backend messages',
      'Instant settle UX that keeps the mini app under Telegram latency limits'
    ]
  }
]

const projectHighlights = [
  'Developed comprehensive game hub application integrated with Telegram Mini App and LINE mini app',
  'Built multiple mini game modules including coin flipping, scratch tickets, and task systems',
  'Integrated blockchain technology (Solana, Polygon) and cryptocurrency payment processing',
  'Implemented Telegram Stars payment processing and in-game currency systems',
  'Created 3D animations, sound effects, and responsive UI design',
  'Pixel perfect implementation matching design specifications'
]

const GameHubDetail = () => {
  const navigate = useNavigate()

  return (
    <div className="gamehub-detail">
      <div className="gamehub-hero">
        <div className="hero-overlay">
          <button className="back-button" onClick={() => navigate('/')}>
            <FaArrowLeft /> Back to Portfolio
          </button>
          <div className="hero-content">
            <p className="hero-label">FSL Game Hub · Tadokami Live Ops</p>
            <h1>Game Hub Operations</h1>
            <p className="hero-description">
              React-driven mini app hosting Tadokami and an evolving catalog of earning loops across Telegram and LINE.
              I owned the full client experience before handing data pipelines to backend and content teams.
            </p>
            <div className="hero-meta">
              <div>
                <span>Timeline</span>
                <strong>Feb – Nov 2025</strong>
              </div>
              <div>
                <span>Role</span>
                <strong>Unity & Front-end Developer</strong>
              </div>
              <div>
                <span>Platforms</span>
                <strong>Telegram · LINE Mini App</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gamehub-content">
        <section className="overview-section">
          <h2>Project Overview</h2>
          <p>
            FSL Game Hub is a comprehensive game hub application developed using ReactJS, running on Telegram Mini App and LINE mini app platforms.
            The project was built with pixel-perfect attention to design specifications, ensuring seamless user experience across both platforms.
            I developed the entire front-end application, integrated payment systems, and created multiple mini game modules to engage users and drive currency flow.
          </p>
          <ul className="project-highlights">
            {projectHighlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="feature-section">
          <h2>Implementation Highlights</h2>
          <div className="feature-grid">
            {featureHighlights.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul>
                  {feature.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="payment-section">
          <div className="section-header">
            <p className="eyebrow">Economy & Payments</p>
            <h2>Telegram Stars · In-app Currency · Future Crypto</h2>
            <p>
              Built a modular wallet layer that handles Telegram Stars, soft currency, and hybrid reward pools. The interface is
              ready for a crypto payment rail on LINE once the capture is recorded.
            </p>
          </div>
          <div className="payment-container">
            <div className="crypto-payment-full">
              <img src={cryptoPayment} alt="Crypto payment on LINE mini app" />
              <div className="media-caption">Crypto payment on LINE mini app</div>
            </div>
            <div className="app-payment-row">
              <div className="app-payment-media">
                <img src={appPayment} alt="Telegram payment flow" />
              </div>
              <div className="app-payment-content">
                <h3><FaCreditCard /> Telegram Stars Payment</h3>
                <p>Live payment capture using Stars plus in-app currency overlap. Seamless integration with Telegram's native payment system for instant transactions.</p>
                <ul>
                  <li>Real-time payment processing with optimistic UI updates</li>
                  <li>Secure transaction handling with backend reconciliation</li>
                  <li>Multi-currency support (Stars, in-app currency, hybrid pools)</li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="payment-bullets">
            <li>Transaction orchestration with optimistic UI updates and backend reconciliation</li>
            <li>Fraud-safe purchase receipts shared between Telegram bot backend and mini app</li>
            <li>Reusable hooks so Tadokami scenes can trigger purchases without duplicate logic</li>
          </ul>
        </section>

        <section className="mini-game-section">
          <h2>Embedded Mini Games</h2>
          <p>
            Currency sources range from casual chance mechanics to skill-driven bets. Each module loads on demand so the hub keeps its 128&nbsp;MB budget.
          </p>
          <div className="mini-games-grid">
            {miniGames.map((mini, index) => (
              <div className="mini-card" key={index}>
                <div className="mini-media">
                  <img src={mini.media} alt={mini.title} />
                </div>
                <div className="mini-content">
                  <h3><FaGamepad /> {mini.title}</h3>
                  <p>{mini.description}</p>
                  <ul>
                    {mini.mechanics.map((mechanic, idx) => (
                      <li key={idx}>{mechanic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default GameHubDetail


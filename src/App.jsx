import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TadokamiDetail from './components/TadokamiDetail'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router basename="/porfolio-vuong">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tadokami" element={<TadokamiDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App


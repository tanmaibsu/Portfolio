import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content fade-in">
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__name">Tanmai Kumar Ghosh</h1>
        <h2 className="hero__tagline">
          PhD Researcher & Software Engineer
        </h2>
        <p className="hero__description">
          PhD student in Computer Science at Boise State University with 3+ years
          of industry experience building scalable web applications. My research
          focuses on DNA data storage and error-resilient decoding systems.
        </p>
        <div className="hero__links">
          <a href="mailto:tanmaighosh@u.boisestate.edu" className="hero__btn hero__btn--primary">
            Get in Touch
          </a>
          <a href="https://github.com/tanmaighosh" target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--ghost">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/tanmai-ghosh-8556331a0/" target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--ghost">
            LinkedIn
          </a>
          <a href="https://scholar.google.com/citations?user=5-AGrFUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--ghost">
            Google Scholar
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

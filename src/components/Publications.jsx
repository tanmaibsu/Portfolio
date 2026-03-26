import React from 'react'
import './Publications.css'

const projects = [
  {
    title: 'Error-Resilient DNA Data Decoder',
    description:
      'Built a Python-based decoding engine using heuristic search and statistical validation, achieving over 50% improvement in effective storage density under experimental noise conditions.',
    tags: ['Python', 'Heuristic Search', 'DNA Storage'],
    github: '#',
  },
  {
    title: 'Interactive Parity Grid Analyzer',
    description:
      'Developed a React + Python visualization tool to inspect decoding behavior, error propagation, and parity relations for rapid experimentation and debugging.',
    tags: ['React', 'Python', 'Visualization'],
    github: '#',
  },
]

function Publications() {
  return (
    <section id="publications">
      <h2 className="section-title">Selected Projects</h2>
      <div className="publications-grid">
        {projects.map((proj, i) => (
          <div key={i} className="pub-card fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="pub-card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="pub-card__title">{proj.title}</h3>
            <p className="pub-card__desc">{proj.description}</p>
            <div className="pub-card__tags">
              {proj.tags.map((tag, j) => (
                <span key={j} className="pub-card__tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="publications-scholar fade-in" style={{ animationDelay: '0.3s' }}>
        <p>
          View my research publications on{' '}
          <a
            href="https://scholar.google.com/citations?user=5-AGrFUAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>
        </p>
      </div>
    </section>
  )
}

export default Publications

import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__links">
          <a href="mailto:tanmaighosh@u.boisestate.edu">Email</a>
          <a href="https://github.com/tanmaighosh" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/tanmai-ghosh-8556331a0/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://scholar.google.com/citations?user=5-AGrFUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
        </div>
        <p className="footer__copy">Tanmai Kumar Ghosh</p>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Publications', href: '#publications' },
]

function Navbar({ scrollY }) {
  return (
    <nav className={`navbar ${scrollY > 50 ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">TG</a>
        <div className="navbar__links">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
          <a
            href="/Portfolio/Tanmai_Ghosh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__resume-btn"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import './Experience.css'

const experiences = [
  {
    company: 'Bangladesh Japan IT Limited',
    role: 'Software Engineer',
    period: 'Dec 2021 - Jul 2023',
    location: 'Dhaka, Bangladesh',
    projects: 'Creww, Pocketalk',
    points: [
      'Developed and maintained RESTful APIs and backend services using Ruby, improving performance through systematic debugging and profiling.',
      'Developed frontend modules with React and TypeScript, implementing production features and ensuring responsive design.',
      'Integrated automated testing with TDD, CI/CD pipelines, and deployment monitoring to improve release quality and reliability.',
      'Collaborated cross-functionally with product managers, QA, and infrastructure teams in agile delivery cycles.',
    ],
  },
  {
    company: 'Misfit Technologies Limited',
    role: 'Junior Software Engineer',
    period: 'Oct 2020 - Dec 2021',
    location: 'Dhaka, Bangladesh',
    projects: 'Queue Management System (Consulate General of Bangladesh, Sydney), Shopoth E-Commerce',
    points: [
      'Built and maintained backend services and RESTful APIs using Ruby and Python, adhering to coding standards and optimizing database interactions.',
    ],
  },
  {
    company: 'WellDev Bangladesh Limited',
    role: 'Junior Software Engineer',
    period: 'Nov 2019 - Sep 2020',
    location: 'Dhaka, Bangladesh',
    projects: 'Welltravel',
    points: [
      'Developed and maintained backend APIs using Ruby for a travel booking platform (Welltravel).',
      'Peer-reviewed Pull Requests across the development team.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="timeline__item fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="timeline__dot" />
            <div className="timeline__card">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">{exp.role}</h3>
                  <p className="timeline__company">{exp.company}</p>
                  <p className="timeline__projects">Projects: {exp.projects}</p>
                </div>
                <div className="timeline__meta">
                  <span className="timeline__period">{exp.period}</span>
                  <span className="timeline__location">{exp.location}</span>
                </div>
              </div>
              <ul className="timeline__points">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

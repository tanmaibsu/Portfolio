import React from 'react'
import './Skills.css'

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'Ruby', 'Java', 'JavaScript', 'TypeScript', 'C++'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn'],
  },
  {
    title: 'Data',
    skills: ['PostgreSQL', 'MySQL', 'NoSQL'],
  },
  {
    title: 'Web & UI',
    skills: ['Ruby on Rails', 'Django', 'ReactJS', 'HTML', 'CSS'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'S3', 'Docker', 'ElasticSearch', 'CI/CD (CircleCI)'],
  },
  {
    title: 'Practices',
    skills: ['Git', 'Unix', 'Agile', 'OOP', 'TDD', 'Debugging'],
  },
]

function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <div key={i} className="skill-category fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <h3 className="skill-category__title">{cat.title}</h3>
            <div className="skill-category__tags">
              {cat.skills.map((skill, j) => (
                <span key={j} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

import React from 'react'
import './Education.css'

const education = [
  {
    school: 'Boise State University',
    degree: 'PhD, Computer Science',
    period: 'Aug 2023 - Present',
    location: 'Boise, ID, USA',
    gpa: '3.893',
    coursework: [
      'Design and Analysis of Algorithms',
      'Machine Learning',
      'Artificial Intelligence',
      'Data Science',
      'Advanced Software Engineering',
      'Operating Systems',
      'Advanced Databases',
      'Large Scale Data Analysis',
    ],
  },
  {
    school: 'Khulna University',
    degree: "Bachelor's, Computer Science",
    period: 'Jan 2015 - Jan 2019',
    location: 'Khulna, Bangladesh',
    gpa: '3.40',
    coursework: [
      'Structured Programming Languages',
      'Object Oriented Programming',
      'Data Structures',
    ],
  },
]

function Education() {
  return (
    <section id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {education.map((edu, i) => (
          <div key={i} className="education-card fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="education-card__header">
              <div>
                <h3 className="education-card__school">{edu.school}</h3>
                <p className="education-card__degree">{edu.degree}</p>
              </div>
              <div className="education-card__meta">
                <span className="education-card__period">{edu.period}</span>
                <span className="education-card__location">{edu.location}</span>
              </div>
            </div>
            <p className="education-card__gpa">GPA: {edu.gpa}</p>
            <div className="education-card__courses">
              {edu.coursework.map((course, j) => (
                <span key={j} className="education-card__course-tag">{course}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education

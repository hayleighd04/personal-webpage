import { Link } from 'react-router-dom'
import styles from './About.module.css'

const interests = [
  { icon: '🧠', label: 'Human-Computer Interaction & UX Design' },
  { icon: '🔬', label: 'Research & data-driven problem solving' },
  { icon: '💡', label: 'Psychology & cognitive science' },
  { icon: '⚙️', label: 'Systems that are intuitive to use' },
  { icon: '🌱', label: 'Bridging engineering & human behavior' },
]

const education = [
  {
    school: 'NC State University',
    degree: 'M.S. Industrial Engineering',
    dates: 'Aug 2026 – May 2028',
    detail: 'Incoming graduate student',
  },
  {
    school: 'NC State University',
    degree: 'B.S. Computer Science',
    dates: 'Aug 2022 – May 2026',
    detail: 'Cognitive Science Minor · Psychology Minor · GPA 3.68',
  },
]

export default function About() {
  return (
    <div className="page">
      <div className="page-content">
        <div className="reveal">
          <p className="page-eyebrow">Who I Am</p>
          <h1 className="page-title">About Me</h1>
          <hr className="page-divider" />
        </div>

        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={`${styles.bio} reveal`}>
              <p>
                I'm a Computer Science graduate from NC State University, now beginning
                my Master's in Industrial Engineering — a path that reflects my belief
                that the best systems are built with people at the center.
              </p>
              <p>
                My undergrad gave me a strong technical foundation paired with a deep
                curiosity about the mind through Cognitive Science and Psychology minors.
                I love asking: how do people think, and how can technology meet them there?
              </p>
              <p>
                From building ML pipelines for biomedical research at UMass Lowell to
                designing full-stack platforms in Agile teams, I've learned that the most
                meaningful work sits at the intersection of engineering and empathy.
              </p>
              <div className={styles.actions}>
                <a href="/Daughtrey_Resume_MS.pdf" className="btn btn-primary" download>
                  Download Resume
                </a>
                <Link to="/projects" className="btn btn-outline">View Projects</Link>
              </div>
            </div>

            <div className={`${styles.education} reveal`}>
              <h3 className={styles.subheading}>Education</h3>
              {education.map(({ school, degree, dates, detail }) => (
                <div key={degree} className={styles.eduItem}>
                  <div className={styles.eduDates}>{dates}</div>
                  <div>
                    <div className={styles.eduDegree}>{degree}</div>
                    <div className={styles.eduSchool}>{school}</div>
                    <div className={styles.eduDetail}>{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={`card reveal`}>
              <h3 className={styles.subheading} style={{ marginBottom: '1.2rem' }}>What Drives Me</h3>
              {interests.map(({ icon, label }) => (
                <div key={label} className={styles.interestItem}>
                  <span className={styles.icon}>{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

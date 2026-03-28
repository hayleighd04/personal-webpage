import { Link } from 'react-router-dom'
import styles from './About.module.css'

// Use public folder assets
const aboutPfp = '/about_pfp.jpg' // move about_pfp.jpg to /public
const resumePdf = '/Daughtrey_Resume_MS.pdf' // move PDF to /public

const interests = [
  { icon: '🖥️', label: 'UX Design & Human Factors Engineering' },
  { icon: '📋', label: 'Product Management & strategy' },
  { icon: '🧠', label: 'Understanding people, users & behavior' },
  { icon: '📖', label: 'Reading books' },
  { icon: '🥾', label: 'Hiking & spending time outdoors' },
  { icon: '🏈', label: 'Watching sports' },
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
            <div className={`${styles.headshotWrap} reveal`}>
              <div className={styles.headshot}>
                <svg width="200" height="200" viewBox="0 0 200 200">
                  <defs>
                    <clipPath id="pfpClip">
                      <circle cx="100" cy="100" r="90" />
                    </clipPath>
                  </defs>
                  <image
                    href={`${import.meta.env.BASE_URL}about_pfp.jpg`}
                    x="10"
                    y="10"
                    width="180"
                    height="180"
                    clipPath="url(#pfpClip)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </div>
            </div>

            <div className={`${styles.bio} reveal`}>
              <p>
                I'm a Computer Science undergraduate at NC State University with a passion for building
                technology that genuinely works for people. My interests sit at the intersection of
                UX design, human factors, machine learning, and product management.
              </p>
              <p>
                Alongside my technical coursework, I've pursued Cognitive Science and Psychology minors
                to better understand the people who use a product.
              </p>
              <p>
                When I'm not in front of a screen, you'll find me with a book, hiking, or watching sports.
              </p>
              <div className={styles.actions}>
                <a href={`${import.meta.env.BASE_URL}Daughtrey_Resume_MS.pdf`} className="btn btn-primary" download>
                  Download Resume
                </a>
                <Link to="/projects" className="btn btn-outline">
                  View Projects
                </Link>
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
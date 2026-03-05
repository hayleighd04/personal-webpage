import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const tags = ['UX & HCI', 'Machine Learning', 'Full-Stack Dev', 'Psychology', 'Research']

const stats = [
  { num: '3.68', label: 'GPA' },
  { num: '6+',   label: 'Languages' },
  { num: 'NSF',  label: 'Research' },
  { num: '3+',   label: 'Projects' },
]

export default function Home() {
  return (
    <div className={`page ${styles.homePage}`}>
      <div className={styles.glow1} />
      <div className={styles.glow2} />
      <div className={styles.glow3} />

      <div className={styles.hero}>
        <div className={styles.text}>
          <span className={`page-eyebrow ${styles.eyebrow}`}>CS · IE · UX</span>
          <h1 className={styles.heading}>
            Hi, I'm <span className={styles.gradientName}>Hayleigh</span> —<br />
            I build things that<br />
            <em className={styles.italic}>work for people.</em>
          </h1>
          <p className={styles.desc}>
            Computer science grad from NC State, now pursuing a Master's in
            Industrial Engineering. I care about the intersection of technology,
            human behavior, and design.
          </p>
          <div className={styles.tags}>
            {tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <div className={styles.ctas}>
            <Link to="/projects" className="btn btn-primary">See My Work</Link>
            <Link to="/contact"  className="btn btn-outline">Get In Touch</Link>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.avatar}>H</div>
          <p className={styles.cardName}>Hayleigh Daughtrey</p>
          <p className={styles.cardSub}>NC State · Raleigh, NC</p>
          <div className={styles.statsGrid}>
            {stats.map(({ num, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statNum}>{num}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

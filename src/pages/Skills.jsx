import styles from './Skills.module.css'

const skillGroups = [
  { icon: '💻', label: 'Languages',           skills: ['Java', 'JavaScript', 'Python', 'C/C++', 'MATLAB', 'HTML/CSS', 'SQL', 'R'] },
  { icon: '🛠',  label: 'Frameworks & Tools',  skills: ['React', 'Node.js', 'Git', 'Docker', 'Jenkins', 'Postman', 'GitHub Actions', 'JUnit', 'Maven'] },
  { icon: '🎨', label: 'Design & Software',   skills: ['Figma', 'AutoCAD', 'SolidWorks', 'Adobe Creative Suite'] },
  { icon: '📚', label: 'Areas of Study',      skills: ['HCI', 'UX Design', 'Machine Learning', 'AI', 'Cognitive Science', 'Psychology', 'Data Analysis', 'Agile', 'Software Engineering'] },
]

const experience = [
  {
    dates: 'May – Aug 2025',
    role: 'Undergraduate Research Assistant',
    org: 'National Science Foundation · UMass Lowell',
    desc: 'Built a MATLAB GUI to simulate spectroscopy signals for biomedical ML research evaluating mitochondrial function. Generated tissue absorbance datasets used in model training.',
    color: 'blue',
  },
  {
    dates: 'Aug 2023 – Present',
    role: 'Technology & Innovation Officer',
    org: 'Helping Hand Project · NC State',
    desc: 'Managed 3D printing operations, produced parts for assistive technology projects, and provided technical support to club members on CAD and fabrication.',
    color: 'purple',
  },
  {
    dates: 'Jul 2021 – Aug 2024',
    role: 'AutoCAD Technician',
    org: 'Tyndall Engineering & Design · Garner, NC',
    desc: 'Designed residential additions and small buildings, created technical drawings for structural engineering plans, and organized project documentation systems.',
    color: 'pink',
  },
]

const colorMap = { purple: 'var(--purple)', blue: 'var(--blue)', pink: 'var(--pink)' }

export default function Skills() {
  return (
    <div className="page">
      <div className="page-content">
        <div className="reveal">
          <p className="page-eyebrow">What I Know</p>
          <h1 className="page-title">Skills & Experience</h1>
          <hr className="page-divider" />
        </div>

        <div className={styles.skillsGrid}>
          {skillGroups.map(({ icon, label, skills }) => (
            <div key={label} className={`card ${styles.group} reveal`}>
              <h4 className={styles.groupTitle}>{icon} {label}</h4>
              <div className={styles.chips}>
                {skills.map((s) => <span key={s} className="skill-chip">{s}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: '3.5rem' }}>
          <p className="page-eyebrow">Where I've Been</p>
          <h2 className={styles.expHeading}>Experience</h2>
        </div>

        <div className={styles.timeline}>
          {experience.map(({ dates, role, org, desc, color }) => (
            <div key={role} className={`${styles.expItem} reveal`}>
              <div className={styles.expDot} style={{ background: colorMap[color] }} />
              <div className={styles.expDates}>{dates}</div>
              <div className={styles.expBody}>
                <div className={styles.expRole}>{role}</div>
                <div className={styles.expOrg} style={{ color: colorMap[color] }}>{org}</div>
                <div className={styles.expDesc}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

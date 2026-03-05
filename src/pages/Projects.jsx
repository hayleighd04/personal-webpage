import styles from './Projects.module.css'

// ── ADD NEW PROJECTS HERE ──
const projects = [
  {
    emoji: '🔬',
    tag: 'NSF Research · UMass Lowell',
    title: 'Tissue Optical Readout ML Dataset',
    desc: 'Developed a MATLAB GUI to simulate physiologically relevant spectroscopy signals and generate absorbance data from tissue models — creating training datasets for machine learning models that evaluate mitochondrial function.',
    stack: ['MATLAB', 'Machine Learning', 'GUI Design', 'Biomedical Data'],
    link: null,
    accent: 'blue',
  },
  {
    emoji: '🤖',
    tag: 'In Progress · Class Project',
    title: 'NCSU Advising Chatbot',
    desc: 'Building an AI-powered chatbot for NC State, designed to support 40,000+ students during enrollment. Features a RAG pipeline with intent-based query routing, vector search, NCSU authentication, and automated data scraping with incremental embedding updates.',
    stack: ['Python', 'AWS', 'Qdrant', 'RAG / LLMs', 'Vector Search'],
    link: null,
    accent: 'purple',
  },
  {
    emoji: '☕',
    tag: 'Full-Stack · Class Project',
    title: 'Coffee Maker Platform',
    desc: 'Full-stack web platform for cafe order management — Java/SQL backend with React/Node.js frontend supporting admin, staff, and customer views. Built with a team of 6 using Agile, Figma wireframes, JUnit testing, and Jenkins CI/CD.',
    stack: ['Java', 'SQL', 'React', 'Node.js', 'Jenkins', 'Figma'],
    link: null,
    accent: 'pink',
  },
]

const accentMap = {
  purple: 'var(--purple)',
  blue:   'var(--blue)',
  pink:   'var(--pink)',
}

export default function Projects() {
  return (
    <div className="page">
      <div className="page-content">
        <div className="reveal">
          <p className="page-eyebrow">What I've Built</p>
          <h1 className="page-title">Projects</h1>
          <hr className="page-divider" />
        </div>

        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.title} className={`${styles.card} reveal`} style={{ '--accent': accentMap[p.accent] }}>
              <div className={styles.topBar} />
              <div className={styles.emoji}>{p.emoji}</div>
              <div className={styles.tag}>{p.tag}</div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.stack}>
                {p.stack.map((s) => <span key={s} className="stack-chip">{s}</span>)}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className={styles.link}>
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

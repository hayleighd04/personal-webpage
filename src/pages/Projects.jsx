import styles from './Projects.module.css'

const projects = [
  {
    emoji: '🤖',
    tag: 'In Progress · Class Project',
    title: 'NCSU Advising Chatbot',
    dates: 'Jan 2026 – Present',
    desc: 'Building an AI-powered chatbot for NC State, designed to support 40,000+ students during enrollment. Features a RAG pipeline with intent-based query routing, vector search, and metadata filtering, NCSU authentication integration, audit logging, and automated data scraping with document hashing and incremental embedding updates. Meeting weekly with project sponsors to align on budget, design, and system constraints.',
    bullets: [
      'RAG pipeline with intent-based query routing, vector search & metadata filtering',
      'NCSU authentication integration and audit logging for access control',
      'Automated data scraping with document hashing & incremental embedding updates',
      'Weekly sponsor meetings to align on budget, design & system constraints',
    ],
    stack: ['Python', 'AWS', 'Qdrant', 'RAG / LLMs', 'Vector Search'],
    link: null,
    accent: 'purple',
    screenshot: null,
  },
  {
    emoji: '☕',
    tag: 'Full-Stack · Class Project',
    title: 'Coffee Maker Platform',
    dates: 'Jan 2025 – May 2025',
    desc: 'Full-stack web platform for café order management with Java/SQL backend and React/Node.js frontend, supporting admin, staff, and customer order pages.',
    bullets: [
      'Java/SQL backend + React/Node.js frontend with three role-based views',
      'API endpoints for order processing, customer notifications & inventory management',
      'Team of 6 using Agile, Figma wireframes, JUnit tests & Jenkins CI/CD',
    ],
    stack: ['Java', 'SQL', 'React', 'Node.js', 'Jenkins', 'Figma', 'GitHub Actions'],
    link: null,
    accent: 'purple',
    screenshot: null,
  },
  {
    emoji: '🔬',
    tag: 'NSF Research · UMass Lowell',
    title: 'Tissue Optical Readout ML Dataset',
    dates: 'May 2025 – Aug 2025',
    desc: 'Developed a MATLAB GUI to simulate physiologically relevant spectroscopy signals and generate absorbance data from tissue models — creating training datasets for machine learning models that evaluate mitochondrial function.',
    bullets: [
      'MATLAB GUI for simulating physiologically relevant spectroscopy signals',
      'Generated absorbance datasets from tissue models for ML model training',
      'Research focused on evaluating mitochondrial function non-invasively',
    ],
    stack: ['MATLAB', 'Machine Learning', 'GUI Design', 'Biomedical Data'],
    link: null,
    accent: 'purple',
    screenshot: null,
  },
  // ── ADD MORE PROJECTS BELOW ──
  // {
  //   emoji: '🚀',
  //   tag: 'Tag · Context',
  //   title: 'Project Name',
  //   dates: 'Month Year – Month Year',
  //   desc: 'Short description of the project.',
  //   bullets: ['Bullet 1', 'Bullet 2', 'Bullet 3'],
  //   stack: ['Tech1', 'Tech2'],
  //   link: null,          // or 'https://github.com/...'
  //   accent: 'purple',   // 'purple' | 'blue' | 'pink'
  //   screenshot: null,   // or '/screenshots/project.png'
  // },
]

const accentMap = {
  purple: 'rgba(144,0,179,0.8)',
  blue:   'rgba(100,149,237,0.8)',
  pink:   'rgba(244,114,182,0.8)',
}

const accentBg = {
  purple: 'rgba(144,0,179,0.08)',
  blue:   'rgba(100,149,237,0.08)',
  pink:   'rgba(244,114,182,0.08)',
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

        <div className={styles.list}>
          {projects.map((p) => (
            <div
              key={p.title}
              className={`${styles.card} reveal`}
              style={{ '--accent': accentMap[p.accent], '--accentBg': accentBg[p.accent] }}
            >
              <div className={styles.topBar} />

              <div className={styles.cardInner}>
                {/* Left: text content */}
                <div className={styles.cardText}>
                  <div className={styles.metaRow}>
                    <span className={styles.emoji}>{p.emoji}</span>
                    <span className={styles.tag}>{p.tag}</span>
                    <span className={styles.dates}>{p.dates}</span>
                  </div>

                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.desc}>{p.desc}</p>

                  <ul className={styles.bullets}>
                    {p.bullets.map((b) => (
                      <li key={b} className={styles.bullet}>
                        <span className={styles.bulletDot}>▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.stack}>
                    {p.stack.map((s) => <span key={s} className="stack-chip">{s}</span>)}
                  </div>

                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className={styles.link}>
                      View Project →
                    </a>
                  )}
                </div>

                {/* Right: screenshot or placeholder */}
                <div className={styles.screenshotWrap}>
                  {p.screenshot ? (
                    <img src={p.screenshot} alt={`${p.title} screenshot`} className={styles.screenshot} />
                  ) : (
                    <div className={styles.screenshotPlaceholder}>
                      <div className={styles.placeholderBar}/>
                      <div className={styles.placeholderBar} style={{width:'70%'}}/>
                      <div className={styles.placeholderBlock}/>
                      <div className={styles.placeholderRow}>
                        <div className={styles.placeholderChip}/>
                        <div className={styles.placeholderChip}/>
                        <div className={styles.placeholderChip}/>
                      </div>
                      <span className={styles.placeholderLabel}>Screenshot coming soon</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
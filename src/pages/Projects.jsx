import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { projects } from './ProjectDetail'
import styles from './Projects.module.css'

const CATEGORIES = [
  { key: 'all',          label: 'All Projects', icon: '✦' },
  { key: 'personal',     label: 'Personal',     icon: '🌱' },
  { key: 'academic',     label: 'Academic',     icon: '🎓' },
  { key: 'professional', label: 'Professional', icon: '💼' },
]

const accentRgb = {
  purple: 'rgba(144,0,179,0.85)',
  blue:   'rgba(100,149,237,0.85)',
  pink:   'rgba(244,114,182,0.85)',
}

const accentBg = {
  purple: 'rgba(144,0,179,0.07)',
  blue:   'rgba(100,149,237,0.07)',
  pink:   'rgba(244,114,182,0.07)',
}

export default function Projects() {
  const navigate = useNavigate()
  const [active, setActive] = useState('all')

  const visible = active === 'all' ? projects : projects.filter(p => p.category === active)
  const count = projects.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1
    return acc
  }, {})

  return (
    <div className="page">
      <div className="page-content">

        {/* Header — reveal only on first page load, not affected by filter */}
        <div className="reveal">
          <p className="page-eyebrow">What I've Built</p>
          <h1 className="page-title">Projects</h1>
          <hr className="page-divider" />
        </div>

        {/* Filter bar — reveal only on first load */}
        <div className={`${styles.filterRow} reveal`}>
          {CATEGORIES.map(({ key, label, icon }) => {
            const isActive = active === key
            const cnt = key === 'all' ? projects.length : (count[key] || 0)
            return (
              <button
                key={key}
                className={`${styles.filterBtn} ${isActive ? styles.filterActive : ''}`}
                onClick={() => setActive(key)}
                aria-pressed={isActive}
              >
                <span className={styles.filterIcon}>{icon}</span>
                <span>{label}</span>
                <span className={`${styles.filterCount} ${isActive ? styles.filterCountActive : ''}`}>
                  {cnt}
                </span>
              </button>
            )
          })}
        </div>

        {/* Cards — NO reveal class; always visible, animate in via CSS only */}
        <div className={styles.list}>
          {visible.length === 0 ? (
            <div className={styles.empty}>No projects in this category yet.</div>
          ) : (
            visible.map((p, i) => (
              <article
                key={p.id}
                className={styles.card}
                style={{
                  '--accent': accentRgb[p.accent],
                  '--accentBg': accentBg[p.accent],
                  animationDelay: `${i * 60}ms`,
                }}
                onClick={() => navigate(`/projects/${p.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && navigate(`/projects/${p.id}`)}
                aria-label={`View details for ${p.title}`}
              >
                <div className={styles.topBar} />

                <div className={styles.cardInner}>
                  <div className={styles.cardText}>
                    <div className={styles.metaRow}>
                      <span className={styles.emoji}>{p.emoji}</span>
                      <span className={styles.tag}>{p.tag}</span>
                      <span className={styles.dates}>{p.dates}</span>
                    </div>

                    <h3 className={styles.title}>{p.title}</h3>
                    <p className={styles.desc}>{p.shortDesc}</p>

                    <ul className={styles.bullets}>
                      {p.highlights.slice(0, 3).map((b) => (
                        <li key={b} className={styles.bullet}>
                          <span className={styles.bulletDot}>▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={styles.stack}>
                      {p.stack.map((s) => <span key={s} className="stack-chip">{s}</span>)}
                    </div>

                    <div className={styles.cta}>
                      <span className={styles.ctaLink} style={{ color: accentRgb[p.accent] }}>
                        View Details →
                      </span>
                    </div>
                  </div>

                  <div className={styles.screenshotWrap}>
                    {p.images && p.images.length > 0 ? (
                      <img src={p.images[0].src} alt={`${p.title} screenshot`} className={styles.screenshot} />
                    ) : (
                      <div className={styles.screenshotPlaceholder}>
                        <div className={styles.placeholderBar} />
                        <div className={styles.placeholderBar} style={{ width: '70%' }} />
                        <div className={styles.placeholderBlock} />
                        <div className={styles.placeholderRow}>
                          <div className={styles.placeholderChip} />
                          <div className={styles.placeholderChip} />
                          <div className={styles.placeholderChip} />
                        </div>
                        <span className={styles.placeholderLabel}>Screenshot coming soon</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

      </div>
    </div>
  )
}
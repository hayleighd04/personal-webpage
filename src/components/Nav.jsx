import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import styles from './Nav.module.css'

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/projects', label: 'Projects' },
  { to: '/skills',   label: 'Skills'   },
  { to: '/contact',  label: 'Contact'  },
]

export default function Nav() {
  const { isDark, toggle } = useTheme()

  return (
    <nav className={`${styles.nav} ${isDark ? styles.dark : styles.light}`}>
      <NavLink to="/" className={styles.logo}>HD</NavLink>

      <ul className={styles.links}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Theme toggle */}
      <button
        className={styles.toggle}
        onClick={toggle}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? '🌿 Nature mode' : '🌌 Space mode'}
      >
        <div className={`${styles.toggleTrack} ${isDark ? styles.trackDark : styles.trackLight}`}>
          <span className={styles.toggleIcon}>{isDark ? '🌌' : '🌿'}</span>
          <div className={`${styles.toggleThumb} ${isDark ? styles.thumbDark : styles.thumbLight}`} />
        </div>
      </button>
    </nav>
  )
}

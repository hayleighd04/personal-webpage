import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Built by <span className={styles.name}>Hayleigh Daughtrey</span> · {new Date().getFullYear()}</p>
    </footer>
  )
}
